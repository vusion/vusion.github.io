# CSS

### CSS 模块

为了避免全局选择器的冲突，也为了避免复杂繁琐的命名规范，Vusion 采用 [CSS Modules](https://github.com/css-modules/css-modules) 来解决这个问题。

单文件Vue中，在`<style>`上直接添加`module`，同时在模板中动态绑定class：

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

具体可以参见 [vue-loader 的 CSS Modules](https://vue-loader.vuejs.org/zh-cn/features/css-modules.html)。

多文件 Vue 中，在`.vue`文件夹添加`module.css`文件，书写方式与单文件 Vue 相同。

```
u-sample.vue/
    index.html
    index.js
    module.css
```

### REA风格

在 CSS Modules 的基础上，我们引入了 [PostCSS](https://github.com/postcss/postcss) 和它的一些 plugins [\<code\>](https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L13)，用于简化样式的书写，最终形成一套特有的 CSS 书写风格—— REA 风格。

REA 表示 Root、Element、Attribute，其中借鉴了 BEM（Block、Element、Modifier）的一些思想，但它不需要那些繁琐的构词形式。

它有以下一些规则：

- class 仅用于表示元素的在组件中的角色
    - 根节点总是用`.root`
    - 子节点用一个简单的单词来表示，如`head`、`item`、`side`等
- attribute 用于样式扩展，命名方式与常用的props保持一致
    - Boolean类型，如`selected`、`disabled`、`active`、`checked`等
    - 颜色，如`color="primary"`、`color="success"`、`color="error"`等
    - 大小，一个单词表示宽高同时改变，两个单词前者表示高度、后者表示宽度，类似CSS的`margin`或`padding`属性。如`size="normal"`、`size="large"`、`size="mini large"`等
- 单词不要缩写，且用连字符而不是驼峰
- 不允许样式块嵌套
- 无需添加浏览器前缀，在 PostCSS 中已经引入了 [autoprefixer](https://github.com/postcss/autoprefixer) 插件

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

### 优先级问题 [\<issue\>](https://github.com/vusion/vusion-cli/issues/21)

由于 CSS 的依赖关系统一走 JS，再通过 [style-loader](https://github.com/webpack-contrib/style-loader) 转换为标签插入到页面中，因此无法保证各组件之间的顺序。极少数情况下会有优先级问题，这里我们推荐一种可以提高优先级的写法：

``` xhtml
<template>
<u-button :class="$style.button">Button</u-button>
</template>

<style module>
.button[class] {
    color: red;
}
</style>
```

### 下一步

Vusion 中的各种图片资源都会在 CSS 中添加，下一节将会展开讲[资源](/guides/assets)如何处理。
