"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?11f24921924351b9cb13bcc75ec8cbc6") format("truetype"),\n\turl("/public/vusion-icon-font.eot?11f24921924351b9cb13bcc75ec8cbc6#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?11f24921924351b9cb13bcc75ec8cbc6") format("woff"),\n\turl("/public/vusion-icon-font.svg?11f24921924351b9cb13bcc75ec8cbc6#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?11f24921924351b9cb13bcc75ec8cbc6") format("truetype"),\n\turl("/public/vusion-icon-font.eot?11f24921924351b9cb13bcc75ec8cbc6#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?11f24921924351b9cb13bcc75ec8cbc6") format("woff"),\n\turl("/public/vusion-icon-font.svg?11f24921924351b9cb13bcc75ec8cbc6#vusion-icon-font") format("svg");\n}'},webpackJsonp([2],{415:function(s,t,a){function i(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function h(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=i(s),t.id=l,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var l="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(h(),window.HAS_CREATE_FONT_STYLE=!0)}},418:function(s,t,a){var i=a(419);"string"==typeof i&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);a(417)("06168336",i,!0)},419:function(s,t,a){(t=s.exports=a(416)(void 0)).push([s.i,"._3zY9DDteCl6dEBw-{color:red}.IJEZodzglmss27Ej{font-weight:700}",""]),t.locals={red:"_3zY9DDteCl6dEBw-",bold:"IJEZodzglmss27Ej"}},450:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var s=this.$createElement;return(this._self._c||s)("p",{class:this.$style.red},[this._v("\n    This should be red.\n")])},staticRenderFns:[]},h={},l={components:{Ce76c34:a(1)(null,i,!1,function(s){h.$style=a(418),this.$style=h.$style},null,null).exports}},n={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("CSS")]),t("h3",[this._v("CSS 模块")]),t("p",[this._v("为了避免全局选择器的冲突，也为了避免复杂繁琐的命名规范，Vusion 采用 "),t("u-link",{attrs:{href:"https://github.com/css-modules/css-modules"}},[this._v("CSS Modules")]),this._v(" 来解决这个问题。")],1),t("p",[this._v("单文件Vue中，在"),t("code",{pre:!0},[this._v("<style>")]),this._v("上直接添加"),t("code",{pre:!0},[this._v("module")]),this._v("，同时在模板中动态绑定class：")]),t("div",{staticClass:"u-example"},[t("Ce76c34")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.red"')]),this._v(">")]),this._v("\n    This should be red.\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("module")]),this._v(">")]),t("span",{attrs:{class:"css"}},[this._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".red")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("color")]),this._v(": red;\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".bold")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("font-weight")]),this._v(": bold;\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n")])]),t("p",[this._v("这些样式会转为")]),t("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-selector-class"}},[this._v("._21t-NHydruDPXRXUWJnMmm")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("color")]),this._v(": red;\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v("._2VTt8mZxuYxYIcjuT-eGzP")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("font-weight")]),this._v(": bold;\n}\n")])]),t("p",[this._v("具体可以参见 "),t("u-link",{attrs:{href:"https://vue-loader.vuejs.org/zh-cn/features/css-modules.html"}},[this._v("vue-loader 的 CSS Modules")]),this._v("。")],1),t("p",[this._v("多文件 Vue 中，在"),t("code",{pre:!0},[this._v(".vue")]),this._v("文件夹添加"),t("code",{pre:!0},[this._v("module.css")]),this._v("文件，书写方式与单文件 Vue 相同。")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[this._v("u-sample.vue/\n    index.html\n    index.js\n    module.css\n")])]),t("h3",[this._v("REA风格")]),t("p",[this._v("在 CSS Modules 的基础上，我们引入了 "),t("u-link",{attrs:{href:"https://github.com/postcss/postcss"}},[this._v("PostCSS")]),this._v(" 和它的一些 plugins "),t("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L13"}},[this._v("<code>")]),this._v("，用于简化样式的书写，最终形成一套特有的 CSS 书写风格—— REA 风格。")],1),t("p",[this._v("REA 表示 Root、Element、Attribute，其中借鉴了 BEM（Block、Element、Modifier）的一些思想，但它不需要那些繁琐的构词形式。")]),t("p",[this._v("它有以下一些规则：")]),t("ul",[t("li",[this._v("class 仅用于表示元素的在组件中的角色\n"),t("ul",[t("li",[this._v("根节点总是用"),t("code",{pre:!0},[this._v(".root")])]),t("li",[this._v("子节点用一个简单的单词来表示，如"),t("code",{pre:!0},[this._v("head")]),this._v("、"),t("code",{pre:!0},[this._v("item")]),this._v("、"),t("code",{pre:!0},[this._v("side")]),this._v("等")])])]),t("li",[this._v("attribute 用于样式扩展，命名方式与常用的props保持一致\n"),t("ul",[t("li",[this._v("Boolean类型，如"),t("code",{pre:!0},[this._v("selected")]),this._v("、"),t("code",{pre:!0},[this._v("disabled")]),this._v("、"),t("code",{pre:!0},[this._v("active")]),this._v("、"),t("code",{pre:!0},[this._v("checked")]),this._v("等")]),t("li",[this._v("颜色，如"),t("code",{pre:!0},[this._v('color="primary"')]),this._v("、"),t("code",{pre:!0},[this._v('color="success"')]),this._v("、"),t("code",{pre:!0},[this._v('color="error"')]),this._v("等")]),t("li",[this._v("大小，一个单词表示宽高同时改变，两个单词前者表示高度、后者表示宽度，类似CSS的"),t("code",{pre:!0},[this._v("margin")]),this._v("或"),t("code",{pre:!0},[this._v("padding")]),this._v("属性。如"),t("code",{pre:!0},[this._v('size="normal"')]),this._v("、"),t("code",{pre:!0},[this._v('size="large"')]),this._v("、"),t("code",{pre:!0},[this._v('size="mini large"')]),this._v("等")])])]),t("li",[this._v("单词不要缩写，且用连字符而不是驼峰")]),t("li",[this._v("不允许样式块嵌套")]),t("li",[this._v("无需添加浏览器前缀，在 PostCSS 中已经引入了 "),t("u-link",{attrs:{href:"https://github.com/postcss/autoprefixer"}},[this._v("autoprefixer")]),this._v(" 插件")],1)]),t("p",[this._v("最佳示例：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.root"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.track"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.trail"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),t("span",{attrs:{class:"css"}},[this._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".root")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("width")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("240px")]),this._v(";\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".track")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("height")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("20px")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("background")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("#eee")]),this._v(";\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".trail")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("width")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("30%")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("height")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("100%")]),this._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("background")]),this._v(": $brand-primary;\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".root")]),t("span",{attrs:{class:"hljs-selector-attr"}},[this._v('[color="success"]')]),this._v(" "),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".trail")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("background")]),this._v(": $brand-success;\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".root")]),t("span",{attrs:{class:"hljs-selector-attr"}},[this._v("[active]")]),this._v(" "),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".trail")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("animation")]),this._v(": ...\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("优先级问题 "),t("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/issues/21"}},[this._v("<issue>")])],1),t("p",[this._v("由于 CSS 的依赖关系统一走 JS，再通过 "),t("u-link",{attrs:{href:"https://github.com/webpack-contrib/style-loader"}},[this._v("style-loader")]),this._v(" 转换为标签插入到页面中，因此无法保证各组件之间的顺序。极少数情况下会有优先级问题，这里我们推荐一种可以提高优先级的写法：")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"$style.button"')]),this._v(">")]),this._v("Button"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("module")]),this._v(">")]),t("span",{attrs:{class:"css"}},[this._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".button")]),t("span",{attrs:{class:"hljs-selector-attr"}},[this._v("[class]")]),this._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("color")]),this._v(": red;\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("下一步")]),t("p",[this._v("Vusion 中的各种图片资源都会在 CSS 中添加，下一节将会展开讲"),t("u-link",{attrs:{href:"/guides/assets"}},[this._v("资源")]),this._v("如何处理。")],1)])},staticRenderFns:[]},e=a(1)(l,n,!1,null,null,null);t.default=e.exports}});