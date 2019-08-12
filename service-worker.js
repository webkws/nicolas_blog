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
    "revision": "e9546e0ea3d2430d5a2441619ee8283a"
  },
  {
    "url": "about/index.html",
    "revision": "03e59f87c75aabc4635669d21830f1ff"
  },
  {
    "url": "assets/css/0.styles.702c3d49.css",
    "revision": "8f58bd413f733aa9a5ec6bd85f1074f5"
  },
  {
    "url": "assets/img/cache_example.b3a6283d.png",
    "revision": "b3a6283dd4253ca8676627dd27a07176"
  },
  {
    "url": "assets/img/cookie_http.cdb130e6.png",
    "revision": "cdb130e6a4f74e94fe6d9f6d30494772"
  },
  {
    "url": "assets/img/git-cheatsheet.a3561b65.jpg",
    "revision": "a3561b658f0076a961943d63cee33ad4"
  },
  {
    "url": "assets/img/git-model@2x.b0f0c99b.png",
    "revision": "b0f0c99b2fcea42c6758dc2b95618824"
  },
  {
    "url": "assets/img/html_render.1e08f9a1.png",
    "revision": "1e08f9a1647d3f226dcb1e4820f62b70"
  },
  {
    "url": "assets/img/http_request.c5c47477.png",
    "revision": "c5c474773650709e37728387d81bbb6f"
  },
  {
    "url": "assets/img/ios_date.8b42e810.png",
    "revision": "8b42e8109b1a7aa5b2f1a0db07dc82c5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vue_unwatch.47c1c1ab.png",
    "revision": "47c1c1ab88c6080d1941f0502dd9ad12"
  },
  {
    "url": "assets/img/webpack-timeline.24317634.png",
    "revision": "2431763495a481c0539e0ea3bc737cee"
  },
  {
    "url": "assets/js/10.12fec6a4.js",
    "revision": "0c2a15513a38820a0fe6c16738565a3a"
  },
  {
    "url": "assets/js/11.b0b60609.js",
    "revision": "ee651e377be8b5ea2806d390189fdd85"
  },
  {
    "url": "assets/js/12.56bcea60.js",
    "revision": "6dc8b1edffdcee81d7ff9c9810d2ad91"
  },
  {
    "url": "assets/js/13.dbc3f0c5.js",
    "revision": "177c8e12951ce2c7c79f75e437170e24"
  },
  {
    "url": "assets/js/14.4268a1c1.js",
    "revision": "fed134c1125f9e94ff5ef7019985786e"
  },
  {
    "url": "assets/js/15.a82b5d46.js",
    "revision": "96cdfcc648e835cd3b377619bcb46b7a"
  },
  {
    "url": "assets/js/16.6845d2c0.js",
    "revision": "a88daeb06463324cead8cbf53c9b2cb6"
  },
  {
    "url": "assets/js/17.280974b2.js",
    "revision": "081f8f1616332ca8cd62173803b17063"
  },
  {
    "url": "assets/js/18.3efbe42a.js",
    "revision": "2f5e068667180d8aa8b0b3de83a7ecc1"
  },
  {
    "url": "assets/js/19.b2cfa31b.js",
    "revision": "453d122c4d8dab519eb080026f5004a7"
  },
  {
    "url": "assets/js/2.46a28983.js",
    "revision": "374a947e93522da5f24bc5d4601c181b"
  },
  {
    "url": "assets/js/20.6150cfce.js",
    "revision": "94a456b4cc8447dd2f4d7db644568c4e"
  },
  {
    "url": "assets/js/21.d6e364bc.js",
    "revision": "576042d8d0f690509b62fe2e262b4ae4"
  },
  {
    "url": "assets/js/22.8b69b201.js",
    "revision": "1d49be7ca199ed9c39aaa0b116cca2ed"
  },
  {
    "url": "assets/js/23.3b3e70eb.js",
    "revision": "84996082974ac757cb9e3778d64abe06"
  },
  {
    "url": "assets/js/24.ae14d3b9.js",
    "revision": "ccd7d1dbcdac072495027097971f25bd"
  },
  {
    "url": "assets/js/25.8bd460fb.js",
    "revision": "937f5dd0c6eeea94d13fc1b361da7590"
  },
  {
    "url": "assets/js/26.6431c747.js",
    "revision": "a7b876152b704aa6929beb90dd44dd09"
  },
  {
    "url": "assets/js/27.28609ca5.js",
    "revision": "98b4e39f772fca2d99e0b21c8169a2c4"
  },
  {
    "url": "assets/js/28.069623ca.js",
    "revision": "27360d4ddf03f6a12742c83d03645e10"
  },
  {
    "url": "assets/js/29.a95ca43d.js",
    "revision": "a1ce235940e8725523581bafe3c1218e"
  },
  {
    "url": "assets/js/3.beca16df.js",
    "revision": "a19173b9f5a9a4f171f6a8a535366791"
  },
  {
    "url": "assets/js/30.1c0e0d8c.js",
    "revision": "753155fc1a8a091d0fe276238a601fa9"
  },
  {
    "url": "assets/js/4.1718758b.js",
    "revision": "9e9da62d6b621fa32f631d298f9ec313"
  },
  {
    "url": "assets/js/5.eac66c5d.js",
    "revision": "5d25adbb767a7463482f3b85c6e4aca4"
  },
  {
    "url": "assets/js/6.af070ff6.js",
    "revision": "de2e067879a40683d4bb755da469efb4"
  },
  {
    "url": "assets/js/7.d05c8e52.js",
    "revision": "5687745e764165213b41bdbf0d6eb8da"
  },
  {
    "url": "assets/js/8.40f75c88.js",
    "revision": "294750bb0c3a80922b6a67e533489d3e"
  },
  {
    "url": "assets/js/9.6edef93c.js",
    "revision": "e7ca701749fc63332ed914b08a255876"
  },
  {
    "url": "assets/js/app.8757db7b.js",
    "revision": "1769d1b444acddfad0232cf6cd9d2e89"
  },
  {
    "url": "blogs/canvas.html",
    "revision": "c5d31b132a08c478f871981a8fb67b58"
  },
  {
    "url": "blogs/curry_functions.html",
    "revision": "8551f2c66fbbece0cfb186860c8e7e80"
  },
  {
    "url": "blogs/data_structures.html",
    "revision": "8fba30bb0c3aa1d494cf5086a28da66d"
  },
  {
    "url": "blogs/es6_tips.html",
    "revision": "d93923849418d9b572384d75eefd3de8"
  },
  {
    "url": "blogs/index.html",
    "revision": "d6819cbe4af952db34bbc435df2e30d7"
  },
  {
    "url": "blogs/issues.html",
    "revision": "27793aa98cf29ff35db6e9201a5ff3e7"
  },
  {
    "url": "blogs/js_optimization.html",
    "revision": "944096bc0e58cee33573894a6b31b0bb"
  },
  {
    "url": "blogs/mobile_unit.html",
    "revision": "18e1bbca7ddc1bf7cd29d5fbee7b1636"
  },
  {
    "url": "blogs/oocss.html",
    "revision": "80c72540fb751fc0a93dd5d5b150ef73"
  },
  {
    "url": "blogs/safe_access.html",
    "revision": "2ac0a28d020104c98909a304eed56b59"
  },
  {
    "url": "blogs/sass.html",
    "revision": "38f930195ef3d8e056cb181ca5fe88b1"
  },
  {
    "url": "blogs/sentry.html",
    "revision": "b47613256396ef4a216b398a525228b7"
  },
  {
    "url": "blogs/vue_inject.html",
    "revision": "129039bcf7de87af4e629d28267ae1b6"
  },
  {
    "url": "blogs/vue_watch.html",
    "revision": "aba00ffa65ae9d90abd766255a28581b"
  },
  {
    "url": "blogs/web_optimization.html",
    "revision": "a5b10eac110b52f70c8b161c9a8460b9"
  },
  {
    "url": "blogs/webpack.html",
    "revision": "d9e7884be44dc3df699041ebb44b791f"
  },
  {
    "url": "cache_example.png",
    "revision": "b3a6283dd4253ca8676627dd27a07176"
  },
  {
    "url": "cookie_http.png",
    "revision": "cdb130e6a4f74e94fe6d9f6d30494772"
  },
  {
    "url": "docs/awesome.html",
    "revision": "59742921b7cbd4d72030b62ec7858b84"
  },
  {
    "url": "docs/community.html",
    "revision": "bc076073f431e994b8752bb610135916"
  },
  {
    "url": "docs/git_collect.html",
    "revision": "89d0362c0deb3890a0a4beaf802a8d0b"
  },
  {
    "url": "docs/http.html",
    "revision": "bd0f5907e90aafb1c99b23e3cb7392f5"
  },
  {
    "url": "docs/index.html",
    "revision": "a52e090f0de8f2d06a2ac7ed79ddda31"
  },
  {
    "url": "docs/markdown.html",
    "revision": "cd3e9d6de427cfe875c4d50da08c5432"
  },
  {
    "url": "docs/nuxt_collect.html",
    "revision": "e721720d391b2262ce38e51a5a0ce721"
  },
  {
    "url": "docs/standard_style.html",
    "revision": "e08634f2aaebec2564ab78093db0709e"
  },
  {
    "url": "git-cheatsheet.jpg",
    "revision": "a3561b658f0076a961943d63cee33ad4"
  },
  {
    "url": "git-model@2x.png",
    "revision": "b0f0c99b2fcea42c6758dc2b95618824"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "html_render.png",
    "revision": "1e08f9a1647d3f226dcb1e4820f62b70"
  },
  {
    "url": "http_request.png",
    "revision": "c5c474773650709e37728387d81bbb6f"
  },
  {
    "url": "icons/logo.jpg",
    "revision": "50ec42c8a8ea990c85ee28ff241f1504"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "1e72e5bc55238fd033fb5a0d453a7f95"
  },
  {
    "url": "ios_date.png",
    "revision": "8b42e8109b1a7aa5b2f1a0db07dc82c5"
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
    "url": "logo.jpg",
    "revision": "50ec42c8a8ea990c85ee28ff241f1504"
  },
  {
    "url": "vue_unwatch.png",
    "revision": "47c1c1ab88c6080d1941f0502dd9ad12"
  },
  {
    "url": "webpack-timeline.png",
    "revision": "2431763495a481c0539e0ea3bc737cee"
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
