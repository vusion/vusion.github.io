<template>
    <div>
        <div :class="$style.side">
            <u-sidebar size="small">
                <u-sidebar-group title="Vusion">
                    <u-sidebar-item to="/components/u-base">基础</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Vusion CLI">
                    <u-sidebar-item to="/components/u-linear-layout">线性布局 <small>LinearLayout</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Vukoa CLI">
                    <u-sidebar-item to="/components/u-navbar">导航栏 <small>Navbar</small></u-sidebar-item>
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
