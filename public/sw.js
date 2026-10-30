// public/sw.js
const STATIC_CACHE = 'elpriser-static-v1';
const API_CACHE = 'elpriser-api-v1';

const STATIC_FILES = [
    '/',
    '/manifest.json',
    '/icons/android-launchericon-192-192.png',
    '/icons/android-launchericon-512-512.png',
];

// Install service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => {
            return cache.addAll(STATIC_FILES);
        })
    );

    self.skipWaiting();
});

// Activate service worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (
                        cacheName !== STATIC_CACHE &&
                        cacheName !== API_CACHE &&
                        cacheName.startsWith('elpriser-')
                    ) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Electricity price API - Network First
    if (url.hostname === 'www.elprisenligenu.dk') {
        event.respondWith(networkFirst(request, API_CACHE));
        return;
    }

    // Static resources - Cache First
    if (url.origin === self.location.origin) {
        event.respondWith(cacheFirst(request, STATIC_CACHE));
    }
});

// Cache First strategy
async function cacheFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
        return cachedResponse;
    }

    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
        await cache.put(request, networkResponse.clone());
    }

    return networkResponse;
}

// Network First strategy
async function networkFirst(request, cacheName) {
    const cache = await caches.open(cacheName);

    try {
        const networkResponse = await fetch(request);

        if (networkResponse.ok) {
            await cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        const cachedResponse = await cache.match(request);

        if (cachedResponse) {
            return cachedResponse;
        }

        throw error;
    }
}