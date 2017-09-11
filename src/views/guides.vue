<template>
    <div>
        <div :class="$style.side">
            <u-sidebar size="small">
                <u-sidebar-group title="入门">
                    <u-sidebar-item to="/guides/installation">安装</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">介绍</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">工程</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">页面</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">组件</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">组件库</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">资源</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">路由</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">模块</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">发布</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="高级">
                    <u-sidebar-item to="/guides/af">介绍</u-sidebar-item>
                    <u-sidebar-item to="/guides/af">配置</u-sidebar-item>
                    <u-sidebar-item to="/guides/">打包</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="全栈">
                    <u-sidebar-item to="/guides/af">介绍</u-sidebar-item>
                    <u-sidebar-item to="/guides/vweeve">配置</u-sidebar-item>
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
