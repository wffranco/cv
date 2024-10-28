/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not([data-theme="light"] *) }',
    '&:is([data-theme="dark"] *)',
  ]],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
