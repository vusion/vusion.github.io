"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?5e2e5e47d17b96ec50fce0e302511eb4") format("truetype"),\n\turl("/public/vusion-icon-font.eot?5e2e5e47d17b96ec50fce0e302511eb4#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?5e2e5e47d17b96ec50fce0e302511eb4") format("woff"),\n\turl("/public/vusion-icon-font.svg?5e2e5e47d17b96ec50fce0e302511eb4#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?5e2e5e47d17b96ec50fce0e302511eb4") format("truetype"),\n\turl("/public/vusion-icon-font.eot?5e2e5e47d17b96ec50fce0e302511eb4#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?5e2e5e47d17b96ec50fce0e302511eb4") format("woff"),\n\turl("/public/vusion-icon-font.svg?5e2e5e47d17b96ec50fce0e302511eb4#vusion-icon-font") format("svg");\n}'},webpackJsonp([49],{415:function(t,e,s){function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function i(t){var e=document.createElement("style"),s=document.getElementsByTagName("head")[0];e.innerHTML=n(t),e.id=a,e.type="text/css",s?s.appendChild(e):window.addEventListener("load",function(){s.appendChild(e)})}var a="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},456:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("u-article",[e("h1",[this._v("编辑器配置")]),e("h2",[this._v("基本规则")]),e("ul",[e("li",[this._v("使用utf-8编码")]),e("li",[this._v("使用unix换行符")]),e("li",[this._v("使用space缩进")]),e("li",[this._v("缩进空格长度为4")]),e("li",[this._v("避免行尾有空格")]),e("li",[this._v("文件结束必须有空行")])]),e("h2",[this._v("Windows的Git配置！")]),e("p",[this._v("检出时最好不要转换回车换行：")]),e("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[e("code",{attrs:{"v-pre":""}},[this._v("git config --global core.autocrlf input\n")])]),e("h2",[this._v("各编辑器配置")]),e("h3",[this._v("VSCode")]),e("pre",{pre:!0,attrs:{class:"hljs lang-json"}},[e("code",{attrs:{"v-pre":""}},[this._v("{\n    "),e("span",{attrs:{class:"hljs-attr"}},[this._v('"files.trimTrailingWhitespace"')]),this._v(": "),e("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n    "),e("span",{attrs:{class:"hljs-attr"}},[this._v('"files.insertFinalNewline"')]),this._v(": "),e("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n}\n")])]),e("p",[this._v("其他属性已默认配好。")]),e("h3",[this._v("Atom")]),e("p",[this._v("在Preferences中设置"),e("code",{pre:!0},[this._v("Tab Length")]),this._v("为4，其他设置在Whitespace包中已默认配好。")]),e("h3",[this._v("Sublime")]),e("pre",{pre:!0,attrs:{class:"hljs lang-json"}},[e("code",{attrs:{"v-pre":""}},[this._v("{\n    "),e("span",{attrs:{class:"hljs-attr"}},[this._v('"tab_size"')]),this._v(": "),e("span",{attrs:{class:"hljs-number"}},[this._v("4")]),this._v(",\n    "),e("span",{attrs:{class:"hljs-attr"}},[this._v('"translate_tabs_to_spaces"')]),this._v(": "),e("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n    "),e("span",{attrs:{class:"hljs-attr"}},[this._v('"trim_trailing_white_space_on_save"')]),this._v(": "),e("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n    "),e("span",{attrs:{class:"hljs-attr"}},[this._v('"ensure_newline_at_eof_on_save"')]),this._v(": "),e("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n}\n")])])])},staticRenderFns:[]},i=s(1)(null,n,!1,null,null,null);e.default=i.exports}});