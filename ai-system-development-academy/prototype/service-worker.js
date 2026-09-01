const CACHE = "academy-prototype-v2"
const CORE = [
  "./", "./index.html", "./roadmap.html", "./pwa-install.html", "./mobile-app.html",
  "./android-publish.html", "./ios-publish.html", "./styles.css", "./app.js",
  "./assets/logo.png", "./assets/icon-192.png", "./assets/icon-512.png"
]
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())))
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())))
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return
  event.respondWith(fetch(event.request).then(response => {
    const copy = response.clone()
    caches.open(CACHE).then(cache => cache.put(event.request, copy))
    return response
  }).catch(() => caches.match(event.request).then(cached => cached || (event.request.mode === "navigate" ? caches.match("./index.html") : undefined))))
})
