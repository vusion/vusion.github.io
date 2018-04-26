webpackJsonp([19],{489:function(e,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var p={render:function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("u-article",[_("h1",[e._v("常见命令")]),_("h3",[e._v("vusion -V, --version")]),_("p",[e._v("该命令用于查看 Vusion 的当前版本。")]),_("h3",[e._v("vusion init <project-type> <project-name>")]),_("p",[e._v("该命令用于创建一个新的项目。"),_("code",{pre:!0},[e._v("project-type")]),e._v("可以选择这几种类型："),_("code",{pre:!0},[e._v("app")]),e._v("、"),_("code",{pre:!0},[e._v("app-pro")]),e._v("、"),_("code",{pre:!0},[e._v("library")]),e._v("、"),_("code",{pre:!0},[e._v("fullstack")]),e._v("。"),_("code",{pre:!0},[e._v("project-name")]),e._v("为新项目的名称。")]),_("p",[e._v("新项目的模板可以查看 "),_("u-link",{attrs:{href:"https://github.com/vusion/vusion-templates"}},[e._v("Vusion Templates")]),e._v("。")],1),_("h3",[e._v("vusion dev")]),_("p",[e._v("该命令用于开发阶段，会启动一个开发服务器（WebpackDevSever），开启热更新，监听文件变化。启动时会自动在浏览器中打开页面。")]),_("ul",[_("li",[e._v("可以使用"),_("code",{pre:!0},[e._v("-p")]),e._v("选项指定端口；")]),_("li",[e._v("可以使用"),_("code",{pre:!0},[e._v("-O, --no-open")]),e._v("选项阻止自动打开浏览器。")])]),_("p",[e._v("在 dev 模式中，使用的是较快的且有 Source Map 的"),_("code",{pre:!0},[e._v("#eval-source-map")]),e._v("的打包方式，为了迅速更新，会关闭一些部署时才需要的 loaders 和 plugins。")]),_("p",[e._v("该模式会自动注入环境变量"),_("code",{pre:!0},[e._v("process.env.NODE_ENV === 'development'")]),e._v("。")]),_("h3",[e._v("vusion build")]),_("p",[e._v("该命令用于打包发布。默认会使用 UglifyJS 压缩，打包 svg 和 png 的雪碧图。")]),_("ul",[_("li",[e._v("可以使用"),_("code",{pre:!0},[e._v("--extract-css")]),e._v("将 CSS 从 JS 中提出；")]),_("li",[e._v("可以使用"),_("code",{pre:!0},[e._v("--source-map")]),e._v("开启 Source Map，方便在部署环境调试。")])]),_("p",[e._v("在 build 模式中，使用了"),_("code",{pre:!0},[e._v("OccurrenceOrderPlugin")]),e._v("、"),_("code",{pre:!0},[e._v("ModuleConcatenationPlugin")]),e._v("等 plugins 对模块进行优化。")]),_("p",[e._v("该模式会自动注入环境变量"),_("code",{pre:!0},[e._v("process.env.NODE_ENV === 'production'")]),e._v("。")]),_("h3",[e._v("vusion test")]),_("p",[e._v("该命令使用 Karma 运行单元测试脚本。默认使用 Chrome 浏览器，会检索"),_("code",{pre:!0},[e._v("src")]),e._v("目录中所有 Vue 组件中"),_("code",{pre:!0},[e._v("<test>")]),e._v("或"),_("code",{pre:!0},[e._v("*.spec.js")]),e._v("的单元测试，和"),_("code",{pre:!0},[e._v("test")]),e._v("目录下"),_("code",{pre:!0},[e._v("*.spec.js")]),e._v("的单元测试。")]),_("ul",[_("li",[e._v("可以使用"),_("code",{pre:!0},[e._v("-p")]),e._v("选项指定端口；")]),_("li",[e._v("可以使用"),_("code",{pre:!0},[e._v("-w, --watch")]),e._v("监听文件变更。")])]),_("h3",[e._v("vusion ghpages")]),_("p",[e._v("可以直接将"),_("code",{pre:!0},[e._v("public")]),e._v("目录发布到"),_("code",{pre:!0},[e._v("gh-pages")]),e._v("分支。主要用于组件文档发布。")]),_("h3",[e._v("vusion dep")]),_("p",[e._v("会显示 Vusion 所有的依赖包版本，方便调试。")]),_("h3",[e._v("下一步")]),_("p",[e._v("常见命令的各种选项可以很即时地开启与关闭 Vusion 的各种功能，更多命令参见"),_("u-link",{attrs:{href:"/api/cli"}},[e._v("命令行工具 API")]),e._v("。")],1),_("p",[e._v("如果要长期设置一些更灵活、更复杂的功能，就需要"),_("u-link",{attrs:{href:"/guides/config"}},[e._v("修改配置文件")]),e._v("了。")],1)])},staticRenderFns:[]},r=_(1)(null,p,!1,null,null,null);v.default=r.exports}});