"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?5e2e5e47d17b96ec50fce0e302511eb4") format("truetype"),\n\turl("/public/vusion-icon-font.eot?5e2e5e47d17b96ec50fce0e302511eb4#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?5e2e5e47d17b96ec50fce0e302511eb4") format("woff"),\n\turl("/public/vusion-icon-font.svg?5e2e5e47d17b96ec50fce0e302511eb4#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?5e2e5e47d17b96ec50fce0e302511eb4") format("truetype"),\n\turl("/public/vusion-icon-font.eot?5e2e5e47d17b96ec50fce0e302511eb4#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?5e2e5e47d17b96ec50fce0e302511eb4") format("woff"),\n\turl("/public/vusion-icon-font.svg?5e2e5e47d17b96ec50fce0e302511eb4#vusion-icon-font") format("svg");\n}'},webpackJsonp([17],{415:function(t,s,a){function i(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function h(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=i(t),s.id=n,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}var n="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(h(),window.HAS_CREATE_FONT_STYLE=!0)}},481:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("数字输入 NumberInput")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",[s("u-number-input"),s("u-number-input",{attrs:{value:6}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"6"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("只读和禁用")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",[s("u-number-input",{attrs:{value:6,readonly:""}}),s("u-number-input",{attrs:{value:6,disabled:""}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"6"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"6"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("最大值和最小值")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",[s("u-number-input",{attrs:{value:6,min:4,max:12}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"6"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":min")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"4"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":max")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"12"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("间隔")]),s("div",{staticClass:"u-example"},[s("u-linear-layout",[s("u-number-input",{attrs:{value:6,step:10}})],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"6"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v(":step")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"10"')]),this._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-number-input")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),s("h2",[this._v("API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("value.sync, v-model")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("输入框的值")])]),s("tr",[s("td",[this._v("min")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("最小值")])]),s("tr",[s("td",[this._v("max")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("最大值")])]),s("tr",[s("td",[this._v("step")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("0")])]),s("td",[this._v("间隔。"),s("code",{pre:!0},[this._v("0")]),this._v("表示连续")])]),s("tr",[s("td",[this._v("fixed")]),s("td",[this._v("Number")]),s("td",[s("code",{pre:!0},[this._v("4")])]),s("td",[this._v("如果值为小数，该属性表示需要保留的位数")])]),s("tr",[s("td",[this._v("placeholder")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("原生属性")])]),s("tr",[s("td",[this._v("autofocus")]),s("td",[this._v("Boolean")]),s("td"),s("td",[this._v("原生属性")])]),s("tr",[s("td",[this._v("readonly")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否只读")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用")])])])]),s("h3",[this._v("Events")]),s("h4",[this._v("@input")]),s("p",[this._v("输入时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event")]),s("td",[this._v("String")]),s("td",[this._v("输入框的值")])])])]),s("h4",[this._v("@change")]),s("p",[this._v("值变化时触发（与原生事件不同）")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.value")]),s("td",[this._v("String")]),s("td",[this._v("改变后的值")])]),s("tr",[s("td",[this._v("$event.oldValue")]),s("td",[this._v("String")]),s("td",[this._v("旧的值")])])])]),s("h4",[this._v("@focus")]),s("p",[this._v("获得焦点时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event")]),s("td",[this._v("String")]),s("td",[this._v("原生事件对象")])])])]),s("h4",[this._v("@blur")]),s("p",[this._v("失去焦点时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event")]),s("td",[this._v("String")]),s("td",[this._v("原生事件对象")])])])])])},staticRenderFns:[]},h=a(1)(null,i,!1,null,null,null);s.default=h.exports}});