<template>
  <div class="container">
    <HeaderNav
      :show-header-nav="showHeaderNav"
    ></HeaderNav>
    <component ref="componnet"
               :style="{zIndex:100-index, position:'fixed',width:'100vw',height:'100vh'}"
               v-for="(component,index) in pageNameArr"
               :is="component"
               @doStep=doStep
               :key="component">
    </component>
  </div>
</template>

<script>
import HeaderNav from '@/views/HeaderNav/index.vue'
import LogAnimation from '@/views/LogAnimation/index.vue'
import CardsAnimation from '@/views/CardsAnimation/index.vue'
import Standard from '@/views/standard'
import ViewChart from '@/views/ViewCharts/Index.vue'
import LastPage from '@/views/LastPage/index.vue'
import ViewCharts from '../views/ViewCharts/Index4'
import IconPage from '@/views/IconPage'
import { isFirefox } from '@/util'

export default {
  components: {
    HeaderNav,
    LogAnimation,
    CardsAnimation,
    Standard,
    ViewChart,
    LastPage,
    ViewCharts,
    IconPage
  },
  data () {
    return {
      animesFun: [],
      animeIndex: 0,
      completeAnimation: false,
      showHeaderNav: false, // 是否展示顶部nav
      pageNameArr: ['LogAnimation', 'CardsAnimation', 'Standard', 'IconPage', 'ViewCharts', 'LastPage']
      // pageNameArr: ['LogAnimation', 'CardsAnimation', 'Standard', 'homeAnimation', 'LastPage'],
    }
  },
  methods: {
    doStep (step) {
      if (!step) return
      this.animeIndex = this.animeIndex + step
      if (step > 0) {
        this.next()
      } else {
        this.prev()
      };
    },
    async next (step = 0) {
      this.showHeaderNav = false
      this.completeAnimation = false
      const currAnimate = this.animesFun[this.animeIndex]
      const animateName = currAnimate.name
      this.setComponentZindex(animateName, true)
      this.completeAnimation = await currAnimate()
    },
    async prev () {
      this.showHeaderNav = true
      this.completeAnimation = false
      const currAnimate = this.animesFun[this.animeIndex + 1]
      const animateName = currAnimate.name
      this.setComponentZindex(animateName, false)
      this.completeAnimation = await currAnimate(true)
    },
    setComponentZindex (animateName, isNext) {
      this.$refs.componnet.forEach((component, componentIndex) => {
        component.$el.style.zIndex = 100 - componentIndex
        if (animateName.includes(`page${componentIndex}`)) {
          component.$el.style.zIndex = 101
        }
        if (animateName.includes('page4_animation_play_step7')) {
          this.$refs.componnet[this.$refs.componnet.length - 1].$el.style.zIndex = 98
          if (isNext) { // 切换到最后一页需要提前将zindex设高，鼠标事件才能生效
            setTimeout(() => {
              this.$refs.componnet[this.$refs.componnet.length - 1].$el.style.zIndex = 101
            }, 1000)
          }
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
        if (self.completeAnimation) {
          // 首页时向上滚动也加载导航栏
          if (wheelDistance > 0 && self.animeIndex === 0) { // 当滑轮向上滚动时
            self.showHeaderNav = true
          }
          if (wheelDistance > 0 && self.animeIndex >= 1) { // 当滑轮向上滚动时
            self.animeIndex -= 1
            self.prev()
          }
          if (wheelDistance < 0 && self.animeIndex < self.animesFun.length - 1) { // 当滑轮向下滚动时
            self.animeIndex += 1
            self.next()
          }
        }
      }
      // 给页面绑定滑轮滚动事件
      if (isFirefox()) { // DOMMouseScroll事件只有火狐浏览器支持
        document.addEventListener('DOMMouseScroll', scrollFunc, false)
        window.addEventListener('DOMMouseScroll', scrollFunc, false)
      }
      // 滚动滑轮触发scrollFunc方法
      document.addEventListener('mousewheel', scrollFunc)
      window.addEventListener('mousewheel', scrollFunc)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
