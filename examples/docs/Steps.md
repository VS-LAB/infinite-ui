## Steps

### 基础用法

Steps 用法。
:::demo

```html
<template>
  <infinite-steps :active="active" finish-status="success">
    <infinite-step title="步骤1">1</infinite-step>
    <infinite-step title="步骤2">2</infinite-step>
    <infinite-step title="步骤3">3</infinite-step>
  </infinite-steps>
  <infinite-button @click="handleNextStatus"> 下一步 </infinite-button>
</template>
<script>
  export default {
    data() {
      return { 
        active: 1
      }
    },
    methods: {
      handleNextStatus(){
        if(this.active++ > 2){
          this.active = 0
        }
      }
    },
  };
</script>
```
:::


### 扩展用法

子项带上描述。
:::demo

```html
<template>
  <infinite-steps :active="active" finish-status="success">
    <infinite-step title="步骤1" description="这是一段很长很长很长的描述性文字">1</infinite-step>
    <infinite-step title="步骤1" description="这是一段很长很长很长的描述性文字">2</infinite-step>
    <infinite-step title="步骤1" description="这是一段很长很长很长的描述性文字">3</infinite-step>
  </infinite-steps>
  <infinite-button @click="handleNextStatus"> 下一步 </infinite-button>
</template>
<script>
  export default {
    data() {
      return { 
        active: 1
      }
    },
    methods: {
      handleNextStatus(){
        if(this.active++ > 2){
          this.active = 0
        }
      }
    },
  };
</script>
```
:::

### Attributes

| 参数    | 说明                                                                                    | 类型   | 可选值 | 默认值 |
| ------- | --------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| title   | 标题 | string | —      | —      |
| description | 描述性文字                                                          | string  | —      | —      |
| icon   | 图标                                                          | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入  | —      | —      |
| finishStatus | 设置当前步骤的状态，不设置则根据 steps 确定状态                                                       | wait / process / finish / error / success  | —      | finish      |

