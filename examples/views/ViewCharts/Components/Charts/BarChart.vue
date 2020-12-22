<template>
  <div>
    <div :id="id"></div>
  </div>
</template>

<script>
import { Chart, registerShape } from '@antv/g2'
export default {
  name: 'BarChart',
  props: {
    id: String
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
    initComponent () {
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
        width: 325,
        height: 116,
        smooth: true,
        padding: [24, 16]
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
        .size(8)
        .position('genre*sold')
        .shape('borderRadius')
        .color('l(179) 0:#FFA874 1:#FF7979')
      chart.axis(false)
      chart.legend(false)
      this.chart = chart
      this.chart.render()
    }
  }
}
</script>
