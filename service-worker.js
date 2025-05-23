self.addEventListener('install', e => {
  e.waitUntil(caches.open('agrinexus-v1').then(cache => {
    return cache.addAll(['index-scroll.html', '/']);
  }));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});
