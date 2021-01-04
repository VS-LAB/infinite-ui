<template>
  <div>
    <div :id="id"></div>
  </div>
</template>

<script>
import { Chart, registerShape } from '@antv/g2'
import { WIDTH } from '../CONFIG.js'
export default {
  name: 'BarChart',
  props: {
    id: String,
    height: {
      type: Number,
      default: 116
    }
  },
  mounted () {
    this.initComponent()
  },
  data () {
    return {
      msg: '',
      chart: null,
      data: [
        { genre: 'January', sold: 54 },
        { genre: 'February', sold: 44 },
        { genre: 'March', sold: 34 },
        { genre: 'April', sold: 46 },
        { genre: 'May', sold: 33 },
        { genre: 'June', sold: 44 },
        { genre: 'July', sold: 70 },
        { genre: 'August', sold: 24 },
        { genre: 'September', sold: 44 },
        { genre: 'October', sold: 36 },
        { genre: 'November', sold: 54 },
        { genre: 'December', sold: 62 }
      ]
    }
  },
  methods: {
    /**
     * @description 获取最大的实现宽度，最大宽度为1200，超出1200的宽度，不变
    */
    getWidth () {
      const width = document.documentElement.clientWidth
      return width > WIDTH ? WIDTH : width
    },
    initComponent (tag) {
      const width = this.getWidth()
      const padding = [(40 * width / WIDTH), (16 * width / WIDTH)]
      const size = 8 * 2 * width / WIDTH
      // 自定义 shape, 支持图片形式的气泡
      registerShape('interval', 'borderRadius', {
        draw: function draw (cfg, container) {
          var points = cfg.points
          var path = []
          path.push(['M', points[0].x, points[0].y])
          path.push(['L', points[1].x, points[1].y])
          path.push(['L', points[2].x, points[2].y])
          path.push(['L', points[3].x, points[3].y])
          path.push('Z')
          path = this.parsePath(path) // 将 0 - 1 转化为画布坐标
          return container.addShape('rect', {
            attrs: {
              x: path[1][1], // 矩形起始点为左上角
              y: path[1][2],
              width: path[2][1] - path[1][1],
              height: path[0][2] - path[1][2],
              fill: cfg.color,
              radius: (path[2][1] - path[1][1]) / 2
            }
          })
        }
      })

      const chart = new Chart({
        container: this.id,
        height: this.height,
        autoFit: true,
        padding
        // padding: [24, 16]
      })
      chart.data(this.data, {
        genre: {
          alias: '游戏种类'
        },
        sold: {
          alias: '销售量'
        }
      })
      chart
        .interval()
        .size(size)
        .position('genre*sold')
        .shape('borderRadius')
        .color('l(90) 0:#FFA874 1:#FF7979')
      chart.axis(false)
      chart.legend(false)
      this.chart = chart
      tag && this.chart.render()
    },
    render () {
      if (this.chart) {
        if (this.chart.destroyed) {
          this.initComponent(true)
        } else {
          this.chart.render()
        }
      }
    },
    destroy () {
      this.showToolTips = false
      this.chart && this.chart.destroy()
    }
  }
}
</script>
