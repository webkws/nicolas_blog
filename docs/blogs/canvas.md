# Canvas学习笔记

## canvas汇总

#### 书写步骤
* Creating and Resizing Your Canvas
* Drawing Elements
* Animating Elements
* Interacting with Elements

#### canvas object
* Rectangles
* Lines
* Arcs/Circles
* Bezier Curves
* Images
* Text

#### API总结   

基本教程：[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)

快捷抄做：[cheatsheet](https://devhints.io/canvas)

Snippet：[vscode snippet](https://marketplace.visualstudio.com/items?itemName=hollowtree.canvas-snippets)

## Demo List 

#### 1.碰撞和磁性(初级版)

🚀[直达](https://webkws.github.io/canvas_demo/demo1/demo1.html)

思路:百个圆的属性不同，方法相同。可以写一个`Circle`的构造函数，传入关于球的一切属性，比如半径，坐标，速度。
同时，写俩方法，一个`draw`方法，一个`update`方法。`update`在`requestAnimationFrame`中不断执行来更新状态，同时，draw方法就是更新状态的实现。关于百个球，要另写一个数组,然后for循环随机push Circle的实例,进入数组。
```js

function Circle(x, ...){
    this.x = x;
    ...
    function draw(){
        ctx.arc
    }
    function update(){
        // 速度方向的变化
        // 这里是二维的，dx和dy直接取负即可
        //这里要有碰撞检测和磁性吸引
        // 碰撞，无非就是计算半径和innner
        // 磁性吸引就是判断鼠标的e和球的坐标
        // 同时draw，因为draw是绘制。
        this.draw();
    }
}
```
具体的看code，推荐一个色彩取材网站，[kooler](https://color.adobe.com/kooler-color-theme-4384532/)

#### 2.带重力和摩擦力

🚀[直达](https://webkws.github.io/canvas_demo/demo2/demo1.html)

思路:draw和update以及push到数组里的近百个小球思路不变。全局给定摩擦系数以及重力加速度,在update函数中对dx,和dy的速度进行更新即可。
```js
this.update = function () {
    // 这里要考虑到dy，不然小球会被caught到地板上抖动
if (this.y + this.radius + this.dy > canvas.height) {
    //触地的瞬间先反向
    this.dy = -this.dy;
    //再给予加速度以及摩擦作用力
    this.dy = this.dy * friction;
    this.dx = this.dx * friction;
} else {
    this.dy += gravity;
}
//屏幕左侧和右侧
if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
    this.dx = -this.dx * friction;
}
//更新
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
};
```

#### 3.碰撞检测(中级)




