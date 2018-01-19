"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?32682f4f972c7274d534b070e1747b9f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?32682f4f972c7274d534b070e1747b9f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?32682f4f972c7274d534b070e1747b9f") format("woff"),\n\turl("/public/vusion-icon-font.svg?32682f4f972c7274d534b070e1747b9f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?32682f4f972c7274d534b070e1747b9f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?32682f4f972c7274d534b070e1747b9f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?32682f4f972c7274d534b070e1747b9f") format("woff"),\n\turl("/public/vusion-icon-font.svg?32682f4f972c7274d534b070e1747b9f#vusion-icon-font") format("svg");\n}'},webpackJsonp([47],{408:function(n,t,o){function e(n){return(n||window.ICON_FONT_STYLE).styleContent||""}function i(n){var t=document.createElement("style"),o=document.getElementsByTagName("head")[0];t.innerHTML=e(n),t.id=f,t.type="text/css",o?o.appendChild(t):window.addEventListener("load",function(){o.appendChild(t)})}var f="ICON-FONT-FILE-STYLE";n.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},437:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={render:function(){var n=this.$createElement,t=this._self._c||n;return t("u-article",[t("h1",[this._v("安装")]),t("h2",[this._v("命令行工具（CLI）")]),t("h3",[this._v("前提条件")]),t("p",[this._v("在开始之前，请确保安装了 "),t("u-link",{attrs:{href:"https://nodejs.org/en/"}},[this._v("Node.js")]),this._v(" 的最新版本。最佳选择是使用 Node.js 最新的长期支持版本（LTS - Long Term Support）。使用旧版本可能会遇到各种问题，因为它们可能缺少 Vusion CLI 的相关依赖包。")],1),t("h3",[this._v("全局安装")]),t("p",[this._v("以下为 npm 的安装方式：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[t("code",{attrs:{"v-pre":""}},[this._v("npm install -g vusion-cli\n")])]),t("blockquote",[t("p",[this._v("对于大陆用户，建议将 npm 的注册表源设置为国内的镜像，可以大幅提升安装速度。")])]),t("p",[this._v("以下为 yarn 的安装方式：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[t("code",{attrs:{"v-pre":""}},[this._v("yarn global add vusion-cli\n")])]),t("p",[this._v("安装的时间可能比较长，因为 Vusion CLI 集成了许多功能，请耐心等待。")]),t("h3",[this._v("下一步")]),t("p",[this._v("接下来我们会以"),t("u-link",{attrs:{href:"/guides/quickstart"}},[this._v("创建新项目")]),this._v("为开始，教您如何使用命令行工具。")],1)])},staticRenderFns:[]},i=o(1)(null,e,!1,null,null,null);t.default=i.exports}});