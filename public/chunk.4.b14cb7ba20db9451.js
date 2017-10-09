webpackJsonp([4],{

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

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(634);

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_3ff2b223_hasScoped_false_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_component_based_md__ = __webpack_require__(635);
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
  __WEBPACK_IMPORTED_MODULE_0__vusion_cli_node_modules_vusion_vue_loader_lib_template_compiler_index_id_data_v_3ff2b223_hasScoped_false_vusion_cli_node_modules_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_component_based_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("组件化")]), _vm._v(" "), _c('h3', [_vm._v("完全组件化")]), _vm._v(" "), _c('p', [_vm._v("在Vusion理念中，我们将用户界面中的每个功能完备的结构单元称为"), _c('strong', [_vm._v("组件")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("这里的“功能完备”不仅仅指模板（HTML）、样式（CSS）和逻辑（JS），还包括所依赖的资源、文档、单元测试等，我们把这称为"), _c('strong', [_vm._v("组件化的完备性")]), _vm._v("。")]), _vm._v(" "), _c('p', [_vm._v("传统的一些前端项目，目录结构会按照"), _c('code', {
    pre: true
  }, [_vm._v("html")]), _vm._v("、"), _c('code', {
    pre: true
  }, [_vm._v("css")]), _vm._v("、"), _c('code', {
    pre: true
  }, [_vm._v("js")]), _vm._v("、"), _c('code', {
    pre: true
  }, [_vm._v("docs")]), _vm._v("、"), _c('code', {
    pre: true
  }, [_vm._v("test")]), _vm._v("来分，这样常常导致路径引用很深、文件没有分治、目录结构混乱、组件无法单独抽取等问题。")]), _vm._v(" "), _c('p', [_vm._v("而在Vusion中，我们采取"), _c('strong', [_vm._v("一个组件一个地方")]), _vm._v("的原则。")]), _vm._v(" "), _c('h4', [_vm._v("单文件组件")]), _vm._v(" "), _c('p', [_vm._v("我们将Vue原生的单文件组件做了扩展。比如一个"), _c('code', {
    pre: true
  }, [_vm._v("u-select.vue")]), _vm._v("文件：")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-xhtml"
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
  }, [_vm._v("template")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("               "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("<!-- 组件模板 -->")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "undefined"
    }
  }), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("                   "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("<!-- 组件逻辑 -->")]), _vm._v("\n"), _c('span', {
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
      "class": "undefined"
    }
  }), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("style")]), _vm._v(">")]), _vm._v("              "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("<!-- 组件样式 -->")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("test")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("test")]), _vm._v(">")]), _vm._v("                       "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("<!-- 单元测试 -->")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("docs")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("docs")]), _vm._v(">")]), _vm._v("                       "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("<!-- 组件文档 -->")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("changelog")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("changelog")]), _vm._v(">")]), _vm._v("             "), _c('span', {
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("<!-- 修改日志 -->")]), _vm._v("\n")])]), _vm._v(" "), _c('p', [_vm._v("除了原来的"), _c('code', {
    pre: true
  }, [_vm._v("<template>")]), _vm._v("、"), _c('code', {
    pre: true
  }, [_vm._v("<script>")]), _vm._v("、"), _c('code', {
    pre: true
  }, [_vm._v("<style>")]), _vm._v("三个标签，还利用"), _c('u-link', {
    attrs: {
      "href": "https://github.com/vuejs/vue-loader"
    }
  }, [_vm._v("vue-loader")]), _vm._v("的"), _c('u-link', {
    attrs: {
      "href": "https://vue-loader.vuejs.org/zh-cn/configurations/custom-blocks.html"
    }
  }, [_vm._v("自定义块")]), _vm._v("功能增加了"), _c('code', {
    pre: true
  }, [_vm._v("<test>")]), _vm._v("、"), _c('code', {
    pre: true
  }, [_vm._v("<docs>")]), _vm._v("、"), _c('code', {
    pre: true
  }, [_vm._v("<changelog>")]), _vm._v("三个标签。")], 1), _vm._v(" "), _c('h4', [_vm._v("多文件组件")]), _vm._v(" "), _c('p', [_vm._v("但有时单文件可以支持的功能还是有些薄弱，比如无法放置资源，因此我们创造了"), _c('u-link', {
    attrs: {
      "href": "https://github.com/vusion/vue-multifile-loader"
    }
  }, [_vm._v("vue-multifile-loader")]), _vm._v("，它与"), _c('code', {
    pre: true
  }, [_vm._v("vue-loader")]), _vm._v("的功能时时保持同步。")], 1), _vm._v(" "), _c('p', [_vm._v("这样，一个Vue组件可以采用如下方式书写：")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("u-select.vue/index.html             # 组件模板\nu-select.vue/index.js               # 组件逻辑\nu-select.vue/module.css             # 组件样式\nu-select.vue/icons/arrow-down.svg   # 相关资源\nu-select.vue/test.spec.js           # 单元测试\nu-select.vue/README.md              # 组件文档\nu-select.vue/CHANGELOG.md           # 修改日志\nu-select.vue/package.json           # npm包信息\n")])]), _vm._v(" "), _c('h4', [_vm._v("单文件组件 vs 多文件组件")]), _vm._v(" "), _c('p', [_vm._v("那么为什么要同时支持两种书写方式呢？")]), _vm._v(" "), _c('p', [_vm._v("主要是因为两种书写方式各有特色。单文件组件创建起来比较快捷，也是Vue原生的特色，适用于书写业务模块；而多文件组件在功能上支持的更多，适用于构造通用组件，方便扩展。")]), _vm._v(" "), _c('p', [_vm._v("Webpack的模块引入字符串可以将"), _c('code', {
    pre: true
  }, [_vm._v("index.js")]), _vm._v("部分省略，因此两种书写方式都可以写作"), _c('code', {
    pre: true
  }, [_vm._v("import Select from 'u-select.vue'")]), _vm._v("，这样便不会对依赖模块有所影响。")]), _vm._v(" "), _c('p', [_vm._v("一般来说，单文件组件的功能是多文件组件的功能的子集。如果一个组件没有使用到那些额外的功能的话，我们认为两种书写方式是"), _c('strong', [_vm._v("等效")]), _vm._v("的。")]), _vm._v(" "), _c('p', [_vm._v("所以Vusion CLI提供一个"), _c('code', {
    pre: true
  }, [_vm._v("transform")]), _vm._v("的命令，可以将组件在两者之间互相转换。")]), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-shell"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("vusion transform ./src/u-select.vue\n")])]), _vm._v(" "), _c('h3', [_vm._v("组件的分类")]), _vm._v(" "), _c('p', [_vm._v("在一个项目中，一般可以将组件分类两类：")]), _vm._v(" "), _c('ul', [_c('li', [_c('strong', [_vm._v("通用组件（common）")]), _vm._v("：在项目中多个模块中可能用到的组件。推荐在Vue中进行全局注册，并进行统一管理。"), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-javascript"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_vm._v("Vue.component("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'u-select'")]), _vm._v(", Select);\n")])])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("特定组件（specific）")]), _vm._v("：在项目中仅仅个别模块用到的组件。为了减少全局污染，推荐用Vue的"), _c('code', {
    pre: true
  }, [_vm._v("components")]), _vm._v("选项进行局部注册。"), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-javascript"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("default")]), _vm._v(" {\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("components")]), _vm._v(": {\n        "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'s-task-detail'")]), _vm._v(": TaskDetail,\n    },\n};\n")])])])]), _vm._v(" "), _c('h3', [_vm._v("组件的扩展与继承")]), _vm._v(" "), _c('p', [_vm._v("在Vue中，可以使用"), _c('code', {
    pre: true
  }, [_vm._v("extend")]), _vm._v("或"), _c('code', {
    pre: true
  }, [_vm._v("mixin")]), _vm._v("对组件进行扩展与继承。")]), _vm._v(" "), _c('p', [_vm._v("例如表单控件都有一些验证、反馈、限制等共有的特性，这时我们可以将这些特性抽取为一个基类组件"), _c('code', {
    pre: true
  }, [_vm._v("u-field")]), _vm._v("，然后让"), _c('code', {
    pre: true
  }, [_vm._v("u-input")]), _vm._v("、"), _c('code', {
    pre: true
  }, [_vm._v("u-select")]), _vm._v("、"), _c('code', {
    pre: true
  }, [_vm._v("u-date-picker")]), _vm._v("等从这个基组件派生。")]), _vm._v(" "), _c('p', [_vm._v("在完全模块化之后，组件的依赖关系只能走JS路线。如果要想给一个组件库中的组件"), _c('code', {
    pre: true
  }, [_vm._v("u-select")]), _vm._v("复写样式或者添加属性，就需要从这个组件派生出一个新的也叫"), _c('code', {
    pre: true
  }, [_vm._v("u-select")]), _vm._v("的组件，然后在全局注册中将原来的组件覆盖掉。")]), _vm._v(" "), _c('p', [_vm._v("为了方便描述，我们把后一种同名派生称为"), _c('strong', [_vm._v("扩展")]), _vm._v("，把前一种异名派生称为"), _c('strong', [_vm._v("继承")]), _vm._v("。")]), _vm._v(" "), _c('h4', [_vm._v("扩展与继承的策略")]), _vm._v(" "), _c('p', [_vm._v("为了简便，在组件扩展或继承时，如果模板、样式和逻辑等一些功能块没有发生变化，可以省略。")]), _vm._v(" "), _c('p', [_vm._v("下表为几种功能块省略或未省略时的扩展与继承策略。")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th'), _vm._v(" "), _c('th', [_vm._v("逻辑（JS）")]), _vm._v(" "), _c('th', [_vm._v("模板（HTML）")]), _vm._v(" "), _c('th', [_vm._v("样式（CSS）")]), _vm._v(" "), _c('th', [_vm._v("文档（Docs）")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("省略")]), _vm._v(" "), _c('td', [_c('em', [_vm._v("报错")])]), _vm._v(" "), _c('td', [_vm._v("与基组件一致")]), _vm._v(" "), _c('td', [_vm._v("与基组件一致")]), _vm._v(" "), _c('td', [_vm._v("与基组件一致")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("未省略")]), _vm._v(" "), _c('td', [_vm._v("Vue的Mixin策略")]), _vm._v(" "), _c('td', [_vm._v("\b 覆盖")]), _vm._v(" "), _c('td', [_vm._v("补充/合并/重写")]), _vm._v(" "), _c('td', [_vm._v("覆盖")])])])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"name":"vusion-icon-font","ttf":{"path":"/public/vusion-icon-font.ttf","md5":"fb9a46baa44051a16c3a9fa093544dd2"},"eot":{"path":"/public/vusion-icon-font.eot","md5":"6be4e672566174ee4653c0f457b6a643"},"woff":{"path":"/public/vusion-icon-font.woff","md5":"328f67e3156e3dac863257874f66f168"},"svg":{"path":"/public/vusion-icon-font.svg","md5":"9ccbd2a74b9a2f854e4af2528d586532"}};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"name":"vusion-icon-font","ttf":{"path":"/public/vusion-icon-font.ttf","md5":"fb9a46baa44051a16c3a9fa093544dd2"},"eot":{"path":"/public/vusion-icon-font.eot","md5":"6be4e672566174ee4653c0f457b6a643"},"woff":{"path":"/public/vusion-icon-font.woff","md5":"328f67e3156e3dac863257874f66f168"},"svg":{"path":"/public/vusion-icon-font.svg","md5":"9ccbd2a74b9a2f854e4af2528d586532"}});
                                }