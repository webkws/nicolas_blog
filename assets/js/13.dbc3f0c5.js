(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{197:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),a("ul",[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("li",[t._v("大的js对象尽量使用缓存")]),t._v(" "),a("li",[a("code",[t._v("&&")]),t._v("和"),a("code",[t._v("||")]),t._v("短路表达式"),a("a",{attrs:{href:"https://blog.mariusschulz.com/2016/05/25/the-andand-and-operator-in-javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("，比如我项目中的鉴权页面工具的一个代码片段:")])]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("ul",[a("li",[t._v("快排"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F#JavaScript",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),a("OutboundLink")],1),t._v("是这个写法，也可以这么写")])]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),a("p",[t._v("先说这么多吧，后续再补充")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"js优化-只谈写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js优化-只谈写法","aria-hidden":"true"}},[this._v("#")]),this._v(" js优化(只谈写法)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"best-practices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practices","aria-hidden":"true"}},[this._v("#")]),this._v(" Best practices")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("用"),a("code",[t._v("===")]),t._v("，而不是"),a("code",[t._v("==")]),t._v(",遇到不同类型时，容易出问题")]),t._v(" "),a("li",[t._v("不使用"),a("code",[t._v("eval")]),t._v(",相当降低js的表现，还会有risk")]),t._v(" "),a("li")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someVariableExists"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//不要省略括号,除非有return")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'nicely done'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("for")]),this._v("循环中的数组长度，如果是外部读取的，可以先存起来")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("code",[t._v("for")]),t._v("遍历"),a("code",[t._v("Object")]),t._v("不要使用"),a("code",[t._v("in")]),t._v(","),a("code",[t._v("Object.keys()")]),t._v("最佳")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[t._v("尽量少的使用"),a("code",[t._v("Global value")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" firstName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'John'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    lastName "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Snow'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//better")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    firstName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'John'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    lastName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Snow'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[t._v("use"),a("code",[t._v("{}")]),t._v("而不是"),a("code",[t._v("new Object()")]),t._v("，use"),a("code",[t._v("[]")]),t._v("而不是"),a("code",[t._v("new Array")]),t._v("，")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("switch")]),this._v("要用"),s("code",[this._v("default")]),this._v("结尾")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("Undefined")]),this._v(" is Not "),s("code",[this._v("Null")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("替换和查找尽量多的使用"),s("code",[this._v("RegExp")]),this._v("，正则是C的API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("x++")]),this._v(" is better than "),s("code",[this._v("x = x +1")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("把数字转换成字符串性能上"),s("code",[this._v('("" +) > String() > .toString() > new String()')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("尽量多的使用js的内部对象，比如浮点数转换成整型"),s("code",[this._v("Math.round")]),this._v("is better than "),s("code",[this._v("parseInt")]),this._v(",后者是把字符串转化为数字")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'login'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" user"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/home'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("isLoginRoute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("user"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("browser "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("redirect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'/login'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"算法相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法相关","aria-hidden":"true"}},[this._v("#")]),this._v(" 算法相关")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("quickSort")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("head"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("tail"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" less "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tail"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" head"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" greater "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tail"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" head"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("quickSort")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("less"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("concat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("head"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("concat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("quickSort")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greater"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("递归")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("factorial")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" number "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" product "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" number"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    product "),a("span",{attrs:{class:"token operator"}},[t._v("*=")]),t._v(" i"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" product"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//better")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//尾调用优化 了解一下")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("factorial")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" number "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" number "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("factorial")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("二分法查找")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("binarySearch")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// var mid = l+ Math.floor((r-l)/2);")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mid "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" target"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mid"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mid"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" target"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("binarySearch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mid "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("binarySearch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mid "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="js_optimization.md";s.default=e.exports}}]);