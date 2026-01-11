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

Preferences
- Trailing slashes on all page URLs (/about/ not /about)
- No trailing slashes on file URLs (/llms.txt not /llms.txt/)
- Canonical URLs must match sitemap URLs exactly

SEO Notes
- Google Search Console monitors for canonical/sitemap mismatches
- "Alternate page with proper canonical tag" means URL mismatch between sitemap and canonical
