<template>
<div :class="$style.root">
    <header :class="$style.head">
        <div :class="$style.wrap">
            <u-navbar color="inverse">
                <u-logo slot="left" color="inverse"></u-logo>
                <u-navbar-item to="/guides">指南</u-navbar-item>
                <!-- <u-navbar-item to="/concepts">概念</u-navbar-item> -->
                <u-navbar-item to="/api">API</u-navbar-item>
                <u-navbar-item to="/libraries">组件库</u-navbar-item>
                <u-navbar-item to="/templates">模板</u-navbar-item>
                <span :class="$style.right">
                    <!-- <u-navbar-item :href="github" target="_blank"><i-icon name="github" style="font-size: 24px;"></i-icon></u-navbar-item> -->
                </span>
            </u-navbar>
        </div>
    </header>
    <div :class="$style.body"><router-view></router-view></div>
    <!-- <div :class="$style.foot" slot="foot"></div> -->
</div>
</template>

<script>
export default {
    data() {
        return {
            theme: window.theme,
        };
    },
    computed: {
        isLibraries() {
            return this.$route.path.startsWith('/libraries');
        },
    },
    methods: {
        onSelectTheme($event) {
            if ($event.value !== window.theme) {
                localStorage.setItem('theme', $event.value);
                location.reload();
            }
        },
    },
};
</script>

<style module>
.root {}

.head {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: $navbar-height;
    /* background: #1c2b41; */
    background: white;
    box-shadow: 0 3px 4px rgba(0,0,0,0.1);
    z-index: $z-index-layout;
}

.right {
    float: right;
}

.body {
    /* min-height: calc(100vh - 134px); */
    margin-top: $navbar-height;
}

.foot {
    height: 70px;
    background: #34383b;
}

.wrap {
    /* width: 1180px;
    margin: 0 auto; */
}

.color {
    display: inline-block;
    width: 1em;
    height: 1em;
    background: #67aaf5;
    border: 1px solid white;
    vertical-align: -2px;
    margin-right: 6px;
}

.color[color="dark"] {
    background: #4a89e8;
}

.color[color="seagreen"] {
    background: #2cb78e;
}
</style>
