"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?341e673edf48e79c94671a0b6afa2574") format("truetype"),\n\turl("/public/vusion-icon-font.eot?341e673edf48e79c94671a0b6afa2574#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?341e673edf48e79c94671a0b6afa2574") format("woff"),\n\turl("/public/vusion-icon-font.svg?341e673edf48e79c94671a0b6afa2574#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?341e673edf48e79c94671a0b6afa2574") format("truetype"),\n\turl("/public/vusion-icon-font.eot?341e673edf48e79c94671a0b6afa2574#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?341e673edf48e79c94671a0b6afa2574") format("woff"),\n\turl("/public/vusion-icon-font.svg?341e673edf48e79c94671a0b6afa2574#vusion-icon-font") format("svg");\n}'},webpackJsonp([38],{416:function(t,s,i){function e(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function a(t){var s=document.createElement("style"),i=document.getElementsByTagName("head")[0];s.innerHTML=e(t),s.id=h,s.type="text/css",i?i.appendChild(s):window.addEventListener("load",function(){i.appendChild(s)})}var h="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(a(),window.HAS_CREATE_FONT_STYLE=!0)}},470:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("按钮 Button")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("div",{staticClass:"u-example"},[s("u-button",[this._v("按钮")])],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("按钮"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("禁用")]),s("div",{staticClass:"u-example"},[s("u-button",{attrs:{disabled:""}},[this._v("禁用")])],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),this._v("禁用"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("链接")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",[s("u-button",{attrs:{href:"https://vusion.github.io",target:"_blank"}},[this._v("href")]),s("u-button",{attrs:{to:"/proto-ui/u-link"}},[this._v("to")]),s("u-button",{attrs:{href:"https://vusion.github.io",disabled:""}},[this._v("disabled")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("href")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"https://vusion.github.io"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("target")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"_blank"')]),this._v(">")]),this._v("href"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("to")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"/proto-ui/u-link"')]),this._v(">")]),this._v("to"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("href")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"https://vusion.github.io"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),this._v("disabled"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("href")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("链接地址")])]),s("tr",[s("td",[this._v("target")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("（原生属性）")])]),s("tr",[s("td",[this._v("to")]),s("td",[this._v("String, Location")]),s("td"),s("td",[this._v("需要vue-router，与"),s("code",{pre:!0},[this._v("<router-link>")]),this._v("的"),s("code",{pre:!0},[this._v("to")]),this._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),s("tr",[s("td",[this._v("replace")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("需要vue-router，与"),s("code",{pre:!0},[this._v("<router-link>")]),this._v("的"),s("code",{pre:!0},[this._v("replace")]),this._v("属性相同。如果为"),s("code",{pre:!0},[this._v("true")]),this._v("，当点击时，会调用"),s("code",{pre:!0},[this._v("router.replace()")]),this._v("而不是"),s("code",{pre:!0},[this._v("router.push()")]),this._v("，于是导航后不会留下"),s("code",{pre:!0},[this._v("history")]),this._v("记录。")])]),s("tr",[s("td",[this._v("append")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("需要vue-router，与"),s("code",{pre:!0},[this._v("<router-link>")]),this._v("的"),s("code",{pre:!0},[this._v("append")]),this._v("属性相同。如果为"),s("code",{pre:!0},[this._v("true")]),this._v("，则在当前路径后追加"),s("code",{pre:!0},[this._v("to")]),this._v("的路径。")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用。禁用后不会响应"),s("code",{pre:!0},[this._v("click")]),this._v("事件。")])])])]),s("h3",[this._v("Slots")]),s("h4",[this._v("(default)")]),s("p",[this._v("插入文本或HTML。")]),s("h3",[this._v("Events")]),s("h4",[this._v("$listeners")]),s("p",[this._v("监听所有"),s("code",{pre:!0},[this._v("<a>")]),this._v("元素的事件。")]),s("h4",[this._v("@before-navigate")]),s("p",[this._v("使用router相关属性切换路由前触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.to")]),s("td",[this._v("String, Location")]),s("td",[s("code",{pre:!0},[this._v("to")]),this._v("属性的值")])]),s("tr",[s("td",[this._v("$event.replace")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("replace")]),this._v("属性的值")])]),s("tr",[s("td",[this._v("$event.append")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("append")]),this._v("属性的值")])]),s("tr",[s("td",[this._v("$event.preventDefault")]),s("td",[this._v("Function")]),s("td",[this._v("阻止切换流程")])])])]),s("h4",[this._v("@navigate")]),s("p",[this._v("使用router相关属性切换路由时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.to")]),s("td",[this._v("String, Location")]),s("td",[s("code",{pre:!0},[this._v("to")]),this._v("属性的值")])]),s("tr",[s("td",[this._v("$event.replace")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("replace")]),this._v("属性的值")])]),s("tr",[s("td",[this._v("$event.append")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("append")]),this._v("属性的值")])])])])])},staticRenderFns:[]},a=i(1)(null,e,!1,null,null,null);s.default=a.exports}});