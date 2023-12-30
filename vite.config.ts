import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	optimizeDeps: {
	  include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	},
	plugins: [sveltekit()]
})
