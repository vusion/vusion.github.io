/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([0],{

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

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_form_md__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_33c5adde_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_form_md__ = __webpack_require__(538);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_form_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_33c5adde_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_form_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_0_af357d_vue__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_1_f14b93_vue__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_2_1b381d_vue__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_3_78f0b7_vue__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_4_3f5ebf_vue__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_5_3a5f9a_vue__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_6_2a9b39_vue__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_7_a7ed6a_vue__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_8_01868c_vue__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_9_0ac978_vue__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_10_74a27d_vue__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_11_f2be93_vue__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_12_383ae8_vue__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_13_79e811_vue__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_14_21e125_vue__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_15_96eb39_vue__ = __webpack_require__(535);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


















/* harmony default export */ __webpack_exports__["a"] = ({
                components: {
                                'Caf357d': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_0_af357d_vue__["a" /* default */],
                                'Cf14b93': __WEBPACK_IMPORTED_MODULE_1__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_1_f14b93_vue__["a" /* default */],
                                'C1b381d': __WEBPACK_IMPORTED_MODULE_2__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_2_1b381d_vue__["a" /* default */],
                                'C78f0b7': __WEBPACK_IMPORTED_MODULE_3__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_3_78f0b7_vue__["a" /* default */],
                                'C3f5ebf': __WEBPACK_IMPORTED_MODULE_4__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_4_3f5ebf_vue__["a" /* default */],
                                'C3a5f9a': __WEBPACK_IMPORTED_MODULE_5__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_5_3a5f9a_vue__["a" /* default */],
                                'C2a9b39': __WEBPACK_IMPORTED_MODULE_6__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_6_2a9b39_vue__["a" /* default */],
                                'Ca7ed6a': __WEBPACK_IMPORTED_MODULE_7__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_7_a7ed6a_vue__["a" /* default */],
                                'C01868c': __WEBPACK_IMPORTED_MODULE_8__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_8_01868c_vue__["a" /* default */],
                                'C0ac978': __WEBPACK_IMPORTED_MODULE_9__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_9_0ac978_vue__["a" /* default */],
                                'C74a27d': __WEBPACK_IMPORTED_MODULE_10__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_10_74a27d_vue__["a" /* default */],
                                'Cf2be93': __WEBPACK_IMPORTED_MODULE_11__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_11_f2be93_vue__["a" /* default */],
                                'C383ae8': __WEBPACK_IMPORTED_MODULE_12__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_12_383ae8_vue__["a" /* default */],
                                'C79e811': __WEBPACK_IMPORTED_MODULE_13__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_13_79e811_vue__["a" /* default */],
                                'C21e125': __WEBPACK_IMPORTED_MODULE_14__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_14_21e125_vue__["a" /* default */],
                                'C96eb39': __WEBPACK_IMPORTED_MODULE_15__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_ui_design_form_md_15_96eb39_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_0_af357d_vue__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_70600dfe_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_0_af357d_vue__ = __webpack_require__(476);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_0_af357d_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_70600dfe_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_0_af357d_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 475:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            rules: {
                username: [{ type: 'string', required: true, trigger: 'blur', message: '请输入用户名' }, { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' }],
                email: [{ type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' }, { type: 'email', trigger: 'blur', message: '邮箱格式不正确' }]
            }
        };
    }
});

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-form',{attrs:{"rules":_vm.rules}},[_c('u-form-item',{attrs:{"label":"用户名","name":"username"}},[_c('u-input',{attrs:{"maxlength":"12","placeholder":"4~12个字符"}})],1),_c('u-form-item',{attrs:{"label":"邮箱","name":"email"}},[_c('u-input',{attrs:{"maxlength":"24","placeholder":"请输入邮箱"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_1_f14b93_vue__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_b8201560_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_1_f14b93_vue__ = __webpack_require__(479);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_1_f14b93_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_b8201560_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_1_f14b93_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 478:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            model: {
                password: '',
                confirm: ''
            },
            rules: {
                password: [{ type: 'string', required: true, trigger: 'blur', message: '请输入密码' }, { type: 'string', min: 6, max: 12, trigger: 'blur', message: '6~12个字符' }],
                confirm: [{ type: 'string', required: true, trigger: 'blur', message: '两次输入的密码不一致', validator: (rule, value, callback) => {
                        value === this.model.password ? callback() : callback(new Error());
                    } }]
            }
        };
    }
});

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-form',{attrs:{"rules":_vm.rules}},[_c('u-form-item',{attrs:{"label":"密码","name":"password"}},[_c('u-input',{attrs:{"type":"password","maxlength":"12","placeholder":"6~12个字符"},model:{value:(_vm.model.password),callback:function ($$v) {_vm.$set(_vm.model, "password", $$v)},expression:"model.password"}})],1),_c('u-form-item',{attrs:{"label":"确认密码","name":"confirm"}},[_c('u-input',{attrs:{"type":"password","maxlength":"12","placeholder":"6~12个字符"},model:{value:(_vm.model.confirm),callback:function ($$v) {_vm.$set(_vm.model, "confirm", $$v)},expression:"model.confirm"}})],1),_c('u-form-item',[_c('u-button',[_vm._v("设置")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_2_1b381d_vue__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2745ce18_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_2_1b381d_vue__ = __webpack_require__(482);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_2_1b381d_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2745ce18_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_2_1b381d_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 481:
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

const checkUsername = function (username) {
    return new Promise((resolve, reject) => {
        if (['aaaa', 'abcd', '1234'].includes(username)) reject('该用户名已被使用');else resolve();
    });
};

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            rules: {
                username: [{ type: 'string', required: true, trigger: 'blur', message: '请输入用户名' }, { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' }, { type: 'string', required: true, trigger: 'blur', message: '该用户名已被使用', validator: (rule, value, callback) => {
                        checkUsername(value).then(() => callback()).catch(err => callback(new Error(err)));
                    } }]
            }
        };
    }
});

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-form',{attrs:{"rules":_vm.rules}},[_c('u-form-item',{attrs:{"label":"用户名","name":"username"}},[_c('u-input',{attrs:{"maxlength":"12","placeholder":"4~12个字符"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_3_78f0b7_vue__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_3d17c90c_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_3_78f0b7_vue__ = __webpack_require__(485);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_3_78f0b7_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_3d17c90c_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_3_78f0b7_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 484:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            rules: {
                username: [{ type: 'string', required: true, message: '请输入用户名' }, { type: 'string', min: 4, max: 12, message: '请输入4~12个字符' }],
                email: [{ type: 'string', required: true, message: '请输入邮箱' }, { type: 'email', message: '邮箱格式不正确' }]
            }
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate().then(() => alert('提交成功')).catch(() => {});
        }
    }
});

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-form',{ref:"form",attrs:{"rules":_vm.rules}},[_c('u-form-item',{attrs:{"label":"用户名","name":"username"}},[_c('u-input',{attrs:{"maxlength":"12","placeholder":"4~12个字符"}})],1),_c('u-form-item',{attrs:{"label":"邮箱","name":"email"}},[_c('u-input',{attrs:{"maxlength":"24","placeholder":"请输入邮箱"}})],1),_c('u-form-item',[_c('u-button',{attrs:{"color":"primary"},on:{"click":function($event){_vm.submit()}}},[_vm._v("提交")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_4_3f5ebf_vue__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_55d81a9a_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_4_3f5ebf_vue__ = __webpack_require__(488);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_4_3f5ebf_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_55d81a9a_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_4_3f5ebf_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 487:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            rules: {
                username: [{ type: 'string', required: true, trigger: 'blur', message: '请输入用户名' }, { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' }],
                email: [{ type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' }, { type: 'email', trigger: 'blur', message: '邮箱格式不正确' }]
            }
        };
    }
});

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-form',{ref:"form",attrs:{"rules":_vm.rules}},[_c('u-form-item',{attrs:{"label":"用户名","name":"username"}},[_c('u-input',{attrs:{"maxlength":"12","placeholder":"4~12个字符"}})],1),_c('u-form-item',{attrs:{"label":"邮箱","name":"email"}},[_c('u-input',{attrs:{"maxlength":"24","placeholder":"请输入邮箱"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_5_3a5f9a_vue__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_5a27fbcd_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_5_3a5f9a_vue__ = __webpack_require__(491);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_5_3a5f9a_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_5a27fbcd_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_5_3a5f9a_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 490:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            rules: {
                username: [{ type: 'string', required: true, trigger: 'blur', message: '请输入用户名' }, { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: '请输入4~12个字符' }],
                email: [{ type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' }, { type: 'email', trigger: 'input', message: '邮箱格式不正确' }]
            }
        };
    }
});

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-form',{ref:"form",attrs:{"rules":_vm.rules}},[_c('u-form-item',{attrs:{"label":"用户名","name":"username"}},[_c('u-input',{attrs:{"maxlength":"12","placeholder":"4~12个字符"}})],1),_c('u-form-item',{attrs:{"label":"邮箱","name":"email"}},[_c('u-input',{attrs:{"maxlength":"24","placeholder":"请输入邮箱"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_6_2a9b39_vue__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_bc3b1bba_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_6_2a9b39_vue__ = __webpack_require__(496);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(493);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_6_2a9b39_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_bc3b1bba_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_6_2a9b39_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(494);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("28f21692", content, true);

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "._3-2FxdbJjsObz9bw{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:18px;height:18px;line-height:16px;border:1px solid #ccc;text-align:center;color:#1abc9c}", ""]);

// exports
exports.locals = {
	"root": "_3-2FxdbJjsObz9bw"
};

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'e-checkbox'
});

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_vm._v("✓")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_7_a7ed6a_vue__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_a868faf4_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_7_a7ed6a_vue__ = __webpack_require__(501);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(498);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_7_a7ed6a_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_a868faf4_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_7_a7ed6a_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(499);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("79dbd890", content, true);

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "._3OvodpsKHyioeA15{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:18px;height:18px;line-height:16px;border:1px solid #ccc;text-align:center;color:#1abc9c}", ""]);

// exports
exports.locals = {
	"root": "_3OvodpsKHyioeA15"
};

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'e-checkbox',
    props: {
        value: { type: Boolean, default: true }
    }
});

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,on:{"click":function($event){_vm.value = !_vm.value}}},[_vm._v(_vm._s(_vm.value ? '✓' : ' '))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_8_01868c_vue__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6bd6e792_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_8_01868c_vue__ = __webpack_require__(506);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(503);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_8_01868c_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6bd6e792_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_8_01868c_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(504);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("920abad4", content, true);

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "._1IrwwQnHbRP9RqbK{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:18px;height:18px;line-height:16px;border:1px solid #ccc;text-align:center;color:#1abc9c}", ""]);

// exports
exports.locals = {
	"root": "_1IrwwQnHbRP9RqbK"
};

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'e-checkbox',
    props: {
        value: { type: Boolean, default: false }
    },
    data() {
        return {
            currentValue: this.value
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
        }
    }
});

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,on:{"click":function($event){_vm.currentValue = !_vm.currentValue}}},[_vm._v(_vm._s(_vm.currentValue ? '✓' : ' '))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_9_0ac978_vue__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_df4fca88_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_9_0ac978_vue__ = __webpack_require__(511);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(508);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_9_0ac978_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_df4fca88_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_9_0ac978_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(509);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("5a44a8c2", content, true);

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "._1x2Jsm5oqGVMkVYI{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:18px;height:18px;line-height:16px;border:1px solid #ccc;text-align:center;color:#1abc9c}", ""]);

// exports
exports.locals = {
	"checkbox": "_1x2Jsm5oqGVMkVYI"
};

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        'e-checkbox': {
            template: `<div @click="check()">{{ currentValue ? '✓' : '&nbsp;' }}</div>`,
            props: {
                value: { type: Boolean, default: false }
            },
            data() {
                return {
                    currentValue: this.value
                };
            },
            watch: {
                value(value) {
                    this.currentValue = value;
                }
            },
            methods: {
                check() {
                    const currentValue = this.currentValue = !this.currentValue;
                    this.$emit('input', currentValue);
                    this.$emit('update:value', currentValue);
                }
            }
        }
    },
    data() {
        return { checked: false };
    }
});

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_vm._v("复选框："),_c('e-checkbox',{class:_vm.$style.checkbox,model:{value:(_vm.checked),callback:function ($$v) {_vm.checked=$$v},expression:"checked"}})],1),_c('div',[_vm._v("绑定值："+_vm._s(_vm.checked))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_10_74a27d_vue__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_60a02276_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_10_74a27d_vue__ = __webpack_require__(516);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(513);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_10_74a27d_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_60a02276_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_10_74a27d_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(514);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("13a4cfd2", content, true);

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".U155ndJ_69PraE3n{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:18px;height:18px;line-height:16px;border:1px solid #ccc;text-align:center;color:#1abc9c}", ""]);

// exports
exports.locals = {
	"checkbox": "U155ndJ_69PraE3n"
};

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_proto_ui_vusion__ = __webpack_require__(67);
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        'e-checkbox': {
            mixins: [__WEBPACK_IMPORTED_MODULE_0_proto_ui_vusion__["Field"]],
            template: `<div @click="check()">{{ currentValue ? '✓' : '&nbsp;' }}</div>`,
            props: {
                value: { type: Boolean, default: false }
            },
            data() {
                return {
                    currentValue: this.value
                };
            },
            watch: {
                value(value) {
                    this.currentValue = value;
                }
            },
            methods: {
                check() {
                    const currentValue = this.currentValue = !this.currentValue;
                    this.$emit('input', currentValue);
                    this.$emit('update:value', currentValue);
                }
            }
        }
    },
    data() {
        return {
            rules: [{ type: 'boolean', required: true, trigger: 'input', message: '您还未接受服务条款', validator(rule, value, callback) {
                    value ? callback() : callback(new Error(false));
                } }]
        };
    }
});

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-form',{ref:"form"},[_c('u-form-item',{attrs:{"label":"复选框","required":"","rules":_vm.rules}},[_c('e-checkbox',{class:_vm.$style.checkbox}),_vm._v(" 同意并遵守服务条款\n    ")],1),_c('u-form-item',[_c('u-button',{attrs:{"color":"primary"},on:{"click":function($event){_vm.$refs.form.validate()}}},[_vm._v("提交")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_11_f2be93_vue__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_48fabaf6_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_11_f2be93_vue__ = __webpack_require__(521);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(518);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_11_f2be93_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_48fabaf6_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_11_f2be93_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(519);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7c37def8", content, true);

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "._3ho1bQ-V8DRWFYsj{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:18px;height:18px;line-height:16px;border:1px solid #ccc;text-align:center;color:#1abc9c}", ""]);

// exports
exports.locals = {
	"root": "_3ho1bQ-V8DRWFYsj"
};

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_proto_ui_vusion__ = __webpack_require__(67);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'e-checkbox',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_proto_ui_vusion__["Field"]],
    props: {
        value: { type: Boolean, default: false }
    },
    data() {
        return {
            currentValue: this.value
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
        }
    },
    methods: {
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
        check() {
            const currentValue = this.currentValue = !this.currentValue;
            this.$emit('input', currentValue);
            this.$emit('update:value', currentValue);
        }
    }
});

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root,attrs:{"tabindex":"0"},on:{"click":function($event){_vm.check()},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();},"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.preventDefault();_vm.check()},"focus":_vm.onFocus,"blur":_vm.onBlur}},[_vm._v(_vm._s(_vm.currentValue ? '✓' : ' '))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_12_383ae8_vue__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_245c9088_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_12_383ae8_vue__ = __webpack_require__(526);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(523);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_12_383ae8_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_245c9088_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_12_383ae8_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(524);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4a8e55a2", content, true);

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "._36NGT-hM-MCj9aud{width:60px}", ""]);

// exports
exports.locals = {
	"root": "DPaIz7vbSv9aCOL8",
	"input": "_36NGT-hM-MCj9aud"
};

/***/ }),

/***/ 525:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'e-ip-input'
});

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('u-input',{class:_vm.$style.input,attrs:{"maxlength":"3"}}),_vm._v(" .\n    "),_c('u-input',{class:_vm.$style.input,attrs:{"maxlength":"3"}}),_vm._v(" .\n    "),_c('u-input',{class:_vm.$style.input,attrs:{"maxlength":"3"}}),_vm._v(" .\n    "),_c('u-input',{class:_vm.$style.input,attrs:{"maxlength":"3"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_13_79e811_vue__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_277f9fb6_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_13_79e811_vue__ = __webpack_require__(531);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(528);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_13_79e811_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_277f9fb6_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_13_79e811_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(529);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a26ece9a", content, true);

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".PDSulDRBy8iMnW0S{width:60px}", ""]);

// exports
exports.locals = {
	"root": "_1rqWVskUVnYa5G2j",
	"input": "PDSulDRBy8iMnW0S"
};

/***/ }),

/***/ 530:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'e-ip-input',
    props: {
        value: String
    },
    data() {
        return {
            parts: []
        };
    },
    watch: {
        value(value) {
            this.parts = value.split('.');
        }
    }
});

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.$style.root},[_c('u-input',{class:_vm.$style.input,attrs:{"maxlength":"3"},model:{value:(_vm.parts[0]),callback:function ($$v) {_vm.$set(_vm.parts, 0, $$v)},expression:"parts[0]"}}),_vm._v(" .\n    "),_c('u-input',{class:_vm.$style.input,attrs:{"maxlength":"3"},model:{value:(_vm.parts[1]),callback:function ($$v) {_vm.$set(_vm.parts, 1, $$v)},expression:"parts[1]"}}),_vm._v(" .\n    "),_c('u-input',{class:_vm.$style.input,attrs:{"maxlength":"3"},model:{value:(_vm.parts[2]),callback:function ($$v) {_vm.$set(_vm.parts, 2, $$v)},expression:"parts[2]"}}),_vm._v(" .\n    "),_c('u-input',{class:_vm.$style.input,attrs:{"maxlength":"3"},model:{value:(_vm.parts[3]),callback:function ($$v) {_vm.$set(_vm.parts, 3, $$v)},expression:"parts[3]"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_14_21e125_vue__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_688ae432_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_14_21e125_vue__ = __webpack_require__(534);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_14_21e125_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_688ae432_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_14_21e125_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        'e-ip-input': {
            template: `<div style="display: inline-block">
                <u-input maxlength="3" v-model="parts[0]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[1]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[2]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[3]" @input="onInput()" style="width: 60px"></u-input>
            </div>`,
            props: {
                value: String
            },
            data() {
                return {
                    parts: []
                };
            },
            watch: {
                value(value) {
                    this.parts = value.split('.');
                }
            },
            methods: {
                onInput() {
                    const value = this.parts.join('.');

                    this.$emit('input', value);
                    this.$emit('update:value', value);
                }
            }
        }
    },
    data() {
        return { ip: undefined };
    }
});

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_vm._v("IP框："),_c('e-ip-input',{model:{value:(_vm.ip),callback:function ($$v) {_vm.ip=$$v},expression:"ip"}})],1),_c('div',[_vm._v("绑定值："+_vm._s(_vm.ip))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_15_96eb39_vue__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_41bb42ae_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_15_96eb39_vue__ = __webpack_require__(537);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_form_md_15_96eb39_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_41bb42ae_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_form_md_15_96eb39_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_proto_ui_vusion__ = __webpack_require__(67);
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    components: {
        'e-ip-input': {
            mixins: [__WEBPACK_IMPORTED_MODULE_0_proto_ui_vusion__["Field"]],
            template: `<div style="display: inline-block">
                <u-input maxlength="3" v-model="parts[0]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[1]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[2]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[3]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input>
            </div>`,
            props: {
                value: String
            },
            data() {
                return {
                    parts: []
                };
            },
            watch: {
                value(value) {
                    this.parts = value.split('.');
                }
            },
            methods: {
                onInput(partValue, index) {
                    const value = this.parts.join('.');

                    this.$emit('input', value);
                    this.$emit('update:value', value);
                },
                onChange() {
                    const value = this.parts.join('.');
                    this.$emit('change', {
                        value
                    });
                },
                onFocus(e) {
                    this.$emit('focus', e);
                },
                onBlur(e) {
                    this.$emit('blur', e);
                }
            }
        }
    },
    data() {
        return {
            model: {
                ip: undefined
            },
            rules: [{ type: 'string', required: true, trigger: 'blur', message: '请填写IP' }, { type: 'string', required: true, message: '请填写完整的IP', validator(rule, value, callback) {
                    const parts = value.split('.');
                    parts.length === 4 ? callback() : callback(new Error(''));
                } }, { type: 'string', required: true, trigger: 'input+blur', message: '请填写数字', validator(rule, value, callback) {
                    const parts = value.split('.');
                    parts.every(part => !isNaN(part) && part !== '') ? callback() : callback(new Error());
                } }, { type: 'string', required: true, trigger: 'input+blur', message: '请填写0-255的数字', validator(rule, value, callback) {
                    const parts = value.split('.');
                    parts.every(part => 0 <= part && part < 256) ? callback() : callback(new Error());
                } }]
        };
    }
});

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-form',{ref:"form"},[_c('u-form-item',{attrs:{"label":"IP地址","required":"","rules":_vm.rules}},[_c('e-ip-input',{model:{value:(_vm.model.ip),callback:function ($$v) {_vm.$set(_vm.model, "ip", $$v)},expression:"model.ip"}})],1),_c('u-form-item',[_c('u-button',{attrs:{"color":"primary"},on:{"click":function($event){_vm.$refs.form.validate().catch(function () {})}}},[_vm._v("提交")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("表单系列")]),_c('p',[_vm._v("一般来说，表单是Web应用中最常见，最重要，也是最复杂的交互形式之一，表单系列组件设计的好坏很大程度决定了整个应用实现的质量。")]),_c('p',[_vm._v("表单的布局样式比较统一，但会有许多如规则验证、数据比较、数据缓存等复杂的通用逻辑。由于原生表单元素样式简陋，功能单薄，对SPA不友好，不具备处理这些复杂问题的能力，因此必须在原生元素基础上作一层封装。")]),_c('h2',[_vm._v("相关组件")]),_c('h3',[_vm._v("示例")]),_c('p',[_vm._v("比如下面的例子是一个简单的填写个人信息的表单：")]),_c('div',{staticClass:"u-example"},[_c('u-form',[_c('u-form-item',{attrs:{"label":"性别"}},[_c('u-radios',{attrs:{"value":"男"}},[_c('u-radio',{attrs:{"label":"男"}},[_vm._v("男")]),_c('u-radio',{attrs:{"label":"女"}},[_vm._v("女")])],1)],1),_c('u-form-item',{attrs:{"label":"昵称","required":""}},[_c('u-input',{attrs:{"maxlength":"20","placeholder":"不得超过20个字符"}})],1),_c('u-form-item',{attrs:{"label":"手机","required":""}},[_c('u-input',{attrs:{"maxlength":"11","placeholder":"请输入手机号"}})],1),_c('u-form-item',{attrs:{"label":"自我介绍"}},[_c('u-textarea')],1),_c('u-form-item',[_c('u-button',{attrs:{"color":"primary"}},[_vm._v("提交")])],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"性别\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"男\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"男\"")]),_vm._v(">")]),_vm._v("男"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"女\"")]),_vm._v(">")]),_vm._v("女"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"昵称\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"20\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"不得超过20个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"手机\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"11\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入手机号\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"自我介绍\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-textarea")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("提交"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n")])]),_c('p',[_vm._v("根据日常经验，我们可以归纳出与表单相关的组件有以下几种：")]),_c('h4',[_vm._v("表单 Form")]),_c('p',[_vm._v("用于整体布局，集中设置属性，统一暴露事件和方法。")]),_c('h4',[_vm._v("表单组 FormGroup")]),_c('p',[_vm._v("针对表单项进行分组，主要用于布局，可能会有分组组件常见的折叠功能。")]),_c('h4',[_vm._v("表单项 FormItem")]),_c('p',[_vm._v("用于排列表单标签与控件的位置，必选提示，规则验证等。")]),_c('h4',[_vm._v("表单域（表单控件） Field")]),_c('p',[_vm._v("作为各种表单域（表单控件）的基类，用于触发FormItem的验证等功能。")]),_c('p',[_vm._v("比如常见的："),_c('code',{pre:true},[_vm._v("<u-input>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<u-select>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<u-radios>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<u-date-picker>")]),_vm._v("等。")]),_c('p',[_vm._v("页面上有很多组件，通常我们可以认为：")]),_c('blockquote',[_c('p',[_vm._v("如果一个组件可以通过表单对后端数据进行读写操作的，那么它就是一个"),_c('strong',[_vm._v("表单控件")]),_vm._v("。")])]),_c('h2',[_vm._v("功能设计")]),_c('h3',[_vm._v("布局")]),_c('p',[_vm._v("表单除了一般上面的纵向布局，某些情况也会有行内布局。")]),_c('div',{staticClass:"u-example"},[_c('u-form',{attrs:{"layout":"inline","label-size":"auto"}},[_c('u-form-item',{attrs:{"label":"状态"}},[_c('u-select',[_c('u-select-item',[_vm._v("创建中")]),_c('u-select-item',[_vm._v("成功")]),_c('u-select-item',[_vm._v("失败")])],1)],1),_c('u-form-item',{attrs:{"label":"用户名"}},[_c('u-input',{attrs:{"maxlength":"20","placeholder":"请输入用户名"}})],1),_c('u-form-item',{attrs:{"label":"手机"}},[_c('u-input',{attrs:{"maxlength":"11","placeholder":"请输入手机"}})],1),_c('u-form-item',[_c('u-button',{attrs:{"color":"primary"}},[_vm._v("查询")])],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"inline\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label-size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"auto\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"状态\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-select")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-select-item")]),_vm._v(">")]),_vm._v("创建中"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-select-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-select-item")]),_vm._v(">")]),_vm._v("成功"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-select-item")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-select-item")]),_vm._v(">")]),_vm._v("失败"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-select-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-select")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"20\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入用户名\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"手机\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"11\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入手机\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("查询"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n")])]),_c('p',[_c('code',{pre:true},[_vm._v("<u-form>")]),_vm._v("提供了一个"),_c('code',{pre:true},[_vm._v("layout")]),_vm._v("属性，它有两个可选值："),_c('code',{pre:true},[_vm._v("block")]),_vm._v("和"),_c('code',{pre:true},[_vm._v("inline")]),_vm._v("，以后还可能有其它的值。")]),_c('h3',[_vm._v("验证")]),_c('p',[_vm._v("表单验证是表单的核心功能。我们希望各个表单控件都可以统一走表单的验证流程，而不是额外编写代码。因此，设计组件的时候需考虑得尽可能通用和全面，它至少要包含以下功能：")]),_c('ul',[_c('li',[_vm._v("规则列表")]),_c('li',[_vm._v("规则扩充")]),_c('li',[_vm._v("异步验证")]),_c('li',[_vm._v("触发方式")])]),_c('p',[_vm._v("下面一一展开。")]),_c('h4',[_vm._v("规则列表")]),_c('p',[_vm._v("一个表单项的验证规则用一个对象来表示是不够的，因为往往不同的验证情况会有不同的提示消息和不同的触发方式。")]),_c('p',[_vm._v("比如下面的例子，一个用户名输入框的验证规则：")]),_c('ol',[_c('li',[_vm._v("必须输入用户名，失焦验证")]),_c('li',[_vm._v("以字母开头，实时验证")]),_c('li',[_vm._v("字母、数字或中划线组成，实时验证")]),_c('li',[_vm._v("以字母或数字结尾，失焦验证")]),_c('li',[_vm._v("4~12个字符，失焦验证")])]),_c('p',[_vm._v("我们必须用一个有序列表"),_c('code',{pre:true},[_vm._v("rules")]),_vm._v("来表示，列表中包含若干条验证规则对象。结构如下：")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-javascript"}},[_c('code',{attrs:{"v-pre":""}},[_vm._v("[{ "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", ... }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", ... }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("pattern")]),_vm._v(": ... }, ...]\n")])]),_c('p',[_vm._v("每条规则对象通常有以下几个参数：")]),_c('ul',[_c('li',[_c('code',{pre:true},[_vm._v("type")]),_vm._v("：数据类型")]),_c('li',[_c('code',{pre:true},[_vm._v("trigger")]),_vm._v("：触发方式")]),_c('li',[_c('code',{pre:true},[_vm._v("message")]),_vm._v("：验证不通过时的消息提示")]),_c('li',[_vm._v("...")])]),_c('p',[_vm._v("上面提到的例子可以用下面的规则列表来表示：")]),_c('div',{staticClass:"u-example"},[_c('u-form-item',{attrs:{"label":"用户名","rules":[
    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },
    { type: 'string', pattern: /^[a-zA-Z]/, trigger: 'input+blur', message: '以字母开头' },
    { type: 'string', pattern: /^[a-zA-Z0-9-]+$/, trigger: 'input+blur', message: '字母、数字或中划线组成' },
    { type: 'string', pattern: /[a-zA-Z0-9]$/, trigger: 'blur', message: '以字母或数字结尾' },
    { type: 'string', min: 4, trigger: 'blur', message: '不得少于4个字符' } ]}},[_c('u-input',{attrs:{"maxlength":"112","placeholder":"4~12位字母、数字或中划线组成"}})],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"[\n    { type: 'string', required: true, trigger: 'blur', message: '请输入用户名' },\n    { type: 'string', pattern: /^[a-zA-Z]/, trigger: 'input+blur', message: '以字母开头' },\n    { type: 'string', pattern: /^[a-zA-Z0-9-]+$/, trigger: 'input+blur', message: '字母、数字或中划线组成' },\n    { type: 'string', pattern: /[a-zA-Z0-9]$/, trigger: 'blur', message: '以字母或数字结尾' },\n    { type: 'string', min: 4, trigger: 'blur', message: '不得少于4个字符' },\n]\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"112\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12位字母、数字或中划线组成\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n")])]),_c('h5',[_vm._v("多字段的规则列表")]),_c('p',[_vm._v("一个表单经常需要给的多个字段添加规则列表。为了方便，我们支持在"),_c('code',{pre:true},[_vm._v("<u-form>")]),_vm._v("中汇总传入，通过"),_c('code',{pre:true},[_vm._v("<u-form-item>")]),_vm._v("的"),_c('code',{pre:true},[_vm._v("name")]),_vm._v("属性来区别。")]),_c('div',{staticClass:"u-example"},[_c('Caf357d')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"邮箱\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"email\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"24\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入邮箱\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入邮箱'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'邮箱格式不正确'")]),_vm._v(" },\n                ],\n            },\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("规则扩充和异步验证")]),_c('p',[_vm._v("我们使用了"),_c('u-link',{attrs:{"href":"https://github.com/yiminghe/async-validator"}},[_vm._v("async-validator")]),_vm._v("这个库，基本可以满足这两项功能。")],1),_c('p',[_vm._v("比如下面的例子是关于自定义规则的，判断两次输入的密码是否一致：")]),_c('div',{staticClass:"u-example"},[_c('Cf14b93')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"密码\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"password\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"password\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.password\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"确认密码\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"confirm\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"password\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.confirm\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"6~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("设置"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("password")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("confirm")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n            },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("password")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入密码'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("6")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'6~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("confirm")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'两次输入的密码不一致'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("validator")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-function"}},[_vm._v("("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("rule, value, callback")]),_vm._v(") =>")]),_vm._v(" {\n                        value === "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".model.password ? callback() : callback("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Error")]),_vm._v("());\n                    } },\n                ],\n            },\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('p',[_vm._v("下面的例子是关于异步验证的，判断用户名是否已被使用，尝试输入“aaaa”：")]),_c('div',{staticClass:"u-example"},[_c('C1b381d')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" checkUsername = "),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("function")]),_vm._v(" ("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("username")]),_vm._v(") ")]),_vm._v("{\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Promise")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-function"}},[_vm._v("("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("resolve, reject")]),_vm._v(") =>")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("if")]),_vm._v(" (["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'aaaa'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'abcd'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'1234'")]),_vm._v("].includes(username))\n            reject("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'该用户名已被使用'")]),_vm._v(");\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("else")]),_vm._v("\n            resolve();\n    });\n};\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'该用户名已被使用'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("validator")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-function"}},[_vm._v("("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("rule, value, callback")]),_vm._v(") =>")]),_vm._v(" {\n                        checkUsername(value)\n                            .then("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" callback())\n                            .catch("),_c('span',{attrs:{"class":"hljs-function"}},[_vm._v("("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("err")]),_vm._v(") =>")]),_vm._v(" callback("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Error")]),_vm._v("(err)));\n                    } },\n                ],\n            },\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("触发方式")]),_c('p',[_vm._v("表单验证行为按照实时性通常可以分为三种：提交验证、失焦验证、实时验证，分别对应验证规则"),_c('code',{pre:true},[_vm._v("trigger")]),_vm._v("的三种触发方式："),_c('code',{pre:true},[_vm._v("submit")]),_vm._v(", "),_c('code',{pre:true},[_vm._v("blur")]),_vm._v(", "),_c('code',{pre:true},[_vm._v("input")]),_vm._v("，规则中默认为"),_c('code',{pre:true},[_vm._v("submit")]),_vm._v("。")]),_c('p',[_vm._v("另外还有一种行为叫表单限制，不属于表单验证，但通常与之配合使用。")]),_c('h5',[_vm._v("提交验证")]),_c('p',[_vm._v("点击表单提交按钮时才对表单中所有控件进行验证，通常对应submit按钮的"),_c('code',{pre:true},[_vm._v("click")]),_vm._v("事件。示例如下：")]),_c('div',{staticClass:"u-example"},[_c('C78f0b7')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"邮箱\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"email\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"24\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入邮箱\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"submit()\"")]),_vm._v(">")]),_vm._v("提交"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入邮箱'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'邮箱格式不正确'")]),_vm._v(" },\n                ],\n            },\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        submit() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.form.validate()\n                .then("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" alert("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'提交成功'")]),_vm._v("))\n                .catch("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" {});\n        },\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h5',[_vm._v("失焦验证")]),_c('p',[_vm._v("在表单控件失去焦点时对该控件进行验证，通常对应表单控件的"),_c('code',{pre:true},[_vm._v("blur")]),_vm._v("事件。示例如下：")]),_c('div',{staticClass:"u-example"},[_c('C3f5ebf')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"邮箱\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"email\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"24\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入邮箱\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入邮箱'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'邮箱格式不正确'")]),_vm._v(" },\n                ],\n            },\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h5',[_vm._v("实时验证")]),_c('p',[_vm._v("在表单控件的值实时输入改变时，对该控件进行验证，通常对应表单的"),_c('code',{pre:true},[_vm._v("input")]),_vm._v("事件。当只激活实时验证时，失焦验证会跳过此规则并且覆盖原来的结果，因此通常我们需要采用实时与失焦叠加的方式"),_c('code',{pre:true},[_vm._v("input+blur")]),_vm._v("。")]),_c('p',[_vm._v("下面的例子中，对用户名长度和邮箱格式的判断为实时验证。其中邮箱的验证没有采用实时与失焦叠加的方式，可以发现这种方式不是很合理。")]),_c('div',{staticClass:"u-example"},[_c('C3a5f9a')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"邮箱\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"email\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"24\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入邮箱\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input+blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入邮箱'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'邮箱格式不正确'")]),_vm._v(" },\n                ],\n            },\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h5',[_vm._v("表单限制")]),_c('p',[_vm._v("在表单控件的值改变时，对该值限制在规定的长度、范围或者格式内，如"),_c('code',{pre:true},[_vm._v("<input>")]),_vm._v("控件的部分"),_c('code',{pre:true},[_vm._v("type")]),_vm._v("和"),_c('code',{pre:true},[_vm._v("maxlength")]),_vm._v("的限制行为等：")]),_c('div',{staticClass:"u-example"},[_c('u-form',[_c('u-form-item',{attrs:{"label":"用户名"}},[_c('u-input',{attrs:{"maxlength":"4","placeholder":"不超过4个字符"}})],1)],1)],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"不超过4个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n")])]),_c('p',[_vm._v("关于限制格式，我们之后计划给"),_c('code',{pre:true},[_vm._v("<u-input>")]),_vm._v("实现一个"),_c('code',{pre:true},[_vm._v("format")]),_vm._v("属性。")]),_c('h3',[_vm._v("数据比较")]),_c('h3',[_vm._v("数据缓存")]),_c('h2',[_vm._v("扩充控件")]),_c('p',[_c('code',{pre:true},[_vm._v("<u-form>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<u-form-group>")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("<u-form>")]),_vm._v("三种组件构成一个基本的表单体系，在大部分场景可以直接使用，不需要做扩展。而表单控件在业务中是多样的，原型组件库不可能完全覆盖，有很多需要自行设计。")]),_c('p',[_vm._v("下面会讲述，如何设计表单控件，接入到Vusion的表单体系中，从而可以统一走表单的规则验证、事件处理等通道，无需额外处理。")]),_c('h3',[_vm._v("简单示例")]),_c('p',[_vm._v("我们先拿一个最简单的表单控件——复选框"),_c('code',{pre:true},[_vm._v("<e-checkbox>")]),_vm._v("来举例。")]),_c('h4',[_vm._v("结构和样式")]),_c('p',[_vm._v("首先可以很快实现它的结构和样式。")]),_c('div',{staticClass:"u-example"},[_c('C2a9b39')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.root\"")]),_vm._v(">")]),_vm._v("✓"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'e-checkbox'")]),_vm._v(",\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".root")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("display")]),_vm._v(": inline-block;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("user-select")]),_vm._v(": none;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("line-height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("16px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("border")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1px")]),_vm._v(" solid "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#ccc")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("text-align")]),_vm._v(": center;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("color")]),_vm._v(": $brand-primary;\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("属性")]),_c('p',[_vm._v("每个表单控件总有一个核心属性，通常用于绑定数据，比如：")]),_c('ul',[_c('li',[_c('code',{pre:true},[_vm._v("<u-checkbox>")]),_vm._v("可以有一个表示选中状态的"),_c('code',{pre:true},[_vm._v("checked")]),_vm._v("属性")]),_c('li',[_c('code',{pre:true},[_vm._v("<u-date-picker>")]),_vm._v("可以有一个表示日期的"),_c('code',{pre:true},[_vm._v("date")]),_vm._v("属性")]),_c('li',[_c('code',{pre:true},[_vm._v("<u-number-input>")]),_vm._v("可以有一个表示数字的"),_c('code',{pre:true},[_vm._v("number")]),_vm._v("属性")])]),_c('p',[_vm._v("但在Vusion中，我们推荐统一使用"),_c('code',{pre:true},[_vm._v("value")]),_vm._v("属性来处理，因为：")]),_c('ul',[_c('li',[_vm._v("经常有对表单控件做统一处理的情形，比如有的时候你可能需要遍历："),_c('code',{pre:true},[_vm._v("form.fields.map((field) => field.value)")])]),_c('li',[_vm._v("为了与Vue的"),_c('code',{pre:true},[_vm._v("v-model")]),_vm._v("保持一致（虽然它也支持自定义）")]),_c('li',[_vm._v("有时实在想不出什么好的名字，不如直接用"),_c('code',{pre:true},[_vm._v("value")]),_vm._v("也不显得混乱")])]),_c('p',[_vm._v("因此，我们给上面的示例添加属性：")]),_c('div',{staticClass:"u-example"},[_c('Ca7ed6a')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.root\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"value = !value\"")]),_vm._v(">")]),_vm._v("{{ value ? '✓' : '&nbsp;' }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'e-checkbox'")]),_vm._v(",\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("props")]),_vm._v(": {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Boolean")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("default")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(" },\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".root")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("display")]),_vm._v(": inline-block;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("user-select")]),_vm._v(": none;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("line-height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("16px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("border")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1px")]),_vm._v(" solid "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#ccc")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("text-align")]),_vm._v(": center;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("color")]),_vm._v(": $brand-primary;\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("单向流与双向绑定")]),_c('p',[_vm._v("熟悉Vue的童鞋都知道，Vue2.x为了保证单向数据流，放弃了1.x的双向绑定机制。这是好事，因为不用担心内部组件悄悄地改变父组件的状态。")]),_c('p',[_vm._v("但与此同时，也给我们的组件设计稍微带来点不便：对于一个属性，我们往往需要两个变量来维护。")]),_c('p',[_vm._v("比如在上面的例子中，我们只有一个prop，当点击复选框时，Vue却不允许修改这个属性。所以我们还需要一个data变量来维护实际的内部状态。")]),_c('h5',[_vm._v("命名规范")]),_c('p',[_vm._v("这里就牵扯到一个命名规范了。prop中一个"),_c('code',{pre:true},[_vm._v("value")]),_vm._v("，data中一个"),_c('code',{pre:true},[_vm._v("value")]),_vm._v("，名字重复，怎么定义比较好？")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-javascript"}},[_c('code',{attrs:{"v-pre":""}},[_vm._v("{\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("props")]),_vm._v(": {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Boolean")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("default")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(" },\n    },\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(" };\n    },\n}\n")])]),_c('p',[_vm._v("首先，"),_c('code',{pre:true},[_vm._v("value")]),_vm._v("和"),_c('code',{pre:true},[_vm._v("_value")]),_vm._v("是不行的，因为Vue不会对"),_c('code',{pre:true},[_vm._v("_")]),_vm._v("开头的变量做依赖管理。然后，有的组件库中是用"),_c('code',{pre:true},[_vm._v("initValue")]),_vm._v("或者"),_c('code',{pre:true},[_vm._v("defaultValue")]),_vm._v("来表示prop，用"),_c('code',{pre:true},[_vm._v("value")]),_vm._v("来表示data，我认为这样也不合理，因为prop也是会变的，不一定是一个默认值或初始值。")]),_c('p',[_vm._v("我们更倾向组件暴露的API简洁友好，所以还是决定对data下手。Vusion中规定与prop相关的那个data变量，在前面加上"),_c('code',{pre:true},[_vm._v("current")]),_vm._v("前缀，表示当前的一种状态。比如"),_c('code',{pre:true},[_vm._v("currentValue")]),_vm._v("变量对应"),_c('code',{pre:true},[_vm._v("value")]),_vm._v("属性，"),_c('code',{pre:true},[_vm._v("currentPage")]),_vm._v("变量对应"),_c('code',{pre:true},[_vm._v("page")]),_vm._v("属性，"),_c('code',{pre:true},[_vm._v("currentExpanded")]),_vm._v("变量对应"),_c('code',{pre:true},[_vm._v("expanded")]),_vm._v("属性等。")]),_c('h5',[_vm._v("监听属性")]),_c('p',[_vm._v("这里需要注意的是，当变成两个变量的时候，外部传入的状态与内部状态分离，也就是说内部状态不会响应外部状态的变更。这时需要一个额外的watcher来处理。")]),_c('p',[_vm._v("考虑到这几点，示例修改为下面的形式：")]),_c('div',{staticClass:"u-example"},[_c('C01868c')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.root\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"currentValue = !currentValue\"")]),_vm._v(">")]),_vm._v("{{ currentValue ? '✓' : '&nbsp;' }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'e-checkbox'")]),_vm._v(",\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("props")]),_vm._v(": {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Boolean")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("default")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n    },\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("currentValue")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".value,\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("watch")]),_vm._v(": {\n        value(value) {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".currentValue = value;\n        },\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".root")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("display")]),_vm._v(": inline-block;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("user-select")]),_vm._v(": none;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("line-height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("16px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("border")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1px")]),_vm._v(" solid "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#ccc")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("text-align")]),_vm._v(": center;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("color")]),_vm._v(": $brand-primary;\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('h5',[_vm._v("双向绑定")]),_c('p',[_vm._v("最后，为了让组件使用起来更方便，Vue2提供了"),_c('code',{pre:true},[_vm._v("v-model")]),_vm._v("和"),_c('code',{pre:true},[_vm._v(".sync")]),_vm._v("两种双向绑定语法糖，只需添加两个事件即可。")]),_c('p',[_c('em',[_vm._v("下面的例子为了让大家更好地观察双向绑定，将"),_c('code',{pre:true},[_vm._v("<e-checkbox>")]),_vm._v("组件的代码放入了components中。")])]),_c('div',{staticClass:"u-example"},[_c('C0ac978')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("复选框："),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("e-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.checkbox\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"checked\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("e-checkbox")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("绑定值：{{ checked }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"actionscript"}},[_vm._v("\nexport "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    components: {\n        "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'e-checkbox'")]),_vm._v(": {\n            template: `<div @click="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"check()\"")]),_vm._v(">{{ currentValue ? "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'✓'")]),_vm._v(" : "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'&nbsp;'")]),_vm._v(" }}</div>`,\n            props: {\n                value: { type: Boolean, "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n            },\n            data() {\n                "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n                    currentValue: "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".value,\n                };\n            },\n            watch: {\n                value(value) {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".currentValue = value;\n                },\n            },\n            methods: {\n                check() {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" currentValue = "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".currentValue = !"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".currentValue;\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(", currentValue);\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'update:value'")]),_vm._v(", currentValue);\n                }\n            },\n        },\n    },\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" { checked: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".checkbox")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("display")]),_vm._v(": inline-block;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("user-select")]),_vm._v(": none;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("line-height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("16px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("border")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1px")]),_vm._v(" solid "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#ccc")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("text-align")]),_vm._v(": center;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("color")]),_vm._v(": $brand-primary;\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("继承Field")]),_c('p',[_vm._v("到目前为止，我们仅仅是描述了如何按规范实现了一个表单控件，但还没有与Vusion的表单体系联系在一起。")]),_c('p',[_vm._v("有关触发验证等功能已经封装在"),_c('code',{pre:true},[_vm._v("<u-field>")]),_vm._v("这个基类组件（或叫Mixin）中了，我们要做的只需继承一下它即可。")]),_c('p',[_vm._v("下面是一个很简单的复选框与表单验证相关的例子——验证是否同意了服务条款。")]),_c('div',{staticClass:"u-example"},[_c('C74a27d')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"复选框\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("e-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.checkbox\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("e-checkbox")]),_vm._v(">")]),_vm._v(" 同意并遵守服务条款\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$refs.form.validate()\"")]),_vm._v(">")]),_vm._v("提交"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Field } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'proto-ui.vusion'")]),_vm._v(";\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n        "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'e-checkbox'")]),_vm._v(": {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("mixins")]),_vm._v(": [Field],\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("template")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("`<div @click=\"check()\">{{ currentValue ? '✓' : '&nbsp;' }}</div>`")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("props")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Boolean")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("default")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n            },\n            data() {\n                "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n                    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("currentValue")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".value,\n                };\n            },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("watch")]),_vm._v(": {\n                value(value) {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".currentValue = value;\n                },\n            },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n                check() {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" currentValue = "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".currentValue = !"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".currentValue;\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(", currentValue);\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'update:value'")]),_vm._v(", currentValue);\n                }\n            },\n        },\n    },\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": [\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'boolean'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'您还未接受服务条款'")]),_vm._v(", validator(rule, value, callback) {\n                    value ? callback() : callback("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Error")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("));\n                } },\n            ],\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".checkbox")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("display")]),_vm._v(": inline-block;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("user-select")]),_vm._v(": none;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("line-height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("16px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("border")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1px")]),_vm._v(" solid "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#ccc")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("text-align")]),_vm._v(": center;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("color")]),_vm._v(": $brand-primary;\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("事件")]),_c('p',[_vm._v("上面我们只抛了一个"),_c('code',{pre:true},[_vm._v("input")]),_vm._v("事件。为了保证功能实现的完整性与一致性，对于一个表单控件，我们最好暴露这4种事件："),_c('code',{pre:true},[_vm._v("input")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("change")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("focus")]),_vm._v("和"),_c('code',{pre:true},[_vm._v("blur")]),_vm._v("。")]),_c('p',[_vm._v("对于组件中有focusable的元素，我们照着抛出来就行；如果没有的话，我们可以用"),_c('code',{pre:true},[_vm._v("tabindex")]),_vm._v("来设置。")]),_c('div',{staticClass:"u-example"},[_c('Cf2be93')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.root\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"check()\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("tabindex")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"0\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@keydown.space.prevent")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@keyup.space.prevent")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"check()\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@focus")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onFocus\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@blur")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onBlur\"")]),_vm._v("\n>")]),_vm._v("{{ currentValue ? '✓' : '&nbsp;' }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Field } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'proto-ui.vusion'")]),_vm._v(";\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'e-checkbox'")]),_vm._v(",\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("mixins")]),_vm._v(": [Field],\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("props")]),_vm._v(": {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Boolean")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("default")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(" },\n    },\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("currentValue")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".value,\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("watch")]),_vm._v(": {\n        value(value) {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".currentValue = value;\n        },\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        onFocus(e) {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'focus'")]),_vm._v(", e);\n        },\n        onBlur(e) {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", e);\n        },\n        check() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" currentValue = "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".currentValue = !"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".currentValue;\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(", currentValue);\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'update:value'")]),_vm._v(", currentValue);\n        }\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".root")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("display")]),_vm._v(": inline-block;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("user-select")]),_vm._v(": none;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("18px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("line-height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("16px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("border")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1px")]),_vm._v(" solid "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#ccc")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("text-align")]),_vm._v(": center;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("color")]),_vm._v(": $brand-primary;\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("复杂示例")]),_c('p',[_vm._v("再举一个复杂一点的例子，假设我们需要一个用户填写IP的表单控件"),_c('code',{pre:true},[_vm._v("<e-ip-input>")]),_vm._v("，表单提交时要求验证IP格式的正确性。")]),_c('h4',[_vm._v("结构和样式")]),_c('p',[_vm._v("同样，可以很快产出这个组件的结构和样式。")]),_c('div',{staticClass:"u-example"},[_c('C383ae8')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.root\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.input\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v(" .\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.input\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v(" .\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.input\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v(" .\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.input\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'e-ip-input'")]),_vm._v(",\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".root")]),_vm._v(" {}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".input")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("60px")]),_vm._v(";\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("属性")]),_c('p',[_vm._v("根据之前的约定，核心属性我们取"),_c('code',{pre:true},[_vm._v("value")]),_vm._v("而不是"),_c('code',{pre:true},[_vm._v("ip")]),_vm._v("。")]),_c('div',{staticClass:"u-example"},[_c('C79e811')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.root\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.input\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[0]\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v(" .\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.input\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[1]\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v(" .\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.input\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[2]\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v(" .\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.input\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[3]\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'e-ip-input'")]),_vm._v(",\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("props")]),_vm._v(": {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("String")]),_vm._v("\n    },\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("parts")]),_vm._v(": [],\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("watch")]),_vm._v(": {\n        value(value) {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".parts = value.split("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'.'")]),_vm._v(");\n        },\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".root")]),_vm._v(" {}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".input")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("60px")]),_vm._v(";\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("单向流与双向绑定")]),_c('p',[_c('em',[_vm._v("下面的例子为了让大家更好地观察双向绑定，将"),_c('code',{pre:true},[_vm._v("<e-checkbox>")]),_vm._v("组件的代码放入了components中。")])]),_c('div',{staticClass:"u-example"},[_c('C21e125')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("IP框："),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("e-ip-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"ip\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("e-ip-input")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("绑定值：{{ ip }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"actionscript"}},[_vm._v("\nexport "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    components: {\n        "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'e-ip-input'")]),_vm._v(": {\n            template: `<div style="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"display: inline-block\"")]),_vm._v(">\n                <u-input maxlength="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" v-model="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[0]\"")]),_vm._v(" @input="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onInput()\"")]),_vm._v(" style="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 60px\"")]),_vm._v("></u-input> .\n                <u-input maxlength="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" v-model="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[1]\"")]),_vm._v(" @input="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onInput()\"")]),_vm._v(" style="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 60px\"")]),_vm._v("></u-input> .\n                <u-input maxlength="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" v-model="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[2]\"")]),_vm._v(" @input="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onInput()\"")]),_vm._v(" style="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 60px\"")]),_vm._v("></u-input> .\n                <u-input maxlength="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" v-model="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[3]\"")]),_vm._v(" @input="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onInput()\"")]),_vm._v(" style="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 60px\"")]),_vm._v("></u-input>\n            </div>`,\n            props: {\n                value: String\n            },\n            data() {\n                "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n                    parts: [],\n                };\n            },\n            watch: {\n                value(value) {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".parts = value.split("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'.'")]),_vm._v(");\n                },\n            },\n            methods: {\n                onInput() {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" value = "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".parts.join("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'.'")]),_vm._v(");\n\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(", value);\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'update:value'")]),_vm._v(", value);\n                },\n            },\n        },\n    },\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" { ip: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("undefined")]),_vm._v(" };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("继承Field并补全事件")]),_c('div',{staticClass:"u-example"},[_c('C96eb39')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"IP地址\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("e-ip-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.ip\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("e-ip-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$refs.form.validate().catch(() => {})\"")]),_vm._v(">")]),_vm._v("提交"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"actionscript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-meta"}},[_c('span',{attrs:{"class":"hljs-meta-keyword"}},[_vm._v("import")]),_vm._v(" { Field } from 'proto-ui.vusion';")]),_vm._v("\n\nexport "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    components: {\n        "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'e-ip-input'")]),_vm._v(": {\n            mixins: [Field],\n            template: `<div style="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"display: inline-block\"")]),_vm._v(">\n                <u-input maxlength="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" v-model="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[0]\"")]),_vm._v("\n                    @input="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onInput()\"")]),_vm._v(" @change="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onChange()\"")]),_vm._v(" @focus="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onFocus($event)\"")]),_vm._v(" @blur="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onBlur($event)\"")]),_vm._v("\n                    style="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 60px\"")]),_vm._v("\n                ></u-input> .\n                <u-input maxlength="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" v-model="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[1]\"")]),_vm._v("\n                    @input="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onInput()\"")]),_vm._v(" @change="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onChange()\"")]),_vm._v(" @focus="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onFocus($event)\"")]),_vm._v(" @blur="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onBlur($event)\"")]),_vm._v("\n                    style="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 60px\"")]),_vm._v("\n                ></u-input> .\n                <u-input maxlength="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" v-model="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[2]\"")]),_vm._v("\n                    @input="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onInput()\"")]),_vm._v(" @change="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onChange()\"")]),_vm._v(" @focus="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onFocus($event)\"")]),_vm._v(" @blur="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onBlur($event)\"")]),_vm._v("\n                    style="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 60px\"")]),_vm._v("\n                ></u-input> .\n                <u-input maxlength="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" v-model="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"parts[3]\"")]),_vm._v("\n                    @input="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onInput()\"")]),_vm._v(" @change="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onChange()\"")]),_vm._v(" @focus="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onFocus($event)\"")]),_vm._v(" @blur="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onBlur($event)\"")]),_vm._v("\n                    style="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"width: 60px\"")]),_vm._v("\n                ></u-input>\n            </div>`,\n            props: {\n                value: String\n            },\n            data() {\n                "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n                    parts: [],\n                };\n            },\n            watch: {\n                value(value) {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".parts = value.split("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'.'")]),_vm._v(");\n                },\n            },\n            methods: {\n                onInput(partValue, index) {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" value = "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".parts.join("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'.'")]),_vm._v(");\n\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(", value);\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'update:value'")]),_vm._v(", value);\n                },\n                onChange() {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" value = "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".parts.join("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'.'")]),_vm._v(");\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'change'")]),_vm._v(", {\n                        value,\n                    });\n                },\n                onFocus(e) {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'focus'")]),_vm._v(", e);\n                },\n                onBlur(e) {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$emit("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", e);\n                },\n            },\n        },\n    },\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            model: {\n                ip: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("undefined")]),_vm._v(",\n            },\n            rules: [\n                { type: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", required: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", trigger: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", message: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请填写IP'")]),_vm._v(" },\n                { type: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", required: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", message: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请填写完整的IP'")]),_vm._v(", validator(rule, value, callback) {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" parts = value.split("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'.'")]),_vm._v(");\n                    parts.length === "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(" ? callback() : callback("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("new")]),_vm._v(" Error("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v("));\n                } },\n                { type: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", required: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", trigger: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input+blur'")]),_vm._v(", message: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请填写数字'")]),_vm._v(", validator(rule, value, callback) {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" parts = value.split("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'.'")]),_vm._v(");\n                    parts.every((part) => !isNaN(part) && part !== "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(") ? callback() : callback("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("new")]),_vm._v(" Error());\n                } },\n                { type: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", required: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", trigger: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input+blur'")]),_vm._v(", message: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请填写0-255的数字'")]),_vm._v(", validator(rule, value, callback) {\n                    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("const")]),_vm._v(" parts = value.split("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'.'")]),_vm._v(");\n                    parts.every((part) => "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v(" <= part && part < "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("256")]),_vm._v(") ? callback() : callback("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("new")]),_vm._v(" Error());\n                } },\n            ]\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("FAQ")]),_c('h4',[_vm._v("为什么要将验证逻辑放在"),_c('code',{pre:true},[_vm._v("<u-form-item>")]),_vm._v("而不是"),_c('code',{pre:true},[_vm._v("<u-field>")]),_vm._v("中？")]),_c('p',[_vm._v("验证有一部分功能\b是关于消息提示的，这牵扯到模板的实现。如果验证逻辑放在"),_c('code',{pre:true},[_vm._v("<u-field>")]),_vm._v("中，那么就要求每个子类的模板都要实现这部分功能。一个组件最好只干一件事情，所以我们把它划到了"),_c('code',{pre:true},[_vm._v("<u-form-item>")]),_vm._v("中，虽然要添加一些组件间的通信逻辑，但这些都是必要的。")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});