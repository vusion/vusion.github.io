# 安装

## 命令行工具（CLI）

### 前提条件

在开始之前，请确保安装了 [Node.js](https://nodejs.org/en/) 的最新版本。最佳选择是使用 Node.js 最新的长期支持版本（LTS - Long Term Support）。使用旧版本可能会遇到各种问题，因为它们可能缺少 Vusion CLI 的相关依赖包。

### 全局安装

以下为 npm 的安装方式：

``` bash
npm install -g vusion-cli
```

> 对于大陆用户，建议将 npm 的注册表源设置为[国内的镜像](https://npm.taobao.org)，可以大幅提升安装速度。

以下为 yarn 的安装方式：

``` bash
yarn global add vusion-cli
```

安装的时间可能比较长，因为 Vusion CLI 集成了许多功能，请耐心等待。

#### 测试功能

测试功能需要全局安装`mocha`和`chai`，否则可能无法运行：

``` bash
npm install -g mocha chai
```

### 下一步

接下来我们会以[创建新项目](/guides/quickstart)为开始，教你如何使用命令行工具。
