/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([20],{

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

var styleId = 'ICON-FONT-FILE-STYLE';
function createStyleContent(fontConfig) {
    var style = fontConfig || window.ICON_FONT_STYLE;
    return style.styleContent || '';
}

function addStyle(fontConfig) {
    var styleTag = document.createElement('style'), headElement = document.getElementsByTagName('head')[0];
    styleTag.innerHTML = createStyleContent(fontConfig);
    styleTag.id = styleId;
    styleTag.type = 'text/css';
    if (headElement) {
        headElement.appendChild(styleTag);
    } else {
        window.addEventListener('load', function () {
            headElement.appendChild(styleTag);
        });
    }
}

function updateStyle(fontConfig) {
    var styleTag = document.getElementById(styleId);
    if (!styleTag) {
        addStyle(fontConfig);
    } else {
        styleTag.innerHTML = createStyleContent(fontConfig);
    }
}

module.exports = function() {
    if (window.HAS_CREATE_FONT_STYLE) {
        return;
    }
    addStyle();
    window.HAS_CREATE_FONT_STYLE = true;
}
if (false) {
    window.ICON_FONT_STYLE.update = updateStyle;
}


/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_02b76af6_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_Vusion_vusion_github_io_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(461);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_02b76af6_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_Vusion_vusion_github_io_node_modules_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("链接 Link")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('div',{staticClass:"u-example"},[_c('u-link',{attrs:{"href":"#"}},[_vm._v("链接")]),_vm._v(" "),_c('u-link',{attrs:{"href":"#"}},[_vm._v("查看详情")])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-link")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("href")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"#\"")]),_vm._v(">")]),_vm._v("链接"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-link")]),_vm._v(">")]),_vm._v("&nbsp;"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-link")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("href")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"#\"")]),_vm._v(">")]),_vm._v("查看详情"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-link")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("禁用")]),_c('div',{staticClass:"u-example"},[_c('u-link',{attrs:{"href":"#","disabled":""}},[_vm._v("禁用")])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-link")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("href")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"#\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("禁用"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-link")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("目标")]),_c('p',[_vm._v("使用"),_c('code',{pre:true},[_vm._v("href")]),_vm._v("和"),_c('code',{pre:true},[_vm._v("target")]),_vm._v("属性，可以直接实现"),_c('code',{pre:true},[_vm._v("<a>")]),_vm._v("元素对应的功能。使用"),_c('code',{pre:true},[_vm._v("to")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("replace")]),_vm._v("和"),_c('code',{pre:true},[_vm._v("append")]),_vm._v("需要引入vue-router，它们与"),_c('code',{pre:true},[_vm._v("<router-link>")]),_vm._v("组件中对应属性的功能相同。")]),_c('div',{staticClass:"u-example"},[_c('u-link',{attrs:{"href":"https://vusion.github.io","target":"_blank"}},[_vm._v("href")]),_vm._v(" \n"),_c('u-link',{attrs:{"to":"/proto-ui/u-button"}},[_vm._v("router")])],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-link")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("href")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"https://vusion.github.io\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"_blank\"")]),_vm._v(">")]),_vm._v("href"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-link")]),_vm._v(">")]),_vm._v("&nbsp;\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-link")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("to")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/proto-ui/u-button\"")]),_vm._v(">")]),_vm._v("router"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-link")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("href")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("链接地址")])]),_c('tr',[_c('td',[_vm._v("target")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("（原生属性）")])]),_c('tr',[_c('td',[_vm._v("to")]),_c('td',[_vm._v("String | Location")]),_c('td'),_c('td',[_vm._v("需要vue-router，与"),_c('code',{pre:true},[_vm._v("<router-link>")]),_vm._v("的"),_c('code',{pre:true},[_vm._v("to")]),_vm._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),_c('tr',[_c('td',[_vm._v("replace")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("需要vue-router，与"),_c('code',{pre:true},[_vm._v("<router-link>")]),_vm._v("的"),_c('code',{pre:true},[_vm._v("replace")]),_vm._v("属性相同。如果为"),_c('code',{pre:true},[_vm._v("true")]),_vm._v("，当点击时，会调用"),_c('code',{pre:true},[_vm._v("router.replace()")]),_vm._v("而不是"),_c('code',{pre:true},[_vm._v("router.push()")]),_vm._v("，于是导航后不会留下"),_c('code',{pre:true},[_vm._v("history")]),_vm._v("记录。")])]),_c('tr',[_c('td',[_vm._v("append")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("需要vue-router，与"),_c('code',{pre:true},[_vm._v("<router-link>")]),_vm._v("的"),_c('code',{pre:true},[_vm._v("append")]),_vm._v("属性相同。如果为"),_c('code',{pre:true},[_vm._v("true")]),_vm._v("，则在当前路径后追加"),_c('code',{pre:true},[_vm._v("to")]),_vm._v("的路径。")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否禁用。禁用后不会响应"),_c('code',{pre:true},[_vm._v("click")]),_vm._v("事件。")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入文本或HTML。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("$listeners")]),_c('p',[_vm._v("监听所有"),_c('code',{pre:true},[_vm._v("<a>")]),_vm._v("元素的事件。")]),_c('h4',[_vm._v("@before-navigate")]),_c('p',[_vm._v("使用router相关属性切换路由前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.to")]),_c('td',[_vm._v("String | Location")]),_c('td',[_c('code',{pre:true},[_vm._v("to")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.replace")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("replace")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.append")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("append")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止切换流程")])])])]),_c('h4',[_vm._v("@navigate")]),_c('p',[_vm._v("使用router相关属性切换路由时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.to")]),_c('td',[_vm._v("String | Location")]),_c('td',[_c('code',{pre:true},[_vm._v("to")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.replace")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("replace")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.append")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("append")]),_vm._v("属性的值")])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});