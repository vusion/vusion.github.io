<template>
<u-global-layout>
    <u-navbar slot="head">
        <u-logo slot="left" name="163yun">组件平台</u-logo>
        <u-navbar-item to="/guides">教程</u-navbar-item>
        <u-navbar-item to="/documentation">文档</u-navbar-item>
        <u-navbar-item to="/libraries">组件库</u-navbar-item>
        <u-navbar-item to="/cases">案例</u-navbar-item>
        <u-theme-select slot="right" v-model="theme" @select="onSelectTheme">
            <u-theme-select-item value="default"><div :class="$style.color"></div>Default</u-theme-select-item>
            <u-theme-select-item value="dark"><div :class="$style.color" color="dark"></div>Dark</u-theme-select-item>
            <u-theme-select-item value="seagreen"><div :class="$style.color" color="seagreen"></div>SeaGreen</u-theme-select-item>
        </u-theme-select>
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
