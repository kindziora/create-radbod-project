importScripts('/public/build/dev/js/npm/workbox-sw/workbox-sw.js');

workbox.precaching.precacheAndRoute([]);

workbox.googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'offline',
  },
});

workbox.routing.registerRoute(
  /\/fonts\//,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts'
  })
);

workbox.routing.registerRoute(
  /\/webfonts\//,
  workbox.strategies.cacheFirst({
    cacheName: 'font-awesome'
  })
);


workbox.routing.registerRoute(
  /(.*)/,
  workbox.strategies.staleWhileRevalidate()
);

const bgSyncPlugin = new workbox.backgroundSync.Plugin('apiBackend', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
  onSync: async (queue) => {
    let entry;
    while (entry = await this.shiftRequest()) {
      try {
        await fetch(entry.request);
        // Do custom *INNER* processing (eg decrease my applicative counter by one)
       console.log('Extra feature for request', entry.request.url);

       let cl = await self.clients.matchAll();
        for (const client of cl) {
            client.postMessage(entry.request.toObject());
        }

      } catch (error) {       
        await this.unshiftRequest(entry);
        throw error;
      }
    }
    console.log('Replay complete!');
  }
});

workbox.routing.registerRoute(
  /\/api\/.*/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  })
);