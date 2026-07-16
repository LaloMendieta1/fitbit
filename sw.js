/* Bitacora service worker - cache-first, offline-ready */
var CACHE = 'bitacora-v1';
var ASSETS = ['./', './index.html', './icon.png', './manifest.json'];

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // no fallar la instalacion si algun asset opcional no existe
      return Promise.all(ASSETS.map(function (u) {
        return c.add(new Request(u, { cache: 'reload' })).catch(function () {});
      }));
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (hit) {
      // 1) Si esta en cache, servir YA (funciona sin internet)
      var net = fetch(req).then(function (res) {
        if (res && res.status === 200 && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () { return null; });

      if (hit) {
        net; // actualiza en segundo plano para la proxima vez
        return hit;
      }

      // 2) Sin cache: intentar red, y si falla, caer al index cacheado
      return net.then(function (res) {
        if (res) return res;
        return caches.match('./index.html') || caches.match('./');
      });
    })
  );
});
