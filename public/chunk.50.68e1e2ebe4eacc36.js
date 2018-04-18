"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?eeb54b1875cc5843cdbdaeb0aa9be8d0") format("truetype"),\n\turl("/public/vusion-icon-font.eot?eeb54b1875cc5843cdbdaeb0aa9be8d0#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?eeb54b1875cc5843cdbdaeb0aa9be8d0") format("woff"),\n\turl("/public/vusion-icon-font.svg?eeb54b1875cc5843cdbdaeb0aa9be8d0#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?eeb54b1875cc5843cdbdaeb0aa9be8d0") format("truetype"),\n\turl("/public/vusion-icon-font.eot?eeb54b1875cc5843cdbdaeb0aa9be8d0#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?eeb54b1875cc5843cdbdaeb0aa9be8d0") format("woff"),\n\turl("/public/vusion-icon-font.svg?eeb54b1875cc5843cdbdaeb0aa9be8d0#vusion-icon-font") format("svg");\n}'},webpackJsonp([50],{438:function(e,n,t){var o="ICON-FONT-FILE-STYLE";function d(e){return(e||window.ICON_FONT_STYLE).styleContent||""}function a(e){var n=document.createElement("style"),t=document.getElementsByTagName("head")[0];n.innerHTML=d(e),n.id=o,n.type="text/css",t?t.appendChild(n):window.addEventListener("load",function(){t.appendChild(n)})}e.exports=function(){window.HAS_CREATE_FONT_STYLE||(a(),window.HAS_CREATE_FONT_STYLE=!0)}},471:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("u-article",[t("h1",[e._v("页面与路由")]),t("p",[e._v("我们将可以用路由进行引导的这一类组件称为页面。")]),t("p",[e._v("页面组件只需要在路由配置中引用，不需要在 Vue 中全局注册"),t("code",{pre:!0},[e._v("name")]),e._v("，或者被别的组件引用。父页面一般会包含"),t("code",{pre:!0},[e._v("<router-view>")]),e._v("，用于设置子页面的位置。")]),t("h3",[e._v("目录结构")]),t("p",[e._v("所有页面都在"),t("code",{pre:!0},[e._v("src/views")]),e._v("中，目录结构与"),t("strong",[e._v("路由的路径")]),e._v("保持一致，一层层递归下去：")]),t("ul",[t("li",[e._v("一个"),t("code",{pre:!0},[e._v("index.vue")]),e._v("，表示当前目录名所对应的页面；")]),t("li",[e._v("一个其它名称的"),t("code",{pre:!0},[e._v(".vue")]),e._v("，表示当前目录的一个子页面。")])]),t("p",[e._v("如果这个页面为入口页面（需要后端路由的页面），直接在目录下添加后端模板，因为某些情况下可以前后端路由可能要互换，这样就不用改变目录结构。")]),t("p",[e._v("下面为一个示例：")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[e._v("views/\n├─ dashboard/\n│   ├─ index.html                   # 直接添加模板\n│   ├─ index.vue                    # 入口页面。对应路由'/dashboard'\n│   ├─ task/\n│   │   ├─ index.vue                # 任务页。对应路由'/dashboard/task'\n│   │   ├─ create.vue               # 任务创建页。对应路由'/dashboard/task/create'\n│   │   ├─ edit.vue                 # 任务编辑页。对应路由'/dashboard/task/edit'\n│   │   ├─ detail/                  #\n│   │   │   ├─ index.vue            # 任务详情页。对应路由'/dashboard/task/detail'\n│   │   │   ├─ summary.vue          # 任务摘要页。对应路由'/dashboard/task/detail/summary'\n│   │   │   ├─ subtask.vue          # 子任务页。对应路由'/dashboard/task/detail/subtask'\n│   │   │   └─ ...\n│   │   └─ ...\n│   └─ ...\n└─ ...\n")])]),t("p",[e._v("部分页面如上面的“子任务页”，它的视图结构可能不在"),t("code",{pre:!0},[e._v("detail")]),e._v("的"),t("code",{pre:!0},[e._v("<router-view>")]),e._v("下，但我们仍然要按路由结构把它放在"),t("code",{pre:!0},[e._v("detail")]),e._v("目录下。可以通过灵活的路由配置将它的视图结构提出来。")]),t("h3",[e._v("下一步")]),t("p",[e._v("下一节"),t("u-link",{attrs:{href:"/guides/library"}},[e._v("组件库")]),e._v("。")],1)])},staticRenderFns:[]},d=t(1)(null,o,!1,null,null,null);n.default=d.exports}});