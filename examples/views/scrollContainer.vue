<template>
  <div class="scroll_container"
       :class="{
          'disabled_scroll':!completeAnimation
        }"
       @scroll="onscroll">
    <div class="scroll_container-placeholder">
    </div>
    <component ref="componnet"
               class="scroll_container-component"
               :style="{zIndex:100-index,}"
               v-for="(component,index) in pageNameArr"
               :is="component"
               :key="component">
    </component>
  </div>
</template>

<script>
import LogAnimation from '@/views/LogAnimation_copy/index.vue'
import CardsAnimation from '@/views/CardsAnimation_copy/index.vue'
export default {
  name: 'ScrollContainer',
  components: {
    LogAnimation,
    CardsAnimation,
  },
  data () {
    return {
      scrollRatio: 0,//总进度条滚动占比
      animeComponents: {},//动画组件
      completeAnimation: true,//需要等待的动画是否已经完成动画
      ratioDistribution: {},//组件总的占比
      allAnimaComponentRatio: {},//所有组件进度集合占比
      pageNameArr: [],//组件名称
    }
  },
  methods: {
    // 页面滚动
    onscroll (e) {
      // 获取当前滚动位置比例
      const el = e.target
      const ratio = el.scrollTop / (el.scrollHeight - el.clientHeight) * 100
      const crtScrollRatio = parseFloat(ratio.toFixed(2))
      // 滚动条滚动距离
      this.scrollRatio = crtScrollRatio
      let totalDistribution = 0
      // 是否为当前动画组件
      let flag = false
      // 获取需要动画的组件
      const ratioDistributionKeys = Object.keys(this.ratioDistribution)
      for (let i = 0; i < ratioDistributionKeys.length; i++) {
        const key = ratioDistributionKeys[i]
        // 当前动画所处最大区间距离值
        totalDistribution += this.ratioDistribution[key]
        if (this.scrollRatio <= totalDistribution) {
          // this.ratioDistribution --- 当前组件滚动区域 time/timeCount
          // 获取当前组件滚动着占比
          if (!flag) {
            let crtComponentRatio = (this.scrollRatio + this.ratioDistribution[key] - totalDistribution) / this.ratioDistribution[key] * 100
            // 记录动画组件滚动进度占比
            this.allAnimaComponentRatio[key] = parseFloat(crtComponentRatio.toFixed(2))
            this.animeComponents[key].animation(this.allAnimaComponentRatio[key])
          } else if (this.allAnimaComponentRatio[key] !== 0) {
            // 这里保证只触发一次
            this.allAnimaComponentRatio[key] = 0
            this.animeComponents[key].animation(0)
          }
          flag = true
        } else {
          // 触发动画并设置该动画组件结束值
          if (this.allAnimaComponentRatio[key] !== 100) {
            // 这里保证只触发一次
            this.allAnimaComponentRatio[key] = 100
            this.animeComponents[key].animation(100)
          }
        }
      }
    },
    // 初始化每个组件动画动作比例
    initRatioDistribution () {
      let animesFun = []
      this.pageNameArr = []
      // 获取组件定义的动画时长/ms
      Object.values(this.$options.components).forEach((c, i) => {
        // 排除当前组件即scrollContianer
        if (['VueComponent'].includes(c.name)) return
        // 初始化所有组件名称，用于component标签遍历
        this.pageNameArr.push(c.name)
        this.$nextTick(() => {
          // 映射所有组件name=>component 
          this.$set(this.animeComponents, c.name, this.$refs.componnet[i])
        })
        // 映射所有组件时间值name=>animeTime
        const data = c.data()
        this.$set(this.ratioDistribution, c.name, data.animeTime)
        // 初始映射所有动画组件占比值
        this.$set(this.allAnimaComponentRatio, c.name, 0)
      })
      // 分配组件动画占总滚轮的百分比
      const countTime = Object.values(this.ratioDistribution).reduce((total, num) => total + num, 0)
      // 根据countTime分配等比例的总页面滚动占比值
      Object.keys(this.ratioDistribution).forEach(key => {
        this.ratioDistribution[key] = parseFloat((this.ratioDistribution[key] / countTime * 100).toFixed(2))
      })
    }
  },
  mounted () {
    this.initRatioDistribution()
    console.log(this.pageNameArr);
    console.log(this.animeComponents);
    console.log(this.ratioDistribution);
    console.log(this.allAnimaComponentRatio);

    // 初始化动画
    this.$nextTick(async () => {
      this.completeAnimation = false
      // 动画执行完后再进行滚动
      this.completeAnimation = await this.$refs.componnet[0].page0_animeStep1()
    })
  }
}
</script>

<style lang="scss" scoped>
.scroll_container {
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: relative;

  &.disabled_scroll {
    overflow: hidden;
  }

  &-placeholder {
    height: 2000vh;
  }

  &-component {
    width: calc(100% - 10px);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
  }
}
</style>
