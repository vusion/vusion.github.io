"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?32682f4f972c7274d534b070e1747b9f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?32682f4f972c7274d534b070e1747b9f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?32682f4f972c7274d534b070e1747b9f") format("woff"),\n\turl("/public/vusion-icon-font.svg?32682f4f972c7274d534b070e1747b9f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?32682f4f972c7274d534b070e1747b9f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?32682f4f972c7274d534b070e1747b9f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?32682f4f972c7274d534b070e1747b9f") format("woff"),\n\turl("/public/vusion-icon-font.svg?32682f4f972c7274d534b070e1747b9f#vusion-icon-font") format("svg");\n}'},webpackJsonp([3],{408:function(s,t,a){function i(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function h(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=i(s),t.id=l,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var l="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(h(),window.HAS_CREATE_FONT_STYLE=!0)}},414:function(s,t,a){var i=a(415);"string"==typeof i&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);a(410)("902f02d2",i,!0)},415:function(s,t,a){(t=s.exports=a(409)(void 0)).push([s.i,"._2I2s-gnkVYaO-1Vn{color:red}.amQ2qkM3IvghJhwM{font-weight:700}",""]),t.locals={red:"_2I2s-gnkVYaO-1Vn",bold:"amQ2qkM3IvghJhwM"}},451:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var s=this.$createElement;return(this._self._c||s)("p",{class:this.$style.red},[this._v("\n    This should be red.\n")])},staticRenderFns:[]},h={},l={components:{Ce8ba96:a(1)(null,i,!1,function(s){h.$style=a(414),this.$style=h.$style},null,null).exports}},n={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("模块化")]),t("h3",[this._v("完全模块化")]),t("p",[this._v("通常大型前端工程需要处理的资源文件有很多，常见的JS、CSS和图片，还有字体、视频、音频等其他静态资源，传统的Require.js、SASS/LESS、Icomoon等工具往往只是片面的处理了某一类资源，这些方案在前端模块化问题的处理上都是不完全的。")]),t("p",[this._v("而在Webpack看来：")]),t("blockquote",[t("p",[this._v("一切资源皆模块。")])]),t("p",[this._v("我们把这称为"),t("strong",[this._v("模块化的完备性")]),this._v("。")]),t("p",[this._v("Webpack这样处理了之后，有三大优势：")]),t("ul",[t("li",[this._v("依赖关系单一化：所有CSS和图片等资源的依赖关系统一走JS路线，无需额外处理CSS预处理器的依赖关系，也不需处理代码迁移时的图片合并、字体图片等路径问题；")]),t("li",[this._v("资源处理集成化：比如可以统一处理资源的hash、同步异步加载等问题，同时也可以将类似vue这样复杂的文件一起容纳到这个体系；")]),t("li",[this._v("通用组件标准化：传统一个社区通用组件的引入方式五花八门，现在可以按照Webpack的loaders来标准化。")])]),t("h3",[this._v("JS的模块化")]),t("p",[this._v("在当前的JavaScript发展趋势下，已经没有理由不选择ES6 Modules了。")]),t("h4",[this._v("Babel")]),t("p",[this._v("Vusion CLI已经集成了"),t("u-link",{attrs:{href:"https://github.com/babel/babel-loader"}},[this._v("babel-loader")]),this._v("，同时添加了默认配置"),t("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L98"}},[this._v("<code>")]),this._v("，但不会立即生效。")],1),t("p",[this._v("如果您对浏览器的兼容性没有要求，即只要最新的现代浏览器支持就行，比如Chrome、Firfox、Safari，或者通过Electron来驱动App，并且在代码中没有使用到ECMAScript的一些未来特性。那么不需要babel也可以运行。")]),t("p",[this._v("否则，您需要在项目根路径下添加一个"),t("code",{pre:!0},[this._v(".babelrc")]),this._v("文件，Vusion根据这个文件是否存在来判断启不启用"),t("code",{pre:!0},[this._v("babel-loader")]),this._v("。")]),t("p",[this._v("最简单的方式是：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-shell"}},[t("code",{attrs:{"v-pre":""}},[this._v("npm install --save-dev babel-preset-env\n")])]),t("p",[this._v("然后在项目根路径下添加一个"),t("code",{pre:!0},[this._v(".babelrc")]),this._v("文件：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-json"}},[t("code",{attrs:{"v-pre":""}},[this._v("{\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v('"presets"')]),this._v(": ["),t("span",{attrs:{class:"hljs-string"}},[this._v('"env"')]),this._v("]\n}\n")])]),t("p",[this._v("其他关于Babel的详细配置请参见"),t("u-link",{attrs:{href:"https://babeljs.io/"}},[this._v("babeljs.io")]),this._v("的官方文档。")],1),t("h4",[this._v("JS的压缩与混淆")]),t("p",[this._v("在Webpack生态中，通常使用"),t("u-link",{attrs:{href:"https://github.com/webpack-contrib/uglifyjs-webpack-plugin"}},[this._v("uglifyjs-webpack-plugin")]),this._v("来处理JS的压缩与混淆，这个插件也已经集成在Vusion CLI中。")],1),t("p",[this._v("只需在"),t("code",{pre:!0},[this._v("vusion.config.js")]),this._v("或"),t("code",{pre:!0},[this._v("package.json")]),this._v("的"),t("code",{pre:!0},[this._v("vusion")]),this._v("对象中添加配置：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-json"}},[t("code",{attrs:{"v-pre":""}},[this._v("{\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v('"uglifyJS"')]),this._v(": "),t("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v("\n}\n")])]),t("p",[this._v("也可以在运行CLI的构建命令时，添加"),t("code",{pre:!0},[this._v("--uglify-js")]),this._v("这个参数：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-shell"}},[t("code",{attrs:{"v-pre":""}},[this._v("vusion build --uglify-js\n")])]),t("h3",[this._v("CSS的模块化")]),t("p",[this._v("虽然SASS、LESS、Stylus等预处理器实现了CSS的文件拆分，但没有解决CSS模块化的痛点：选择器的局域化问题（全局污染问题）。")]),t("p",[this._v("按道理，一个模块化的文件应该要隐藏内部作用域，只暴露少量接口给使用者。而按照目前预处理器的方式，引入一个CSS模块后，已存在的样式仍有被覆盖的风险。")]),t("p",[this._v("为了避免全局选择器的冲突，也为了避免复杂、繁琐、弱约束的命名规范，我们采用"),t("u-link",{attrs:{href:"https://github.com/css-modules/css-modules"}},[this._v("CSS Modules")]),this._v("来解决这个问题。")],1),t("h4",[this._v("CSS Modules")]),t("p",[this._v("在单文件Vue中，在"),t("code",{pre:!0},[this._v("<style>")]),this._v("上直接添加"),t("code",{pre:!0},[this._v("module")]),this._v("，同时在模板中动态绑定class：")]),t("div",{staticClass:"u-example"},[t("Ce8ba96")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.red"')]),this._v(">")]),this._v("\n    This should be red.\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("module")]),this._v(">")]),t("span",{attrs:{class:"css"}},[this._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".red")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("color")]),this._v(": red;\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".bold")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("font-weight")]),this._v(": bold;\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n")])]),t("p",[this._v("这些样式会转为")]),t("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-selector-class"}},[this._v("._21t-NHydruDPXRXUWJnMmm")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("color")]),this._v(": red;\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v("._2VTt8mZxuYxYIcjuT-eGzP")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("font-weight")]),this._v(": bold;\n}\n")])]),t("p",[this._v("具体可以参见"),t("u-link",{attrs:{href:"https://vue-loader.vuejs.org/zh-cn/features/css-modules.html"}},[this._v("vue-loader的CSS Modules")])],1),t("p",[this._v("在多文件Vue中，在"),t("code",{pre:!0},[this._v(".vue")]),this._v("文件夹添加"),t("code",{pre:!0},[this._v("module.css")]),this._v("文件，书写方式与单文件Vue相同。")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[this._v("u-sample.vue/\n    index.html\n    index.js\n    module.css\n")])]),t("h4",[this._v("REA风格")]),t("p",[this._v("在CSS Modules的基础上，我们引入了"),t("u-link",{attrs:{href:"https://github.com/postcss/postcss"}},[this._v("PostCSS")]),this._v("和它的一些plugins"),t("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L13"}},[this._v("<code>")]),this._v("，用于简化样式的书写，最终形成一套特有的CSS书写风格——REA风格。")],1),t("p",[this._v("REA表示Root、Element、Attribute，其中借鉴了BEM（Block、Element、Modifier）的一些思想，但它不需要那些繁琐的构词形式。")]),t("p",[this._v("它有以下一些规则：")]),t("ul",[t("li",[this._v("class仅用于表示元素的在组件中的角色\n"),t("ul",[t("li",[this._v("根节点总是用"),t("code",{pre:!0},[this._v(".root")])]),t("li",[this._v("子节点用一个简单的单词来表示，如"),t("code",{pre:!0},[this._v("head")]),this._v("、"),t("code",{pre:!0},[this._v("item")]),this._v("、"),t("code",{pre:!0},[this._v("side")]),this._v("等")])])]),t("li",[this._v("attribute用于样式扩展，命名方式与常用的props保持一致\n"),t("ul",[t("li",[this._v("Boolean类型，如"),t("code",{pre:!0},[this._v("selected")]),this._v("、"),t("code",{pre:!0},[this._v("disabled")]),this._v("、"),t("code",{pre:!0},[this._v("active")]),this._v("、"),t("code",{pre:!0},[this._v("checked")]),this._v("等")]),t("li",[this._v("颜色，如"),t("code",{pre:!0},[this._v('color="primary"')]),this._v("、"),t("code",{pre:!0},[this._v('color="success"')]),this._v("、"),t("code",{pre:!0},[this._v('color="error"')]),this._v("等")]),t("li",[this._v("大小，一个单词表示宽高同时改变，两个单词前者表示高度、后者表示宽度，类似CSS的"),t("code",{pre:!0},[this._v("margin")]),this._v("或"),t("code",{pre:!0},[this._v("padding")]),this._v("属性。如"),t("code",{pre:!0},[this._v('size="normal"')]),this._v("、"),t("code",{pre:!0},[this._v('size="large"')]),this._v("、"),t("code",{pre:!0},[this._v('size="mini large"')]),this._v("等")])])]),t("li",[this._v("单词不要缩写，且用连字符而不是驼峰")]),t("li",[this._v("不允许样式块嵌套")]),t("li",[this._v("无需添加浏览器前缀，在PostCSS中已经引入了"),t("u-link",{attrs:{href:"https://github.com/postcss/autoprefixer"}},[this._v("autoprefixer")]),this._v("插件")],1)]),t("p",[this._v("最佳示例：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.root"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.track"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.trail"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),t("span",{attrs:{class:"css"}},[this._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".root")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("width")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("240px")]),this._v(";\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".track")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("height")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("20px")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("background")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("#eee")]),this._v(";\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".trail")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("width")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("30%")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("height")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("100%")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("background")]),this._v(": $brand-primary;\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".root")]),t("span",{attrs:{class:"hljs-selector-attr"}},[this._v('[color="success"]')]),this._v(" "),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".trail")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("background")]),this._v(": $brand-success;\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".root")]),t("span",{attrs:{class:"hljs-selector-attr"}},[this._v("[active]")]),this._v(" "),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".trail")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("animation")]),this._v(": ...\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n")])]),t("h4",[this._v("优先级问题"),t("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/issues/21"}},[this._v("<issue>")])],1),t("p",[this._v("由于CSS的依赖关系统一走JS，再通过"),t("u-link",{attrs:{href:"https://github.com/webpack-contrib/style-loader"}},[this._v("style-loader")]),this._v("转换为标签插入到页面中，因此无法保证各组件之间的顺序。极少数情况下会有优先级问题，这里我们推荐一种可以提高优先级的写法：")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.button"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("module")]),this._v(">")]),t("span",{attrs:{class:"css"}},[this._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".button")]),t("span",{attrs:{class:"hljs-selector-attr"}},[this._v("[class]")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("color")]),this._v(": red;\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v('\n\n#### CSS提取成独立文件\n\n在Webpack生态中，通常会使用[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)将CSS内容提取成独立的文件，这个插件也已经集成在Vusion CLI中。\n\n只需在`vusion.config.js`或`package.json`的`vusion`对象中添加配置：\n\n``` json\n{\n    "extractCSS": true\n}\n')])]),t("p",[this._v("也可以在运行CLI的构建命令时，添加--extract-css这个参数：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-shell"}},[t("code",{attrs:{"v-pre":""}},[this._v("vusion build --extract-css\n")])]),t("p",[this._v("提取出来的CSS文件名与JS bundle的文件名是一致的，仅扩展名不同。")]),t("h3",[this._v("图片的模块化")]),t("p",[this._v("由于位图图片在Retina屏下需要设定@2x图，因此我们推荐优先使用svg图片。")]),t("p",[this._v("特别是单色图标可以将svg转成icon-font，多色图标可以将svg合并成svg-sprite，实在不行了再将png或jpg等位图格式合并成css-sprite。")]),t("h4",[this._v("icon-font")]),t("p",[this._v("icon-font可以使用CSS很方便地设置颜色与大小。")]),t("p",[this._v("在Vusion中，我们研发了一个"),t("u-link",{attrs:{href:"https://github.com/vusion/icon-font-loader/blob/master/README.zh-CN.md"}},[this._v("icon-font-loader")]),this._v("，它提供一个自定义属性"),t("code",{pre:!0},[this._v("icon-font")]),this._v("，使用时很方便：")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".select")]),t("span",{attrs:{class:"hljs-selector-pseudo"}},[this._v(":after")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("icon-font")]),this._v(": "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("url")]),this._v("("),t("span",{attrs:{class:"hljs-string"}},[this._v("'./icons/arrow-down.svg'")]),this._v(");\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("color")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("#666")]),this._v(";\n}\n")])]),t("p",[this._v("它会转为")]),t("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".select")]),t("span",{attrs:{class:"hljs-selector-pseudo"}},[this._v(":after")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("font-family")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'vusion-icon-font'")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("font-style")]),this._v(": normal;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("font-weight")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("400")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("font-variant")]),this._v(": normal;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("text-decoration")]),this._v(": inherit;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("text-rendering")]),this._v(": optimizeLegibility;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("text-transform")]),this._v(": none;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("-moz-osx-font-smoothing")]),this._v(": grayscale;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("-webkit-font-smoothing")]),this._v(": antialiased;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("font-smoothing")]),this._v(": antialiased;\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("content")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'\\f106'")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("color")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("#666")]),this._v(";\n}\n")])]),t("p",[this._v("同时生成(eot,svg,ttf,woff)等字体和一个全局的@font-face文件。")]),t("blockquote",[t("p",[this._v("为什么不在HTML或JS中引入图标？类似：")])]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"require(\'./inner.svg)"')]),this._v(">")]),this._v("\n")])]),t("ul",[t("li",[this._v("其实大部分图标还需设置CSS属性")]),t("li",[this._v("图片资源的引入本质是一种样式修改")]),t("li",[this._v("CSS具有复写的特性")])]),t("h4",[this._v("svg-sprite")]),t("p",[this._v("svg-sprite拥有css-sprite不具备的调整大小特性。")]),t("p",[this._v("在Vusion中，我们使用了一个"),t("u-link",{attrs:{href:"https://github.com/CXHtml/svg-sprite-loader"}},[this._v("svg-sprite-loader")]),this._v("。使用起来也很方便：")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".root")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("background")]),this._v(": "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("url")]),this._v("("),t("span",{attrs:{class:"hljs-string"}},[this._v("'./icons/refresh.svg?sprite'")]),this._v(");\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("width")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("200px")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("height")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("120px")]),this._v(";\n}\n")])]),t("p",[this._v("它会转为")]),t("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".root")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("background")]),this._v(": "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("url")]),this._v("("),t("span",{attrs:{class:"hljs-string"}},[this._v("'/public/sprite.1c9f4bcca4a42798.svg#refresh'")]),this._v(");\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("width")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("200px")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("height")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("120px")]),this._v(";\n}\n")])]),t("h4",[this._v("css-sprite")]),t("p",[this._v("正在研究中。。。")]),t("p",[this._v("可以先使用CSS的background，会走"),t("u-link",{attrs:{href:"https://github.com/webpack-contrib/file-loader"}},[this._v("file-loader")]),this._v("。")],1),t("h4",[this._v("其他资源")]),t("p",[this._v("其他资源会统一走"),t("u-link",{attrs:{href:"https://github.com/webpack-contrib/file-loader"}},[this._v("file-loader")]),this._v("，目前已配置了"),t("code",{pre:!0},[this._v("png|jpg|gif|eot|ttf|woff|woff2")]),this._v("这些格式"),t("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/blob/develop/webpack/base.js#L88"}},[this._v("<code>")]),this._v("。")],1),t("h3"),t("p",[this._v("模块化解决了前端工程中各种资源的组织问题，那么在用户界面（UI）层面上，如何将一个复杂工程进行分解复用，并进行高效的管理，这就属于组件化方面的范畴了，下一节将会为您详细讲述。")])])},staticRenderFns:[]},e=a(1)(l,n,!1,null,null,null);t.default=e.exports}});