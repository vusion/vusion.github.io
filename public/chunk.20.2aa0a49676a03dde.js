"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd") format("truetype"),\n\turl("/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd") format("woff"),\n\turl("/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd") format("truetype"),\n\turl("/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd") format("woff"),\n\turl("/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font") format("svg");\n}'},webpackJsonp([20],{464:function(s,t,a){function h(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function i(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=h(s),t.id=n,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var n="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},525:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("弹出层 Popper")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("p",[this._v("一般情况下，需要用一个popper slot来设置弹出元素，并且要用default slot来设置触发元素，这个触发元素通常也作为参照元素。由于Vue的限制，每个slot中只能有一个根节点。")]),t("div",{staticClass:"u-example"},[t("u-popper",[t("u-button",[this._v("click")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-button",[this._v("popper")])],1)],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("click"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"popper"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("触发事件")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",[t("u-popper",{attrs:{trigger:"click"}},[t("u-button",[this._v("click（默认）")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-button",[this._v("popper")])],1)],1),t("u-popper",{attrs:{trigger:"hover"}},[t("u-button",[this._v("hover")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-button",[this._v("popper")])],1)],1),t("u-popper",{attrs:{trigger:"right-click"}},[t("u-button",[this._v("right-click")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-button",[this._v("popper")])],1)],1),t("u-popper",{attrs:{trigger:"double-click"}},[t("u-button",[this._v("double-click")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-button",[this._v("popper")])],1)],1)],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("trigger")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"click"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("click（默认）"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"popper"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("trigger")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"hover"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("hover"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"popper"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("trigger")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"right-click"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("right-click"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"popper"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("trigger")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"double-click"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("double-click"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"popper"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("弹出位置")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",[t("u-popper",{attrs:{placement:"bottom-start"}},[t("u-button",[this._v("bottom-start（默认）")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-button",[this._v("popper")])],1)],1),t("u-popper",{attrs:{placement:"bottom"}},[t("u-button",[this._v("bottom")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-button",[this._v("popper")])],1)],1),t("u-popper",{attrs:{placement:"right-start"}},[t("u-button",[this._v("right-start")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-button",[this._v("popper")])],1)],1),t("u-popper",{attrs:{placement:"left"}},[t("u-button",[this._v("left")]),t("div",{attrs:{slot:"popper"},slot:"popper"},[t("u-button",[this._v("popper")])],1)],1)],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("placement")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"bottom-start"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("bottom-start（默认）"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"popper"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("placement")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"bottom"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("bottom"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"popper"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("placement")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"right-start"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("right-start"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"popper"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("placement")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"left"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("left"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("slot")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"popper"')]),this._v(">")]),this._v("\n            "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("popper"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("禁用")]),t("div",{staticClass:"u-example"},[t("u-popper",{attrs:{disabled:""}},[t("u-button",{attrs:{disabled:""}},[this._v("disabled")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),this._v("disabled"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-popper")]),this._v(">")]),this._v("\n")])]),t("h2",[this._v("Popper API")]),t("h3",[this._v("Attrs/Props")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Attr/Prop")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("trigger")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'click'")])]),t("td",[this._v("弹出层的触发方式，可选click,hover,manual")])]),t("tr",[t("td",[this._v("placement")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'bottom'")])]),t("td",[this._v("弹出层的弹出方向：top,bottom,left,right,top-start,top-end...")])]),t("tr",[t("td",[this._v("offset")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("undefined")])]),t("td",[this._v('弹出层偏移，"10px 10px","10% 10%"')])]),t("tr",[t("td",[this._v("escape-with-reference")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("true")])]),t("td",[this._v("当触发元素离开边际时，弹出层是否跟随离开或保留在边际元素内")])]),t("tr",[t("td",[this._v("hover-delay")]),t("td",[this._v("Number")]),t("td",[t("code",{pre:!0},[this._v("0")])]),t("td",[this._v("trigger为hover时的延迟时间")])]),t("tr",[t("td",[this._v("boundaries-element")]),t("td",[this._v("Element | String")]),t("td",[t("code",{pre:!0},[this._v("scrollParent")])]),t("td",[this._v("弹出层所在的边框元素，定义弹出层的边际，默认为第一个滚动的父级元素")])]),t("tr",[t("td",[this._v("arrow-element")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("'[u-arrow]'")])]),t("td",[this._v("箭头元素的query值，默认为u-arrow属性，定义该属性则组件会控制箭头元素的偏移量")])]),t("tr",[t("td",[this._v("append-to")]),t("td",[this._v("String")]),t("td",[t("code",{pre:!0},[this._v("body")])]),t("td",[this._v("指示添加到哪个元素")])]),t("tr",[t("td",[this._v("options")]),t("td",[this._v("Object")]),t("td",[t("code",{pre:!0},[this._v("{ modifiers: {} }")])]),t("td",[this._v("补充popper.js的选项")])]),t("tr",[t("td",[this._v("disabled")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否禁用")])])])])])},staticRenderFns:[]},i=a(1)(null,h,!1,null,null,null);t.default=i.exports}});