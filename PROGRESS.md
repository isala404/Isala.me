Configured Astro prefetch to preload pages after initial load.
- Added `prefetch: { prefetchAll: true, defaultStrategy: 'load' }` to `astro.config.mjs`
- Pages preload in background after main page fully renders

Revamped tagging system with display tags and hidden SEO tags.
- Added `seoTags` field to blog and notes schemas in `src/content/config.ts`
- Updated BaseLayout.astro to render seoTags as `<meta name="keywords">` header
- Each article has 4+ specific tags (kubernetes, ebpf, llm, rust, rag, pwa, etc.)
- Blog index shows only top 8 tags by frequency, individual articles show all
- SEO tags are hidden, long-tail keywords for search ranking
- Updated all 7 blog posts and 2 notes with new tag structure

Fixed trailing slash mismatch causing Google Search Console "Alternate page with proper canonical tag" errors.
- Added `trailingSlash: 'always'` to `astro.config.mjs`
- Updated `src/pages/sitemap.xml.ts` to use trailing slashes on all page URLs
- Added nginx redirect rule in `nginx.conf` to 301 redirect `/path` to `/path/`
- Canonical URLs and sitemap URLs now consistently use trailing slashes

Updated ClawdBot Raspberry Pi article to Moltbot/MoltHub branding for SEO.
- Updated `src/content/blog/clawdbot-raspberry-pi.mdx` to use Moltbot name, new domain, and MoltHub (formerly ClawdHub) phrasing while preserving slug and CLI commands.

Restored ClawdBot SEO metadata for Moltbot rebrand.
- Updated `src/content/blog/clawdbot-raspberry-pi.mdx` description and seoTags to include "formerly ClawdBot" and ClawdBot keywords.

Fixed home page experience tenure display for multi-role companies.
- Updated `src/pages/index.astro` to show the earliest company start date with the current role's end date.

Fixed security note spacing in ClawdBot article.
- Removed indentation whitespace inside HTML div in `src/content/blog/clawdbot-raspberry-pi.mdx`

Added Apps section on home page with auto-discovery grid and 3 sample apps.
- Created `src/pages/apps/` directory with pomodoro, coin-flip, and dice apps
- Added auto-discovery via `import.meta.glob` in `src/pages/index.astro` (lines 60-71)
- Each app exports `app` metadata (title, description, icon, color) for the grid
- Tiles use Lucide icons, pastel backgrounds, hover tooltips, drag-and-drop reorder
- Drag logic in `public/scripts/easter-eggs.js`, order persisted in localStorage
- Grid responsive: odd last tile centered via CSS grid spanning
- Added app tile styles in `src/styles/global.css` (APP TILES section)

Added page-specific SEO structured data and app sitemap entries.
- Moved Person JSON-LD from BaseLayout to index.astro, added `structuredData` prop to BaseLayout
- Each page type now has its own JSON-LD: Person (home), AboutPage (about), ProfilePage (experience), CollectionPage (projects/talks/blog/notes indexes), Article (blog/note slugs), WebApplication (apps)
- Added description, seoTags, and WebApplication structured data to all 3 app pages
- Auto-discovers apps in `src/pages/sitemap.xml.ts` via import.meta.glob, adds with priority 0.5

Replaced all apps with Read Aloud TTS reader powered by Kokoro TTS.
- Deleted `src/pages/apps/pomodoro.astro`, `coin-flip.astro`, `dice.astro`
- Created `src/pages/apps/read-aloud.astro` with browser-based text-to-speech
- Kokoro TTS via Web Worker (WebGPU/WASM fallback), streaming chunk playback
- Model download progress with bytes shown during loading phase
- Sentence-level text highlighting, click-to-jump, auto-scroll
- Player controls: play/pause, skip 15s, speed (0.75x-2x), scrubber seek
- IndexedDB persistence: audio chunks, position, speed saved across refreshes (7-day expiry)
- Updated `src/pages/index.astro` icon imports (removed Timer/Coins/Dices, added AudioLines)
- SEO: Kokoro TTS keywords in seoTags, WebApplication structured data

Added /note page for shareable plain text notes.
- Created `src/pages/note.astro` with simple textarea editor
- Zstd compression stores content in URL hash for sharing
- Dark mode toggle with system preference detection
- Native Web Share API, falls back to clipboard
- Cmd/Ctrl+A only selects editor text
- Added zstd-codec dependency and type declarations

Added offline-first service worker with read-through caching.
- Created `src/pages/sw.js.ts` as Astro static endpoint with build-time version stamp
- Pages use network-first (fresh when online, cached offline), _astro/ hashed assets use cache-first (immutable)
- Static assets and CDN (fonts, kokoro-js) use stale-while-revalidate for speed
- HuggingFace ONNX model files use cache-first in unversioned `models-v1` cache (lazy, only cached when Read Aloud opened)
- On deploy: new SW version triggers activation, purges all versioned caches, auto-reloads page
- Models cache persists across deploys since those URLs are CDN-versioned
- Created `public/manifest.json` for PWA installability
- Updated `src/layouts/BaseLayout.astro`: replaced SW unregistration with registration + controllerchange reload
- Updated `nginx.conf`: added no-cache rule for sw.js so browser always checks for updates
- Offline fallback to `public/offline.html` (precached on install)

Enable background cache warmup for static pages using sitemap.
- Updated `src/pages/sw.js.ts` to fetch `/sitemap.xml` on service worker activation, parse same-origin page URLs, and prefill page cache in bounded batches.
