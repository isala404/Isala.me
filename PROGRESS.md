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

Added /note page for shareable plain text notes.
- Created `src/pages/note.astro` with simple textarea editor
- Zstd compression stores content in URL hash for sharing
- Dark mode toggle with system preference detection
- Native Web Share API, falls back to clipboard
- Cmd/Ctrl+A only selects editor text
- Added zstd-codec dependency and type declarations
