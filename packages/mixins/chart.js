
let chart = null
if (process.env.NODE_ENV === 'lib') {
  const { Chart, registerEngine, registerGeometry, registerComponentController } = require('@antv/g2/lib/core')
  chart = Chart
  const Line = require('@antv/g2/lib/geometry/line')
  const Point = require('@antv/g2/lib/geometry/point')
  const Interval = require('@antv/g2/lib/geometry/interval')
  const Axis = require('@antv/g2/lib/controller/axis')
  const Tooltip = require('@antv/g2/lib/controller/tooltip')
  const Legend = require('@antv/g2/lib/controller/legend')
  const Coordinate = require('@antv/coord/lib/factory')
  const G = require('@antv/g-canvas')

  // 按需注入
  registerEngine('canvas', G)

  registerGeometry('line', Line)
  registerGeometry('point', Point)
  registerGeometry('interval', Interval)

  registerComponentController('axis', Axis)
  registerComponentController('tooltip', Tooltip)
  registerComponentController('legend', Legend)
  registerComponentController('coordinate', Coordinate)
} else {
  const G2 = require('@antv/g2')
  chart = G2.Chart
}

export default {
  computed: {
    id: function () {
      return this.uuidv4()
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    // 监控data，当发生变化时，重新绘制图表
    data: function (val, oldVal) {
      this.drawChart(val)
    }
  },
  methods: {
    // 构造图表实例
    constructChart () {
      // 销毁实例
      if (this.chart) {
        this.chart.destroy()
      }
      // const dom = document.getElementById(this.id)
      const dom = this.$el
      // console.log(dom)
      // console.log(this.$el)
      if (dom && dom.innerHTML) {
        dom.innerHTML = ''
      }
      return new chart({
        container: this.id,
        width: dom.offsetWidth || 800,
        height: dom.offsetHeight || 500,
        // padding: this.padding || ['auto', 'auto'],
        renderer: 'canvas'
      })
    },
    drawChart (data) {
      // 新建实例
      this.chart = this.constructChart()

      // 配置图表
      this.setChartConfig(data)

      // 绘制
      this.chart.render()
      const e = document.createEvent('Event')
      e.initEvent('resize', true, true)
      window.dispatchEvent(e)

      let _this = this
      // 销毁实例
      this.$once('hook:beforeDestroy', function () {
        _this.chart.destroy()
      })
    }
  },
  mounted () {
    this.data && this.data.length && this.drawChart(this.data)
  }
}
