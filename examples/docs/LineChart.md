## LineChart

### 基础用法

趋势图用法。
:::demo

```html
<template>
  <infinite-line-chart
    :chart-cfg="chartCfg"
    :is-smooth="true"
    :color="color"
    :point-cfg="pointCfg"
    :axis-config="axisConfig"
    :data="data"
    :show-point="showPoint"
    :tooltipCfg="tooltipCfg"
    :useTooltip="useTooltip"
    :showLegend="showLegend"
    :legendConfig="legendConfig"
  >
  </infinite-line-chart>
</template>
<script>
  export default {
    data() {
      return {
        chartCfg: {
          // padding: [42, 20, 80, 70]
        },
        data: [
          { name: '1997', value: 860, type: 'America' },
          { name: '2007', value: 144, type: 'America' },
          { name: '2017', value: 193, type: 'America' },
          { name: '1997', value: 961, type: 'China' },
          { name: '2007', value: 357, type: 'China' },
          { name: '2017', value: 122, type: 'China' },
          { name: '1997', value: 441, type: 'Japan' },
          { name: '2007', value: 451, type: 'Japan' },
          { name: '2017', value: 486, type: 'Japan' },
          { name: '1997', value: 221, type: 'Germany' },
          { name: '2007', value: 344, type: 'Germany' },
          { name: '2017', value: 368, type: 'Germany' },
        ],
        color: {
          //映射的数据值
          key: 'type', 
          value: ['red','green','blue','yellow']
        },
        axisConfig: {
          x: {
            key: 'name',
            cfg: {
              title:{
                style: {
                  fill: 'blue',
                  fontSize: 12,
                },
              }
            },
            scaleCfg: {
              alias: '年份',
            },
          },
          y: {
            key: 'value',
            scaleCfg: {
              alias: '销售量',
              min: 0,
              nice: true,
              tickCount: 6,
              formatter: (v,i) => {
                return '-' + v + '-'
              }
            },
            cfg: {
              // subTickCount: 20,
              // subTickLine: {
              //   length: 2,
              //   stroke: 'red',
              //   lineWidth: 1
              // },
              tickLine: {
                length: 2,
                lineWidth: 2,
                stroke: '#000'
              },
              title:{
                style: {
                  fill: 'red',
                },
              },
              line: {
                // lineWidth: 1, // 设置线的宽度
                stroke: '#d9d9d9', // 设置线的颜色
                lineDash: [1, 1]// 设置虚线
              },
              grid: {
                line: {
                  stroke: '#d9d9d9',
                  lineWidth: 1,
                  lineDash: [4, 4]
                }
              },
              label: {
                offset: 10,
                autoRotate: false,
                rotate: 0,
                formatter: (text, item, index) => {
                  return text + ''
                }
              }
            }
          }
        },
        //点图配置
        showPoint: true,
        pointCfg: {
          style: {
          stroke: 'red',
          lineWidth: 1
          }
        },
        useTooltip: true,
        showLegend: true,
        // tooltip配置
        tooltipCfg: {
          position: 'left',
          showCrosshairs: true,
          crosshairs: {
            type: 'x',
            line: {
              fill: 'rgba(255,255,255,0.5)'
            }
          },
        },
        // 图例配置
        legendConfig: {
          marker: {
            style: {
              opacity: 0.8
            },
            symbol: 'circle', // square
            spacing: 4, // 彼此之间空间
          },
          offsetX: 0, // x轴偏移
          position: 'bottom', // 设置图例的显示位置"top" | "top-left" | "top-right" | "right" | "right-top" | "right-bottom" | "left" | "left-top" | "left-bottom" | "bottom" | "bottom-left" | "bottom-right"
          spacingX: 200, // 图例项之间的水平间距
          // items: [ // legend单独配置
          //   {
          //     name: 'America',
          //     marker: {
          //       symbol: 'circle',
          //       style: {fill: 'red', r: 5},
          //     },
          //   },
          //   {
          //     name: 'China',
          //     marker: {symbol: 'circle', style: {fill: 'green', r: 5}},
          //   },
          //   {
          //     name: 'Japan',
          //     marker: {symbol: 'circle', style: {fill: 'blue', r: 5}},
          //   },
          //   {
          //     name: 'Germany',
          //     marker: {symbol: 'circle', style: {fill: 'yellow', r: 5}},
          //   },
          // ],
          // selected: { // 默认选中与否
          //   'Germany': false
          // },
        }
      };
    },
  };
</script>
```

:::

### Attributes

| 参数                    | 说明                                                   | 类型    | 可选值                                                                               | 默认值                         |
| ----------------------- | ------------------------------------------------------ | ------- | ------------------------------------------------------------------------------------ | ------------------------------ |
| chart-cfg                | Chart 图表对象                                         | Object  | `{ container: this.id,width: dom.offsetWidth || 800,height: dom.innerHeight || 500}` | —                              |
| data                    | 渲染数据                                               | Array   | —                                                                                    | —                              |
| axis-config              | xaxis yaxis scaleconfig-对应x轴y轴配置和对应的度量配置 | Object  | `{ x: { key: 'name', cfg: {} },y: { key: 'value', cfg: {} } }`—                      | —                              |
| color                   | 坐标轴颜色                                             | Object  | —                                                                                    | `{ key: 'type',value: '#999'}` |
| show-legend             | 是否显示图例                                           | Boolean | —                                                                                    | true                           |
| legend-config            | 对 field 字段对应的图例进行配置。                      | Object  | —                                                                                    | true                           |
| show-point              | 是否需要点图                                           | Boolean | —                                                                                    | true                           |
| point-cfg                | 点图配置                                               | Object  | —                                                                                    | {}                             |
| is-smooth               | 是否显示曲线                                           | Boolean | —                                                                                    | false                          |
| show-grid               | 是否显示网格线                                         | Boolean | —                                                                                    | true                           |
| use-tooltip             | 是否显示提示                                           | Boolean | —                                                                                    | true                           |
| tooltip-cfg              | tooltip配置                                            | Object  | —                                                                                    | `{}`                           |
| removeInteractionOption | 移除包括点击legend筛选数据在内的交互                   | Array   | `legend-filter`                                                                      | []                             |
