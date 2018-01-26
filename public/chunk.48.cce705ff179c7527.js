"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?5e2e5e47d17b96ec50fce0e302511eb4") format("truetype"),\n\turl("/public/vusion-icon-font.eot?5e2e5e47d17b96ec50fce0e302511eb4#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?5e2e5e47d17b96ec50fce0e302511eb4") format("woff"),\n\turl("/public/vusion-icon-font.svg?5e2e5e47d17b96ec50fce0e302511eb4#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?5e2e5e47d17b96ec50fce0e302511eb4") format("truetype"),\n\turl("/public/vusion-icon-font.eot?5e2e5e47d17b96ec50fce0e302511eb4#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?5e2e5e47d17b96ec50fce0e302511eb4") format("woff"),\n\turl("/public/vusion-icon-font.svg?5e2e5e47d17b96ec50fce0e302511eb4#vusion-icon-font") format("svg");\n}'},webpackJsonp([48],{415:function(e,n,t){function o(e){return(e||window.ICON_FONT_STYLE).styleContent||""}function i(e){var n=document.createElement("style"),t=document.getElementsByTagName("head")[0];n.innerHTML=o(e),n.id=s,n.type="text/css",t?t.appendChild(n):window.addEventListener("load",function(){t.appendChild(n)})}var s="ICON-FONT-FILE-STYLE";e.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},444:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={render:function(){var e=this.$createElement,n=this._self._c||e;return n("u-article",[n("h1",[this._v("安装")]),n("h2",[this._v("命令行工具（CLI）")]),n("h3",[this._v("前提条件")]),n("p",[this._v("在开始之前，请确保安装了 "),n("u-link",{attrs:{href:"https://nodejs.org/en/"}},[this._v("Node.js")]),this._v(" 的最新版本。最佳选择是使用 Node.js 最新的长期支持版本（LTS - Long Term Support）。使用旧版本可能会遇到各种问题，因为它们可能缺少 Vusion CLI 的相关依赖包。")],1),n("h3",[this._v("全局安装")]),n("p",[this._v("以下为 npm 的安装方式：")]),n("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[n("code",{attrs:{"v-pre":""}},[this._v("npm install -g vusion-cli\n")])]),n("blockquote",[n("p",[this._v("对于大陆用户，建议将 npm 的注册表源设置为国内的镜像，可以大幅提升安装速度。")])]),n("p",[this._v("以下为 yarn 的安装方式：")]),n("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[n("code",{attrs:{"v-pre":""}},[this._v("yarn global add vusion-cli\n")])]),n("p",[this._v("安装的时间可能比较长，因为 Vusion CLI 集成了许多功能，请耐心等待。")]),n("h3",[this._v("下一步")]),n("p",[this._v("接下来我们会以"),n("u-link",{attrs:{href:"/guides/quickstart"}},[this._v("创建新项目")]),this._v("为开始，教您如何使用命令行工具。")],1)])},staticRenderFns:[]},i=t(1)(null,o,!1,null,null,null);n.default=i.exports}});