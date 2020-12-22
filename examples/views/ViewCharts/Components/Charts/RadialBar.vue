<template>
  <div>
    <div :id="id"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'

export default {
  name: 'RadialBar',
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
        { question: '问题 1', percent: 0.21 },
        { question: '问题 2', percent: 0.4 },
        { question: '问题 3', percent: 0.49 }
      ]
    }
  },
  methods: {
    initComponent () {
      const chart = new Chart({
        container: this.id,
        autoFit: true,
        width: 140,
        height: 162,
        padding: [11, 0]
      })

      chart.data(this.data)

      chart.scale('percent', {
        min: 0,
        max: 0.5
      })

      chart.tooltip({
        title: 'question',
        showMarkers: true
      })

      chart.legend(false)
      chart.axis('question', {
        title: {
          offset: 100
        },
        grid: null,
        tickLine: null,
        line: true,
        label: {
          style: {
            fill: '#f00'
          }
        }
      })

      chart
        .coordinate('polar', { innerRadius: 0.1 })
        .transpose()
        // .rotate(Math.PI * 0.4)

      chart
        .interval()
        .position('question*percent')
        .color('percent', '#BAE7FF-#1890FF-#0050B3')
        .tooltip('percent', (val) => {
          return {
            name: '占比',
            value: val * 100 + '%'
          }
        })
        .label('percent', {
          offset: -2,
          content: (data) => {
            return data.percent * 100 + '%'
          }
        })

      chart.interaction('element-active')

      chart.render()
    }
  }
}
</script>
