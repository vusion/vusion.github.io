<template>
<div :class="$style.root">
    <div :class="$style.body"><slot></slot></div>
    <div :class="$style.foot">
        <div :class="$style.title">{{ title }}</div>
    </div>
    <div :class="$style.buttons">
        <slot name="buttons"></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'u-feature',
    props: {
        name: String,
        title: String,
        src: String,
    },
};
</script>

<style module>
.root {
    position: relative;
    display: inline-block;
    width: 500px;
    margin: 20px 30px;
    box-shadow: 0 2px 10px hsla(216, 10%, 28%, 0.05);
    background: white;
    overflow: hidden;
}

.root:hover {
    box-shadow: 0 2px 15px rgba(64, 69, 78, 0.15);
}

.body {
    padding: 15px;
    min-height: 324px;
}

.body > img {
    display: block;
    max-width: 100%;
}

.title {
    font-weight: bold;
    margin-top: -15px;
    line-height: 40px;
    font-size: 14px;
}

.buttons {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    margin-top: 20px;
    transition: bottom 0.2s;
}

.root:hover .buttons {
    bottom: 0 !important;
}

.root[size="huge"] {
    width: 800px;
}

.root[size="huge"] .title {
    font-size: 16px;
    line-height: 46px;
}

.root[size="huge"] .buttons {
    bottom: -46px;
}

.root[size="huge"] .buttons > a {
    line-height: 46px;
    min-height: 46px;
}
</style>
