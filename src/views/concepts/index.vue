<template>
    <div>
        <div :class="$style.side">
            <u-sidebar :class="$style.sidebar">
                <u-sidebar-item to="/concepts/technical-selection">技术选型</u-sidebar-item>
                <u-sidebar-item to="/concepts/modularity">模块化</u-sidebar-item>
                <u-sidebar-item to="/concepts/component-based">组件化</u-sidebar-item>
                <u-sidebar-item to="/concepts/library">组件库</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>目录结构</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>路由</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>服务</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>组件文档</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>接口文档</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>测试</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>服务端渲染</u-sidebar-item>
                <u-sidebar-item to="/concepts/3" disabled>打包与部署</u-sidebar-item>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<style module>
.side {
    position: fixed;
    width: $sidebar-width;
    top: $navbar-height;
    bottom: 0;
    overflow: hidden;
}

.sidebar {
    width: calc($sidebar-width + 8px);
}

.sidebar > * {
    width: $sidebar-width;
}

.main {
    margin-left: $sidebar-width;
    max-width: 1010px;
    padding-left: 50px;
    padding-bottom: 50px;
    padding-top: 30px;
}
</style>
