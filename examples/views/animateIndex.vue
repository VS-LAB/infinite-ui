<template>
  <div class="container">
    <component ref="componnet"
      :style="{zIndex:100-index,position:'fixed',width:'100vw',height:'100vh'}"
      v-for="(component,index) in pageNameArr"
      :is="component"
      :key="component">
    </component>
  </div>
</template>

<script>
import LogAnimation from '@/views/LogAnimation'
import CardsAnimation from '@/views/CardsAnimation'
import Standard from '@/views/standard'
import HomeAnimation from '@/views/homeAnimation'
import ViewChart from '@/views/ViewCharts/Index.vue'
import LastPage from '@/views/lastPage'
import ViewCharts from '../views/ViewCharts/Index2'

export default {
  components: {
    LogAnimation,
    CardsAnimation,
    Standard,
    HomeAnimation,
    ViewChart,
    LastPage,
    ViewCharts
  },
  data () {
    return {
      animesFun: [],
      animeIndex: 0,
      completeAnimation: false,
      pageNameArr: ['LogAnimation', 'CardsAnimation', 'Standard', 'HomeAnimation', 'ViewCharts', 'LastPage']
      // pageNameArr: ['LogAnimation', 'CardsAnimation', 'Standard', 'homeAnimation', 'LastPage'],
    }
  },
  methods: {
    async next () {
      this.completeAnimation = false
      const currAnimate = this.animesFun[this.animeIndex]
      const animateName = currAnimate.name
      this.setComponentZindex(animateName)
      this.completeAnimation = await currAnimate()
    },
    async prev () {
      this.completeAnimation = false
      const currAnimate = this.animesFun[this.animeIndex + 1]
      const animateName = currAnimate.name
      this.setComponentZindex(animateName)
      this.completeAnimation = await currAnimate(true)
    },
    setComponentZindex (animateName) {
      this.$refs.componnet.forEach((component, componentIndex) => {
        component.$el.style.zIndex = 100 - componentIndex
        if (animateName.includes(`page${componentIndex}`)) {
          component.$el.style.zIndex = 101
        }
      })
    }
  },
  mounted () {
    let animesFun = []
    this.$refs.componnet.forEach((component) => {
      animesFun = [...animesFun, ...(component.animesFun || [])]
    })
    // if()
    this.animesFun = animesFun
    this.next()
    function debounce (fn, wait, immediate) {
      immediate = immediate || false
      var timer = null
      var count = 0
      return function () {
        var _this = this
        var _arg = arguments
        clearTimeout(timer)
        if (immediate) {
          fn.apply(_this, _arg)
          count++
        } else {
          timer = setTimeout(function () {
            fn.apply(_this, _arg)
            count++
          }, wait)
        }
      }
    }

    windowAddMouseWheel()
    let self = this
    function windowAddMouseWheel () {
      var scrollFunc = function (e) {
        e = e || window.event
        let wheelDistance // 滑轮滚动距离
        if (e.wheelDelta) { // 判断浏览器IE，谷歌滑轮事件
          wheelDistance = e.wheelDelta
        } else if (e.detail) { // Firefox滑轮事件
          wheelDistance = e.detail
        }
        console.log('completeAnimation', self.completeAnimation)
        if (self.completeAnimation) {
          if (wheelDistance > 0 && self.animeIndex >= 1) { // 当滑轮向上滚动时
            self.animeIndex -= 1
            console.log('滑轮向上滚动')
            self.prev()
          }
          console.log(self.animeIndex, self.animesFun.length)
          console.log(self.animeIndex < self.animesFun.length - 1)
          if (wheelDistance < 0 && self.animeIndex < self.animesFun.length - 1) { // 当滑轮向下滚动时
            self.animeIndex += 1
            console.log('滑轮向下滚动')
            self.next()
          }
        }
      }
      // 给页面绑定滑轮滚动事件
      if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', debounce(scrollFunc, 200), false)
      }
      // 滚动滑轮触发scrollFunc方法
      document.addEventListener('mousewheel', debounce(scrollFunc, 200))
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
}
</style>
