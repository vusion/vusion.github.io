"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd") format("truetype"),\n\turl("/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd") format("woff"),\n\turl("/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd") format("truetype"),\n\turl("/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd") format("woff"),\n\turl("/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font") format("svg");\n}'},webpackJsonp([18],{464:function(s,t,a){function i(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function h(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=i(s),t.id=l,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var l="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(h(),window.HAS_CREATE_FONT_STYLE=!0)}},515:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("单选组 Radios")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-radios",{attrs:{value:"毛巾"}},[t("u-radio",{attrs:{label:"水杯"}},[this._v("水杯")]),t("u-radio",{attrs:{label:"坚果"}},[this._v("坚果")]),t("u-radio",{attrs:{label:"毛巾"}},[this._v("毛巾")]),t("u-radio",{attrs:{label:"沙发"}},[this._v("沙发")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radios")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"毛巾"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"水杯"')]),this._v(">")]),this._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"坚果"')]),this._v(">")]),this._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"毛巾"')]),this._v(">")]),this._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"沙发"')]),this._v(">")]),this._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radios")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("只读、禁用、禁用某一项")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",{attrs:{direction:"vertical"}},[t("u-radios",{attrs:{value:"毛巾",readonly:""}},[t("u-radio",{attrs:{label:"水杯"}},[this._v("水杯")]),t("u-radio",{attrs:{label:"坚果"}},[this._v("坚果")]),t("u-radio",{attrs:{label:"毛巾"}},[this._v("毛巾")]),t("u-radio",{attrs:{label:"沙发"}},[this._v("沙发")])],1),t("u-radios",{attrs:{value:"毛巾",disabled:""}},[t("u-radio",{attrs:{label:"水杯"}},[this._v("水杯")]),t("u-radio",{attrs:{label:"坚果"}},[this._v("坚果")]),t("u-radio",{attrs:{label:"毛巾"}},[this._v("毛巾")]),t("u-radio",{attrs:{label:"沙发"}},[this._v("沙发")])],1),t("u-radios",{attrs:{value:"坚果"}},[t("u-radio",{attrs:{label:"水杯"}},[this._v("水杯")]),t("u-radio",{attrs:{label:"坚果"}},[this._v("坚果")]),t("u-radio",{attrs:{label:"毛巾",disabled:""}},[this._v("毛巾")]),t("u-radio",{attrs:{label:"沙发",disabled:""}},[this._v("沙发")])],1)],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("direction")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"vertical"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radios")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"毛巾"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"水杯"')]),this._v(">")]),this._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"坚果"')]),this._v(">")]),this._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"毛巾"')]),this._v(">")]),this._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"沙发"')]),this._v(">")]),this._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radios")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radios")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"毛巾"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"水杯"')]),this._v(">")]),this._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"坚果"')]),this._v(">")]),this._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"毛巾"')]),this._v(">")]),this._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"沙发"')]),this._v(">")]),this._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radios")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radios")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"坚果"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"水杯"')]),this._v(">")]),this._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"坚果"')]),this._v(">")]),this._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"毛巾"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),this._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"沙发"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),this._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radio")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-radios")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),t("h2",[this._v("Radios API")]),t("h3",[this._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Prop/Attr")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("value.sync, v-model")]),t("td",[this._v("Any")]),t("td"),t("td",[this._v("当前选择的值")])]),t("tr",[t("td",[this._v("readonly")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否只读")])]),t("tr",[t("td",[this._v("disabled")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否禁用")])])])]),t("h3",[this._v("Slots")]),t("h4",[this._v("(default)")]),t("p",[this._v("插入"),t("code",{pre:!0},[this._v("<u-radio>")]),this._v("子组件。")]),t("h3",[this._v("Events")]),t("h4",[this._v("@before-select")]),t("p",[this._v("选择某一项前触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.value")]),t("td",[this._v("Any")]),t("td",[this._v("选择项的值")])]),t("tr",[t("td",[this._v("$event.oldValue")]),t("td",[this._v("Any")]),t("td",[this._v("旧的值")])]),t("tr",[t("td",[this._v("$event.itemVM")]),t("td",[this._v("ListViewItem")]),t("td",[this._v("选择项子组件")])]),t("tr",[t("td",[this._v("$event.preventDefault")]),t("td",[this._v("Function")]),t("td",[this._v("阻止选择流程")])])])]),t("h4",[this._v("@input")]),t("p",[this._v("选择某一项时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event")]),t("td",[this._v("Any")]),t("td",[this._v("选择项的值")])])])]),t("h4",[this._v("@select")]),t("p",[this._v("选择某一项时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.value")]),t("td",[this._v("Any")]),t("td",[this._v("改变后的值")])]),t("tr",[t("td",[this._v("$event.oldValue")]),t("td",[this._v("Any")]),t("td",[this._v("旧的值")])]),t("tr",[t("td",[this._v("$event.itemVM")]),t("td",[this._v("ListViewItem")]),t("td",[this._v("选择项子组件")])])])]),t("h2",[this._v("Radio API")]),t("h3",[this._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Prop/Attr")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("label")]),t("td",[this._v("Any")]),t("td"),t("td",[this._v("单选框标签。用于关联单选组的值")])]),t("tr",[t("td",[this._v("readonly")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("禁用只读")])]),t("tr",[t("td",[this._v("disabled")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("禁用此项")])])])]),t("h3",[this._v("Slots")]),t("h4",[this._v("(default)")]),t("p",[this._v("插入文本或HTML。")]),t("h3",[this._v("Events")]),t("h4",[this._v("@before-select")]),t("p",[this._v("选择此项前触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.label")]),t("td",[this._v("Any")]),t("td",[this._v("此项的标签")])]),t("tr",[t("td",[this._v("$event.itemVM")]),t("td",[this._v("ListViewItem")]),t("td",[this._v("此组件")])]),t("tr",[t("td",[this._v("$event.preventDefault")]),t("td",[this._v("Function")]),t("td",[this._v("阻止选择流程")])])])])])},staticRenderFns:[]},h=a(1)(null,i,!1,null,null,null);t.default=h.exports}});