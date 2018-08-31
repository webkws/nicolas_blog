# Workspace

## 环境
[Yarn](https://yarnpkg.com/) 替代 npm

[vue-cli](https://github.com/vuejs/vue-cli) 脚手架

[npm](https://www.npmjs.com/) npm包 需要时可使用[`nvm`](https://github.com/creationix/nvm)

[Node.js LTS](https://nodejs.org/en/) 使用稳定版

[rimraf](https://github.com/isaacs/rimraf) windows删除大量文件用，unix用rm

[npm-check-updates](https://github.com/tjunnone/npm-check-updates) 检查package.json里面库的最新版

## 工具

[vscode](https://code.visualstudio.com/) 推荐 

[jsperf](https://jsperf.com/) 分析代码性能

生成随机数据
* [Mockjs](http://mockjs.com/) 需要写mock规则
* [Easy-Mock](https://www.easy-mock.com/) 用来模拟生成json文件 提供远程接口
* [JSONPlaceholder](http://jsonplaceholder.typicode.com/) 同时支持 HTTP 和 HTTPS 这两种请求类型
  
[Sourcetree](https://www.sourcetreeapp.com/) 支持Git flow工作流

[brew](https://brew.sh/) Mac安装软件的工具

[Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) Chrome扩展

[Window Resizer](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh) 兼容屏幕尺寸工具

[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) 可以代替postman的插件

[搬瓦工](https://bwh1.net) 基于Google编程

## 配置 <Badge text="0.10.1+" type="warn"/>

#### vscode插件
- [stylus](https://marketplace.visualstudio.com/items?itemName=Alan.stylus)
- [html-css-class-completion](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
- [html-snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)
- [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)
- [npm-intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [path-intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [vscode-faker](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-faker)
- [theme-dracula](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
- [gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [vscode-html-css](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
- [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
- [vscode-regexp-preivew](https://marketplace.visualstudio.com/items?itemName=le0zh.vscode-regexp-preivew)
- [vscode-language-pack-zh-hans](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)
- [debugger-for-chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
- [vue-vscode-snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- [markdown-preview-enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
- [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)
- [open-in-browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)
- [gitflow](https://marketplace.visualstudio.com/items?itemName=vector-of-bool.gitflow)
- [change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case)
- [JavaScriptSnippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- [markdown-all-in-one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

### vscode

测试`webpack-hot-middleware` hmr更新 `autosave`无法准确响应，建议关闭`autosave`换成手动保存

#### user settings

```json
{
    "editor.fontFamily": "Fira Code, Consolas, 'Courier New', monospace", //Fira Code
    "vetur.validation.template": false,
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "prettier.singleQuote": true,
    "prettier.semi": false,
    "emmet.triggerExpansionOnTab": true
}
```
字体：[Fira Code](https://github.com/tonsky/FiraCode)

`vetur.validation.template` .vue文件template高亮问题

`js-beautify-html` 可格式化.vue文件

[prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 配置

`singleQuote` 格式化后使用单引号

`semi` 每行末尾分号添加

`emmet.triggerExpansionOnTab`  [emmet](https://code.visualstudio.com/blogs/2017/08/07/emmet-2.0)默认用Tab键触发

[JS-CSS-HTML Formatter](https://marketplace.visualstudio.com/items?itemName=lonefy.vscode-JS-CSS-HTML-formatter) 不明确推荐

```json
{
    "onSave": false,
    "javascript": {
        "indent_size": 2,
        "indent_char": " ",
        "eol": "auto",
        "preserve_newlines": true,
        "break_chained_methods": false,
        "max_preserve_newlines": 0,
        "space_in_paren": false,
        "space_in_empty_paren": false,
        "jslint_happy": false,
        "space_after_anon_function": false,
        "keep_array_indentation": false,
        "space_before_conditional": true,
        "unescape_strings": false,
        "wrap_line_length": 0,
        "e4x": false,
        "end_with_newline": false,
        "comma_first": false,
        "brace_style": "collapse-preserve-inline"
    },
    "css": {
        "indent_size": 4,
        "indentCharacter": " ",
        "indent_char": " ",
        "selector_separator_newline": true,
        "end_with_newline": false,
        "newline_between_rules": true,
        "eol": "\n"
    },
    "html": {
        "indent_inner_html": false,
        "indent_size": 4,
        "indent_char": " ",
        "indent_character": " "
    }
}
```

`onSave` false

js代码缩进2个空格，css html 用4个

