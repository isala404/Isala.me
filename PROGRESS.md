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
