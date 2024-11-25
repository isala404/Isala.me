/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', 'src/lib/data.json'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['wireframe']
	},
	plugins: [require('daisyui')]
};
