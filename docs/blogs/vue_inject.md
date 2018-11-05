# Vue中的奇淫技巧

## Object.assign

恢复某个组件中的初始状态
[stackoverflow](https://stackoverflow.com/questions/43643325/resetting-vuejs-data-properties-to-initial-values)

```js
Object.assign(this.$data, this.$options.data());
//上边的代码效果太宽,可以改为如下
Object.assign(this.$data.obj, this.$options.data().obj);
//当拿到后端的数据，赋值给data时 可以这么写
Object.assign(this.form, responseData);


//demo
async onRefresh(done) {
    //这里我只想初始化props，也就是 除listData, report_type, learned_status, tabIndex, status之外的prop
    //如果嫌麻烦的话 可以把一些变量定义在data.obj中，自己取舍
    //这里要注意, maskDOM为data中存的dom节点，这里tab页切换的时候 全屏遮罩不要置null,否则mounted就白玩了
    const { listData, report_type, learned_status, tabIndex, status, maskDOM, ...props } = this.$options.data();
    Object.assign(this.$data, props);
    await this.getList({ isFinite: false })
    done();
},

```

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