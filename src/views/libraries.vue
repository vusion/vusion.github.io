<template>
    <div :class="$style.root">
        <u-library :colors="['#1a9e78', '#ddd']" title="Proto UI" brief="UI库" href="/proto-ui">
            Vusion 官方提供的一套跨产品的原型组件库，样式简洁、功能完善，用于快速扩展新组件库。
        </u-library>
        <u-library :colors="['#67aaf5', '#4a89e8', '#2cb78e']" target="_blank" title="Cloud UI" logo="163yun" brief="UI库"
                   href="https://vusion.github.io/cloud-ui">
            扩展自 Proto UI，组件完善、功能强大、多套主题，用于快速构建网易云风格的 Web 应用。
        </u-library>
        <u-library target="_blank" title="Vusion UI" disabled></u-library>
        <u-library target="_blank" title="NetEase UI" disabled logo-color="#e24244"></u-library>
        <u-library target="_blank" title="Material Design" disabled logo-color="#20bcd2"></u-library>
        <u-library target="_blank" title="Flat UI" disabled logo-color="#2abb9c"></u-library>
        <u-library target="_blank" title="Mac Style" :colors="['#419bf9', '#f4f4f4']" logo-color="#459df6" brief="UI库" href="https://vusion.github.io/mac-style">
            扩展自 Proto UI，模拟原生 Mac 风格，用于快速构建 Mac 下的 Electron 应用。
        </u-library>
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
