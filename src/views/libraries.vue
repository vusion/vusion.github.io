<template>
    <div :class="$style.root">
        <u-library title="Proto UI" :colors="['#1a9e78', '#ddd']" href="/proto-ui"></u-library>
        <u-library title="Cloud Design" logo="163yun" :colors="['#67aaf5', '#4a89e8', '#2cb78e']" href="https://vusion.github.io/cloud-ui"></u-library>
        <u-library title="Vusion UI"></u-library>
        <u-library title="NetEase UI"></u-library>
        <u-library title="Material Design"></u-library>
        <u-library title="Flat UI"></u-library>
        <u-library title="Mac Style" :colors="['#419bf9', '#f4f4f4']" href="https://vusion.github.io/mac-style"></u-library>
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
    margin: 20px;
}
</style>
