## selectTags

### 基础用法

当选项过多时，使用下拉菜单展示并利用 Tag 展示已选项。
:::demo

```html
<template>
  <infinite-select-tags v-model="value" :options="options" />
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        options: [
          {
            id: 'USD',
            name: '美元',
          },
          {
            id: 'GBP',
            name: '英镑',
          },
          {
            id: 'RMB',
            name: '人民币',
          },
          {
            id: 'EUR',
            name: '欧元',
          },
        ],
      };
    },
  };
</script>
```

:::

### 基础多选

可以自定义 Tag 的展示个数，支持默认选项
:::demo

```html
<template>
  <infinite-select-tags v-model="value" :options="options" :tags-num="4" />
</template>
<script>
  export default {
    data() {
      return {
        value: ['USD', 'GBP', 'RMB', 'EUR', 'CAD', 'AUD', 'TAD', 'MUD'],
        options: [
          {
            id: 'USD',
            name: '美元',
          },
          {
            id: 'GBP',
            name: '英镑',
          },
          {
            id: 'RMB',
            name: '人民币',
          },
          {
            id: 'EUR',
            name: '欧元',
          },
          {
            id: 'CAD',
            name: '加元',
          },
          {
            id: 'AUD',
            name: '澳大利亚元',
          },
          {
            id: 'TAD',
            name: '泰元',
          },
          {
            id: 'MUD',
            name: '孟加拉元',
          },
        ],
      };
    },
  };
</script>
```

:::

### 禁用多选

支持禁用选项，也支持自定义结合使用
:::demo

```html
<template>
  <infinite-select-tags v-model="value" :options="options" :tags-num="4" />
</template>
<script>
  export default {
    data() {
      return {
        value: ['USD', 'RMB'],
        options: [
          {
            id: 'USD',
            name: '美元',
            disabled: true,
          },
          {
            id: 'GBP',
            name: '英镑',
            disabled: true,
          },
          {
            id: 'RMB',
            name: '人民币',
            disabled: true,
          },
          {
            id: 'EUR',
            name: '欧元',
          },
          {
            id: 'CAD',
            name: '加元',
          },
          {
            id: 'AUD',
            name: '澳大利亚元',
          },
          {
            id: 'TAD',
            name: '泰元',
          },
          {
            id: 'MUD',
            name: '孟加拉元',
          },
        ],
      };
    },
  };
</script>
```

:::

### Attributes

| 参数      | 说明                                  | 类型   | 可选值 | 默认值 |
| --------- | ------------------------------------- | ------ | ------ | ------ |
| options   | 详细参数 `Options Attributes`         | array  | —      | —      |
| selecteds | 指定默认被选中的选项 id 数组          | array  | —      | —      |
| tags-num  | 指定 input 内被选中选项的标签显示个数 | number | —      | 3      |

### Options Attributes

| 参数     | 说明               | 类型    | 可选值 | 默认值 |
| -------- | ------------------ | ------- | ------ | ------ |
| id       | 选项的 id          | String  | —      | 'id'   |
| name     | 选项的值           | String  | —      | 'name' |
| disabled | 指定选项为禁用选项 | Boolean | —      | false  |

### Events

| 参数      | 说明          | 回调参数                    |
| --------- | ------------- | --------------------------- |
| makeSure  | 确认选中的值  | id                          |
| allSelect | 全选/取消全选 | 选中节点的 isChecked 的状态 |
