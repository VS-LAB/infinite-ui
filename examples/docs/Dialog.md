## Dialog

### 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。
:::demo 需要设置 v-model 属性，它接收 Boolean，当为 true 时显示 Dialog。Dialog 分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。title 属性用于定义标题，它是可选的，默认值为空。

```html
<template>
  <infinite-button type="text" @click="visible = true">
    点击打开 Dialog
  </infinite-button>
  <infinite-dialog v-model="visible" title="提示" width="30%">
    <span>
      这是一段信息
    </span>
    <span slot="footer" class="dialog-footer">
      <infinite-button @click="visible = false">取 消</infinite-button>
      <infinite-button type="primary" @click="visible = false"
        >确 定</infinite-button
      >
    </span>
  </infinite-dialog>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
  };
</script>
```

:::

### 嵌套的 Dialog

如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。
:::demo 正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了 append-to-body 属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。

```html
<template>
  <infinite-button type="text" @click="visible = true">
    点击打开外层 Dialog
  </infinite-button>
  <infinite-dialog v-model="visible">
    <infinite-dialog
      width="30%"
      title="内层 Dialog"
      v-model="innerVisible"
      :append-to-body="true"
      @confirm="innerVisible=false"
    >
    </infinite-dialog>
    <div slot="footer" class="dialog-footer">
      <infinite-button @click="visible = false">取 消</infinite-button>
      <infinite-button type="primary" @click="innerVisible = true"
        >打开内层 Dialog</infinite-button
      >
    </div>
  </infinite-dialog>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        innerVisible: false,
      };
    },
  };
</script>
```

:::

### 嵌套的表格

Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 infinite Table 的样例。
:::demo。

```html
<template>
  <infinite-button type="text" @click="visible = true">
    点击打开外层 Dialog
  </infinite-button>
  <infinite-dialog
    v-model="visible"
    :needFooter="false"
    width="620px"
    :container-height="500"
    title="收货地址"
  >
    <infinite-table
      ref="tableRef"
      :data="tableData"
      :header="tableHeader"
      :needAutoHeight="true"
    >
    </infinite-table>
  </infinite-dialog>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'address',
            label: '地址',
          },
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1520 弄',
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1514 弄',
          },
        ],
      };
    },
  };
</script>
```

:::

### Attributes

| 参数                  | 说明                                                                         | 类型                                 | 可选值 | 默认值                                                                                    |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------ | ------ | ----------------------------------------------------------------------------------------- |
| v-model               | 是否显示 Dialog                                                              | Boolean                              | —      | false                                                                                     |
| width                 | Dialog 的宽度                                                                | String                               | —      | 50%                                                                                       |
| top                   | Dialog CSS 中的 margin-top 值                                                | String                               | —      | 15vh                                                                                      |
| modal-append-to-body  | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | Boolean                              | —      | true                                                                                      |
| append-to-body        | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | Boolean                              | —      | false                                                                                     |
| custom-class          | Dialog 的自定义类名                                                          | String                               | —      | —                                                                                         |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog                                           | Boolean                              | —      | true                                                                                      |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog                                             | Boolean                              | —      | true                                                                                      |
| show-close            | 是否显示关闭按钮                                                             | Boolean                              | —      | true                                                                                      |
| before-close          | 关闭前的回调，会暂停 Dialog 的关闭                                           | Function(done)，done 用于关闭 Dialog | —      | —                                                                                         |
| center                | 是否对头部和底部采用居中布局                                                 | Boolean                              | —      | false                                                                                     |
| destroy-on-close      | 关闭时销毁 Dialog 中的元素                                                   | Boolean                              | —      | false                                                                                     |
| need-footer           | 是否需要底部元素                                                             | Boolean                              | —      | true                                                                                      |
| container-height      | 弹窗内容高度                                                                 | String                               | —      | —                                                                                         |
| operations            | 底部按钮数据                                                                 | Array                                | —      | `[{label: '取消',click: this.close},{label: '确定',type: 'primary',click: this.confirm}]` |
| containerHeight       | 内容区域高度，单位`px`                                                       | Number                               | —      | —                                                                                         |

### Slot

| name   | 说明                    |
| ------ | ----------------------- |
| —      | Dialog 的内容           |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

### Events

| 事件名称    | 说明                          | 回调参数 |
| ----------- | ----------------------------- | -------- |
| open        | Dialog 打开的回调             | —        |
| opened      | Dialog 打开动画结束时的回调   | —        |
| close       | Dialog 关闭的回调             | —        |
| closed      | Dialog 关闭动画结束时的回调   | —        |
| beforeClose | Dialog 关闭之前的回调         | —        |
| confirm     | Dialog 默认确定按钮点击的回调 | —        |
