const statics = "cache-PWA-messages"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/main.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(statics).then(cache => {
      cache.addAll(assets)
    })
  )
})
  
self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });
  
