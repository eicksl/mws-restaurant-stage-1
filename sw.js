self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-content').then(cache => {
      return cache.addAll([
        '/',
        'css',
        'data',
        'img',
        'js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
