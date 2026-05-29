/* ═══════════════════════════════════════════════
   BURNFLOW — sw.js (Service Worker)
   Enables offline use, caching, and fast loads
   ═══════════════════════════════════════════════ */

const CACHE_NAME = 'burnflow-v1';

// All files to cache for offline use
const ASSETS = [
  '/burnflow/',
  '/burnflow/index.html',
  '/burnflow/css/styles.css',
  '/burnflow/js/app.js',
  '/burnflow/manifest.json',
  '/burnflow/assets/icon.svg',
  '/burnflow/assets/favicon.svg',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap'
];

// ── INSTALL — cache all assets ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[BurnFlow SW] Caching app shell');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE — clean up old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[BurnFlow SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH — serve from cache, fall back to network ──
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) {
          // Serve from cache instantly
          return cached;
        }

        // Not in cache — fetch from network and cache it
        return fetch(event.request)
          .then(response => {
            // Only cache valid responses
            if (!response || response.status !== 200 || response.type === 'opaque') {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });

            return response;
          })
          .catch(() => {
            // Offline fallback — return cached index.html for navigation
            if (event.request.mode === 'navigate') {
              return caches.match('/burnflow/index.html');
            }
          });
      })
  );
});
