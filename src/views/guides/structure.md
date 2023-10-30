# 目录结构

本节详细展示了不同类型 Vusion 项目的目录结构，以及各种目录和文件的作用。如果觉得不直观，可以查看 [Vusion 项目模板](https://github.com/vusion-templates)。

### 简单单页应用（simple）

这种项目为一个简单的单页 App，已经配置了 Vue Router。比如你现在阅读的文档页就是这种类型。

它的目录结构如下：

```
.
├─ src/                             # 源文件
│   ├─ base/                        # 基础配置
│   │   ├─ global.css               # CSS 的全局变量。将会注入到每个 CSS 文件中，请不要添加除变量声明之外的内容，否则会产生大量的 CSS
│   │   ├─ base.css                 # 基础 CSS 排版样式。
│   │   └─ ...
│   ├─ views/                       # 视图（页面）目录。按路由的层次存放所有页面
│   │   ├─ index.(html|ejs)         # 页面入口模板
│   │   ├─ index.js                 # JS 入口
│   │   ├─ index.vue                # Vue 入口
│   │   ├─ routes.js                # 路由配置
│   │   ├─ main.vue                 # 首页部分
│   │   ├─ page2.vue                # 页面 2
│   │   ├─ page3/                   #
│   │   │   ├─ index.vue            # 页面 3
│   │   │   ├─ routes.js            # 子路由
│   │   │   ├─ subpage1.vue         # 子页面 3-1
│   │   │   └─ ...
│   │   └─ ...
│   ├─ components/                  # 组件（库）目录。存放所有需要在 Vue 中全局注册的组件
│   │   ├─ index.js                 # 索引文件
│   │   ├─ common                   # 通用组件
│   │   │   ├─ u-search-box.vue     # 比如通用的搜索框
│   │   │   └─ ...
│   │   ├─ specific                 # 特定组件
│   │   │   ├─ u-purchase-list.vue  # 比如一个购买列表
│   │   │   └─ ...
│   │   ├─ cloud-ui                 # 需要重写 CodeWave. Design 的组件
│   │   │   ├─ u-select.vue         # 比如需要重写 Select 组件
│   │   │   ├─ u-select-item.vue
│   │   │   └─ ...
│   │   └─ ...                      # 也可以添加其它库
│   ├─ assets/                      # 资源目录。存放 Webpack 里需要 import 的资源文件
│   ├─ services/                    # 数据层。可以自行配置，Vusion 目前不作处理
│   ├─ filters/                     # 通用过滤器
│   ├─ directives/                  # 通用指令
│   ├─ utils/                       # 通用工具库
│   └─ ...
├─ static/                          # 静态文件目录。该目录中的内容将会直接被拷贝到输出目录中
├─ public/                          # 输出目录。所有生成的文件都在这里
├─ test/                            # 测试目录。大部分组件测试可以写在 Vue 文件中
│   ├─ unit/                        # 单元测试
│   │   ├─ page2.spec.js            # 页面 2 的单元测试
│   │   ├─ page3/                   #
│   │   │   ├─ index.spec.js        # 页面 3 的单元测试
│   │   │   ├─ subpage1.spec.js     # 子页面 3-1 的单元测试
│   │   │   └─ ...
│   │   └─ ...
│   └─ e2e/                         # 端对端测试
│       ├─ page2.spec.js            # 页面 2 的端对端测试
│       ├─ page3/                   #
│       │   ├─ index.spec.js        # 页面 3 的端对端测试
│       │   ├─ subpage1.spec.js     # 子页面 3-1 的端对端测试
│       │   └─ ...
│       └─ ...
├─ .babelrc                         # Babel 配置
├─ .eslintrc                        # ESLint 配置
├─ .eslintignore                    # 需要 ESLint 忽略的文件
├─ .gitignore                       # 需要 git 忽略的文件
├─ package.json                     # npm 包配置
├─ vusion.config.js                 # Vusion 配置
├─ README.md                        # 默认项目文档
└─ ...
```

部分路径或命名可以根据实际情况在`vusion.config.js`中配置。详见[配置](/api/config)。

### 中型多页应用（web-app）

这种项目结构适用于多页面、多模块、企业级的应用场景，比如需要使用后端路由控制登录权限、业务模块较大较为复杂、甚至可能会拆分成子项目等等。

它的目录结构和`simple`的大部分都很相似，只有`src/views`不同，因此下面只罗列这一部分：

```
.
├─ src/                             # 源文件
│   ├─ views/                       # 视图（页面）目录。按路由的层次存放所有页面
│   │   ├─ login/                   # 登录页
│   │   │   ├─ index.(html|ejs)     # 页面入口模板
│   │   │   ├─ index.js             # JS 入口
│   │   │   └─ index.vue            # Vue 入口
│   │   ├─ index/                   # 首页
│   │   │   ├─ index.(html|ejs)     # 页面入口模板
│   │   │   ├─ index.js             # JS 入口
│   │   │   ├─ index.vue            # Vue 入口
│   │   │   ├─ routes.js            # 路由配置
│   │   │   ├─ main.vue             # 首页部分
│   │   │   ├─ page2.vue            # 页面 2
│   │   │   ├─ page3.vue            # 页面 3
│   │   │   └─ ...
│   │   ├─ dashboard/               # 复杂页面
│   │   │   ├─ index.(html|ejs)     # 页面入口模板
│   │   │   ├─ index.js             # JS 入口
│   │   │   ├─ index.vue            # Vue 入口
│   │   │   ├─ routes.js            # 路由配置
│   │   │   ├─ overview.vue         # 总览模块
│   │   │   ├─ module2/             #
│   │   │   │   ├─ module.js        # 模块配置
│   │   │   │   ├─ index.vue        # 模块 2 页面
│   │   │   │   ├─ routes.js        # 子路由
│   │   │   │   ├─ sub1.vue         # 子模块 3-1
│   │   │   │   └─ ...
│   │   │   ├─ module3/             #
│   │   │   │   ├─ module.js        # 模块配置
│   │   │   │   ├─ components/      # 模块级组件
│   │   │   │   │   ├─ s-detail.vue # 详情组件
│   │   │   │   │   └─ ...
│   │   │   │   ├─ filters/         # 模块级过滤器
│   │   │   │   ├─ directives/      # 模块级指令
│   │   │   │   ├─ utils/           # 模块级工具库
│   │   │   │   ├─ index.vue        # 模块 3
│   │   │   │   ├─ routes.js        # 子路由
│   │   │   │   ├─ sub1.vue         # 子模块 3-1
│   │   │   │   └─ ...
│   │   └─ ...
│   └─ ...
└─ ...
```

为了适配大型场景，公有和私有分离，方便代码管理，不得不搞这么复杂。

### 组件库或工具库（Library）

这种项目为一个 Vusion 组件库或工具库。比如 Proto UI、CodeWave. Design、Icon Sets 就是这种类型。

它的目录结构如下：

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
│   │   ├─ u-select.vue                 # Select 组件
│   │   │   ├─ item.vue                 # 子组件
│   │   ├─ u-pagination.vue             # Pagination 组件
│   └─ ...                          # 其它组件
├─ public/                          # 输出目录。所有生成的文件都在这里
├─ test/                            # 测试目录。大部分组件测试可以写在 Vue 文件中
│   └─ ...
├─ .babelrc                         # Babel 配置
├─ .eslintrc                        # ESLint 配置
├─ .eslintignore                    # 需要 ESLint 忽略的文件
├─ .gitignore                       # 需要 git 忽略的文件
├─ package.json                     # npm 包配置。简单的 Vusion 配置也可以写在这里
├─ README.md                        # 默认项目文档
└─ ...
```

### 下一步

是不是仍然眼花缭乱的？接下来的几节会将整套技术拆分开来讲述。下一节[页面与路由](/guides/views)。
