# 页面与路由

我们将可以用路由进行引导的这一类组件称为页面。

页面组件只需要在路由配置中引用，不需要在 Vue 中全局注册`name`，或者被别的组件引用。父页面一般会包含`<router-view>`，用于设置子页面的位置。

### 目录结构

所有页面都在`src/views`中，目录结构与**路由的路径**保持一致，一层层递归下去：

- 一个`index.vue`，表示当前目录名所对应的页面；
- 一个其它名称的`.vue`，表示当前目录的一个子页面。

如果这个页面为入口页面（需要后端路由的页面），直接在目录下添加后端模板，因为某些情况下可以前后端路由可能要互换，这样就不用改变目录结构。

下面为一个示例：

```
views/
├─ dashboard/
│   ├─ index.html                   # 直接添加模板
│   ├─ index.vue                    # 入口页面。对应路由'/dashboard'
│   ├─ task/
│   │   ├─ index.vue                # 任务页。对应路由'/dashboard/task'
│   │   ├─ create.vue               # 任务创建页。对应路由'/dashboard/task/create'
│   │   ├─ edit.vue                 # 任务编辑页。对应路由'/dashboard/task/edit'
│   │   ├─ detail/                  #
│   │   │   ├─ index.vue            # 任务详情页。对应路由'/dashboard/task/detail'
│   │   │   ├─ summary.vue          # 任务摘要页。对应路由'/dashboard/task/detail/summary'
│   │   │   ├─ subtask.vue          # 子任务页。对应路由'/dashboard/task/detail/subtask'
│   │   │   └─ ...
│   │   └─ ...
│   └─ ...
└─ ...
```

部分页面如上面的“子任务页”，它的视图结构可能不在`detail`的`<router-view>`下，但我们仍然要按路由结构把它放在`detail`目录下。可以通过灵活的路由配置将它的视图结构提出来。

### 下一步

下一节[组件库](/guides/library)。
