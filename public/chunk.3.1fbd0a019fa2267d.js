webpackJsonp([3],{

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

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(625);

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2a90342c_hasScoped_false_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_introduction_md__ = __webpack_require__(626);
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_2a90342c_hasScoped_false_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_introduction_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("介绍")]), _vm._v(" "), _c('h3', [_vm._v("Vusion是什么？")]), _vm._v(" "), _c('p', [_vm._v("Vusion是基于Webpack+Vue的一整套前端解决方案，包括架构模型、开发规范、组件平台、工程模板、命令行工具和可视化工具等一系列配套设施。")]), _vm._v(" "), _c('p', [_vm._v("这是我们团队多年前端实践经验的研究成果，可以让您快速搭建各种类型的前端项目，避免迷茫的技术选型与烦琐的项目配置。Vusion已经帮您在前端架构的各个层面选择好了解决方法，如Webpack常用loader和plugin的选择、CSS模块化方案、组件扩展机制、组件库平台、Mock数据、测试框架的选择等，但同时并没有完全限制架构模型的扩展，您依然可以按照Webpack的配置方式与Vue的生态体系继续改进项目。")]), _vm._v(" "), _c('h4', [_vm._v("Vusion包含以下工具")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Vusion App")]), _vm._v(" "), _c('li', [_vm._v("Vusion CLI")]), _vm._v(" "), _c('li', [_vm._v("Vukoa CLI")])]), _vm._v(" "), _c('h4', [_vm._v("Vusion默认有两套组件库")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Vusion UI")]), _vm._v(" "), _c('li', [_vm._v("Proto UI")])]), _vm._v(" "), _c('h4', [_vm._v("Vusion目前支持的项目类型有")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Library")]), _vm._v(" "), _c('li', [_vm._v("WebApp")])]), _vm._v(" "), _c('p', [_vm._v("Vusion具体解决了哪些架构问题，采用了哪些技术方案，后面的章节将会详细展开。")])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});