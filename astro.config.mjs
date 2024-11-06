import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
	output: 'server',
	experimental: { contentLayer: true },
	adapter: netlify(),
	integrations: [tailwind(), icon(), astroImageTools]
});