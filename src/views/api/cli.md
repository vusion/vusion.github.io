# 命令行工具（CLI）

### vusion help

显示vusion所有命令

### vusion -V, --version

安装版本

### vusion init &lt;project-type> &lt;project-name>

创建 vusion 项目。`project-type` 可以选择这几种类型：`app`、`app-pro`、`library`、`fullstack`。`project-name` 为新项目的名称。

### vusion dev

开发者模式启动项目

#### -c, --config-path &lt;path>
设置 Vusion 配置路径

#### -e, --entry-path &lt;path>
设置入口文件路径

#### -C, --no-clean
Disable to clean and copy

#### -l, --library-path &lt;path>
设置库入口文件。`project-type` 为 `library` 时，默认入口文件为 `./index.js`。

#### -d, --docs
为库中的基础组件生成文档。`project-type` 为 `library` 时，默认开启该功能。

#### -p, --port &lt;port>
设置服务端口

#### -O, --no-open
启动服务时，不在浏览器中打开页面。

#### -H, --no-hot
关闭热更新

#### --resolve-priority
Priority to resolve modules or loaders, "cwd"(default) or "cli"


### vusion build

打包

#### -c, --config-path &lt;path>
设置 Vusion 配置路径

#### -e, --entry-path &lt;path>
设置入口文件路径

#### -C, --no-clean
Disable to clean and copy

#### -l, --library-path &lt;path>
设置库入口文件。`project-type` 为 `library` 时，默认入口文件为 `./index.js`。

#### -d, --docs
为库中的基础组件生成文档。`project-type` 为 `library` 时，默认开启该功能。

#### -s, --source-map
生成 source map

#### --extract-css
使用 ExtractTextPlugin 处理 css 文件

#### --uglify-js
使用UglifyJSPlugin处理JS文件

#### --minify-js
设置为 `true` 或者 `'babel-minify'` 时，使用 BabelMinifyPlugin 压缩 JS 文件。
设置为 `'uglify-js'` 时，使用 UglifyJSPlugin 压缩 JS 文件。效果同 `--uglify`。

#### --experimental
启用试用中的 loader 和 plugin。

#### --resolve-priority
Priority to resolve modules or loaders, "cwd"(default) or "cli"

### vusion test

跑 karma 测试

#### -c, --config-path &lt;path>
设置 Vusion 配置路径

#### -p, --port &lt;port>
设置服务端口

#### -w, --watch
监听 Karma

#### --resolve-priority
Priority to resolve modules or loaders, "cwd"(default) or "cli"

### vusion publish &lt;version>

发布版本

### vusion ghpages

发布到 gh-pages

#### -p, --path &lt;path>
设置服务端口

#### -c, --config-path &lt;path>
发布文件夹。 默认为 webpack 的 output 路径。

### vusion dep

显示 vusion-cli 的所有依赖

### vusion transform &lt;vue-path>
切换 Vue 组件模式：单文件或者多文件模式。 
