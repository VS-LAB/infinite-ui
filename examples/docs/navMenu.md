## NavMenu 导航菜单

为网站提供导航功能的菜单。

### 顶栏

适用广泛的基础用法。
:::demo 导航菜单默认为垂直模式，通过 mode 属性可以使导航菜单变更为水平模式。另外，在菜单中通过 submenu 组件可以生成二级菜单。Menu 还提供了 background-color、text-color 和 active-text-color，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

```html
<template>
  <infinite-nav-menu
    :data="menuData"
    mode="horizontal"
    @select="handleSelect"
    ref="infiniteNavMenu"
  >
  </infinite-nav-menu>
  <div class="line"></div>
  <infinite-nav-menu
    :data="menuData"
    :default-active="defaultActive"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
  </infinite-nav-menu>
</template>
<script>
  export default {
    data() {
      return {
        menuData: [
          {
            index: '1',
            label: '处理中心',
          },
          {
            index: '2',
            label: '我的工作台',
            children: [
              {
                index: '2-1',
                label: '选项1',
              },
              {
                index: '2-2',
                label: '选项2',
              },
              {
                index: '2-3',
                label: '选项3',
              },
              {
                index: '2-4',
                label: '选项4',
                children: [
                  {
                    index: '2-4-1',
                    label: '选项1',
                  },
                  {
                    index: '2-4-2',
                    label: '选项2',
                  },
                  {
                    index: '2-4-3',
                    label: '选项3',
                  },
                ],
              },
            ],
          },
          {
            index: '3',
            label: '消息中心',
            disabled: true,
          },
          {
            index: '4',
            label: '订单管理',
            component(h) {
              return h(
                'a',
                {
                  attrs: {
                    href: 'https://www.ele.me',
                    target: '_blank',
                  },
                },
                [h('span', { slot: 'title' }, '订单管理')]
              );
            },
          },
        ],
        defaultActive: '1',
      };
    },
    methods: {
      handleSelect(index, indexPath) {
        console.log(index, indexPath);
      },
    },
  };
</script>
```

:::

### 侧栏

适用广泛的基础用法。
:::demo

```html
<template>
  <el-row class="tac">
    <el-col :span="12">
      <h5>默认颜色</h5>
      <infinite-nav-menu
        :data="menuData"
        :default-active="defaultActive"
        class="infinite-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
      </infinite-nav-menu>
    </el-col>
    <el-col :span="12">
      <h5>自定义颜色</h5>
      <infinite-nav-menu
        :data="menuData"
        :default-active="defaultActive"
        class="infinite-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
      >
      </infinite-nav-menu>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        menuData: [
          {
            index: '1',
            label: '导航一',
            icon: 'el-icon-location',
            children: [
              {
                index: '1-1',
                label: '选项1',
              },
              {
                index: '1-2',
                label: '选项2',
              },
              {
                index: '1-3',
                label: '选项3',
              },
              {
                index: '1-4',
                label: '选项4',
                children: [
                  {
                    index: '1-4-1',
                    label: '选项1',
                  },
                  {
                    index: '1-4-2',
                    label: '选项2',
                  },
                  {
                    index: '1-4-3',
                    label: '选项3',
                  },
                ],
              },
            ],
          },
          {
            index: '2',
            label: '导航二',
            icon: 'el-icon-menu',
          },
          {
            index: '3',
            label: '导航三',
            disabled: true,
            icon: 'el-icon-document',
          },
          {
            index: '4',
            label: '导航四',
            icon: 'el-icon-setting',
          },
        ],
        defaultActive: '2',
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>
```

:::

### 折叠

:::demo

```html
<template>
  <infinite-button style="margin-bottom:20px" @click="isCollapse=!isCollapse"
    >点击切换折叠</infinite-button
  >
  <infinite-nav-menu
    :data="menuData"
    :default-active="defaultActive"
    class="infinite-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
  </infinite-nav-menu>
</template>
<script>
  export default {
    data() {
      return {
        menuData: [
          {
            index: '1',
            label: '导航一',
            icon: 'el-icon-location',
            children: [
              {
                index: '1-1',
                label: '选项1',
              },
              {
                index: '1-2',
                label: '选项2',
              },
              {
                index: '1-3',
                label: '选项3',
              },
              {
                index: '1-4',
                label: '选项4',
                children: [
                  {
                    index: '1-4-1',
                    label: '选项1',
                  },
                  {
                    index: '1-4-2',
                    label: '选项2',
                  },
                  {
                    index: '1-4-3',
                    label: '选项3',
                  },
                ],
              },
            ],
          },
          {
            index: '2',
            label: '导航二',
            icon: 'el-icon-menu',
          },
          {
            index: '3',
            label: '导航三',
            disabled: true,
            icon: 'el-icon-document',
          },
          {
            index: '4',
            label: '导航四',
            icon: 'el-icon-setting',
          },
        ],
        defaultActive: '1-4-1',
        isCollapse: true,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>
```

:::

### Attributes

| 参数                | 说明                                                                                | 类型    | 可选值                | 默认值   |
| ------------------- | ----------------------------------------------------------------------------------- | ------- | --------------------- | -------- |
| data                | 渲染数据 `Data Attributes`                                                          | Array   | —                     | —        |
| mode                | 模式                                                                                | String  | horizontal / vertical | vertical |
| default-active      | 当前激活菜单的 index                                                                | String  | —                     | —        |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组                                                 | Array   | —                     | —        |
| collapse            | 是否水平折叠收起菜单（仅在`mode`为`vertical`时可用）                                | Boolean | —                     | false    |
| collapse-transition | 是否开启折叠动画                                                                    | Boolean | —                     | true     |
| background-color    | 菜单的背景色（仅支持 hex 格式）                                                     | String  | —                     | #ffffff  |
| text-color          | 菜单的文字颜色（仅支持 hex 格式）                                                   | String  | —                     | #303133  |
| active-text-color   | 当前激活菜单的文字颜色（仅支持 hex 格式）                                           | String  | —                     | #409EFF  |
| router              | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | Boolean | —                     | false    |

### Data Attributes

| 属性      | 说明                | 类型                           | 可选值 | 默认值 |
| --------- | ------------------- | ------------------------------ | ------ | ------ |
| index     | 唯一标志            | String                         | —      | —      |
| route     | Vue Router 路径对象 | Object                         | —      | —      |
| disabled  | 是否禁用            | Boolean                        | —      | false  |
| component | 自定义组件          | `Function(h){return h('div')}` | —      | —      |

### Menu Events

| 事件名称 | 说明                | 回调参数                                                                   |
| -------- | ------------------- | -------------------------------------------------------------------------- |
| select   | 菜单激活回调        | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path              |
| open     | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path |
| close    | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path |
