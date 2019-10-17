# 命令行工具（CLI）

### vusion help

显示vusion所有命令

### vusion -V, --version

安装版本

### vusion init \<template-name\> \<project-name\>

创建 vusion 项目。`template-name` 可以选择这几种类型：`simple`、`web-app`、`library`、`admin-cloud-fs`。`project-name` 为新项目的名称。

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
