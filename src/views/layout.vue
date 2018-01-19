<template>
<u-global-layout>
    <u-navbar slot="head">
        <u-logo slot="left" name="163yun"></u-logo>
        <u-navbar-item to="/guides">指南</u-navbar-item>
        <!-- <u-navbar-item to="/concepts">概念</u-navbar-item> -->
        <u-navbar-item to="/api">API</u-navbar-item>
        <u-navbar-item><u-subnav title="组件">
            <u-subnav-item to="/ui-design">组件设计</u-subnav-item>
            <u-subnav-item to="/proto-ui">原型组件</u-subnav-item>
        </u-subnav></u-navbar-item>
        <u-navbar-item to="/libraries">组件库</u-navbar-item>
        <u-navbar-item to="/cases" disabled>案例</u-navbar-item>
        <span :class="$style.right">
            <u-navbar-item href="https://github.com/vusion" target="_blank" style="padding-top: 10px;">
                <svg aria-hidden="true" style="fill: #fff;" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            </u-navbar-item>
        </span>
    </u-navbar>
    <div :class="$style.body" v-if="isLibraries" slot="body">
        <div :class="$style.wrap"><router-view></router-view></div>
    </div>
    <div v-else><router-view></router-view></div>
    <div :class="$style.foot" slot="foot"></div>
</u-global-layout>
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
.right {
    float: right;
}

.body {
    min-height: 100vh;
    background: #f7fafc;
}

.wrap {
    width: 1200px;
    margin: 0 auto;
}

.foot {
    line-height: 70px;
    background: #34383b;
    text-align: center;
    font-size: 14px;
    color: gray;
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
