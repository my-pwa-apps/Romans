const CACHE_VERSION = 'imperivm-v1.0.2';
const CACHE_NAME = `${CACHE_VERSION}-core`;
const DATA_CACHE = `${CACHE_VERSION}-data`;

// Files to cache immediately on install
// Using relative paths for GitHub Pages compatibility
const CORE_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './manifest.json',
    './icons/icon-192x192.png',
    './icons/icon-512x512.png'
];

// External resources to cache
const EXTERNAL_ASSETS = [
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[ServiceWorker] Caching core assets');
                return cache.addAll(CORE_ASSETS);
            })
            .then(() => {
                return caches.open(DATA_CACHE);
            })
            .then((cache) => {
                console.log('[ServiceWorker] Caching external assets');
                // Don't fail install if external assets fail
                return cache.addAll(EXTERNAL_ASSETS).catch((err) => {
                    console.warn('[ServiceWorker] Some external assets failed to cache:', err);
                });
            })
            .then(() => {
                console.log('[ServiceWorker] Install complete');
                return self.skipWaiting();
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME && cacheName !== DATA_CACHE) {
                            console.log('[ServiceWorker] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[ServiceWorker] Activation complete');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Handle tile requests separately (map tiles)
    if (url.hostname.includes('tile') || url.hostname.includes('arcgisonline')) {
        event.respondWith(
            caches.open(DATA_CACHE)
                .then((cache) => {
                    return cache.match(request)
                        .then((cached) => {
                            const networkFetch = fetch(request)
                                .then((response) => {
                                    // Cache successful tile responses
                                    if (response.ok) {
                                        cache.put(request, response.clone());
                                    }
                                    return response;
                                })
                                .catch(() => {
                                    // Return cached version if network fails
                                    return cached;
                                });
                            
                            // Return cached immediately if available, otherwise wait for network
                            return cached || networkFetch;
                        });
                })
        );
        return;
    }

    // Handle other requests with cache-first strategy
    event.respondWith(
        caches.match(request)
            .then((cached) => {
                if (cached) {
                    console.log('[ServiceWorker] Serving from cache:', request.url);
                    // Return cached and update in background
                    const networkFetch = fetch(request)
                        .then((response) => {
                            if (response.ok) {
                                caches.open(CACHE_NAME).then((cache) => {
                                    cache.put(request, response.clone());
                                });
                            }
                            return response;
                        })
                        .catch(() => cached);
                    
                    return cached;
                }

                console.log('[ServiceWorker] Fetching from network:', request.url);
                return fetch(request)
                    .then((response) => {
                        // Cache successful responses
                        if (response.ok && url.origin === location.origin) {
                            const responseClone = response.clone();
                            caches.open(CACHE_NAME).then((cache) => {
                                cache.put(request, responseClone);
                            });
                        }
                        return response;
                    })
                    .catch((error) => {
                        console.error('[ServiceWorker] Fetch failed:', error);
                        
                        // Return offline page for navigation requests
                        if (request.mode === 'navigate') {
                            return caches.match('/');
                        }
                        
                        throw error;
                    });
            })
    );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => caches.delete(cacheName))
                );
            })
        );
    }
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
    console.log('[ServiceWorker] Background sync:', event.tag);
    
    if (event.tag === 'sync-quiz-progress') {
        event.waitUntil(syncQuizProgress());
    }
});

async function syncQuizProgress() {
    // Placeholder for syncing quiz progress when back online
    console.log('[ServiceWorker] Syncing quiz progress...');
    return Promise.resolve();
}

// Push notification support
self.addEventListener('push', (event) => {
    console.log('[ServiceWorker] Push notification received');
    
    const options = {
        body: event.data ? event.data.text() : 'New historical content available!',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore',
                icon: '/icons/icon-96x96.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/icons/icon-96x96.png'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('IMPERIVM ROMANVM', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    console.log('[ServiceWorker] Notification clicked:', event.action);
    
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});
