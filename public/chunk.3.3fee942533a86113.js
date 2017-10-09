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
    window.ICON_FONT_STYLE && addStyle();
    window.HAS_CREATE_FONT_STYLE = true;
}
if(false){
    window.ICON_FONT_STYLE && (window.ICON_FONT_STYLE.update = updateStyle);
}


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(637);

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_f1323b6a_hasScoped_false_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_library_md__ = __webpack_require__(638);
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
  __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_f1323b6a_hasScoped_false_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_library_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("组件库")]), _vm._v(" "), _c('h3', [_vm._v("组件库的适用性")]), _vm._v(" "), _c('blockquote', [_c('p', [_c('strong', [_vm._v("组件库")]), _vm._v("是一系列通用组件的集合。")])]), _vm._v(" "), _c('p', [_vm._v("我们在做某个项目的时候，通常会把项目中的通用组件放在一个地方进行统一管理。这便是"), _c('strong', [_vm._v("项目级别")]), _vm._v("的组件库。")]), _vm._v(" "), _c('p', [_vm._v("随着一个产品项目数量的增多，为了保证交互视觉的一致性并且减少开发成本，就需要把这些项目中的通用组件抽出来放在单独的仓库中进行统一管理。这便是"), _c('strong', [_vm._v("产品级别")]), _vm._v("的组件库。")]), _vm._v(" "), _c('p', [_vm._v("多个产品之间总有一些组件，交互逻辑相似，而视觉上差异较大。我们也可以将视觉简化，保留下交互逻辑和设计好的API，构成原型组件库，方便各产品扩展。这便是"), _c('strong', [_vm._v("跨产品级别")]), _vm._v("的组件库。")]), _vm._v(" "), _c('p', [_vm._v("以上三种适用级别的组件库，Vusion均支持。")]), _vm._v(" "), _c('h3', [_vm._v("扩展性")]), _vm._v(" "), _c('p', [_vm._v("同构策略。")]), _vm._v(" "), _c('h3', [_vm._v("多主题")]), _vm._v(" "), _c('h3', [_vm._v("全局样式配置")])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"name":"vusion-icon-font","ttf":{"path":"/public/vusion-icon-font.ttf","md5":"dbfe67b41512663e89eac9cb56cc0b07"},"eot":{"path":"/public/vusion-icon-font.eot","md5":"657d000c700305d2f814d8d2b3f4d5d5"},"woff":{"path":"/public/vusion-icon-font.woff","md5":"6ced19e2a63afc6a568ed4ceca752b69"},"svg":{"path":"/public/vusion-icon-font.svg","md5":"be17bfef09c5a825325f8ecdb68f4765"}};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"name":"vusion-icon-font","ttf":{"path":"/public/vusion-icon-font.ttf","md5":"dbfe67b41512663e89eac9cb56cc0b07"},"eot":{"path":"/public/vusion-icon-font.eot","md5":"657d000c700305d2f814d8d2b3f4d5d5"},"woff":{"path":"/public/vusion-icon-font.woff","md5":"6ced19e2a63afc6a568ed4ceca752b69"},"svg":{"path":"/public/vusion-icon-font.svg","md5":"be17bfef09c5a825325f8ecdb68f4765"}});
                                }