import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['./sanity/schemas']
		}
	},
	define: {
		'process.env': process.env
	}
});
