<template>
    <div>
        <div :class="$style.side">
            <u-sidebar size="small">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item to="/components/u-base">基础 <small>Base</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-link">链接 <small>Link</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-button">按钮 <small>Button</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-badge">徽章 <small>Badge</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tag">标签 <small>Tag</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-label">标签条 <small>Label</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-icon">图标 <small>Icon</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-status-icon">状态图标 <small>StatusIcon</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-logo">标识 <small>Logo</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Layout">
                    <u-sidebar-item to="/components/u-linear-layout">线性布局 <small>LinearLayout</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-grid">栅格 <small>Grid</small></u-sidebar-item>
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
