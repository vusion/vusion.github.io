"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'},webpackJsonp([33],{416:function(t,s,i){function e(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function a(t){var s=document.createElement("style"),i=document.getElementsByTagName("head")[0];s.innerHTML=e(t),s.id=h,s.type="text/css",i?i.appendChild(s):window.addEventListener("load",function(){i.appendChild(s)})}var h="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(a(),window.HAS_CREATE_FONT_STYLE=!0)}},482:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("折叠面板 Collapse")]),s("h2",[this._v("示例")]),s("h3",[this._v("基本形式")]),s("div",{staticClass:"u-example"},[s("u-collapse",[s("u-collapse-item",{attrs:{title:"面板1"}},[this._v("Content1")]),s("u-collapse-item",{attrs:{title:"面板2",expanded:""}},[this._v("Content2")]),s("u-collapse-item",{attrs:{title:"面板3",disabled:""}},[this._v("Content3")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"面板1"')]),this._v(">")]),this._v("Content1"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"面板2"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("expanded")]),this._v(">")]),this._v("Content2"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"面板3"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),this._v("Content3"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("手风琴模式")]),s("div",{staticClass:"u-example"},[s("u-collapse",{attrs:{accordion:""}},[s("u-collapse-item",{attrs:{title:"面板1"}},[this._v("Content1")]),s("u-collapse-item",{attrs:{title:"面板2",expanded:""}},[this._v("Content2")]),s("u-collapse-item",{attrs:{title:"面板3"}},[this._v("Content3")])],1)],1),s("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("accordion")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"面板1"')]),this._v(">")]),this._v("Content1"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"面板2"')]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("expanded")]),this._v(">")]),this._v("Content2"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(">")]),this._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(" "),s("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),s("span",{attrs:{class:"hljs-string"}},[this._v('"面板3"')]),this._v(">")]),this._v("Content3"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse-item")]),this._v(">")]),this._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("u-collapse")]),this._v(">")]),this._v("\n")])]),s("h3",[this._v("触发方式")]),s("h4",[this._v("整行点击均可触发（默认）")]),s("u-collapse",{attrs:{"expand-trigger":"click"}},[s("u-collapse-item",{attrs:{title:"面板1"}},[this._v("Content1")]),s("u-collapse-item",{attrs:{title:"面板2"}},[this._v("Content2")]),s("u-collapse-item",{attrs:{title:"面板3"}},[this._v("Content3")])],1),s("h4",[this._v("仅点击小箭头时触发")]),s("u-collapse",{attrs:{"expand-trigger":"click-expander"}},[s("u-collapse-item",{attrs:{title:"面板1"}},[this._v("Content1")]),s("u-collapse-item",{attrs:{title:"面板2"}},[this._v("Content2")]),s("u-collapse-item",{attrs:{title:"面板3"}},[this._v("Content3")])],1),s("h2",[this._v("Collapse API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("accordion")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否每次只会展开一个面板")])]),s("tr",[s("td",[this._v("expand-trigger")]),s("td",[this._v("String")]),s("td",[s("code",{pre:!0},[this._v("'click'")])]),s("td",[this._v("展开/折叠的触发方式。可选值："),s("code",{pre:!0},[this._v("'click'")]),this._v("表示整行点击均可触发、"),s("code",{pre:!0},[this._v("'click-expander'")]),this._v("表示仅点击小箭头时触发")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用")])])])]),s("h3",[this._v("Slots")]),s("h4",[this._v("(default)")]),s("p",[this._v("插入"),s("code",{pre:!0},[this._v("<u-collapse-item>")]),this._v("子组件。")]),s("h3",[this._v("Events")]),s("h4",[this._v("@toggle")]),s("p",[this._v("展开/折叠某面板时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.expanded")]),s("td",[this._v("Boolean")]),s("td",[this._v("展开/折叠状态")])]),s("tr",[s("td",[this._v("$event.itemVM")]),s("td",[this._v("CollapseItem")]),s("td",[this._v("面板组件")])])])]),s("h3",[this._v("Methods")]),s("h4",[this._v("toggleAll(expanded)")]),s("p",[this._v("展开/折叠所有面板")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("expanded")]),s("td",[this._v("Boolean")]),s("td",[this._v("展开/折叠")])])])]),s("h2",[this._v("CollapseItem API")]),s("h3",[this._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Prop/Attr")]),s("th",[this._v("Type")]),s("th",[this._v("Default")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("title")]),s("td",[this._v("String")]),s("td"),s("td",[this._v("显示的标题")])]),s("tr",[s("td",[this._v("expanded.sync")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("展开/折叠状态")])]),s("tr",[s("td",[this._v("disabled")]),s("td",[this._v("Boolean")]),s("td",[s("code",{pre:!0},[this._v("false")])]),s("td",[this._v("是否禁用。禁用时无法展开/折叠")])])])]),s("h3",[this._v("Slots")]),s("h4",[this._v("(default)")]),s("p",[this._v("插入文本或HTML。")]),s("h4",[this._v("title")]),s("p",[this._v("自定义标题文本。")]),s("h4",[this._v("extra")]),s("p",[this._v("在右侧可以附加内容。")]),s("h3",[this._v("Events")]),s("h4",[this._v("@before-toggle")]),s("p",[this._v("展开/折叠此面板前触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.expanded")]),s("td",[this._v("Boolean")]),s("td",[this._v("展开/折叠状态")])]),s("tr",[s("td",[this._v("$event.itemVM")]),s("td",[this._v("CollapseItem")]),s("td",[this._v("面板组件")])]),s("tr",[s("td",[this._v("$event.preventDefault")]),s("td",[this._v("Function")]),s("td",[this._v("阻止展开/折叠流程")])])])]),s("h4",[this._v("@toggle")]),s("p",[this._v("展开/折叠某面板时触发")]),s("table",[s("thead",[s("tr",[s("th",[this._v("Param")]),s("th",[this._v("Type")]),s("th",[this._v("Description")])])]),s("tbody",[s("tr",[s("td",[this._v("$event.expanded")]),s("td",[this._v("Boolean")]),s("td",[this._v("展开/折叠状态")])]),s("tr",[s("td",[this._v("$event.itemVM")]),s("td",[this._v("CollapseItem")]),s("td",[this._v("面板组件")])])])])],1)},staticRenderFns:[]},a=i(1)(null,e,!1,null,null,null);s.default=a.exports}});