import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		extensions: ['.js', '.ts', '.svelte'],
		alias: {
			$db: path.resolve('./src/db')
		}
	}
};

export default config;
