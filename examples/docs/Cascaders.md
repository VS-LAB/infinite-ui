## Cascaders 联动组件

常用的操作按钮。

### 基础用法

基础的联动组件用法。
:::demo 使用`options`属性来定义级联动的数据,根据`options`里边不同的`component`来定义不同的联动组件,`v-model`可以双向绑定两个属性,分别是`keys`和`value`。

```html
<template>
  <infinite-cascaders
    :options="options"
    v-model="value"
    @componentEvent="componentEvent"
    @cascaderChange="cascaderChange"
  />
</template>
<script>
  export default {
    methods: {
      // 所有联动组件事件
      componentEvent() {
        console.log('componentEvent = ', this.value);
      },
      // 级联动change
      cascaderChange() {
        console.log('cascaderChange = ', this.value);
      },
    },
    data() {
      return {
        value: {
          keys: ['inputs', 'input-1'],
          value: '默认输入值',
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
                placeholder: '请输入数字',
              },
              {
                value: 'input-2',
                label: '文本输入框',
                component: 'input',
                type: 'text',
                placeholder: '请输入文本',
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
            value: 'date-picker',
            label: '日期选择器',
            children: [
              {
                value: 'date-picker-1',
                label: '日选择器',
                component: 'date-picker',
                type: 'date',
                placeholder: '请选择日期',
              },
            ],
          },
        ],
      };
    },
  };
</script>
```

:::

### Attributes

| 参数           | 说明                                                                                    | 类型   | 可选值 | 默认值 |
| -------------- | --------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| v-model/vModel | 绑定的数据                                                                              | Object | —      | —      |
| options        | 详细参数 `Options Attributes`                                                           | Array  | —      | —      |
| props          | 当 options 的 key 值不一样的时候，你可以使用`props`进行配置，详细使用`props Attributes` | Object | —      | —      |

### Options Attributes

| 参数      | 说明                          | 类型   | 可选值                   | 默认值 |
| --------- | ----------------------------- | ------ | ------------------------ | ------ |
| value     | 选项的值                      | String | —                        | —      |
| label     | 选项标签                      | String | —                        | —      |
| children  | 子选项                        | String | —                        | —      |
| component | 组件名                        | String | input/button/date-picker | —      |
| type      | 组件属性                      | String | —                        | —      |
| name      | `component`为`button`时才生效 | String | —                        | —      |

### Props Attributes

| 参数     | 说明                                   | 类型   | 可选值 | 默认值     |
| -------- | -------------------------------------- | ------ | ------ | ---------- |
| value    | 指定选项的值为选项对象的某个属性值     | String | —      | 'value'    |
| label    | 指定选项标签为选项对象的某个属性值     | String | —      | 'label'    |
| children | 指定选项的子选项为选项对象的某个属性值 | String | —      | 'children' |
| disabled | 指定选项的禁用为选项对象的某个属性值   | String | —      | 'disabled' |

### Form Events

| 参数           | 说明                       | 回调参数      |
| -------------- | -------------------------- | ------------- |
| componentEvent | 组件值变化或组件点击时触发 | 组件值        |
| cascaderChange | 当选中节点变化时触发       | —选中节点的值 |
