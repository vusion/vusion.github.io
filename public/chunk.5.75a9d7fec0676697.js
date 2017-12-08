/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([5],{

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

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_modularity_md__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2ddf2e86_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_modularity_md__ = __webpack_require__(469);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_modularity_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2ddf2e86_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_modularity_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_concepts_modularity_md_0_e8ba96_vue__ = __webpack_require__(465);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                                'Ce8ba96': __WEBPACK_IMPORTED_MODULE_0__Users_yusen_Projects_GitHub_Vusion_vusion_github_io_src_views_concepts_modularity_md_0_e8ba96_vue__["a" /* default */]
                }
});

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_5a4d6fb0_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_modularity_md_0_e8ba96_vue__ = __webpack_require__(468);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(466);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
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
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_5a4d6fb0_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_modularity_md_0_e8ba96_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(467);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7040065a", content, true);

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "._2I2s-gnkVYaO-1Vn{color:red}.amQ2qkM3IvghJhwM{font-weight:700}", ""]);

// exports
exports.locals = {
	"red": "_2I2s-gnkVYaO-1Vn",
	"bold": "amQ2qkM3IvghJhwM"
};

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{class:_vm.$style.red},[_vm._v("\n    This should be red.\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("模块化")]),_c('h3',[_vm._v("完全模块化")]),_c('p',[_vm._v("通常大型前端工程需要处理的资源文件有很多，常见的JS、CSS和图片，还有字体、视频、音频等其他静态资源，传统的Require.js、SASS/LESS、Icomoon等工具往往只是片面的处理了某一类资源，这些方案在前端模块化问题的处理上都是不完全的。")]),_c('p',[_vm._v("而在Webpack看来：")]),_c('blockquote',[_c('p',[_vm._v("一切资源皆模块。")])]),_c('p',[_vm._v("我们把这称为"),_c('strong',[_vm._v("模块化的完备性")]),_vm._v("。")]),_c('p',[_vm._v("Webpack这样处理了之后，有三大优势：")]),_c('ul',[_c('li',[_vm._v("依赖关系单一化：所有CSS和图片等资源的依赖关系统一走JS路线，无需额外处理CSS预处理器的依赖关系，也不需处理代码迁移时的图片合并、字体图片等路径问题；")]),_c('li',[_vm._v("资源处理集成化：比如可以统一处理资源的hash、同步异步加载等问题，同时也可以将类似vue这样复杂的文件一起容纳到这个体系；")]),_c('li',[_vm._v("通用组件标准化：传统一个社区通用组件的引入方式五花八门，现在可以按照Webpack的loaders来标准化。")])]),_c('h3',[_vm._v("JS的模块化")]),_c('p',[_vm._v("在当前的JavaScript发展趋势下，已经没有理由不选择ES6 Modules了。")]),_c('h4',[_vm._v("Babel")]),_c('p',[_vm._v("Vusion CLI已经集成了"),_c('u-link',{attrs:{"href":"https://github.com/babel/babel-loader"}},[_vm._v("babel-loader")]),_vm._v("，同时添加了默认配置"),_c('u-link',{attrs:{"href":"https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L98"}},[_vm._v("<code>")]),_vm._v("，但不会立即生效。")],1),_c('p',[_vm._v("如果您对浏览器的兼容性没有要求，即只要最新的现代浏览器支持就行，比如Chrome、Firfox、Safari，或者通过Electron来驱动App，并且在代码中没有使用到ECMAScript的一些未来特性。那么不需要babel也可以运行。")]),_c('p',[_vm._v("否则，您需要在项目根路径下添加一个"),_c('code',{pre:true},[_vm._v(".babelrc")]),_vm._v("文件，Vusion根据这个文件是否存在来判断启不启用"),_c('code',{pre:true},[_vm._v("babel-loader")]),_vm._v("。")]),_c('p',[_vm._v("最简单的方式是：")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-shell"}},[_c('code',{attrs:{"v-pre":""}},[_vm._v("npm install --save-dev babel-preset-env\n")])]),_c('p',[_vm._v("然后在项目根路径下添加一个"),_c('code',{pre:true},[_vm._v(".babelrc")]),_vm._v("文件：")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-json"}},[_c('code',{attrs:{"v-pre":""}},[_vm._v("{\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("\"presets\"")]),_vm._v(": ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"env\"")]),_vm._v("]\n}\n")])]),_c('p',[_vm._v("其他关于Babel的详细配置请参见"),_c('u-link',{attrs:{"href":"https://babeljs.io/"}},[_vm._v("babeljs.io")]),_vm._v("的官方文档。")],1),_c('h4',[_vm._v("JS的压缩与混淆")]),_c('p',[_vm._v("在Webpack生态中，通常使用"),_c('u-link',{attrs:{"href":"https://github.com/webpack-contrib/uglifyjs-webpack-plugin"}},[_vm._v("uglifyjs-webpack-plugin")]),_vm._v("来处理JS的压缩与混淆，这个插件也已经集成在Vusion CLI中。")],1),_c('p',[_vm._v("只需在"),_c('code',{pre:true},[_vm._v("vusion.config.js")]),_vm._v("或"),_c('code',{pre:true},[_vm._v("package.json")]),_vm._v("的"),_c('code',{pre:true},[_vm._v("vusion")]),_vm._v("对象中添加配置：")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-json"}},[_c('code',{attrs:{"v-pre":""}},[_vm._v("{\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("\"uglifyJS\"")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v("\n}\n")])]),_c('p',[_vm._v("也可以在运行CLI的构建命令时，添加"),_c('code',{pre:true},[_vm._v("--uglify-js")]),_vm._v("这个参数：")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-shell"}},[_c('code',{attrs:{"v-pre":""}},[_vm._v("vusion build --uglify-js\n")])]),_c('h3',[_vm._v("CSS的模块化")]),_c('p',[_vm._v("虽然SASS、LESS、Stylus等预处理器实现了CSS的文件拆分，但没有解决CSS模块化的痛点：选择器的局域化问题（全局污染问题）。")]),_c('p',[_vm._v("按道理，一个模块化的文件应该要隐藏内部作用域，只暴露少量接口给使用者。而按照目前预处理器的方式，引入一个CSS模块后，已存在的样式仍有被覆盖的风险。")]),_c('p',[_vm._v("为了避免全局选择器的冲突，也为了避免复杂、繁琐、弱约束的命名规范，我们采用"),_c('u-link',{attrs:{"href":"https://github.com/css-modules/css-modules"}},[_vm._v("CSS Modules")]),_vm._v("来解决这个问题。")],1),_c('h4',[_vm._v("CSS Modules")]),_c('p',[_vm._v("在单文件Vue中，在"),_c('code',{pre:true},[_vm._v("<style>")]),_vm._v("上直接添加"),_c('code',{pre:true},[_vm._v("module")]),_vm._v("，同时在模板中动态绑定class：")]),_c('div',{staticClass:"u-example"},[_c('Ce8ba96')],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-vue"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.red\"")]),_vm._v(">")]),_vm._v("\n    This should be red.\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".red")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("color")]),_vm._v(": red;\n}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".bold")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("font-weight")]),_vm._v(": bold;\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('p',[_vm._v("这些样式会转为")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-css"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v("._21t-NHydruDPXRXUWJnMmm")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("color")]),_vm._v(": red;\n}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v("._2VTt8mZxuYxYIcjuT-eGzP")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("font-weight")]),_vm._v(": bold;\n}\n")])]),_c('p',[_vm._v("具体可以参见"),_c('u-link',{attrs:{"href":"https://vue-loader.vuejs.org/zh-cn/features/css-modules.html"}},[_vm._v("vue-loader的CSS Modules")])],1),_c('p',[_vm._v("在多文件Vue中，在"),_c('code',{pre:true},[_vm._v(".vue")]),_vm._v("文件夹添加"),_c('code',{pre:true},[_vm._v("module.css")]),_vm._v("文件，书写方式与单文件Vue相同。")]),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":""}},[_vm._v("u-sample.vue/\n    index.html\n    index.js\n    module.css\n")])]),_c('h4',[_vm._v("REA风格")]),_c('p',[_vm._v("在CSS Modules的基础上，我们引入了"),_c('u-link',{attrs:{"href":"https://github.com/postcss/postcss"}},[_vm._v("PostCSS")]),_vm._v("和它的一些plugins"),_c('u-link',{attrs:{"href":"https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L13"}},[_vm._v("<code>")]),_vm._v("，用于简化样式的书写，最终形成一套特有的CSS书写风格——REA风格。")],1),_c('p',[_vm._v("REA表示Root、Element、Attribute，其中借鉴了BEM（Block、Element、Modifier）的一些思想，但它不需要那些繁琐的构词形式。")]),_c('p',[_vm._v("它有以下一些规则：")]),_c('ul',[_c('li',[_vm._v("class仅用于表示元素的在组件中的角色\n"),_c('ul',[_c('li',[_vm._v("根节点总是用"),_c('code',{pre:true},[_vm._v(".root")])]),_c('li',[_vm._v("子节点用一个简单的单词来表示，如"),_c('code',{pre:true},[_vm._v("head")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("item")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("side")]),_vm._v("等")])])]),_c('li',[_vm._v("attribute用于样式扩展，命名方式与常用的props保持一致\n"),_c('ul',[_c('li',[_vm._v("Boolean类型，如"),_c('code',{pre:true},[_vm._v("selected")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("disabled")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("active")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("checked")]),_vm._v("等")]),_c('li',[_vm._v("颜色，如"),_c('code',{pre:true},[_vm._v("color=\"primary\"")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("color=\"success\"")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("color=\"error\"")]),_vm._v("等")]),_c('li',[_vm._v("大小，一个单词表示宽高同时改变，两个单词前者表示高度、后者表示宽度，类似CSS的"),_c('code',{pre:true},[_vm._v("margin")]),_vm._v("或"),_c('code',{pre:true},[_vm._v("padding")]),_vm._v("属性。如"),_c('code',{pre:true},[_vm._v("size=\"normal\"")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("size=\"large\"")]),_vm._v("、"),_c('code',{pre:true},[_vm._v("size=\"mini large\"")]),_vm._v("等")])])]),_c('li',[_vm._v("单词不要缩写，且用连字符而不是驼峰")]),_c('li',[_vm._v("不允许样式块嵌套")]),_c('li',[_vm._v("无需添加浏览器前缀，在PostCSS中已经引入了"),_c('u-link',{attrs:{"href":"https://github.com/postcss/autoprefixer"}},[_vm._v("autoprefixer")]),_vm._v("插件")],1)]),_c('p',[_vm._v("最佳示例：")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-xhtml"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.root\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.track\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.trail\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".root")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("240px")]),_vm._v(";\n}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".track")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("20px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("background")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#eee")]),_vm._v(";\n}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".trail")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("30%")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("100%")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("background")]),_vm._v(": $brand-primary;\n}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".root")]),_c('span',{attrs:{"class":"hljs-selector-attr"}},[_vm._v("[color=\"success\"]")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".trail")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("background")]),_vm._v(": $brand-success;\n}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".root")]),_c('span',{attrs:{"class":"hljs-selector-attr"}},[_vm._v("[active]")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".trail")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("animation")]),_vm._v(": ...\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n")])]),_c('h4',[_vm._v("优先级问题"),_c('u-link',{attrs:{"href":"https://github.com/vusion/vusion-cli/issues/21"}},[_vm._v("<issue>")])],1),_c('p',[_vm._v("由于CSS的依赖关系统一走JS，再通过"),_c('u-link',{attrs:{"href":"https://github.com/webpack-contrib/style-loader"}},[_vm._v("style-loader")]),_vm._v("转换为标签插入到页面中，因此无法保证各组件之间的顺序。极少数情况下会有优先级问题，这里我们推荐一种可以提高优先级的写法：")],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-xhtml"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"$style.button\"")]),_vm._v(">")]),_vm._v("Button"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("u-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("module")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".button")]),_c('span',{attrs:{"class":"hljs-selector-attr"}},[_vm._v("[class]")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("color")]),_vm._v(": red;\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")]),_vm._v("\n\n#### CSS提取成独立文件\n\n在Webpack生态中，通常会使用[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)将CSS内容提取成独立的文件，这个插件也已经集成在Vusion CLI中。\n\n只需在`vusion.config.js`或`package.json`的`vusion`对象中添加配置：\n\n``` json\n{\n    \"extractCSS\": true\n}\n")])]),_c('p',[_vm._v("也可以在运行CLI的构建命令时，添加--extract-css这个参数：")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-shell"}},[_c('code',{attrs:{"v-pre":""}},[_vm._v("vusion build --extract-css\n")])]),_c('p',[_vm._v("提取出来的CSS文件名与JS bundle的文件名是一致的，仅扩展名不同。")]),_c('h3',[_vm._v("图片的模块化")]),_c('p',[_vm._v("由于位图图片在Retina屏下需要设定@2x图，因此我们推荐优先使用svg图片。")]),_c('p',[_vm._v("特别是单色图标可以将svg转成icon-font，多色图标可以将svg合并成svg-sprite，实在不行了再将png或jpg等位图格式合并成css-sprite。")]),_c('h4',[_vm._v("icon-font")]),_c('p',[_vm._v("icon-font可以使用CSS很方便地设置颜色与大小。")]),_c('p',[_vm._v("在Vusion中，我们研发了一个"),_c('u-link',{attrs:{"href":"https://github.com/vusion/icon-font-loader/blob/master/README.zh-CN.md"}},[_vm._v("icon-font-loader")]),_vm._v("，它提供一个自定义属性"),_c('code',{pre:true},[_vm._v("icon-font")]),_vm._v("，使用时很方便：")],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-css"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".select")]),_c('span',{attrs:{"class":"hljs-selector-pseudo"}},[_vm._v(":after")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("icon-font")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("url")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'./icons/arrow-down.svg'")]),_vm._v(");\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("color")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#666")]),_vm._v(";\n}\n")])]),_c('p',[_vm._v("它会转为")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-css"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".select")]),_c('span',{attrs:{"class":"hljs-selector-pseudo"}},[_vm._v(":after")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("font-family")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'vusion-icon-font'")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("font-style")]),_vm._v(": normal;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("font-weight")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("400")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("font-variant")]),_vm._v(": normal;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("text-decoration")]),_vm._v(": inherit;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("text-rendering")]),_vm._v(": optimizeLegibility;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("text-transform")]),_vm._v(": none;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("-moz-osx-font-smoothing")]),_vm._v(": grayscale;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("-webkit-font-smoothing")]),_vm._v(": antialiased;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("font-smoothing")]),_vm._v(": antialiased;\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("content")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'\\f106'")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("color")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("#666")]),_vm._v(";\n}\n")])]),_c('p',[_vm._v("同时生成(eot,svg,ttf,woff)等字体和一个全局的@font-face文件。")]),_c('blockquote',[_c('p',[_vm._v("为什么不在HTML或JS中引入图标？类似：")])]),_c('pre',{pre:true,attrs:{"class":"hljs lang-xhtml"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"require('./inner.svg)\"")]),_vm._v(">")]),_vm._v("\n")])]),_c('ul',[_c('li',[_vm._v("其实大部分图标还需设置CSS属性")]),_c('li',[_vm._v("图片资源的引入本质是一种样式修改")]),_c('li',[_vm._v("CSS具有复写的特性")])]),_c('h4',[_vm._v("svg-sprite")]),_c('p',[_vm._v("svg-sprite拥有css-sprite不具备的调整大小特性。")]),_c('p',[_vm._v("在Vusion中，我们使用了一个"),_c('u-link',{attrs:{"href":"https://github.com/CXHtml/svg-sprite-loader"}},[_vm._v("svg-sprite-loader")]),_vm._v("。使用起来也很方便：")],1),_c('pre',{pre:true,attrs:{"class":"hljs lang-css"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".root")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("background")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("url")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'./icons/refresh.svg?sprite'")]),_vm._v(");\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("200px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("120px")]),_vm._v(";\n}\n")])]),_c('p',[_vm._v("它会转为")]),_c('pre',{pre:true,attrs:{"class":"hljs lang-css"}},[_c('code',{attrs:{"v-pre":""}},[_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".root")]),_vm._v(" {\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("background")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("url")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'/public/sprite.1c9f4bcca4a42798.svg#refresh'")]),_vm._v(");\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("200px")]),_vm._v(";\n    "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("120px")]),_vm._v(";\n}\n")])]),_c('h4',[_vm._v("css-sprite")]),_c('p',[_vm._v("正在研究中。。。")]),_c('p',[_vm._v("可以先使用CSS的background，会走"),_c('u-link',{attrs:{"href":"https://github.com/webpack-contrib/file-loader"}},[_vm._v("file-loader")]),_vm._v("。")],1),_c('h4',[_vm._v("其他资源")]),_c('p',[_vm._v("其他资源会统一走"),_c('u-link',{attrs:{"href":"https://github.com/webpack-contrib/file-loader"}},[_vm._v("file-loader")]),_vm._v("，目前已配置了"),_c('code',{pre:true},[_vm._v("png|jpg|gif|eot|ttf|woff|woff2")]),_vm._v("这些格式"),_c('u-link',{attrs:{"href":"https://github.com/vusion/vusion-cli/blob/develop/webpack/base.js#L88"}},[_vm._v("<code>")]),_vm._v("。")],1),_c('h3'),_c('p',[_vm._v("模块化解决了前端工程中各种资源的组织问题，那么在用户界面（UI）层面上，如何将一个复杂工程进行分解复用，并进行高效的管理，这就属于组件化方面的范畴了，下一节将会为您详细讲述。")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});