<template>
    <div>
        <div :class="$style.side">
            <u-sidebar :class="$style.sidebar" color="inverse">
                <u-sidebar-group title="教程">
                    <u-sidebar-item to="/guides/introduction">介绍</u-sidebar-item>
                    <u-sidebar-item to="/guides/installation">安装</u-sidebar-item>
                    <u-sidebar-item to="/guides/quickstart">起步</u-sidebar-item>
                    <u-sidebar-item to="/guides/structure">目录结构</u-sidebar-item>
                    <u-sidebar-item to="/guides/views">页面与路由</u-sidebar-item>
                    <u-sidebar-item to="/guides/library">组件库</u-sidebar-item>
                    <u-sidebar-item to="/guides/components">组件</u-sidebar-item>
                    <u-sidebar-item to="/guides/css-modules">CSS</u-sidebar-item>
                    <u-sidebar-item to="/guides/assets">资源</u-sidebar-item>
                    <u-sidebar-item to="/guides/test">测试</u-sidebar-item>
                    <u-sidebar-item to="/guides/deployment">打包与部署</u-sidebar-item>
                    <u-sidebar-item to="/guides/commands">常见命令</u-sidebar-item>
                    <u-sidebar-item to="/guides/config">基础配置</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="风格指南">
                    <u-sidebar-item to="/guides/editor">编辑器配置</u-sidebar-item>
                    <u-sidebar-item to="/guides/js-style">JavaScript 风格</u-sidebar-item>
                    <u-sidebar-item to="/guides/css-style">CSS 风格</u-sidebar-item>
                    <u-sidebar-item to="/guides/vue-style">Vue 风格</u-sidebar-item>
                    <u-sidebar-item to="/guides/ui-style">组件设计风格</u-sidebar-item>
                </u-sidebar-group>
                <!-- <u-sidebar-group title="高级">
                    <u-sidebar-item to="/guides/af">介绍</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">配置</u-sidebar-item>
                    <u-sidebar-item to="/guides/wefef">打包</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="全栈">
                    <u-sidebar-item to="/guides/af">介绍</u-sidebar-item>
                    <u-sidebar-item to="/guides/vweeve">配置</u-sidebar-item>
                </u-sidebar-group> -->
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
