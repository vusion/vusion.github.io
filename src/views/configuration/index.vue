<template>
    <div>
        <div :class="$style.side">
            <u-sidebar>
                <u-sidebar-item to="/configuration/vusion-cli">Vusion CLI</u-sidebar-item>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const advanced = !!JSON.parse(localStorage.getItem('advanced'));

        return {
            advanced,
        };
    },
    methods: {
        onCheck($event) {
            localStorage.setItem('advanced', this.advanced);
        },
    },
};
</script>

<style module>
.side {
    padding: 20px 0;
    position: fixed;
    width: 200px;
    top: 64px;
    bottom: 0;
    /* height: calc(100vh - 134px); */
    background: #f0f6fa;
    color: #34495e;
    overflow: auto;
}

.main {
    margin-left: 200px;
    padding: 40px;
}
</style>
