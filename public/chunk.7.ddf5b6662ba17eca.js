"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?5e2e5e47d17b96ec50fce0e302511eb4") format("truetype"),\n\turl("/public/vusion-icon-font.eot?5e2e5e47d17b96ec50fce0e302511eb4#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?5e2e5e47d17b96ec50fce0e302511eb4") format("woff"),\n\turl("/public/vusion-icon-font.svg?5e2e5e47d17b96ec50fce0e302511eb4#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?5e2e5e47d17b96ec50fce0e302511eb4") format("truetype"),\n\turl("/public/vusion-icon-font.eot?5e2e5e47d17b96ec50fce0e302511eb4#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?5e2e5e47d17b96ec50fce0e302511eb4") format("woff"),\n\turl("/public/vusion-icon-font.svg?5e2e5e47d17b96ec50fce0e302511eb4#vusion-icon-font") format("svg");\n}'},webpackJsonp([7],{415:function(s,t,a){function h(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function i(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=h(s),t.id=v,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var v="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},478:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("标签页 Tabs")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-tabs",[t("u-tab",{attrs:{title:"模板"}},[this._v("模板内容")]),t("u-tab",{attrs:{title:"样式"}},[this._v("样式内容")]),t("u-tab",{attrs:{title:"逻辑"}},[this._v("逻辑内容")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"模板"')]),this._v(">")]),this._v("模板内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"样式"')]),this._v(">")]),this._v("样式内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"逻辑"')]),this._v(">")]),this._v("逻辑内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("Value")]),t("div",{staticClass:"u-example"},[t("u-tabs",{attrs:{value:"B"}},[t("u-tab",{attrs:{title:"模板",value:"A"}},[this._v("模板内容")]),t("u-tab",{attrs:{title:"样式",value:"B"}},[this._v("样式内容")]),t("u-tab",{attrs:{title:"逻辑",value:"C"}},[this._v("逻辑内容")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"B"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"模板"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"A"')]),this._v(">")]),this._v("模板内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"样式"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"B"')]),this._v(">")]),this._v("样式内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"逻辑"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"C"')]),this._v(">")]),this._v("逻辑内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("只读和禁用")]),t("div",{staticClass:"u-example"},[t("u-tabs",{attrs:{readonly:""}},[t("u-tab",{attrs:{title:"模板"}},[this._v("模板内容")]),t("u-tab",{attrs:{title:"样式"}},[this._v("样式内容")]),t("u-tab",{attrs:{title:"逻辑"}},[this._v("逻辑内容")])],1),t("u-tabs",{attrs:{disabled:""}},[t("u-tab",{attrs:{title:"模板"}},[this._v("模板内容")]),t("u-tab",{attrs:{title:"样式"}},[this._v("样式内容")]),t("u-tab",{attrs:{title:"逻辑"}},[this._v("逻辑内容")])],1),t("u-tabs",[t("u-tab",{attrs:{title:"模板"}},[this._v("模板内容")]),t("u-tab",{attrs:{title:"样式",disabled:""}},[this._v("样式内容")]),t("u-tab",{attrs:{title:"逻辑"}},[this._v("逻辑内容")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"模板"')]),this._v(">")]),this._v("模板内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"样式"')]),this._v(">")]),this._v("样式内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"逻辑"')]),this._v(">")]),this._v("逻辑内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"模板"')]),this._v(">")]),this._v("模板内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"样式"')]),this._v(">")]),this._v("样式内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"逻辑"')]),this._v(">")]),this._v("逻辑内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"模板"')]),this._v(">")]),this._v("模板内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"样式"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),this._v("样式内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"逻辑"')]),this._v(">")]),this._v("逻辑内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("隐藏部分项")]),t("div",{staticClass:"u-example"},[t("u-tabs",{attrs:{value:"2"}},[t("u-tab",{attrs:{title:"模板",value:"0"}},[this._v("模板内容")]),t("u-tab",{attrs:{title:"样式",value:"1",hidden:""}},[this._v("样式内容")]),t("u-tab",{attrs:{title:"逻辑",value:"2"}},[this._v("逻辑内容")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"2"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"模板"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"0"')]),this._v(">")]),this._v("模板内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"样式"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"1"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("hidden")]),this._v(">")]),this._v("样式内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"逻辑"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"2"')]),this._v(">")]),this._v("逻辑内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("可关闭")]),t("div",{staticClass:"u-example"},[t("u-tabs",{attrs:{closable:""}},[t("u-tab",{attrs:{title:"模板"}},[this._v("模板内容")]),t("u-tab",{attrs:{title:"样式"}},[this._v("样式内容")]),t("u-tab",{attrs:{title:"逻辑"}},[this._v("逻辑内容")]),t("u-tab",{attrs:{title:"文档"}},[this._v("文档内容")]),t("u-tab",{attrs:{title:"资源"}},[this._v("资源内容")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("closable")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"模板"')]),this._v(">")]),this._v("模板内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"样式"')]),this._v(">")]),this._v("样式内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"逻辑"')]),this._v(">")]),this._v("逻辑内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"文档"')]),this._v(">")]),this._v("文档内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"资源"')]),this._v(">")]),this._v("资源内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("路由")]),t("div",{staticClass:"u-example"},[t("u-tabs",{attrs:{router:""}},[t("u-tab",{attrs:{title:"Button",to:"u-button"}}),t("u-tab",{attrs:{title:"Checkbox",to:"u-checkbox"}}),t("u-tab",{attrs:{title:"Tabs",to:"u-tabs"}})],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("router")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"Button"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("to")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"u-button"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"Checkbox"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("to")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"u-checkbox"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"Tabs"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("to")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"u-tabs"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("额外的")]),t("div",{staticClass:"u-example"},[t("u-tabs",{attrs:{value:"1"}},[t("u-tab",{attrs:{title:"模板",value:"0"}},[this._v("模板内容")]),t("u-tab",{attrs:{title:"样式",value:"1"}},[this._v("样式内容")]),t("u-tab",{attrs:{title:"逻辑",value:"2"}},[this._v("逻辑内容")]),t("u-checkbox",{attrs:{slot:"extra"},slot:"extra"},[this._v("全选")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"1"')]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"模板"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"0"')]),this._v(">")]),this._v("模板内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"样式"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"1"')]),this._v(">")]),this._v("样式内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"逻辑"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"2"')]),this._v(">")]),this._v("逻辑内容"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tab")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"extra"')]),this._v(">")]),this._v("全选"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-tabs")]),this._v(">")]),this._v("\n")])]),t("h2",[this._v("Tabs API")]),t("h3",[this._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Prop/Attr")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("value.sync, v-model")]),t("td",[this._v("Any")]),t("td"),t("td",[this._v("选中标签页的值")])]),t("tr",[t("td",[this._v("readonly")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否只读")])]),t("tr",[t("td",[this._v("disabled")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否禁用")])]),t("tr",[t("td",[this._v("closable")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否可以关闭")])]),t("tr",[t("td",[this._v("router")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否根据vue-router来控制选择哪个标签页")])]),t("tr",[t("td",[this._v("href")]),t("td",[this._v("String")]),t("td"),t("td",[this._v("链接地址")])]),t("tr",[t("td",[this._v("target")]),t("td",[this._v("String")]),t("td"),t("td",[this._v("打开方式")])]),t("tr",[t("td",[this._v("to")]),t("td",[this._v("String, Location")]),t("td"),t("td",[this._v("需要vue-router，与"),t("code",{pre:!0},[this._v("<router-link>")]),this._v("的"),t("code",{pre:!0},[this._v("to")]),this._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),t("tr",[t("td",[this._v("replace")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("需要vue-router，与"),t("code",{pre:!0},[this._v("<router-link>")]),this._v("的"),t("code",{pre:!0},[this._v("replace")]),this._v("属性相同。如果为"),t("code",{pre:!0},[this._v("true")]),this._v("，当点击时，会调用"),t("code",{pre:!0},[this._v("router.replace()")]),this._v("而不是"),t("code",{pre:!0},[this._v("router.push()")]),this._v("，于是导航后不会留下"),t("code",{pre:!0},[this._v("history")]),this._v("记录。")])]),t("tr",[t("td",[this._v("exact")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("需要vue-router，与"),t("code",{pre:!0},[this._v("<router-link>")]),this._v("的"),t("code",{pre:!0},[this._v("exact")]),this._v("属性相同。是否与路由完全一致时才高亮显示。")])])])]),t("h3",[this._v("Slots")]),t("h4",[this._v("(default)")]),t("p",[this._v("插入"),t("code",{pre:!0},[this._v("<u-tab>")]),this._v("子组件。")]),t("h4",[this._v("extra")]),t("p",[this._v("在标签右侧可以附加组件。")]),t("h3",[this._v("Events")]),t("h4",[this._v("@before-select")]),t("p",[this._v("选择某一页前触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("value")]),t("td",[this._v("Any")]),t("td",[this._v("选中标签页的值")])]),t("tr",[t("td",[this._v("oldValue")]),t("td",[this._v("Any")]),t("td",[this._v("旧的值")])]),t("tr",[t("td",[this._v("itemVM")]),t("td",[this._v("Tab")]),t("td",[this._v("选中标签页实例")])]),t("tr",[t("td",[this._v("$event.preventDefault")]),t("td",[this._v("Function")]),t("td",[this._v("阻止选择流程")])])])]),t("h4",[this._v("@select")]),t("p",[this._v("选择某一页时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("value")]),t("td",[this._v("Any")]),t("td",[this._v("选中标签页的值")])]),t("tr",[t("td",[this._v("oldValue")]),t("td",[this._v("Any")]),t("td",[this._v("旧的值")])]),t("tr",[t("td",[this._v("itemVM")]),t("td",[this._v("Tab")]),t("td",[this._v("选中标签页实例")])])])]),t("h4",[this._v("@before-close")]),t("p",[this._v("关闭某一页前触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("value")]),t("td",[this._v("Any")]),t("td",[this._v("待关闭标签页的值")])]),t("tr",[t("td",[this._v("oldValue")]),t("td",[this._v("Any")]),t("td",[this._v("旧的值")])]),t("tr",[t("td",[this._v("itemVM")]),t("td",[this._v("Tab")]),t("td",[this._v("待关闭的标签页实例")])]),t("tr",[t("td",[this._v("$event.preventDefault")]),t("td",[this._v("Function")]),t("td",[this._v("阻止关闭流程")])])])]),t("h4",[this._v("@close")]),t("p",[this._v("关闭某一页时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("value")]),t("td",[this._v("Any")]),t("td",[this._v("关闭的标签页的值")])]),t("tr",[t("td",[this._v("oldValue")]),t("td",[this._v("Any")]),t("td",[this._v("旧的值")])]),t("tr",[t("td",[this._v("itemVM")]),t("td",[this._v("Tab")]),t("td",[this._v("关闭的标签页实例")])]),t("tr",[t("td",[this._v("$event.preventDefault")]),t("td",[this._v("Function")]),t("td",[this._v("阻止关闭后自动选择页的流程")])])])]),t("h2",[this._v("Tab API")]),t("h3",[this._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Prop/Attr")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("title")]),t("td",[this._v("String")]),t("td"),t("td",[this._v("标签页标题")])]),t("tr",[t("td",[this._v("value")]),t("td",[this._v("Any")]),t("td"),t("td",[this._v("标签页的值")])]),t("tr",[t("td",[this._v("hidden")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否隐藏此标签页")])]),t("tr",[t("td",[this._v("disabled")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否禁用此标签页")])]),t("tr",[t("td",[this._v("to")]),t("td",[this._v("String, Object")]),t("td"),t("td",[this._v("vue-router的目标链接")])]),t("tr",[t("td",[this._v("replace")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("当切换路由时，调用"),t("code",{pre:!0},[this._v("router.replace()")]),this._v("，而不是"),t("code",{pre:!0},[this._v("router.push()")])])]),t("tr",[t("td",[this._v("exact")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否精确匹配")])])])]),t("h3",[this._v("Slots")]),t("h4",[this._v("(default)")]),t("p",[this._v("插入文本或HTML。")]),t("h4",[this._v("title")]),t("p",[this._v("自定义标题文本。")])])},staticRenderFns:[]},i=a(1)(null,h,!1,null,null,null);t.default=i.exports}});