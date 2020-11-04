## selectTags

### 基础用法

下拉标签用法。
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


