/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6a4f1e8e5c984b4893191d6e02a11f83"
  },
  {
    "url": "assets/css/0.styles.45b07488.css",
    "revision": "5989a4afd61eaabd42e5600dc8107620"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c9e63eb3.js",
    "revision": "4fc78de0c8fbb408c54d24cd4f8bbcdf"
  },
  {
    "url": "assets/js/11.227c174b.js",
    "revision": "bf47546172b14ee161d5273ac67314e5"
  },
  {
    "url": "assets/js/12.f61585d1.js",
    "revision": "c288a51072e1769f9b8b17ded25ad3e3"
  },
  {
    "url": "assets/js/13.8d18a9f0.js",
    "revision": "f55c78714be7b4768f0808fdb335c5cd"
  },
  {
    "url": "assets/js/14.bcf87436.js",
    "revision": "e9bc3002fa39344b7f286d3ddb7a448c"
  },
  {
    "url": "assets/js/15.f3932905.js",
    "revision": "a4cfc1bb9a51d13555ff456a6a17ebb0"
  },
  {
    "url": "assets/js/16.8513a268.js",
    "revision": "de2aef933c0f566070de565c60bfc43c"
  },
  {
    "url": "assets/js/17.03893e1e.js",
    "revision": "db423cba7cfeb796ef5ca9023201860b"
  },
  {
    "url": "assets/js/18.9cc513e5.js",
    "revision": "3491613cd0f162eff9414ab747bd1d8e"
  },
  {
    "url": "assets/js/19.7b1ceede.js",
    "revision": "b7ebc8caef97542df639774f619a1887"
  },
  {
    "url": "assets/js/2.7706f099.js",
    "revision": "915df94d6729e94d2a0b5e1bc3153480"
  },
  {
    "url": "assets/js/3.24cb7c79.js",
    "revision": "e8d930671040b39caf5718c7bb7949d2"
  },
  {
    "url": "assets/js/4.2136d686.js",
    "revision": "aba33f3dac4755d205b1da957230707b"
  },
  {
    "url": "assets/js/5.5a12aac8.js",
    "revision": "7329bac1a756230b718cc43cf481b7a4"
  },
  {
    "url": "assets/js/6.42a4f234.js",
    "revision": "987fa5e8476df5cc9136c85b33535daa"
  },
  {
    "url": "assets/js/7.c814a5cb.js",
    "revision": "81bad8e450b8e13e45cde23438a94ba0"
  },
  {
    "url": "assets/js/8.65b32ed7.js",
    "revision": "561b7208cc9ed6abf749b6fd927e3468"
  },
  {
    "url": "assets/js/9.43940766.js",
    "revision": "1ac764ab2bef519132bb4ef672465542"
  },
  {
    "url": "assets/js/app.fb20b9f3.js",
    "revision": "cee985ff0dae4be85a88e0ba12644de7"
  },
  {
    "url": "assets/js/vendors~docsearch.41b707b5.js",
    "revision": "a0be910827ea424564dd7fd00f31079f"
  },
  {
    "url": "config/index.html",
    "revision": "7195460d33bb991650e71499be4b5e65"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "9bc24609cd52b40b70125f808228b63a"
  },
  {
    "url": "guide/assets.html",
    "revision": "eeaf502159a60051859e7bf905f0e825"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "bd05a03c4810f407fbcebae7f15c1fb7"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "41b7590d37f6b293f4594167c7fc6fcb"
  },
  {
    "url": "guide/deploy.html",
    "revision": "e1e964ef11a46e19db9a279d742c09d3"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "08daebae37fa6375c03d9c75e3512354"
  },
  {
    "url": "guide/i18n.html",
    "revision": "ef3b3a5af448dd4528ab29146bf11e42"
  },
  {
    "url": "guide/index.html",
    "revision": "155238b0b13e190d05932fb528c7790e"
  },
  {
    "url": "guide/markdown.html",
    "revision": "967e0ddad5a5b7ad62c5a1231e6a8b10"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "7c7217985854fcb409caa20573798555"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "e8a145c4767bf9bc59d8757b8ee4ccb6"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
