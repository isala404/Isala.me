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

Prefetch
- Astro prefetch enabled with prefetchAll: true, defaultStrategy: 'load'
- Preloads all internal links after page fully loads
