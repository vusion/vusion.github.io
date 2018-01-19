# 常见命令

### vusion -V, --version

该命令用于查看 Vusion 的当前版本。

### vusion init <project-type> <project-name>

该命令用于创建一个新的项目。`project-type`可以选择这几种类型：`app`、`app-pro`、`library`、`fullstack`。`project-name`为新项目的名称。

新项目的模板可以查看 [Vusion Templates](https://github.com/vusion/vusion-templates)。

### vusion dev

该命令用于开发阶段，会启动一个开发服务器（WebpackDevSever），开启热更新，监听文件变化。启动时会自动在浏览器中打开页面。

- 可以使用`-p`选项指定端口；
- 可以使用`-O, --no-open`选项阻止自动打开浏览器。

在 dev 模式中，使用的是较快的且有 Source Map 的`#eval-source-map`的打包方式，为了迅速更新，会关闭一些部署时才需要的 loaders 和 plugins。

该模式会自动注入环境变量`process.env.NODE_ENV === 'development'`。

### vusion build

该命令用于打包发布。默认会使用 UglifyJS 压缩，打包 svg 和 png 的雪碧图。

- 可以使用`--extract-css`将 CSS 从 JS 中提出；
- 可以使用`--source-map`开启 Source Map，方便在部署环境调试。

在 build 模式中，使用了`OccurrenceOrderPlugin`、`ModuleConcatenationPlugin`等 plugins 对模块进行优化。

该模式会自动注入环境变量`process.env.NODE_ENV === 'production'`。

### vusion test

该命令使用 Karma 运行单元测试脚本。默认使用 Chrome 浏览器，会检索`src`目录中所有 Vue 组件中`<test>`或`*.spec.js`的单元测试，和`test`目录下`*.spec.js`的单元测试。

- 可以使用`-p`选项指定端口；
- 可以使用`-w, --watch`监听文件变更。

### vusion ghpages

可以直接将`public`目录发布到`gh-pages`分支。主要用于组件文档发布。

### vusion dep

会显示 Vusion 所有的依赖包版本，方便调试。

### 下一步

常见命令的各种选项可以很即时地开启与关闭 Vusion 的各种功能，更多命令参见[命令行工具 API](/api/cli)。

如果要长期设置一些更灵活、更复杂的功能，就需要[修改配置文件](/guides/config)了。

