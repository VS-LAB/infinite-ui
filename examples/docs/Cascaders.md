## Cascaders 联动组件

常用的操作按钮。

### 基础用法

基础的联动组件用法。
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<template>
  <infinite-cascaders
    :options="options"
    v-model="value"
    @componentClick="componentClick"
    @componentInput="componentInput"
  />
</template>
<script>
  export default {
    methods: {
      componentInput() {},
      componentClick(val) {
        console.log(val);
      },
    },
    watch: {
      value() {
        console.log(this.value.keys, this.value.value);
      },
    },
    data() {
      return {
        value: {
          keys: ['inputs', 'input-1'],
          value: '2323',
        },
        options: [
          {
            value: 'inputs',
            label: '输入框',
            children: [
              {
                value: 'input-1',
                label: '数字输入框',
                component: 'input',
                type: 'number',
              },
              {
                value: 'input-2',
                label: '文本输入框',
                defaultValue: '默认文本内容',
                component: 'input',
                type: 'text',
              },
            ],
          },
          {
            value: 'button',
            label: '按钮',
            children: [
              {
                value: 'button-1',
                label: '主要按钮',
                name: '主要按钮',
                component: 'button',
                type: 'primary',
              },
              {
                value: 'button-2',
                label: '成功按钮',
                name: '成功按钮',
                component: 'button',
                type: 'success',
              },
              {
                value: 'button-3',
                label: '警告按钮',
                name: '警告按钮',
                component: 'button',
                type: 'warning',
              },
              {
                value: 'button-4',
                label: '危险按钮',
                name: '危险按钮',
                component: 'button',
                type: 'danger',
              },
            ],
          },
          {
            value: 'textarea',
            label: '文本域',
            defaultValue: '文本域默认值',
            component: 'input',
            type: 'textarea',
          },
        ],
      };
    },
  };
</script>
```

:::
