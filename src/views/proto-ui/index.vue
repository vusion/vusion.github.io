<template>
<div>
    <div :class="$style.side">
        <u-sidebar>
            <u-sidebar-item><u-checkbox v-model="advanced" @check="onCheck">显示所有组件</u-checkbox></u-sidebar-item>
            <u-sidebar-group title="Basic">
                <u-sidebar-item exact to="/proto-ui/base">基础 <small>Base</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-link">链接 <small>Link</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-button">按钮 <small>Button</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-badge">徽章 <small>Badge</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-label">标签 <small>Label</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-icon">图标 <small>Icon</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-logo">标识 <small>Logo</small></u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="Layout">
                <u-sidebar-item exact to="/proto-ui/u-linear-layout">线性布局 <small>LinearLayout</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-grid-layout">栅格布局 <small>GridLayout</small></u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="Navigation">
                <u-sidebar-item exact to="/proto-ui/u-navbar">导航栏 <small>Navbar</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-sidebar">侧边栏 <small>Sidebar</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-tabs">标签页 <small>Tabs</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-steps">步骤条 <small>Steps</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-pagination">翻页器 <small>Pagination</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-collapse">折叠面板 <small>Collapse</small></u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="Form">
                <u-sidebar-item exact to="/proto-ui/u-input">单行输入 <small>Input</small></u-sidebar-item>
                <!-- <u-sidebar-item exact to="/proto-ui/u-number-input">数字输入 <small>NumberInput</small></u-sidebar-item> -->
                <u-sidebar-item exact to="/proto-ui/u-textarea">多行输入 <small>Textarea</small></u-sidebar-item>
                <!-- <u-sidebar-item exact to="/proto-ui/u-multi-select">多项选择框 <small>MultiSelect</small></u-sidebar-item> -->
                <u-sidebar-item exact to="/proto-ui/u-radios">单选组 <small>Radios</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-checkboxes">多选组 <small>Checkboxes</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-switch">开关 <small>Switch</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-select">选择框 <small>Select</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-slider">滑块 <small>Slider</small></u-sidebar-item>
                <!-- <u-sidebar-item exact to="/proto-ui/u-combo-slider">复合滑块 <small>ComboSlider</small></u-sidebar-item> -->
                <u-sidebar-item v-if="advanced" to="/proto-ui/u-field">表单控件 <small>Field</small></u-sidebar-item>
                <!-- <u-sidebar-item v-if="advanced" to="/proto-ui/u-form-item">表单项 <small>FormItem</small></u-sidebar-item> -->
                <u-sidebar-item exact to="/proto-ui/u-form">表单 <small>Form</small></u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group title="Data">
                <u-sidebar-item exact to="/proto-ui/u-list-view">列表选择 <small>ListView</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-tree-view">树型选择 <small>TreeView</small></u-sidebar-item>
            <!-- <u-sidebar-item exact to="/proto-ui/u-table-view">表格视图 <small>TableView</small></u-sidebar-item> -->
            <!-- <u-sidebar-item exact to="/proto-ui/u-capsules">胶囊 <small>Capsules</small></u-sidebar-item> -->
            </u-sidebar-group>
            <!-- <u-sidebar-group title="DateTime">
                <u-sidebar-item exact to="/proto-ui/u-calendar">日历 <small>Calendar</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-date-picker">日期选择 <small>DatePicker</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-time-picker">时间选择 <small>TimePicker</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-date-time-picker">日期时间 <small>DateTimePicker</small></u-sidebar-item>
            </u-sidebar-group> -->
            <u-sidebar-group title="Popper">
                <u-sidebar-item exact to="/proto-ui/u-popper">弹出层 <small>Popper</small></u-sidebar-item>
            <!-- <u-sidebar-item exact to="/proto-ui/u-tooltip">工具提示 <small>Tooltip</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-popover">弹出框 <small>Popover</small></u-sidebar-item> -->
            </u-sidebar-group>
            <!-- <u-sidebar-group title="Feedback">
                <u-sidebar-item exact to="/proto-ui/u-loading">加载中 <small>Loading</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-toast">吐司 <small>Toast</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-modal">弹窗 <small>Modal</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-lightbox">灯箱 <small>Lightbox</small></u-sidebar-item>
            </u-sidebar-group> -->
            <u-sidebar-group title="Progress & Chart">
                <u-sidebar-item exact to="/proto-ui/u-linear-progress">线型进度条 <small>LinearProgress</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-circular-progress">圆型进度条 <small>CircularProgress</small></u-sidebar-item>
            </u-sidebar-group>
            <u-sidebar-group v-if="advanced" title="Mixin & Utils">
                <u-sidebar-item exact to="/proto-ui/u-emitter">触发器 <small>Emitter</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-router-item">路由项 <small>RouterItem</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-collapse-transition">折叠过渡 <small>CollapseTransition</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-draggable">拖拽 <small>Draggable</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-droppable">拖放 <small>Droppable</small></u-sidebar-item>
                <u-sidebar-item exact to="/proto-ui/u-dragger">拖拽器 <small>Dragger</small></u-sidebar-item>
            </u-sidebar-group>
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
    top: 90px;
    bottom: 0;
    /* height: calc(100vh - 134px); */
    color: #34495e;
    overflow: auto;
}

.main {
    margin-left: 220px;
    padding: 40px;
}
</style>
