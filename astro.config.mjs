// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/portfolio' : '/',

  trailingSlash: 'never',

  build: {
    assets: 'assets',
  },
});