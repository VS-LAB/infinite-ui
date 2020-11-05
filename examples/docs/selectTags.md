## selectTags

### 基础用法

当选项过多时，使用下拉菜单展示并利用 Tag 展示已选项。
:::demo

```html
<template>
  <infinite-select-tags
    :options="options"
 />
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            id:'USD',
            name:'美元'
          },
          {
            id:'GBP',
            name:'英镑'
          },
          {
            id:'RMB',
            name:'人民币'
          },          
          {
            id:'EUR',
            name:'欧元'
          }
        ]
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
    :options="options"
    :tags-num="4"
 />
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            id:'USD',
            name:'美元',
            disabled:true
          },
          {
            id:'GBP',
            name:'英镑',
            disabled:true
          },
          {
            id:'RMB',
            name:'人民币'
          },          
          {
            id:'EUR',
            name:'欧元'
          },
          {
            id:'CAD',
            name:'加元'
          },
          {
            id:'AUD',
            name:'澳大利亚元'
          },
          {
            id:'TAD',
            name:'泰元'
          },
          {
            id:'MUD',
            name:'孟加拉元'
          }
        ]
      };
    },
  };
</script>
```
:::

### 搜索选项

可以搜索选项信息
:::demo

```html
<template>
  <infinite-select-tags
    :options="options"
    :tags-num="4"
    filterable
 />
</template>
<script>
  export default {
    data() {
      return {
        options: [
          {
            id:'USD',
            name:'美元',
            disabled:true
          },
          {
            id:'GBP',
            name:'英镑',
            disabled:true
          },
          {
            id:'RMB',
            name:'人民币'
          },          
          {
            id:'EUR',
            name:'欧元'
          },
          {
            id:'CAD',
            name:'加元'
          },
          {
            id:'AUD',
            name:'澳大利亚元'
          },
          {
            id:'TAD',
            name:'泰元'
          },
          {
            id:'MUD',
            name:'孟加拉元'
          }
        ]
      };
    },
  };
</script>
```
:::

### Attributes

| 参数     | 说明         | 类型    | 可选值                                             | 默认值 |
| -------- | ------------ | ------- | -------------------------------------------------- | ------ |
| options  | 数据          | array  | —                                                   | —      |
| tags-num | tag显示个数    | number | —                                                  | 3     |