<template>
  <div class="line-chart">
    <div :id="id"></div>
    <div class="line-chart-tool-tips" v-if="showType === 'large'"
      :class="{
        'show':showToolTips
      }"
    >
      <dl class="pv">
        <dt>浏览量</dt>
        <dd>85</dd>
      </dl>
      <dl class="yoy">
        <dt>同比</dt>
        <dd>↑12%</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
import { WIDTH } from '../CONFIG.js'
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
    // const _this = this
    this.initComponent2()
    // window.addEventListener('resize', throttle(function () {
    //   _this.chart.changeSize({
    //     width:200,
    //     height:100
    //     // height: _this.getHeight()
    //   })
    // }, 1000), false)
  },
  data () {
    return {
      showToolTips: false,
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
      return document.documentElement.clientWidth / 2
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
    /**
     * @description 获取最大的实现宽度，最大宽度为1200，超出1200的宽度，不变
    */
    getWidth () {
      const width = document.documentElement.clientWidth
      return width > WIDTH ? WIDTH : width
    },
    getHeight () {
      // 获取宽度
      const { showType } = this
      const width = this.getWidth()
      if (showType === 'large') {
        return 278 * 2 * (width / WIDTH)
      }
      return 116 * 2 * (width / WIDTH)
    },
    getPadding () {
      // 获取宽度
      const { showType } = this
      const width = this.getWidth() / 100
      if (showType === 'large') {
        return [6 * width, 5 * width, 6 * width, 7 * width ]
      }
      return 0
    },
    initComponent2 (tag) {
      // 需要重新计算高宽，取消从外部传入规则
      const chart = new Chart({
        container: this.id,
        autoFit: true,
        height: this.getHeight(),
        padding: this.getPadding()
      })
      chart.data(this.showData)
      chart.scale({
        sold: this.slodScale,
        genre: {
          range: [0, 1]
        }
      })
      chart.tooltip(false)
      const { showType } = this
      const width = this.getWidth()
      const AxisFontSize = width * (24 / WIDTH)
      const AxisOffset = width * (24 / WIDTH)
      if (showType !== 'large') {
        chart.axis(false)
      } else {
        chart.axis('genre', {
          label: {
            offset: AxisOffset,
            style: {
              fontSize: AxisFontSize
            }
          }
        })
        chart.axis('sold', {
          label: {
            style: {
              fontSize: AxisFontSize
            }
          }
        })
      };
      chart.area().position('genre*sold').shape('smooth').color(this.colorArea)
      chart.line().size(4).position('genre*sold').shape('smooth').color(this.colorLine)
      this.chart = chart
      tag && this.chart.render();
    },
    render () {
      const _this = this
      if (this.chart) {
        if (this.chart.destroyed) {
          this.initComponent2(true)
        } else {
          this.chart.render()
        }
        setTimeout(() => {
          _this.showToolTips = true
        }, 400)
      }
    },
    destroy () {
      this.showToolTips = false
      this.chart && this.chart.destroy()
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
