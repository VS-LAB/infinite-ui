## NavMenu 导航菜单

为网站提供导航功能的菜单。

### 顶栏

适用广泛的基础用法。
:::demo 导航菜单默认为垂直模式，通过 mode 属性可以使导航菜单变更为水平模式。另外，在菜单中通过 submenu 组件可以生成二级菜单。Menu 还提供了 background-color、text-color 和 active-text-color，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

```html
<template>
  <infinite-nav-menu
    v-model="menuData"
    mode="horizontal"
    @select="handleSelect"
    ref="infiniteNavMenu"
  >
  </infinite-nav-menu>
  <div class="line"></div>
  <infinite-nav-menu
    v-model="menuData"
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
        v-model="menuData"
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
        v-model="menuData"
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
    v-model="menuData"
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
