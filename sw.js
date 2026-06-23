// Minimal service worker — required by Chrome for the "Install app"
// prompt to appear. This does not cache anything or work offline;
// it simply lets the browser register the app properly. Data is always
// fetched fresh from Supabase (this app needs live internet access to
// Supabase to work anyway, so offline support is intentionally left out).

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through: always fetch fresh from network, never cache.
  event.respondWith(fetch(event.request));
});
