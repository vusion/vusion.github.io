<template>
    <a :class="$style.root" :more="more">
        <template v-if="!more">
            <div :class="$style.head">
                <div :class="$style.logo" :name="logo" :style="{background: defaultLogo ? logoColor : ''}">{{ defaultLogo }}</div>
                <div :class="$style.title">{{ title }}</div>
            </div>
            <div :class="$style.body">
                <slot></slot>
            </div>
            <div :class="$style.footer">
                <div :class="$style.brief">{{ brief }}</div>
                <div v-if="colors" :class="$style.colors">
                    <span v-for="color in colors" :key="color" :class="$style.color" :style="{ background: color }"></span>
                </div>
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
        logo: { type: String, default: 'default' },
        logoColor: { type: String, default: '#457cd0' },
        brief: String,
        colors: Array,
        more: { type: Boolean, default: false },
    },
    computed: {
        defaultLogo() {
            return this.logo === 'default' ? this.title.substr(0, 1) : '';
        },
    },
};
</script>

<style module>
.root {
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-align: left;
    width: 270px;
    height: 185px;
    padding: 20px;
    background: white;
    /* border: 1px solid #e1e8ed; */
    cursor: default;
    margin: 15px;
    box-shadow: 0 2px 10px hsla(216,10%,28%,0.05);
    transition: box-shadow $transition-duration-slow;
}

.root:hover {
    box-shadow: 0 2px 15px rgba(64,69,78,0.15);
}

.root[disabled] {
    cursor: not-allowed;
}

.root[disabled] .head {
    opacity: 0.4;
}

.root[href] {
    cursor: pointer;
}

.root[href]:hover {
    box-shadow: 0 2px 10px rgba(90,95,100,0.12);
}

.head {
    height: 40px;
}

.logo[name="default"] {
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
    color: white;
    font-size: 24px;
    font-family: 'Gill sans', sans-serif;
}

.logo[name="vusion"] {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-top: -5px;
    vertical-align: middle;
    background: $brand-primary url(../assets/logo-inverse-square.svg) center center no-repeat;
    background-size: 80%;
    border-radius: 5px;
}

.logo[name="163yun"] {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-top: -5px;
    vertical-align: middle;
    background: url(../assets/logo-163yun.svg) no-repeat;
    background-size: 100%;
}

.logo[name="code-wave"] {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-top: -5px;
    vertical-align: middle;
    background: url(../assets/code-wave-logo.svg) no-repeat;
    background-size: 100%;
}

.title {
    display: inline-block;
    margin-left: 15px;
    line-height: 40px;
    font-size: 20px;
    color: #2c3e50;
}

.body {
    margin: 15px 0;
    height: 60px;
    color: #616e7c;
    font-size: 14px;
    line-height: 20px;
}

.footer {
    height: 20px;
    color: #999;
}

.brief {
    float: left;
}

.colors {
    float: right;
}

.color {
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    margin-right: 5px;
    border-radius: 2px;
}

.more {
    height: 32px;
    width: 32px;
    background: url(../assets/icon-add.png) no-repeat;
    background-size: 32px;
    margin-top: 56px;
    margin-left: 100px;
}
</style>
