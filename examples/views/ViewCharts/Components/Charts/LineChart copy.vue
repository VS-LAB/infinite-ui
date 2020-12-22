<template>
  <div class="line-chart" id="c1"></div>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
  name: 'LineChart',
  props: {
    chartData: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      cData: [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ]
    }
  },
  mounted () {
    const { cData: data } = this
    console.log('====================================');
    console.log(Chart);
    console.log('====================================');
    var chart = new Chart({
      id: 'c1',
      container: 'c1',
      forceFit: true,
      width: 325,
      height: 116,
      data: data,
      options: {
        scales: {
          'genre': {
            alias: '游戏种类'
          },
          'sold': {
            alias: '销售量'
          }
        },
        geoms: [
          {
            type: 'interval',
            position: 'genre*sold',
            color: 'genre'
          }
        ]
      }
    })
    chart.render()
  }
}
</script>

<style>

</style>
