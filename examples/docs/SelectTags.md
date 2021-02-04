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
  <infinite-select-tags
    v-model="value"
    :default-checkeds="defaultCheckeds"
    :options="options"
    :tags-num="4"
  />
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        defaultCheckeds: [
          'USD',
          'GBP',
          'RMB',
          'EUR',
          'CAD',
          'AUD',
          'TAD',
          'MUD',
        ],
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

### 模糊查询

根据输入的内容展示匹配到内容
:::demo

```html
<template>
  <infinite-select-tags
    v-model="value"
    :default-checkeds="defaultCheckeds"
    :options="options"
    :tags-num="4"
    :filterable="true"
  />
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        defaultCheckeds: [
          'USD',
          'GBP',
          'RMB',
          'EUR',
          'CAD',
          'AUD',
          'TAD',
          'MUD',
        ],
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
  <infinite-select-tags
    v-model="value"
    :options="options"
    :default-checkeds="defaultCheckeds"
    :tags-num="4"
  />
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        defaultCheckeds: ['USD', 'RMB'],
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

### 二级选项

支持二级选项
:::demo 这里可以根据根节点的`disabled`属性来禁用整块区域，也提供了`default-checkeds`属性，可以选中当前节点以及子节点

```html
<template>
  <infinite-select-tags
    v-model="value"
    :options="options"
    :default-checkeds="defaultCheckeds"
    :tags-num="4"
    :filterable="true"
  />
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        defaultCheckeds: ['USD'],
        options: [
          {
            id: 'USD',
            name: '美元',
            disabled: true,
            children: [
              {
                id: 'USD-1',
                name: '美元-1',
              },
              {
                id: 'USD-2',
                name: '美元-2',
              },
              {
                id: 'USD-3',
                name: '美元-3',
              },
              {
                id: 'USD-4',
                name: '美元-4',
              },
            ],
          },
          {
            id: 'GBP',
            name: '英镑',
            children: [
              {
                id: 'GBP-1',
                name: '英镑-1',
              },
              {
                id: 'GBP-2',
                name: '英镑-2',
              },
              {
                id: 'GBP-3',
                name: '英镑-3',
              },
              {
                id: 'GBP-4',
                name: '英镑-4',
              },
            ],
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
            name: '澳大利亚',
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

### 过滤 label

:::demo

```html
<template>
  <infinite-select-tags
    v-model="value"
    :options="options"
    :default-checkeds="defaultCheckeds"
    :tags-num="4"
    :filterLabels="filterLabels"
  />
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        defaultCheckeds: ['USD'],
        options: [
          {
            id: 'USD',
            name: '美元',
            disabled: true,
            children: [
              {
                id: 'USD-1',
                name: '美元-1',
              },
              {
                id: 'USD-2',
                name: '美元-2',
              },
              {
                id: 'USD-3',
                name: '美元-3',
              },
              {
                id: 'USD-4',
                name: '美元-4',
              },
            ],
          },
          {
            id: 'GBP',
            name: '英镑',
            children: [
              {
                id: 'GBP-1',
                name: '英镑-1',
              },
              {
                id: 'GBP-2',
                name: '英镑-2',
              },
              {
                id: 'GBP-3',
                name: '英镑-3',
              },
              {
                id: 'GBP-4',
                name: '英镑-4',
              },
            ],
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
    methods: {
      filterLabels(ids) {
        const removeIds = ['USD', 'GBP'];
        return ids.filter((id) => !removeIds.includes(id));
      },
    },
  };
</script>
```

:::

### prefix 插槽

:::demo

```html
<template>
  <infinite-select-tags
    v-model="value"
    :options="options"
    :default-checkeds="defaultCheckeds"
    :tags-num="3"
    :filterable="true"
  >
    <span
      slot="prefix-label"
      style="display:inline-block;width:86px;color:#000;"
      >各国币种</span
    >
  </infinite-select-tags>
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        defaultCheckeds: [],
        options: [
          {
            id: 'GBP',
            name: '英镑',
            children: [
              {
                id: 'GBP-1',
                name: '英镑-1',
              },
              {
                id: 'GBP-2',
                name: '英镑-2',
              },
              {
                id: 'GBP-3',
                name: '英镑-3',
              },
              {
                id: 'GBP-4',
                name: '英镑-4',
              },
            ],
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

### 搜索结果为空时的 not-filter-data 插槽使用

:::demo

```html
<template>
  <infinite-select-tags v-model="value" :options="options" :filterable="true">
    <template slot="not-filter-data">
      暂无搜索结果
    </template>
  </infinite-select-tags>
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        options: [
          {
            id: 'GBP',
            name: '英镑',
            children: [
              {
                id: 'GBP-1',
                name: '英镑-1英镑-1英镑-1英镑-1',
              },
              {
                id: 'GBP-2',
                name: '英镑-2',
              },
              {
                id: 'GBP-3',
                name: '英镑-3',
              },
              {
                id: 'GBP-4',
                name: '英镑-4',
              },
            ],
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

### Attributes

| 参数              | 说明                                                            | 类型    | 可选值 | 默认值         |
| ----------------- | --------------------------------------------------------------- | ------- | ------ | -------------- |
| v-model/vModel    | 返回选中的数据 id                                               | Array   | —      | —              |
| options           | 详细参数 `Options Attributes`                                   | Array   | —      | —              |
| defaultCheckeds   | 指定默认被选中的选项 id 数组                                    | Array   | —      | —              |
| tags-num          | 指定 input 内被选中选项的标签显示个数                           | number  | —      | 3              |
| placeholder       | 输入框占位文本                                                  | String  | —      | 请选择         |
| filterable        | 是否开启关键字搜索功能                                          | Boolean | —      | false          |
| clearable         | 搜索框是否开启清除功能                                          | Boolean | —      | false          |
| serachPlaceholder | 开启关键字搜索功能时可以设置`serachPlaceholder`为搜索框占位文本 | String  | —      | 请输入字段名称 |

### Options Attributes

| 参数     | 说明               | 类型    | 可选值 | 默认值 |
| -------- | ------------------ | ------- | ------ | ------ |
| id       | 选项的 id          | String  | —      | 'id'   |
| name     | 选项的值           | String  | —      | 'name' |
| disabled | 指定选项为禁用选项 | Boolean | —      | false  |

### Events

| 参数           | 说明             | 回调参数                    |
| -------------- | ---------------- | --------------------------- |
| makeSure       | 确认选中的值     | —                           |
| allSelect      | 全选复选框的状态 | 选中节点的 isChecked 的状态 |
| checkBoxChange | 节点复选框的状态 | 节点复选框的状态            |

### Select-tag Slot

| 参数            | 说明                   |
| --------------- | ---------------------- |
| prefix-label    | Select 组件头部内容    |
| not-filter-data | 搜索结果为空时的插槽位 |
