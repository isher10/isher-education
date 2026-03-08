// Service Worker

// Install event
self.addEventListener("install", function(event) {
    console.log("Service Worker Installed");
    self.skipWaiting(); // activate worker immediately
});

// Activate event
self.addEventListener("activate", function(event) {
    console.log("Service Worker Activated");
    return self.clients.claim(); // take control of all pages
});

// Fetch event (basic caching)
self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            // fallback response if offline
            return new Response("You are offline. Please check your internet connection.", {
                headers: { "Content-Type": "text/plain" }
            });
        })
    );
});
