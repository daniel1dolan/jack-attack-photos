import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl'

import tailwind from "@astrojs/tailwind";
const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: 'storyblok/Page',
      config: 'storyblok/Config',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
    },
    apiOptions: {
      // Choose your Storyblok space region
      region: 'us' // optional,  or 'eu' (default)
    }
  }), tailwind()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  // output: 'server'
});