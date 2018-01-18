"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?32682f4f972c7274d534b070e1747b9f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?32682f4f972c7274d534b070e1747b9f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?32682f4f972c7274d534b070e1747b9f") format("woff"),\n\turl("/public/vusion-icon-font.svg?32682f4f972c7274d534b070e1747b9f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?32682f4f972c7274d534b070e1747b9f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?32682f4f972c7274d534b070e1747b9f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?32682f4f972c7274d534b070e1747b9f") format("woff"),\n\turl("/public/vusion-icon-font.svg?32682f4f972c7274d534b070e1747b9f#vusion-icon-font") format("svg");\n}'},webpackJsonp([8],{408:function(t,s,a){function i(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function h(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=i(t),s.id=e,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var e="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(h(),window.HAS_CREATE_FONT_STYLE=!0)}},477:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("u-switch",{attrs:{width:"wide"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}},[t._v(t._s(t.value?"ON":"OFF"))])},staticRenderFns:[]},h={components:{C2fd266:a(1)({data:function(){return{value:!1}}},i,!1,null,null,null).exports}},e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("开关 Switch")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("div",{staticClass:"u-example"},[s("u-switch")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-switch")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-switch")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("Value绑定")]),s("div",{staticClass:"u-example"},[s("C2fd266")],1),s("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-switch")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"value"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("width")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"wide"')]),this._v(">")]),this._v("{{ value ? 'ON' : 'OFF' }}"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-switch")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" { "),s("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),s("span",{attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(" };\n    },\n};\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("只读和禁用")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",[s("u-switch",{attrs:{readonly:""}}),s("u-switch",{attrs:{disabled:""}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-switch")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-switch")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-switch")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-switch")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("value")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("开关状态")])]),s("tr",[s("td",[this._v("readonly")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否只读")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用")])])])]),s("h3",[this._v("Slots")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Slot")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("(default)")]),s("td",[this._v("插入文本或HTML")])])])]),s("h3",[this._v("Events")]),s("h4",[this._v("@before-toggle")]),s("p",[this._v("切换开关状态前触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("Boolean")]),s("td",[this._v("开关状态")])]),s("tr",[s("td",[this._v("$event.oldValue")]),s("td",[this._v("Boolean")]),s("td",[this._v("旧的开关状态")])]),s("tr",[s("td",[this._v("$event.preventDefault")]),s("td",[this._v("Function")]),s("td",[this._v("阻止切换流程")])])])]),s("h4",[this._v("@input")]),s("p",[this._v("切换开关状态时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event")]),s("td",[this._v("Boolean")]),s("td",[this._v("切换后的开关状态")])])])]),s("h4",[this._v("@toggle")]),s("p",[this._v("切换开关状态时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("Boolean")]),s("td",[this._v("开关状态")])]),s("tr",[s("td",[this._v("$event.oldValue")]),s("td",[this._v("Boolean")]),s("td",[this._v("旧的开关状态")])])])]),s("h4",[this._v("@change")]),s("p",[this._v("开关状态改变时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("Boolean")]),s("td",[this._v("开关状态")])]),s("tr",[s("td",[this._v("$event.oldValue")]),s("td",[this._v("Boolean")]),s("td",[this._v("旧的开关状态")])])])])])},staticRenderFns:[]},n=a(1)(h,e,!1,null,null,null);s.default=n.exports}});