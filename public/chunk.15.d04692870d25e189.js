"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'},webpackJsonp([15],{430:function(t,e,o){var n="ICON-FONT-FILE-STYLE";function r(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function v(t){var e=document.createElement("style"),o=document.getElementsByTagName("head")[0];e.innerHTML=r(t),e.id=n,e.type="text/css",o?o.appendChild(e):window.addEventListener("load",function(){o.appendChild(e)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(v(),window.HAS_CREATE_FONT_STYLE=!0)}},522:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("u-article",[o("h1",[t._v("路由项 RouterItem")]),o("h2",[t._v("API")]),o("h3",[t._v("Props/Attrs")]),o("table",[o("thead",[o("tr",[o("th",[t._v("Prop/Attr")]),o("th",[t._v("Type")]),o("th",[t._v("Default")]),o("th",[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[t._v("href")]),o("td",[t._v("String")]),o("td"),o("td",[t._v("链接地址")])]),o("tr",[o("td",[t._v("target")]),o("td",[t._v("String")]),o("td"),o("td",[t._v("打开方式")])]),o("tr",[o("td",[t._v("to")]),o("td",[t._v("String, Location")]),o("td"),o("td",[t._v("需要vue-router，与"),o("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),o("code",{pre:!0},[t._v("to")]),t._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),o("tr",[o("td",[t._v("replace")]),o("td",[t._v("Boolean")]),o("td",[o("code",{pre:!0},[t._v("false")])]),o("td",[t._v("需要vue-router，与"),o("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),o("code",{pre:!0},[t._v("replace")]),t._v("属性相同。如果为"),o("code",{pre:!0},[t._v("true")]),t._v("，当点击时，会调用"),o("code",{pre:!0},[t._v("router.replace()")]),t._v("而不是"),o("code",{pre:!0},[t._v("router.push()")]),t._v("，于是导航后不会留下"),o("code",{pre:!0},[t._v("history")]),t._v("记录。")])]),o("tr",[o("td",[t._v("exact")]),o("td",[t._v("Boolean")]),o("td",[o("code",{pre:!0},[t._v("false")])]),o("td",[t._v("需要vue-router，与"),o("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),o("code",{pre:!0},[t._v("exact")]),t._v("属性相同。是否与路由完全一致时才高亮显示。")])])])]),o("h3",[t._v("Events")]),o("h4",[t._v("@before-navigate")]),o("p",[t._v("使用router相关属性切换路由前触发")]),o("table",[o("thead",[o("tr",[o("th",[t._v("Param")]),o("th",[t._v("Type")]),o("th",[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[t._v("$event.to")]),o("td",[t._v("String, Location")]),o("td",[o("code",{pre:!0},[t._v("to")]),t._v("属性的值")])]),o("tr",[o("td",[t._v("$event.replace")]),o("td",[t._v("Boolean")]),o("td",[o("code",{pre:!0},[t._v("replace")]),t._v("属性的值")])]),o("tr",[o("td",[t._v("$event.exact")]),o("td",[t._v("Boolean")]),o("td",[o("code",{pre:!0},[t._v("exact")]),t._v("属性的值")])]),o("tr",[o("td",[t._v("$event.preventDefault")]),o("td",[t._v("Function")]),o("td",[t._v("阻止切换流程")])])])]),o("h4",[t._v("@navigate")]),o("p",[t._v("使用router相关属性切换路由时触发")]),o("table",[o("thead",[o("tr",[o("th",[t._v("Param")]),o("th",[t._v("Type")]),o("th",[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[t._v("$event.to")]),o("td",[t._v("String, Location")]),o("td",[o("code",{pre:!0},[t._v("to")]),t._v("属性的值")])]),o("tr",[o("td",[t._v("$event.replace")]),o("td",[t._v("Boolean")]),o("td",[o("code",{pre:!0},[t._v("replace")]),t._v("属性的值")])]),o("tr",[o("td",[t._v("$event.exact")]),o("td",[t._v("Boolean")]),o("td",[o("code",{pre:!0},[t._v("exact")]),t._v("属性的值")])])])])])},staticRenderFns:[]},r=o(1)(null,n,!1,null,null,null);e.default=r.exports}});