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
        <!-- <img class="laptop" src="../../assets/laptop.png" alt=""> -->
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
  </div>
</div>
</template>

<script>
import SliderItem from './Components/SlideItem'
import EventBus from '@/EventBus'

// import { MouseWheel } from './scroll'

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
      animationList: {
        0: [{
          ele: ['.main-view .header'], // 顶部标题动画
          className: 'flow'
        }, {
          ele: ['.charts .chart-line-small-step1'], // 小line动画
          className: 'chart-line-small-step2'
        },
        {
          ele: ['.charts .chart-bar-small-step1'], // bar 动画
          className: 'chart-bar-small-step2'
        },
        {
          ele: ['.charts .chart-radius-small-step1'], // 雷达图动画
          className: 'chart-radius-small-step2'
        }, {
          ele: ['.charts .chart-line-big-step1'],
          className: 'chart-line-big-step2'
        }],
        1: [{
          ele: '.chart-box', // 盒子高度缩微0
          className: 'scale-chart-box-height-step1'
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
        }, {
          ele: '.laptop', // 顶部标题动画
          className: 'laptop-move-left-step2'
        }, {
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
    EventBus.$on('page3_showAniStep5', (reversal) => {
      _this.page4_animation_play_step1(reversal)
      setTimeout(() => {
        _this.$refs.smallline[0].$refs.line.render()
        _this.$refs.bigLine[0].$refs.line.render()
        _this.$refs.Bar[0].$refs.bar.render()
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
        this.handleElementsAnimation(dirction, animationList)
        setTimeout(() => {
          resolve(true)
        }, 1200)
      })
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
        const { ele, className, removeList } = item
        const element = document.querySelector(ele)
        if (element) {
          if (removeList) {
            element.classList.remove(...removeList)
            element.style.transitionDuration = ''
          }
          if (!dirction) {
            element.classList.add(className)
          } else {
            element.classList.remove(className)
          };
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
@import './animation/step1.scss';
@import "./common.scss";
.view-container {
  height: 100vh;
  background: #201E2B;
};

.view-container {
  box-sizing: border-box;
  section {
    color: #fff;
    font-size: 1.042vw;
    letter-spacing: 0;
    .title {
      font-size: 3.125vw;
    }
    .desc {
      opacity: 0.6;
      margin:  0.30rem 0 0.4rem;
    };
  };
  .charts {
    width: 100%;
    max-width: 65.26vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .chart-item {
    display: inline-block;
    margin-right: 1.0427vw;
    margin-bottom: 1.0427vw;
    width: 16.9271vw;
    height: 11.6667vw;
    border-radius: 0.5208vw;
    flex:1;
    overflow: hidden;
    &:last-of-type {
      margin-right: 0;
    }
    &.full-item {
      // width: 100%;
      width: 52.8125vw;
      height: 18.801vw;
      display: block;
      margin-right: 0;
      color: $light-font-color;
      .sub-title {
        width: 100%;
        justify-content: space-between;
        font-size: 16 * 2px;
        @include bottom-border(#DDE1EE , 2px, -20px);
        .change {
          li {
            width: 100 *2px;
            text-align: center;
            position: relative;
            font-size: 13 * 2px;
            cursor: pointer;
            &.active span{
              @include bottom-border(#FF7D4D,6px,-30px)
            }
          }
        }
      }
    }
  }
}

.header{
  font-size: 3.125vw;
  margin-top: 120px;
  margin-bottom: 84px;
  .desc {
    font-size: 1.042vw;
  }
};

.flow{
  // animation: flow linear 1s forwards;
  // transform: translateY(400px);
  // opacity: 0;
};

$aniChart: 1s; // 折线图和柱状图 执行时间
$AniChartDelay: 1s;
$AniChartDelay2: 1.2s;

// // .chart-1{
// //   transform: translate3d(-400px, 0, 0);
// //   opacity: 0;
// //   transition: all 1s ;
// //   animation: chartItemAnima1 $AniChartDelay linear $aniChart forwards;
// // }

// // @keyframes chartItemAnima1 {
// //   0%{
// //     transform: translate3d(-400px, 0, 0);
// //     opacity: 0;
// //     z-index: 1;
// //   }
// //   100% {
// //     transform: translateX(0px);
// //     opacity: 1;
// //     z-index: 1;
// //   }
// // }

// .chart-2{
//   transform: translate3d(-400px, 0, 0);
//   opacity: 0;
//   animation: chartItemAnima2 $AniChartDelay linear $aniChart forwards;
// }

// @keyframes chartItemAnima2 {
//   0%{
//     transform: translate3d(-400px, 0, 0);
//     opacity: 0;
//     z-index: 1;
//   }
//   100% {
//     transform: translateX(0px);
//     opacity: 1;
//     z-index: 1;
//   }
// }

// // 饼图动画
// .chart-3{
//   transform: translate3d(400px, 0, 0);
//   opacity: 0;
//   animation: chartItemAnima3 $AniChartDelay2 linear $aniChart forwards;
//   animation-fill-mode: forwards;
// }

// @keyframes chartItemAnima3 {
//   0%{
//     transform: translate3d(400px, 0, 0);
//     opacity: 0;
//   }
//   100%{
//     transform: translateX(0px);
//     opacity: 1;
//   }
// }

// // 饼图动画
// .chart-4{
//   transform: translate3d(1000px, 0, 0);
//   opacity: 0;
//   animation: chartItemAnima4 linear $aniChart forwards;
//   animation-delay: $AniChartDelay2;
// }

// @keyframes chartItemAnima4 {
//   0%{
//     transform: translate3d(1000px, 0, 0);
//     opacity: 0;
//   }
//   100%{
//     transform: translateX(0px);
//     opacity: 1;
//   }
// }

// @keyframes flow {
//   0%{
//     transform: translateY(400px);
//     opacity: 0;
//   }
//   100% {
//     transform: translateY(0px);
//     opacity: 1;
//   }
// }

$laptopAni-time: 1s;

.laptop {
  width: 100%;
  height: 38vw;
  position: relative;
  .laptop-container{
    >img{
      width: 100%;
      vertical-align: bottom
    };
  }
  .laptop-main-container{
    width: 69.4%;
    margin-left: 15.3%;
    height: 75%;
    margin-top: 3.4%;
    overflow: hidden;
    overflow: hidden;
  }
  .laptop-main {
    position: relative;
    width: 65.26vw;
    height: 100%;
    margin: 0 auto;
    background: url('../../assets/visualization-chart/laptop.png') center top no-repeat;
    background-size: contain;
    overflow: hidden;
  }
  .laptop-contain {
    position: relative;
    width: 100%;
    // height: 34%;
    height: 28.5vw;
    background: #f3f7fe;
    left: 0;
    top: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .nav{
      width: 100%;
      margin-bottom: 0.3vw;
    }
    .bottom {
      width: 98%;
      margin: 0 1%;
    }
    .content {
      display: flex;
      flex:1;
      margin: 0 1%;
      .right {
        width: 24.8%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        img{
          width: 100%;
        }
      }
    }
  }
}

@keyframes laptopAni {
  0% {
    transform: scale(2.98) translateY(1000px);
    .desc-item {
      opacity: 0;
    }
  }
  70% {
    .desc-item {
      opacity: 0;
    }
  }
  100% {
    transform: scale(1) translateY(0);
     .desc-item {
      opacity: 1;
    }
  };
}

@keyframes laptopAniRadius {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  };
}

.phone{
  width: 12vw;
  height: 63%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  overflow: hidden;
  border-radius: 40px;
  .phone-img{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
  }
  .phone-container {
    img{
      width: 100%;
    };
    .phone-contain {
      position: absolute;
      width: 100%;
      height: 300%;
      overflow: hidden;
    }
  }
}

.show-colorful {
  position: absolute;
  top: 20%;
  right: -30%;
  z-index: 2;
  .title{
    color: #fff;
    font-size: 3.125vw;
  }
  p{
    margin: 1.667vw 0 2.927vw;
    opacity: 0.6;
    font-size: 1.427vw;
    color: #fff;
    letter-spacing: 0;
    line-height: 1.667vw;
  }
  .check-box{
    .checks{
      width: 46px;
      height: 46px;
      border: 4px solid rgba(255,255,255,0.20);
      display: inline-block;
      border-radius: 50%;
      margin-right: 40px;
      cursor: pointer;
      transition: all 0.1s;
      &:hover{
        transform: scale(1.1);
        border-color: #fff;
      }
    }
    .orange{
      background: #FF7635;
    }
    .blue{
      background: #1890FF ;
    }
    .dark{
      background: #1C1A31;
    }
    .active {
      border-color: #fff;
      transform: scale(1.01);
    }
  }
}

</style>
