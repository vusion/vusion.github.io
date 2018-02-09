"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?341e673edf48e79c94671a0b6afa2574") format("truetype"),\n\turl("/public/vusion-icon-font.eot?341e673edf48e79c94671a0b6afa2574#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?341e673edf48e79c94671a0b6afa2574") format("woff"),\n\turl("/public/vusion-icon-font.svg?341e673edf48e79c94671a0b6afa2574#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?341e673edf48e79c94671a0b6afa2574") format("truetype"),\n\turl("/public/vusion-icon-font.eot?341e673edf48e79c94671a0b6afa2574#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?341e673edf48e79c94671a0b6afa2574") format("woff"),\n\turl("/public/vusion-icon-font.svg?341e673edf48e79c94671a0b6afa2574#vusion-icon-font") format("svg");\n}'},webpackJsonp([45],{416:function(t,e,i){function s(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function n(t){var e=document.createElement("style"),i=document.getElementsByTagName("head")[0];e.innerHTML=s(t),e.id=o,e.type="text/css",i?i.appendChild(e):window.addEventListener("load",function(){i.appendChild(e)})}var o="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(n(),window.HAS_CREATE_FONT_STYLE=!0)}},446:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("u-article",[e("h1",[this._v("起步")]),e("h2",[this._v("命令行工具（CLI）")]),e("h3",[this._v("1. 创建新项目")]),e("p",[this._v("运行下面的命令来创建一个新的应用：")]),e("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[e("code",{attrs:{"v-pre":""}},[this._v("vusion init app my-app\n")])]),e("p",[this._v("其中"),e("code",{pre:!0},[this._v("app")]),this._v("为项目类型，目前我们想要创建的是一个单页 Web 应用。"),e("code",{pre:!0},[this._v("my-app")]),this._v("为项目的名称，您也可以改成别的名字。")]),e("p",[this._v("如果想创建多页面、多模块、企业级的大型应用，请使用"),e("code",{pre:!0},[this._v("app-pro")]),this._v("类型。")]),e("h3",[this._v("2. 安装依赖包")]),e("p",[this._v("接下来安装项目中需要的依赖包：")]),e("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-built_in"}},[this._v("cd")]),this._v(" my-app\nnpm install\n")])]),e("blockquote",[e("p",[this._v("对于大陆用户，建议将npm的注册表源设置为国内的镜像，可以大幅提升安装速度。")])]),e("h3",[this._v("3. 启动开发服务器")]),e("p",[this._v("启动服务器只需要一句简单的命令。")]),e("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[e("code",{attrs:{"v-pre":""}},[this._v("vusion dev\n")])]),e("p",[e("code",{pre:!0},[this._v("vusion dev")]),this._v("命令会启动开发服务器，自动打开浏览器，利用 Webpack 监听文件的变化，并在修改这些文件时重新构建此应用。")]),e("ul",[e("li",[this._v("可以使用"),e("code",{pre:!0},[this._v("-p")]),this._v("选项指定端口；")]),e("li",[this._v("可以使用"),e("code",{pre:!0},[this._v("--no-open")]),this._v("选项阻止自动打开浏览器。")])]),e("p",[this._v("更多 Vusion CLI 的命令可以查阅 "),e("u-link",{attrs:{href:"/guides/commands"}},[this._v("常见命令")]),this._v(" 或 "),e("u-link",{attrs:{href:"/api/cli"}},[this._v("命令行工具 API")]),this._v("。")],1),e("p",[this._v("如果运行成功，便会在浏览器中打开一个如下的 Hello World 页面：")]),e("h3",[this._v("4. 编辑第一个页面")]),e("p",[this._v("打开"),e("code",{pre:!0},[this._v("src/views/main.vue")]),this._v("文件，在"),e("code",{pre:!0},[this._v("<template>")]),this._v("中将"),e("code",{pre:!0},[this._v("Welcome to Vusion App")]),this._v("改为"),e("code",{pre:!0},[this._v("Welcome to My First Vusion App")]),this._v("。")]),e("p",[this._v("保存之后，浏览器会自动更新。")]),e("p",[this._v("再尝试改改样式，在"),e("code",{pre:!0},[this._v("<style module>")]),this._v("中将"),e("code",{pre:!0},[this._v(".heading")]),this._v("的"),e("code",{pre:!0},[this._v("font-size")]),this._v("改大一些。")]),e("p",[this._v("再打开"),e("code",{pre:!0},[this._v("src/components/base/global.css")]),this._v("文件，换一下"),e("code",{pre:!0},[this._v("$brand-primary")]),this._v("的颜色，比如"),e("code",{pre:!0},[this._v("#1976d2")]),this._v("。")]),e("p",[this._v("保存之后，页面中各种组件的主题色是不是瞬时变了？")]),e("h3",[this._v("下一步")]),e("p",[this._v("看到这么多文件您一定想知道它们是干什么的？下一节会详细介绍 Vusion 项目的"),e("u-link",{attrs:{href:"/guides/structure"}},[this._v("目录结构")]),this._v("。")],1)])},staticRenderFns:[]},n=i(1)(null,s,!1,null,null,null);e.default=n.exports}});