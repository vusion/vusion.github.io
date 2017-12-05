/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([14],{

/***/ 412:
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

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_3fa85463_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_vusion_cli_md__ = __webpack_require__(470);
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
  __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_3fa85463_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_vusion_cli_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("配置")]),_c('h2',[_vm._v("命令行工具（CLI）")]),_c('h3',[_vm._v("配置文件")]),_c('p',[_vm._v("在项目目录下创建"),_c('code',{pre:true},[_vm._v("vusion.config.js")]),_vm._v("，有以下一些选项：")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-javascript"}},[_c('code',{attrs:{"v-pre":""}},[_vm._v("{\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",                              "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Vusion project type. Required option. 'library', 'app'")]),_vm._v("\n    staticPath: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",                        "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Path of assets, which will be copied into destination directory")]),_vm._v("\n    assetsPath: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",                        "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// @deprecated, alias of option `staticPath`")]),_vm._v("\n    libraryPath: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("''")]),_vm._v(",                       "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Library entry path. To be `./index.js` by default if project type is `library`")]),_vm._v("\n    baseCSSPath: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'./src/base/index.css'")]),_vm._v(",   "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Path of base CSS")]),_vm._v("\n    globalCSSPath: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'./global.css'")]),_vm._v(",         "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Path of global CSS")]),_vm._v("\n    clean: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",                           "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Clean the destination directory before `dev` or `build`")]),_vm._v("\n    docs: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",                           "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Generate docs of common components in library. Always be true if project type is `library`")]),_vm._v("\n    open: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",                            "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Enable/Disable to open browser at the beginning in `dev` mode")]),_vm._v("\n    hot: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",                             "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Enable/Disable to hot reload in `dev` mode")]),_vm._v("\n    sourceMap: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",                      "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Generate sourceMap in `build` mode")]),_vm._v("\n    extractCSS: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",                     "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Extract CSS via ExtractTextPlugin in `build` mode")]),_vm._v("\n    uglifyJS: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",                       "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Compress JS via UglifyJSPlugin only in `build` mode")]),_vm._v("\n    experimental: "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",                   "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Enable some experimental loaders or plugins, like ModuleConcatenationPlugin")]),_vm._v("\n    resolvePriority: "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'cwd'")]),_vm._v(",                "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Priority to resolve modules or loaders, \"cwd\"(default) or \"cli\"")]),_vm._v("\n    webpack: {},                           "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Extend webpack configuration")]),_vm._v("\n    webpackDevServer: {},                  "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Extend webpackDevServer configuration")]),_vm._v("\n    postcss: [],                           "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Extend postcss plugins")]),_vm._v("\n    vue: {},                               "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Extend vue-loader options")]),_vm._v("\n    karma: {},                             "),_c('span',{attrs:{"class":"hljs-comment"}},[_vm._v("// Extend karma configuration")]),_vm._v("\n}\n")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});