"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd") format("truetype"),\n\turl("/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd") format("woff"),\n\turl("/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd") format("truetype"),\n\turl("/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd") format("woff"),\n\turl("/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font") format("svg");\n}'},webpackJsonp([6],{464:function(n,e,t){function o(n){return(n||window.ICON_FONT_STYLE).styleContent||""}function i(n){var e=document.createElement("style"),t=document.getElementsByTagName("head")[0];e.innerHTML=o(n),e.id=f,e.type="text/css",t?t.appendChild(e):window.addEventListener("load",function(){t.appendChild(e)})}var f="ICON-FONT-FILE-STYLE";n.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},491:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var n=this.$createElement,e=this._self._c||n;return e("u-article",[e("h1",[this._v("安装")]),e("h2",[this._v("命令行工具（CLI）")]),e("h3",[this._v("前提条件")]),e("p",[this._v("在开始之前，请确保安装了"),e("u-link",{attrs:{href:"https://nodejs.org/en/"}},[this._v("Node.js")]),this._v("的最新版本。最佳选择是使用Node.js最新的长期支持版本(LTS - Long Term Support)。使用旧版本可能会遇到各种问题，因为它们可能缺少VusionCLI的相关依赖包。")],1),e("h3",[this._v("全局安装")]),e("p",[this._v("以下为npm的安装方式：")]),e("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[e("code",{attrs:{"v-pre":""}},[this._v("$ npm install -g vusion-cli\n")])]),e("blockquote",[e("p",[this._v("对于大陆用户，建议将npm的注册表源设置为国内的镜像，可以大幅提升安装速度。")])]),e("p",[this._v("以下为yarn的安装方式：")]),e("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[e("code",{attrs:{"v-pre":""}},[this._v("$ yarn global add vusion-cli\n")])]),e("p",[this._v("安装的时间可能比较长，因为VusionCLI集成了许多功能，请耐心等待。")])])},staticRenderFns:[]},i=t(1)(null,o,!1,null,null,null);e.default=i.exports}});