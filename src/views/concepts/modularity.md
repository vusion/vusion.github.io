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

Vusion CLI已经集成了[babel-loader](https://github.com/babel/babel-loader)，同时添加了默认配置[\<code\>](https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L98)，但不会立即生效。

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

在Webpack生态中，通常使用[uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)来处理JS的压缩与混淆，这个插件也已经集成在Vusion CLI中。

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

为了避免全局选择器的冲突，也为了避免复杂、繁琐、弱约束的命名规范，我们采用[CSS Modules](https://github.com/css-modules/css-modules)来解决这个问题。

#### CSS Modules

在单文件Vue中，在`<style>`上直接添加`module`，同时在模板中动态绑定class：

``` vue
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

这些样式会转为

``` css
._21t-NHydruDPXRXUWJnMmm {
    color: red;
}

._2VTt8mZxuYxYIcjuT-eGzP {
    font-weight: bold;
}
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

在CSS Modules的基础上，我们引入了[PostCSS](https://github.com/postcss/postcss)和它的一些plugins[\<code\>](https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L13)，用于简化样式的书写，最终形成一套特有的CSS书写风格——REA风格。

REA表示Root、Element、Attribute，其中借鉴了BEM（Block、Element、Modifier）的一些思想，但它不需要那些繁琐的构词形式。

它有以下一些规则：

- class仅用于表示元素的在组件中的角色
    - 根节点总是用`.root`
    - 子节点用一个简单的单词来表示，如`head`、`item`、`side`等
- attribute用于样式扩展，命名方式与常用的props保持一致
    - Boolean类型，如`selected`、`disabled`、`active`、`checked`等
    - 颜色，如`color="primary"`、`color="success"`、`color="error"`等
    - 大小，一个单词表示宽高同时改变，两个单词前者表示高度、后者表示宽度，类似CSS的`margin`或`padding`属性。如`size="normal"`、`size="large"`、`size="mini large"`等
- 单词不要缩写，且用连字符而不是驼峰
- 不允许样式块嵌套
- 无需添加浏览器前缀，在PostCSS中已经引入了[autoprefixer](https://github.com/postcss/autoprefixer)插件

最佳示例：

``` xhtml
<template>
<div :class="$style.root">
    <div :class="$style.track">
        <div :class="$style.trail"></div>
    </div>
</div>
</template>
<style>
.root {
    width: 240px;
}

.track {
    height: 20px;
    background: #eee;
}

.trail {
    width: 30%;
    height: 100%;
    background: $brand-primary;
}

.root[color="success"] .trail {
    background: $brand-success;
}

.root[active] .trail {
    animation: ...
}
</style>
```

#### 优先级问题[\<issue\>](https://github.com/vusion/vusion-cli/issues/21)

由于CSS的依赖关系统一走JS，再通过[style-loader](https://github.com/webpack-contrib/style-loader)转换为标签插入到页面中，因此无法保证各组件之间的顺序。极少数情况下会有优先级问题，这里我们推荐一种可以提高优先级的写法：

``` xhtml
<template>
<u-button :class="$style.button">Button</u-button>
</template>

<style module>
.button[class] {
    color: red;
}
</style>

#### CSS提取成独立文件

在Webpack生态中，通常会使用[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)将CSS内容提取成独立的文件，这个插件也已经集成在Vusion CLI中。

只需在`vusion.config.js`或`package.json`的`vusion`对象中添加配置：

``` json
{
    "extractCSS": true
}
```

也可以在运行CLI的构建命令时，添加--extract-css这个参数：

``` shell
vusion build --extract-css
```

提取出来的CSS文件名与JS bundle的文件名是一致的，仅扩展名不同。

### 图片的模块化

由于位图图片在Retina屏下需要设定@2x图，因此我们推荐优先使用svg图片。

特别是单色图标可以将svg转成icon-font，多色图标可以将svg合并成svg-sprite，实在不行了再将png或jpg等位图格式合并成css-sprite。

#### icon-font

icon-font可以使用CSS很方便地设置颜色与大小。

在Vusion中，我们研发了一个[icon-font-loader](https://github.com/vusion/icon-font-loader/blob/master/README.zh-CN.md)，它提供一个自定义属性`icon-font`，使用时很方便：

``` css
.select:after {
    icon-font: url('./icons/arrow-down.svg');
    color: #666;
}
```

它会转为

``` css
.select:after {
    font-family: 'vusion-icon-font';
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-decoration: inherit;
    text-rendering: optimizeLegibility;
    text-transform: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    content: '\f106';
    color: #666;
}
```

同时生成(eot,svg,ttf,woff)等字体和一个全局的@font-face文件。

> 为什么不在HTML或JS中引入图标？类似：

``` xhtml
<div class="require('./inner.svg)">
```

- 其实大部分图标还需设置CSS属性
- 图片资源的引入本质是一种样式修改
- CSS具有复写的特性

#### svg-sprite

svg-sprite拥有css-sprite不具备的调整大小特性。

在Vusion中，我们使用了一个[svg-sprite-loader](https://github.com/CXHtml/svg-sprite-loader)。使用起来也很方便：

``` css
.root {
    background: url('./icons/refresh.svg?sprite');
    width: 200px;
    height: 120px;
}
```

它会转为

``` css
.root {
    background: url('/public/sprite.1c9f4bcca4a42798.svg#refresh');
    width: 200px;
    height: 120px;
}
```

#### css-sprite

正在研究中。。。

可以先使用CSS的background，会走[file-loader](https://github.com/webpack-contrib/file-loader)。

#### 其他资源

其他资源会统一走[file-loader](https://github.com/webpack-contrib/file-loader)，目前已配置了`png|jpg|gif|eot|ttf|woff|woff2`这些格式[\<code\>](https://github.com/vusion/vusion-cli/blob/develop/webpack/base.js#L88)。

###

模块化解决了前端工程中各种资源的组织问题，那么在用户界面（UI）层面上，如何将一个复杂工程进行分解复用，并进行高效的管理，这就属于组件化方面的范畴了，下一节将会为您详细讲述。
