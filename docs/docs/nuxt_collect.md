# Nuxt

### nuxt是什么？
- 🐬[官方文档](https://nuxtjs.org/)
- [Nuxt的总结](https://www.sitepoint.com/nuxt-js-universal-vue-js/)、🚀[中文版](https://w3ctech.com/topic/2067) 
- [Nuxt demos](https://github.com/nuxt/nuxt.js/tree/dev/examples)
- [Live Demo](https://nuxtjs.org/examples)
- [特殊的钩子Async Data](https://zendev.com/2018/06/07/async-data-options-in-vue-nuxt.html)
- [asyncData和fetch的区别](https://github.com/nuxt/nuxt.js/issues/1432)
- [Nuxt的lifecyle](https://github.com/nuxt/nuxt.js/issues/2521)

### Nuxt的常见用法
我将官网的demo融合成了一个，带有关键性的注释
🚀[直达](https://github.com/webkws/nuxt-examples)

### 关于Nuxt的常见issue <Badge text="0.10.1+" type="stable"/>
- [刷新与asyncData钩子](https://nuxtjs.org/api#the-asyncdata-method) **Only server-side**
- [asyncData钩子中使用promise.all](https://github.com/nuxt/nuxt.js/issues/978)
- [fetch和async只在页面级组件可用](https://github.com/nuxt/nuxt.js/issues/1133)
- [以上钩子刷新页面会报错](https://github.com/nuxt/nuxt.js/issues/2492#issuecomment-374859362)
- [刷新页面asyncData传参问题](https://stackoverflow.com/questions/46127680/in-nuxt-js-vue-js-no-parameters-are-passed-in-refresh-f5)
- [论asyncData的重要性](https://stackoverflow.com/questions/48005548/what-is-different-between-asyncdata-and-methods-in-nuxt-js)
- [Vuejs Error](https://stackoverflow.com/questions/47862591/vuejs-error-the-client-side-rendered-virtual-dom-tree-is-not-matching-server-re?rq=1) (`The client-side rendered virtual DOM tree is not matching server-rendered`)的解决方案


- 由`admin/test` nuxt-link 跳转到`admin/test/1` 时，不会执行`created`,一些请求，可由asyncData来完成,如果不想watch route的话.
- `asyncData fetch` 的`request`仅在`process.server`为false时可调用
- `process.server` 仅在node控制台可打印为true,其他情况均为false,不可用于`created`生命周期作判断
- 依据 `pages/` 目录结构自动生成 `vue-router` 模块的[路由配置](https://zh.nuxtjs.org/guide/routing)，但是页面路由有bug，具体看[Issue](https://github.com/nuxt/nuxt.js/issues)
    