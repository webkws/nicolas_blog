# Object-Oriented CSS 
`Object Oriented CSS`，只是一种书写方法，它具有面向对象的css，css的`抽象化`、`模块化`和`继承`等特点。它是一种容易重用的css规则。还可以**降低页面加载时间**，**提高网页性能**。有俩原则:
* SEPARATION OF STRUCTURE FROM SKIN（*结构和样式相分离*）
* SEPARATION OF CONTAINERS AND CONTENT（*容器和内容相分离*）
  
分别说一下:
### 结构和样式相分离
每一个dom元素可能都会有不同的样式特征（也叫skin），比如颜色、渐变、边框等等其它非结构的样式，都是可以被复用的。不用OOCSS之前写起来如下：
```css
.button {
  width: 200px;
  height: 50px;
  padding: 10px;
  border: solid 1px #ccc;
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}

.box {
  width: 400px;
  overflow: hidden;
  border: solid 1px #ccc;
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}

.widget {
  width: 500px;
  min-height: 200px;
  overflow: auto;
  border: solid 1px #ccc;
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}
```
发现没，这些元素的样式，有structure和skin。skin是可以复用的，如下：
```css
.skin{
    background: linear-gradient(#ccc, #222);
    box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}
```
如果更复杂一些，style可以分为三类:
* **structure** = display, flex, zoom, vertical-align, text-align, margin, borde-radius,font-family, box-shadow
* **sizing** = font-size, padding, width/height
* **style** = color, border, background, gradient
  
那html就可以这么写了:
```html
<div class="box skin over-h"></div>
<div class="button skin"></div>
<div class="widget skin over-a"></div>
```

### 容器和内容相分离
直接上代码:
```css
.sidebar h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: .8em;
  line-height: 1;
  color: #777;
  text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}
```
这种写法看似精简，但是不符合css规范，因为`sidebar`的子元素`h3`全部都被判刑了！如果突然发现`footer`的子元素`h3`样式和`sidebar`的`h3`差不多，我们很可能会这么写:
```css
.btn{} //structure
.btn-small{} //sizing
.btn-blue{} //color
```
```css
.sidebar h3, .footer h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  line-height: 1;
  color: #777;
  text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}

.footer h3 {
  font-size: 1.5em;
  text-shadow: rgba(0, 0, 0, .3) 2px 2px 4px;
}

```
代码量看似小了，但是这种后代选择器实际上是不好复用的。但是看到`OOCSS`之后，样式其实不能依赖于包含它的元素，在document中，dom应该随意复用在任何地方，不管它的上下文结构怎么样。
再看一个例子:
```html
<header>
  <div class="header-inside globalwidth">
  </div>
</header>
<div class="main globalwidth">
</div>
<footer>
  <div class="footer-inside globalwidth">
  </div>
</footer>
```
一个完整的页面，`globalwidth`可以做全局的`margin:0 auto;`
```css
.globalwidth {
  width: 980px;
  margin: 0 auto;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
}
.header-inside {
  padding-top: 20px;
  padding-bottom: 20px;
  height: 260px;
}

```

### 用SASS写OOCSS
本质就是，通过`Sass`来扩展类，而不是通过DOM来扩展类。
使用Sass的`@extend-only`特性
```css
%button {
    min-width: 100px;
    padding: 1em;
    border-radius: 1em;
}
%baidu-background {
    color: #fff;
    background: #55acee;
}
%google-background {
    color: #fff;
    background: #3b5998;
}

.btn {
    &--baidu {
        @extend %button;
        @extend %twitter-background;
    }
    &--google {
        @extend %button;
        @extend %facebook-background;
    }
}

```
使用
```html
<div class="btn--baidu">Baidu</div>
<div class="btn--google">Google</div>
```
### 
### OOCSS Tips
* code时，考虑到后续共同协作的同事
* 把skin分离开是oocss中最简单的，可以节省很多代码
* 项目css不多，无需使用oocss，没意义
* 写oocss最好做好笔记，写个表格记录
* 当扩展子元素的样式时，使用当前class而不是父级的，耦合性太高
* 继承多层的class少用

先说这么多吧～