<template>
    <div>
        <div :class="$style.side">
            <u-sidebar size="small">
                <u-sidebar-group title="概念">
                    <u-sidebar-item to="/documentation/concepts/introduction">介绍</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/technical-selection">技术选型</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/modularity">模块化</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/component-based">组件化</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/2">组件库</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/3">目录结构</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/3">路由</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/3">服务</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/3">组件文档</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/3">接口文档</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/3">测试</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/3">服务端渲染</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/3">打包与部署</u-sidebar-item>
                    <u-sidebar-item v-if="false" to="/documentation/concepts/3">安全</u-sidebar-item>
                    <u-sidebar-item v-if="false" to="/documentation/concepts/3">国际化</u-sidebar-item>
                    <u-sidebar-item v-if="false" to="/documentation/concepts/3">编辑器工具</u-sidebar-item>
                    <u-sidebar-item to="/documentation/concepts/3">编码风格</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Vusion App">
                    <u-sidebar-item to="/components/u-linear-layout">安装</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base">基本操作</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base">配置</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Vusion CLI">
                    <u-sidebar-item to="/components/u-linear-layout">安装</u-sidebar-item>
                    <u-sidebar-item to="/components/u-linear-layout">命令</u-sidebar-item>
                    <u-sidebar-item to="/components/u-linear-layout">配置</u-sidebar-item>
                    <u-sidebar-item to="/components/u-linear-layout">结合Babel</u-sidebar-item>
                    <u-sidebar-item to="/components/u-linear-layout">结合TypeScript</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Vukoa CLI">
                    <u-sidebar-item to="/components/u-linear-layout">安装</u-sidebar-item>
                    <u-sidebar-item to="/components/u-linear-layout">命令</u-sidebar-item>
                    <u-sidebar-item to="/components/u-linear-layout">配置</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const advanced = !!JSON.parse(localStorage.getItem('advanced'));

        return {
            advanced,
        };
    },
    methods: {
        onCheck($event) {
            localStorage.setItem('advanced', this.advanced);
        },
    },
};
</script>

<style module>
.side {
    padding: 20px 0;
    position: fixed;
    width: 200px;
    top: 64px;
    bottom: 0;
    /* height: calc(100vh - 134px); */
    background: #f0f6fa;
    overflow: auto;
}

.main {
    margin-left: 200px;
    padding: 40px;
}
</style>
