/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Soehne-Buch"', ...defaultTheme.fontFamily.sans],
        'sans-bold': ['"Soehne-Dreiviertelfett"'],
        'sans-light': ['"Soehne-Leicht"'],
        serif: ['"Heldane-Text-Regular"', ...defaultTheme.fontFamily.serif],
        'serif-bold': ['"Heldane-Text-Bold"'],
        'serif-italic': ['"Heldane-Text-Italic"'],
      },
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
  plugins: [],
};
