"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'},webpackJsonp([65],{430:function(s,t,n){var a="ICON-FONT-FILE-STYLE";function e(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function l(s){var t=document.createElement("style"),n=document.getElementsByTagName("head")[0];t.innerHTML=e(s),t.id=a,t.type="text/css",n?n.appendChild(t):window.addEventListener("load",function(){n.appendChild(t)})}s.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},482:function(s,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("u-article",[n("h1",[s._v("配置")]),n("h2",[s._v("命令行工具（CLI）")]),n("h3",[s._v("配置文件")]),n("p",[s._v("在项目目录下创建"),n("code",{pre:!0},[s._v("vusion.config.js")]),s._v("，有以下一些选项：")]),n("pre",{pre:!0,attrs:{class:"hljs lang-javascript"}},[n("code",{attrs:{"v-pre":""}},[s._v("{\n    "),n("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),n("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",                              "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// Vusion 项目类型。必填。可选项：'library', 'app'。")]),s._v("\n    staticPath: "),n("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",                        "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 静态资源目录")]),s._v("\n    assetsPath: "),n("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",                        "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// @弃用, 同 `staticPath`")]),s._v("\n    libraryPath: "),n("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",                       "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 库入口文件。项目类型为 `library` 时，默认为 `./index.js`。")]),s._v("\n    baseCSSPath: "),n("span",{attrs:{class:"hljs-string"}},[s._v("'./src/base/index.css'")]),s._v(",   "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// CSS 基础排版")]),s._v("\n    globalCSSPath: "),n("span",{attrs:{class:"hljs-string"}},[s._v("'./global.css'")]),s._v(",         "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 全局 CSS 文件路径")]),s._v("\n    clean: "),n("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",                           "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// `dev` 或 `build` 操作前，清空输出目录。")]),s._v("\n    docs: "),n("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",                           "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 为库中的基础组件生成文档。`project-type` 为 `library` 时，默认开启该功能。")]),s._v("\n    open: "),n("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",                            "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// `dev` 模式下，启动服务时是否打开浏览器。")]),s._v("\n    hot: "),n("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",                             "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// `dev` 模式下，启动服务时是否打开热更新。")]),s._v("\n    sourceMap: "),n("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",                      "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// `build` 模式下，是否开启 source map。")]),s._v("\n    extractCSS: "),n("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",                     "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// `build` 模式下，是否使用 ExtractTextPlugin 处理 CSS 文件。")]),s._v("\n    uglifyJS: "),n("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",                       "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// `build` 模式下，是否使用 UglifyJSPlugin 处理 JS 文件。")]),s._v("\n    experimental: "),n("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",                   "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 开启试用的 loader 或者 plugin。比如：ModuleConcatenationPlugin。")]),s._v("\n    resolvePriority: "),n("span",{attrs:{class:"hljs-string"}},[s._v("'cwd'")]),s._v(",                "),n("span",{attrs:{class:"hljs-comment"}},[s._v('// Priority to resolve modules or loaders, "cwd"(default) or "cli"')]),s._v("\n    webpack: {},                           "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 扩展 webpack 配置")]),s._v("\n    webpackDevServer: {},                  "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 扩展 webpackDevServer 配置")]),s._v("\n    postcss: [],                           "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 扩展 postcss plugins 配置")]),s._v("\n    vue: {},                               "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 扩展 vue-loader 配置")]),s._v("\n    karma: {},                             "),n("span",{attrs:{class:"hljs-comment"}},[s._v("// 扩展 karma 配置")]),s._v("\n}\n")])])])},staticRenderFns:[]},e=n(1)(null,a,!1,null,null,null);t.default=e.exports}});