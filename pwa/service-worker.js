
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("agrinexus-cache").then((cache) =>
      cache.addAll(["/admin-panel/index.html", "/icon.png"])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
