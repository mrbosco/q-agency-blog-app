const CACHE_NAME = 'qa-blog-cache-v1';
const urlsToCache = ['/', '/index.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith('https')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (!response) {
        return fetchAndUpdateCache(event.request);
      }

      const date = new Date(response.headers.get('date'));
      const isOld = Date.now() > date.getTime() + 1000 * 60 * 5;

      if (isOld) {
        return fetchAndUpdateCache(event.request);
      }

      return response;
    })
  );
});

function fetchAndUpdateCache(request) {
  return fetch(request).then((response) => {
    if (!response || response.status !== 200 || response.type !== 'basic') {
      return response;
    }

    const responseToCache = response.clone();

    caches.open(CACHE_NAME).then((cache) => {
      cache.put(request, responseToCache);
    });

    return response;
  });
}
