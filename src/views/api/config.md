# 配置

## 命令行工具（CLI）

### 配置文件

在项目目录下创建`vusion.config.js`，有以下一些选项：

``` javascript
{
    type: '',                              // Vusion 项目类型。必填。可选项：'library', 'app'。
    staticPath: '',                        // 静态资源目录
    assetsPath: '',                        // @弃用, 同 `staticPath`
    libraryPath: '',                       // 库入口文件。项目类型为 `library` 时，默认为 `./index.js`。
    baseCSSPath: './src/base/index.css',   // Path of base CSS
    globalCSSPath: './global.css',         // 全局 CSS 文件路径
    clean: true,                           // `dev` 或 `build` 操作前，清空输出目录。
    docs: false,                           // 为库中的基础组件生成文档。`project-type` 为 `library` 时，默认开启该功能。
    open: true,                            // `dev` 模式下，启动服务时是否打开浏览器。
    hot: true,                             // `dev` 模式下，启动服务时是否打开热更新。
    sourceMap: false,                      // `build` 模式下，是否开启 source map。
    extractCSS: false,                     // `build` 模式下，是否使用 ExtractTextPlugin 处理 CSS 文件。
    uglifyJS: false,                       // `build` 模式下，是否使用 UglifyJSPlugin 处理 JS 文件。
    experimental: false,                   // 开启试用的 loader 或者 plugin。比如：ModuleConcatenationPlugin。
    resolvePriority: 'cwd',                // Priority to resolve modules or loaders, "cwd"(default) or "cli"
    webpack: {},                           // 扩展 webpack 配置
    webpackDevServer: {},                  // 扩展 webpackDevServer 配置
    postcss: [],                           // 扩展 postcss plugins 配置
    vue: {},                               // 扩展 vue-loader 配置
    karma: {},                             // 扩展 karma 配置
}
```
