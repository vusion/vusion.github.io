webpackJsonp([3],{456:function(s,t,a){var l=a(457);"string"==typeof l&&(l=[[s.i,l,""]]),l.locals&&(s.exports=l.locals);a(379)("3133b75c",l,!0,{})},457:function(s,t,a){(t=s.exports=a(378)(!1)).push([s.i,"._2DKpEo9LFbG1lqXU{color:red}._3zTRCWRnSWCrVgbP{font-weight:700}",""]),t.locals={red:"_2DKpEo9LFbG1lqXU","strong-word":"_3zTRCWRnSWCrVgbP"}},489:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var s=this.$createElement,t=this._self._c||s;return t("p",{class:this.$style.red},[this._v("\n    This sentence "),t("span",{class:this.$style["strong-word"]},[this._v("should be")]),this._v(" red.\n")])},staticRenderFns:[]},e={};var r={components:{Ca367a4:a(5)(null,l,!1,function(s){e.$style=a(456),this.$style=e.$style},null,null).exports}},v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("CSS")]),a("h3",[s._v("CSS 模块")]),a("p",[s._v("为了避免全局选择器的冲突，也为了避免复杂繁琐的命名规范，Vusion 采用 "),a("u-link",{attrs:{href:"https://github.com/css-modules/css-modules"}},[s._v("CSS Modules")]),s._v(" 来解决这个问题。")],1),a("p",[s._v("单文件Vue中，在"),a("code",{pre:!0},[s._v("<style>")]),s._v("上直接添加"),a("code",{pre:!0},[s._v("module")]),s._v("，同时在模板中动态绑定class：")]),a("div",{staticClass:"u-example"},[a("Ca367a4")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$style.red"')]),s._v(">")]),s._v("\n    This sentence "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v("\"$style['strong-word']\"")]),s._v(">")]),s._v("should be"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v(" red.\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".red")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": red;\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".strong-word")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-weight")]),s._v(": bold;\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),a("p",[s._v("这些样式会转为")]),a("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-selector-class"}},[s._v("._21t-NHydruDPXRXUWJnMmm")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": red;\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v("._2VTt8mZxuYxYIcjuT-eGzP")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-weight")]),s._v(": bold;\n}\n")])]),a("p",[s._v("具体可以参见 "),a("u-link",{attrs:{href:"https://vue-loader.vuejs.org/zh-cn/features/css-modules.html"}},[s._v("vue-loader 的 CSS Modules")]),s._v("。")],1),a("blockquote",[a("p",[s._v("注意：如果 class 名中有连字符时，请不要忘记在"),a("code",{pre:!0},[s._v("$style")]),s._v("上使用方括号，例如："),a("code",{pre:!0},[s._v("$style['strong-word']")]),s._v("。")])]),a("p",[s._v("多文件 Vue 中，在"),a("code",{pre:!0},[s._v(".vue")]),s._v("文件夹添加"),a("code",{pre:!0},[s._v("module.css")]),s._v("文件，书写方式与单文件 Vue 相同。")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[s._v("u-sample.vue/\n    index.html\n    index.js\n    module.css\n")])]),a("h3",[s._v("REA风格")]),a("p",[s._v("在 CSS Modules 的基础上，我们引入了 "),a("u-link",{attrs:{href:"https://github.com/postcss/postcss"}},[s._v("PostCSS")]),s._v(" 和它的一些 plugins "),a("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L13"}},[s._v("<code>")]),s._v("，用于简化样式的书写，最终形成一套特有的 CSS 书写风格—— REA 风格。")],1),a("p",[s._v("REA 表示 Root、Element、Attribute，其中借鉴了 BEM（Block、Element、Modifier）的一些思想，但它不需要那些繁琐的构词形式。")]),a("p",[s._v("它有以下一些规则：")]),a("ul",[a("li",[s._v("class 仅用于表示元素的在组件中的角色\n"),a("ul",[a("li",[s._v("根节点总是用"),a("code",{pre:!0},[s._v(".root")])]),a("li",[s._v("子节点用一个简单的单词来表示，如"),a("code",{pre:!0},[s._v("head")]),s._v("、"),a("code",{pre:!0},[s._v("item")]),s._v("、"),a("code",{pre:!0},[s._v("side")]),s._v("等")])])]),a("li",[s._v("attribute 用于样式扩展，命名方式与常用的props保持一致\n"),a("ul",[a("li",[s._v("Boolean类型，如"),a("code",{pre:!0},[s._v("selected")]),s._v("、"),a("code",{pre:!0},[s._v("disabled")]),s._v("、"),a("code",{pre:!0},[s._v("active")]),s._v("、"),a("code",{pre:!0},[s._v("checked")]),s._v("等")]),a("li",[s._v("颜色，如"),a("code",{pre:!0},[s._v('color="primary"')]),s._v("、"),a("code",{pre:!0},[s._v('color="success"')]),s._v("、"),a("code",{pre:!0},[s._v('color="error"')]),s._v("等")]),a("li",[s._v("大小，一个单词表示宽高同时改变，两个单词前者表示高度、后者表示宽度，类似CSS的"),a("code",{pre:!0},[s._v("margin")]),s._v("或"),a("code",{pre:!0},[s._v("padding")]),s._v("属性。如"),a("code",{pre:!0},[s._v('size="normal"')]),s._v("、"),a("code",{pre:!0},[s._v('size="large"')]),s._v("、"),a("code",{pre:!0},[s._v('size="mini large"')]),s._v("等")])])]),a("li",[s._v("单词不要缩写，且用连字符而不是驼峰")]),a("li",[s._v("不允许样式块嵌套")]),a("li",[s._v("无需添加浏览器前缀，在 PostCSS 中已经引入了 "),a("u-link",{attrs:{href:"https://github.com/postcss/autoprefixer"}},[s._v("autoprefixer")]),s._v(" 插件")],1)]),a("p",[s._v("最佳示例：")]),a("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$style.root"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$style.track"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$style.trail"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".root")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("240px")]),s._v(";\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".track")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("20px")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("#eee")]),s._v(";\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".trail")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("30%")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": $brand-primary;\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".root")]),a("span",{attrs:{class:"hljs-selector-attr"}},[s._v('[color="success"]')]),s._v(" "),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".trail")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": $brand-success;\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".root")]),a("span",{attrs:{class:"hljs-selector-attr"}},[s._v("[active]")]),s._v(" "),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".trail")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("animation")]),s._v(": ...\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("优先级问题 "),a("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/issues/21"}},[s._v("<issue>")])],1),a("p",[s._v("由于 CSS 的依赖关系统一走 JS，再通过 "),a("u-link",{attrs:{href:"https://github.com/webpack-contrib/style-loader"}},[s._v("style-loader")]),s._v(" 转换为标签插入到页面中，因此无法保证各组件之间的顺序。极少数情况下会有优先级问题，这里我们推荐一种可以提高优先级的写法：")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$style.button"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".button")]),a("span",{attrs:{class:"hljs-selector-attr"}},[s._v("[class]")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": red;\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("下一步")]),a("p",[s._v("Vusion 中的各种图片资源都会在 CSS 中添加，下一节将会展开讲"),a("u-link",{attrs:{href:"/guides/assets"}},[s._v("资源")]),s._v("如何处理。")],1)])},staticRenderFns:[]},n=a(5)(r,v,!1,null,null,null);t.default=n.exports}});