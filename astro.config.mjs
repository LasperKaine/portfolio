// @ts-check
import { defineConfig } from 'astro/config';

const isProd = process.env.VERCEL
  ? false
  : process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://lasperkaine.github.io',

  base: isProd ? '/portfolio/' : '/',
});