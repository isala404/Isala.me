import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = 'https://isala.me';

export const GET: APIRoute = async () => {
  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);
  const notes = await getCollection('notes', ({ data }) => !data.draft);

  // Static pages
  const staticPages = ['', '/about', '/experience', '/blog', '/notes', '/projects', '/talks'];

  // Blog posts
  const blogUrls = blogPosts.map((post) => `/blog/${post.slug}`);

  // Blog tags
  const blogTags = [...new Set(blogPosts.flatMap((post) => post.data.tags))];
  const blogTagUrls = blogTags.map((tag) => `/blog/tag/${tag}`);

  // Notes
  const noteUrls = notes.map((note) => `/notes/${note.slug}`);

  // Note tags
  const noteTags = [...new Set(notes.flatMap((note) => note.data.tags))];
  const noteTagUrls = noteTags.map((tag) => `/notes/tag/${tag}`);

  // Combine all URLs
  const allUrls = [...staticPages, ...blogUrls, ...blogTagUrls, ...noteUrls, ...noteTagUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((url) => `  <url><loc>${site}${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'no-cache',
    },
  });
};
