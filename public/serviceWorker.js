// service-worker.js — simplified
const CACHE_VERSION = "v1"
const STATIC_CACHE = `static-${CACHE_VERSION}`

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(STATIC_CACHE)
			.then((cache) =>
				cache.addAll(["/", "/index.html", "/favicon.svg", "/manifest.json"]),
			)
			.then(() => self.skipWaiting()),
	)
})

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys.filter((k) => k !== STATIC_CACHE).map((k) => caches.delete(k)),
				),
			)
			.then(() => self.clients.claim()),
	)
})

self.addEventListener("fetch", (event) => {
	const url = new URL(event.request.url)
	if (event.request.method !== "GET") return
	if (url.origin !== self.location.origin) return
	if (url.pathname.startsWith("/@") || url.pathname.startsWith("/__")) return

	event.respondWith(
		caches.match(event.request).then(
			(cached) =>
				cached ||
				fetch(event.request).then((res) => {
					if (res.ok) {
						caches
							.open(STATIC_CACHE)
							.then((c) => c.put(event.request, res.clone()))
					}
					return res
				}),
		),
	)
})
