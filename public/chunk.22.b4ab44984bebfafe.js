/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([22],{

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

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_Vusion_vusion_cli_node_modules_vue_md_loader_index_js_ref_5_1_README_md__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_21594c47_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_Vusion_vusion_cli_node_modules_vue_md_loader_index_js_ref_5_1_README_md__ = __webpack_require__(494);
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
  __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_21594c47_hasScoped_false_preserveWhitespace_false_buble_transforms_Vusion_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_Vusion_vusion_cli_node_modules_vue_md_loader_index_js_ref_5_1_README_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 493:
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


/* harmony default export */ __webpack_exports__["a"] = ({ components: { 'anonymous-98067d0e': { "template": "<div class=\"u-example\"><u-form><u-form-item label=\"计费方式\"><u-radios value=\"按量付费\"><u-radio label=\"资源包\">资源包</u-radio><u-radio label=\"按量付费\">按量付费</u-radio></u-radios></u-form-item><u-form-item label=\"实例名称\"><u-input maxlength=\"63\" placeholder=\"由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾\"></u-input></u-form-item><u-form-item label=\"端口号\"><u-input maxlength=\"5\" placeholder=\"1150-65535\" value=\"3306\"></u-input></u-form-item><u-form-item label=\"详情\"><u-textarea></u-textarea></u-form-item><u-form-item><u-button color=\"primary\">立即创建</u-button></u-form-item></u-form></div>" }, 'anonymous-4c90436a': { "template": "<div class=\"u-example\"><u-form layout=\"inline\" label-size=\"auto\"><u-form-item label=\"状态\"><u-input maxlength=\"63\" placeholder=\"认证中\"></u-input></u-form-item><u-form-item label=\"用户名\"><u-input maxlength=\"63\" placeholder=\"请输入用户名\"></u-input></u-form-item><u-form-item label=\"联系号码\"><u-input maxlength=\"63\" placeholder=\"请输入联系号码\"></u-input></u-form-item><u-form-item><u-button color=\"primary\">查询</u-button></u-form-item></u-form></div>" }, 'anonymous-1789349a': { "template": "<div class=\"u-example\">[{ type: 'string', required: true, ... }, { type: 'string', min: ... }, { type: 'string', pattern: ... }, ...]</div>" }, 'anonymous-1ca9bab3': { "template": "<div class=\"u-example\"><u-form-item label=\"用户名\" :rules=\"rules\"><u-input maxlength=\"112\" placeholder=\"4~12位字母、数字或中划线组成\"></u-input></u-form-item></div>",
            data() {
                return {
                    rules: [{ type: 'string', required: true, trigger: 'blur', message: '请输入用户名' }, { type: 'string', pattern: /^[a-zA-Z]/, trigger: 'input+blur', message: '以字母开头' }, { type: 'string', pattern: /^[a-zA-Z0-9-]+$/, trigger: 'input+blur', message: '字母、数字或中划线组成' }, { type: 'string', pattern: /[a-zA-Z0-9]$/, trigger: 'blur', message: '以字母或数字结尾' }, { type: 'string', min: 4, trigger: 'blur', message: '不得少于4个字符' }]
                };
            }
        }, 'anonymous-55d81a9a': { "template": "<div class=\"u-example\"><u-form ref=\"form\" :rules=\"rules\"><u-form-item label=\"用户名\" name=\"username\"><u-input maxlength=\"12\" placeholder=\"4~12个字符\"></u-input></u-form-item><u-form-item label=\"邮箱\" name=\"email\"><u-input maxlength=\"24\" placeholder=\"请输入邮箱\"></u-input></u-form-item></u-form></div>",
            data() {
                return {
                    rules: {
                        username: [{ type: 'string', required: true, trigger: 'blur', message: '请输入用户名' }, { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' }],
                        email: [{ type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' }, { type: 'email', trigger: 'blur', message: '邮箱格式不正确' }]
                    }
                };
            }
        }, 'anonymous-3d17c90c': { "template": "<div class=\"u-example\"><u-form ref=\"form\" :rules=\"rules\"><u-form-item label=\"用户名\" name=\"username\"><u-input maxlength=\"12\" placeholder=\"4~12个字符\"></u-input></u-form-item><u-form-item label=\"邮箱\" name=\"email\"><u-input maxlength=\"24\" placeholder=\"请输入邮箱\"></u-input></u-form-item><u-form-item><u-button color=\"primary\" @click=\"submit()\">提交</u-button></u-form-item></u-form></div>",
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
        }, 'anonymous-55d81a9a': { "template": "<div class=\"u-example\"><u-form ref=\"form\" :rules=\"rules\"><u-form-item label=\"用户名\" name=\"username\"><u-input maxlength=\"12\" placeholder=\"4~12个字符\"></u-input></u-form-item><u-form-item label=\"邮箱\" name=\"email\"><u-input maxlength=\"24\" placeholder=\"请输入邮箱\"></u-input></u-form-item></u-form></div>",
            data() {
                return {
                    rules: {
                        username: [{ type: 'string', required: true, trigger: 'blur', message: '请输入用户名' }, { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' }],
                        email: [{ type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' }, { type: 'email', trigger: 'blur', message: '邮箱格式不正确' }]
                    }
                };
            }
        }, 'anonymous-5a27fbcd': { "template": "<div class=\"u-example\"><u-form ref=\"form\" :rules=\"rules\"><u-form-item label=\"用户名\" name=\"username\"><u-input maxlength=\"12\" placeholder=\"4~12个字符\"></u-input></u-form-item><u-form-item label=\"邮箱\" name=\"email\"><u-input maxlength=\"24\" placeholder=\"请输入邮箱\"></u-input></u-form-item></u-form></div>",
            data() {
                return {
                    rules: {
                        username: [{ type: 'string', required: true, trigger: 'blur', message: '请输入用户名' }, { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: '请输入4~12个字符' }],
                        email: [{ type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' }, { type: 'email', trigger: 'input', message: '邮箱格式不正确' }]
                    }
                };
            }
        }, 'anonymous-2e5c5992': { "template": "<div class=\"u-example\"><u-form><u-form-item label=\"用户名\"><u-input maxlength=\"4\" placeholder=\"不超过4个字符\"></u-input></u-form-item></u-form></div>" }, 'anonymous-528ea2c3': { "template": "<div class=\"u-example\"><u-form ref=\"form\" :rules=\"rules\"><u-form-item label=\"用户名\" name=\"username\"><u-input v-model=\"model.username\" maxlength=\"12\" placeholder=\"4~12个字符\"></u-input></u-form-item><u-form-item label=\"邮箱\" name=\"email\"><u-input v-model=\"model.email\" maxlength=\"24\" placeholder=\"请输入邮箱\"></u-input></u-form-item><u-form-item label=\"手机号码\" name=\"phone\"><u-input v-model=\"model.phone\" maxlength=\"11\" placeholder=\"请输入手机号码\"></u-input></u-form-item><u-form-item><u-button color=\"primary\" @click=\"submit()\">提交</u-button></u-form-item></u-form></div>",
            data() {
                return {
                    model: {
                        username: '',
                        email: '',
                        phone: ''
                    },
                    rules: {
                        username: [{ type: 'string', required: true, trigger: 'blur', message: '请输入用户名' }, { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' }],
                        email: [{ type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' }, { type: 'email', trigger: 'blur', message: '邮箱格式不正确' }],
                        phone: [{ type: 'string', pattern: /^\d{11}$/, trigger: 'blur', message: '手机号码格式不正确' }]
                    }
                };
            },
            methods: {
                submit() {
                    this.$refs.form.validate().then(() => alert('提交成功')).catch(() => {});
                }
            }
        }, 'anonymous-33b15a08': { "template": "<div class=\"u-example\"><u-form ref=\"form\" :rules=\"rules\"><u-form-item label=\"用户名\" name=\"username\"><u-input v-model=\"model.username\" maxlength=\"12\" placeholder=\"4~12个字符\"></u-input></u-form-item><u-form-item label=\"邮箱\" name=\"email\"><u-input v-model=\"model.email\" maxlength=\"24\" placeholder=\"请输入邮箱\"></u-input></u-form-item><u-form-item label=\"手机号码\" name=\"phone\"><u-input v-model=\"model.phone\" maxlength=\"11\" placeholder=\"请输入手机号码\"></u-input></u-form-item><u-form-item><u-button color=\"primary\" :disabled=\"!canSubmit\" @click=\"submit()\">提交</u-button></u-form-item></u-form></div>",
            data() {
                return {
                    model: {
                        username: '',
                        email: '',
                        phone: ''
                    },
                    rules: {
                        username: [{ type: 'string', required: true, trigger: 'blur', message: '请输入用户名' }, { type: 'string', min: 4, max: 12, trigger: 'blur', message: '请输入4~12个字符' }],
                        email: [{ type: 'string', required: true, trigger: 'blur', message: '请输入邮箱' }, { type: 'email', trigger: 'blur', message: '邮箱格式不正确' }],
                        phone: [{ type: 'string', pattern: /^\d{11}$/, trigger: 'blur', message: '手机号码格式不正确' }]
                    }
                };
            },
            computed: {
                canSubmit() {
                    return this.model.username && this.model.email;
                }
            },
            methods: {
                submit() {
                    this.$refs.form.validate().then(() => alert('提交成功')).catch(() => {});
                }
            }
        }, 'anonymous-4e60c924': { "template": "<div class=\"u-example\"><u-form ref=\"form\" :rules=\"rules\" @validate=\"canSubmit = $event.valid\"><u-form-item label=\"用户名\" name=\"username\"><u-input v-model=\"model.username\" maxlength=\"12\" placeholder=\"4~12个字符\"></u-input></u-form-item><u-form-item label=\"邮箱\" name=\"email\"><u-input v-model=\"model.email\" maxlength=\"24\" placeholder=\"请输入邮箱\"></u-input></u-form-item><u-form-item label=\"手机号码\" name=\"phone\"><u-input v-model=\"model.phone\" maxlength=\"11\" placeholder=\"请输入手机号码\"></u-input></u-form-item><u-form-item><u-button color=\"primary\" :disabled=\"!canSubmit\" @click=\"submit()\">提交</u-button></u-form-item></u-form></div>",
            data() {
                return {
                    canSubmit: false,
                    model: {
                        username: '',
                        email: '',
                        phone: ''
                    },
                    rules: {
                        username: [{ type: 'string', required: true, trigger: 'input+blur', message: '请输入用户名' }, { type: 'string', min: 4, max: 12, trigger: 'input+blur', message: '请输入4~12个字符' }],
                        email: [{ type: 'string', required: true, trigger: 'input+blur', message: '请输入邮箱' }, { type: 'email', trigger: 'input+blur', message: '邮箱格式不正确' }],
                        phone: [{ type: 'string', pattern: /^\d{11}$/, trigger: 'input+blur', message: '手机号码格式不正确' }]
                    }
                };
            },
            mounted() {
                // 必须初始化时或在获取数据到时安静验证一次
                this.$refs.form.validate(true).catch(() => {});
                // 在获取数据到时如下
                // this.getData().then(...)
                //  .then(() => this.$refs.form.validate(true))
                //  .catch(() => {});
            },
            methods: {
                submit() {
                    this.$refs.form.validate().then(() => alert('提交成功')).catch(() => {});
                }
            }
        } } });

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("表单 Form")]),_c('h2',[_vm._v("示例")]),_c('h3',[_vm._v("基本形式")]),_c('anonymous-98067d0e',{ref:"anonymous-98067d0e"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"计费方式\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"按量付费\"")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"资源包\"")]),_vm._v(">")]),_vm._v("资源包"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n            "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"按量付费\"")]),_vm._v(">")]),_vm._v("按量付费"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radio")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-radios")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"实例名称\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"63\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"端口号\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"5\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1150-65535\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3306\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"详情\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-textarea")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-textarea")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("立即创建"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("行内")]),_c('anonymous-4c90436a',{ref:"anonymous-4c90436a"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("layout")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"inline\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label-size")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"auto\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"状态\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"63\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"认证中\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"63\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入用户名\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"联系号码\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"63\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入联系号码\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("查询"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("表单验证")]),_c('h3',[_vm._v("规则列表")]),_c('p',[_vm._v("每个表单项的验证行为用一个有序列表"),_c('code',{pre:true},[_vm._v("rules")]),_vm._v("来声明，列表中包含若干条验证规则。结构如下：")]),_c('anonymous-1789349a',{ref:"anonymous-1789349a"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-javascript"}},[_c('code',{attrs:{"v-pre":""}},[_vm._v("[{ "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", ... }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": ... }, { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("pattern")]),_vm._v(": ... }, ...]\n")])]),_c('p',[_vm._v("每条规则至少包含以下几个参数：")]),_c('ul',[_c('li',[_c('code',{pre:true},[_vm._v("type")]),_vm._v("：数据类型")]),_c('li',[_c('code',{pre:true},[_vm._v("trigger")]),_vm._v("：触发方式")]),_c('li',[_c('code',{pre:true},[_vm._v("message")]),_vm._v("：验证不通过时的消息提示")]),_c('li',[_vm._v("...")])]),_c('p',[_vm._v("下面举个例子，一个用户名输入框的验证包含以下规则：")]),_c('ol',[_c('li',[_vm._v("必须输入用户名，失焦验证")]),_c('li',[_vm._v("以字母开头，实时验证")]),_c('li',[_vm._v("字母、数字或中划线组成，实时验证")]),_c('li',[_vm._v("以字母或数字结尾，失焦验证")]),_c('li',[_vm._v("4~12个字符，失焦验证")])]),_c('anonymous-1ca9bab3',{ref:"anonymous-1ca9bab3"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"112\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12位字母、数字或中划线组成\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": [\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("pattern")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/^[a-zA-Z]/")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input+blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'以字母开头'")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("pattern")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/^[a-zA-Z0-9-]+$/")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input+blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'字母、数字或中划线组成'")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("pattern")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/[a-zA-Z0-9]$/")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'以字母或数字结尾'")]),_vm._v(" },\n                { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'不得少于4个字符'")]),_vm._v(" },\n            ],\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("多字段的规则列表")]),_c('p',[_vm._v("如果一个表单多个字段有规则列表，可以在"),_c('code',{pre:true},[_vm._v("u-form")]),_vm._v("中汇总传入。")]),_c('anonymous-55d81a9a',{ref:"anonymous-55d81a9a"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"邮箱\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"email\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"24\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入邮箱\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入邮箱'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'邮箱格式不正确'")]),_vm._v(" },\n                ],\n            },\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("数据类型")]),_c('ul',[_c('li',[_c('code',{pre:true},[_vm._v("string")]),_vm._v(": Must be of type string. This is the default type.")]),_c('li',[_c('code',{pre:true},[_vm._v("number")]),_vm._v(": Must be of type number.")]),_c('li',[_c('code',{pre:true},[_vm._v("boolean")]),_vm._v(": Must be of type boolean.")]),_c('li',[_c('code',{pre:true},[_vm._v("method")]),_vm._v(": Must be of type function.")]),_c('li',[_c('code',{pre:true},[_vm._v("regexp")]),_vm._v(": Must be an instance of RegExp or a string that does not generate an exception when creating a new RegExp.")]),_c('li',[_c('code',{pre:true},[_vm._v("integer")]),_vm._v(": Must be of type number and an integer.")]),_c('li',[_c('code',{pre:true},[_vm._v("float")]),_vm._v(": Must be of type number and a floating point number.")]),_c('li',[_c('code',{pre:true},[_vm._v("array")]),_vm._v(": Must be an array as determined by Array.isArray.")]),_c('li',[_c('code',{pre:true},[_vm._v("object")]),_vm._v(": Must be of type object and not Array.isArray.")]),_c('li',[_c('code',{pre:true},[_vm._v("enum")]),_vm._v(": Value must exist in the enum.")]),_c('li',[_c('code',{pre:true},[_vm._v("date")]),_vm._v(": Value must be valid as determined by Date")]),_c('li',[_c('code',{pre:true},[_vm._v("url")]),_vm._v(": Must be of type url.")]),_c('li',[_c('code',{pre:true},[_vm._v("hex")]),_vm._v(": Must be of type hex.")]),_c('li',[_c('code',{pre:true},[_vm._v("email")]),_vm._v(": Must be of type email.")])]),_c('p',[_vm._v("其它请参见"),_c('u-link',{attrs:{"href":"https://github.com/yiminghe/async-validator"}},[_vm._v("async-validator")]),_vm._v("。")],1),_c('h3',[_vm._v("触发方式")]),_c('p',[_vm._v("表单验证行为按照实时性通常可以分为三种：提交验证、失焦验证、实时验证，分别对应验证规则"),_c('code',{pre:true},[_vm._v("trigger")]),_vm._v("的三种触发方式："),_c('code',{pre:true},[_vm._v("submit")]),_vm._v(", "),_c('code',{pre:true},[_vm._v("blur")]),_vm._v(", "),_c('code',{pre:true},[_vm._v("input")]),_vm._v("，规则中默认为"),_c('code',{pre:true},[_vm._v("submit")]),_vm._v("。")]),_c('p',[_vm._v("另外还有一种行为叫表单限制，不属于表单验证，但通常与之配合使用。")]),_c('h4',[_vm._v("提交验证")]),_c('p',[_vm._v("点击表单提交按钮时才对表单中所有控件进行验证，通常对应submit按钮的"),_c('code',{pre:true},[_vm._v("click")]),_vm._v("事件。示例如下：")]),_c('anonymous-3d17c90c',{ref:"anonymous-3d17c90c"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"邮箱\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"email\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"24\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入邮箱\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"submit()\"")]),_vm._v(">")]),_vm._v("提交"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入邮箱'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'邮箱格式不正确'")]),_vm._v(" },\n                ],\n            },\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        submit() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.form.validate()\n                .then("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" alert("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'提交成功'")]),_vm._v("))\n                .catch("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" {});\n        },\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("失焦验证")]),_c('p',[_vm._v("在表单控件失去焦点时对该控件进行验证，通常对应表单控件的"),_c('code',{pre:true},[_vm._v("blur")]),_vm._v("事件。示例如下：")]),_c('anonymous-55d81a9a',{ref:"anonymous-55d81a9a"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"邮箱\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"email\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"24\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入邮箱\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入邮箱'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'邮箱格式不正确'")]),_vm._v(" },\n                ],\n            },\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("实时验证")]),_c('p',[_vm._v("在表单控件的值实时输入改变时，对该控件进行验证，通常对应表单的"),_c('code',{pre:true},[_vm._v("input")]),_vm._v("事件。当只激活实时验证时，失焦验证会跳过此规则并且覆盖原来的结果，因此通常我们需要采用实时与失焦叠加的方式"),_c('code',{pre:true},[_vm._v("input+blur")]),_vm._v("。")]),_c('p',[_vm._v("下面的例子中，对用户名长度和邮箱格式的判断为实时验证。其中邮箱的验证没有采用实时与失焦叠加的方式，可以发现这种方式不是很合理。")]),_c('anonymous-5a27fbcd',{ref:"anonymous-5a27fbcd"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"邮箱\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"email\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"24\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入邮箱\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input+blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入邮箱'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'邮箱格式不正确'")]),_vm._v(" },\n                ],\n            },\n        };\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("表单限制")]),_c('p',[_vm._v("在表单控件的值改变时，对该值限制在规定的长度或范围内，如"),_c('code',{pre:true},[_vm._v("<input>")]),_vm._v("控件的部分"),_c('code',{pre:true},[_vm._v("type")]),_vm._v("和"),_c('code',{pre:true},[_vm._v("maxlength")]),_vm._v("的限制行为等：")]),_c('anonymous-2e5c5992',{ref:"anonymous-2e5c5992"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-html"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"不超过4个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("案例")]),_c('p',[_vm._v("前面的示例只是局部展示组件库表单验证体系的使用方法，达到的效果不一定符合实际情况。下面举几种比较合理的案例：")]),_c('p',[_vm._v("按照表单提交按钮在什么情况下可点击，可以分为以下几种常见且比较合理的情况：始终可点、必填项有内容可点、所有项内容正确时才可点。")]),_c('h3',[_vm._v("始终可点")]),_c('p',[_vm._v("表单提交按钮始终可点。")]),_c('p',[_vm._v("表现为表单中所有控件的所有行为必须进行提交验证，适当采用失焦和实时验证加以帮助。")]),_c('anonymous-528ea2c3',{ref:"anonymous-528ea2c3"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.username\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"邮箱\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"email\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.email\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"24\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入邮箱\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"手机号码\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"phone\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.phone\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"11\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入手机号码\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"submit()\"")]),_vm._v(">")]),_vm._v("提交"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("phone")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n            },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入邮箱'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'邮箱格式不正确'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("phone")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("pattern")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/^\\d{11}$/")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'手机号码格式不正确'")]),_vm._v(" },\n                ],\n            },\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        submit() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.form.validate()\n                .then("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" alert("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'提交成功'")]),_vm._v("))\n                .catch("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" {});\n        },\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("必填项有内容可点")]),_c('p',[_vm._v("当表单中所有必填项有内容时，表单提交按钮才可点。")]),_c('p',[_vm._v("表现为根据表单中必填项是否为空，使用计算属性来实时判断提交按钮是否可点。并且在这种情况下，通常采用三种验证相结合的方式。")]),_c('anonymous-33b15a08',{ref:"anonymous-33b15a08"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.username\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"邮箱\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"email\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.email\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"24\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入邮箱\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"手机号码\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"phone\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.phone\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"11\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入手机号码\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":disabled")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"!canSubmit\"")]),_vm._v(" @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"submit()\"")]),_vm._v(">")]),_vm._v("提交"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("phone")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n            },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入邮箱'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'邮箱格式不正确'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("phone")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("pattern")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/^\\d{11}$/")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'手机号码格式不正确'")]),_vm._v(" },\n                ],\n            },\n        };\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("computed")]),_vm._v(": {\n        canSubmit() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".model.username && "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".model.email;\n        },\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        submit() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.form.validate()\n                .then("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" alert("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'提交成功'")]),_vm._v("))\n                .catch("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" {});\n        },\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h3',[_vm._v("所有项内容正确可点")]),_c('p',[_vm._v("当表单中所有项内容均符合要求时，表单提交按钮才可点。")]),_c('p',[_vm._v("表现为根据每个表单控件的验证结果，使用计算属性来实时判断提交按钮是否可点。这种情况下，一般就不需要进行提交验证了。")]),_c('anonymous-4e60c924',{ref:"anonymous-4e60c924"}),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"form\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":rules")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"rules\"")]),_vm._v(" @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("validate")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"canSubmit = $event.valid\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"username\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.username\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"12\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"4~12个字符\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"邮箱\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"email\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.email\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"24\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入邮箱\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("label")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"手机号码\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"phone\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"model.phone\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("maxlength")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"11\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("placeholder")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"请输入手机号码\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-input")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("color")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":disabled")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"!canSubmit\"")]),_vm._v(" @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"submit()\"")]),_vm._v(">")]),_vm._v("提交"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form-item")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-form")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n    data() {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("canSubmit")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("model")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("phone")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",\n            },\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("rules")]),_vm._v(": {\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("username")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input+blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入用户名'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("min")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("max")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("12")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input+blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入4~12个字符'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("email")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("required")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input+blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'请输入邮箱'")]),_vm._v(" },\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'email'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input+blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'邮箱格式不正确'")]),_vm._v(" },\n                ],\n                "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("phone")]),_vm._v(": [\n                    { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'string'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("pattern")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/^\\d{11}$/")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("trigger")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'input+blur'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("message")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'手机号码格式不正确'")]),_vm._v(" },\n                ],\n            },\n        };\n    },\n    mounted() {\n        "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// 必须初始化时或在获取数据到时安静验证一次")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.form.validate("),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(")\n            .catch("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" {});\n        "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// 在获取数据到时如下")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// this.getData().then(...)")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("//  .then(() => this.$refs.form.validate(true))")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("//  .catch(() => {});")]),_vm._v("\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n        submit() {\n            "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".$refs.form.validate()\n                .then("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" alert("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'提交成功'")]),_vm._v("))\n                .catch("),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" {});\n        },\n    },\n};\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n")])]),_c('h2',[_vm._v("Form API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("model")]),_c('td',[_vm._v("Object")]),_c('td'),_c('td',[_vm._v("表单数据模型")])]),_c('tr',[_c('td',[_vm._v("rules")]),_c('td',[_vm._v("Object")]),_c('td'),_c('td',[_vm._v("表单所有域的验证规则")])]),_c('tr',[_c('td',[_vm._v("layout")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("block")])]),_c('td',[_vm._v("表单布局方式。可选值："),_c('code',{pre:true},[_vm._v("block")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("inline")]),_vm._v("。")])]),_c('tr',[_c('td',[_vm._v("label-size")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("normal")])]),_c('td',[_vm._v("标签大小。可选值："),_c('code',{pre:true},[_vm._v("small")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("normal")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("large")]),_vm._v("。")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入"),_c('code',{pre:true},[_vm._v("<u-form-item>")]),_vm._v("子组件。")]),_c('h3',[_vm._v("Events")]),_c('h4',[_vm._v("@validate")]),_c('p',[_vm._v("表单验证时触发")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("$event.valid")]),_c('td',[_vm._v("Boolean")]),_c('td',[_vm._v("验证是否通过")])])])]),_c('h3',[_vm._v("Methods")]),_c('h4',[_vm._v("validate(slient)")]),_c('p',[_vm._v("验证此表单。")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("silent")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否仅验证无提示。")])])])]),_c('h2',[_vm._v("FormItem API")]),_c('h3',[_vm._v("Props/Attrs")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Prop/Attr")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("name")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("表单项名称，用于选择表单的模型数据和验证规则")])]),_c('tr',[_c('td',[_vm._v("label")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("标签")])]),_c('tr',[_c('td',[_vm._v("label-size")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("normal")])]),_c('td',[_vm._v("单独设置表单项的标签大小")])]),_c('tr',[_c('td',[_vm._v("rules")]),_c('td',[_vm._v("Array")]),_c('td'),_c('td',[_vm._v("表单项的验证规则。如果没有则会根据"),_c('code',{pre:true},[_vm._v("name")]),_vm._v("属性从表单的"),_c('code',{pre:true},[_vm._v("rules")]),_vm._v("中获取。")])]),_c('tr',[_c('td',[_vm._v("message")]),_c('td',[_vm._v("String")]),_c('td'),_c('td',[_vm._v("默认提示信息")])]),_c('tr',[_c('td',[_vm._v("required")]),_c('td',[_vm._v("Boolean")]),_c('td'),_c('td',[_vm._v("是否必填。仅显示样式，如果要验证必填项，需要在"),_c('code',{pre:true},[_vm._v("rules")]),_vm._v("中添加必填规则。")])])])]),_c('h3',[_vm._v("Slots")]),_c('h4',[_vm._v("(default)")]),_c('p',[_vm._v("插入"),_c('code',{pre:true},[_vm._v("<u-form-item>")]),_vm._v("子组件。")]),_c('h3',[_vm._v("Methods")]),_c('h4',[_vm._v("validate(trigger, slient)")]),_c('p',[_vm._v("验证此表单项。")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("Param")]),_c('th',[_vm._v("Type")]),_c('th',[_vm._v("Default")]),_c('th',[_vm._v("Description")])])]),_c('tbody',[_c('tr',[_c('td',[_vm._v("trigger")]),_c('td',[_vm._v("String")]),_c('td',[_c('code',{pre:true},[_vm._v("submit")])]),_c('td',[_vm._v("触发方式，可选值："),_c('code',{pre:true},[_vm._v("submit")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("blur")]),_vm._v("和"),_c('code',{pre:true},[_vm._v("input")]),_vm._v("之一，或者它们的任意组合。")])]),_c('tr',[_c('td',[_vm._v("silent")]),_c('td',[_vm._v("Boolean")]),_c('td',[_c('code',{pre:true},[_vm._v("false")])]),_c('td',[_vm._v("是否仅验证无提示。")])])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});