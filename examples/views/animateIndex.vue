<template>
  <div class="container"
       @wheel="handleWheel">
    <HeaderNav :show-header-nav="showHeaderNav"
               :close-header-inner="closeHeaderInner"
               :router-index="routerIndex"
               :is-transition="isTransition"
               @goAnimationStep="goAnimationStep"></HeaderNav>
    <tip-scroll :show="showTipScroll" />
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
import EventBus from '@/EventBus'
import HeaderNav from '@/views/HeaderNav/index.vue'
import LogAnimation from '@/views/LogAnimation/index.vue'
// import ScrollContainer from '@/views/scrollContainer.vue'
import CardsAnimation from '@/views/CardsAnimation/index.vue'
import Standard from '@/views/standard'
import LastPage from '@/views/LastPage/index.vue'
import ViewCharts from '../views/ViewCharts/Index'
import IconPage from '@/views/IconPage'
import tipScroll from '@/components/tipScroll'
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
    IconPage,
    tipScroll
  },
  data () {
    return {
      showTipScroll: false,
      animesFun: [], // 动画方法集合
      stepFun: [], // 初始化动画方法集合
      animeIndex: 0, //
      completeAnimation: false, // 动画是否完成
      showHeaderNav: false, // 是否展示顶部nav
      isTransition: false, // 是否需要顶部动画
      closeHeaderInner: false, //
      routerIndex: 0,
      sizeX2: false,
      isStopWheel: false, // 是否阻止鼠标滚轮
      startToInterrupt: false, // 是否打断滚动发生
      pageNameArr: ['LogAnimation', 'CardsAnimation', 'Standard', 'IconPage', 'ViewCharts', 'LastPage']
      // pageNameArr: ['ScrollContainer', 'CardsAnimation', 'Standard', 'IconPage', 'ViewCharts', 'LastPage']
    }
  },
  methods: {
    handleWheel (e) {
      if (this.isStopWheel) return
      e.stopPropagation()
      let self = this
      if (self.startToInterrupt) {
        return
      }
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
          this.animateByMenu = false
          self.prev()
        }
        if (wheelDistance < 0 && self.animeIndex < self.animesFun.length - 1) { // 当滑轮向下滚动时
          self.animeIndex += 1
          self.next()
        }
      }
    },
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
      this.startToInterrupt = true
      let stepIndex = 0
      switch (typeName) {
        case 'Component':
          this.stepFun.forEach((item, index) => {
            if (item.name.includes('page1_step1')) {
              stepIndex = index
              this.routerIndex = 1
            }
          })
          break
        case 'Icon':
          this.stepFun.forEach((item, index) => {
            if (item.name.includes('page3_step2')) {
              stepIndex = index
              this.routerIndex = 2
            }
          })
          break
        case 'Chart':
          this.stepFun.forEach((item, index) => {
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
      this.$nextTick(async () => {
        if (stepIndex > this.animeIndex) {
          let array = []
          for (let i = this.animeIndex; i < stepIndex; i++) {
            array.push(this.stepFun[i]())
          }
          this.animeIndex = stepIndex
          this.next(0, true)
          // this.startToInterrupt = true
          await Promise.all(array).then((res) => {
            // this.animeIndex = stepIndex
            // this.next(0, true)
            this.startToInterrupt = false
          })
        } else {
          this.closeHeaderInner = !this.closeHeaderInner
          let array = []
          for (let i = this.stepFun.length - 1; i > 0; i--) {
            if (i < this.animeIndex + 1 && i > stepIndex) {
              array.push(this.stepFun[i](true))
            }
          }
          this.animeIndex = stepIndex
          this.prev()
          // this.startToInterrupt = true
          await Promise.all(array).then((res) => {
            // this.animeIndex = stepIndex
            // this.prev()
            this.startToInterrupt = false
          })
        };
      })
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
    setRouterIndexIndexAnimation (animateName) {
      if (animateName.includes('page0')) {
        this.routerIndex = 0
      } else if (animateName.includes('page1')) {
        this.routerIndex = 1
      } else if (animateName.includes('page3')) {
        this.routerIndex = 2
      } else if (animateName.includes('page4')) {
        this.routerIndex = 3
      }
    },
    async next (step = 0, executionType) {
      // 当执行第一个动画时，显示滚动提示
      if (this.animeIndex === 0) {
        setTimeout(() => {
          this.showTipScroll = true
        }, 2000)
      } else {
        this.showTipScroll = false
      }
      // 当执行第一个动画时，顶部导航默认停留
      if (this.animeIndex === 1) {
        setTimeout(_ => {
          this.showHeaderNav = true
          setTimeout(() => {
            this.isTransition = true
          }, 200)
        }, 720)
      } else {
        this.showHeaderNav = false
      }
      this.completeAnimation = false
      const currAnimate = this.animesFun[this.animeIndex]
      const animateName = currAnimate.name
      this.setComponentZindex(animateName, true)
      this.completeAnimation = await currAnimate(false, executionType)
      this.setRouterIndexIndexAnimation(animateName)
      // this.startToInterrupt = false
    },
    async prev () {
      this.showHeaderNav = true
      this.completeAnimation = false
      const currAnimate = this.animesFun[this.animeIndex + 1]
      const animateName = currAnimate.name
      this.setComponentZindex(animateName, false)
      this.completeAnimation = await currAnimate(true)
      this.setRouterIndexIndexAnimation(animateName)
      // this.startToInterrupt = false
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
    EventBus.$on('isStopWheel', isStopWheel => {
      this.isStopWheel = isStopWheel
    })

    let animesFun = []
    let stepFun = []
    this.$refs.componnet.forEach((component) => {
      animesFun = [...animesFun, ...(component.animesFun || [])]
      stepFun = [...stepFun, ...(component.stepFun || [])]
    })
    this.animesFun = animesFun
    this.stepFun = stepFun
    animesFun.forEach(item => {
    })
    this.$nextTick(() => {
      setTimeout(() => {
        this.next()
      }, 500)
    })
    windowAddMouseWheel(this)
    function windowAddMouseWheel (self) {
      // 给页面绑定滑轮滚动事件
      if (isFirefox()) { // DOMMouseScroll事件只有火狐浏览器支持
        document.addEventListener('DOMMouseScroll', self.handleWheel, false)
        window.addEventListener('DOMMouseScroll', self.handleWheel, false)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/style/size2.scss";
</style>
<style>
html {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden !important;
}
</style>
