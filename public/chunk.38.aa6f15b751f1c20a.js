"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'},webpackJsonp([38],{430:function(t,s,a){var e="ICON-FONT-FILE-STYLE";function l(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function n(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=l(t),s.id=e,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(n(),window.HAS_CREATE_FONT_STYLE=!0)}},500:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("折叠面板 Collapse")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-collapse",[a("u-collapse-item",{attrs:{title:"面板1"}},[t._v("Content1")]),a("u-collapse-item",{attrs:{title:"面板2",expanded:""}},[t._v("Content2")]),a("u-collapse-item",{attrs:{title:"面板3",disabled:""}},[t._v("Content3")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"面板1"')]),t._v(">")]),t._v("Content1"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"面板2"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("expanded")]),t._v(">")]),t._v("Content2"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"面板3"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("Content3"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("手风琴模式")]),a("div",{staticClass:"u-example"},[a("u-collapse",{attrs:{accordion:""}},[a("u-collapse-item",{attrs:{title:"面板1"}},[t._v("Content1")]),a("u-collapse-item",{attrs:{title:"面板2",expanded:""}},[t._v("Content2")]),a("u-collapse-item",{attrs:{title:"面板3"}},[t._v("Content3")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("accordion")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"面板1"')]),t._v(">")]),t._v("Content1"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"面板2"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("expanded")]),t._v(">")]),t._v("Content2"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"面板3"')]),t._v(">")]),t._v("Content3"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse-item")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-collapse")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("触发方式")]),a("h4",[t._v("整行点击均可触发（默认）")]),a("u-collapse",{attrs:{"expand-trigger":"click"}},[a("u-collapse-item",{attrs:{title:"面板1"}},[t._v("Content1")]),a("u-collapse-item",{attrs:{title:"面板2"}},[t._v("Content2")]),a("u-collapse-item",{attrs:{title:"面板3"}},[t._v("Content3")])],1),a("h4",[t._v("仅点击小箭头时触发")]),a("u-collapse",{attrs:{"expand-trigger":"click-expander"}},[a("u-collapse-item",{attrs:{title:"面板1"}},[t._v("Content1")]),a("u-collapse-item",{attrs:{title:"面板2"}},[t._v("Content2")]),a("u-collapse-item",{attrs:{title:"面板3"}},[t._v("Content3")])],1),a("h2",[t._v("Collapse API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("accordion")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否每次只会展开一个面板")])]),a("tr",[a("td",[t._v("expand-trigger")]),a("td",[t._v("String")]),a("td",[a("code",{pre:!0},[t._v("'click'")])]),a("td",[t._v("展开/折叠的触发方式。可选值："),a("code",{pre:!0},[t._v("'click'")]),t._v("表示整行点击均可触发、"),a("code",{pre:!0},[t._v("'click-expander'")]),t._v("表示仅点击小箭头时触发")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])])])]),a("h3",[t._v("Slots")]),a("h4",[t._v("(default)")]),a("p",[t._v("插入"),a("code",{pre:!0},[t._v("<u-collapse-item>")]),t._v("子组件。")]),a("h3",[t._v("Events")]),a("h4",[t._v("@toggle")]),a("p",[t._v("展开/折叠某面板时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.expanded")]),a("td",[t._v("Boolean")]),a("td",[t._v("展开/折叠状态")])]),a("tr",[a("td",[t._v("$event.itemVM")]),a("td",[t._v("CollapseItem")]),a("td",[t._v("面板组件")])])])]),a("h3",[t._v("Methods")]),a("h4",[t._v("toggleAll(expanded)")]),a("p",[t._v("展开/折叠所有面板")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("expanded")]),a("td",[t._v("Boolean")]),a("td",[t._v("展开/折叠")])])])]),a("h2",[t._v("CollapseItem API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("title")]),a("td",[t._v("String")]),a("td"),a("td",[t._v("显示的标题")])]),a("tr",[a("td",[t._v("expanded.sync")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("展开/折叠状态")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用。禁用时无法展开/折叠")])])])]),a("h3",[t._v("Slots")]),a("h4",[t._v("(default)")]),a("p",[t._v("插入文本或HTML。")]),a("h4",[t._v("title")]),a("p",[t._v("自定义标题文本。")]),a("h4",[t._v("extra")]),a("p",[t._v("在右侧可以附加内容。")]),a("h3",[t._v("Events")]),a("h4",[t._v("@before-toggle")]),a("p",[t._v("展开/折叠此面板前触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.expanded")]),a("td",[t._v("Boolean")]),a("td",[t._v("展开/折叠状态")])]),a("tr",[a("td",[t._v("$event.itemVM")]),a("td",[t._v("CollapseItem")]),a("td",[t._v("面板组件")])]),a("tr",[a("td",[t._v("$event.preventDefault")]),a("td",[t._v("Function")]),a("td",[t._v("阻止展开/折叠流程")])])])]),a("h4",[t._v("@toggle")]),a("p",[t._v("展开/折叠某面板时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.expanded")]),a("td",[t._v("Boolean")]),a("td",[t._v("展开/折叠状态")])]),a("tr",[a("td",[t._v("$event.itemVM")]),a("td",[t._v("CollapseItem")]),a("td",[t._v("面板组件")])])])])],1)},staticRenderFns:[]},l=a(1)(null,e,!1,null,null,null);s.default=l.exports}});