import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://htsveri.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      filter: (page) => !page.endsWith('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: { assetsInlineLimit: 0 },
  },
});
