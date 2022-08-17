/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        karaka: 'rgb(var(--color-karaka))',
        merino: 'rgb(var(--color-merino))',
        wepeep: 'rgb(var(--color-wepeep))',
        tamarillo: 'rgb(var(--color-tamarillo))',
        meinsk: 'rgb(var(--color-meinsk))',
        tallpoppy: 'rgb(var(--color-tallpoppy))',
        beautybush: 'rgb(var(--color-beautybush))',
        purpleheart: 'rgb(var(--color-purpleheart))',
        tarawera: 'rgb(var(--color-tarawera))',
        narvik: 'rgb(var(--color-narvik))',
      },
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  plugins: [
    require('tailwindcss-themer')({
      themes: [
        {
          name: 'beryl',
          extend: {
            colors: {
              text: '#FDF7F7',
              background: '#9F1239',
            },
          },
        },
        {
          name: 'moon',
        },
      ],
    }),
  ],
};
