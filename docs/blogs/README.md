## Vue Plugin实战 <Badge text="0.10.1+" type="tip"/>
根据[官方文档](https://cn.vuejs.org/v2/guide/plugins.html),首先定义一个对象，给其添加`install`公开方法，在内部可以添加全部**方法**或**属性**、全局**指令**过滤和**过度**、还可以注入组件以及添加**实例方法**。
### 我们由简到难，先来个basic的,写个混合demo

```js
const MyPlugin = {
  install(Vue, options) {
  	Vue.mixin({
     //这里的写法和正常mixin没区别
      data(){
        return{
            //按钮的loading控制，防止频繁点击，发送http请求给后端服务器造成压力.
            btnLoading1:false,
            btnLoading2:false
        }
      },    
      mounted() {
        console.log('Mounted!');
      }
    });
    Vue.component(MyComponent.name, MyComponent)
    Vue.directive(MyDirective.name, MyDirective)
    Vue.myAddedProperty = 'Example Property'
    Vue.myAddedMethod = function() {
      return Vue.myAddedProperty
    }
    Vue.prototype.$myAddedProperty = 'Example Property'
    Vue.prototype.$myAddedMethod = function() {
      return this.$myAddedProperty
    }
    
  }
};
export default MyPlugin;

```

如果Vue在global中定义了，也可以这么use
```js
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MyPlugin)
}
```

### 再来个wordPress的practice

```js
//plugins/wordpress
export default {
    install(Vue, options){
        const {shortcodes, helpers} = options
        Vue.prototype.$parseContent = function (content) {
            //给vue添加一个实例方法。
            return helpers.parseContent(content, shortcodes)
        }
    }
}
//main.js
import {WordExpressShortcodes, WordExpressHelpers} from 'wordexpress-tools'
import WordExpressPlugin from '/plugins/wordpress'
//使用
Vue.ues(WordExpressPlugin,{
    shortcodes: WordExpressShortcodes,
    helpers: WordExpressHelpers
})
//example.vue中
<template>
  <div class="post-content" v-html="$parseContent(content)"/> 
</template>
```

### 再来个复杂点的指令相关
让我们写一个指令，限制当前标签最高显示100个字符，多出的省略，显示read more的标签
```js
//plugins/fieldFormatter.js
const FieldFormatter = {
  install(Vue, options) {
    Vue.directive('limit-characters', {
        //bind的具体参数请查看vue官方文档
      bind(el, binding, vnode, oldVnode) {
          //组件中不提供defaultValue就默认100
        const limit = binding.value || 100;
        const original = el.innerHTML;
        const summary = original.slice(0, limit);
        const expandLink = document.createElement('a');
        const collapseLink = document.createElement('a');
        //显示read more和read less        
        expandLink.innerHTML = 'Read more...';
        collapseLink.innerHTML = 'Read less...';
                
        expandLink.style.textDecoration = collapseLink.style.textDecoration = 'underline';
        expandLink.style.cursor = collapseLink.style.cursor = 'pointer';
                
        const expandNode = () => {
          el.innerHTML = `${original} `;
          el.appendChild(collapseLink);
        }
        
        const collapseNode = () => {
          el.innerHTML = `${summary}... `;
          el.appendChild(expandLink);
        }

        expandLink.addEventListener('click', expandNode);
        collapseLink.addEventListener('click', collapseNode)

        collapseNode();
      }
    })
  },
};

export default FieldFormatter;
```
接下来使用
```html
<p v-limit-characters="defaultCharacterLimit">{{ report.description }}</p>
```
### 再来个实例方法的
```js
const FieldFormatter = {
  install(Vue, options) {
    Vue.prototype.$filter = (dataset, query) => {
      return dataset.filter(item => {
        const queryKeys = Object.keys(query);
        for(let i = 0; i < queryKeys.length; i++) {
          const key = queryKeys[i];
          if(query[key]!== '' && !(key in item)) {
            return false;
          }
          if (item[key] !== query[key]) {
            return false;
          }
        }
        return true;
      });
    };
  }
}
```
使用
```js
computed: {
    filteredData() {
        return this.$filter(this.rawData, this.filter);
    },
}
```
### 再来个图片lazyload的
```js
install(Vue) {
    Vue.directive('src', {
      // 当被绑定的元素插入到 DOM 中时
      inserted(el, binding) {
        const top = el.getBoundingClientRect().top //滚动距离
        const wh = window.innerHeight //内容视口高度（ ie8以上兼容）
        const host = window.location.origin || 'http://' + window.location.host //baseUrl
        //图片加载
        function picture(el, binding, callback) {
          setTimeout(() => {
            const img = new Image()
            const url = binding.value //图片路径
            img.src = host + '/' + url
            img.onload = () => {
              el.src = host + '/' + url
              if (callback) {
                callback()
              }
            }
          }, 0)
        }
        //判读滚动距离是否小于内容视口高
        if (top < wh) {
          picture(el, binding)
        } else {
          window.addEventListener('scroll', scroll)

          function scroll() { 
            const range = el.getBoundingClientRect().top - wh //距离
            if (range < 0) {
              picture(el, binding, () => {
                window.removeEventListener('scroll', scroll)
              })
            }

          }
        }
      }
    })
  }
```
### 最后我们写个关于axios的全局方法，各种处理http请求和处理数据，甚至可以掌握全局ui的loading
::: tip
这里个人喜欢使用`@nuxtjs/axios`(nuxt项目中的ajax配置)，可以和vuex更好的融合，同样nuxt可以省去很多路由配置。
:::
上代码吧！
```js
import Vue from 'vue'
import axios from 'axios'
import logout from '~/util/logout'
import { Message } from 'element-ui'
Vue.prototype.$message = Message
//借用饿了么的ui组件，来进行ajax回掉后的状态ui处理
const error = err => Message.error({ duration: 2000, message: '系統更新，请稍后重新访问' })

const axiosPlus = {}

//ajax请求结束之后的回掉。正常情况直接cb(data),非正常请求要各种处理错误，error一下。
const ajaxCallback = (
  res,
  cb, { duration = 2000, url, errCb, showError = true } = {}
) => {
  const { error, message, data, errorCode } = res
  if (error) {
    if (showError) {
      let errMessage
      if (errorCode) {
        switch (errorCode) {
          case 100002:
            errMessage = '系统更新，请稍后重新登录！'
        }
      }
      return Message.error({ duration, message: errMessage || message })
    } else {
      return errCb && cb(res)
    }
  }
  cb(data)
}

//nuxt的坑点，有时刷新页面token消失，这里用axios重新设置一下
export const delayAjax = ($axios, store, callback) => {
  if (!$axios.defaults.headers.common.Token) {
    //fix f5 refresh
    return setTimeout(() => {
      $axios.setHeader('Token', store.state.user.token)
      callback()
    }, 50)
  }
  return callback()
}

//nuxt中写的plugin配置 参数带如下
export default ({ $axios, app, store, route, error, redirect }) => {
  $axios.defaults.timeout = 1000000000
  $axios.onError(err => {
    // 后端返回错误代码，跳转到登陆页
    if (err.code === 401) {
      redirect('/login')
    }
  })

  $axios.onResponse(response => {
    if (response.data) {
      const { data: { errorCode, version } } = response
      if (errorCode === 102901 || errorCode === 100002) {
        //logout是工具，传入app和错误代码，在logout中识别后立刻跳转到登陆页
        logout(app, errorCode)
      }
      //
    }
    return response
  })

  axiosPlus.install = function(Vue) {
    Vue.prototype.$axiosPlus = app.$axiosPlus = function(
      //这里没有使用解构，不想在使用axiosPlus的时候 多加个中括号
      url,
      _data = {},
      cb = () => {},
      cbCfg = {},
      //invoking是vue的全局data,防止按钮提交请求的高并发
      invoking = 'isInvoking'
    ) {
      let data = _data
      typeof _data === 'function' && ((data = {}), (cb = _data))

      return delayAjax(this.$axios, store, () => {
        return this.$axios
          .$post(url, data)
          .then(res => ajaxCallback(res, cb, {...cbCfg, url }))
          .catch(err => {
            if (url.includes('sentry')) return
            console.error('axios catch', url, err) //require!,it can be catch error,otherwise you don't know response error        
            cbCfg && cbCfg.catchCb && cbCfg.catchCb()
          })
          //finally是Stage 4阶段的，需要polyfill一下
          //使用es6-promise有时候也会报错，详情看es6-promise的issue吧
          //请求结束之后，按钮的loading改为false
          .finally(() => {
            invoking && (this[invoking] = false)
            cbCfg.finallyCb && cbCfg.finallyCb()
          })
      })
    }
  }
  Vue.use(axiosPlus)

}

```


### 第二种ajaxPlus

第二种使用了`axios.request`方法

```js

import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'
import router from '../router'

const ajaxPlus = {}

const errorMsg = (err = '系统错误，请稍后重新访问') => Message.error({
  duration: 2000,
  message: err
})

const ajaxCallback = (res, cb) => {
  const { data /**字段待定*/ } = res;
  cb(data);
}
axios.defaults.baseURL = '/api/v1';
axios.defaults.timeout = 50000;

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加一个响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const { data: { error_code, message } } = error.response;
    if (error_code === 2005 && router.currentRoute.path !== '/login') {
      store.commit('LOG_OUT');
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.path
        },
      })
    } else {
      console.log(error_code);
    }
    errorMsg(message);
    return Promise.reject(error.response.data)
  }
)

ajaxPlus.install = function (Vue) {
  Vue.prototype.$axios = axios
  Vue.prototype.$ajaxPlus = function (
    method,
    url,
    _data = {},
    cb = () => {},
    cbCfg = {},
    _invoking = 'invoking'
  ) {
    let obj = _data
    typeof _data === 'function' && ((obj = {}), (cb = _data))
    const param = method.toLowerCase() === 'get' ? 'params' : 'data'
    const opt = {
      url,
      method,
      [param]: obj
    }
    this[_invoking] = true;
    return axios.request(opt)
      .then(res => ajaxCallback(res, cb))
      .catch(err => {
        cbCfg && cbCfg.catchCb && cbCfg.catchCb()
      })
      .finally(() => {
        _invoking && (this[_invoking] = false)
      })
  }

  Vue.mixin({
    data() {
      return {
        invoking: false,
      }
    }
  })
}

export default ajaxPlus


```
