webpackJsonp([18],{488:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("组件")]),t("p",[s._v("我们将用户界面中的每个功能完备的结构单元称为"),t("strong",[s._v("组件")]),s._v("。")]),t("h3",[s._v("组件结构")]),t("p",[s._v("在实际情况中，一个组件往往不仅仅包括模板（HTML）、样式（CSS）和逻辑（JS），还它所依赖的资源、文档、单元测试等。")]),t("p",[s._v("为了更好的管理文件，Vusion 中采取"),t("strong",[s._v("一个组件一个地方")]),s._v("的原则。")]),t("h4",[s._v("单文件组件")]),t("p",[s._v("我们将 Vue 原生的单文件组件做了扩展。比如一个"),t("code",{pre:!0},[s._v("u-select.vue")]),s._v("文件：")]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("               "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 组件模板 --\x3e")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"undefined"}}),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("                   "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 组件逻辑 --\x3e")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(">")]),t("span",{attrs:{class:"undefined"}}),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("              "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 组件样式 --\x3e")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("test")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("test")]),s._v(">")]),s._v("                       "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 单元测试 --\x3e")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("docs")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("docs")]),s._v(">")]),s._v("                       "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 组件文档 --\x3e")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("changelog")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("changelog")]),s._v(">")]),s._v("             "),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 修改日志 --\x3e")]),s._v("\n")])]),t("p",[s._v("除了原来的"),t("code",{pre:!0},[s._v("<template>")]),s._v("、"),t("code",{pre:!0},[s._v("<script>")]),s._v("、"),t("code",{pre:!0},[s._v("<style>")]),s._v("三个标签，我们利用 "),t("u-link",{attrs:{href:"https://github.com/vuejs/vue-loader"}},[s._v("vue-loader")]),s._v(" 的"),t("u-link",{attrs:{href:"https://vue-loader.vuejs.org/zh-cn/configurations/custom-blocks.html"}},[s._v("自定义块")]),s._v("功能增加了"),t("code",{pre:!0},[s._v("<test>")]),s._v("、"),t("code",{pre:!0},[s._v("<docs>")]),s._v("、"),t("code",{pre:!0},[s._v("<changelog>")]),s._v("三个标签。")],1),t("h4",[s._v("多文件组件")]),t("p",[s._v("但有时单文件可以支持的功能还是有些薄弱，比如无法放置资源等其他文件，因此我们创造了 "),t("u-link",{attrs:{href:"https://github.com/vusion/vue-multifile-loader"}},[s._v("vue-multifile-loader")]),s._v("，它与"),t("code",{pre:!0},[s._v("vue-loader")]),s._v("的功能会经常保持同步。")],1),t("p",[s._v("这样，一个 Vue 组件可以采用如下方式书写：")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[s._v("u-select.vue/index.html             # 组件模板\nu-select.vue/index.js               # 组件逻辑\nu-select.vue/module.css             # 组件样式\nu-select.vue/assets/arrow-down.svg  # 相关资源\nu-select.vue/test.spec.js           # 单元测试\nu-select.vue/README.md              # 组件文档\nu-select.vue/CHANGELOG.md           # 修改日志\nu-select.vue/package.json           # npm 包信息\n")])]),t("h4",[s._v("单文件组件 vs 多文件组件")]),t("p",[s._v("为什么要同时支持两种书写方式呢？")]),t("p",[s._v("主要是因为两种书写方式各有特色。单文件组件创建起来比较快捷，也是 Vue 原生的特色，适用于书写页面组件；多文件组件在功能上支持的更多，适用于构造通用组件，方便扩展。")]),t("p",[s._v("Webpack 的模块引入字符串可以将"),t("code",{pre:!0},[s._v("index.js")]),s._v("部分省略，两种书写方式都可以写作"),t("code",{pre:!0},[s._v("import Select from 'u-select.vue'")]),s._v("，所以它们不会对依赖模块有所影响。")]),t("p",[s._v("一般情况下，两种书写方式是"),t("strong",[s._v("等效")]),s._v("的。")]),t("h3",[s._v("组件的扩展与继承")]),t("p",[s._v("组件的灵活扩展是 Vusion 的一大特色。")]),t("p",[s._v("在实际业务中，我们经常会遇到这样的情形：要开发的新的组件与原来的组件相似，但功能或样式又有些差异。如果重写一个的话，成本较高或者以后要维护两份代码，因此对原组件进行扩展是个很好的选择。")]),t("p",[s._v("一方面，扩展可以有不同的程度，比如只扩展样式、只改变图标、扩展样式和逻辑、甚至重写模板；另一方面，由于这些组件大都是在 Vue 中全局注册的，新组件可以与原组件同名，将原组件覆盖掉。为了方便描述，我们把同名的称为"),t("strong",[s._v("扩展")]),s._v("，把异名的称为"),t("strong",[s._v("继承")]),s._v("。")]),t("p",[s._v("下面看一些例子，大家可以在刚创建的 Vusion 项目中试试：")]),t("h4",[s._v("仅扩展样式")]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Select "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'proto-ui.vusion/src/u-select.vue'")]),s._v(";\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" Select;\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(">")]),t("span",{attrs:{class:"undefined"}},[s._v("\n@import 'proto-ui.vusion/src/u-select.vue';\n\n.root {\n    height: 36px;\n    border-color: #ccc;\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),t("p",[s._v("组件的依赖关系仅由 JS 决定，因此"),t("code",{pre:!0},[s._v("<script>")]),s._v("标签里的内容是必要的。")]),t("h4",[s._v("在样式中修改图标")]),t("p",[s._v("在 Vusion 中资源问题都是样式问题。")]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Select "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'proto-ui.vusion/src/u-select.vue'")]),s._v(";\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" Select;\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(">")]),t("span",{attrs:{class:"undefined"}},[s._v("\n@import 'proto-ui.vusion/src/u-select.vue';\n\n.root:before {\n    icon-font: url('../assets/my-arrow-down.svg');\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),t("h4",[s._v("继承并添加样式")]),t("p",[s._v("比如现在要创建一个新组件"),t("code",{pre:!0},[s._v("<u-custom-select>")]),s._v("与"),t("code",{pre:!0},[s._v("<u-select>")]),s._v("很相似。")]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Select "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'proto-ui.vusion/src/u-select.vue'")]),s._v(";\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'u-custom-select'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mixins")]),s._v(": [Select],\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(">")]),t("span",{attrs:{class:"undefined"}},[s._v("\n@import 'proto-ui.vusion/src/u-select.vue';\n\n.root {\n    height: 36px;\n    border-color: #ccc;\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),t("h4",[s._v("继承并重写样式")]),t("p",[s._v("不用在"),t("code",{pre:!0},[s._v("<style>")]),s._v("标签中"),t("code",{pre:!0},[s._v("@import")]),s._v("原组件的样式，便可以重写组件样式，并仍然使用原组件的模板和逻辑。")]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Select "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'proto-ui.vusion/src/u-select.vue'")]),s._v(";\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'u-custom-select'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mixins")]),s._v(": [Select],\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".root")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("36px")]),s._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border-color")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("#ccc")]),s._v(";\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".root")]),t("span",{attrs:{class:"hljs-selector-attr"}},[s._v("[disabled]")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": red;\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),t("h4",[s._v("扩展逻辑")]),t("p",[s._v("这里使用的是 Vue 组件的"),t("code",{pre:!0},[s._v("extends")]),s._v("或"),t("code",{pre:!0},[s._v("mixins")]),s._v("扩展策略。")]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Select "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'proto-ui.vusion/src/u-select.vue'")]),s._v(";\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'u-select'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mixins")]),s._v(": [Select],\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        select() {\n            "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// override")]),s._v("\n        },\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h4",[s._v("继承并添加逻辑")]),t("p",[s._v("与同名的同理，只需变更"),t("code",{pre:!0},[s._v("name")]),s._v("字段即可。")]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Select "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'proto-ui.vusion/src/u-select.vue'")]),s._v(";\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'u-custom-select'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mixins")]),s._v(": [Select],\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        select() {\n            "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// override")]),s._v("\n        },\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h4",[s._v("重写模板")]),t("p",[s._v("模板没有扩展的特性，只能重写。因此设计组件时，最好能够利用好"),t("code",{pre:!0},[s._v("<slot>")]),s._v("的特性，减少模板的重写。")]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"$style.root"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("slot")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("slot")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Select "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'proto-ui.vusion/src/u-select.vue'")]),s._v(";\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'u-select'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mixins")]),s._v(": [Select],\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),t("h4",[s._v("均有不同程度的扩展")]),t("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"$style.root"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("slot")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("slot")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("li")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'u-custom-select'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("mixins")]),s._v(": [Select],\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        select() {\n            "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// override")]),s._v("\n        },\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(">")]),t("span",{attrs:{class:"undefined"}},[s._v("\n@import 'proto-ui.vusion/src/u-select.vue';\n\n.root:before {\n    height: 36px;\n    border-color: #ccc;\n    icon-font: url('../assets/my-arrow-down.svg');\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),t("p",[s._v("当然这种情况比较少见，偶尔为了应对 bug 等问题。如果差异较大，可以重写一个组件。")]),t("h3",[s._v("下一步")]),t("p",[s._v("接下来会讲组件中的"),t("u-link",{attrs:{href:"/guides/css-modules"}},[s._v("CSS")]),s._v("如何书写。")],1)])},staticRenderFns:[]},v=t(5)(null,l,!1,null,null,null);a.default=v.exports}});