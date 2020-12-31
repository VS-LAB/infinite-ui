<template>
  <div
    class="container"
  >
    <HeaderNav
      :show-header-nav="showHeaderNav"
      :close-header-inner="closeHeaderInner"
      :router-index="routerIndex"
      @goAnimationStep="goAnimationStep"
    ></HeaderNav>
    <component
      ref="componnet"
      :style="{zIndex:100-index, position:'fixed',width:'100vw',height:'100vh'}"
      v-for="(component,index) in pageNameArr"
      :is="component"
      @doStep=doStep
      :key="component"
    >
    </component>
  </div>
</template>

<script>
import HeaderNav from '@/views/HeaderNav/index.vue'
import LogAnimation from '@/views/LogAnimation/index.vue'
// import ScrollContainer from '@/views/scrollContainer.vue'
import CardsAnimation from '@/views/CardsAnimation/index.vue'
import Standard from '@/views/standard'
import LastPage from '@/views/LastPage/index.vue'
import ViewCharts from '../views/ViewCharts/Index'
import IconPage from '@/views/IconPage'
import { isFirefox } from '@/util'

export default {
  components: {
    HeaderNav,
    LogAnimation,
    // ScrollContainer,
    CardsAnimation,
    Standard,
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
      closeHeaderInner: false,
      routerIndex: 0,
      sizeX2: false,
      pageNameArr: ['LogAnimation', 'CardsAnimation', 'Standard', 'IconPage', 'ViewCharts', 'LastPage']
      // pageNameArr: ['ScrollContainer', 'CardsAnimation', 'Standard', 'IconPage', 'ViewCharts', 'LastPage']
    }
  },
  methods: {
    // 检测浏览器缩放比例
    detectZoom () {
      var ratio = 0
      var screen = window.screen
      var ua = navigator.userAgent.toLowerCase()

      if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio
      } else if (~ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
          ratio = screen.deviceXDPI / screen.logicalXDPI
        }
      } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth
      }

      if (ratio) {
        ratio = Math.round(ratio * 100)
      }

      return ratio
    },
    async goAnimationStep (typeName) {
      console.log('typeName == ', typeName)
      console.log('this.animesFun == ', this.animesFun)
      console.log('this.animesFun[0].name == ', this.animesFun[0].name)
      let stepIndex = 0

      switch (typeName) {
        case 'Component':
          this.animesFun.forEach((item, index) => {
            if (item.name.includes('page1_animeStep1')) {
              stepIndex = index
              this.routerIndex = 1
            }
          })
          break
        case 'Icon':
          this.animesFun.forEach((item, index) => {
            if (item.name.includes('page3_showAniStep2')) {
              stepIndex = index
              this.routerIndex = 2
            }
          })
          break
        case 'Chart':
          this.animesFun.forEach((item, index) => {
            if (item.name.includes('page4_animation_play_step2')) {
              stepIndex = index
              this.routerIndex = 3
            }
          })
          break

        default:
          this.routerIndex = 0
          break
      }

      if (stepIndex > this.animeIndex) {
        let array = []
        for (let i = 0; i < stepIndex; i++) {
          array.push(this.animesFun[i]())
        }
        Promise.all(array).then((res) => {
          console.log(res) // [ 0, 1, 2 ]
        })

        this.animeIndex = stepIndex
        this.next(0, true)
      } else {
        this.closeHeaderInner = !this.closeHeaderInner
        let array = []
        for (let i = this.animesFun.length - 1; i > 0; i--) {
          if (i < this.animeIndex + 1 && i > stepIndex) {
            array.push(this.animesFun[i](true))
          }
        }
        Promise.all(array).then((res) => {
          console.log(res)
        })

        this.animeIndex = stepIndex
        this.prev()
      };
    },
    doStep (step) {
      if (!step) return
      this.animeIndex = this.animeIndex + step
      if (step > 0) {
        this.next()
      } else {
        this.prev()
      };
    },
    async next (step = 0, executionType) {
      this.showHeaderNav = false
      this.completeAnimation = false
      const currAnimate = this.animesFun[this.animeIndex]
      const animateName = currAnimate.name
      this.setComponentZindex(animateName, true)
      this.completeAnimation = await currAnimate(false, executionType)
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
    // let sizeX2 = this.detectZoom()
    // if (sizeX2 > 120) {
    // this.sizeX2 = true
    // }
    let animesFun = []
    this.$refs.componnet.forEach((component) => {
      animesFun = [...animesFun, ...(component.animesFun || [])]
    })
    this.animesFun = animesFun
    this.$nextTick(() => {
      setTimeout(() => {
        this.next()
      }, 500)
    })

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
@import "@/style/size2.scss";
</style>
