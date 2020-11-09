## LineChart

### 基础用法

趋势图用法。
:::demo

```html
<template>
  <infinite-line-chart
    style="height: 300px; width: 800px; margin: 0 auto;"
    :is-smooth="true"
    :axis-name="axisName"
    :data="data"
  >
  </infinite-line-chart>
</template>
<script>
  export default {
    data() {
      return {
        data: [
          { name: '1997', value: 86085, type: 'America' },
          { name: '2007', value: 144776, type: 'America' },
          { name: '2017', value: 193868, type: 'America' },
          { name: '1997', value: 9616, type: 'China' },
          { name: '2007', value: 35715, type: 'China' },
          { name: '2017', value: 122503, type: 'China' },
          { name: '1997', value: 44122, type: 'Japan' },
          { name: '2007', value: 45153, type: 'Japan' },
          { name: '2017', value: 48675, type: 'Japan' },
          { name: '1997', value: 22159, type: 'Germany' },
          { name: '2007', value: 34447, type: 'Germany' },
          { name: '2017', value: 36865, type: 'Germany' },
        ],
        axisName: {
          name: '年份',
          value: 'GDP(亿美元)',
          type: '国家',
        },
      };
    },
  };
</script>
```

:::

### Attributes

| 参数         | 说明                                     | 类型    | 可选值 | 默认值                                    |
| ------------ | ---------------------------------------- | ------- | ------ | ----------------------------------------- |
| data         | 渲染数据                                 | Array   | —      | —                                         |
| axis-name    | 坐标轴名称                               | Object  | —      | —                                         |
| axis-color   | 坐标轴颜色                               | Object  | —      | `{ lineColor: '#ccc',labelColor: '#999'}` |
| single-color | 单颜色                                   | String  | —      | '#1890ff'                                 |
| show-legend  | 是否显示图例                             | Boolean | —      | true                                      |
| show-point   | showPoint                                | Boolean | —      | true                                      |
| is-percent   | `value` 数据是否是百分数（整数和百分数） | Boolean | —      | false                                     |
| is-smooth    | 是否显示曲线                             | Boolean | —      | false                                     |
| show-grid    | 是否显示网格线                           | Boolean | —      | true                                      |
| use-tooltip  | 是否显示提示                             | Boolean | —      | true                                      |
| padding      | 内边距                                   | Array   | —      | `['auto', 'auto']`                        |
