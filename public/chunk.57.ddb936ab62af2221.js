"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'},webpackJsonp([57],{430:function(n,e,o){var t="ICON-FONT-FILE-STYLE";function f(n){return(n||window.ICON_FONT_STYLE).styleContent||""}function i(n){var e=document.createElement("style"),o=document.getElementsByTagName("head")[0];e.innerHTML=f(n),e.id=t,e.type="text/css",o?o.appendChild(e):window.addEventListener("load",function(){o.appendChild(e)})}n.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},469:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={render:function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("u-article",[o("h1",[n._v("打包与部署")]),o("p",[n._v("Vusion 打包只需要一条命令："),o("code",{pre:!0},[n._v("vusion build")]),n._v("。")]),o("p",[n._v("因此只要在部署环境中全局安装 Vusion CLI，配置好上述命令即可。")]),o("ul",[o("li",[n._v("可以使用"),o("code",{pre:!0},[n._v("--extract-css")]),n._v("将 CSS 从 JS 中提出；")]),o("li",[n._v("可以使用"),o("code",{pre:!0},[n._v("--source-map")]),n._v("开启 Source Map，方便在部署环境调试。")])]),o("h3",[n._v("下一步")]),o("p",[n._v("下一节将会列出更多的"),o("u-link",{attrs:{href:"guides/commands"}},[n._v("常见命令")]),n._v("。")],1)])},staticRenderFns:[]},f=o(1)(null,t,!1,null,null,null);e.default=f.exports}});