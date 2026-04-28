// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lasperkaine.github.io',
  base: '/portfolio',

  trailingSlash: 'never',

  // ← Add these two lines
  build: {
    assets: 'assets'          // Change default _astro folder to "assets"
  }
});