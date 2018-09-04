# 只会嵌套不敢说自己会SASS

本文直接用好的`sass`片段做例子 <Badge text="0.12.1+" type="tip"/>
#### `function`指令和`mixin`
```css
@function calculateRem($size) {
  $remSize: $size / 16px;
  @return $remSize * 1rem;
}
@mixin font-size($size){
    font-size:calculateRem($size);
}
```
#### 媒体查询和`@content`作placehoder 
```css
@mixin bp-large {
  @media only screen and (max-width: 60em) {
    @content;
  }
}
.sidebar {
  width: 60%;
  float: left;
  margin: 0 2% 0 0;
  @include bp-small {
    width: 100%;
    float: none;
    margin: 0;
  }
}

```
#### 兼容IE8的`opacity`写法
```css 
@mixin opacity($opacity) {
  opacity: $opacity;
  $opacity-ie: $opacity * 100;
  filter: alpha(opacity=$opacity-ie); //IE8
}
```
### 参数...，以动画的`prefix`为例
```css
@mixin transition($args...) {
  -webkit-transition: $args;
  -moz-transition: $args;
  -ms-transition: $args;
  -o-transition: $args;
  transition: $args;
}
```
### `@if`指令 以居中布局为例
```css
@mixin center($position) {
  position: absolute;
  @if $position == 'vertical' {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  @else if $position == 'horizontal' {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translate(-50%);
  }
  @else if $position == 'both' {
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

```
### 变量定义，参数设定默认值，以`media query`为例
```css
$breakpoint-small: 600px;
$breakpoint-med-small: 960px;
$breakpoint-med: 1175px;

@mixin screen($size, $type: max, $pixels: $breakpoint-small) {

  @if $size == 'small' {
    @media screen and ($type + -width: $breakpoint-small) {
        @content;
    }
  }
  @else if $size == 'med-small' {
    @media screen and ($type + -width: $breakpoint-med-small) {
        @content;
    }
  }
  @else if $size == 'med' {
    @media screen and ($type + -width: $breakpoint-med) {
        @content;
    }
  }
 @else if $size == 'large' {
    @media screen and ($type + -width: $breakpoint-med) {
        @content;
    }
  }
  @else if $size == 'custom' {
    @media screen and ($type + -width: $pixels + px) {
     @content;
    }
  }
  @else {
    @content;
  }

}
```
### sizing box,用了默认参数
```css
@mixin box($width, $height=$width) {
  width: $width;
  height: $height;
}
```
### Retina Images
```css
@mixin retina($image, $width, $height) {
  @media (min--moz-device-pixel-ratio: 1.3),
  (-o-min-device-pixel-ratio: 2.6/2),
  (-webkit-min-device-pixel-ratio: 1.3),
  (min-device-pixel-ratio: 1.3),
  (min-resolution: 1.3dppx) {
    background-image: url($image);
    background-size: $width $height;
  }
}
```
### oocss的sass写法 用了`@extend-only`指令
这里的%button如果不被继承，sass不会编译
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
### 父选择器&，以BEM为例子
```css
.block {    
    &__element {  
        
    }
    &--modifier { 
        &__element {   
    /* 生成 `.block--modifier__element` */
        }
    }
}
```
### variable，后文要使用`#{}`,
```css 
$a-tags: 'a, a:active, a:hover, a:visited';
$a-tags-hover: 'a:active, a:hover';
 
#{$a-tags} {
  color: red;
  text-decoration: none;
}
#{$a-tags-hover} {
  color: blue;
}
```
### 使用循环也可以做到N次方
```css 
@function pow($number, $exponent) {
  $value: 1;

  @if $exponent > 0 {
    @for $i from 1 through $exponent {
      $value: $value * $number;
    }
  }

  @return $value;
}
```
### `Map`数据类型
```css
$o-grid-default-config: (
    columns: 12,
    gutter: 10px,
    min-width: 240px,
    max-width: 1330px,
    layouts: (
        S:  370px,  // ≥20px columns
        M:  610px,  // ≥40px columns
        L:  850px,  // ≥60px columns
        XL: 1090px  // ≥80px columns
    ),
    fluid: true,
    debug: false,
    fixed-layout: M,
    enhanced-experience: true
);
/* 定义 `.获取函数` */
@function map-deep-get($map, $keys...) {
    @each $key in $keys {
        $map: map-get($map, $key);
    }
    @return $map;
}
/* 使用,结果610px */
$m-breakpoint: map-deep-get($o-grid-default-config, "layouts", "M");

```
