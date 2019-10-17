# 基础配置

Vusion 在 Vue CLI 3 的基础上做了更多配置项。Vue CLI 的配置可以查阅 [配置参考](https://cli.vuejs.org/zh/config/)。

### 配置方式

Vusion 的项目配置，可以在`package.json`中用一个`vusion`对象表示，也可以在目录下创建一个`vusion.config.js`。如果两者同时存在，会优先使用配置文件。

比如组件库类型的配置很简单，只需在`package.json`中添加：

``` json
{ "vusion": {
    "version": ">=0.6.0",
    "type": "library"
} }
```

应用类型一般用配置文件。下面为`app`模板中的一份简单配置。

``` js
module.exports = {
    version: '>=0.6.0',                                 // 能够支持该项目的 Vusion CLI 的版本条件
    type: 'app',                                        // [必填] 项目类型。目前可选：app、app-pro、library、fullstack
    staticPath: './static',                             // 指定静态文件目录。该目录中的内容将会直接被拷贝到输出目录中
    libraryPath: './src/components',                    // [必填] 指定项目库的路径。用于检索全局样式等文件
};
```

### 下一步

指南到此结束，接下来你可以：

- 查看[全部配置 API](/api/config)；
<!-- - 阅读[概念](/concepts)深入理解 Vusion 架构细节； -->
- 查看 Vusion 平台的[组件库](/libraries)。

