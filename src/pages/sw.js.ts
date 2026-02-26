import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const BUILD_VERSION = Date.now().toString(36);

  const sw = `// build: ${BUILD_VERSION}
const VERSION = '${BUILD_VERSION}';

const CACHES = {
  pages: 'pages-' + VERSION,
  assets: 'assets-' + VERSION,
  static: 'static-' + VERSION,
  cdn: 'cdn-' + VERSION,
  models: 'models-v1',
};

const ALLOWED_CACHES = new Set(Object.values(CACHES));
const OFFLINE_URL = '/offline.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHES.pages).then((cache) => cache.add(OFFLINE_URL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => !ALLOWED_CACHES.has(k)).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
      .then(() => warmPagesCache())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return;

  if (url.hostname === 'umami.tallisa.dev') return;

  // HuggingFace model files: cache-first, unversioned (survives deploys)
  if (url.hostname.includes('huggingface.co') || url.hostname.includes('hf.co')) {
    event.respondWith(cacheFirst(request, CACHES.models));
    return;
  }

  // CDN: stale-while-revalidate
  if (
    url.hostname === 'cdn.jsdelivr.net' ||
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com'
  ) {
    event.respondWith(staleWhileRevalidate(request, CACHES.cdn));
    return;
  }

  // non-same-origin: passthrough
  if (url.origin !== self.location.origin) return;

  // hashed Astro assets: cache-first (immutable, URL changes per build)
  if (url.pathname.startsWith('/_astro/')) {
    event.respondWith(cacheFirst(request, CACHES.assets));
    return;
  }

  // navigation / HTML: network-first
  if (request.destination === 'document' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request, CACHES.pages));
    return;
  }

  // everything else: stale-while-revalidate
  event.respondWith(staleWhileRevalidate(request, CACHES.static));
});

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok || response.type === 'opaque') {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Network error', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    return caches.match(OFFLINE_URL).then((r) => r || new Response('Offline', { status: 503 }));
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const networkResponse = fetch(request)
    .then((response) => {
      if (response.ok || response.type === 'opaque') {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  return cached || (await networkResponse) || new Response('Offline', { status: 503 });
}

async function warmPagesCache() {
  try {
    const sitemapResponse = await fetch('/sitemap.xml', { cache: 'no-store' });
    if (!sitemapResponse.ok) return;

    const sitemap = await sitemapResponse.text();
    const matches = [...sitemap.matchAll(/<loc>(.*?)<\\/loc>/g)];
    if (!matches.length) return;

    const pageCache = await caches.open(CACHES.pages);
    await Promise.allSettled(
      matches
        .map(([, loc]) => {
          const url = new URL(loc);
          return url.origin === self.location.origin ? url.pathname : null;
        })
        .filter(Boolean)
        .map(async (pathname) => {
          const response = await fetch(pathname, { cache: 'no-store' });
          if (!response.ok) return;
          await pageCache.put(pathname, response.clone());
        })
    );
  } catch {
    // ignore warmup failures
  }
}
`;

  return new Response(sw, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'no-cache',
    },
  });
};
