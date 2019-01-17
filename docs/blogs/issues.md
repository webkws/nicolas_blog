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

