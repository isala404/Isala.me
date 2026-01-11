Fixed trailing slash mismatch causing Google Search Console "Alternate page with proper canonical tag" errors.
- Added `trailingSlash: 'always'` to `astro.config.mjs`
- Updated `src/pages/sitemap.xml.ts` to use trailing slashes on all page URLs
- Added nginx redirect rule in `nginx.conf` to 301 redirect `/path` to `/path/`
- Canonical URLs and sitemap URLs now consistently use trailing slashes
