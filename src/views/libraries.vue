<template>
    <div :class="$style.root">
        <u-library :colors="['#1a9e78', '#ddd']" title="Proto UI" href="/proto-ui" brief="中文手册">
            Proto UI 是一整套前端 UI 组件库，是快速、可靠、安全的依赖管理工具。
        </u-library>
        <u-library :colors="['#67aaf5', '#4a89e8', '#2cb78e']" target="_blank" title="Cloud Design" logo="163yun"
                   href="https://vusion.github.io/cloud-ui">
            Cloud Design 极速、零配置的 web 应用打包工具。
        </u-library>
        <u-library target="_blank" title="Vusion UI"></u-library>
        <u-library target="_blank" title="NetEase UI" logo-color="#e24244"></u-library>
        <u-library target="_blank" title="Material Design" logo-color="#20bcd2"></u-library>
        <u-library target="_blank" title="Flat UI" logo-color="#2abb9c"></u-library>
        <u-library :colors="['#419bf9', '#f4f4f4']" target="_blank" title="Mac Style" logo-color="#459df6" href="https://vusion.github.io/mac-style"></u-library>
        <u-library more href="mailto:rainforest92@126.com?subject=%E6%88%91%E4%BB%AC%E6%83%B3%E6%8F%90%E4%BE%9B%E4%B8%80%E5%A5%97%E8%87%AA%E5%B7%B1%E7%9A%84%E7%BB%84%E4%BB%B6%E5%BA%93"></u-library>
    </div>
</template>

<script>
export default {
    methods: {
        onCheck($event) {
            localStorage.setItem('advanced', this.advanced);
        },
    },
};
</script>

<style module>
.root {
    display: flex;
    flex-wrap: wrap;
    padding: 40px 0;
}

.root > * {
    margin: 15px;
}
</style>
