# js优化(只谈写法)

## Best practices
* 用`===`，而不是`==`,遇到不同类型时，容易出问题
* 不使用`eval`,相当降低js的表现，还会有risk
* 
```js
if(someVariableExists)
   x = false
//不要省略括号,除非有return
if(true) return 'nicely done';
```
* `for`循环中的数组长度，如果是外部读取的，可以先存起来
* `for`遍历`Object`不要使用`in`,`Object.keys()`最佳
* 尽量少的使用`Global value`
  ```js
  var firstName = 'John',
      lastName = 'Snow';
  //better
  var obj={
      firstName: 'John',
      lastName: 'Snow'
  }
  ```
* use`{}`而不是`new Object()`，use`[]`而不是`new Array`，
* `switch`要用`default`结尾
* `Undefined` is Not `Null`
* 替换和查找尽量多的使用`RegExp`，正则是C的API
* `x++` is better than `x = x +1`
* 把数字转换成字符串性能上`("" +) > String() > .toString() > new String()`
* 尽量多的使用js的内部对象，比如浮点数转换成整型`Math.round`is better than `parseInt`,后者是把字符串转化为数字
* 大的js对象尽量使用缓存
* `&&`和`||`短路表达式[这里](https://blog.mariusschulz.com/2016/05/25/the-andand-and-operator-in-javascript)，比如我项目中的鉴权页面工具的一个代码片段:
```js
name === 'login' ? user.token && redirect('/home') : isLoginRoute(name) && !user.token && process.browser && redirect('/login')
```

## 算法相关
* 快排[wiki](https://zh.wikipedia.org/wiki/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F#JavaScript )是这个写法，也可以这么写
```js
const quickSort = (arr) => {   
	if (arr.length <= 1) return arr;
    const [head, ...tail] = arr;
    const less = tail.filter(i => i <= head);
    const greater = tail.filter(i => i > head);
    return quickSort(less).concat([head]).concat(quickSort(greater));
};
```
* 递归
```js
const factorial = number => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
};
//better
//尾调用优化 了解一下
const factorial = number => {
  return number < 2 ? 1 : number * factorial(number - 1);
};
```
  
先说这么多吧，后续再补充