# Vue中的Provide/Inject

## Provide/Inject

Vue官方中这么说到
>这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。

这个是vue2.2之后的新特性，有了这一对，可以给所有后代提供数据流，上demo:

```js
const Ancestor = {
 provide: {
   foo: 'bar'
  }
}
const Child = {
 inject: ['foo']
}
new Vue({
	el: '#app', 
 	components: { Child, Ancestor }
})
//html
<Ancestor>
    <Child/>
</Ancestor>

```

然而官网中有这么一句话:`绑定并不是可响应的。这是刻意为之的。除非传入一个可监听的对象`，但是并没有给demo，这里试一下：

```js
// html
<div id="test">
  <input v-model="bar">
  <child></child>  
</div>
// js
const Child = {
	inject: ['foo'],
	template: `<div>{{ foo.bar }}</div>`,
}

new Vue({
  el: '#test',
  provide () {
    const foo = {}
    Object.defineProperty(foo, 'bar', {
       enumerable: true,
       get: () => this.bar,
    })
    return { foo }
  },
  data: () => ({ bar: 'baz' }),
  components: { Child }
})

```
如果Ancestor组件需要传递的数据或者方法过多，可以直接传递this
```js
const Ancestor = {
    provide () {
        return{
            fuck: this;
        }
  },
  methods: {
  	test () {
    	console.log('test');
    }
  },
}
const Child = {
    inject:['fuck'],
    //使用方法直接this.test即可

}
```


## 深入学习
- [vue技术内幕](http://hcysun.me/vue-design/) 
- [vue源码解析](https://ustbhuangyi.github.io/vue-analysis/)