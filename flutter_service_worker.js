'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "04797d1d1b0ebf4655787efcbaaa2812",
"main.dart.js": "a339416b12c52fc5dc4e7a0f71dd300f",
"version.json": "bb2130e62b2dfa69893bc0be6c7c0eda",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "63c2a354ca3db53f5cb155905ebc9e4b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/drone.png": "0f72f6776c5a0e366e0f414912ac675a",
"assets/assets/images/bg2.png": "667a3514be73b969774808b0ded519a6",
"assets/assets/images/training.jpeg": "162ac19f600c7c98957a90642243c373",
"assets/assets/images/profile.png": "9acfe78b8e1cfbf4c1b1d1f31745b96b",
"assets/assets/images/utm.png": "56842b9b120288cc98dcc916e1fbd700",
"assets/assets/images/bg4.png": "ce96e033b4946b1856944013d95cf818",
"assets/assets/images/db2.png": "02a629ce2a477d27254e86dac427f358",
"assets/assets/images/partners.png": "69fac675ef5fdeed4311bdd54925c861",
"assets/assets/images/db.png": "f7d03139cc2b1cad4d82de4d9befdaee",
"assets/assets/images/background.gif": "41899abc53651111172ce9f13016cbb0",
"assets/assets/lottie/account.json": "93f6853720b385c24abc764ccfb6bb6f",
"assets/assets/lottie/drone.json": "5d4cf544ea9369204576c5281dfda342",
"assets/assets/lottie/user.json": "4aa8353a46b657709c2f989df5563db3",
"assets/AssetManifest.json": "ba10b22ada8e1bbb4644c33cdd2f3e18",
".git/refs/heads/main": "6e8e4a86da072361a2e12d2882258bbb",
".git/refs/remotes/origin/main": "28f3c3396abc5c1e2db908acf764be00",
".git/COMMIT_EDITMSG": "6e63459df89f422082a14cd46ed88c1f",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/heads/main": "a76ed6f96f32721d64f5ea70202bd9b1",
".git/logs/refs/remotes/origin/main": "2fa14d4bc607ad5fcda49b8b6ed3c45f",
".git/logs/HEAD": "dd2db6a7a7cb6d3215695f4cb5beae94",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/11/89d62ab9227031d3efe0ae8c2b4defb3ea1406": "dccb0ded8d22b6fcb85dcd92cf41f49f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/65/37069a6504bf01c80655f6d8ca9235f0d76ec7": "f9ced7d27aa6a2c65874f870ded14693",
".git/objects/18/b542b5bebb32d9d2d08cf744a167b219c21ab6": "c406b3aa4e7e3c368106b47e518304df",
".git/objects/4a/50fd10948c4a149955b4a06e027ddcc63b9392": "d16ba376c9da8c1f6d3fd7bd90dc35df",
".git/objects/f5/acc03de81e803166beb47dafb332332b43c10a": "753dc87e00bba9e13553ac539c1935d4",
".git/objects/84/41fe368d3a584e17a6cd553521c9b71b6d217c": "63e1b738d22fb84ec676cc35c0590253",
".git/objects/fb/8686b81cab4e838b505b9f5662d1b12b7d4854": "391eb52eb530b27279a9de5602f8bb7c",
".git/objects/fb/5f134b7ca580e6c7a3e094829a79222d5d0e67": "72df29a90066990f96f834cc8ff20ad3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/bf/d302e6975fc615a73d151d3fa189bc49a3c920": "e87549b8cbdf7c55fb64f09e9e69c159",
".git/objects/75/b334e18e8ff2f88900f592275d62d8b718bc55": "c4cee85872514317fd0addf7b9321386",
".git/objects/f2/f31918385528f80f17aa0c38c0c579f4f5d58f": "2e2ec1f69956fd30f00ce689f615d06e",
".git/objects/b9/180f3d2d1375fb82296665d029917d5101b616": "c08db578c55c613ac4f2e7e350457ef9",
".git/objects/1c/fe6edba3aef7a786155dc23b0511ca0860a55d": "33232aec9cb8bb2a08cd1962aab3fd23",
".git/objects/1d/ada6060d2b44e6b213bb1cd8c8a066bcf5bb27": "3ba838f8b3536cb96117d0b29ebccda3",
".git/objects/12/00246c4f22e52bcddd144a8f05260d5a635c16": "cb4fb52cc734380ee5765663cd991f4c",
".git/objects/fc/70ce619ee3cddad3b3e1f299f9c3e7b3e34066": "2e5828de14ba4017c23ef3e75c4cb8bb",
".git/objects/aa/ad292c96dcfe8c1cbe777a7c441103f9d3fb97": "37cdeb6459abe41a2e86bc8366dfe1a4",
".git/objects/85/1fc7b105dbe8f23fe599a64af623d710613263": "d1e44da471182829886ee15d7bdf7e21",
".git/objects/46/1609d94d4af9c9c9a65da946b4b50d194be496": "973426ac0a423bac8c261e826bceb91c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/b3dfb34f5393994ca5d39abae1639f95e89bb7": "a59410d1938077f2467df064e1b67f52",
".git/objects/69/f28b9e54e6ee194fd50aa15c472205f807ec54": "5c42beca7e2431f81bbdc6a5add94a71",
".git/objects/69/6a8ac6522b3b6b8b2092e72c1353970dadb624": "1129128e1a45d984494f0aa6de7180a7",
".git/objects/21/937a7a3d1f088de0de22034632ac0409a83e05": "66514278380097dd6cce5a66e20b332e",
".git/objects/21/1cc1259fc8e264cf7b0ca79afa4f26840bfe95": "73e8bd8af6af7198be2bd4cadd4ec691",
".git/objects/ec/e7e7346416b2c8d5dfb68c8ae65e3ce7327205": "669f0f04a2e919ffb899629e5a3459f1",
".git/objects/c1/7d9da581b005bfe11c351235fb5dd4571a28e8": "b1f911bc90758a3efab1eed971e6baf0",
".git/objects/28/043b50175fbb8b166099abd04b33cc09c6cf61": "d38ab1e4244ed32d5f12117877bc7759",
".git/objects/6a/02fc99fa61270b4a01bc48cfcb34972d8267d4": "de3bb35e7ed15fd63ac0aac9b1c75881",
".git/objects/62/62b33b1f8ba46f1e33aa42fce6b4bf73306507": "bd84e49bf28392ef67d50eb8e1c70af2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/6d/160eecbf3b91befa879306266d8b68ec79fa73": "75c51fc2b28a6b4f2660a5c750542b30",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/02dd50906ced7623a475e227f98c632aa1464b": "26265ef054aec7d88bc48c66c40e7367",
".git/objects/eb/c9fc3ae1c4cf739ac1a4caaa8ce1f10fd91aed": "803fdacc7a328e995046325a43dc5c5f",
".git/objects/9f/f2ae7070f27f38dec24ed8e042c4d9db98a00f": "154cdb9d2fd30d147b59c46390816744",
".git/objects/9f/8a976e8face38254540284f01fe0bd35691947": "b59ddc34f1d2d14623fe340346bef2cd",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/6c/3806afd1e0482adbea1814e9d1a9f5295e5186": "ab100c23cf6cace2f92feb9e375e0b5b",
".git/objects/88/b0ff4c40260468b559fdf7ca7a748328f6cee7": "8387ad66662ab562f17e07f41006ba20",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/d2/469fb442e825840824d295610f64f80dab3d77": "7ce2de614b795659268ac20a4f8b7f4d",
".git/objects/e6/9f06c1fac9f1d79f5a0f46e702299e894248a9": "766a989e7b971c56bcc1f562ecb46ff4",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/17/647531c3c23ab0212083de458e585429e6786c": "e6e8d0d78b670ce74c31fefae3fa78c6",
".git/objects/c5/52ffd48b9647b13964d3153fe30604f8d90ebd": "fcce895e4a85f1e08b1a4b8f36cef9c0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/2391807849ad622b46e5f51cc323ecea2c3018": "10681b417301d94d8199c9d990857ded",
".git/objects/6f/549801cf9ad2f6b95d644c7c14623d6d04e15c": "339fb67b4784ecf8cf7cb9d43503e77e",
".git/objects/60/85a3da4508a7f0cde950e7e23c31f7ff732516": "0027d18d410e0fc2738c524377438ae9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a9/b207e602e38ae56da15a0038d7e7ec7476f54e": "1c5510710c8d07c2eb0d97a0b6a7caa7",
".git/objects/8b/98fc3c5a7a910af284b3f0760ef15f7c8f6c0a": "d445c4231066824e6569a2dad5396402",
".git/objects/15/1c20d7cbc2f00b82d7ca359748a9135a31c538": "33e53fb3d0ecd4caa2e4063a0c9bf965",
".git/objects/15/08df92110f75957dbf2a4102ed9c97dd2a7a2b": "a984d7b857de6e3cf0e0d61297670b9a",
".git/objects/cf/eb14eeb11b28b4a88d1f36e9b02d34476e33b3": "65a6a59c75937505531e7e93869268c6",
".git/objects/76/b2fdd8827163221e97f6c032b6a57a89c8f623": "4d7adc8fe9b5b35685d870ad6eef7ddc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "97168a7cc0ee6f430b750cdf8db09473",
".git/config": "a2133f10d5a6d98e374c915c8ab1c03d",
"index.html": "7b5bc768a4639b7048d4d0cbf4764aab",
"/": "7b5bc768a4639b7048d4d0cbf4764aab",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
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
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
