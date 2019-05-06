# 遇到过的Issue <Badge text="0.10.1+" type="tip"/>

### 雪碧图可以避免图片加载慢造成的hover闪烁效果
做过一次tab选项卡，显示图片的，看谷歌的时间线，图片加载过慢，导致选项卡都切换成功了，图片闪动的出现在了屏幕上,解决方案最后用的雪碧图
```css
$img-width: 24px;
$img-height: 24px;
$bgImg: image-url('toolbar.png');
@media-img {
  background-image: $bgImg;
  background-position: -($img-width * 5) -($img-height * 1);
  width: $img-width;
  height: $img-height;
}
```

### JS IOS/iPhone的Safari不兼容Javascript中的Date()问题
上图
![An image](../.vuepress/public/ios_date.png)
如图所示，上次后端返回第一种格式，safari浏览器invalid，查了一下[ECMA](http://ecma-international.org/ecma-262/5.1/#sec-15.9.1.15),更改如下:
```js
var dateString = "2018-12-31 00:00:00";
var d = new Date(dateString.replace(' ', 'T'));
// 或
var d = new Date(dateString.replace(/-/g, '/'));
```
**这两种情况的容错判断要记得加，若后端返回空，容易报错**,最好的解决办法直接用[date-fns](https://date-fns.org/)


### vue中的tab切换和unwatch解决重复http请求
问题描述：vue中`SPA`模式下的，三个选项卡，分别对应三个select（一共9个）来进行列表查询，查询条件被vue，listen，然后getlist。切换tab的首次来获取后端返回的`droplist`来进行select渲染，这时候会遇到多次http请求的情况，因为listen到了多次变化。
解决方案就是利用vue的`unwatch` api
```js
//监听条件列表
const statusSet = new Set();
const statusArr = ["param1", "param2", "param3", "param4"];
//fire函数
function initWatchers() {
  statusSet.clear();
  statusArr.forEach((i, index) => {
    this.$nextTick(function() {
      statusSet.add(this.$watch(i, val => val !== null && this.getList()));
    });
  });
}
created(){
    // fire them
    initWatchers.call(this);
}
//methods中
changeTab(){
    // unwatch
    statusSet.forEach(fire => fire());
    //...处理droplist,并且赋值status初始值
    //然后继续fire
    initWatchers.call(this);
}
```
### 后端返回列表后数据格式化处理较为繁琐

```html
//before
<el-table-column label="充值" prop="save" :formatter="formatter1"/>
<el-table-column label="活动" prop="event" :formatter="formatter2"/>
<el-table-column label="时间" prop="time" :formatter="formatter3"/>
```
总不能命令后端更改返回格式吧，前端来处理吧！
```js
//写在vue中或者mixin中，reuse也可以
format = ({save, ...props}) => ({saveVal: mat(save), ...props})
//use in list
let list = await axiosPlus(url, parObj).data.users;
list.map(_ => ({
    ...(this.format?this.format(_):_)
}))
```

### forEach的return毫无意义
```js
collection.forEach(function () {
  // do something
  return false;
});
```
不会跳出包裹函数或者循环.
`array#forEach simply does not care for the return value of its worker function. It just executes the worker function for each array element.You could use the worker function to set an outer variable`
[分析](https://stackoverflow.com/questions/43555904/foreach-for-in-not-returning-values)
```js
function truthCheck(collection, pre) {
  var allAreTruthy = true;
  collection.forEach(function (elem) {
    // if this ever flips allAreTruthy to false, it will stay false
    allAreTruthy = allAreTruthy && elem[pre];
  });
  return allAreTruthy;
}
```


### css同名不会再次加载问题
在页面跳转的时候总有几个页面，在跳到该页面时样式全错位了，但是刷新一下就又好了,是因为跳转的时候 同class不会再次加载,而是沿用了前一个页面的,在起名的时候可以自行区分,或者使用`scoped`来增加哈希值

### vh单位手机端遇到键盘弹出 此时vh不会计算键盘的
主流浏览器的宽高像素比基本都是 1.777,换成vw 勉强解决. 

### css技巧
.el-button + .el-button选择器，可以忽略第一个dom，不错。

### box-shadow无效问题
Sarafi的表格元素box-shadow即使是加了prefix也会无效

[解决方案居然是加display:block](https://stackoverflow.com/questions/7610021/applying-box-shadow-to-tbody-in-safari)

### contenteditable属性 兼容性差 不如focuout的时候 赋值

[直达](https://stackoverflow.com/questions/46487619/contenteditable-div-append-a-html-element-and-v-model-it-in-vuejs)✈️

### 1px边框在部分移动端变粗问题产生

物理像素是最小单元，而css的1px控制的是逻辑像素，在retina dpr为2屏幕下是占有2X2物流像素的.

**实际上，如果拿到750的设计稿，border量取的是1px solid red;然而iphone6中的实际像素却是375px;那么设计师实际需要的就是0.5px;不是1px变粗了，而是实际只需要0.5px而已**
[1px解决方案](https://www.w3cplus.com/css/fix-1px-for-retina.html)
[demo](https://codepen.io/foolkai/pen/**QEgzLm**)

### canvas跨域问题
canvas的getImageData有时候会遇到图片跨域问题.
解决方案:服务器端设置`Access-Control-Allow-Origin`的`header` 就可以把image转为canvas
```js
var img = new Image(),
    canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d"),
    src = "http://example.com/image.jpg";
img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
}
img.src = src;
```
但是`toDataURL`还是会报错,根据html5的规则，图片需要设置`crossOrigin`值,`in order to allow the browser to read the pixel data back from the canvas`

```js

if (/^([\w]+\:)?\/\//.test(src) && src.indexOf(location.host) === -1) {
  img.crossOrigin = "anonymous"; // or "use-credentials"
}
```



### 微信浏览器打开页面 被阻止问题
`微信浏览器`和`safari`打开新标签会遇到弹出被阻止问题.
原理:
`当window.open为用户触发事件内部或者加载时，不会被拦截，一旦将弹出代码移动到ajax或者一段异步代码内部，马上就出现被拦截的表现了(浏览器认为这可能是一个广告，不是一个用户希望看到的页面)`

解决方案

```js
//异步代码中获取直播地址
document.getElementById('id').setAttribute('href', res.data.meta.url//直播地址);
document.getElementById('id').click();//href属性更改后模拟点击,让浏览器以为是用户自己主动点击的，而不是自动弹出的广告
```
额外的解决方案微信和safari多测试一下:
[blocked](https://stackoverflow.com/questions/6628949/window-open-popup-getting-blocked-during-click-event)

### 微信h5图分享问题

微信在长按图片保存分享的时候，如果图片来源于后端，且生成需要session，此时就无法分享给朋友，需要先将后端动态生成给前端的图保存到本地base64.
//fastclick问题
https://blog.csdn.net/shentibeitaokong/article/details/86231818


//https://github.com/ftlabs/fastclick/issues/582

canvas画图模糊问题
https://juejin.im/post/5aea7bb85188251cc953b71a

### fastclick点击输入框双击才focus问题

### vue-router的权限路由问题













