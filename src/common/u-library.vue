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
                    颜色：
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
        logoColor: { type: String, default: '#1ba67e' },
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
    display: block;
    width: 270px;
    height: 185px;
    box-sizing: border-box;
    padding: 20px;
    background: white;
    box-shadow: 0 0 2px 0 rgba(80,90,109,0.16);
    cursor: default;
}

.root[href] {
    cursor: pointer;
}

.root[href]:hover {
    box-shadow: 0 0 10px 0 rgba(80,90,109,0.16);
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
    border-radius: 50%;
    color: #fff;
    font-size: 16px;
}

.logo[name="163yun"] {
    display: inline-block;
    width: 50px;
    height: 34px;
    margin-top: -5px;
    vertical-align: middle;
    background: url(../assets/logo-cloud.png) no-repeat;
    background-size: 100% 100%;
}

.title {
    display: inline-block;
    margin-left: 10px;
    line-height: 40px;
    font-size: 20px;
    color: #2c3e50;
}

.body {
    margin: 10px 0 15px;
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
