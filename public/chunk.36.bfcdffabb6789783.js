"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?c6e4ff088ee6c0a07f348d6a7575883f") format("truetype"),\n\turl("/public/vusion-icon-font.eot?c6e4ff088ee6c0a07f348d6a7575883f#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?c6e4ff088ee6c0a07f348d6a7575883f") format("woff"),\n\turl("/public/vusion-icon-font.svg?c6e4ff088ee6c0a07f348d6a7575883f#vusion-icon-font") format("svg");\n}'},webpackJsonp([36],{430:function(t,v,e){var s="ICON-FONT-FILE-STYLE";function a(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function _(t){var v=document.createElement("style"),e=document.getElementsByTagName("head")[0];v.innerHTML=a(t),v.id=s,v.type="text/css",e?e.appendChild(v):window.addEventListener("load",function(){e.appendChild(v)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(_(),window.HAS_CREATE_FONT_STYLE=!0)}},525:function(t,v,e){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var s={render:function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("div",[e("u-draggable",{attrs:{value:"primary"}},[e("u-block",{attrs:{size:"normal",color:"primary",inline:""}},[t._v("拖我")])],1),e("u-draggable",{attrs:{value:"success"}},[e("u-block",{attrs:{size:"normal",color:"success",inline:""}},[t._v("拖我")])],1),e("u-draggable",{attrs:{value:"error"}},[e("u-block",{attrs:{size:"normal",color:"error",inline:""}},[t._v("拖我")])],1),e("p"),e("u-droppable",{on:{drop:function(v){t.color=v.value}}},[e("u-block",{attrs:{size:"normal",color:t.color}},[t._v("放到这里")])],1)],1)},staticRenderFns:[]},a={components:{C170877:e(1)({data:function(){return{color:""}}},s,!1,null,null,null).exports}},_={render:function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("u-article",[e("h1",[t._v("放置 Draggable")]),e("h2",[t._v("示例")]),e("h3",[t._v("基本形式")]),e("div",{staticClass:"u-example"},[e("C170877")],1),e("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("\n        "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("inline")]),t._v(">")]),t._v("拖我"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"success"')]),t._v(">")]),t._v("\n        "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"success"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("inline")]),t._v(">")]),t._v("拖我"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"error"')]),t._v(">")]),t._v("\n        "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"error"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("inline")]),t._v(">")]),t._v("拖我"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-droppable")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("@drop")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"color = $event.value"')]),t._v(">")]),t._v("\n        "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v(":color")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"color"')]),t._v(">")]),t._v("放到这里"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-droppable")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{attrs:{class:"javascript"}},[t._v("\n"),e("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),e("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("''")]),t._v(",\n        };\n    },\n};\n")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])]),e("h2",[t._v("API")]),e("h3",[t._v("Props/Attrs")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop/Attr")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("false")])]),e("td",[t._v("是否禁用")])])])]),e("h3",[t._v("Slots")]),e("h4",[t._v("(default)")]),e("p",[t._v("插入可以放置的元素，仅一个。")]),e("h4",[t._v("transfer")]),e("p",[t._v("自定义的移动元素。")]),e("h4",[t._v("@dragenter")]),e("p",[t._v("拖拽进入该元素时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event.originVM")]),e("td",[t._v("VueComponent")]),e("td",[t._v("拖拽源，为当前的"),e("code",{pre:!0},[t._v("<u-draggable>")])])]),e("tr",[e("td",[t._v("$event.sourceEl")]),e("td",[t._v("Element")]),e("td",[t._v("拖拽起始元素")])]),e("tr",[e("td",[t._v("$event.transferEl")]),e("td",[t._v("Element")]),e("td",[t._v("拖拽移动元素")])]),e("tr",[e("td",[t._v("$event.targetEl")]),e("td",[t._v("Element")]),e("td",[t._v("放置目标元素")])]),e("tr",[e("td",[t._v("$event.value")]),e("td",[t._v("Any")]),e("td",[t._v("需要传递的值")])]),e("tr",[e("td",[t._v("$event.screenX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),e("tr",[e("td",[t._v("$event.screenY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),e("tr",[e("td",[t._v("$event.clientX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),e("tr",[e("td",[t._v("$event.clientY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),e("tr",[e("td",[t._v("$event.pageX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于页面的水平坐标")])]),e("tr",[e("td",[t._v("$event.pageY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),e("tr",[e("td",[t._v("$event.startX")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),e("tr",[e("td",[t._v("$event.startY")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),e("tr",[e("td",[t._v("$event.dragX")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),e("tr",[e("td",[t._v("$event.dragY")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),e("tr",[e("td",[t._v("$event.startLeft")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时代理元素的left值")])]),e("tr",[e("td",[t._v("$event.startTop")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时代理元素的top值")])]),e("tr",[e("td",[t._v("$event.left")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时代理元素的left值")])]),e("tr",[e("td",[t._v("$event.top")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时代理元素的top值")])]),e("tr",[e("td",[t._v("$event.preventDefault")]),e("td",[t._v("Function")]),e("td",[t._v("阻止拖拽流程")])])])]),e("h4",[t._v("@dragleave")]),e("p",[t._v("拖拽离开该元素时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event.originVM")]),e("td",[t._v("VueComponent")]),e("td",[t._v("拖拽源，为当前的"),e("code",{pre:!0},[t._v("<u-draggable>")])])]),e("tr",[e("td",[t._v("$event.sourceEl")]),e("td",[t._v("Element")]),e("td",[t._v("拖拽起始元素")])]),e("tr",[e("td",[t._v("$event.transferEl")]),e("td",[t._v("Element")]),e("td",[t._v("拖拽移动元素")])]),e("tr",[e("td",[t._v("$event.targetEl")]),e("td",[t._v("Element")]),e("td",[t._v("放置目标元素")])]),e("tr",[e("td",[t._v("$event.value")]),e("td",[t._v("Any")]),e("td",[t._v("需要传递的值")])]),e("tr",[e("td",[t._v("$event.screenX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),e("tr",[e("td",[t._v("$event.screenY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),e("tr",[e("td",[t._v("$event.clientX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),e("tr",[e("td",[t._v("$event.clientY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),e("tr",[e("td",[t._v("$event.pageX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于页面的水平坐标")])]),e("tr",[e("td",[t._v("$event.pageY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),e("tr",[e("td",[t._v("$event.startX")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),e("tr",[e("td",[t._v("$event.startY")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),e("tr",[e("td",[t._v("$event.dragX")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),e("tr",[e("td",[t._v("$event.dragY")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),e("tr",[e("td",[t._v("$event.startLeft")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时代理元素的left值")])]),e("tr",[e("td",[t._v("$event.startTop")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时代理元素的top值")])]),e("tr",[e("td",[t._v("$event.left")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时代理元素的left值")])]),e("tr",[e("td",[t._v("$event.top")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时代理元素的top值")])]),e("tr",[e("td",[t._v("$event.preventDefault")]),e("td",[t._v("Function")]),e("td",[t._v("阻止拖拽流程")])])])]),e("h4",[t._v("@dragover")]),e("p",[t._v("拖拽在该元素上方时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event.originVM")]),e("td",[t._v("VueComponent")]),e("td",[t._v("拖拽源，为当前的"),e("code",{pre:!0},[t._v("<u-draggable>")])])]),e("tr",[e("td",[t._v("$event.sourceEl")]),e("td",[t._v("Element")]),e("td",[t._v("拖拽起始元素")])]),e("tr",[e("td",[t._v("$event.transferEl")]),e("td",[t._v("Element")]),e("td",[t._v("拖拽移动元素")])]),e("tr",[e("td",[t._v("$event.targetEl")]),e("td",[t._v("Element")]),e("td",[t._v("放置目标元素")])]),e("tr",[e("td",[t._v("$event.value")]),e("td",[t._v("Any")]),e("td",[t._v("需要传递的值")])]),e("tr",[e("td",[t._v("$event.ratioX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于接收元素所占的长度比")])]),e("tr",[e("td",[t._v("$event.ratioY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于接收元素所占的高度比")])]),e("tr",[e("td",[t._v("$event.screenX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),e("tr",[e("td",[t._v("$event.screenY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),e("tr",[e("td",[t._v("$event.clientX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),e("tr",[e("td",[t._v("$event.clientY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),e("tr",[e("td",[t._v("$event.pageX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于页面的水平坐标")])]),e("tr",[e("td",[t._v("$event.pageY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),e("tr",[e("td",[t._v("$event.startX")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),e("tr",[e("td",[t._v("$event.startY")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),e("tr",[e("td",[t._v("$event.dragX")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),e("tr",[e("td",[t._v("$event.dragY")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),e("tr",[e("td",[t._v("$event.startLeft")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时代理元素的left值")])]),e("tr",[e("td",[t._v("$event.startTop")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时代理元素的top值")])]),e("tr",[e("td",[t._v("$event.left")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时代理元素的left值")])]),e("tr",[e("td",[t._v("$event.top")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时代理元素的top值")])]),e("tr",[e("td",[t._v("$event.preventDefault")]),e("td",[t._v("Function")]),e("td",[t._v("阻止拖拽流程")])])])]),e("h4",[t._v("@drop")]),e("p",[t._v("拖拽放置时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event.originVM")]),e("td",[t._v("VueComponent")]),e("td",[t._v("拖拽源，为当前的"),e("code",{pre:!0},[t._v("<u-draggable>")])])]),e("tr",[e("td",[t._v("$event.sourceEl")]),e("td",[t._v("Element")]),e("td",[t._v("拖拽起始元素")])]),e("tr",[e("td",[t._v("$event.transferEl")]),e("td",[t._v("Element")]),e("td",[t._v("拖拽移动元素")])]),e("tr",[e("td",[t._v("$event.targetEl")]),e("td",[t._v("Element")]),e("td",[t._v("放置目标元素")])]),e("tr",[e("td",[t._v("$event.value")]),e("td",[t._v("Any")]),e("td",[t._v("需要传递的值")])]),e("tr",[e("td",[t._v("$event.ratioX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于接收元素所占的长度比")])]),e("tr",[e("td",[t._v("$event.ratioY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于接收元素所占的高度比")])]),e("tr",[e("td",[t._v("$event.screenX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),e("tr",[e("td",[t._v("$event.screenY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),e("tr",[e("td",[t._v("$event.clientX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),e("tr",[e("td",[t._v("$event.clientY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),e("tr",[e("td",[t._v("$event.pageX")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于页面的水平坐标")])]),e("tr",[e("td",[t._v("$event.pageY")]),e("td",[t._v("Number")]),e("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),e("tr",[e("td",[t._v("$event.startX")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),e("tr",[e("td",[t._v("$event.startY")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),e("tr",[e("td",[t._v("$event.dragX")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),e("tr",[e("td",[t._v("$event.dragY")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),e("tr",[e("td",[t._v("$event.startLeft")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时代理元素的left值")])]),e("tr",[e("td",[t._v("$event.startTop")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽开始时代理元素的top值")])]),e("tr",[e("td",[t._v("$event.left")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时代理元素的left值")])]),e("tr",[e("td",[t._v("$event.top")]),e("td",[t._v("Number")]),e("td",[t._v("拖拽时代理元素的top值")])]),e("tr",[e("td",[t._v("$event.preventDefault")]),e("td",[t._v("Function")]),e("td",[t._v("阻止拖拽流程")])])])]),e("h3",[t._v("Methods")]),e("h4",[t._v("cancel()")]),e("p",[t._v("取消拖拽。")])])},staticRenderFns:[]},r=e(1)(a,_,!1,null,null,null);v.default=r.exports}});