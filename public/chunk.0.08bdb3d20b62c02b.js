webpackJsonp([0],{

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

var styleId = 'ICON-FONT-FILE-STYLE';
function createStyleContent(fontConfig) {
    var style = fontConfig||window.ICON_FONT_STYLE,
        fontName = style.name,  srcStr = [];

    for(var name in style){
        var path  = style[name].path,hash = style[name].md5;
        if(style.hasOwnProperty(name)) {
            switch (name) {
                case 'eot':
                    srcStr.push('url("'+path+'?'+hash+'#iefix") format("embedded-opentype")');
                    break;
                case 'woff':
                    srcStr.push('url("'+path+'?'+hash+'") format("woff")');
                    break;
                case 'ttf':
                    srcStr.push('url("'+path+'?'+hash+'") format("truetype")');
                    break;
                case 'svg':
                    srcStr.push('url("'+path+'?'+hash+'#'+fontName+'") format("svg")');
                    break;
                default:
                    break;
            }
        }
    }
    srcStr = srcStr.join(",\n\t");
    return '@font-face {\n\tfont-family: "'+fontName+'";\n\tsrc:'+srcStr+";\n}";
}

function addStyle(fontConfig) {
    var styleTag = document.createElement('style'),headElement  = document.getElementsByTagName('head')[0];
    styleTag.innerHTML = createStyleContent(fontConfig);
    styleTag.id = styleId;
    styleTag.type="text/css";
    if(headElement){
        headElement.appendChild(styleTag);
    }else{
        window.addEventListener('load',() => {
            headElement.appendChild(styleTag);
        })
    }
}

function updateStyle(fontConfig) {
    var styleTag = document.getElementById(styleId);
    if(!styleTag){
        addStyle(fontConfig);
    }else{
        styleTag.innerHTML = createStyleContent(fontConfig);
    }
}

module.exports= function() {
    if(window.HAS_CREATE_FONT_STYLE){
        return;
    }
    addStyle();
    window.HAS_CREATE_FONT_STYLE = true;
}
if(false){
    window.ICON_FONT_STYLE.update = updateStyle;
}


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(630);

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6cd69820_hasScoped_false_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_modularity_md__ = __webpack_require__(633);
var cssModules = {}
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(631);  this['$style'] = cssModules['$style']
}
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_6cd69820_hasScoped_false_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_modularity_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(632);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("8298b9a4", content, true);

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "._21t-NHydruDPXRXUWJnMmm{color:red}<p>._2VTt8mZxuYxYIcjuT-eGzP{font-weight:700}", ""]);

// exports
exports.locals = {
	"red": "_21t-NHydruDPXRXUWJnMmm",
	"bold": "_2VTt8mZxuYxYIcjuT-eGzP"
};

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("模块化")]), _vm._v(" "), _c('h3', [_vm._v("完全模块化")]), _vm._v(" "), _c('p', [_vm._v("通常大型前端工程需要处理的资源文件有很多，常见的JS、CSS和图片，还有字体、视频、音频等其他静态资源，传统的Require.js、SASS/LESS、Icomoon等工具往往只是片面的处理了某一类资源，这些方案在前端模块化问题的处理上都是不完全的。")]), _vm._v(" "), _c('p', [_vm._v("而在Webpack看来：")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("一切资源皆模块。")])]), _vm._v(" "), _c('p', [_vm._v("我们把这称为"), _c('strong', [_vm._v("模块化的完备性")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("Webpack这样处理了之后，有三大优势：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("依赖关系单一化：所有CSS和图片等资源的依赖关系统一走JS路线，无需额外处理CSS预处理器的依赖关系，也不需处理代码迁移时的图片合并、字体图片等路径问题；")]), _vm._v(" "), _c('li', [_vm._v("资源处理集成化：比如可以统一处理资源的hash、同步异步加载等问题，同时也可以将类似vue这样复杂的文件一起容纳到这个体系；")]), _vm._v(" "), _c('li', [_vm._v("通用组件标准化：传统一个社区通用组件的引入方式五花八门，现在可以按照Webpack的loaders来标准化。")])]), _vm._v(" "), _c('h3', [_vm._v("JS的模块化")]), _vm._v(" "), _c('p', [_vm._v("在当前的JavaScript发展趋势下，已经没有理由不选择ES6 Modules了。")]), _vm._v(" "), _c('h4', [_vm._v("Babel")]), _vm._v(" "), _c('p', [_vm._v("Vusion CLI已经集成了"), _c('code', {
    pre: true
  }, [_vm._v("babel-loader")]), _vm._v("，同时添加了"), _c('u-link', {
    attrs: {
      "href": "https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L98"
    }
  }, [_vm._v("默认配置")]), _vm._v("，但不会立即生效。")], 1), _vm._v(" "), _c('p', [_vm._v("如果您对浏览器的兼容性没有要求，即只要最新的现代浏览器支持就行，比如Chrome、Firfox、Safari，或者通过Electron来驱动App，并且在代码中没有使用到ECMAScript的一些未来特性。那么不需要babel也可以运行。")]), _vm._v(" "), _c('p', [_vm._v("否则，您需要在项目根路径下添加一个"), _c('code', {
    pre: true
  }, [_vm._v(".babelrc")]), _vm._v("文件，Vusion根据这个文件是否存在来判断启不启用"), _c('code', {
    pre: true
  }, [_vm._v("babel-loader")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("最简单的方式是：")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-shell"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("npm install --save-dev babel-preset-env\n")])]), _vm._v(" "), _c('p', [_vm._v("然后在项目根路径下添加一个"), _c('code', {
    pre: true
  }, [_vm._v(".babelrc")]), _vm._v("文件：")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-json"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("{\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("\"presets\"")]), _vm._v(": ["), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"env\"")]), _vm._v("]\n}\n")])]), _vm._v(" "), _c('p', [_vm._v("其他关于Babel的详细配置请参见"), _c('u-link', {
    attrs: {
      "href": "https://babeljs.io/"
    }
  }, [_vm._v("babeljs.io")]), _vm._v("的官方文档。")], 1), _vm._v(" "), _c('h4', [_vm._v("JS的压缩与混淆")]), _vm._v(" "), _c('p', [_vm._v("Webpack通常使用"), _c('code', {
    pre: true
  }, [_vm._v("UglifyjsWebpackPlugin")]), _vm._v("来处理JS的压缩与混淆，这个插件也已经集成在Vusion CLI中。")]), _vm._v(" "), _c('p', [_vm._v("只需在"), _c('code', {
    pre: true
  }, [_vm._v("vusion.config.js")]), _vm._v("或"), _c('code', {
    pre: true
  }, [_vm._v("package.json")]), _vm._v("的"), _c('code', {
    pre: true
  }, [_vm._v("vusion")]), _vm._v("对象中添加配置：")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-json"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("{\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("\"uglifyJS\"")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v("\n}\n")])]), _vm._v(" "), _c('p', [_vm._v("也可以在运行CLI的构建命令时，添加"), _c('code', {
    pre: true
  }, [_vm._v("--uglify-js")]), _vm._v("这个参数：")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-shell"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("vusion build --uglify-js\n")])]), _vm._v(" "), _c('h3', [_vm._v("CSS的模块化")]), _vm._v(" "), _c('p', [_vm._v("虽然SASS、LESS、Stylus等预处理器实现了CSS的文件拆分，但没有解决CSS模块化的痛点：选择器的局域化问题（全局污染问题）。")]), _vm._v(" "), _c('p', [_vm._v("按道理，一个模块化的文件应该要隐藏内部作用域，只暴露少量接口给使用者。而按照目前预处理器的方式，引入一个CSS模块后，已存在的样式仍有被覆盖的风险。")]), _vm._v(" "), _c('p', [_vm._v("为了避免全局选择器的冲突，也为了避免复杂、繁琐、弱约束的命名规范，我们采用 CSS Modules + PostCSS 来解决这个问题。")]), _vm._v(" "), _c('p', [_vm._v("在单文件Vue中，在"), _c('code', {
    pre: true
  }, [_vm._v("<style>")]), _vm._v("上直接添加"), _c('code', {
    pre: true
  }, [_vm._v("module")]), _vm._v("，同时在模板中动态绑定class：")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('p', {
      class: _vm.$style.red
    }, [_vm._v("\n        This should be red.\n    ")])]
  ], 2), _c('p'), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":class")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"$style.red\"")]), _vm._v(">")]), _vm._v("\n        This should be red.\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("p")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("style")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("module")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "css"
    }
  }, [_vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".red")]), _vm._v(" {\n    "), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("color")]), _vm._v(": red;\n}\n\n"), _c('span', {
    attrs: {
      "class": "hljs-selector-class"
    }
  }, [_vm._v(".bold")]), _vm._v(" {\n    "), _c('span', {
    attrs: {
      "class": "hljs-attribute"
    }
  }, [_vm._v("font-weight")]), _vm._v(": bold;\n}\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("style")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("具体可以参见"), _c('u-link', {
    attrs: {
      "href": "https://vue-loader.vuejs.org/zh-cn/features/css-modules.html"
    }
  }, [_vm._v("vue-loader的CSS Modules")])], 1), _vm._v(" "), _c('p', [_vm._v("在多文件Vue中，在"), _c('code', {
    pre: true
  }, [_vm._v(".vue")]), _vm._v("文件夹添加"), _c('code', {
    pre: true
  }, [_vm._v("module.css")]), _vm._v("文件，书写方式与单文件Vue相同。")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("u-sample.vue/\n    index.html\n    index.js\n    module.css\n")])]), _vm._v(" "), _c('h4', [_vm._v("REA风格")]), _vm._v(" "), _c('h3', [_vm._v("图片的模块化")]), _vm._v(" "), _c('p', [_vm._v("由于位图图片在Retina屏下需要设定@2x图，因此我们推荐优先使用svg图片。")])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});