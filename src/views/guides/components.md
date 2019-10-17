# 组件

我们将用户界面中的每个功能完备的结构单元称为**组件**。

### 组件结构

在实际情况中，一个组件往往不仅仅包括模板（HTML）、样式（CSS）和逻辑（JS），还它所依赖的资源、文档、单元测试等。

为了更好的管理文件，Vusion 中采取**一个组件一个地方**的原则。

#### 单文件组件

我们将 Vue 原生的单文件组件做了扩展。比如一个`u-select.vue`文件：

``` xhtml
<template></template>               <!-- 组件模板 -->
<script></script>                   <!-- 组件逻辑 -->
<style module></style>              <!-- 组件样式 -->
<test></test>                       <!-- 单元测试 -->
<docs></docs>                       <!-- 组件文档 -->
<changelog></changelog>             <!-- 修改日志 -->
```

除了原来的`<template>`、`<script>`、`<style>`三个标签，我们利用 [vue-loader](https://github.com/vuejs/vue-loader) 的[自定义块](https://vue-loader.vuejs.org/zh-cn/configurations/custom-blocks.html)功能增加了`<test>`、`<docs>`、`<changelog>`三个标签。

#### 多文件组件

但有时单文件可以支持的功能还是有些薄弱，比如无法放置资源等其他文件，因此我们创造了 [vue-multifile-loader](https://github.com/vusion/vue-multifile-loader)，它与`vue-loader`的功能会经常保持同步。

这样，一个 Vue 组件可以采用如下方式书写：

```
u-select.vue/index.html             # 组件模板
u-select.vue/index.js               # 组件逻辑
u-select.vue/module.css             # 组件样式
u-select.vue/assets/arrow-down.svg  # 相关资源
u-select.vue/test.spec.js           # 单元测试
u-select.vue/README.md              # 组件文档
u-select.vue/CHANGELOG.md           # 修改日志
u-select.vue/package.json           # npm 包信息
```

#### 单文件组件 vs 多文件组件

为什么要同时支持两种书写方式呢？

主要是因为两种书写方式各有特色。单文件组件创建起来比较快捷，也是 Vue 原生的特色，适用于书写页面组件；多文件组件在功能上支持的更多，适用于构造通用组件，方便扩展。

Webpack 的模块引入字符串可以将`index.js`部分省略，两种书写方式都可以写作`import USelect from 'u-select.vue'`，所以它们不会对依赖模块有所影响。

一般情况下，两种书写方式是**等效**的。

### 组件的扩展与继承

组件的灵活扩展是 Vusion 的一大特色。

在实际业务中，我们经常会遇到这样的情形：要开发的新的组件与原来的组件相似，但功能或样式又有些差异。如果重写一个的话，成本较高或者以后要维护两份代码，因此对原组件进行扩展是个很好的选择。

一方面，扩展可以有不同的程度，比如只扩展样式、只改变图标、扩展样式和逻辑、甚至重写模板；另一方面，由于这些组件大都是在 Vue 中全局注册的，新组件可以与原组件同名，将原组件覆盖掉。为了方便描述，我们把同名的称为**扩展**，把异名的称为**继承**。

下面看一些例子，大家可以在刚创建的 Vusion 项目中试试：

#### 仅扩展样式

``` xhtml
<script>
import { USelect as OSelect } from 'proto-ui.vusion/src/components/u-select.vue';

export const USelect = {
    name: 'u-select',
    extends: USelect,
};

export default USelect;
</script>

<style module>
@import 'proto-ui.vusion/src/components/u-select.vue';

.root {
    height: 36px;
    border-color: #ccc;
}
</style>
```

组件的依赖关系仅由 JS 决定，因此`<script>`标签里的内容是必要的。

#### 在样式中修改图标

在 Vusion 中资源问题都是样式问题。

在样式中，我们提供了一种继承的简写方式`@extend;`，它可能根据 JS 中的`extends`自动查找依赖。

``` xhtml
<script>
import { USelect as OSelect } from 'proto-ui.vusion/src/components/u-select.vue';

export const USelect = {
    name: 'u-select',
    extends: USelect,
};

export default USelect;
</script>

<style module>
@extend;

.root:before {
    icon-font: url('../assets/my-arrow-down.svg');
}
</style>
```

#### 继承并添加样式

比如现在要创建一个新组件`<u-custom-select>`与`<u-select>`很相似。

``` xhtml
<script>
import USelect from 'proto-ui.vusion/src/components/u-select.vue';

export const UCustomSelect = {
    name: 'u-custom-select',
    extends: USelect,
};

export default UCustomSelect;
</script>

<style module>
@extend;

.root {
    height: 36px;
    border-color: #ccc;
}
</style>
```

#### 继承并重写样式

不用在`<style>`标签中`@import`或`@extend`原组件的样式，便可以重写组件样式，并仍然使用原组件的模板和逻辑。

``` xhtml
<script>
import USelect from 'proto-ui.vusion/src/components/u-select.vue';

export const UCustomSelect = {
    name: 'u-custom-select',
    extends: USelect,
};

export default UCustomSelect;
</script>

<style module>
.root {
    height: 36px;
    border-color: #ccc;
}

.root[disabled] {
    color: red;
}
</style>
```

#### 扩展逻辑

这里使用的是 Vue 组件的`extends`或`mixins`扩展策略。

``` xhtml
<script>
import { USelect as OSelect } from 'proto-ui.vusion/src/components/u-select.vue';

export const USelect = {
    name: 'u-select',
    extends: OSelect,
    methods: {
        select() {
            // override
        },
    },
};

export default USelect;
</script>
```

#### 继承并添加逻辑

与同名的同理，只需变更`name`字段即可。

``` xhtml
<script>
import USelect from 'proto-ui.vusion/src/components/u-select.vue';

export const UCustomSelect = {
    name: 'u-custom-select',
    extends: USelect,
    methods: {
        select() {
            // override
        },
    },
};

export default UCustomSelect;
</script>
```

#### 重写模板

模板没有扩展的特性，只能重写。因此设计组件时，最好能够利用好`<slot>`的特性，减少模板的重写。

``` xhtml
<template>
    <li :class="$style.root"><slot></slot></li>
</template>

<script>
import USelect from 'proto-ui.vusion/src/components/u-select.vue';

export const USelect = {
    name: 'u-select',
    extends: USelect,
};

export default USelect;
</script>
```

#### 均有不同程度的扩展

``` xhtml
<template>
    <li :class="$style.root"><slot></slot></li>
</template>

<script>
import USelect from 'proto-ui.vusion/src/components/u-select.vue';

export const UCustomSelect = {
    name: 'u-custom-select',
    extends: USelect,
    methods: {
        select() {
            // override
        },
    },
};

export UCustomSelect;
</script>

<style module>
@extend;

.root:before {
    height: 36px;
    border-color: #ccc;
    icon-font: url('../assets/my-arrow-down.svg');
}
</style>
```

当然这种情况比较少见，偶尔为了应对 bug 等问题。如果差异较大，可以重写一个组件。

### 下一步

接下来会讲组件中的[CSS](/guides/css-modules)如何书写。
