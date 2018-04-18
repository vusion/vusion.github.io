"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?eeb54b1875cc5843cdbdaeb0aa9be8d0") format("truetype"),\n\turl("/public/vusion-icon-font.eot?eeb54b1875cc5843cdbdaeb0aa9be8d0#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?eeb54b1875cc5843cdbdaeb0aa9be8d0") format("woff"),\n\turl("/public/vusion-icon-font.svg?eeb54b1875cc5843cdbdaeb0aa9be8d0#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?eeb54b1875cc5843cdbdaeb0aa9be8d0") format("truetype"),\n\turl("/public/vusion-icon-font.eot?eeb54b1875cc5843cdbdaeb0aa9be8d0#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?eeb54b1875cc5843cdbdaeb0aa9be8d0") format("woff"),\n\turl("/public/vusion-icon-font.svg?eeb54b1875cc5843cdbdaeb0aa9be8d0#vusion-icon-font") format("svg");\n}'},webpackJsonp([38],{438:function(t,s,a){var e="ICON-FONT-FILE-STYLE";function v(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function r(t){var s=document.createElement("style"),a=document.getElementsByTagName("head")[0];s.innerHTML=v(t),s.id=e,s.type="text/css",a?a.appendChild(s):window.addEventListener("load",function(){a.appendChild(s)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},534:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("拖拽 Draggable")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-draggable",[a("u-block",{attrs:{size:"normal"}},[t._v("拖我")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(">")]),t._v("拖我"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("移动自身")]),a("p",[t._v("如果元素CSS的"),a("code",{pre:!0},[t._v("position")]),t._v("属性为"),a("code",{pre:!0},[t._v("static")]),t._v("，则在拖拽时会自动设置为"),a("code",{pre:!0},[t._v("relative")]),t._v("；"),a("code",{pre:!0},[t._v("position")]),t._v("属性为"),a("code",{pre:!0},[t._v("absolute")]),t._v("，则会直接修改"),a("code",{pre:!0},[t._v("left")]),t._v("和"),a("code",{pre:!0},[t._v("top")]),t._v("数值。")]),a("div",{staticClass:"u-example"},[a("u-draggable",{attrs:{transfer:"self"}},[a("u-block",{attrs:{size:"normal",color:"primary"}},[t._v("static")])],1),a("div",{staticStyle:{width:"200px",height:"200px",border:"1px solid #ccc",position:"relative",overflow:"auto",margin:"10px 0"}},[a("u-draggable",{attrs:{transfer:"self"}},[a("u-block",{staticStyle:{position:"absolute",top:"50px",left:"50px"},attrs:{size:"normal",color:"primary"}},[t._v("absolute")])],1)],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("transfer")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"self"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("static"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"width: 200px; height: 200px; border: 1px solid #ccc; position: relative; overflow: auto; margin: 10px 0;"')]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("transfer")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"self"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"position: absolute; top: 50px; left: 50px;"')]),t._v(">")]),t._v("absolute"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n")])]),a("h3",[t._v("自定义移动元素")]),a("div",{staticClass:"u-example"},[a("u-draggable",[a("u-block",{attrs:{size:"normal",color:"primary"}},[t._v("transfer")]),a("u-block",{attrs:{slot:"transfer",size:"normal",color:"error"},slot:"transfer"},[t._v("transfer")])],1)],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("transfer"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("slot")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"transfer"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"error"')]),t._v(">")]),t._v("transfer"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n")])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("value")]),a("td",[t._v("Any")]),a("td"),a("td",[t._v("需要传递的值")])]),a("tr",[a("td",[t._v("transfer")]),a("td",[t._v("String, Element")]),a("td",[a("code",{pre:!0},[t._v("'clone'")])]),a("td",[t._v("拖拽时的移动元素。可选值："),a("code",{pre:!0},[t._v("'clone'")]),t._v("表示拖拽时拖起自身的一个拷贝，"),a("code",{pre:!0},[t._v("'self'")]),t._v("表示拖拽时拖起自身，也可以直接传入一个元素，或者用slot来设置。")])]),a("tr",[a("td",[t._v("immediate")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否在鼠标按下时立即拖拽。默认为"),a("code",{pre:!0},[t._v("false")]),t._v("，是为了防止鼠标单击等事件频繁触发拖拽操作。")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])]),a("tr",[a("td",[t._v("constraint")]),a("td",[t._v("Function")]),a("td",[a("code",{pre:!0},[t._v("...")])]),a("td",[t._v("拖拽时移动路径的约束函数。需要传入一个对象，至少要包含："),a("code",{pre:!0},[t._v("startLeft")]),t._v("、"),a("code",{pre:!0},[t._v("startTop")]),t._v("、"),a("code",{pre:!0},[t._v("dragX")]),t._v("、"),a("code",{pre:!0},[t._v("dragY")]),t._v("几个字段")])])])]),a("h3",[t._v("Slots")]),a("h4",[t._v("(default)")]),a("p",[t._v("插入需要拖拽的元素，仅一个。")]),a("h4",[t._v("transfer")]),a("p",[t._v("自定义的移动元素。")]),a("h3",[t._v("Events")]),a("h4",[t._v("@dragstart")]),a("p",[t._v("拖拽开始时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.originVM")]),a("td",[t._v("VueComponent")]),a("td",[t._v("拖拽源，为当前的"),a("code",{pre:!0},[t._v("<u-draggable>")])])]),a("tr",[a("td",[t._v("$event.sourceEl")]),a("td",[t._v("Element")]),a("td",[t._v("拖拽起始元素")])]),a("tr",[a("td",[t._v("$event.transferEl")]),a("td",[t._v("Element")]),a("td",[t._v("拖拽移动元素")])]),a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Any")]),a("td",[t._v("需要传递的值")])]),a("tr",[a("td",[t._v("$event.screenX")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),a("tr",[a("td",[t._v("$event.screenY")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),a("tr",[a("td",[t._v("$event.clientX")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),a("tr",[a("td",[t._v("$event.clientY")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),a("tr",[a("td",[t._v("$event.pageX")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于页面的水平坐标")])]),a("tr",[a("td",[t._v("$event.pageY")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),a("tr",[a("td",[t._v("$event.startX")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),a("tr",[a("td",[t._v("$event.startY")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),a("tr",[a("td",[t._v("$event.dragX")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),a("tr",[a("td",[t._v("$event.dragY")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),a("tr",[a("td",[t._v("$event.startLeft")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽开始时代理元素的left值")])]),a("tr",[a("td",[t._v("$event.startTop")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽开始时代理元素的top值")])]),a("tr",[a("td",[t._v("$event.left")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽时代理元素的left值")])]),a("tr",[a("td",[t._v("$event.top")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽时代理元素的top值")])]),a("tr",[a("td",[t._v("$event.preventDefault")]),a("td",[t._v("Function")]),a("td",[t._v("阻止拖拽流程")])])])]),a("h4",[t._v("@drag")]),a("p",[t._v("正在拖拽时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.originVM")]),a("td",[t._v("VueComponent")]),a("td",[t._v("拖拽源，为当前的"),a("code",{pre:!0},[t._v("<u-draggable>")])])]),a("tr",[a("td",[t._v("$event.sourceEl")]),a("td",[t._v("Element")]),a("td",[t._v("拖拽起始元素")])]),a("tr",[a("td",[t._v("$event.transferEl")]),a("td",[t._v("Element")]),a("td",[t._v("拖拽移动元素")])]),a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Any")]),a("td",[t._v("需要传递的值")])]),a("tr",[a("td",[t._v("$event.screenX")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),a("tr",[a("td",[t._v("$event.screenY")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),a("tr",[a("td",[t._v("$event.clientX")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),a("tr",[a("td",[t._v("$event.clientY")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),a("tr",[a("td",[t._v("$event.pageX")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于页面的水平坐标")])]),a("tr",[a("td",[t._v("$event.pageY")]),a("td",[t._v("Number")]),a("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),a("tr",[a("td",[t._v("$event.startX")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),a("tr",[a("td",[t._v("$event.startY")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),a("tr",[a("td",[t._v("$event.dragX")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),a("tr",[a("td",[t._v("$event.dragY")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),a("tr",[a("td",[t._v("$event.startLeft")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽开始时代理元素的left值")])]),a("tr",[a("td",[t._v("$event.startTop")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽开始时代理元素的top值")])]),a("tr",[a("td",[t._v("$event.left")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽时代理元素的left值")])]),a("tr",[a("td",[t._v("$event.top")]),a("td",[t._v("Number")]),a("td",[t._v("拖拽时代理元素的top值")])]),a("tr",[a("td",[t._v("$event.preventDefault")]),a("td",[t._v("Function")]),a("td",[t._v("阻止拖拽流程")])])])]),a("h4",[t._v("@dragend")]),a("p",[t._v("拖拽结束时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("$event.originVM")]),a("td",[t._v("VueComponent")]),a("td",[t._v("拖拽源，为当前的"),a("code",{pre:!0},[t._v("<u-draggable>")])])]),a("tr",[a("td",[t._v("$event.sourceEl")]),a("td",[t._v("Element")]),a("td",[t._v("拖拽起始元素")])]),a("tr",[a("td",[t._v("$event.transferEl")]),a("td",[t._v("Element")]),a("td",[t._v("拖拽移动元素")])]),a("tr",[a("td",[t._v("$event.value")]),a("td",[t._v("Any")]),a("td",[t._v("需要传递的值")])])])]),a("h3",[t._v("Methods")]),a("h4",[t._v("cancel()")]),a("p",[t._v("取消拖拽。")])])},staticRenderFns:[]},v=a(1)(null,e,!1,null,null,null);s.default=v.exports}});