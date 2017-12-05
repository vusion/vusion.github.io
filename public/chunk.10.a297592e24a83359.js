/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"fontName":"vusion-icon-font","styleContent":"@font-face {\n\tfont-family: \"vusion-icon-font\";\n\tsrc:url(\"/public/vusion-icon-font.ttf?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"truetype\"),\n\turl(\"/public/vusion-icon-font.eot?2453eb6e088dfa4ec2fabd031e83bbcd#iefix\") format(\"embedded-opentype\"),\n\turl(\"/public/vusion-icon-font.woff?2453eb6e088dfa4ec2fabd031e83bbcd\") format(\"woff\"),\n\turl(\"/public/vusion-icon-font.svg?2453eb6e088dfa4ec2fabd031e83bbcd#vusion-icon-font\") format(\"svg\");\n}"});
                                }webpackJsonp([10],{

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

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_37a6f3d4_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_technical_selection_md__ = __webpack_require__(460);
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
  __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_37a6f3d4_hasScoped_false_preserveWhitespace_false_buble_transforms_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_html_loader_index_js_ref_5_1_technical_selection_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-article',[_c('h1',[_vm._v("技术选型")]),_c('h2',[_vm._v("Vue")]),_c('h3',[_vm._v("为什么要选择Vue？")]),_c('p',[_vm._v("在Vue的文档中已经有了一篇详细的"),_c('u-link',{attrs:{"href":"https://cn.vuejs.org/v2/guide/comparison.html"}},[_vm._v("对比其他框架")]),_vm._v("一文，如果您没有阅读过可以先看一下。")],1),_c('p',[_vm._v("但我们还是想用自己的角度来解答这个问题。")]),_c('h3',[_vm._v("友好的依赖管理")]),_c('p',[_vm._v("React中需要手动"),_c('code',{pre:true},[_vm._v("setState")]),_vm._v("或者一开始就要结合复杂的状态管理机制。在组件树比较复杂时，需要手动实现"),_c('code',{pre:true},[_vm._v("shouldComponentUpdate")]),_vm._v("来做一些性能优化。Angular中也是类似，随着组件规模的扩大，需要时刻留意组件脏检查产生潜在的性能问题。")]),_c('p',[_vm._v("而在Vue中，这一切都由依赖管理帮开发者解决了。我们挑选框架时，一个很重要的参考点就是该框架能不能填更多的坑，将许多框架层面的细节隐藏起来，尽可能减少开发者的关注度，让我们把更多精力放在业务逻辑层面。")]),_c('h3',[_vm._v("模板、逻辑、样式的分离")]),_c('p',[_vm._v("JSX + CSS-in-JS 违反了模板、逻辑、样式的分离原则，将这三者杂揉在了一起，全部转为JavaScript的开发模式。虽然这种方式能较大地提高组件开发的灵活性，但失去了声明式模板的直观感受与CSS样式表的许多特性，这是得不偿失的。同时也失去了单独将模板与样式进行结合做可视化编辑的可能。")]),_c('h3',[_vm._v("学习曲线")]),_c('p',[_vm._v("Vue的文档很完善，API设计简洁、灵活，解决了许多前端常见的问题，学习曲线毋庸置疑是最平缓的。")]),_c('h2',[_vm._v("Webpack")]),_c('h3',[_vm._v("Webpack是什么？")]),_c('blockquote',[_c('p',[_vm._v("Webpack = Module Building System")])]),_c('p',[_vm._v("简单来说，Webpack就是把有各种依赖关系的源文件打包成一系列静态资源的一个打包器。")]),_c('p',[_c('img',{attrs:{"src":__webpack_require__(461),"alt":""}})]),_c('p',[_vm._v("在ES6出现之前，JavaScript一直没有像java或python的import这样的模块体系，这对开发大型复杂的前端工程造成了巨大的障碍。同时，前端还需要处理CSS、png、svg、webfonts等非JS的静态资源，往往这些文件之间也有许多依赖关系。而Webpack很好地解决了这些问题。")]),_c('p',[_vm._v("与此同时，Webpack在打包速度、热更新、代理服务方面也处理得非常好，Webpack的loaders和plugins也很健全。")]),_c('p',[_vm._v("因此Webpack已经基本成为目前前端项目的标配构建工具了。")]),_c('p',[_vm._v("接下来的"),_c('u-link',{attrs:{"href":"modularity"}},[_vm._v("模块化")]),_vm._v("一节将会详细讲述Webpack在处理前端各种静态资源的强大优势，以及Vusion在使用Webpack时具体的配置策略。")],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "webpack-bundler.d734657deb967f3e.jpg";

/***/ })

});