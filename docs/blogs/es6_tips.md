# ES6/ES7 Best Practice
一些常见的用法就不多说了，下面是我总结的一些不常见却很不错的。
## Tips <Badge text="0.10.1+" type="tip"/>
- 将对象彻底冻结
``` js
const constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
```

- 嵌套赋值
```js
let obj = {};
let arr = [];

({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
```

- 函数参数为函数的作用域问题
```js
//函数参数会形成单独作用域
var x = 1;
function foo(x, y = function() { x = 2; }) {
  var x = 3;
  y();
  console.log(x);
}

foo() // 3
x // 1
```

- 函数解构默认值(第1种最佳)
```js
//1
function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

//2
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
```


- `pipeline`
```js
//即前一个函数的输出是后一个函数的输入
const pipeline = (...funcs) =>
  val => funcs.reduce((a, b) => b(a), val);
```

- 尾调用`Fibonacci`优化
```js
//原递归:
function Fibonacci (n) {
  if ( n <= 1 ) {return 1};

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
//尾递归后 复杂度 O(1)
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) // 120
```


- `Array.from`和`spread`区别

  *除了Array.from可以处理array-like objects这种not iterable,而spread只可处理iterable*


- 使用`generator`实现数组的`flat`
```js
const flat = function* (a) {
  a.forEach(function (item) {
    if (typeof item !== 'number') {
      yield* flat(item);
    } else {
      yield item;
    }
  });
};
```
- `Proxy`写链式操作
```js
const pipe = (function () {
  return function (value) {
    var funcStack = [];
    var oproxy = new Proxy({} , {
      get : function (pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(function (val, fn) {
            return fn(val);
          },value);
        }
        funcStack.push(window[fnName]);
        return oproxy;
      }
    });
    return oproxy;
  }
}());
```
- `Promise`异步同步混合优先级
```js
console.log('sync1');

setTimeout(function() {console.log('setTimeout1')}, 0);

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {console.log('setTimeoutPromise')}, 0);
    console.log('promise');
    resolve();
});

promise.then(function() {
    setTimeout(function() {console.log('setTimeoutThen-1')}, 0);
    console.log('then-1');
}).then(function() {
    setTimeout(function() {console.log('setTimeoutThen-2')}, 0);
    console.log('then-2');
});

//.then方法的回调里面的异步任务，优先级比new Promise()外面的异步任务的优先级低

setTimeout(function() {console.log('setTimeout2')}, 0);

//.then方法的回调里面的同步任务，优先级比new Promise()外面的异步任务的优先级高
console.log('sync2');

//结果
// sync1
// promise
// sync2
// then-1
// then-2
// setTimeout1
// setTimeoutPromise
// setTimeout2
// setTimeoutThen-1
// setTimeoutThen-2
```
- `Class`使用mixin模块整合
```js
//深度拷贝
const copyProperties=function(target,source){
  for(let key of Reflect.ownKeys(source)){  //拿到源对象上的所有属性
    if(key!=='constructor'&&key!=='prototype'&&key!=='name'){  //过滤
      let desc=Object.getOwnPropertyDescriptor(source,key); // 获取指定对象的自身属性描述符
      Object.defineProperty(target,key,desc);
    }
  }
}
//mix函数
const mix=function(...mixins){
  class Mix{}  //声明一个空的类
  for(let mixin of mixins){
    copyProperties(Mix,mixin);  //深度拷贝
    copyProperties(Mix.prototype,mixin.prototype);  //也拷贝原型
  }
  return Mix
}

//最后
Class Son extends mix(Father1, Father2, Father3){
//constructor可书写默认参数    
constructor(name='John Snow', state='alive'){
    super();
    this.name=name;
    this.el='';
    this.methodFromFather1()
    this.methodFromFather2()
    this.methodFromFather3()
}
```

- [return-the-response-from-an-asynchronous-call](https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call/14220323#14220323)


- [数组的方法对空位的处理](http://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E7%9A%84%E7%A9%BA%E4%BD%8D)

- [WeakMap的真正用法](https://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap)

- [promise最佳实践](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
- [避免async/await hell](https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c)

::: tip
[`es6-promise`](https://github.com/stefanpenner/es6-promise)是对Promise的polyfill，这里有个[issue](https://github.com/stefanpenner/es6-promise/pull/331)
:::

## 最佳实践 <Badge text="0.10.1+" type="warn"/>
这里引入一些个人项目的代码片段