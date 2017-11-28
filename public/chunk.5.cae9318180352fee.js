/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([5],{

/***/ 398:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_Vusion_vusion_cli_node_modules_vue_md_loader_index_js_ref_5_1_README_md__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_3c0874a2_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_Vusion_vusion_cli_node_modules_vue_md_loader_index_js_ref_5_1_README_md__ = __webpack_require__(470);
var normalizeComponent = __webpack_require__(0)
/* script */

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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_Vusion_vusion_cli_node_modules_vue_md_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_3c0874a2_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_Vusion_vusion_cli_node_modules_vue_md_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({ components: { 'anonymous-645bcb61': { "template": "<div class=\"u-example\"><u-sidebar style=\"width: 200px; background: #f0f6fa;\"><u-sidebar-item>指南</u-sidebar-item><u-sidebar-item>概念</u-sidebar-item><u-sidebar-item to=\"/proto-ui\">组件</u-sidebar-item></u-sidebar></div>" }, 'anonymous-dcf45192': { "template": "<div class=\"u-example\"><u-sidebar value=\"3\" :router=\"false\" style=\"width: 200px; background: #f0f6fa;\"><u-sidebar-item value=\"1\">指南</u-sidebar-item><u-sidebar-item value=\"2\">概念</u-sidebar-item><u-sidebar-item value=\"3\">组件</u-sidebar-item></u-sidebar></div>" }, 'anonymous-27d4c7a7': { "template": "<div class=\"u-example\"><u-grid-layout><u-grid-layout-column :span=\"4\"><u-sidebar disabled><u-sidebar-item>指南</u-sidebar-item><u-sidebar-item>概念</u-sidebar-item><u-sidebar-item to=\"/proto-ui\">组件</u-sidebar-item></u-sidebar></u-grid-layout-column><u-grid-layout-column :span=\"4\"><u-sidebar><u-sidebar-item>指南</u-sidebar-item><u-sidebar-item disabled>概念</u-sidebar-item><u-sidebar-item to=\"/proto-ui\">组件</u-sidebar-item></u-sidebar></u-grid-layout-column></u-grid-layout></div>" }, 'anonymous-247d2026': { "template": "<div class=\"u-example\"><u-sidebar style=\"width: 200px;\"><u-sidebar-item>指南</u-sidebar-item><u-sidebar-item>概念</u-sidebar-item><u-sidebar-item>配置</u-sidebar-item><u-sidebar-divider></u-sidebar-divider><u-sidebar-item to=\"/proto-ui\">组件</u-sidebar-item><u-sidebar-item to=\"/libraries\">组件库</u-sidebar-item></u-sidebar></div>" }, 'anonymous-0573cf32': { "template": "<div class=\"u-example\"><u-grid-layout><u-grid-layout-row><u-grid-layout-column :span=\"4\"><p>默认，无折叠功能</p><u-sidebar style=\"background: #f0f6fa;\"><u-sidebar-group title=\"Basic\"><u-sidebar-item>链接</u-sidebar-item><u-sidebar-item>按钮</u-sidebar-item><u-sidebar-item>标签</u-sidebar-item></u-sidebar-group><u-sidebar-group title=\"Navigation\"><u-sidebar-item>导航栏</u-sidebar-item><u-sidebar-item to=\"/proto-ui/u-sidebar\">侧边栏</u-sidebar-item><u-sidebar-item>标签页</u-sidebar-item></u-sidebar-group><u-sidebar-group title=\"Form\"><u-sidebar-item>单行输入</u-sidebar-item><u-sidebar-item>多行输入</u-sidebar-item><u-sidebar-item>选择框</u-sidebar-item><u-sidebar-item>表单</u-sidebar-item></u-sidebar-group></u-sidebar></u-grid-layout-column><u-grid-layout-column :span=\"4\"><p>开启折叠功能</p><u-sidebar collapsible style=\"background: #f0f6fa;\"><u-sidebar-group title=\"Basic\"><u-sidebar-item>链接</u-sidebar-item><u-sidebar-item>按钮</u-sidebar-item><u-sidebar-item>标签</u-sidebar-item></u-sidebar-group><u-sidebar-group title=\"Navigation\" expanded disabled><u-sidebar-item>导航栏</u-sidebar-item><u-sidebar-item to=\"/proto-ui/u-sidebar\">侧边栏</u-sidebar-item><u-sidebar-item>标签页</u-sidebar-item></u-sidebar-group><u-sidebar-group title=\"Form\" :collapsible=\"false\"><u-sidebar-item>单行输入</u-sidebar-item><u-sidebar-item>多行输入</u-sidebar-item><u-sidebar-item>选择框</u-sidebar-item><u-sidebar-item>表单</u-sidebar-item></u-sidebar-group></u-sidebar></u-grid-layout-column><u-grid-layout-column :span=\"4\"><p>手风琴模式</p><u-sidebar collapsible accordion style=\"background: #f0f6fa;\"><u-sidebar-group title=\"Basic\"><u-sidebar-item>链接</u-sidebar-item><u-sidebar-item>按钮</u-sidebar-item><u-sidebar-item>标签</u-sidebar-item></u-sidebar-group><u-sidebar-group title=\"Navigation\"><u-sidebar-item>导航栏</u-sidebar-item><u-sidebar-item to=\"/proto-ui/u-sidebar\">侧边栏</u-sidebar-item><u-sidebar-item>标签页</u-sidebar-item></u-sidebar-group><u-sidebar-group title=\"Form\"><u-sidebar-item>单行输入</u-sidebar-item><u-sidebar-item>多行输入</u-sidebar-item><u-sidebar-item>选择框</u-sidebar-item><u-sidebar-item>表单</u-sidebar-item></u-sidebar-group></u-sidebar></u-grid-layout-column></u-grid-layout-row><u-grid-layout-row><u-grid-layout-column :span=\"4\"><p>触发方式：整行点击均可触发（默认）</p><u-sidebar collapsible expand-trigger=\"click\" style=\"background: #f0f6fa;\"><u-sidebar-group title=\"Basic\"><u-sidebar-item>链接</u-sidebar-item><u-sidebar-item>按钮</u-sidebar-item><u-sidebar-item>标签</u-sidebar-item></u-sidebar-group><u-sidebar-group title=\"Navigation\"><u-sidebar-item>导航栏</u-sidebar-item><u-sidebar-item to=\"/proto-ui/u-sidebar\">侧边栏</u-sidebar-item><u-sidebar-item>标签页</u-sidebar-item></u-sidebar-group></u-sidebar></u-grid-layout-column><u-grid-layout-column :span=\"4\"><p>触发方式：仅点击小箭头时触发</p><u-sidebar collapsible expand-trigger=\"click-expander\" style=\"background: #f0f6fa;\"><u-sidebar-group title=\"Basic\"><u-sidebar-item>链接</u-sidebar-item><u-sidebar-item>按钮</u-sidebar-item><u-sidebar-item>标签</u-sidebar-item></u-sidebar-group><u-sidebar-group title=\"Navigation\"><u-sidebar-item>导航栏</u-sidebar-item><u-sidebar-item to=\"/proto-ui/u-sidebar\">侧边栏</u-sidebar-item><u-sidebar-item>标签页</u-sidebar-item></u-sidebar-group></u-sidebar></u-grid-layout-column></u-grid-layout-row></u-grid-layout></div>" } } });

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("侧边栏 Sidebar")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('h4',[_vm._v("路由模式")]),_c('anonymous-645bcb61',{ref:"anonymous-645bcb61"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 200px; background: #f0f6fa;\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("指南"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("概念"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("to")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/proto-ui\"")]),_vm._v(">")]),_vm._v("组件"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("value模式")]),_c('anonymous-dcf45192',{ref:"anonymous-dcf45192"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":router")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"false\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 200px; background: #f0f6fa;\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1\"")]),_vm._v(">")]),_vm._v("指南"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"2\"")]),_vm._v(">")]),_vm._v("概念"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(">")]),_vm._v("组件"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("只读、禁用、禁用某一项")]),_c('anonymous-27d4c7a7',{ref:"anonymous-27d4c7a7"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("指南"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("概念"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("to")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/proto-ui\"")]),_vm._v(">")]),_vm._v("组件"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("指南"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("概念"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("to")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/proto-ui\"")]),_vm._v(">")]),_vm._v("组件"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("分隔符")]),_c('anonymous-247d2026',{ref:"anonymous-247d2026"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 200px;\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("指南"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("概念"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("配置"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-divider")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-divider")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("to")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/proto-ui\"")]),_vm._v(">")]),_vm._v("组件"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("to")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/libraries\"")]),_vm._v(">")]),_vm._v("组件库"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("分组")]),_c('anonymous-0573cf32',{ref:"anonymous-0573cf32"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-row")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("默认，无折叠功能"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #f0f6fa;\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Basic\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("链接"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("按钮"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("标签"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Navigation\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("导航栏"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("to")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/proto-ui/u-sidebar\"")]),_vm._v(">")]),_vm._v("侧边栏"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("标签页"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Form\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("单行输入"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("多行输入"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("选择框"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("表单"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("开启折叠功能"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("collapsible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #f0f6fa;\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Basic\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("链接"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("按钮"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("标签"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Navigation\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expanded")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("disabled")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("导航栏"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("to")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/proto-ui/u-sidebar\"")]),_vm._v(">")]),_vm._v("侧边栏"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("标签页"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Form\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":collapsible")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"false\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("单行输入"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("多行输入"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("选择框"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("表单"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("手风琴模式"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("collapsible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("accordion")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #f0f6fa;\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Basic\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("链接"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("按钮"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("标签"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Navigation\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("导航栏"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("to")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/proto-ui/u-sidebar\"")]),_vm._v(">")]),_vm._v("侧边栏"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("标签页"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Form\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("单行输入"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("多行输入"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("选择框"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("表单"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-row")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-row")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("触发方式：整行点击均可触发（默认）"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("collapsible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expand-trigger")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"click\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #f0f6fa;\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Basic\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("链接"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("按钮"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("标签"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Navigation\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("导航栏"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("to")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/proto-ui/u-sidebar\"")]),_vm._v(">")]),_vm._v("侧边栏"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("标签页"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("触发方式：仅点击小箭头时触发"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("collapsible")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expand-trigger")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"click-expander\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"background: #f0f6fa;\"")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Basic\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("链接"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("按钮"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("标签"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"Navigation\"")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("导航栏"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("to")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"/proto-ui/u-sidebar\"")]),_vm._v(">")]),_vm._v("侧边栏"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("标签页"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-item")]),_vm._v(">")]),_vm._v("\n                "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar-group")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-sidebar")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout-row")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-grid-layout")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("Sidebar API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("router")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("true")])]),_c('td',[_vm._v("是否根据vue-router来控制选择哪一项")])]),_c('tr',[_c('td',[_vm._v("href")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("链接地址")])]),_c('tr',[_c('td',[_vm._v("target")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("打开方式")])]),_c('tr',[_c('td',[_vm._v("to")]),_c('td',[_vm._v("String | Location")]),_c('td'),_c('td',[_vm._v("需要vue-router，与"),_c('code',{pre:true},[_vm._v("<router-link>")]),_vm._v("的"),_c('code',{pre:true},[_vm._v("to")]),_vm._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),_c('tr',[_c('td',[_vm._v("replace")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("需要vue-router，与"),_c('code',{pre:true},[_vm._v("<router-link>")]),_vm._v("的"),_c('code',{pre:true},[_vm._v("replace")]),_vm._v("属性相同。如果为"),_c('code',{pre:true},[_vm._v("true")]),_vm._v("，当点击时，会调用"),_c('code',{pre:true},[_vm._v("router.replace()")]),_vm._v("而不是"),_c('code',{pre:true},[_vm._v("router.push()")]),_vm._v("，于是导航后不会留下"),_c('code',{pre:true},[_vm._v("history")]),_vm._v("记录。")])]),_c('tr',[_c('td',[_vm._v("exact")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("需要vue-router，与"),_c('code',{pre:true},[_vm._v("<router-link>")]),_vm._v("的"),_c('code',{pre:true},[_vm._v("exact")]),_vm._v("属性相同。是否与路由完全一致时才高亮显示。")])]),_c('tr',[_c('td',[_vm._v("value.sync, v-model")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("当前选择的值")])]),_c('tr',[_c('td',[_vm._v("field")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'title'")])]),_c('td',[_vm._v("显示文本字段")])]),_c('tr',[_c('td',[_vm._v("collapsible")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("分组是否可以折叠")])]),_c('tr',[_c('td',[_vm._v("accordion")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否每次只会展开一个分组")])]),_c('tr',[_c('td',[_vm._v("expandTrigger")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("'click'")])]),_c('td',[_vm._v("展开/折叠的触发方式。可选值："),_c('code',{pre:true},[_vm._v("'click'")]),_vm._v("表示整行点击均可触发、"),_c('code',{pre:true},[_vm._v("'click-expander'")]),_vm._v("表示仅点击小箭头时触发")])]),_c('tr',[_c('td',[_vm._v("readonly")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否只读")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否禁用")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入"),_c('code',{pre:true},[_vm._v("<u-sidebar-item>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<u-sidebar-divider>")]),_vm._v("或"),_c('code',{pre:true},[_vm._v("<u-sidebar-group>")]),_vm._v("子组件。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-select")]),_c('p',[_vm._v("选择某一项前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("选择项的值")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("旧的值")])]),_c('tr',[_c('td',[_vm._v("$event.item")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("选择项相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.itemVM")]),_c('td',[_vm._v("SidebarItem")]),_c('td',[_vm._v("选择项子组件")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止选择流程")])])])]),_c('h4',[_vm._v("@input")]),_c('p',[_vm._v("选择某一项时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("选择项的值")])])])]),_c('h4',[_vm._v("@select")]),_c('p',[_vm._v("选择某一项时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("改变后的值")])]),_c('tr',[_c('td',[_vm._v("$event.oldValue")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("旧的值")])]),_c('tr',[_c('td',[_vm._v("$event.item")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("单选模式中，选择项相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.itemVM")]),_c('td',[_vm._v("SidebarItem")]),_c('td',[_vm._v("单选模式中，选择项子组件")])]),_c('tr',[_c('td',[_vm._v("$event.items")]),_c('td',[_vm._v("Array<Object>")]),_c('td',[_vm._v("多选模式中，所有选中项相关对象的数组")])]),_c('tr',[_c('td',[_vm._v("$event.itemVMs")]),_c('td',[_vm._v("Array<SidebarItem>")]),_c('td',[_vm._v("多选模式中，所有选中项子组件的数组")])])])]),_c('h4',[_vm._v("@toggle")]),_c('p',[_vm._v("展开/折叠某分组时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("$event.groupVM")]),_c('td',[_vm._v("SidebarGroup")]),_c('td',[_vm._v("分组组件")])])])]),_c('h3',[_vm._v("Methods")]),_c('h4',[_vm._v("toggleAll(expanded)")]),_c('p',[_vm._v("展开/折叠所有分组")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠")])])])]),_c('h2',[_vm._v("SidebarItem API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("value")]),_c('td',[_vm._v("Any")]),_c('td'),_c('td',[_vm._v("此项的值")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("禁用此项")])]),_c('tr',[_c('td',[_vm._v("item")]),_c('td',[_vm._v("Object")]),_c('td'),_c('td',[_vm._v("相关对象。当选择此项时，抛出的事件会传递该对象，便于开发")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入文本或HTML。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-select")]),_c('p',[_vm._v("选择此项前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.value")]),_c('td',[_vm._v("Any")]),_c('td',[_vm._v("此项的值")])]),_c('tr',[_c('td',[_vm._v("$event.item")]),_c('td',[_vm._v("Object")]),_c('td',[_vm._v("此项的相关对象")])]),_c('tr',[_c('td',[_vm._v("$event.itemVM")]),_c('td',[_vm._v("SidebarItem")]),_c('td',[_vm._v("此组件")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止选择流程")])])])]),_c('h4',[_vm._v("@before-navigate")]),_c('p',[_vm._v("使用router相关属性切换路由前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.to")]),_c('td',[_vm._v("String | Location")]),_c('td',[_c('code',{pre:true},[_vm._v("to")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.replace")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("replace")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.exact")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("exact")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止切换流程")])])])]),_c('h4',[_vm._v("@navigate")]),_c('p',[_vm._v("使用router相关属性切换路由时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.to")]),_c('td',[_vm._v("String | Location")]),_c('td',[_c('code',{pre:true},[_vm._v("to")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.replace")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("replace")]),_vm._v("属性的值")])]),_c('tr',[_c('td',[_vm._v("$event.exact")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("exact")]),_vm._v("属性的值")])])])]),_c('h2',[_vm._v("SidebarGroup API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("title")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("显示的标题")])]),_c('tr',[_c('td',[_vm._v("collapsible")]),_c('td',[_vm._v("Boolean")]),_c('td'),_c('td',[_c('code',{pre:true},[_vm._v("false")])])]),_c('tr',[_c('td',[_vm._v("expanded.sync")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("disabled")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否禁用。禁用时无法展开/折叠")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入"),_c('code',{pre:true},[_vm._v("<u-sidebar-item>")]),_vm._v("或"),_c('code',{pre:true},[_vm._v("<u-sidebar-divider>")]),_vm._v("子组件。")]),_c('h4',[_vm._v("title")]),_c('p',[_vm._v("自定义文本显示。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@before-toggle")]),_c('p',[_vm._v("展开/折叠此分组前触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("$event.groupVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("分组组件")])]),_c('tr',[_c('td',[_vm._v("$event.preventDefault")]),_c('td',[_vm._v("Function")]),_c('td',[_vm._v("阻止展开/折叠流程")])])])]),_c('h4',[_vm._v("@toggle")]),_c('p',[_vm._v("展开/折叠某分组时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.expanded")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("展开/折叠状态")])]),_c('tr',[_c('td',[_vm._v("$event.groupVM")]),_c('td',[_vm._v("TreeViewNode")]),_c('td',[_vm._v("分组组件")])])])]),_c('h2',[_vm._v("SidebarDivider API")]),_c('p',[_vm._v("无")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});