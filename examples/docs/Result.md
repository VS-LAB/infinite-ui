## Result 结果

用于反馈一系列操作任务的处理结果。

### 成功用法

成功结果用法。
:::demo 成功的结果。

```html
<template>
  <infinite-result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  >
    <infinite-button type="primary">go console</infinite-button>
    <infinite-button>by infinite</infinite-button>
  </infinite-result>
</template>
```

:::

### 处理用法

处理结果用法。
:::demo 展示处理结果。。

```html
<template>
  <infinite-result title="Your operation has been executed">
    <infinite-button type="primary">go console</infinite-button>
  </infinite-result>
</template>
```

:::

### 警告类型用法

警告类型结果用法。
:::demo 展示警告类型结果。。

```html
<template>
  <infinite-result
    status="warning"
    title="There are some problems with your operation."
  >
    <infinite-button type="primary">go console</infinite-button>
  </infinite-result>
</template>
```

:::

### 错误用法

错误结果用法。
:::demo 展示错误结果。。

```html
<template>
  <infinite-result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
  >
    <infinite-button type="primary">go console</infinite-button>
  </infinite-result>
</template>
```

:::

### 自定义 icon 用法

自定义 icon 用法。
:::demo 展示自定义 icon 结果。。

```html
<template>
  <infinite-result title="awatting">
    <template slot="icon">
      <i class="el-icon-loading"></i>
    </template>
    <infinite-button disabled>await</infinite-button>
  </infinite-result>
</template>
```

:::

### Attributes

| 参数     | 说明                       | 类型   | 可选值                           | 默认值 |
| -------- | -------------------------- | ------ | -------------------------------- | ------ |
| status   | 结果的状态，决定图标和颜色 | String | success / error / info / warning | info   |
| title    | title 文字                 | String | —                                | —      |
| subTitle | subTitle 文字              | String | —                                | —      |

### Slots

| name    | 说明                                               |
| ------- | -------------------------------------------------- |
| default | 默认插槽                                           |
| icon    | 自定义 icon 插槽，当该插槽存在时，`status`属性失效 |
