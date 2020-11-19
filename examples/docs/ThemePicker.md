## ThemePicker

### 基础用法

基础的按钮用法。
:::demo

```html
<el-row>
  <infinite-themePicker v-model="theme">ThemePicker</infinite-themePicker>
</el-row>
<script>
  export default {
    data() {
      return {
        theme: '#FF7635',
      };
    },
  };
</script>
```

:::

### Attributes

| 参数    | 说明   | 类型   | 可选值                | 默认值  |
| ------- | ------ | ------ | --------------------- | ------- |
| v-model | 绑定值 | string | —                     | #FF7635 |
| size    | 尺寸   | string | medium / small / mini | small   |

### Events

| 事件名称     | 说明                               | 回调参数         |
| ------------ | ---------------------------------- | ---------------- |
| change       | 当绑定值变化时触发                 | 当前值           |
| activeChange | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |
