self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('agrinexus-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
