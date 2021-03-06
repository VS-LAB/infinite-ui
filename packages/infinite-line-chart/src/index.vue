<template>
  <div :id="id"></div>
</template>

<script>
import mixinChart from 'infinite-ui/packages/mixins/chart'
import { percentFormat, floatIntFormat, uuidv4 } from 'infinite-ui/packages/utils/index'

export default {
  name: 'InfiniteLineChart',
  data () {
    return {
      uuidv4
    }
  },
  mixins: [mixinChart],
  props: {
    // 数据
    data: {
      type: Array,
      default: () => []
    },
    // 坐标轴名称
    axisName: {
      type: Object,
      default: () => {
        return {
          name: 'name',
          value: 'value',
          type: 'type'
        }
      }
    },
    // 坐标轴颜色
    axisColor: {
      type: Object,
      default: () => {
        return {
          lineColor: '#ccc',
          labelColor: '#999'
        }
      }
    },
    // 单颜色
    singleColor: {
      type: String,
      default: '#1890ff'
    },
    // 是否显示图例
    showLegend: {
      type: Boolean,
      default: true
    },
    // 是否显示点
    showPoint: {
      type: Boolean,
      default: true
    },
    // value 数据是否是百分数（整数和百分数）
    isPercent: {
      type: Boolean,
      default: false
    },
    // 是否显示曲线
    isSmooth: {
      type: Boolean,
      default: false
    },
    // 是否显示网格线
    showGrid: {
      type: Boolean,
      default: true
    },
    useTooltip: {
      type: Boolean,
      default: true
    },
    // 内边距
    padding: {
      type: Array,
      default: function () {
        return ['auto', 'auto']
      }
    }
  },
  methods: {
    setChartConfig: function (data) {
      // 为 chart 装载数据
      // this.chart.source(data)
      this.chart.data(data)
      // this.chart.render()

      // 进行列定义
      let _this = this
      let scaleConfig = (function () {
        let obj = {}
        for (const key in _this.axisName) {
          if (_this.axisName.hasOwnProperty(key)) {
            obj[key] = {}
            obj[key]['alias'] = _this.axisName[key]
            if (key === 'value') {
              // 数据格式, 将数据转为百分数或浮点数(保留一位小数), 整数不做处理
              obj[key]['formatter'] = _this.isPercent ? percentFormat : floatIntFormat
            }
          }
        }
        return obj
      }())
      this.chart.scale(scaleConfig)

      // 是否使用tooltip
      if (this.useTooltip) {
        // 配置图表tooltip
        this.chart.tooltip(true, {
          crosshairs: {
            type: 'line'
          }
        })
      } else {
        this.chart.tooltip(false)
      }

      // 配置图表图例
      if (this.showLegend) {
        this.chart.legend('type', {
          position: 'bottom-center'
        })
      } else {
        this.chart.legend('type', false)
      }

      // 坐标轴配置
      this.chart.axis('name', {
        tickLine: false
      })
      this.chart.axis('value', {
        grid: {
          lineStyle: {
            lineDash: null,
            stroke: '#d9d9d9',
            lineWidth: 1
          }
        },
        label: {
          autoRotate: false,
          rotate: 0,
          formatter: (text, item, index) => {
            return text + ''
          }
        },
        tickLine: false
      })

      // 配置折线和散点的颜色、形状等
      let line = this.chart.line().position('name*value')
      let point

      if (this.showPoint) {
        point = this.chart.point().position('name*value').size(4).shape('circle').style({
          stroke: '#fff',
          lineWidth: 1
        })
      }

      // 配置多条折线时的颜色
      if (this.data.length > 0 && this.data[0].hasOwnProperty('type')) {
        line.color('type')
        if (this.showPoint) {
          point.color('type')
        }
      } else {
        line.color(this.singleColor)
        if (this.showPoint) {
          point.color(this.singleColor)
        }
      }

      // 折线是否显示为曲线
      if (this.isSmooth) {
        line.shape('smooth')
      }
    }
  }
}
</script>
