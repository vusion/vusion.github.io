<template>
    <div>
        <div :class="$style.side">
            <u-sidebar size="small">
                <u-sidebar-group title="规范">
                    <u-sidebar-item to="/components/u-base" disabled>事件设计</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base" disabled>API设计</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="模式">
                    <u-sidebar-item to="/components/u-base" disabled>父子模式</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base" disabled>父组子模式</u-sidebar-item>
                    <u-sidebar-item to="/components/u-base" disabled>根节点模式</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="系列">
                    <u-sidebar-item to="/components/u-base" disabled>列表系列</u-sidebar-item>
                    <u-sidebar-item to="/components/u-link" disabled>路由系列</u-sidebar-item>
                    <u-sidebar-item to="/ui-design/form">表单系列</u-sidebar-item>
                    <u-sidebar-item to="/components/u-badge" disabled>递归系列</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tag" disabled>弹出层系列</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tag" disabled>布局系列</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tag" disabled>图表系列</u-sidebar-item>
                    <!-- <u-sidebar-item to="/components/u-label">数值范围系列</u-sidebar-item> -->
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
    color: #34495e;
    overflow: auto;
}

.main {
    margin-left: 200px;
    padding: 40px;
}
</style>
