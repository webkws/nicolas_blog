# 函数柯里化(Curry in JS)

最近接触了[函数式编程](http://www.ruanyifeng.com/blog/2012/04/functional_programming.html)，学会了柯里化，简单做个笔记，加深印象。

Curry的概念很简单，就是通过传入一个参数就可以呼叫一个function去处理剩下的参数，可以一次性的呼叫`Curry function`,也可以每次只传一个参数。起到了`延迟计算`、`参数复用`、`动态生成函数`的作用。

Youtube里一个视频这样总结的: `Curry is when a function doesn't take all of its arguments upfront instead, it wants you to give it the first argument and then the function returns another function which you are supposed to call with the second argument and so on untill all arguments have been provided and then the function at the end of the chain will be the one that returns the value you actually want`

## Curry
先看一下[First-class function的概念](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)，简单来说就是`treated like any other variable`,这里是可以作为参数传递的例子.
```js
const someFunction = () => console.log('hello wolrd')
//第1种方式
const firstClass1 = func => func();
firstClass1(someFunction)// 'hello wolrd'

//第2种方式
const firstClass2 = () => someFunction
firstClass1(firstClass2()) //'hello wolrd'
```

来个简单的例子看一下curry:
```js
//古老的add方法
const notCurry = (x, y, z) => x + y + z;
//es6书写的curry function
const curry = x => y => z => x + y + z;
//可以这样使用
const iKnowTwoParams = curry(1)(2);
//上边一行 相当于把参数固化了,返回了   z => 1 + 2 + z 这个函数 就等着最后一个z了
const result = iKnowTwoParams(3) // 6
```
用马冬梅来个更深刻的固化参数例子
```js
var whatName = a => b => c => a + b + c
const mFunc = whatName('马')
const mdFunc =  mFunc('冬')
//马冬梅
const mdm = mdFunc('梅')
```
类似的关于字符串substr的如下:
```js
//古老的substr的写法
const iWantSubStr = (str, start, length) =>str.substr(start, length)
//下面改为curry
const curriedSubstr = start => length => str => str.substr(start, length);
//然后使用
const getSubstring = (start, length, str) => curriedSubstr(start)(length)(str);
//get第一个单词
const getFirstCharacters = (length, str) => curriedSubstr(0)(length)(str);
//get第一个字母
const getFirstCharacter = str => curriedSubstr(0)(1)(str);
```
用lodash的curry方法也可以把普通函数转化为curry function，具体的curry的实现后边有
```js
//比如我要使用filter筛选出有橡胶果实的男主角.
//先用古老方法
var onePiece = [
    { hero:'路飞', fruit:'橡胶果实' },
    { hero:'卡塔庫栗', fruit:'糯糯果实' },
    { hero:'big mom', fruit:'魂魂果实' }
]
let hasFruit = (fruit, obj) => obj.fruit === fruit;
const hero = onePiece.filter(x => hasFruit('橡胶果实', x));
//再使用lodash使hasFruit柯里化
import '_' from 'lodash/curry'
const hasFruitCurry =  _.curry((fruit, obj) => obj.fruit === fruit);
const heroCurry = onePiece.filter(hasFruitCurry('橡胶果实'))

```

在vue中有个最常用的例子，是`code split`里的异步组件的引入路径的代码
```js
const AsyncMultComp = dir => component =>({
  component: import(`../components/${dir}/${component}.vue`),
  delay: 100,
  timeout: 3000
})

//这样就固化了dir这个参数 比如用起来可以这样:
const curriedComp = AsyncMultComp('admin/user');

//然后参数复用,爽
const com = curriedComp('OrderList')
```


## pipe和compose
pipe和compose其实就是参数是相反的方向,先来看一下这段代码
```js
const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const get6Characters = string => string.substring(0, 6);
const reverse = string => string.split('').reverse().join('');
const result = reverse(get6Characters(uppercase(getName({name:'Nicolas_Cage'}))))
这个就是所谓的pipeline,前一个函数的输出是后一个函数的输入
```
用reduce改写一下
```js
const pipe = (...fns) => obj => fns.reduce((f, g) => g(f), obj);
pipe(getName, uppercase, get6Characters, reverse)({name:'Nicolas_Cage'})//ALOCIN
```
以上是pipe,compose其实和pipe一样，只是参数的方向反了
```js
//利用了reduceRight即可
const compose = (...fns) => obj => fns.reduceRight((f, g) => g(f), obj);
compose(reverse, get6Characters, uppercase, getName)({name:'Nicolas_Cage'})//ALOCIN
//也可以使用args的reverse
const compose = (...fns) =>pipe.apply(pipe, fns.reverse())
//以上都是一元参数，多个参数可以这么写
const compose (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
```
慢慢学函数式编程吧。



