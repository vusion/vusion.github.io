# 组件化

### 完全组件化

在Vusion理念中，我们将用户界面中的每个功能完备的结构单元称为**组件**。

这里的“功能完备”不仅仅指模板（HTML）、样式（CSS）和逻辑（JS），还包括所依赖的资源、文档、单元测试等，我们把这称为**组件化的完备性**。

传统的一些前端项目，目录结构会按照`html`、`css`、`js`、`docs`、`test`来分，这样常常导致路径引用很深、文件没有分治、目录结构混乱、组件无法单独抽取等问题。

而在Vusion中，我们采取**一个组件一个地方**的原则。

#### 单文件组件

我们将Vue原生的单文件组件做了扩展。比如一个`u-select.vue`文件：

``` xhtml
<template></template>               <!-- 组件模板 -->
<script></script>                   <!-- 组件逻辑 -->
<style module></style>              <!-- 组件样式 -->
<test></test>                       <!-- 单元测试 -->
<docs></docs>                       <!-- 组件文档 -->
<changelog></changelog>             <!-- 修改日志 -->
```

除了原来的`<template>`、`<script>`、`<style>`三个标签，还利用[vue-loader](https://github.com/vuejs/vue-loader)的[自定义块](https://vue-loader.vuejs.org/zh-cn/configurations/custom-blocks.html)功能增加了`<test>`、`<docs>`、`<changelog>`三个标签。

#### 多文件组件

但有时单文件可以支持的功能还是有些薄弱，比如无法放置资源，因此我们创造了[vue-multifile-loader](https://github.com/vusion/vue-multifile-loader)，它与`vue-loader`的功能时时保持同步。

这样，一个Vue组件可以采用如下方式书写：

```
u-select.vue/index.html             # 组件模板
u-select.vue/index.js               # 组件逻辑
u-select.vue/module.css             # 组件样式
u-select.vue/icons/arrow-down.svg   # 相关资源
u-select.vue/test.spec.js           # 单元测试
u-select.vue/README.md              # 组件文档
u-select.vue/CHANGELOG.md           # 修改日志
u-select.vue/package.json           # npm包信息
```

#### 单文件组件 vs 多文件组件

那么为什么要同时支持两种书写方式呢？

主要是因为两种书写方式各有特色。单文件组件创建起来比较快捷，也是Vue原生的特色，适用于书写业务模块；而多文件组件在功能上支持的更多，适用于构造通用组件，方便扩展。

Webpack的模块引入字符串可以将`index.js`部分省略，因此两种书写方式都可以写作`import Select from 'u-select.vue'`，这样便不会对依赖模块有所影响。

一般来说，单文件组件的功能是多文件组件的功能的子集。如果一个组件没有使用到那些额外的功能的话，我们认为两种书写方式是**等效**的。

所以Vusion CLI提供一个`transform`的命令，可以将组件在两者之间互相转换。

``` shell
vusion transform ./src/u-select.vue
```

<!-- 一致性 -->

### 组件的分类

在一个项目中，一般可以将组件分类两类：

- **通用组件（common）**：在项目中多个模块中可能用到的组件。推荐在Vue中进行全局注册，并进行统一管理。
    ``` javascript
    Vue.component('u-select', Select);
    ```
- **特定组件（specific）**：在项目中仅仅个别模块用到的组件。为了减少全局污染，推荐用Vue的`components`选项进行局部注册。
    ``` javascript
    export default {
        components: {
            's-task-detail': TaskDetail,
        },
    };
    ```

### 组件的扩展与继承

在Vue中，可以使用`extend`或`mixin`对组件进行扩展与继承。

例如表单控件都有一些验证、反馈、限制等共有的特性，这时我们可以将这些特性抽取为一个基类组件`u-field`，然后让`u-input`、`u-select`、`u-date-picker`等从这个基组件派生。

在完全模块化之后，组件的依赖关系只能走JS路线。如果要想给一个组件库中的组件`u-select`复写样式或者添加属性，就需要从这个组件派生出一个新的也叫`u-select`的组件，然后在全局注册中将原来的组件覆盖掉。

为了方便描述，我们把后一种同名派生称为**扩展**，把前一种异名派生称为**继承**。

#### 扩展与继承的策略

为了简便，在组件扩展或继承时，如果模板、样式和逻辑等一些功能块没有发生变化，可以省略。

下表为几种功能块省略或未省略时的扩展与继承策略。

|       | 逻辑（JS） | 模板（HTML） | 样式（CSS） | 文档（Docs） |
| ----- | --------- | ---------- | ---------- | ----------- |
| 省略   | *报错*     | 与基组件一致 | 与基组件一致 | 与基组件一致 |
| 未省略 | Vue的Mixin策略 | 覆盖 | 补充/合并/重写 | 覆盖 |

正因为Vusion针对组件提供了如此灵活的扩展与继承机制，所以它支持组件库的任意组合与衍生，提高了组件库的适用性，下一节将会描述它是如何办到的。
