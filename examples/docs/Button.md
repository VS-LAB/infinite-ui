## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<el-row>
  <infinite-button>默认按钮</infinite-button>
  <infinite-button type="primary" @click="handleClick"
    >主要按钮</infinite-button
  >
  <infinite-button type="success">成功按钮</infinite-button>
  <infinite-button type="info">信息按钮</infinite-button>
  <infinite-button type="warning">警告按钮</infinite-button>
  <infinite-button type="danger">危险按钮</infinite-button>
</el-row>
<el-row>
  <infinite-button plain>朴素按钮</infinite-button>
  <infinite-button type="primary" plain>主要按钮</infinite-button>
  <infinite-button type="success" plain>成功按钮</infinite-button>
  <infinite-button type="info" plain>信息按钮</infinite-button>
  <infinite-button type="warning" plain>警告按钮</infinite-button>
  <infinite-button type="danger" plain>危险按钮</infinite-button>
</el-row>
<el-row>
  <infinite-button round>圆角按钮</infinite-button>
  <infinite-button type="primary" round>主要按钮</infinite-button>
  <infinite-button type="success" round>成功按钮</infinite-button>
  <infinite-button type="info" round>信息按钮</infinite-button>
  <infinite-button type="warning" round>警告按钮</infinite-button>
  <infinite-button type="danger" round>危险按钮</infinite-button>
</el-row>
<el-row>
  <infinite-button icon="el-icon-search" circle></infinite-button>
  <infinite-button type="primary" icon="el-icon-edit" circle></infinite-button>
  <infinite-button type="success" icon="el-icon-check" circle></infinite-button>
  <infinite-button type="info" icon="el-icon-message" circle></infinite-button>
  <infinite-button
    type="warning"
    icon="el-icon-star-off"
    circle
  ></infinite-button>
  <infinite-button type="danger" icon="el-icon-delete" circle></infinite-button>
</el-row>
<script>
  export default {
    methods: {
      handleClick(val) {
        console.log(val, 'clicked the button');
      },
    },
  };
</script>
```

:::

### 禁用状态

按钮不可用状态。
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<el-row>
  <infinite-button>默认按钮</infinite-button>
  <infinite-button type="primary" disabled>主要按钮</infinite-button>
  <infinite-button type="success" disabled>成功按钮</infinite-button>
  <infinite-button type="info" disabled>信息按钮</infinite-button>
  <infinite-button type="warning" disabled>警告按钮</infinite-button>
  <infinite-button type="danger" disabled>危险按钮</infinite-button>
</el-row>
<el-row>
  <infinite-button plain disabled>朴素按钮</infinite-button>
  <infinite-button type="primary" plain disabled>主要按钮</infinite-button>
  <infinite-button type="success" plain disabled>成功按钮</infinite-button>
  <infinite-button type="info" plain disabled>信息按钮</infinite-button>
  <infinite-button type="warning" plain disabled>警告按钮</infinite-button>
  <infinite-button type="danger" plain disabled>危险按钮</infinite-button>
</el-row>
```

:::

### 文字按钮

没有边框和背景色的按钮。
:::demo

```html
<el-row>
  <infinite-button type="text">文字按钮</infinite-button>
  <infinite-button type="text" disabled>文字按钮</infinite-button>
</el-row>
```

:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<el-row>
  <infinite-button>默认按钮</infinite-button>
  <infinite-button size="medium">中等按钮</infinite-button>
  <infinite-button size="small">小型按钮</infinite-button>
  <infinite-button size="mini">超小按钮</infinite-button>
</el-row>
<el-row>
  <infinite-button round>默认按钮</infinite-button>
  <infinite-button size="medium" round>中等按钮</infinite-button>
  <infinite-button size="small" round>小型按钮</infinite-button>
  <infinite-button size="mini" round>超小按钮</infinite-button>
</el-row>
```

:::

### Attributes

| 参数     | 说明         | 类型    | 可选值                                             | 默认值 |
| -------- | ------------ | ------- | -------------------------------------------------- | ------ |
| size     | 尺寸         | string  | medium / small / mini                              | —      |
| type     | 类型         | string  | primary / success / warning / danger / info / text | —      |
| plain    | 是否朴素按钮 | boolean | —                                                  | false  |
| round    | 是否圆角按钮 | boolean | —                                                  | false  |
| disabled | 是否禁用状态 | boolean | —                                                  | false  |
| icon     | 图标类名     | string  | —                                                  | —      |
