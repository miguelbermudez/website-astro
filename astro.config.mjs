import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import rehypePrettyCode from 'rehype-pretty-code';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://miguelbermudez.com',
  integrations: [tailwind()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      'rehype-slug',
      'rehype-autolink-headings',
      'rehype-code-titles',
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'min-dark',
            light: 'min-light',
          },
        },
      ],
    ],
  },
});
