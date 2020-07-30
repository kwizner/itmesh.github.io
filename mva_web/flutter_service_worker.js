'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "ed9bef98f1236efb85060a08dc724862",
"/": "ed9bef98f1236efb85060a08dc724862",
"main.dart.js": "9e71b88b2e1e55e958cc4fd23ff69256",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "491882dbb253ddfd1b5d18bc14169ba7",
"assets/AssetManifest.json": "b08e345276bdf19c0db66630119b9db4",
"assets/NOTICES": "d334c5ebd89c640d4271cb2a5d80da02",
"assets/FontManifest.json": "d62f52e218cce39ea5fc67f4d988e850",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/EuclidFlex-Light.otf": "5b56c8c127d9b2fccfa1f04202c6c371",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/EuclidFlex-Regular.otf": "9d768785cf62b3457be2885822e6a918",
"assets/assets/images/ic_share.svg": "970ffb22aec4a1c640c2d00b98cc990c",
"assets/assets/images/ic_gandharva_veda.svg": "9abeec4725c5ee66e986500e7c83cf11",
"assets/assets/images/welcome_header_background.webp": "01b36682fd6c4dde650b5b7ae8a95841",
"assets/assets/images/ic_favorites.svg": "030a5bb2e0de775e58883cab03275d41",
"assets/assets/images/ic_loop_off.svg": "6ffa1039eb5aaea780a9ac290b96b938",
"assets/assets/images/ic_previous.svg": "8324495ae85c72c13a0e6fd5afbc8326",
"assets/assets/images/ic_add_to_favorites_small.svg": "60f22a189e044b49fee750da17832fd3",
"assets/assets/images/ic_info.svg": "53e6c1cc6fed950bb1c5e2a91d45e117",
"assets/assets/images/ic_download_gold.svg": "3f115f20df3d66375734edf4846185b2",
"assets/assets/images/ic_pause_32.svg": "392c14be4f98fc44953590ef0c1c8fbb",
"assets/assets/images/ic_pause_24.svg": "4e20806ec24f67ba26e6bca6caa8e2f6",
"assets/assets/images/ic_stop_white.svg": "f1411dd7c6192db61c730ab3491ad56c",
"assets/assets/images/ic_downloaded_white.svg": "d173d941b9ecf8a248e40a3c8491ddd9",
"assets/assets/images/2.0x/welcome_header_background.webp": "14827d1386f8288ecc954180fe309c30",
"assets/assets/images/2.0x/placeholder.webp": "bcec91d7d1c96b7154ca0c1abd9f2e16",
"assets/assets/images/2.0x/welcome_footer_background.webp": "92ff9340d366f862c9cfd2ff6fdbc88f",
"assets/assets/images/2.0x/gita_recitations.webp": "94d0fe01a5fc47ca9d775524d47dc7ac",
"assets/assets/images/2.0x/home_classical_indian_music.webp": "49a87bdca05db30feb5965bc5a4f885d",
"assets/assets/images/2.0x/home_logo.png": "379e1c014221a51e767f22e609c98934",
"assets/assets/images/2.0x/home_vedic_recitations.webp": "0f425b573d103fd4c4493b395c179cdc",
"assets/assets/images/2.0x/gita_translations.webp": "838d48b80edd55e99e8fde278c53ee24",
"assets/assets/images/ic_close.svg": "2e597018cfeed0b61f4085b4aa2bfb81",
"assets/assets/images/ic_play_32.svg": "daadc5c1f1f2c863d3eaddce8481f9e3",
"assets/assets/images/ic_play_24.svg": "aa9f0b023a27c3aec798efe781f5a5e2",
"assets/assets/images/ic_downloaded_gold.svg": "f62b44f05a5efdbed29da00ca86418a5",
"assets/assets/images/ic_down_arrow.svg": "d8f866f63e3df243ff23bc99dd13f3a7",
"assets/assets/images/ic_timer_on.svg": "4c532df626b09ae1a32f86d60cbf30d8",
"assets/assets/images/placeholder.webp": "955571a25e7fdcf5f94aa16b5a9871ad",
"assets/assets/images/ic_stop_gold.svg": "5433ce6a442ae37b6be01bf82674abac",
"assets/assets/images/3.0x/welcome_header_background.webp": "2524e11f6c24b6b61ec0715ebf7b1760",
"assets/assets/images/3.0x/placeholder.webp": "bb0c7077e35f8948cf6d1a3d08006839",
"assets/assets/images/3.0x/welcome_footer_background.webp": "8e112c1e9753109f7c8b8efa0bab03be",
"assets/assets/images/3.0x/gita_recitations.webp": "9ffe3f44aac3c2f1d225e4025b97108a",
"assets/assets/images/3.0x/home_classical_indian_music.webp": "dde9c97018b97dbf76238d315203cf3b",
"assets/assets/images/3.0x/home_logo.png": "27759ced356d891302a9791c26068748",
"assets/assets/images/3.0x/home_vedic_recitations.webp": "afeaa6f1373e1e03a3e65a6edec954fd",
"assets/assets/images/3.0x/gita_translations.webp": "ac9c22b61133e3a2755cbc23302999fe",
"assets/assets/images/ic_loop_on.svg": "b9ab79864739f3ed3797a99b034e3929",
"assets/assets/images/ic_next_arrow.svg": "99e673ee82a12ad19d377fbe0eb830ae",
"assets/assets/images/welcome_footer_background.webp": "a75f45ab2e637a3d23223f8716bb5703",
"assets/assets/images/ic_loop_one.svg": "dc5d4af24f6c2fe60359e19e065a4aad",
"assets/assets/images/gita_recitations.webp": "6a2e5c01eb3725433aa7d1ab61e6e481",
"assets/assets/images/ic_add_to_favorites.svg": "9ff1778eeaac7d8da7a54bab785c0337",
"assets/assets/images/ic_remove_from_favorites.svg": "d8632b73a694c9654a7d4516ed3d18aa",
"assets/assets/images/ic_download_white.svg": "36243c8d63dd58e2b1b8dcfb42453748",
"assets/assets/images/ic_downloaded_tiny.svg": "925c14e50f4d62c6c197841409c2cf02",
"assets/assets/images/home_classical_indian_music.webp": "f0d2085182fa40887a48ff10668a079a",
"assets/assets/images/home_logo.png": "81f8d79ebc6268ba370940fae7134b48",
"assets/assets/images/home_vedic_recitations.webp": "50abfd1f2fafb7de35ad9cfdb69f1562",
"assets/assets/images/ic_play.svg": "93303d7a6ecc16dbb38e5720de09462d",
"assets/assets/images/ic_back.svg": "8ede6c680931e887c0201d88805c44f3",
"assets/assets/images/ic_timer_off.svg": "e6237d785df324b529623498d5bf6852",
"assets/assets/images/gita_translations.webp": "b1e95e1162d7ec19d4610f146caa7ff4",
"assets/assets/images/ic_settings.svg": "708950841915e37df070e75fcb9ec744",
"assets/assets/images/ic_search.svg": "6c709c404efdaac5f94e0bf93c3f4328",
"assets/assets/images/ic_next.svg": "0bdd3be376bcd7070d160d4e2bf1899a",
"assets/assets/images/ic_more.svg": "2036735a25819a60be5255ef75ff9be4",
"assets/assets/images/ic_vedic_recitations.svg": "af692d454d00745e9f4609d23621244b",
"assets/assets/images/ic_remove_from_favorites_small.svg": "6f5fba913de5b546c2553ca4fd83c687"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
