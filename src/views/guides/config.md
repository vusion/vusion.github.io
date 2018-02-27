# 基础配置

### 配置方式

Vusion 的项目配置，可以在`package.json`中用一个`vusion`对象表示，也可以在目录下创建一个`vusion.config.js`。如果两者同时存在，会优先使用配置文件。使用 Vusion CLI 时，也可以用`-c, --config-path`临时指定一个配置文件。

比如组件库类型的配置很简单，只需在`package.json`中添加：

``` json
{ "vusion": {
    "version": ">=0.6.0",
    "type": "library"
} }
```

应用类型一般用配置文件。下面为`app`模板中的一份简单配置。

``` js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    version: '>=0.6.0',                                 // 能够支持该项目的 Vusion CLI 的版本条件
    type: 'app',                                        // [必填] 项目类型。目前可选：app、app-pro、library、fullstack
    extractCSS: true,                                   // 打包时将 CSS 从 JS 中提出
    staticPath: './static',                             // 指定静态文件目录。该目录中的内容将会直接被拷贝到输出目录中
    libraryPath: './src/components',                    // [必填] 指定项目库的路径。用于检索全局样式等文件
    webpack: {                                          // 扩展 Webpack
        entry: {                                        // [必填] Webpack 入口
            vendor: 'babel-polyfill',                   // babel-polyfill 等通用库
            bundle: './src/views/index.js',             // 指定打包入口文件
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),  // 可以设置一个`src`的别名
            },
        },
        plugins: [
            new HtmlWebpackPlugin({                     // 使用 HtmlWebpackPlugin 创建一个入口页
                filename: 'index.html',
                hash: true,
                template: './src/views/index.html',
                chunks: ['vendor', 'bundle'],
            }),
        ],
    },
};
```

为了方便使用且防止出错，配置中的`webpack`、`webpackDevServer`、`postcss`、`vue`、`karma`等对象与 Vusion 的默认配置采用深度合并的策略。

### DevServer 配置

最常添加的是 DevServer 的配置。例如：

``` js
{
    webpackDevServer: {
        port: 8080,
        target: "http://some.example.com",
        contentBase: __dirname,
    },
}
```

更多关于 DevServer 的参数请查阅 [Webpack 的 DevServer 配置](https://doc.webpack-china.org/configuration/dev-server)。

### 下一步

指南到此结束，接下来您可以：

- 查看[全部配置 API](/api/config)；
<!-- - 阅读[概念](/concepts)深入理解 Vusion 架构细节； -->
- 查看 Vusion 平台的[组件库](/libraries)。

