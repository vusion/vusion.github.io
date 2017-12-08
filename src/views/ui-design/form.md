# 表单系列

一般来说，表单是Web应用中最常见，最重要，也是最复杂的交互形式之一，表单系列组件设计的好坏很大程度决定了整个应用实现的质量。

表单的布局样式比较单一，并且有许多如规则验证、数据比较等通用逻辑，但由于原生表单元素样式简陋，功能单薄，对SPA不友好，不具备处理这些复杂问题的能力，因此必须在原生元素基础上作一层封装。

### 示例

``` html
<u-form>
    <u-form-item label="计费方式">
        <u-radios value="按量付费">
            <u-radio label="资源包">资源包</u-radio>
            <u-radio label="按量付费">按量付费</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item label="实例名称">
        <u-input maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
    </u-form-item>
    <u-form-item label="端口号">
        <u-input maxlength="5" placeholder="1150-65535" value="3306"></u-input>
    </u-form-item>
    <u-form-item label="详情">
        <u-textarea></u-textarea>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">立即创建</u-button>
    </u-form-item>
</u-form>
```

### 相关组件

上面是一个简单的示例，我们可以归纳出与表单相关的组件有以下几种：

#### 表单 Form

用于整体布局，集中设置属性，统一暴露事件和方法。

#### 表单组 FormGroup

针对表单项进行分组，主要用于布局，可能会有分组组件常见的折叠功能。

#### 表单项 FormItem

用于排列表单标签与控件的位置，必选提示，规则验证等。

#### 表单域（表单控件） Field

作为各种表单域（表单控件）的基类，与FormItem发生联系。

> 任何一个组件，如果它可以通过表单对后端数据进行读写操作的，那么我们就可以认为它是一个**表单控件**。

比如常见的：`<u-input>`、`<u-select>`、`<u-radios>`、`<u-date-picker>`等。

## 如何扩展

`<u-form>`、`<u-form-group>`、`<u-form>`三种组件构成一个基本的表单体系，在大部分场景可以直接使用，不需要做扩展。而表单控件在业务中是多样的，原型组件库不可能完全覆盖，有很多需要自行设计。

下面会讲述，如何设计表单控件，接入到Vusion的表单体系中，从而可以统一走表单的规则验证、事件处理等通道，不需额外处理。

### 简单示例

我们先拿一个最简单的表单控件`<e-checkbox>`来举例：

#### 结构和样式

``` vue
<template>
<div :class="$style.root">✓</div>
</template>

<script>
export default {
    name: 'e-checkbox',
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: $brand-primary;
}
</style>
```

#### 属性

每个表单控件总有一个核心属性，通常用于绑定数据，比如：

- `<u-checkbox>`可以有一个表示选中状态的`checked`属性
- `<u-date-picker>`可以有一个表示日期的`date`属性
- `<u-number-input>`可以有一个表示数字的`number`属性

但在Vusion中，我们推荐统一使用`value`属性来处理，因为：

- 经常有对表单控件做统一处理的情形，比如有的时候你可能需要遍历：`form.fields.map((field) => field.value)`
- 为了与Vue的`v-model`保持一致（虽然它也支持自定义）
- 有时实在想不出什么好的名字，不如直接用`value`也不显得混乱

因此，将上面的示例改成如下方式：

``` vue
<template>
<div :class="$style.root" @click="value = !value">{{ value ? '✓' : '&nbsp;' }}</div>
</template>

<script>
export default {
    name: 'e-checkbox',
    props: {
        value: { type: Boolean, default: true },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: $brand-primary;
}
</style>
```

#### 单向流与双向绑定

熟悉Vue的童鞋都知道，Vue2.x为了保证单向数据流，放弃了1.x的双向绑定机制。这是好事，因为不用担心内部组件悄悄地改变父组件的状态。

但与此同时，也给我们的组件设计稍微带来点不便：对于一个属性，我们往往需要两个变量来维护。

比如在上面的例子中，我们只有一个prop，当点击复选框时，Vue却不允许修改这个属性。所以我们还需要一个data变量来维护实际的内部状态。

##### 命名规范

这里就牵扯到一个命名规范了。prop中一个`value`，data中一个`value`，名字重复，怎么定义比较好？

``` javascript
{
    props: {
        value: { type: Boolean, default: true },
    },
    data() {
        return { value: true };
    },
}

```

首先，`value`和`_value`是不行的，因为Vue不会对`_`开头的变量做依赖管理。然后，有的组件库中是用`initValue`或者`defaultValue`来表示prop，用`value`来表示data，我认为这样也不合理，因为prop也是会变的，不一定是一个默认值或初始值。

我们更倾向组件暴露的API简洁友好，所以还是决定对data下手。Vusion中规定与prop相关的那个data变量，在前面加上`current`前缀，表示当前的一种状态。比如`currentValue`变量对应`value`属性，`currentPage`变量对应`page`属性，`currentExpanded`变量对应`expanded`属性等。

##### 监听属性

当变成两个变量的时候，外部传入的状态与内部状态分离，也就是说内部状态不会响应外部状态的变更。这时需要一个额外的watcher来处理。

考虑到这几点，示例修改为下面的形式：

``` vue
<template>
<div :class="$style.root" @click="currentValue = !currentValue">{{ currentValue ? '✓' : '&nbsp;' }}</div>
</template>

<script>
export default {
    name: 'e-checkbox',
    props: {
        value: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
    },
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: $brand-primary;
}
</style>
```

##### 双向绑定

最后，为了让组件使用起来更方便，Vue2提供了`v-model`和`.sync`两种双向绑定语法糖，我们都实现一下。

*下面的例子为了让大家更好地观察双向绑定，将`<e-checkbox>`组件的代码放入了components中。*

``` vue
<template>
<div>
    <div>复选框：<e-checkbox :class="$style.checkbox" v-model="exampleChecked"></e-checkbox></div>
    <div>绑定值：{{ exampleChecked }}</div>
</div>
</template>

<script>
export default {
    components: {
        'e-checkbox': {
            template: `<div @click="check()">{{ currentValue ? '✓' : '&nbsp;' }}</div>`,
            props: {
                value: { type: Boolean, default: false },
            },
            data() {
                return {
                    currentValue: this.value,
                };
            },
            watch: {
                value(value) {
                    this.currentValue = value;
                },
            },
            methods: {
                check() {
                    const currentValue = this.currentValue = !this.currentValue;
                    this.$emit('input', currentValue);
                    this.$emit('update:value', currentValue);
                }
            },
        },
    },
    data() {
        return { exampleChecked: false };
    },
};
</script>

<style module>
.checkbox {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: $brand-primary;
}
</style>
```

#### 继承Field

到目前为止，我们仅是单独实现了一个表单控件，但还没有与Vusion的表单体系联系起来。

其实这些功能已经封装在`<u-field>`这个组件或Mixin中了，只需继承一下即可。

``` vue
<template>
<u-form ref="form">
    <u-form-item label="复选框" required :rules="rules">
        <e-checkbox :class="$style.checkbox"></e-checkbox> 同意并遵守服务条款
    </u-form-item>
    <u-form-item><u-button color="primary" @click="$refs.form.validate().catch(() => {})">提交</u-button></u-form-item>
</u-form>
</template>

<script>
import { Field } from 'proto-ui.vusion';

export default {
    components: {
        'e-checkbox': {
            mixins: [Field],
            template: `<div @click="check()">{{ currentValue ? '✓' : '&nbsp;' }}</div>`,
            props: {
                value: { type: Boolean, default: false },
            },
            data() {
                return {
                    currentValue: this.value,
                };
            },
            watch: {
                value(value) {
                    this.currentValue = value;
                },
            },
            methods: {
                check() {
                    const currentValue = this.currentValue = !this.currentValue;
                    this.$emit('input', currentValue);
                    this.$emit('update:value', currentValue);
                }
            },
        },
    },
    data() {
        return {
            rules: [
                { type: 'boolean', required: true, trigger: 'input', message: '您还未接受服务条款', validator(rule, value, callback) {
                    value ? callback() : callback(new Error(false));
                } },
            ],
        };
    },
};
</script>

<style module>
.checkbox {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: $brand-primary;
}
</style>
```

#### 事件

上面我们只抛了一个`input`事件。为了保证实现的完整性与一致性，对于一个表单控件，我们最好暴露这4种事件：`input`、`change`、`focus`和`blur`。

对于组件中有focusable的元素，我们照着抛出来就行；如果没有的话，我们可以用`tabindex`来设置。

``` vue
<template>
<div :class="$style.root"
    @click="check()"
    tabindex="0" @keydown.space.prevent @keyup.space.prevent="check()"
    @focus="onFocus" @blur="onBlur"
>{{ currentValue ? '✓' : '&nbsp;' }}</div>
</template>

<script>
import { Field } from 'proto-ui.vusion';

export default {
    name: 'e-checkbox',
    mixins: [Field],
    props: {
        value: { type: Boolean, default: false },
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
    },
    methods: {
        onFocus(e) {
            this.$emit('focus', e);
        },
        onBlur(e) {
            this.$emit('blur', e);
        },
        check() {
            const currentValue = this.currentValue = !this.currentValue;
            this.$emit('input', currentValue);
            this.$emit('update:value', currentValue);
        }
    },
};
</script>

<style module>
.root {
    display: inline-block;
    user-select: none;
    width: 18px;
    height: 18px;
    line-height: 16px;
    border: 1px solid #ccc;
    text-align: center;
    color: $brand-primary;
}
</style>
```

### 复杂示例

假设有一个关于填写IP的表单控件`<e-ip-input>`，表单提交时需要验证IP的正确性。

#### 结构和样式

``` vue
<template>
<div :class="$style.root">
    <u-input :class="$style.input" maxlength="3"></u-input> .
    <u-input :class="$style.input" maxlength="3"></u-input> .
    <u-input :class="$style.input" maxlength="3"></u-input> .
    <u-input :class="$style.input" maxlength="3"></u-input>
</div>
</template>

<script>
export default {
    name: 'e-ip-input',
};
</script>

<style module>
.root {}

.input {
    width: 60px;
}
</style>
```

#### 属性

根据之前的约定，核心属性我们取`value`而不是`ip`。

``` vue
<template>
<div :class="$style.root">
    <u-input :class="$style.input" maxlength="3" v-model="parts[0]"></u-input> .
    <u-input :class="$style.input" maxlength="3" v-model="parts[1]"></u-input> .
    <u-input :class="$style.input" maxlength="3" v-model="parts[2]"></u-input> .
    <u-input :class="$style.input" maxlength="3" v-model="parts[3]"></u-input>
</div>
</template>

<script>
export default {
    name: 'e-ip-input',
    props: {
        value: String
    },
    data() {
        return {
            parts: [],
        };
    },
    watch: {
        value(value) {
            this.parts = value.split('.');
        },
    },
};
</script>

<style module>
.root {}

.input {
    width: 60px;
}
</style>
```

#### 单向流与双向绑定

*下面的例子为了让大家更好地观察双向绑定，将`<e-checkbox>`组件的代码放入了components中。*

``` vue
<template>
<div>
    <div>IP框：<e-ip-input v-model="ip"></e-ip-input></div>
    <div>绑定值：{{ ip }}</div>
</div>
</template>

<script>
export default {
    components: {
        'e-ip-input': {
            template: `<div style="display: inline-block">
                <u-input maxlength="3" v-model="parts[0]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[1]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[2]" @input="onInput()" style="width: 60px"></u-input> .
                <u-input maxlength="3" v-model="parts[3]" @input="onInput()" style="width: 60px"></u-input>
            </div>`,
            props: {
                value: String
            },
            data() {
                return {
                    parts: [],
                };
            },
            watch: {
                value(value) {
                    this.parts = value.split('.');
                },
            },
            methods: {
                onInput() {
                    const value = this.parts.join('.');

                    this.$emit('input', value);
                    this.$emit('update:value', value);
                },
            },
        },
    },
    data() {
        return { ip: undefined };
    },
};
</script>
```

#### 继承Field并添加事件

``` vue
<template>
<u-form ref="form">
    <u-form-item label="IP地址" required :rules="rules">
        <e-ip-input v-model="model.ip"></e-ip-input>
    </u-form-item>
    <u-form-item><u-button color="primary" @click="$refs.form.validate().catch(() => {})">提交</u-button></u-form-item>
</u-form>
</template>

<script>
import { Field } from 'proto-ui.vusion';

export default {
    components: {
        'e-ip-input': {
            mixins: [Field],
            template: `<div style="display: inline-block">
                <u-input maxlength="3" v-model="parts[0]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[1]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[2]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input> .
                <u-input maxlength="3" v-model="parts[3]"
                    @input="onInput()" @change="onChange()" @focus="onFocus($event)" @blur="onBlur($event)"
                    style="width: 60px"
                ></u-input>
            </div>`,
            props: {
                value: String
            },
            data() {
                return {
                    parts: [],
                };
            },
            watch: {
                value(value) {
                    this.parts = value.split('.');
                },
            },
            methods: {
                onInput(partValue, index) {
                    const value = this.parts.join('.');

                    this.$emit('input', value);
                    this.$emit('update:value', value);
                },
                onChange() {
                    const value = this.parts.join('.');
                    this.$emit('change', {
                        value,
                    });
                },
                onFocus(e) {
                    this.$emit('focus', e);
                },
                onBlur(e) {
                    this.$emit('blur', e);
                },
            },
        },
    },
    data() {
        return {
            model: {
                ip: undefined,
            },
            rules: [
                { type: 'string', required: true, trigger: 'blur', message: '请填写IP' },
                { type: 'string', required: true, message: '请填写完整的IP', validator(rule, value, callback) {
                    const parts = value.split('.');
                    parts.length === 4 ? callback() : callback(new Error(''));
                } },
                { type: 'string', required: true, trigger: 'input+blur', message: '请填写数字', validator(rule, value, callback) {
                    const parts = value.split('.');
                    parts.every((part) => !isNaN(part) && part !== '') ? callback() : callback(new Error());
                } },
                { type: 'string', required: true, trigger: 'input+blur', message: '请填写0-255的数字', validator(rule, value, callback) {
                    const parts = value.split('.');
                    parts.every((part) => 0 <= part && part < 256) ? callback() : callback(new Error());
                } },
            ]
        };
    },
};
</script>
```
