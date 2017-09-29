# 模块化

### 完全模块化

通常大型前端工程需要处理的资源文件有很多，常见的JS、CSS和图片，还有字体、视频、音频等其他静态资源，传统的Require.js、SASS/LESS、Icomoon等工具往往只是片面的处理了某一类资源，这些方案在前端模块化问题的处理上都是不完全的。

而在Webpack看来：

> 一切资源皆模块。

我们把这称为**模块化的完备性**。

Webpack这样处理了之后，有三大优势：

- 依赖关系单一化：所有CSS和图片等资源的依赖关系统一走JS路线，无需额外处理CSS预处理器的依赖关系，也不需处理代码迁移时的图片合并、字体图片等路径问题；
- 资源处理集成化：比如可以统一处理资源的hash、同步异步加载等问题，同时也可以将类似vue这样复杂的文件一起容纳到这个体系；
- 通用组件标准化：传统一个社区通用组件的引入方式五花八门，现在可以按照Webpack的loaders来标准化。

### JS的模块化

在当前的JavaScript发展趋势下，已经没有理由不选择ES6 Modules了。

#### Babel

Vusion CLI已经集成了`babel-loader`，同时添加了[默认配置](https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L98)，但不会立即生效。

如果您对浏览器的兼容性没有要求，即只要最新的现代浏览器支持就行，比如Chrome、Firfox、Safari，或者通过Electron来驱动App，并且在代码中没有使用到ECMAScript的一些未来特性。那么不需要babel也可以运行。

否则，您需要在项目根路径下添加一个`.babelrc`文件，Vusion根据这个文件是否存在来判断启不启用`babel-loader`。

最简单的方式是：

``` shell
npm install --save-dev babel-preset-env
```

然后在项目根路径下添加一个`.babelrc`文件：

``` json
{
    "presets": ["env"]
}
```

其他关于Babel的详细配置请参见[babeljs.io](https://babeljs.io/)的官方文档。

#### JS的压缩与混淆

Webpack通常使用`UglifyjsWebpackPlugin`来处理JS的压缩与混淆，这个插件也已经集成在Vusion CLI中。

只需在`vusion.config.js`或`package.json`的`vusion`对象中添加配置：

``` json
{
    "uglifyJS": true
}
```

也可以在运行CLI的构建命令时，添加`--uglify-js`这个参数：

``` shell
vusion build --uglify-js
```

### CSS的模块化

虽然SASS、LESS、Stylus等预处理器实现了CSS的文件拆分，但没有解决CSS模块化的痛点：选择器的局域化问题（全局污染问题）。

按道理，一个模块化的文件应该要隐藏内部作用域，只暴露少量接口给使用者。而按照目前预处理器的方式，引入一个CSS模块后，已存在的样式仍有被覆盖的风险。

为了避免全局选择器的冲突，也为了避免复杂、繁琐、弱约束的命名规范，我们采用 CSS Modules + PostCSS 来解决这个问题。

在单文件Vue中，在`<style>`上直接添加`module`，同时在模板中动态绑定class：

``` html
<template>
    <p :class="$style.red">
        This should be red.
    </p>
</template>

<style module>
.red {
    color: red;
}

.bold {
    font-weight: bold;
}
</style>
```

具体可以参见[vue-loader的CSS Modules](https://vue-loader.vuejs.org/zh-cn/features/css-modules.html)

在多文件Vue中，在`.vue`文件夹添加`module.css`文件，书写方式与单文件Vue相同。

```
u-sample.vue/
    index.html
    index.js
    module.css
```

#### REA风格


### 图片的模块化

由于位图图片在Retina屏下需要设定@2x图，因此我们推荐优先使用svg图片。

