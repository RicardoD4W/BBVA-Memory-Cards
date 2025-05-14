import type { ManifestOptions } from 'vite-plugin-pwa';

export const manifest: Partial<ManifestOptions> = {
  name: 'BBVA Memory Cards',
  short_name: 'MemCards',
  description: 'A simple game about memmory cards',
  theme_color: '#4488EE',
  background_color: '#F8F8F0',
  display: 'standalone',
  lang: 'es',
  icons: [
    {
      src: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
};
