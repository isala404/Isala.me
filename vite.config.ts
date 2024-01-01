import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	optimizeDeps: {
	  include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	},
	plugins: [enhancedImages(), sveltekit()]
})
