<template>
    <div :class="$style.root">
        <u-library title="Cloud Design" logo="163yun" :colors="['#67aaf5', '#4a89e8', '#2cb78e']" href="https://vusion.github.io/cloud-ui"></u-library>
        <u-library title="Vusion UI"></u-library>
        <u-library title="Proto UI" :colors="['#4b8', '#ddd']" href="https://vusion.github.io/proto-ui"></u-library>
        <u-library title="Material Design"></u-library>
        <u-library title="Flat UI"></u-library>
        <u-library title="Mac Style"></u-library>
        <u-library title="Metro Style"></u-library>
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
