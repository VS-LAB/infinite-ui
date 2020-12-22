import { Chart, registerAnimation, registerInteraction, registerEngine } from '@antv/g2'
import Line from '@antv/g2/lib/geometry/line'

class Charts {
  static defaultConfig = {
    width: 400,
    height: 300,
    data: [],
    forceFit: true,
    xField: 'Date', // X轴坐标轴
    yField: 'scales', // Y轴坐标轴
    smooth: true
  }
  chartTypes = ['Line', 'Bar', 'RadialBar']
  constructor (dom, config) {
    const { defaultConfig } = this
    const Option = Object.assign(defaultConfig.session, config)
    this.Option = Option
    this.container = dom
    const { type, forceFit, width, height } = Option
    this.type = type
    this.chart = new Chart({
      id: dom,
      forceFit,
      width,
      height
    })
  }
  render () {
    return this.chart.render
  }
  renderChart () {
    const { type, chartTypes } = this
    if (chartTypes.includes(type)) {
      switch (type) {
        case 'Line':
        default:
          this.renderLine()
          break
      }
    }
  }
  renderLine() {
    // 配置坐标相关信息
    const { xField, yField } = this.Option
    this.chart.line().position('year').color('type').size(1).shape('smooth')
  }
  renderSmooth () {
    const { smooth } = this.Option
    if (smooth) {
      return this.chart.shape('smooth')
    } else {
      return this.chart.shape()
    }
  }
}

export { Charts }
