Tooling
- Stack: Astro, TypeScript, TailwindCSS, MDX
- Package manager: bun
- Build command: bun run build
- Dev command: bun run dev
- Deployment: nginx serving static files from dist/

Architecture
- Static site generator with content collections (blog, notes)
- BaseLayout.astro handles meta tags, canonical URLs, structured data
- sitemap.xml.ts generates dynamic sitemap from content collections
- nginx.conf defines caching, security headers, routing rules
- Experience data lives in src/content/index.mdx with companies containing positions arrays (newest-first roles)

Preferences
- Trailing slashes on all page URLs (/about/ not /about)
- No trailing slashes on file URLs (/llms.txt not /llms.txt/)
- Canonical URLs must match sitemap URLs exactly

SEO Notes
- Structured data via `structuredData` prop on BaseLayout, rendered as JSON-LD via Fragment set:html
- Astro script tags get bundled by default; use Fragment+set:html to inject raw script tags in head
- Google Search Console monitors for canonical/sitemap mismatches
- "Alternate page with proper canonical tag" means URL mismatch between sitemap and canonical
- Two-tier tagging: display tags (UI) and seoTags (meta keywords only)
- Each article has 4+ specific tags, blog index shows top 8 only
- Individual article pages show all tags
- Moltbot rebrand keeps original blog slug; first mention uses "formerly" phrasing

Apps
- Apps section on home page auto-discovers pages from src/pages/apps/*.astro
- Each app exports `app` object with title, description, icon (Lucide icon name string), color (pastel hex)
- Icon name must match a key in iconMap in index.astro (add new Lucide imports when adding apps)
- Drag-and-drop reorder logic in public/scripts/easter-eggs.js, order persisted in localStorage
- Grid: 1 app = 1 col, 2-3 = 2 cols, 4+ = 3 cols. Last odd tile centered via CSS.
- Read Aloud app: Kokoro TTS (kokoro-js@1.2.1), Web Worker, WebGPU/WASM fallback, IndexedDB persistence (7-day expiry)
- Sub-pages should match site layout: max-w-content mx-auto px-6 py-16, back link uses arrow-link with &larr;

Prefetch
- Astro prefetch enabled with prefetchAll: true, defaultStrategy: 'load'
- Preloads all internal links after page fully loads

Offline / Service Worker
- Custom SW generated at build time via src/pages/sw.js.ts (Astro static endpoint)
- Build version stamped via Date.now().toString(36), triggers browser update detection on each deploy
- Cache strategy: pages=network-first, _astro/=cache-first, static=stale-while-revalidate, CDN=stale-while-revalidate, HuggingFace models=cache-first in unversioned cache
- Models cache (models-v1) survives deploys, only invalidated when CDN URL changes
- On new SW activation: all versioned caches purged, clients.claim() + skipWaiting() for immediate takeover
- controllerchange event triggers page reload (skipped on first-ever install)
- nginx serves sw.js with no-cache, no-store, must-revalidate
- PWA manifest at public/manifest.json
- Offline fallback at public/offline.html (precached on SW install)
