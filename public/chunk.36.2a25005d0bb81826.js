"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?341e673edf48e79c94671a0b6afa2574") format("truetype"),\n\turl("/public/vusion-icon-font.eot?341e673edf48e79c94671a0b6afa2574#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?341e673edf48e79c94671a0b6afa2574") format("woff"),\n\turl("/public/vusion-icon-font.svg?341e673edf48e79c94671a0b6afa2574#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?341e673edf48e79c94671a0b6afa2574") format("truetype"),\n\turl("/public/vusion-icon-font.eot?341e673edf48e79c94671a0b6afa2574#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?341e673edf48e79c94671a0b6afa2574") format("woff"),\n\turl("/public/vusion-icon-font.svg?341e673edf48e79c94671a0b6afa2574#vusion-icon-font") format("svg");\n}'},webpackJsonp([36],{416:function(s,t,a){function h(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function i(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=h(s),t.id=l,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var l="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},487:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-checkbox",{model:{value:s.value,callback:function(t){s.value=t},expression:"value"}},[s._v(s._s(s.value))])},staticRenderFns:[]},i={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-checkboxes",{model:{value:s.checkedList,callback:function(t){s.checkedList=t},expression:"checkedList"}},[a("u-checkbox",{attrs:{label:"水杯"}},[s._v("水杯")]),a("u-checkbox",{attrs:{label:"坚果"}},[s._v("坚果")]),a("u-checkbox",{attrs:{label:"毛巾"}},[s._v("毛巾")]),a("u-checkbox",{attrs:{label:"沙发"}},[s._v("沙发")])],1),s._v("\n    "+s._s(s.checkedList)+"\n")],1)},staticRenderFns:[]},l={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-checkboxes",{attrs:{min:1,max:2},model:{value:s.checkedList,callback:function(t){s.checkedList=t},expression:"checkedList"}},[a("u-checkbox",{attrs:{label:"水杯"}},[s._v("水杯")]),a("u-checkbox",{attrs:{label:"坚果"}},[s._v("坚果")]),a("u-checkbox",{attrs:{label:"毛巾"}},[s._v("毛巾")]),a("u-checkbox",{attrs:{label:"沙发"}},[s._v("沙发")])],1),s._v("\n    "+s._s(s.checkedList)+"\n")],1)},staticRenderFns:[]},n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-checkbox",{on:{check:function(t){s.checkAll(t.value)}},model:{value:s.allChecked,callback:function(t){s.allChecked=t},expression:"allChecked"}},[s._v("全选")]),a("u-checkboxes",{on:{check:function(t){s.onCheck(t.value)}},model:{value:s.checkedList,callback:function(t){s.checkedList=t},expression:"checkedList"}},[a("u-checkbox",{attrs:{label:"水杯"}},[s._v("水杯")]),a("u-checkbox",{attrs:{label:"坚果"}},[s._v("坚果")]),a("u-checkbox",{attrs:{label:"毛巾"}},[s._v("毛巾")]),a("u-checkbox",{attrs:{label:"沙发"}},[s._v("沙发")])],1),s._v("\n    "+s._s(s.checkedList)+"\n")],1)},staticRenderFns:[]},e={components:{Cd7631b:a(1)({data:function(){return{value:!0}}},h,!1,null,null,null).exports,Ce55f5b:a(1)({data:function(){return{checkedList:["毛巾","沙发"]}}},i,!1,null,null,null).exports,C9e36c7:a(1)({data:function(){return{checkedList:["毛巾","沙发"]}},methods:{add:function(){this.checkedList.push("水杯")}}},l,!1,null,null,null).exports,C871fab:a(1)({data:function(){return{allChecked:!1,checkedList:[]}},methods:{checkAll:function(s){this.checkedList=s?["水杯","坚果","毛巾","沙发"]:[]},onCheck:function(s){4===this.checkedList.length?this.allChecked=!0:0===this.checkedList.length?this.allChecked=!1:this.allChecked=null}}},n,!1,null,null,null).exports}},v={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("多选组 Checkboxes")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-checkbox",[this._v("多选框")])],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("多选框"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("Value绑定")]),t("div",{staticClass:"u-example"},[t("Cd7631b")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"value"')]),this._v(">")]),this._v("{{ value }}"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n        };\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("只读和禁用")]),t("div",{staticClass:"u-example"},[t("u-linear-layout",[t("u-checkbox",{attrs:{value:!0,readonly:""}},[this._v("只读")]),t("u-checkbox",{attrs:{value:!0,disabled:""}},[this._v("禁用")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"true"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("readonly")]),this._v(">")]),this._v("只读"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"true"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("disabled")]),this._v(">")]),this._v("禁用"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-linear-layout")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("不确定状态")]),t("div",{staticClass:"u-example"},[t("u-checkbox",{attrs:{value:null}},[this._v("不确定")])],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"null"')]),this._v(">")]),this._v("不确定"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("多选组")]),t("div",{staticClass:"u-example"},[t("Ce55f5b")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkboxes")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"checkedList"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"水杯"')]),this._v(">")]),this._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"坚果"')]),this._v(">")]),this._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"毛巾"')]),this._v(">")]),this._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"沙发"')]),this._v(">")]),this._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkboxes")]),this._v(">")]),this._v("\n    {{ checkedList }}\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("checkedList")]),this._v(": ["),t("span",{attrs:{class:"hljs-string"}},[this._v("'毛巾'")]),this._v(", "),t("span",{attrs:{class:"hljs-string"}},[this._v("'沙发'")]),this._v("],\n        };\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("数量限制")]),t("p",[this._v("使用"),t("code",{pre:!0},[this._v("min")]),this._v("和"),t("code",{pre:!0},[this._v("max")]),this._v("属性可以限制选择项的数量。")]),t("div",{staticClass:"u-example"},[t("C9e36c7")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkboxes")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":min")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"1"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":max")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"2"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"checkedList"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"水杯"')]),this._v(">")]),this._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"坚果"')]),this._v(">")]),this._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"毛巾"')]),this._v(">")]),this._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"沙发"')]),this._v(">")]),this._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkboxes")]),this._v(">")]),this._v("\n    {{ checkedList }}\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("checkedList")]),this._v(": ["),t("span",{attrs:{class:"hljs-string"}},[this._v("'毛巾'")]),this._v(", "),t("span",{attrs:{class:"hljs-string"}},[this._v("'沙发'")]),this._v("],\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n        add() {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".checkedList.push("),t("span",{attrs:{class:"hljs-string"}},[this._v("'水杯'")]),this._v(")\n        }\n    }\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("全选")]),t("div",{staticClass:"u-example"},[t("C871fab")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"allChecked"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("@check")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"checkAll($event.value)"')]),this._v(">")]),this._v("全选"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkboxes")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("v-model")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"checkedList"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("@check")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"onCheck($event.value)"')]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"水杯"')]),this._v(">")]),this._v("水杯"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"坚果"')]),this._v(">")]),this._v("坚果"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"毛巾"')]),this._v(">")]),this._v("毛巾"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("label")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"沙发"')]),this._v(">")]),this._v("沙发"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkbox")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-checkboxes")]),this._v(">")]),this._v("\n    {{ checkedList }}\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    data() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("allChecked")]),this._v(": "),t("span",{attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[this._v("checkedList")]),this._v(": [],\n        };\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n        checkAll(checked) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".checkedList = checked ? ["),t("span",{attrs:{class:"hljs-string"}},[this._v("'水杯'")]),this._v(", "),t("span",{attrs:{class:"hljs-string"}},[this._v("'坚果'")]),this._v(", "),t("span",{attrs:{class:"hljs-string"}},[this._v("'毛巾'")]),this._v(", "),t("span",{attrs:{class:"hljs-string"}},[this._v("'沙发'")]),this._v("] : [];\n        },\n        onCheck(value) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("if")]),this._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".checkedList.length === "),t("span",{attrs:{class:"hljs-number"}},[this._v("4")]),this._v(")\n                "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".allChecked = "),t("span",{attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(";\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("else")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("if")]),this._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".checkedList.length === "),t("span",{attrs:{class:"hljs-number"}},[this._v("0")]),this._v(")\n                "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".allChecked = "),t("span",{attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(";\n            "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("else")]),this._v("\n                "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".allChecked = "),t("span",{attrs:{class:"hljs-literal"}},[this._v("null")]),this._v(";\n        }\n    },\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h2",[this._v("Checkboxes API")]),t("h3",[this._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Prop/Attr")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("value")]),t("td",[this._v("Array")]),t("td",[t("code",{pre:!0},[this._v("[]")])]),t("td",[this._v("多选组的选中项")])]),t("tr",[t("td",[this._v("min")]),t("td",[this._v("Number")]),t("td",[this._v("0")]),t("td",[this._v("可以勾选多选框的最小数量")])]),t("tr",[t("td",[this._v("max")]),t("td",[this._v("Number")]),t("td",[this._v("Infinity")]),t("td",[this._v("可以勾选多选框的最大数量")])]),t("tr",[t("td",[this._v("readonly")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否只读")])]),t("tr",[t("td",[this._v("disabled")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否禁用")])])])]),t("h3",[this._v("Slots")]),t("h4",[this._v("(default)")]),t("p",[this._v("插入"),t("code",{pre:!0},[this._v("<checkbox>")]),this._v("子组件。")]),t("h2",[this._v("Checkbox API")]),t("h3",[this._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Prop/Attr")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("value.sync, v-model")]),t("td",[this._v("Boolean, null")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("选中状态，"),t("code",{pre:!0},[this._v("null")]),this._v("表示不确定状态")])]),t("tr",[t("td",[this._v("label")]),t("td",[this._v("Any")]),t("td"),t("td",[this._v("多选框标签。用于关联多选组的值")])]),t("tr",[t("td",[this._v("readonly")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否只读")])]),t("tr",[t("td",[this._v("disabled")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否禁用")])])])]),t("h3",[this._v("Slots")]),t("h4",[this._v("(default)")]),t("p",[this._v("插入文本或HTML。")]),t("h3",[this._v("Events")]),t("h4",[this._v("@before-check")]),t("p",[this._v("切换选中状态前触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.value")]),t("td",[this._v("Boolean, null")]),t("td",[this._v("选中状态")])]),t("tr",[t("td",[this._v("$event.oldValue")]),t("td",[this._v("Boolean, null")]),t("td",[this._v("旧的选中状态")])]),t("tr",[t("td",[this._v("$event.preventDefault")]),t("td",[this._v("Function")]),t("td",[this._v("阻止切换流程")])])])]),t("h4",[this._v("@input")]),t("p",[this._v("切换选中状态时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event")]),t("td",[this._v("Boolean, null")]),t("td",[this._v("切换后的选中状态")])])])]),t("h4",[this._v("@check")]),t("p",[this._v("切换选中状态时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.value")]),t("td",[this._v("Boolean, null")]),t("td",[this._v("选中状态")])]),t("tr",[t("td",[this._v("$event.oldValue")]),t("td",[this._v("Boolean, null")]),t("td",[this._v("旧的选中状态")])]),t("tr",[t("td",[this._v("$event.label")]),t("td",[this._v("Any")]),t("td",[this._v("此选框的标签")])])])]),t("h4",[this._v("@change")]),t("p",[this._v("选中状态改变时触发")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Param")]),t("th",[this._v("Type")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("$event.value")]),t("td",[this._v("Boolean, null")]),t("td",[this._v("选中状态")])]),t("tr",[t("td",[this._v("$event.oldValue")]),t("td",[this._v("Boolean, null")]),t("td",[this._v("旧的选中状态")])])])])])},staticRenderFns:[]},_=a(1)(e,v,!1,null,null,null);t.default=_.exports}});