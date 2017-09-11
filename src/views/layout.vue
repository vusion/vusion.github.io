<template>
<u-global-layout>
    <u-navbar slot="head">
        <u-logo slot="left" name="163yun"></u-logo>
        <u-navbar-item to="/guides">指南</u-navbar-item>
        <u-navbar-item to="/documentation">文档</u-navbar-item>
        <u-navbar-item to="/libraries">组件库</u-navbar-item>
        <u-navbar-item to="/examples">示例</u-navbar-item>
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
