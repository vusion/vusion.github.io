<template>
<a :class="$style.root">
    <slot></slot>
</a>
</template>

<script>
export default {
    name: 'u-feature-button',
};
</script>

<style module>
.root {
    /* display: inline-block; */
    /* width: 33.33%; */
    flex: 1;
    line-height: 40px;
    min-height: 40px;
    vertical-align: bottom;
    background: $brand-primary;
    color: white;
    transition: background 0.2s;
}

.root:hover {
    background: #3f71bc;
}

.root[role="preview"]::before {
    icon-font: url('../assets/eye.svg');
    font-size: 17px;
    vertical-align: -3px;
    margin-right: 4px;
}
.root[role="github"]::before {
    icon-font: url('../assets/github.svg');
    font-size: 17px;
    vertical-align: -3px;
    margin-right: 4px;
}
.root[role="download"]::before {
    icon-font: url('../assets/download.svg');
    font-size: 17px;
    vertical-align: -3px;
    margin-right: 4px;
}
.root[role="document"]::before {
    icon-font: url('../assets/document.svg');
    font-size: 17px;
    vertical-align: -3px;
    margin-right: 4px;
}

.root[disabled] {
    cursor: not-allowed;
    background: $brand-primary;
    color: rgba(255, 255, 255, 0.5);
}
</style>
