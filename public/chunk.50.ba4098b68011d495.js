"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'},webpackJsonp([50],{430:function(t,e,n){var s="ICON-FONT-FILE-STYLE";function a(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function o(t){var e=document.createElement("style"),n=document.getElementsByTagName("head")[0];e.innerHTML=a(t),e.id=s,e.type="text/css",n?n.appendChild(e):window.addEventListener("load",function(){n.appendChild(e)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(o(),window.HAS_CREATE_FONT_STYLE=!0)}},468:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("u-article",[n("h1",[t._v("测试")]),n("p",[t._v("注意：测试功能需要全局安装"),n("code",{pre:!0},[t._v("mocha")]),t._v("和"),n("code",{pre:!0},[t._v("chai")]),t._v("，否则可能无法运行：")]),n("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[n("code",{attrs:{"v-pre":""}},[t._v("npm install -g mocha chai\n")])]),n("h3",[t._v("单元测试")]),n("p",[t._v("Vusion 中的单元测试可以写在多个地方。")]),n("p",[t._v("单文件 Vue 中，可以直接添加"),n("code",{pre:!0},[t._v("<test>")]),t._v("标签：")]),n("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[n("code",{attrs:{"v-pre":""}},[n("span",{attrs:{class:"hljs-tag"}},[t._v("<"),n("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),n("span",{attrs:{class:"javascript"}},[t._v("\n"),n("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),n("span",{attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),n("span",{attrs:{class:"hljs-string"}},[t._v("'u-select'")]),t._v(",\n};\n")]),n("span",{attrs:{class:"hljs-tag"}},[t._v("</"),n("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"hljs-tag"}},[t._v("<"),n("span",{attrs:{class:"hljs-name"}},[t._v("test")]),t._v(">")]),t._v("\ndescribe('Select', () => {\n    it('should render correctly', () => {\n        expect('foo').to.be.a('string');\n    });\n});\n"),n("span",{attrs:{class:"hljs-tag"}},[t._v("</"),n("span",{attrs:{class:"hljs-name"}},[t._v("test")]),t._v(">")]),t._v("\n")])]),n("p",[t._v("多文件 Vue 中，可以添加一个"),n("code",{pre:!0},[t._v("test.spec.js")]),t._v("文件。")]),n("pre",{pre:!0,attrs:{class:"hljs lang-js"}},[n("code",{attrs:{"v-pre":""}},[t._v("describe("),n("span",{attrs:{class:"hljs-string"}},[t._v("'Select'")]),t._v(", () => {\n    it("),n("span",{attrs:{class:"hljs-string"}},[t._v("'should render correctly'")]),t._v(", () => {\n        expect("),n("span",{attrs:{class:"hljs-string"}},[t._v("'foo'")]),t._v(").to.be.a("),n("span",{attrs:{class:"hljs-string"}},[t._v("'string'")]),t._v(");\n    });\n});\n")])]),n("p",[t._v("可以在"),n("code",{pre:!0},[t._v("test/unit")]),t._v("目录下，添加一个以"),n("code",{pre:!0},[t._v(".spec.js")]),t._v("为后缀的文件。")]),n("h3",[t._v("运行测试")]),n("p",[t._v("运行"),n("code",{pre:!0},[t._v("vusion test")]),t._v("，Karma 会检索上面提到的所有单元测试文件，默认启动 Chrome 浏览器并运行用例。")]),n("ul",[n("li",[t._v("可以使用"),n("code",{pre:!0},[t._v("-p")]),t._v("选项指定端口；")]),n("li",[t._v("可以使用"),n("code",{pre:!0},[t._v("-w, --watch")]),t._v("监听文件变更。")])]),n("h3",[t._v("下一步")]),n("p",[t._v("下一节将会讲如何"),n("u-link",{attrs:{href:"/guides/deployment"}},[t._v("打包和部署")]),t._v("。")],1)])},staticRenderFns:[]},a=n(1)(null,s,!1,null,null,null);e.default=a.exports}});