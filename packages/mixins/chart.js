import { Chart, registerEngine, registerGeometry, registerComponentController } from '@antv/g2/lib/core'
import Line from '@antv/g2/lib/geometry/line'
import Point from '@antv/g2/lib/geometry/point'
import Interval from '@antv/g2/lib/geometry/interval'
import Axis from '@antv/g2/lib/chart/controller/axis'
import Tooltip from '@antv/g2/lib/chart/controller/tooltip'
import Legend from '@antv/g2/lib/chart/controller/legend'
import Coordinate from '@antv/coord/lib/factory'
import * as G from '@antv/g-canvas'
import { uuidv4 } from 'infinite-ui/packages/utils/index'

// 按需注入
registerEngine('canvas', G)

registerGeometry('line', Line)
registerGeometry('point', Point)
registerGeometry('interval', Interval)

registerComponentController('axis', Axis)
registerComponentController('tooltip', Tooltip)
registerComponentController('legend', Legend)
registerComponentController('coordinate', Coordinate)

export default {
  computed: {
    id: function () {
      return uuidv4()
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
      const dom = document.getElementById(this.id)
      if (dom && dom.innerHTML) {
        dom.innerHTML = ''
      }
      return new Chart({
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
      console.log(this.chart, 'chart')

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
