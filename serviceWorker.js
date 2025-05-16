
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open('agrinexus-v2').then(function(cache) {
    return cache.addAll(['/index.html']);
  }));
});
self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(response) {
    return response || fetch(e.request);
  }));
});
