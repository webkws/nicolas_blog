# Standard <Badge text="0.10.1+" type="tip"/>

## 规范 
- js使用[Airbnb JavaScript Style Guide](https://github.com/yuche/javascript/blob/master/README.md) 

- [css代码规范参考](http://zoomzhao.github.io/code-guide/) 

- 外置样式很多时不建议使用`vue-loader`的scoped [Scoped css for dynamic element](https://github.com/vuejs/vue-loader/issues/1033)
  
- 根据情况使用 [/deep/](https://github.com/vuejs/vue-loader/issues/661)
  
- [值得参考的css理论：OOCSS、SMACSS与BEM](https://segmentfault.com/a/1190000000704006)
  
- [immutable和lodash](https://www.jianshu.com/p/0fa8c7456c15) 看看用哪个

- [CSS Class 命名](http://zoomzhao.github.io/code-guide/#css-classes) BEM略复杂，不想用
  
### vue中  
- [`Vue 组件细则`](https://vue-loader-v14.vuejs.org/zh-cn/start/spec.html) 
- 尽可能用组件自定义事件 如`el-select @change`代替`vue watch`
  
- 事件命名可参考 **Element-ui**的 `node_modules\element-ui\packages\table\src\table-header.js:110`
- 善于利用vuex的`dispath`进行预加载，比如用户登陆时可以加载主页的静态资源
- 列表相关的`CRUD`解耦，新增，修改，删除操作完后不要去`getList`，仅在前端实现状态更新
- 前端请求防止高并发的`loading`相关，比如按钮的高频点击，可以写个全局`mixin`，待ajax结束把`loading`关掉，推荐使用`promise.finally()`，记得使用`polyfill`
- vue中善于利用`Destructuring`
- [更多](https://vuejs.org/v2/style-guide/)🚀

## 项目示例汇总 

- 为了使用函数参数重载，可以不遵循[`airbnb7.7`](https://github.com/airbnb/javascript#es6-default-parameters)
- 箭头函数 `{}` 和 `return` 省略，可尽量省略`return`和花括号，使用vscode格式化工具`prettier`自动换行处理
  
- 项目暂不使用`Class`，推荐模块组合方式
  
- 模块`export export { zip, flatten, camelCase, sumBy } from 'lodash'` 生产后的lodash会打包多余模块，尽量让`import`和`export`各司其职
  
- 代码块，空白，逗号 使用vscode格式化工具prettier自动换行处理
  
- 不使用分号，遇到两个 IIFE 合并时手动加
  
- `String`到`Number`类型转换 `'3'`直接使用`+'3'`转换
  
- 文件命名规则 nuxt项目中pages使用下划线 _ ，components组件使用驼峰`camelCase`,其他文件使用-连接符
  
- 项目尽可能不使用`jQuery`，使用 `$` 作为存储 `vue $refs DOM` 节点对象的变量名前缀
  
- vuetify源码中有大量的`vue unwatch`
  ```js
  //node_modules\vuetify\src\mixins\validatable.js
  beforeDestroy () {
    this.form && this.form.unregister(this)
  }
  ```

- 页面表格多且功能繁琐，尽量使用[`vue-data-tables`](https://github.com/njleonzhang/vue-data-tables)
  
- 不同页面，相同class类名麾下的css，浏览器不会继续加载第二次，除非刷新页面，写style不加scoped时要特别注意,比如登陆页和注册页共用一个div时，尽量使用OOCSS方案，使用bootstrap的多className写法.

  
## 性能  
  - [On Layout & Web Performance](http://kellegous.com/j/2013/01/26/layout-performance/)
  - [String vs Array Concat](http://jsperf.com/string-vs-array-concat/2)
  - [Try/Catch Cost In a Loop](http://jsperf.com/try-catch-in-loop-cost)
  - [Bang Function](http://jsperf.com/bang-function)
  - [jQuery Find vs Context, Selector](http://jsperf.com/jquery-find-vs-context-sel/13)
  - [innerHTML vs textContent for script text](http://jsperf.com/innerhtml-vs-textcontent-for-script-text)
  - [Long String Concatenation](http://jsperf.com/ya-string-concat)
  - [Are Javascript functions like `map()`, `reduce()`, and `filter()` optimized for traversing arrays?](https://www.quora.com/JavaScript-programming-language-Are-Javascript-functions-like-map-reduce-and-filter-already-optimized-for-traversing-array/answer/Quildreen-Motta)
  - [jsperf](https://jsperf.com/) 分析代码性能

## 相关资源
**了解 ES6**

  - [ECMA 2015 (ES6) 规范草案](https://people.mozilla.org/~jorendorff/es6-draft.html)
  - [ExploringJS](http://exploringjs.com/)
  - [ES6 兼容性表](https://kangax.github.io/compat-table/es6/)
  - [ES6 特性全面概况](http://es6-features.org/)
  - [ES Checker](http://ruanyf.github.io/es-checker/)  

**看看这个**

  - [Annotated ECMAScript 5.1](http://es5.github.com/)

**工具**

  - 代码风格检查器（Lint）
    + [ESlint](http://eslint.org/) - [Airbnb Style .eslintrc](https://github.com/airbnb/javascript/blob/master/linters/.eslintrc)
    + [JSHint](http://www.jshint.com/) - [Airbnb Style .jshintrc](https://github.com/airbnb/javascript/blob/master/linters/jshintrc)
    + [JSCS](https://github.com/jscs-dev/node-jscs) - [Airbnb Style Preset](https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json)

**其他风格指南**

  - [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
  - [jQuery Core Style Guidelines](http://docs.jquery.com/JQuery_Core_Style_Guidelines)
  - [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwldrn/idiomatic.js/)
  - [Naming this in nested functions](https://gist.github.com/4135065) - Christian Johansen
  - [Conditional Callbacks](https://github.com/airbnb/javascript/issues/52) - Ross Allen
  - [Popular JavaScript Coding Conventions on Github](http://sideeffect.kr/popularconvention/#javascript) - JeongHoon Byun
  - [Multiple var statements in JavaScript, not superfluous](http://benalman.com/news/2012/05/multiple-var-statements-javascript/) - Ben Alman


**拓展阅读**

  - [Understanding JavaScript Closures](http://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/) - Angus Croll
  - [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html) - Dr. Axel Rauschmayer
  - [You Might Not Need jQuery](http://youmightnotneedjquery.com/) - Zack Bloom & Adam Schwartz
  - [ES6 Features](https://github.com/lukehoban/es6features) - Luke Hoban
  - [Frontend Guidelines](https://github.com/bendc/frontend-guidelines) - Benjamin De Cock

