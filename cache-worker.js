
const ASSETS = [ '.', './manifest.json' ]

const CACHE = `cache-v1`

const addResourcesToCache = async resources => {
  const cache = await caches.open(CACHE)
  await cache.addAll(resources)
}

self.addEventListener('install', event => {
  event.waitUntil(
    addResourcesToCache(ASSETS)
  )
})

const deleteOldCaches = async () => {
  for(const key of await caches.keys()) {
    if(key !== CACHE) await caches.delete(key)
  }
}
self.addEventListener('activate', event => {
  event.waitUntil(deleteOldCaches())
})

const cacheFirst = async (request, event) => {
  const responseFromCache = await caches.match(request)

  if (responseFromCache) return responseFromCache

  const responseFromNetwork = await fetch(request)
  event.waitUntil(putInCache(request, responseFromNetwork.clone()))

  return responseFromNetwork
}

const putInCache = async (request, response) => {
  const cache = await caches.open(CACHE)
  await cache.put(request, response)
}

self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return
  event.respondWith(cacheFirst(event.request, event))
})
