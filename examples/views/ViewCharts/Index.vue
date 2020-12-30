<template>
  <div class="view-chart view-container">
    <div class="main-view">
      <div class="main-view-content">
      <section class="align-center header" data-animation='header' id="J_animation">
        <div class="title">丰富的可视化图表</div>
        <p class="desc">
          Infinite提供一套具有良好视觉和交互的数据可视化图表库<br>
          从数据出发，基于图形语法，灵活构建各类图表，满足你的各种数据可视化需求
        </p>
      </section>
      <div class="chart-box"
       :class="{
          'hide':showOrange
        }"
      >
        <section class="charts">
          <div class="chart-item" v-for="item in cardList" :key="item.id"
            :data-animation = setDataAttribute(item.id)
            :class="{
              'chart-item-1 chart-line-small-step1': item.id === 1,
              'chart-bar-small-step1 chart-item-2': item.id === 2,
              'chart-radius-small-step1 chart-item-3': item.id === 3
            }"
          >
            <SliderItem :ref="item.refs" v-bind="item"></SliderItem>
          </div>
        </section>
        <section class="charts" v-if="largecardlist && largecardlist.length">
          <div class="chart-item full-item"
          :data-animation = setDataAttribute(item.id)
          :class="{
            'chart-line-big-step1 chart-item-4': item.id === 4,
          }" v-for="item in largecardlist" :key="item.id">
            <SliderItem :ref="item.refs" v-bind="item">
              <template slot='header'>
                <div class="flex sub-title">
                  <span class="flex-1 ti">{{item.title}}</span>
                  <ul class="flex change">
                    <li><span>近24小时</span></li>
                    <li><span>近一周</span></li>
                    <li class="active"><span>近一个月</span></li>
                    <li><span>近一年</span></li>
                  </ul>
                </div>
              </template>
            </SliderItem>
          </div>
        </section>
      </div>
      <div class="laptop">
        <div class="laptop-main">
          <div class="laptop-main-container">
            <div class="laptop-container"
              :class="{
                'show-colorfullaotop-step1': activeColor === 5,
                'show-colorfullaotop-step2': activeColor === 6,
              }"
            >
              <div v-show="!showOrange" class="laptop-contain">
                <img class="nav" src="../../assets/visualization-chart/nav.png" alt="">
                <div class="content flex">
                  <div class="left flex-1"></div>
                  <div class="right">
                      <img class="desc-item" src="../../assets/visualization-chart/chart1.png" alt="">
                      <img class="radius" src="../../assets/visualization-chart/chart2.png" alt="">
                  </div>
                </div>
                <img class="bottom" src="../../assets/visualization-chart/footer.png" alt="">
              </div>
              <img v-show="!!showOrange" src="../../assets/visualization-chart/laptop-orange.png" alt="">
              <img src="../../assets/visualization-chart/laptop-blue.png" alt="">
              <img src="../../assets/visualization-chart/laptop-dark.png" alt="">
            </div>
          </div>
        </div>
        <div class="phone">
          <div class="phone-container">
            <img class="phone-img" src="../../assets/visualization-chart/phone.png" alt="">
            <div class="phone-contain"
              :class="{
                'show-blue-phone-step1': activeColor === 5,
                'show-blue-phone-step2': activeColor === 6,
              }"
            >
              <img src="../../assets/visualization-chart/phone-orange.png" alt="">
              <img src="../../assets/visualization-chart/phone-blue.png" alt="">
              <img src="../../assets/visualization-chart/phone-dark.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="show-colorful">
            <h1 class="title font-60">多彩变化</h1>
            <p>一键换色，轻松适配不同产品；<br>多彩并不为博取眼球，只为探索体验上的多种可能</p>
            <div class="check-box">
              <div class="checks"
                @click="changeColor(item.id)"
                v-for="item in colorList" :key="item.id"
                :class="{
                  'orange': item.id === 4,
                  'blue': item.id === 5,
                  'dark': item.id === 6,
                  'active': activeColor === item.id
                }"
              >
                <i class="inner"></i>
              </div>
            </div>
        </div>
    </div>
  </div>
  <div class="btns" v-if="showdebug">

  <button class="btn2" @click="handleAnimationControl()">{{ animation.time }}</button>
  <button class="btn3" @click="page4_animation_play_step1(true)"> 1-- </button>
  <button class="btn4" @click="page4_animation_play_step1()"> 1++ </button>
  <button class="btn5" @click="page4_animation_play_step2(true)"> 2-- </button>
  <button class="btn6" @click="page4_animation_play_step2()"> 2++ </button>
  <button class="btn7" @click="page4_animation_play_step3(true)"> 3-- </button>
  <button class="btn8" @click="page4_animation_play_step3()"> 3++ </button>
  <button class="btn9" @click="page4_animation_play_step4(true)"> 4-- </button>
  <button class="btn10" @click="page4_animation_play_step4()"> 4++ </button>
  <button class="btn11" @click="page4_animation_play_step5(true)"> 5-- </button>
  <button class="btn12" @click="page4_animation_play_step5()"> 5++ </button>
  <button class="btn13" @click="page4_animation_play_step6(true)"> 6-- </button>
  <button class="btn14" @click="page4_animation_play_step6()"> 6++ </button>
  <button class="btn15" @click="page4_animation_play_step7(true)"> 7-- </button>
  <button class="btn16" @click="page4_animation_play_step7()"> 7++ </button>
  </div>
</div>
</template>

<script>
import SliderItem from './Components/SlideItem'
import EventBus from '@/EventBus'

export default {
  name: 'viewChart',
  components: {
    SliderItem
  },
  data () {
    return {
      animesFun: [this.page4_animation_play_step2, this.page4_animation_play_step3, this.page4_animation_play_step4, this.page4_animation_play_step5, this.page4_animation_play_step6, this.page4_animation_play_step7],
      showOrange: false,
      activeColor: 4,
      animation: {
        time: 0, // 动画执行次数
        clock: true
      },
      cardList: [{
        id: 1,
        title: '查询次数',
        refs: 'smallline',
        cardType: 'line',
        desc: [{
          title: '8,626',
          sub_title: '同比',
          sub_value: '+12%'
        }]
      },
      {
        id: 2,
        cardType: 'bar',
        refs: 'Bar',
        title: '访问量',
        desc: [{
          title: '4,259',
          sub_title: '新增',
          sub_value: '+852'
        }]
      },
      {
        id: 3,
        cardType: 'RadialBar',
        refs: 'RadialBar',
        title: '数据分析'
      }
      ],
      colorList: [{
        id: 4,
        color: '#1C1A31'
      }, {
        id: 5,
        color: '#1890FF'
      }, {
        id: 6,
        color: '#FF7635'
      }],
      largecardlist: [{
        id: 4,
        showType: 'large',
        cardType: 'line',
        refs: 'bigLine',
        title: '访问量',
        showIcon: false
      }],
      completeAnimation: false,
      showdebug: false,
      animationList: {
        0: [{
          ele: ['.main-view .header'], // 顶部标题动画
          className: 'flow'
        }, {
          ele: ['.charts .chart-line-small-step1'], // 小line动画
          className: 'chart-line-small-step2',
          delay: {
            next: '1s',
            prev: 0
          }
        },
        {
          ele: ['.charts .chart-bar-small-step1'], // bar 动画
          className: 'chart-bar-small-step2',
          delay: {
            next: '0.5s',
            prev: 0
          }
        },
        {
          ele: ['.charts .chart-radius-small-step1'], // 雷达图动画
          className: 'chart-radius-small-step2',
          delay: {
            next: '0.5s',
            prev: 0
          }
        }, {
          ele: ['.charts .chart-line-big-step1'],
          className: 'chart-line-big-step2',
          delay: {
            next: '1s',
            prev: 0
          }
        }],
        1: [{
          ele: '.chart-box', // 盒子高度缩微0
          className: 'scale-chart-box-height-step1',
          delay: {
            next: '0s',
            prev: '1s'
          }
        }, {
          ele: ['.charts .chart-line-small-step1'], // 小line动画
          className: 'chart-line-small-step3'
        }, {
          ele: ['.charts .chart-bar-small-step1'], // 小line动画
          className: 'chart-bar-small-step3'
        }, {
          ele: ['.charts .chart-radius-small-step1'], // 小line动画
          className: 'chart-radius-small-step3'
        }, {
          ele: ['.charts .chart-line-big-step1'], // 大line动画
          className: 'chart-line-big-step3'
        }, {
          ele: '.laptop .laptop-main', // laptop
          className: 'showlaptop-step1'
        }, {
          ele: '.laptop .nav', // 导航
          className: 'shownav-step1'
        }, {
          ele: '.laptop .desc-item', // 导航
          className: 'shownav-step1'
        }, {
          ele: '.laptop .radius', // 导航
          className: 'shownav-step1'
        }, {
          ele: '.laptop .bottom', // 导航
          className: 'shownav-step1'
        }],
        2: [{
          ele: '.laptop', // 导航
          className: 'laptop-move-left-step1'
        }, {
          ele: '.phone', // 导航
          className: 'showphone-step1'
        }],
        3: [{
          ele: '.main-view .header', // 顶部标题动画
          className: 'flow-step2'
        },
        // {
        //   ele: '.laptop', // 顶部标题动画
        //   className: 'laptop-move-left-step2'
        // },
        {
          ele: '.show-colorful',
          className: 'show-colorfull-step1'
        }],
        4: [{
          // ele: '.phone .phone-contain',
          // removeList: ['show-blue-phone-step2'],
          // className: 'show-blue-phone-step1'
        }, {
          // ele: '.laptop-container',
          // removeList: ['show-colorfullaotop-step2'],
          // className: 'show-colorfullaotop-step1'
        }],
        5: [{
          // ele: '.phone .phone-contain',
          // removeList: ['show-blue-phone-step1'],
          // className: 'show-blue-phone-step2'
        }, {
          // ele: '.laptop-container',
          // removeList: ['show-colorfullaotop-step1'],
          // className: 'show-colorfullaotop-step2'
        }],
        6: [{
          ele: '.view-chart',
          className: 'leave-step1'
        }]
      }
    }
  },
  mounted () {
    const _this = this
    const { showdebug } = this
    if (showdebug) {
      _this.page4_animation_play_step1()
      setTimeout(() => {
        _this.$refs.Bar[0].$refs.bar.render()
        _this.$refs.RadialBar[0].$refs.RadialBar.render()
        setTimeout(() => {
          _this.$refs.smallline[0].$refs.line.render()
          _this.$refs.bigLine[0].$refs.line.render()
        }, 500)
      }, 1000)
    }
    EventBus.$on('page3_showAniStep5', (reversal) => {
      _this.page4_animation_play_step1()
      setTimeout(() => {
        if (_this.$refs) {
          _this.$refs.Bar[0].$refs.bar.render()
          _this.$refs.RadialBar[0].$refs.RadialBar.render()
          setTimeout(() => {
            _this.$refs.smallline[0].$refs.line.render()
            _this.$refs.bigLine[0].$refs.line.render()
          }, 500)
        }
      }, 1000)
    })
  },
  methods: {
    // 动画执行第一步
    page4_animation_play_step1 (dirction) {
      return new Promise((resolve, reject) => {
        const animationList = this.animationList[0]
        this.handleElementsAnimation(dirction, animationList)
        setTimeout(_ => {
          resolve(true)
        }, 1000)
      })
    },
    page4_animation_play_step2 (dirction) {
      return new Promise((resolve, reject) => {
        if (dirction) {
          this.showOrange = false
        }
        const animationList = this.animationList[1]
        this.handleElementsAnimation(dirction, animationList)
        setTimeout(_ => {
          resolve(true)
        }, 1200)
      })
    },
    page4_animation_play_step3 (dirction) {
      return new Promise((resolve, reject) => {
        if (!dirction) {
          this.showOrange = true
        }
        const animationList = this.animationList[2]
        this.handleElementsAnimation(dirction, animationList)
        setTimeout(() => {
          resolve(true)
        }, 1200)
      })
    },
    page4_animation_play_step4 (dirction) {
      return new Promise((resolve, reject) => {
        this.showOrange = true
        this.activeColor = 4
        const animationList = this.animationList[3]
        // 判断上下高度，调整距离位置
        this.handleStep4(dirction)
        this.handleElementsAnimation(dirction, animationList)
        setTimeout(() => {
          resolve(true)
        }, 1200)
      })
    },
    handleStep4 (dirction) {
      const height = document.documentElement.clientHeight
      const element = document.querySelector('.laptop')
      const width = document.querySelector('.laptop .laptop-main').clientWidth
      const { top } = element.getBoundingClientRect()
      const stepDistance = (height - element.clientHeight) / 2 - top
      const stylesh = document.styleSheets[document.styleSheets.length - 1]
      stylesh.insertRule(`
        .laptop.laptop-move-left-step1.laptop-move-left-step3[data-v-75182f44] {
          transform: scale(1) translate(-50%, ${stepDistance}px);
        }
      `)
      // element.style.transition = 'all 1s';
      const stepLeft = width / 2 + (100)
      if (!dirction) {
        // element.classList.add('laptop-move-left-step3')
        element.style.transform = `scale(1) translate(${-stepLeft}px, ${stepDistance}px)`
      } else {
        // element.classList.remove('laptop-move-left-step3')
        element.style.transform = ``
      }
    },
    page4_animation_play_step5 (dirction) {
      return new Promise((resolve, reject) => {
        // this.activeColor = 5
        if (dirction) {
          this.activeColor = 4
        } else {
          this.activeColor = 5
        }
        const animationList = this.animationList[4]
        this.handleElementsAnimation(dirction, animationList)
        setTimeout(() => {
          resolve(true)
        }, 1200)
      })
    },
    page4_animation_play_step6 (dirction) {
      return new Promise((resolve, reject) => {
        if (dirction) {
          this.activeColor = 5
        } else {
          this.activeColor = 6
        }
        const animationList = this.animationList[5]
        this.handleElementsAnimation(dirction, animationList)
        setTimeout(() => {
          resolve(true)
        }, 1200)
      })
    },
    page4_animation_play_step7 (dirction) {
      return new Promise((resolve, reject) => {
        this.activeColor = 6
        const animationList = this.animationList[6]
        this.handleElementsAnimation(dirction, animationList)
        setTimeout(() => {
          resolve(true)
        }, 1200)
      })
    },
    handleElementsAnimation (dirction, animationList) {
      // 添加动画
      animationList.map(item => {
        const { ele, className, removeList, delay } = item
        const element = document.querySelector(ele)
        if (element) {
          if (removeList) {
            element.classList.remove(...removeList)
            element.style.transitionDuration = ''
          }
          element.style.transitionDelay = ''
          if (delay) {
            const { prev, next } = delay
            if (!dirction && next) {
              element.style.transitionDelay = next
            }
            if (!!dirction && prev) {
              element.style.transitionDelay = prev
            }
            console.log('====================================')
            console.log(delay, element.style.transitionDelay)
            console.log('====================================')
          }
          setTimeout(() => {
            if (!dirction) {
              element.classList.add(className)
            } else {
              element.classList.remove(className)
            };
          })
        }
      })
    },
    checkAnimationStatus (animationList) {
      animationList.map(item => {
        const { ele } = item
        const element = document.querySelector(ele)
        let tag = false
        element.addEventListener('transitionend', function () {
          tag = true
        }, true)
        return tag
      })
    },
    page4_animeStep1 () {
      return new Promise((resolve, reject) => {
        this.handleAnimationControl()
        resolve(true)
      })
    },
    setDataAttribute (id) {
      return `chart-${id}`
    },
    handleAnimation () {
      let obj = document.querySelector('#J_animation')
      let btn = document.querySelector('.btn')
      let state = obj.style['animationPlayState']
      if (state !== 'running') {
        obj.style['animationPlayState'] = 'running'
        btn.innerText = 'stop'
      } else {
        obj.style['animationPlayState'] = 'paused'
        btn.innerText = 'play'
      }
    },
    changeColor (id) {
      // this.handleAnimationControl(id)
      const { activeColor } = this
      // 获取前进步数
      if (activeColor === id) return
      const step = id - activeColor
      console.log('====================================')
      console.log(step)
      console.log('====================================')
      this.$emit('doStep', step)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './btn.scss';
@import "./index.scss";

@media screen and (min-width: 1440px) {
  @import "./index.scss";
}
</style>
