<template>
    <div>
        <div :class="$style.side">
            <u-sidebar size="small">
                <u-sidebar-group text="组件">
                    <u-sidebar-item to="/components/u-base">事件设计</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base">API设计</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group text="组件">
                    <u-sidebar-item to="/components/u-base">列表组件</u-sidebar-item>
                    <u-sidebar-item to="/components/u-link">路由组件</u-sidebar-item>
                    <u-sidebar-item to="/components/u-button">表单组件</u-sidebar-item>
                    <u-sidebar-item to="/components/u-badge">递归组件</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tag">弹出组件</u-sidebar-item>
                    <u-sidebar-item to="/components/u-label">数值范围组件</u-sidebar-item>
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
