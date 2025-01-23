import path from 'node:path';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			edge: false,
			split: true
		}),
		alias: {
			$components: path.resolve('./src/lib/components'),
			$styles: path.resolve('./src/lib/styles'),
			$pages: path.resolve('./src/lib/pages'),
			$utils: path.resolve('./src/lib/utils')
		}
	}
};

export default config;
