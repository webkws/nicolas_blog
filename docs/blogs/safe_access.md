# 前端数据容错

我认为前端的数据容错分为`数据处理`和`业务`

其中数据处理型包括js的取值、赋值、以及其它数据操作，业务无非就是前后端数据对接的规范化以及前端拿到数据的处理，需要考虑很多情况，够麻烦的，会浪费开发近七八分之一的时间，这里总结记录一下

## 数据处理

#### 取值赋值(null-safe)
现状:
```js
if (obj != null) iWant = obj.value;
const val = obj.list.item.string
```
可能报错`TypeError: Cannot read property 'val' of undefined`

开发中如此解决:
```js
if(obj&&obj.list&&obj.list.item){
  const val = obj.list.item.string
}
```
**解决方案:**
* 写法上优化
```
(((a.b || {}).c || {}).d || {}).e
```
* reduce方案
```js
const get = (path, o) => path.reduce((prev, cur)=> (prev && prev[cur]) ? prev[cur]:null , o);

//use
get(['list','item','string'], obj)
```
以上方法可以curry化，更方便，path总不能每次都写一次吧
```js
const get = path => obj => path.reduce((prev, cur)=> (prev && prev[cur]) ? prev[cur]:null , o);

const getStr = get(['list','item','string']);

//固化参数，会方便很多
getStr(obj1)
getStr(obj2)
```
* [lodash的get](https://lodash.com/docs/4.17.11#get)
* 递归
```js
const get = (prop, ...props) => obj => obj == null || prop == null ? obj : get(...props)(obj[prop]);
```
* try catch
```js

try { b = a.b.c.d.e } catch(e) {}

const tryCatch = f => try{
  return Right(f())
}catch(e){
  return Left(e) || defaultValue
}


function deepGet (obj, properties, defaultValue) {
    if (obj === undefined || obj === null) {
        return defaultValue;
    }
    if (properties.length === 0) {
        return obj;
    }
    var foundSoFar = obj[properties[0]];
    var remainingProperties = properties.slice(1);
    return deepGet(foundSoFar, remainingProperties, defaultValue);
}
//使用
deepGet(obj, ['a','c','d','e'], {});


//稳定版
function _try(func, fallbackValue) {
    try {
        var value = func();
        return (value === null || value === undefined) ? fallbackValue : value;
    } catch (e) {
        return fallbackValue;
    }
}
//使用
_try(() => user.address.postcode)
_try(() => user.address.postcode,'none');
```
* defineProperty版
```js
Object.defineProperty(Object.prototype, 'safeGet', { 
    enumerable: false,
    writable: false,
    value: function(p) {
        return p.split('.').reduce((acc, k) => {
            if (acc && k in acc) return acc[k];
            return undefined;
        }, this);
    }
});
//使用
obj.safeGet('a.c.d.e')
```

* ES6的proxy
```js
const isObject = obj => obj && typeof obj === 'object';
const hasKey = (obj, key) => key in obj;
const Undefined = new Proxy({}, {
  get: function(target, name){
      return Undefined;
  }
});
const either = (val,fallback) => (val === Undefined? fallback : val);

//代理
function safe (obj) {
  return new Proxy(obj, {
    get: function(target, name){
      return hasKey(target, name)
        ? isObject(target[name])
            ? safe(target[name])
            : target[name]
        : Undefined;
    }
  });
}
//使用
const mySafeObj = safe({
  a : 'www',
  d : {
    name : 'd'
  }
});
console.log(mySafeObj.d.e);

// returns our fallback value, of false
console.log(either(mySafeObj.f.e.name, false)); 

```
#### 取值赋值之外

继取值赋值之后的容错，大概就剩下拿到数据然后处理了吧切记，取到undefined或者null 不要随意给其处理函数比如`null.reduce`,多担心这种问题 就多做做容错吧，不行到话 直接写`try catch`


## 对接

对接这里就不谈了，根据前后端约定，做[全局ajax处理](../docs/https://webkws.github.io/nicolas_blog/docs/http.html)吧，去他么的业务.


<!-- ```
var count=1;
setInterval(function(){
$(".enter_input ").val("这是第"+count+"次求你了，账号17602172228 ，提现一个月了 赶紧退押金，我是学生可以申请免押， 支付宝账号2369990270@qq.com 余额我不要了 退我押金就行！");
var el=document.getElementById("downup");
var event = document.createEvent('Events');
event.initEvent('touchstart', true, true); 
el.dispatchEvent(event); 
if(count>5)$(".talk_box li").eq(1).remove();//消息超过5条移除之前的节点 防止消息越来越多页面卡顿
},30000)
``` -->

