# 起步

## 命令行工具（CLI）

### 1. 创建新项目

运行下面的命令来创建一个新的应用：

``` bash
vusion init app my-app
```

其中`app`为项目类型，目前我们想要创建的是一个单页 Web 应用。`my-app`为项目的名称，您也可以改成别的名字。

如果想创建多页面、多模块、企业级的大型应用，请使用`app-pro`类型。

### 2. 安装依赖包

接下来安装项目中需要的依赖包：

``` bash
cd my-app
npm install
```

> 对于大陆用户，建议将npm的注册表源设置为国内的镜像，可以大幅提升安装速度。

### 3. 启动开发服务器

启动服务器只需要一句简单的命令。

``` bash
vusion dev
```

`vusion dev`命令会启动开发服务器，自动打开浏览器，利用 Webpack 监听文件的变化，并在修改这些文件时重新构建此应用。

- 可以使用`-p`选项指定端口；
- 可以使用`--no-open`选项阻止自动打开浏览器。

更多 Vusion CLI 的命令可以查阅 [常见命令](/guides/commands) 或 [命令行工具 API](/api/cli)。

如果运行成功，便会在浏览器中打开一个如下的 Hello World 页面：

### 4. 编辑第一个页面

打开`src/views/main.vue`文件，在`<template>`中将`Welcome to Vusion App`改为`Welcome to My First Vusion App`。

保存之后，浏览器会自动更新。

再尝试改改样式，在`<style module>`中将`.heading`的`font-size`改大一些。

再打开`src/components/base/global.css`文件，换一下`$brand-primary`的颜色，比如`#1976d2`。

保存之后，页面中各种组件的主题色是不是瞬时变了？

### 下一步

看到这么多文件您一定想知道它们是干什么的？下一节会详细介绍 Vusion 项目的[目录结构](/guides/structure)。
