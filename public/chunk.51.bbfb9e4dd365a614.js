"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?5e2e5e47d17b96ec50fce0e302511eb4") format("truetype"),\n\turl("/public/vusion-icon-font.eot?5e2e5e47d17b96ec50fce0e302511eb4#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?5e2e5e47d17b96ec50fce0e302511eb4") format("woff"),\n\turl("/public/vusion-icon-font.svg?5e2e5e47d17b96ec50fce0e302511eb4#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?5e2e5e47d17b96ec50fce0e302511eb4") format("truetype"),\n\turl("/public/vusion-icon-font.eot?5e2e5e47d17b96ec50fce0e302511eb4#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?5e2e5e47d17b96ec50fce0e302511eb4") format("woff"),\n\turl("/public/vusion-icon-font.svg?5e2e5e47d17b96ec50fce0e302511eb4#vusion-icon-font") format("svg");\n}'},webpackJsonp([51],{415:function(s,t,n){function i(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function e(s){var t=document.createElement("style"),n=document.getElementsByTagName("head")[0];t.innerHTML=i(s),t.id=a,t.type="text/css",n?n.appendChild(t):window.addEventListener("load",function(){n.appendChild(t)})}var a="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(e(),window.HAS_CREATE_FONT_STYLE=!0)}},455:function(s,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("基础配置")]),t("h3",[this._v("配置方式")]),t("p",[this._v("Vusion 的项目配置，可以在"),t("code",{pre:!0},[this._v("package.json")]),this._v("中用一个"),t("code",{pre:!0},[this._v("vusion")]),this._v("对象表示，也可以在目录下创建一个"),t("code",{pre:!0},[this._v("vusion.config.js")]),this._v("。如果两者同时存在，会优先使用配置文件。使用 Vusion CLI 时，也可以用"),t("code",{pre:!0},[this._v("-c, --config-path")]),this._v("临时指定一个配置文件。")]),t("p",[this._v("比如组件库类型的配置很简单，只需在"),t("code",{pre:!0},[this._v("package.json")]),this._v("中添加：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-json"}},[t("code",{attrs:{"v-pre":""}},[this._v("{ "),t("span",{attrs:{class:"hljs-attr"}},[this._v('"vusion"')]),this._v(": {\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v('"version"')]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v('">=0.6.0"')]),this._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v('"type"')]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v('"library"')]),this._v("\n} }\n")])]),t("p",[this._v("应用类型一般用配置文件。下面为"),t("code",{pre:!0},[this._v("app")]),this._v("模板中的一份简单配置。")]),t("pre",{pre:!0,attrs:{class:"hljs lang-js"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-keyword"}},[this._v("const")]),this._v(" path = "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("require")]),this._v("("),t("span",{attrs:{class:"hljs-string"}},[this._v("'path'")]),this._v(");\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("const")]),this._v(" HtmlWebpackPlugin = "),t("span",{attrs:{class:"hljs-built_in"}},[this._v("require")]),this._v("("),t("span",{attrs:{class:"hljs-string"}},[this._v("'html-webpack-plugin'")]),this._v(");\n\n"),t("span",{attrs:{class:"hljs-built_in"}},[this._v("module")]),this._v(".exports = {\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("version")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'>=0.6.0'")]),this._v(",                                 "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// 能够支持该项目的 Vusion CLI 的版本条件")]),this._v("\n    type: "),t("span",{attrs:{class:"hljs-string"}},[this._v("'app'")]),this._v(",                                        "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// [必填] 项目类型。目前可选：app、app-pro、library、fullstack")]),this._v("\n    extractCSS: "),t("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",                                   "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// 打包时将 CSS 从 JS 中提出")]),this._v("\n    staticPath: "),t("span",{attrs:{class:"hljs-string"}},[this._v("'./static'")]),this._v(",                             "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// 指定静态文件目录。该目录中的内容将会直接被拷贝到输出目录中")]),this._v("\n    libraryPath: "),t("span",{attrs:{class:"hljs-string"}},[this._v("'./src/components'")]),this._v(",                    "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// [必填] 指定项目库的路径。用于检索全局样式等文件")]),this._v("\n    webpack: {                                          "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// 扩展 Webpack")]),this._v("\n        entry: {                                        "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// [必填] Webpack 入口")]),this._v("\n            vendor: "),t("span",{attrs:{class:"hljs-string"}},[this._v("'babel-polyfill'")]),this._v(",                   "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// babel-polyfill 等通用库")]),this._v("\n            bundle: "),t("span",{attrs:{class:"hljs-string"}},[this._v("'./src/views/index.js'")]),this._v(",             "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// 指定打包入口文件")]),this._v("\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("resolve")]),this._v(": {\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("alias")]),this._v(": {\n                "),t("span",{attrs:{class:"hljs-string"}},[this._v("'@'")]),this._v(": path.resolve(__dirname, "),t("span",{attrs:{class:"hljs-string"}},[this._v("'./src'")]),this._v("),  "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// 可以设置一个`src`的别名")]),this._v("\n            },\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("plugins")]),this._v(": [\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("new")]),this._v(" HtmlWebpackPlugin({                     "),t("span",{attrs:{class:"hljs-comment"}},[this._v("// 使用 HtmlWebpackPlugin 创建一个入口页")]),this._v("\n                filename: "),t("span",{attrs:{class:"hljs-string"}},[this._v("'index.html'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("hash")]),this._v(": "),t("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("template")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'./src/views/index.html'")]),this._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[this._v("chunks")]),this._v(": ["),t("span",{attrs:{class:"hljs-string"}},[this._v("'vendor'")]),this._v(", "),t("span",{attrs:{class:"hljs-string"}},[this._v("'bundle'")]),this._v("],\n            }),\n        ],\n    },\n};\n")])]),t("p",[this._v("为了防止出错与方便使用，配置中的"),t("code",{pre:!0},[this._v("webpack")]),this._v("、"),t("code",{pre:!0},[this._v("webpackDevServer")]),this._v("、"),t("code",{pre:!0},[this._v("postcss")]),this._v("、"),t("code",{pre:!0},[this._v("vue")]),this._v("、"),t("code",{pre:!0},[this._v("karma")]),this._v("等对象与 Vusion 的默认配置采用深度合并的策略。")]),t("h3",[this._v("DevServer 配置")]),t("p",[this._v("最常添加的是 DevServer 的配置。例如：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-js"}},[t("code",{attrs:{"v-pre":""}},[this._v("{\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("webpackDevServer")]),this._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("port")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("8080")]),this._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("target")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v('"http://some.example.com"')]),this._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[this._v("contentBase")]),this._v(": __dirname,\n    },\n}\n")])]),t("p",[this._v("更多关于 DevServer 的参数请查阅 "),t("u-link",{attrs:{href:"https://doc.webpack-china.org/configuration/dev-server"}},[this._v("Webpack 的 DevServer 配置")]),this._v("。")],1),t("h3",[this._v("下一步")]),t("p",[this._v("指南到此结束，接下来您可以：")]),t("ul",[t("li",[this._v("查看"),t("u-link",{attrs:{href:"/api/config"}},[this._v("全部配置 API")]),this._v("；")],1)]),t("ul",[t("li",[this._v("查看 Vusion 平台的"),t("u-link",{attrs:{href:"/libraries"}},[this._v("组件库")]),this._v("。")],1)])])},staticRenderFns:[]},e=n(1)(null,i,!1,null,null,null);t.default=e.exports}});