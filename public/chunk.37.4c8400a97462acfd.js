/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([37],{

/***/ 413:
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

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_7c0a2182_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__ = __webpack_require__(607);
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
  __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_7c0a2182_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_vue_markdown_html_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("Emitter")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});