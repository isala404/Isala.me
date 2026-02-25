import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = 'https://isala.me';

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]; // YYYY-MM-DD format
}

function buildUrlEntry(entry: SitemapEntry): string {
  const parts = [`    <loc>${site}${entry.loc}</loc>`];

  if (entry.lastmod) {
    parts.push(`    <lastmod>${entry.lastmod}</lastmod>`);
  }

  if (entry.changefreq) {
    parts.push(`    <changefreq>${entry.changefreq}</changefreq>`);
  }

  if (entry.priority !== undefined) {
    parts.push(`    <priority>${entry.priority.toFixed(1)}</priority>`);
  }

  return `  <url>\n${parts.join('\n')}\n  </url>`;
}

const appModules = import.meta.glob<{
  app: { title: string; description: string; icon: string; color: string };
}>('./apps/*.astro', { eager: true });
const appSlugs = Object.entries(appModules)
  .filter(([_, mod]) => mod.app)
  .map(([path]) => path.replace('./apps/', '').replace('.astro', ''));

export const GET: APIRoute = async () => {
  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);
  const notes = await getCollection('notes', ({ data }) => !data.draft);

  const today = formatDate(new Date());

  // Sort blog posts by date to get the most recent
  const sortedBlogPosts = [...blogPosts].sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );
  const latestBlogDate = sortedBlogPosts[0]
    ? formatDate(sortedBlogPosts[0].data.updatedAt || sortedBlogPosts[0].data.publishedAt)
    : today;

  // Sort notes by date
  const sortedNotes = [...notes].sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );
  const latestNoteDate = sortedNotes[0] ? formatDate(sortedNotes[0].data.publishedAt) : today;

  const entries: SitemapEntry[] = [];

  // Homepage - highest priority, updates with new content
  entries.push({
    loc: '/',
    lastmod: latestBlogDate,
    changefreq: 'weekly',
    priority: 1.0,
  });

  // LLMs.txt - high priority for AI crawlers (no trailing slash for files)
  entries.push({
    loc: '/llms.txt',
    changefreq: 'weekly',
    priority: 0.9,
  });

  // Main navigation pages
  entries.push({
    loc: '/about/',
    changefreq: 'monthly',
    priority: 0.8,
  });

  entries.push({
    loc: '/experience/',
    changefreq: 'monthly',
    priority: 0.8,
  });

  entries.push({
    loc: '/projects/',
    changefreq: 'monthly',
    priority: 0.7,
  });

  entries.push({
    loc: '/talks/',
    changefreq: 'monthly',
    priority: 0.7,
  });

  // Blog index - updates when new posts are added
  entries.push({
    loc: '/blog/',
    lastmod: latestBlogDate,
    changefreq: 'weekly',
    priority: 0.7,
  });

  // Notes index
  entries.push({
    loc: '/notes/',
    lastmod: latestNoteDate,
    changefreq: 'weekly',
    priority: 0.6,
  });

  // Individual blog posts - with actual modification dates
  for (const post of blogPosts) {
    const lastmod = post.data.updatedAt || post.data.publishedAt;
    entries.push({
      loc: `/blog/${post.slug}/`,
      lastmod: formatDate(lastmod),
      changefreq: 'yearly',
      priority: 0.6,
    });
  }

  // Individual notes
  for (const note of notes) {
    entries.push({
      loc: `/notes/${note.slug}/`,
      lastmod: formatDate(note.data.publishedAt),
      changefreq: 'yearly',
      priority: 0.5,
    });
  }

  // App pages
  for (const slug of appSlugs) {
    entries.push({
      loc: `/apps/${slug}/`,
      changefreq: 'monthly',
      priority: 0.5,
    });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries.map(buildUrlEntry).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      'X-Robots-Tag': 'noindex', // Sitemaps themselves shouldn't be indexed
    },
  });
};
