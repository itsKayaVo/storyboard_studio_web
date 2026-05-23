/* ═══════════════════════════════════════════════════
   STORYBOARD STUDIO — Service Worker
   Caches all app files for full offline use
═══════════════════════════════════════════════════ */

const CACHE = 'sb-studio-v1';

const PRECACHE = [
  './',
  './index.html',
  './styles.css',
  './manifest.json',
  './favi.png',
  './icons/Icon-iOS-Default-16x16@1x.png',
  './icons/Icon-iOS-Default-16x16@2x.png',
  './icons/Icon-iOS-Default-20x20@2x.png',
  './icons/Icon-iOS-Default-20x20@3x.png',
  './icons/Icon-iOS-Default-29x29@2x.png',
  './icons/Icon-iOS-Default-29x29@3x.png',
  './icons/Icon-iOS-Default-32x32@1x.png',
  './icons/Icon-iOS-Default-32x32@2x.png',
  './icons/Icon-iOS-Default-38x38@2x.png',
  './icons/Icon-iOS-Default-38x38@3x.png',
  './icons/Icon-iOS-Default-40x40@2x.png',
  './icons/Icon-iOS-Default-40x40@3x.png',
  './icons/Icon-iOS-Default-60x60@2x.png',
  './icons/Icon-iOS-Default-60x60@3x.png',
  './icons/Icon-iOS-Default-64x64@2x.png',
  './icons/Icon-iOS-Default-64x64@3x.png',
  './icons/Icon-iOS-Default-68x68@2x.png',
  './icons/Icon-iOS-Default-76x76@2x.png',
  './icons/Icon-iOS-Default-83.5x83.5@2x.png',
  './icons/Icon-iOS-Default-128x128@1x.png',
  './icons/Icon-iOS-Default-128x128@2x.png',
  './icons/Icon-iOS-Default-256x256@1x.png',
  './icons/Icon-iOS-Default-256x256@2x.png',
  './icons/Icon-iOS-Default-512x512@1x.png',
  './icons/Icon-iOS-Default-1024x1024@1x.png',
  './js/globals.js',
  './js/export.js',
  './js/save-load.js',
  './js/draw.js',
  './js/timeline.js',
  './js/ui.js',
  /* CDN libs — cached on first load */
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js',
  'https://cdn.jsdelivr.net/npm/gifuct-js@2.1.2/dist/gifuct.min.js',
  'https://cdn.jsdelivr.net/npm/ag-psd@25.2.5/dist/bundle.js',
  'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js',
  'https://cdn.jsdelivr.net/npm/mp4-muxer@5.2.2/build/mp4-muxer.js',
  'https://cdn.jsdelivr.net/npm/webm-muxer@5.1.4/build/webm-muxer.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.allSettled(PRECACHE.map(url =>
        cache.add(url).catch(() => {/* CDN may fail — ok */})
      ))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  /* Only handle GET requests */
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200) return res;
        const clone = res.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
