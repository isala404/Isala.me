import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import { addCopyButton } from 'shiki-transformer-copy-button';

import adapter from 'svelte-adapter-bun';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

// Create cached highlighter instance
let cachedHighlighter;
async function getHighlighter() {
	if (!cachedHighlighter) {
		cachedHighlighter = await createHighlighter({
			themes: ['one-dark-pro'],
			langs: [
				'javascript',
				'typescript',
				'html',
				'css',
				'json',
				'bash',
				'python',
				'markdown',
				'yaml',
				'rust',
				'java',
				'c',
				'cpp',
				'csharp',
				'go',
				'ruby',
				'php',
				'swift',
				'kotlin',
				'dart',
				'scala',
				'groovy',
				'sql',
				'shell',
				'plaintext'
			]
		});
	}
	return cachedHighlighter;
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svx'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter();
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					theme: 'one-dark-pro',
					transformers: [addCopyButton(code)]
				})
			);
			return `{@html \`${html}\` }`;
		}
	},
	layout: {
		_: './src/mdsvex.svelte'
	},
	remarkPlugins: [[remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$assets: 'src/assets'
		},
		csrf: {
			checkOrigin: false
		}
	},

	extensions: ['.svelte', '.md', '.svx']
};

export default config;
