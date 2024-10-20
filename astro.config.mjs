// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs(),
  ],
  site: 'https://wffranco.github.io',
  base: 'cv',
});
