# 组件设计风格

## 命名

#### 组件命名

| 组件名和类名                | 实例名                     | 标签名                     | 文件名                     |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| 大驼峰                     | 小驼峰                     | 连字符                     | 与标签名一致                |
| Select                    | selectVM                  | `<u-select>`              | u-select.vue              |
| CascadeSelect             | cascadeSelectVM           | `<u-cascade-select>`      | u-cascade-select.vue      |
| Steps                     | stepsVM                   | `<u-steps>`               | u-steps.vue               |
| Step                      | stepVM                    | `<u-step>`                | u-step.vue                |
| TreeView                  | treeViewVM                | `<u-tree-view>`           | u-tree-view.vue           |
| TreeViewNode              | treeViewNodeVM            | `<u-tree-view-node>`      | u-tree-view-node.vue      |
| Calendar                  | calendarVM                | `<u-calendar>`            | u-calendar.vue            |
| DatePicker                | datePickerVM              | `<u-date-picker>`         | u-date-picker.vue         |
| DateTimePicker            | dateTimePickerVM          | `<u-date-time-picker>`    | u-date-time-picker.vue    |

#### 要求 Element 元素统一使用`El`后缀

``` js
// ✗ bad
const elem = this.$el;
const element = e.target;
const input = this.$refs.input

// ✓ good
const el = this.$el;
const el = e.target;
const inputEl = this.$refs.input;
```

#### 要求 Vue 实例统一使用`VM`后缀

``` js
// ✗ bad
const instance = this;
const form = this.$refs.form;
this.$emit('select', {
    item,
});

// ✓ good
const vm = this;
const formVM = this.$refs.form;
this.$emit('select', {
    item,
    itemVM: selectedVM,
});
```

## 事件

#### input 事件只抛出改变的值

为了适应`v-model`。

``` js
// ✓ good
this.$emit('input', value);
this.$emit('update:value', value);
```

#### 其它事件统一抛出一个对象

``` js
// ✓ good
this.$emit('select', {
    value,
    item,
    itemVM: selectedVM,
});

this.$emit('change', {
    value,
    oldValue,
});
```

#### 被动接收事件方法使用`on`前缀

``` js
// ✗ bad
{
    methods: {
        input() {
            // ...
        },
        handleValidate() {
            // ...
        },
    },
}

// ✓ good
{
    methods: {
        onInput() {
            // ...
        },
        onValidate() {
            // ...
        },
    },
}
```

## Slot

#### slot 只在对应名称的 class 内设置

``` htm
// ✗ bad
<slot name="head">
    <div :class="$style.head">
            <slot name="title">
                <div :class="$style.title">
                    {{ title }}
                </div>
            </slot>
            <div :class="$style.close"></div>
    </div>
</slot>

// ✓ good
<div :class="$style.head">
    <slot name="head">
        <div :class="$style.title">
            <slot name="title">{{ title }}</slot>
        </div>
        <div :class="$style.close"></div>
    </slot>
</div>
```

## 样式

`.root`不一定是模板的根节点，一定是组件中角色的根节点，最好的可以透传样式或属性的节点。

#### 变量命名

- 常见状态：`default`, `primary`, `info`, `success`, `warning`, `error`, `disabled`, `muted`, ...
- 大小分级：`mini`, `small`, `base`, `large`, `huge`, ...
- 颜色分级：`darkest`, `darker`, `dark`, `base`, `light`, `lighter`, `lightest`, ...
