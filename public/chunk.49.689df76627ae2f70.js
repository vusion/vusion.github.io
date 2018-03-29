"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'},webpackJsonp([49],{430:function(t,e,s){var n="ICON-FONT-FILE-STYLE";function a(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function v(t){var e=document.createElement("style"),s=document.getElementsByTagName("head")[0];e.innerHTML=a(t),e.id=n,e.type="text/css",s?s.appendChild(e):window.addEventListener("load",function(){s.appendChild(e)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(v(),window.HAS_CREATE_FONT_STYLE=!0)}},475:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("u-article",[s("h1",[t._v("组件设计风格")]),s("h2",[t._v("命名")]),s("h4",[t._v("组件命名")]),s("table",[s("thead",[s("tr",[s("th",[t._v("组件名和类名")]),s("th",[t._v("实例名")]),s("th",[t._v("标签名")]),s("th",[t._v("文件名")])])]),s("tbody",[s("tr",[s("td",[t._v("大驼峰")]),s("td",[t._v("小驼峰")]),s("td",[t._v("连字符")]),s("td",[t._v("与标签名一致")])]),s("tr",[s("td",[t._v("Select")]),s("td",[t._v("selectVM")]),s("td",[s("code",{pre:!0},[t._v("<u-select>")])]),s("td",[t._v("u-select.vue")])]),s("tr",[s("td",[t._v("CascadeSelect")]),s("td",[t._v("cascadeSelectVM")]),s("td",[s("code",{pre:!0},[t._v("<u-cascade-select>")])]),s("td",[t._v("u-cascade-select.vue")])]),s("tr",[s("td",[t._v("Steps")]),s("td",[t._v("stepsVM")]),s("td",[s("code",{pre:!0},[t._v("<u-steps>")])]),s("td",[t._v("u-steps.vue")])]),s("tr",[s("td",[t._v("Step")]),s("td",[t._v("stepVM")]),s("td",[s("code",{pre:!0},[t._v("<u-step>")])]),s("td",[t._v("u-step.vue")])]),s("tr",[s("td",[t._v("TreeView")]),s("td",[t._v("treeViewVM")]),s("td",[s("code",{pre:!0},[t._v("<u-tree-view>")])]),s("td",[t._v("u-tree-view.vue")])]),s("tr",[s("td",[t._v("TreeViewNode")]),s("td",[t._v("treeViewNodeVM")]),s("td",[s("code",{pre:!0},[t._v("<u-tree-view-node>")])]),s("td",[t._v("u-tree-view-node.vue")])]),s("tr",[s("td",[t._v("Calendar")]),s("td",[t._v("calendarVM")]),s("td",[s("code",{pre:!0},[t._v("<u-calendar>")])]),s("td",[t._v("u-calendar.vue")])]),s("tr",[s("td",[t._v("DatePicker")]),s("td",[t._v("datePickerVM")]),s("td",[s("code",{pre:!0},[t._v("<u-date-picker>")])]),s("td",[t._v("u-date-picker.vue")])]),s("tr",[s("td",[t._v("DateTimePicker")]),s("td",[t._v("dateTimePickerVM")]),s("td",[s("code",{pre:!0},[t._v("<u-date-time-picker>")])]),s("td",[t._v("u-date-time-picker.vue")])])])]),s("h4",[t._v("要求 Element 元素统一使用"),s("code",{pre:!0},[t._v("El")]),t._v("后缀")]),s("pre",{pre:!0,attrs:{class:"hljs lang-js"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-comment"}},[t._v("// ✗ bad")]),t._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" elem = "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$el;\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" element = e.target;\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" input = "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.input\n\n"),s("span",{attrs:{class:"hljs-comment"}},[t._v("// ✓ good")]),t._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" el = "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$el;\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" el = e.target;\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" inputEl = "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.input;\n")])]),s("h4",[t._v("要求 Vue 实例统一使用"),s("code",{pre:!0},[t._v("VM")]),t._v("后缀")]),s("pre",{pre:!0,attrs:{class:"hljs lang-js"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-comment"}},[t._v("// ✗ bad")]),t._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" instance = "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(";\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" form = "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.form;\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$emit("),s("span",{attrs:{class:"hljs-string"}},[t._v("'select'")]),t._v(", {\n    item,\n});\n\n"),s("span",{attrs:{class:"hljs-comment"}},[t._v("// ✓ good")]),t._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" vm = "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(";\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" formVM = "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.form;\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$emit("),s("span",{attrs:{class:"hljs-string"}},[t._v("'select'")]),t._v(", {\n    item,\n    "),s("span",{attrs:{class:"hljs-attr"}},[t._v("itemVM")]),t._v(": selectedVM,\n});\n")])]),s("h2",[t._v("事件")]),s("h4",[t._v("input 事件只抛出改变的值")]),s("p",[t._v("为了适应"),s("code",{pre:!0},[t._v("v-model")]),t._v("。")]),s("pre",{pre:!0,attrs:{class:"hljs lang-js"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-comment"}},[t._v("// ✓ good")]),t._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$emit("),s("span",{attrs:{class:"hljs-string"}},[t._v("'input'")]),t._v(", value);\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$emit("),s("span",{attrs:{class:"hljs-string"}},[t._v("'update:value'")]),t._v(", value);\n")])]),s("h4",[t._v("其它事件统一抛出一个对象")]),s("pre",{pre:!0,attrs:{class:"hljs lang-js"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-comment"}},[t._v("// ✓ good")]),t._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$emit("),s("span",{attrs:{class:"hljs-string"}},[t._v("'select'")]),t._v(", {\n    value,\n    item,\n    "),s("span",{attrs:{class:"hljs-attr"}},[t._v("itemVM")]),t._v(": selectedVM,\n});\n\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$emit("),s("span",{attrs:{class:"hljs-string"}},[t._v("'change'")]),t._v(", {\n    value,\n    oldValue,\n});\n")])]),s("h4",[t._v("被动接收事件方法使用"),s("code",{pre:!0},[t._v("on")]),t._v("前缀")]),s("pre",{pre:!0,attrs:{class:"hljs lang-js"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-comment"}},[t._v("// ✗ bad")]),t._v("\n{\n    "),s("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        input() {\n            "),s("span",{attrs:{class:"hljs-comment"}},[t._v("// ...")]),t._v("\n        },\n        handleValidate() {\n            "),s("span",{attrs:{class:"hljs-comment"}},[t._v("// ...")]),t._v("\n        },\n    },\n}\n\n"),s("span",{attrs:{class:"hljs-comment"}},[t._v("// ✓ good")]),t._v("\n{\n    "),s("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        onInput() {\n            "),s("span",{attrs:{class:"hljs-comment"}},[t._v("// ...")]),t._v("\n        },\n        onValidate() {\n            "),s("span",{attrs:{class:"hljs-comment"}},[t._v("// ...")]),t._v("\n        },\n    },\n}\n")])]),s("h2",[t._v("Slot")]),s("h4",[t._v("slot 只在对应名称的 class 内设置")]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"lang-htm"}},[t._v('// ✗ bad\n<slot name="head">\n    <div :class="$style.head">\n            <slot name="title">\n                <div :class="$style.title">\n                    {{ title }}\n                </div>\n            </slot>\n            <div :class="$style.close"></div>\n    </div>\n</slot>\n\n// ✓ good\n<div :class="$style.head">\n    <slot name="head">\n        <div :class="$style.title">\n            <slot name="title">{{ title }}</slot>\n        </div>\n        <div :class="$style.close"></div>\n    </slot>\n</div>\n')])]),s("h2",[t._v("样式")]),s("p",[s("code",{pre:!0},[t._v(".root")]),t._v("不一定是模板的根节点，一定是组件中角色的根节点，最好的可以透传样式或属性的节点。")]),s("h4",[t._v("变量命名")]),s("ul",[s("li",[t._v("常见状态："),s("code",{pre:!0},[t._v("default")]),t._v(", "),s("code",{pre:!0},[t._v("primary")]),t._v(", "),s("code",{pre:!0},[t._v("info")]),t._v(", "),s("code",{pre:!0},[t._v("success")]),t._v(", "),s("code",{pre:!0},[t._v("warning")]),t._v(", "),s("code",{pre:!0},[t._v("error")]),t._v(", "),s("code",{pre:!0},[t._v("disabled")]),t._v(", "),s("code",{pre:!0},[t._v("muted")]),t._v(", ...")]),s("li",[t._v("大小分级："),s("code",{pre:!0},[t._v("mini")]),t._v(", "),s("code",{pre:!0},[t._v("small")]),t._v(", "),s("code",{pre:!0},[t._v("base")]),t._v(", "),s("code",{pre:!0},[t._v("large")]),t._v(", "),s("code",{pre:!0},[t._v("huge")]),t._v(", ...")]),s("li",[t._v("颜色分级："),s("code",{pre:!0},[t._v("darkest")]),t._v(", "),s("code",{pre:!0},[t._v("darker")]),t._v(", "),s("code",{pre:!0},[t._v("dark")]),t._v(", "),s("code",{pre:!0},[t._v("base")]),t._v(", "),s("code",{pre:!0},[t._v("light")]),t._v(", "),s("code",{pre:!0},[t._v("lighter")]),t._v(", "),s("code",{pre:!0},[t._v("lightest")]),t._v(", ...")])])])},staticRenderFns:[]},a=s(1)(null,n,!1,null,null,null);e.default=a.exports}});