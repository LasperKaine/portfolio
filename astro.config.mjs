// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lasperkaine.github.io',
  base: '/portfolio',

  // Recommended additions for GitHub Pages
  trailingSlash: 'never',
  build: {
    assets: '_astro'   // helps with asset handling
  }
});