# 资源

由于位图图片在 Retina 屏下需要设定 @2x 图，因此我们推荐优先使用 svg 图片。

特别是单色图标可以将 svg 转成 icon-font，多色图标可以将 svg 合并成 svg-sprite，实在不行了再将 png 或 jpg 等位图格式合并成 css-sprite。

#### icon-font

icon-font 可以使用 CSS 很方便地设置颜色与大小。

在 Vusion 中，我们研发了一个 [icon-font-loader](https://github.com/vusion/icon-font-loader/blob/master/README.zh-CN.md)，它提供一个自定义属性`icon-font`，使用时很方便：

> 注意：要放在`:after`中使用。

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

为什么不在HTML或JS中引入图标？类似：

``` xhtml
<div class="require('./inner.svg)">
```

主要有以下几点原因：

- 其实大部分图标还需设置CSS属性
- 图片资源的引入本质是一种样式修改
- CSS具有复写的特性

#### svg-sprite

svg-sprite 拥有 css-sprite不具备的调整大小特性。

我们研发了一个[svg-classic-sprite-loader](https://github.com/vusion/svg-classic-sprite-loader)。使用起来也很方便：

> [svg-sprite-loader]

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
    background: url('/public/sprite.1c9f4bcca4a42798.svg');
    width: 200px;
    height: 120px;
}
```

#### css-sprite

我们又研发了一个[svg-classic-sprite-loader](https://github.com/vusion/svg-classic-sprite-loader)。使用起来也很方便：

``` css
.root {
    background: url('./icons/detail.png?sprite');
    width: 200px;
    height: 120px;
}
```

它会转为

``` css
.root {
    background: url('/public/sprite.1c9f4bcca4a42798.png');
    width: 200px;
    height: 120px;
}
```

雪碧图可以分组，比如：


``` css
.root {
    background: url('./icons/detail.png?sprite=group1');
    width: 200px;
    height: 120px;
}
```

它会转为

``` css
.root {
    background: url('/public/group1.1c9f4bcca4a42798.png');
    width: 200px;
    height: 120px;
}
```

#### 其他资源

其他资源会统一走 [file-loader](https://github.com/webpack-contrib/file-loader)，目前已配置了`png|jpg|gif|svg|eot|ttf|woff|woff2`这些格式 [\<code\>](https://github.com/vusion/vusion-cli/blob/develop/webpack/base.js#L88)。

### 下一步

下一节[测试](/guides/test)。
