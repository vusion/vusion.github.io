"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'},webpackJsonp([22],{430:function(a,t,s){var v="ICON-FONT-FILE-STYLE";function n(a){return(a||window.ICON_FONT_STYLE).styleContent||""}function _(a){var t=document.createElement("style"),s=document.getElementsByTagName("head")[0];t.innerHTML=n(a),t.id=v,t.type="text/css",s?s.appendChild(t):window.addEventListener("load",function(){s.appendChild(t)})}a.exports=function(){window.HAS_CREATE_FONT_STYLE||(_(),window.HAS_CREATE_FONT_STYLE=!0)}},494:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var v={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("u-article",[s("h1",[a._v("导航条 Navbar")]),s("h2",[a._v("示例")]),s("h3",[a._v("基本形式")]),s("h4",[a._v("路由模式")]),s("div",{staticClass:"u-example"},[s("u-navbar",[s("u-navbar-item",[a._v("指南")]),s("u-navbar-item",[a._v("概念")]),s("u-navbar-item",{attrs:{to:"/proto-ui"}},[a._v("组件")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("指南"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("概念"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("to")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"/proto-ui"')]),a._v(">")]),a._v("组件"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n")])]),s("h4",[a._v("value模式")]),s("div",{staticClass:"u-example"},[s("u-navbar",{attrs:{value:"3",router:!1}},[s("u-navbar-item",{attrs:{value:"1"}},[a._v("指南")]),s("u-navbar-item",{attrs:{value:"2"}},[a._v("概念")]),s("u-navbar-item",{attrs:{value:"3"}},[a._v("组件")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"3"')]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v(":router")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"false"')]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"1"')]),a._v(">")]),a._v("指南"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"2"')]),a._v(">")]),a._v("概念"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("value")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"3"')]),a._v(">")]),a._v("组件"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n")])]),s("h3",[a._v("只读、禁用、禁用某一项")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",{attrs:{direction:"vertical"}},[s("u-navbar",{attrs:{disabled:""}},[s("u-navbar-item",[a._v("指南")]),s("u-navbar-item",[a._v("概念")]),s("u-navbar-item",{attrs:{to:"/proto-ui"}},[a._v("组件")])],1),s("u-navbar",[s("u-navbar-item",[a._v("指南")]),s("u-navbar-item",{attrs:{disabled:""}},[a._v("概念")]),s("u-navbar-item",{attrs:{to:"/proto-ui"}},[a._v("组件")])],1)],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("direction")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"vertical"')]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("disabled")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("指南"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("概念"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("to")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"/proto-ui"')]),a._v(">")]),a._v("组件"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("指南"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("disabled")]),a._v(">")]),a._v("概念"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("to")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"/proto-ui"')]),a._v(">")]),a._v("组件"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n")])]),s("h3",[a._v("位置")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",{attrs:{direction:"vertical"}},[s("u-navbar",{attrs:{alignment:"left"}},[s("u-navbar-item",[a._v("指南")]),s("u-navbar-item",[a._v("概念")]),s("u-navbar-item",{attrs:{to:"/proto-ui"}},[a._v("组件")])],1),s("u-navbar",{attrs:{alignment:"center"}},[s("u-navbar-item",[a._v("指南")]),s("u-navbar-item",[a._v("概念")]),s("u-navbar-item",{attrs:{to:"/proto-ui"}},[a._v("组件")])],1),s("u-navbar",{attrs:{alignment:"right"}},[s("u-navbar-item",[a._v("指南")]),s("u-navbar-item",[a._v("概念")]),s("u-navbar-item",{attrs:{to:"/proto-ui"}},[a._v("组件")])],1)],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("direction")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"vertical"')]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("alignment")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"left"')]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("指南"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("概念"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("to")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"/proto-ui"')]),a._v(">")]),a._v("组件"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("alignment")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"center"')]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("指南"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("概念"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("to")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"/proto-ui"')]),a._v(">")]),a._v("组件"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("alignment")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"right"')]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("指南"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("概念"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("to")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"/proto-ui"')]),a._v(">")]),a._v("组件"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n")])]),s("h3",[a._v("分隔符")]),s("div",{staticClass:"u-example"},[s("u-navbar",[s("u-navbar-item",[a._v("指南")]),s("u-navbar-item",[a._v("概念")]),s("u-navbar-item",[a._v("配置")]),s("u-navbar-divider"),s("u-navbar-item",{attrs:{to:"/proto-ui"}},[a._v("组件")]),s("u-navbar-item",{attrs:{to:"/libraries"}},[a._v("组件库")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("指南"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("概念"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("配置"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-divider")]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-divider")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("to")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"/proto-ui"')]),a._v(">")]),a._v("组件"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("to")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"/libraries"')]),a._v(">")]),a._v("组件库"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n")])]),s("h3",[a._v("与Logo结合")]),s("div",{staticClass:"u-example"},[s("u-navbar",[s("u-logo",{attrs:{slot:"left"},slot:"left"}),s("u-navbar-item",[a._v("指南")]),s("u-navbar-item",[a._v("概念")]),s("u-navbar-item",{attrs:{to:"/proto-ui"}},[a._v("组件")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-logo")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("slot")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"left"')]),a._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-logo")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("指南"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("概念"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[a._v("<"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(" "),s("span",{attrs:{class:"hljs-attr"}},[a._v("to")]),a._v("="),s("span",{attrs:{class:"hljs-string"}},[a._v('"/proto-ui"')]),a._v(">")]),a._v("组件"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar-item")]),a._v(">")]),a._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[a._v("</"),s("span",{attrs:{class:"hljs-name"}},[a._v("u-navbar")]),a._v(">")]),a._v("\n")])]),s("h2",[a._v("Navbar API")]),s("h3",[a._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Prop/Attr")]),s("th",[a._v("Type")]),s("th",[a._v("Default")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("router")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("true")])]),s("td",[a._v("是否根据vue-router来控制选择哪一项")])]),s("tr",[s("td",[a._v("value.sync, v-model")]),s("td",[a._v("Any")]),s("td"),s("td",[a._v("当前选择的值")])]),s("tr",[s("td",[a._v("field")]),s("td",[a._v("String")]),s("td",[s("code",{pre:!0},[a._v("'text'")])]),s("td",[a._v("显示文本字段")])]),s("tr",[s("td",[a._v("readonly")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("false")])]),s("td",[a._v("是否只读")])]),s("tr",[s("td",[a._v("disabled")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("false")])]),s("td",[a._v("是否禁用")])])])]),s("h3",[a._v("Slots")]),s("h4",[a._v("(default)")]),s("p",[a._v("插入"),s("code",{pre:!0},[a._v("<u-navbar-item>")]),a._v("或"),s("code",{pre:!0},[a._v("<u-navbar-divider>")]),a._v("子组件。")]),s("h3",[a._v("Events")]),s("h4",[a._v("@before-select")]),s("p",[a._v("选择某一项前触发")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("$event.value")]),s("td",[a._v("Any")]),s("td",[a._v("选择项的值")])]),s("tr",[s("td",[a._v("$event.oldValue")]),s("td",[a._v("Any")]),s("td",[a._v("旧的值")])]),s("tr",[s("td",[a._v("$event.item")]),s("td",[a._v("Object")]),s("td",[a._v("选择项相关对象")])]),s("tr",[s("td",[a._v("$event.itemVM")]),s("td",[a._v("NavbarItem")]),s("td",[a._v("选择项子组件")])]),s("tr",[s("td",[a._v("$event.preventDefault")]),s("td",[a._v("Function")]),s("td",[a._v("阻止选择流程")])])])]),s("h4",[a._v("@input")]),s("p",[a._v("选择某一项时触发")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("$event")]),s("td",[a._v("Any")]),s("td",[a._v("选择项的值")])])])]),s("h4",[a._v("@select")]),s("p",[a._v("选择某一项时触发")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("$event.value")]),s("td",[a._v("Any")]),s("td",[a._v("改变后的值")])]),s("tr",[s("td",[a._v("$event.oldValue")]),s("td",[a._v("Any")]),s("td",[a._v("旧的值")])]),s("tr",[s("td",[a._v("$event.item")]),s("td",[a._v("Object")]),s("td",[a._v("单选模式中，选择项相关对象")])]),s("tr",[s("td",[a._v("$event.itemVM")]),s("td",[a._v("NavbarItem")]),s("td",[a._v("单选模式中，选择项子组件")])])])]),s("h2",[a._v("NavbarItem API")]),s("h3",[a._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Prop/Attr")]),s("th",[a._v("Type")]),s("th",[a._v("Default")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("value")]),s("td",[a._v("Any")]),s("td"),s("td",[a._v("此项的值")])]),s("tr",[s("td",[a._v("disabled")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("false")])]),s("td",[a._v("禁用此项")])]),s("tr",[s("td",[a._v("item")]),s("td",[a._v("Object")]),s("td"),s("td",[a._v("相关对象。当选择此项时，抛出的事件会传递该对象，便于开发")])]),s("tr",[s("td",[a._v("href")]),s("td",[a._v("String")]),s("td"),s("td",[a._v("链接地址")])]),s("tr",[s("td",[a._v("target")]),s("td",[a._v("String")]),s("td"),s("td",[a._v("打开方式")])]),s("tr",[s("td",[a._v("to")]),s("td",[a._v("String, Location")]),s("td"),s("td",[a._v("需要vue-router，与"),s("code",{pre:!0},[a._v("<router-link>")]),a._v("的"),s("code",{pre:!0},[a._v("to")]),a._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),s("tr",[s("td",[a._v("replace")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("false")])]),s("td",[a._v("需要vue-router，与"),s("code",{pre:!0},[a._v("<router-link>")]),a._v("的"),s("code",{pre:!0},[a._v("replace")]),a._v("属性相同。如果为"),s("code",{pre:!0},[a._v("true")]),a._v("，当点击时，会调用"),s("code",{pre:!0},[a._v("router.replace()")]),a._v("而不是"),s("code",{pre:!0},[a._v("router.push()")]),a._v("，于是导航后不会留下"),s("code",{pre:!0},[a._v("history")]),a._v("记录。")])]),s("tr",[s("td",[a._v("exact")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("false")])]),s("td",[a._v("需要vue-router，与"),s("code",{pre:!0},[a._v("<router-link>")]),a._v("的"),s("code",{pre:!0},[a._v("exact")]),a._v("属性相同。是否与路由完全一致时才高亮显示。")])])])]),s("h3",[a._v("Slots")]),s("h4",[a._v("(default)")]),s("p",[a._v("插入文本或HTML。")]),s("h3",[a._v("Events")]),s("h4",[a._v("@before-select")]),s("p",[a._v("选择此项前触发")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("$event.value")]),s("td",[a._v("Any")]),s("td",[a._v("此项的值")])]),s("tr",[s("td",[a._v("$event.item")]),s("td",[a._v("Object")]),s("td",[a._v("此项的相关对象")])]),s("tr",[s("td",[a._v("$event.itemVM")]),s("td",[a._v("NavbarItem")]),s("td",[a._v("此组件")])]),s("tr",[s("td",[a._v("$event.preventDefault")]),s("td",[a._v("Function")]),s("td",[a._v("阻止选择流程")])])])]),s("h4",[a._v("@before-navigate")]),s("p",[a._v("使用router相关属性切换路由前触发")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("$event.to")]),s("td",[a._v("String, Location")]),s("td",[s("code",{pre:!0},[a._v("to")]),a._v("属性的值")])]),s("tr",[s("td",[a._v("$event.replace")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("replace")]),a._v("属性的值")])]),s("tr",[s("td",[a._v("$event.exact")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("exact")]),a._v("属性的值")])]),s("tr",[s("td",[a._v("$event.preventDefault")]),s("td",[a._v("Function")]),s("td",[a._v("阻止切换流程")])])])]),s("h4",[a._v("@navigate")]),s("p",[a._v("使用router相关属性切换路由时触发")]),s("table",[s("thead",[s("tr",[s("th",[a._v("Param")]),s("th",[a._v("Type")]),s("th",[a._v("Description")])])]),s("tbody",[s("tr",[s("td",[a._v("$event.to")]),s("td",[a._v("String, Location")]),s("td",[s("code",{pre:!0},[a._v("to")]),a._v("属性的值")])]),s("tr",[s("td",[a._v("$event.replace")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("replace")]),a._v("属性的值")])]),s("tr",[s("td",[a._v("$event.exact")]),s("td",[a._v("Boolean")]),s("td",[s("code",{pre:!0},[a._v("exact")]),a._v("属性的值")])])])]),s("h2",[a._v("NavbarDivider API")]),s("p",[a._v("无")])])},staticRenderFns:[]},n=s(1)(null,v,!1,null,null,null);t.default=n.exports}});