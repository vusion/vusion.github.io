# 组件库

### 适用范围

我们在做某个项目的时候，通常会把项目中的通用组件放在一个地方进行统一管理。这便是**项目级别**的组件库。

随着一个产品项目数量的增多，为了保证交互视觉的一致性并且减少开发成本，就需要把这些项目中的通用组件抽出来放在单独的仓库中进行统一管理。这便是**产品级别**的组件库。

多个产品之间总有一些组件，交互逻辑相似，而视觉上差异较大。我们也可以将视觉简化，保留下交互逻辑和设计好的 API，构成原型组件库，方便各产品扩展。这便是**跨产品级别**的组件库。

### 目录结构

为了让以上三种级别的组件库能够形成派生关系，并且组件能在其中平滑迁移，它们必须有相同的结构。

```
.
├─ src/                             # 源文件
│   ├─ index.js                     # 索引文件
│   ├─ base/                        # 基础配置
│   │   ├─ global.css               # CSS 的全局变量。将会注入到每个 CSS 文件中，请不要添加除变量声明之外的内容，否则会产生大量的 CSS
│   │   ├─ base.css                 # 基础 CSS 排版样式。
│   │   ├─ ...
│   ├─ assets/                      # 资源目录。存放 Webpack 里需要 import 的资源文件
│   ├─ components/                  # 组件目录
│   │   ├─ category/                        # 二级目录，用于分类
│   │   │   ├─ u-search-box.vue
│   │   │   ├─ u-timeline.vue
│   │   │   └─ ...
│   │   ├─ u-select.vue                     # Select 组件
│   │   ├─ u-select-item.vue
│   │   ├─ u-pagination.vue                 # Pagination 组件
│   │   └─ ...                              # 其它组件
```

组件目录中建议最多只包括二级目录，如果有更深层的目录，可以考虑将组件放在页面模块中。

### 索引文件

索引文件为一个简单的 ES6 模块，它仅仅用于引入和导出组件，不处理别的工作。

下面为一个索引文件的例子：

``` js
export * from 'proto-ui.vusion';

export { USelect, USelectItem } from './u-select.vue';
export { UWell } from './u-well.vue';
```

如果要将这个库中的组件注册到 Vue 全局，只需使用`vusion-utils`的`install`：

``` js
import Vue from 'vue';

import * as Components from '@@/components';
import { install } from 'vusion-utils';
install(Vue, Components);
```

`@@`是 Vusion 在 Webpack 中为`libraryPath`自动添加的别名。

### 设计方案

`base/global.css`文件用于定义 CSS 的全局变量，它与视觉设计中的配色、尺寸等设计方案是对应。它可以通过引入别的组件库的设计方案来继承。

为了能够灵活调整设计方案，比如主题色、圆角等等，我们不允许在具体的组件中直接引用它（这样会形成固定的依赖关系），而是用一个 loader 在每个 CSS 文件中注入它。因此，也请不要在`global.css`中添加除变量声明之外的内容，否则会产生大量的 CSS。

### 基础排版

`base/base.css`文件用于设置 CSS 的基础排版，如网页的默认颜色、字号、边距等等。它也可以通过引入别的组件库的基础排版来继承。

推荐继承`proto-ui`中的`base.css`，它仅对`normalize.css`做了一些简单的扩展，统一使用`box-sizing: border-box`属性等。

比如下面为一个简单的`base.css`文件的例子：

``` css
@import 'proto-ui.vusion/src/base/base.css';

body {
    color: #333;
}
```

### 下一步

接下来将会讲述组件库中的[组件](/guides/components)的一些技术细节。
