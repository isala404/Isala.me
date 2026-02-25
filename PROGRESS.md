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

Added /note page for shareable plain text notes.
- Created `src/pages/note.astro` with simple textarea editor
- Zstd compression stores content in URL hash for sharing
- Dark mode toggle with system preference detection
- Native Web Share API, falls back to clipboard
- Cmd/Ctrl+A only selects editor text
- Added zstd-codec dependency and type declarations
