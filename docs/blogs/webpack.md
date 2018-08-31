## 由 CommonsChunk 到 SplitChunk

### webpack3中的CommonsChunkPlugin
**先上一套代码:**

```js{2}
fuck.js
export const fuck = item => item + 2;

main1.js
import {fuck} from './fuck';
import $ from 'jquery';
console.log($，`first  ${fuck}`);

main2.js
import {fuck} from './fuck';
import $ from 'jquery';
console.log($，`second ${fuck}`);
```

webpack3 中有一个插件`CommonsChunkPlugin`,打包时可以把多处 import 的模块提取到公共文件，避免重复下载。是用来提取第三方库和公共模块，避免首屏加载的 bundle 文件或者按需加载的 bundle 文件体积过大，从而导致加载时间过长，优化必备。

过程不多说，直接上配置。

```js
new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks (module) {
    return (
        module.resource &&
        /\.js$/.test(module.resource) &&
        module.resource.indexOf(
        path.join(__dirname, '../node_modules')
        ) === 0
    )
    }
}),
new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
}),
new webpack.optimize.CommonsChunkPlugin({
    name: 'app',
    async: 'vendor-async',
    children: true,
    minChunks: 3
}),
```

有一点需要注意，`[hash]`适用于开发环境，每次编译都会改变，而`[chunkhash]`适用于生产环境，为了迎合浏览器的缓存机制。所以在生产环境，output 的:
`chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')`

 * 第一个配置，minChunks的规则是:
`minChunks: number|Infinity|function(module, count) => boolean`
使用上述函数的写法保证了vendor中,只保留第三方库。而不会把runtime webpack运行时的代码包括进去，因为不把`runtime`剥离出来，本地的代码一旦改变，无论引用的第三方库改不改变，`vendor`都会变，那样的话生产环境浏览器会再次加载。
* 再说第二个配置`mainfest`:
用来引导所有模块的交互。manifest文件包含了加载和处理模块的逻辑，有了它，runtime会根据manifest文件来处理和加载模块
* 再说第三个配置`async`和`children`:
```js
#[]中是依赖，callback中写入require的东西，最后一个参数是output的chunkFilename
require.ensure([], function(require){
    require('./first.js');
},'name');
```
* Lazy Loading，懒加载或者按需加载，属于code split的一部分。当chilren为true的时候，`source chunk`通过`entry chunks`进行code split,children 可以用来把 `entry chunk` 创建的 `children chunks` 的共用模块合并到自身，但这会导致初始加载时间较长.async就解决了children:true时合并到`entry chunks`自身时初始加载时间过长的问题，async设为true时，`commons chunk` 将不会合并到自身，而是使用一个新的异步的`commons chunk`。当这个`children chunk` 被下载时，自动并行下载该`commons chunk`。具体的分析可以看[这里](http://qiutianaimeili.com/html/page/2018/06/d348hdviz3w.html)
* chunk分为async和sync
>Async chunks are loaded on demand (lazy loaded) and you would see network request for async chunk files in developers tool.
  
### webpack4中的SplitChunkPlugin
webpack文档中有这么一句话
>Originally, chunks (and modules imported inside them) were connected by a parent-child relationship in the internal webpack graph. The CommonsChunkPlugin was used to avoid duplicated dependencies across them, but further optimizations were not possible.

每次切割之后，生成一种父子关系，更深一步的优化还是要靠SplitChunkPlugin

[这篇以react为例子的SplitChunkPlugin用法写的不错](https://itnext.io/react-router-and-webpack-v4-code-splitting-using-splitchunksplugin-f0a48f110312)

