import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// TTL cache: seluruh data yang di-cache PWA dianggap basi setelah 24 jam
// (runtime cache di-expire, dan ada juga pengecekan sisi klien di src/lib/pwa.ts).
const ONE_DAY = 60 * 60 * 24

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'pwa-192x192.png', 'pwa-512x512.png'],
      manifest: {
        name: 'YukBelajar - Platform Belajar Interaktif',
        short_name: 'YukBelajar',
        description:
          'Platform belajar interaktif berbahasa Indonesia: video animasi, simulator, grafik data, studi kasus, dan kuis untuk banyak topik.',
        lang: 'id',
        theme_color: '#224066',
        background_color: '#224066',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Precache HANYA shell (HTML/CSS/ikon/font). JANGAN precache file JS,
        // supaya isi topik yang sudah di-code-split tetap dimuat lazy (tidak
        // mengunduh seluruh aplikasi saat install). Chunk JS di-cache saat diakses.
        globPatterns: ['**/*.{css,html,svg,png,ico,woff,woff2}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api/],
        runtimeCaching: [
          {
            // Semua aset same-origin (termasuk chunk JS per-topik) di-cache saat
            // diakses, dan kedaluwarsa dalam 24 jam (TTL data PWA).
            urlPattern: ({ url, sameOrigin }) => sameOrigin && !url.pathname.startsWith('/api'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'app-assets',
              expiration: { maxEntries: 300, maxAgeSeconds: ONE_DAY },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) =>
              url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 7 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true,
      },
    },
  },
})
