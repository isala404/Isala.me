// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Plugin to force full reload when profile MDX changes
function profileHotReload() {
  return {
    name: 'profile-hot-reload',
    /** @param {{ file: string, server: { ws: { send: (msg: { type: string }) => void } } }} ctx */
    handleHotUpdate({ file, server }) {
      if (file.endsWith('src/content/index.mdx')) {
        server.ws.send({ type: 'full-reload' });
        return [];
      }
    },
  };
}

export default defineConfig({
  site: 'https://isala.me',
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load',
  },
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  vite: {
    css: {
      postcss: './postcss.config.mjs',
    },
    plugins: [profileHotReload()],
  },
});
