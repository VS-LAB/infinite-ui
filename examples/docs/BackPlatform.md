## BackPlatform 拖拽容器

常用的操作。

### 基础用法

基础的拖拽操作。
:::demo 在main.js中加载组件并执行Vue.prototype.$InfiniteBackPlatform = InfiniteBackPlatform使用，若是局部引入，则加载组件后直接使用InfiniteBackPlatform

```html
<el-row>
  <infinite-button type="primary" @click="open">点击生成返回平台</infinite-button>
  <infinite-button type="primary" @click="open({dragDirection: 'horizontal'})">点击生成水平拖拽的返回平台</infinite-button>
</el-row>
<el-row>
  <infinite-button type="primary" @click="close">点击关闭返回平台</infinite-button>
  <infinite-button type="primary" @click="remove">点击移除返回平台</infinite-button>
</el-row>
<script>
  export default {
    data() {
      return {
        el: null,
      };
    },
    methods: {
      open(option = {}) {
        if(option.dragDirection) {
          this.$InfiniteBackPlatform.remove()
        }
        this.$InfiniteBackPlatform({
          platform: (h) => {
            return h('div', {}, [
              h('span', null, '内容必须是 '),
              h('i', { style: 'color: teal' }, 'VNode')
            ])
          },
          style: {
            right: '20px',
            bottom: '20px'
          },
          dragDirection: option.dragDirection || 'normal',
          click: action => {
            
          }  
        })
      },
      close() {
        this.$InfiniteBackPlatform.close()
      },
      remove() {
        this.$InfiniteBackPlatform.remove()
      },
    },
  };
</script>
```

:::

### Attribute

| 参数   | 说明     | 参数           |
| ------ | -------- | -------------- |
| platform  | 拖拽的节点 | vNode / 含闭合标签的string     |
| style  | 拖拽的起点样式 | {right: 0, bottom: 0}         |
| click  | 点击事件为click | click      |
| dragDirection  | 可拖拽方向 | normal / horizontal / vertical   |
### Function

| 参数   | 说明     | 参数           |
| ------ | -------- | -------------- |
| creat  | 创建/显示节点 | Option         |
| close  | 隐藏节点 |  |
| remove | 移除节点 |  |
