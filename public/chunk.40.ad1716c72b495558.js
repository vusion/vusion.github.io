"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?341e673edf48e79c94671a0b6afa2574") format("truetype"),\n\turl("/public/vusion-icon-font.eot?341e673edf48e79c94671a0b6afa2574#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?341e673edf48e79c94671a0b6afa2574") format("woff"),\n\turl("/public/vusion-icon-font.svg?341e673edf48e79c94671a0b6afa2574#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?341e673edf48e79c94671a0b6afa2574") format("truetype"),\n\turl("/public/vusion-icon-font.eot?341e673edf48e79c94671a0b6afa2574#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?341e673edf48e79c94671a0b6afa2574") format("woff"),\n\turl("/public/vusion-icon-font.svg?341e673edf48e79c94671a0b6afa2574#vusion-icon-font") format("svg");\n}'},webpackJsonp([40],{416:function(t,e,n){function o(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function i(t){var e=document.createElement("style"),n=document.getElementsByTagName("head")[0];e.innerHTML=o(t),e.id=s,e.type="text/css",n?n.appendChild(e):window.addEventListener("load",function(){n.appendChild(e)})}var s="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},468:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("u-article",[e("h1",[this._v("基础 Base")]),e("h3",[this._v("统一样式")]),e("p",[this._v("原型组件库以"),e("u-link",{attrs:{href:"http://necolas.github.io/normalize.css"}},[this._v("normalize.css")]),this._v("为基础，使初始样式在各个浏览器下保持统一，然后对HTML元素的默认样式作了进一步优化。")],1),e("p",[this._v("类似"),e("u-link",{attrs:{href:"https://getbootstrap.com"}},[this._v("Bootstrap")]),this._v("，将"),e("code",{pre:!0},[this._v("box-sizing: border-box")]),this._v("应用到所有元素，于是元素的宽高便不会受到"),e("code",{pre:!0},[this._v("padding")]),this._v("的影响。")],1),e("p",[this._v("使用Vue的"),e("code",{pre:!0},[this._v("preserveWhitespace: false")]),this._v("，将所有元素之间空格清除，这样在"),e("code",{pre:!0},[this._v("inline-block")]),this._v("的元素之间不会有空隙。")]),e("h3",[this._v("黑名单")]),e("p",[this._v("为了支持语义化，同时又为了满足正交性（组件元素之间互不影响的原则），以下元素被拉入黑名单："),e("code",{pre:!0},[this._v("<a>")]),this._v("、"),e("code",{pre:!0},[this._v("<dl>")]),this._v("、"),e("code",{pre:!0},[this._v("<dt>")]),this._v("、"),e("code",{pre:!0},[this._v("<dd>")]),this._v("、"),e("code",{pre:!0},[this._v("<ul>")]),this._v("、"),e("code",{pre:!0},[this._v("<ol>")]),this._v("、"),e("code",{pre:!0},[this._v("<li>")]),this._v("。它们的样式被清除，并且要求在组件中封装后使用，而不是直接在业务中使用。")])])},staticRenderFns:[]},i=n(1)(null,o,!1,null,null,null);e.default=i.exports}});