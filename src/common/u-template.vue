<template>
<div :class="$style.root">
    <div :class="$style.body"><slot></slot></div>
    <div :class="$style.foot">
        <div :class="$style.title">{{ title }}</div>
    </div>
    <div :class="$style.buttons">
        <a :class="$style.button" role="preview" :href="`https://vusion.dev/${name}`" target="_blank">效果预览</a>
        <a :class="$style.button" role="github" :href="`https://github.com/vusion-templates/${name}`" target="_blank">查看源码</a>
        <a :class="$style.button" role="download" :href="`https://github.com/vusion-templates/${name}/archive/master.zip`" target="_blank">一键下载</a>
    </div>
</div>
</template>

<script>
export default {
    name: 'u-template',
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
    box-shadow: 0 2px 10px hsla(216,10%,28%,0.05);
    background: white;
    overflow: hidden;
}

.root:hover {
    box-shadow: 0 2px 15px rgba(64,69,78,0.15);
}

.body {
    padding: 15px;
    min-height: 294px;
}

.body > img {
    max-width: 100%;
}

.title {
    font-weight: bold;
    margin-top: -15px;
    line-height: 40px;
}

.buttons {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    margin-top: 20px;
    transition: bottom 0.2s;
}

.button {
    display: inline-block;
    width: 33.33%;
    line-height: 40px;
    background: $brand-primary;
    color: white;
    transition: background 0.2s;
}

.button:hover {
    background: #3f71bc;
}

.button[role="preview"]::before {
    icon-font: url('../assets/eye.svg');
    font-size: 17px;
    vertical-align: -3px;
    margin-right: 4px;
}
.button[role="github"]::before {
    icon-font: url('../assets/github.svg');
    font-size: 17px;
    vertical-align: -3px;
    margin-right: 4px;
}
.button[role="download"]::before {
    icon-font: url('../assets/download.svg');
    font-size: 17px;
    vertical-align: -3px;
    margin-right: 4px;
}

.root:hover .buttons {
    bottom: 0;
}
</style>
