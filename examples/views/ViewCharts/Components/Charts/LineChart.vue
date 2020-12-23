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
    },
    showType: {
      type: String,
      default: 'small'
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
        { genre: '1th', sold: 37 },
        { genre: '2th', sold: 30 },
        { genre: '3th', sold: 20 },
        { genre: '4th', sold: 20 },
        { genre: '5th', sold: 29 },
        { genre: '6th', sold: 39 },
        { genre: '7th', sold: 46 },
        { genre: '8th', sold: 48 },
        { genre: '9th', sold: 46 },
        { genre: '10th', sold: 41 },
        { genre: '11th', sold: 41 },
        { genre: '12th', sold: 45 },
        { genre: '13th', sold: 52 },
        { genre: '14th', sold: 55 },
        { genre: '15th', sold: 48 },
        { genre: '16th', sold: 31 },
        { genre: '17th', sold: 22 },
        { genre: '18th', sold: 27 },
        { genre: '19th', sold: 46 },
        { genre: '20th', sold: 44 },
        { genre: '21th', sold: 49 }
      ],
      data2: [
        { genre: '0', sold: 67 },
        { genre: '1日', sold: 93 },
        { genre: '4日', sold: 116 },
        { genre: '7日', sold: 97 },
        { genre: '10日', sold: 61 },
        { genre: '13日', sold: 78 },
        { genre: '16日', sold: 77 },
        { genre: '19日', sold: 48 },
        { genre: '22日', sold: 28 },
        { genre: '25日', sold: 28 },
        { genre: '28日', sold: 44 },
        { genre: '31日', sold: 66 }
      ]
    }
  },
  computed: {
    showData () {
      const { showType } = this
      if (showType === 'large') {
        return this.data2
      }
      return this.data
    },
    colorLine () {
      const { showType } = this
      if (showType === 'large') {
        return 'l(0) 0:#FFA874 1:#FF7979'
      }
      return 'l(179) 0:#EF7EF8 1:#9835C3'
    },
    colorArea () {
      const { showType } = this
      if (showType === 'large') {
        return 'l(270) 0:#fff 1:#FF7979'
      }
      return 'l(0) 0:#B151E0  1:#fff'
    },
    width () {
      return document.documentElement.clientWidth
    },
    padding () {
      const { showType } = this
      if (showType === 'large') {
        return [40, 40, 40, 50]
      }
      return [0]
    },
    slodScale () {
      const { showType } = this
      if (showType === 'large') {
        return {
          min: 0,
          nice: true,
          max: 130
        }
      }
      return {
        min: 0,
        nice: true,
        max: 70
      }
    }
  },
  methods: {
    initComponent2 () {
      const chart = new Chart({
        container: this.id,
        autoFit: true,
        height: this.height,
        padding: this.padding
      })

      chart.data(this.showData)
      chart.scale({
        sold: this.slodScale,
        genre: {
          range: [0, 1]
        }
      })
      chart.tooltip({
        showCrosshairs: true,
        shared: false
      })
      const { showType } = this
      if (showType !== 'large') {
        chart.axis(false)
      }
      //       chart.axis('value', {
      //   label: {
      //     formatter: (val) => {
      //       return (+val / 10000).toFixed(1) + 'k';
      //     },
      //   },
      // });

      chart.area().position('genre*sold').shape('smooth').color(this.colorArea)
      chart.line().position('genre*sold').shape('smooth').color(this.colorLine)
      this.chart = chart

      // chart.render()
    },
    render () {
      this.chart.render()
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
