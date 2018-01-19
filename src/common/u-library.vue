<template>
<a :class="$style.root" :more="more">
    <template v-if="!more">
        <div :class="$style.head">
            <div v-if="logo" :class="$style.logo" :name="logo"></div>
            <div :class="$style.title">{{ title }}</div>
        </div>
        <div :class="$style.colors">
            <span v-for="color in colors" :key="color" :class="$style.color" :style="{ background: color }"></span>
        </div>
    </template>
    <div v-else :class="$style.more" title="我们想提供一套自己的组件库"></div>
</a>
</template>

<script>
export default {
    name: 'u-library',
    props: {
        title: String,
        logo: String,
        colors: Array,
        more: { type: Boolean, default: false },
    },
};
</script>

<style module>
.root {
    display: block;
    width: 200px;
    height: 200px;
    background: white;
    box-shadow: 0 0 2px 0 rgba(80,90,109,0.16);
    position: relative;
    cursor: default;
}

.root[href]:hover {
    box-shadow: 0 0 10px 0 rgba(80,90,109,0.16);
}

.logo[name="163yun"] {
    display: inline-block;
    margin-top: 40px;
    margin-bottom: -20px;
    width: 130px;
    height: 80px;
    background: url(../assets/logo-163yun-colorful.svg) no-repeat;
    background-size: 100% 100%;
}

.head {
    height: 160px;
    font-size: 22px;
    text-align: center;
}

.title {
    color: #d5dce4;
    line-height: 180px;
}

.logo + .title {
    line-height: 1em;
    font-size: 18px;
}

.root[href] {
    cursor: pointer;
}

.root[href] .title {
    color: #657f98;
}

.colors {
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 20px;
}

.color {
    width: 1em;
    height: 1em;
    margin-right: 2px;
}

.more {
    font-size: 72px;
    text-align: center;
    line-height: 200px;
    color: #657f98;
}

.more:before {
    icon-font: url('../assets/ic_add_black_24px.svg');
}
</style>
