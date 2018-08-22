## 回调地狱的救赎

* [promise最佳实践](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) 
* [promise教学](https://javascript.info/promise-basics) 
* [async/await基础教学](https://javascript.info/async-await) 
* [async/await进阶教学](https://www.youtube.com/watch?v=568g8hxJJp4) 
* [async/await blog1](http://2ality.com/2016/10/async-function-tips.html) 
* [async/await blog2](https://alligator.io/js/async-functions/) 
* [escape the async/await hell](https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c) 
* [promise的简单实现](https://levelup.gitconnected.com/understand-javascript-promises-by-building-a-promise-from-scratch-84c0fd855720) 

## axios配置(vue项目中的ajax配置)
[vue的插件写法](https://cn.vuejs.org/v2/guide/plugins.html)
```
import Vue from 'vue'
import axios from 'axios'
import logout from '~/util/logout' //退出函数
import { Message } from 'element-ui'
Vue.prototype.$message = Message

const error = err => Message.error({ duration: 2000, message: '系統更新中...' })

const axiosPlus = {};

const ajaxCallback = () => {};




```


axios 在[坑](https://cnodejs.org/topic/57e17beac4ae8ff239776de5)太多不好用时可选择[superagent](https://github.com/visionmedia/superagent)