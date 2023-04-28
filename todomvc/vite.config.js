import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	base: "/data_viz_migration/"
};

export default config;
