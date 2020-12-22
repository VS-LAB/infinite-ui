<template>
  <div>
    <div :id="id"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
export default {
  name: 'LineChart',
  props: {
    id: String,
    height: {
      type: Number,
      default: 116
    }
  },
  mounted () {
    this.initComponent2()
  },
  data () {
    return {
      msg: '',
      chart: null,
      data: [
        { genre: 'January', sold: 100 },
        { genre: 'February', sold: 80 },
        { genre: 'March', sold: 101 },
        { genre: 'April', sold: 114 },
        { genre: 'May', sold: 108 },
        { genre: 'June', sold: 105 },
        { genre: 'July', sold: 115 },
        { genre: 'August', sold: 120 },
        { genre: 'September', sold: 80 },
        { genre: 'October', sold: 85 },
        { genre: 'November', sold: 110 },
        { genre: 'December', sold: 115 }
      ]
    }
  },
  methods: {
    initComponent2 () {
      const chart = new Chart({
        container: this.id,
        autoFit: true,
        height: this.height
      })

      chart.data(this.data,{

      })
      chart.scale({
        sold: {
          min: 50,
          nice: true,
          max: 150
        },
        genre: {
          range: [0, 1]
        }
      })
      chart.tooltip({
        showCrosshairs: true,
        shared: false
      })
      chart.axis(false)

      chart.area().position('genre*sold').shape('smooth').color('l(0) 0:#B151E0  1:#fff')
      chart.line().position('genre*sold').shape('smooth').color('l(179) 0:#EF7EF8 1:#9835C3 ')

      chart.render()
    },
    initComponent () {
      const chart = new Chart({
        container: this.id,
        // width: 325,
        height: this.height,
        smooth: true,
        autoFit: true,
        padding: [24, 0],
        margin: [-10],
        forceFit: true
      })
      chart.data(this.data, {
        genre: {
          alias: '游戏种类'
        },
        sold: {
          alias: '销售量'
        }
      })
      chart.scale({
        sold: {
          min: 0,
          nice: true
        }
      })
      chart
        .area({
          startOnZero: false
        })
        .position('genre*sold')
        .shape('smooth')
        .color('l(179) 0:#FFA874 1:#FF7979')
      chart
        .line()
        .size(2)
        .position('genre')
        .color('l(179) 0:#EF7EF8  1:#9835C3')
      chart.axis(false)
      chart.legend(false)
      this.chart = chart
      this.chart.render()
    }
  }
}
</script>
