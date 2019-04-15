# 命令行工具（CLI）

### vusion help

显示vusion所有命令

### vusion -V, --version

安装版本

### vusion init \<template-name\> \<project-name\>

创建 vusion 项目。`template-name` 可以选择这几种类型：`simple`、`web-app`、`library`、`admin-cloud-fs`。`project-name` 为新项目的名称。

### vusion dev

开发者模式启动项目

#### -c, --config-path \<path\>
设置 Vusion 配置路径

#### -e, --entry-path \<path\>
设置入口文件路径

#### -C, --no-clean
不清除打包目录

#### -l, --library-path \<path\>
设置库入口文件。`template-name` 为 `library` 时，默认入口文件为 `./index.js`。

#### -d, --docs
为库中的基础组件生成文档。`template-name` 为 `library` 时，默认开启该功能。

#### -p, --port \<port\>
设置服务端口

#### -O, --no-open
启动服务时，不在浏览器中打开页面。

#### -H, --no-hot
关闭热更新

#### --resolve-priority
解析 modules 和 loaders 使用包的优先级。"cwd"：当前目录，"cli"：cli目录。默认使用当前目录。


### vusion build

打包

#### -c, --config-path \<path\>
设置 Vusion 配置路径

#### -e, --entry-path \<path\>
设置入口文件路径

#### -C, --no-clean
Disable to clean and copy

#### -l, --library-path \<path\>
设置库入口文件。`project-type` 为 `library` 时，默认入口文件为 `./index.js`。

#### -d, --docs
为库中的基础组件生成文档。`project-type` 为 `library` 时，默认开启该功能。

#### -s, --source-map
生成 source map

#### --extract-css
使用 ExtractTextPlugin 处理 CSS 文件

#### --uglify-js
使用 UglifyJSPlugin 处理JS文件

#### --minify-js
设置为 `true` 或者 `'babel-minify'` 时，使用 BabelMinifyPlugin 压缩 JS 文件。
设置为 `'uglify-js'` 时，使用 UglifyJSPlugin 压缩 JS 文件。效果同 `--uglify`。

#### --experimental
启用试用中的 loader 和 plugin。

#### --resolve-priority
解析 modules 和 loaders 使用包的优先级。"cwd"：当前目录，"cli"：cli目录。默认使用当前目录。

### vusion test

跑 karma 测试

#### -c, --config-path \<path\>
设置 Vusion 配置路径

#### -p, --port \<port\>
设置服务端口

#### -w, --watch
监听 Karma

#### --resolve-priority
解析 modules 和 loaders 使用包的优先级。"cwd"：当前目录，"cli"：cli目录。默认使用当前目录。

### vusion publish \<version\>

发布版本

### vusion ghpages

发布到 gh-pages

#### -p, --path \<path\>
设置服务端口

#### -c, --config-path \<path\>
发布文件夹。 默认为 webpack 的 output 路径。

### vusion dep

显示 vusion-cli 的所有依赖

### vusion transform \<vue-path\>
切换 Vue 组件模式：单文件或者多文件模式。
