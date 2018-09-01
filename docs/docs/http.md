# Http相关

## 回调地狱的救赎

- [promise最佳实践](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) 
- [promise教学](https://javascript.info/promise-basics) 
- [async/await基础教学](https://javascript.info/async-await) 
- [async/await进阶教学](https://www.youtube.com/watch?v=568g8hxJJp4) 
- [async/await blog1](http://2ality.com/2016/10/async-function-tips.html) 
- [async/await blog2](https://alligator.io/js/async-functions/) 
- [escape the async/await hell](https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c) 
- [promise的简单实现](https://levelup.gitconnected.com/understand-javascript-promises-by-building-a-promise-from-scratch-84c0fd855720) 



## @nuxtjs/axios配置
::: tip
写个关于axios的全局方法，各种处理http请求和处理数据，甚至可以掌握全局ui的。
这里个人喜欢使用`@nuxtjs/axios`(nuxt项目中的ajax配置)，可以和vuex更好的融合，同样nuxt可以省去很多路由配置。
:::
不多说，上代码吧
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


axios 在[坑](https://cnodejs.org/topic/57e17beac4ae8ff239776de5)太多不好用时可选择[superagent](https://github.com/visionmedia/superagent)