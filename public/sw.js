const CACHE_NAME = 'isala-me-v2';
const OFFLINE_URL = '/offline.html';

const PRECACHE_ASSETS = [
  '/',
  '/about',
  '/experience',
  '/blog',
  '/notes',
  '/projects',
  '/offline.html',
  '/dog-still.png',
  '/dog-bark.png',
  '/scripts/easter-eggs.js',
  '/favicon.svg',
  '/manifest.json',
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches and take control immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - optimized caching strategies
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip non-same-origin requests (let browser handle third-party)
  if (url.origin !== location.origin) return;

  // Cache-first for static assets (images, scripts, styles with hash)
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  // Stale-while-revalidate for HTML pages
  if (event.request.mode === 'navigate' || url.pathname.endsWith('/') || isHTMLPage(url.pathname)) {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }

  // Network-first for other requests
  event.respondWith(networkFirst(event.request));
});

// Check if URL is a static asset
function isStaticAsset(pathname) {
  return (
    pathname.startsWith('/_astro/') ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|eot)$/) ||
    pathname.includes('/scripts/')
  );
}

// Check if URL is an HTML page
function isHTMLPage(pathname) {
  const pages = ['/', '/about', '/experience', '/blog', '/notes', '/projects', '/talks'];
  return pages.includes(pathname) || pathname.startsWith('/blog/') || pathname.startsWith('/notes/');
}

// Cache-first strategy - best for static assets
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

// Stale-while-revalidate - best for HTML pages
async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);

  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        const cache = caches.open(CACHE_NAME);
        cache.then((c) => c.put(request, response.clone()));
      }
      return response;
    })
    .catch(() => null);

  // Return cached immediately if available, otherwise wait for network
  if (cached) {
    // Revalidate in background
    fetchPromise;
    return cached;
  }

  // No cache, wait for network
  const networkResponse = await fetchPromise;
  if (networkResponse) return networkResponse;

  // Fallback to offline page for navigation
  if (request.mode === 'navigate') {
    return caches.match(OFFLINE_URL);
  }

  return new Response('Offline', { status: 503 });
}

// Network-first strategy
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;

    if (request.mode === 'navigate') {
      return caches.match(OFFLINE_URL);
    }
    return new Response('Offline', { status: 503 });
  }
}

// Handle skip waiting message
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
