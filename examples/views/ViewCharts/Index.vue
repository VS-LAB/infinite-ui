<template>
  <div class="view-chart view-container">
    <div class="main-view">
      <section class="align-center header" data-animation='header' id="J_animation">
        <div class="title font-60">丰富的可视化图表</div>
        <p class="desc font-20">
          Infinite提供一套具有良好视觉和交互的数据可视化图表库<br>
          从数据出发，基于图形语法，灵活构建各类图表，满足你的各种数据可视化需求
        </p>
      </section>
      <button class="btn2" @click="handleAnimationControl()">{{ animation.time }}</button>
      <!-- <button class="btn" @click="handleAnimation">点击动画执行</button> -->
      <div class="chart-box" v-if="!showOrange">
        <section class="charts">
          <div class="chart-item" v-for="item in cardList" :key="item.id"
            :data-animation = setDataAttribute(item.id)
            :class="{
              'chart-1 chart-item-1': item.id === 1,
              'chart-2 chart-item-2': item.id === 2,
              'chart-3 chart-item-3': item.id === 3
            }"
          >
            <SliderItem v-bind="item"></SliderItem>
          </div>
        </section>
        <section class="charts" v-if="largecardlist && largecardlist.length">
          <div class="chart-item full-item"
          :data-animation = setDataAttribute(item.id)
          :class="{
            'chart-4 chart-item-4': item.id === 4,
          }" v-for="item in largecardlist" :key="item.id">
            <SliderItem v-bind="item">
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
            <div class="laptop-container">
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
              <img src="../../assets/visualization-chart/laotop-dark.png" alt="">
            </div>
          </div>
        </div>
        <div class="phone">
          <div class="phone-container">
            <div class="phone-contain">
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
                }"
              >
                <i class="inner"></i>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderItem from './Components/SlideItem'
import { MouseWheel } from './scroll'

export default {
  name: 'viewChart',
  components: {
    SliderItem
  },
  data () {
    return {
      showOrange: false,
      animation: {
        time: 0, // 动画执行次数
        clock: true
      },
      cardList: [{
        id: 1,
        title: '查询次数',
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
        title: '访问量',
        desc: [{
          title: '4,259',
          sub_title: '4,259',
          sub_value: '+852'
        }]
      },
      {
        id: 3,
        cardType: 'RadialBar',
        title: '数据分析'
      }
      ],
      colorList: [{
        id: 3,
        color: '#FF7635'
      }, {
        id: 4,
        color: '#1890FF'
      }, {
        id: 5,
        color: '#1C1A31'
      }],
      largecardlist: [{
        id: 4,
        showType: 'large',
        cardType: 'line',
        title: '访问量',
        showIcon: false
      }]
    }
  },
  mounted () {
    let obj = document.querySelector('#J_animation')
    let dd = new MouseWheel({ stepLength: 10, ele: obj })
    dd.onWheel(function (e) {
      console.log('2', e)
      // // 偏移距离 默认为最小
      let translate = 400 - e * 400
      let curScale = e
      obj.style.transform = `matrix(${curScale}, 0, 0, ${curScale}, 0, ${translate})`
      obj.style.opacity = e
      // 成功之后销毁
      if (e === 1) {
        dd.destroy()
      }
    })
    document.querySelector('.view-chart').addEventListener('scroll', function (e) {
      console.log('====================================')
      console.log(e)
      console.log('====================================')
    })
  },
  methods: {
    setDataAttribute (id) {
      return `chart-${id}`
    },
    handleAnimation () {
      let obj = document.querySelector('#J_animation')
      let btn = document.querySelector('.btn')
      let state = obj.style['animationPlayState']
      console.log('====================================')
      console.log(state)
      console.log('====================================')
      if (state !== 'running') {
        obj.style['animationPlayState'] = 'running'
        btn.innerText = 'stop'
      } else {
        obj.style['animationPlayState'] = 'paused'
        btn.innerText = 'play'
      }
    },
    changeColor (id) {
      this.handleAnimationControl(id)
    },
    handleAnimationControl (id) {
      console.log('====================================')
      console.log(id)
      console.log('====================================')
      let { animation } = this
      // 获取配置表
      const aniConfig = {
        // 0: [{
        //   ele: ['.main-view .header'], // 顶部标题动画
        //   class: 'floow-down'
        // }, {
        //   ele: ['.charts .chart-1'], // 小line动画
        //   class: 'floow-line-1'
        // }, {
        //   ele: ['.charts .chart-2'], // bar 动画
        //   class: 'floow-bar-1'
        // }, {
        //   ele: ['.charts .chart-3'], // 雷达图动画
        //   class: 'floow-radius-1'
        // }, {
        //   ele: ['.charts .chart-4'],
        //   class: 'floow-line-big-1'
        // }],
        1: [{
          ele: '.charts .chart-item-1', // 小line动画
          classes: 'floow-line-2'
        }, {
          ele: '.charts .chart-item-2', // 小line动画
          classes: 'floow-bar-2'
        },
        {
          ele: '.charts .chart-item-3', // 小line动画
          classes: 'floow-radius-2'
        },
        {
          ele: '.charts .chart-item-4', // 小line动画
          classes: 'floow-big-line-2'
        },
        {
          ele: '.chart-box', // 盒子高度缩微0
          classes: 'scale-height'
        }, {
          ele: '.laptop .laptop-main', // laptop
          classes: 'showlaptop'
        }, {
          ele: '.laptop .nav', // 导航
          classes: 'opactyAni'
        }, {
          ele: '.laptop .desc-item', // 导航
          classes: 'opactyAni'
        }, {
          ele: '.laptop .radius', // 导航
          classes: 'opactyAni'
        }, {
          ele: '.laptop .bottom', // 导航
          classes: 'opactyAni'
        }],
        2: [{
          ele: '.laptop', // 导航
          classes: 'laptopanileft'
        }, {
          ele: '.charts .chart-item-1', // 导航
          classes: 'floow-line-3'
        },
        {
          ele: '.charts .chart-item-2', // 导航
          classes: 'floow-bar-3'
        },
        {
          ele: '.charts .chart-item-3', // 导航
          classes: 'floow-radius-3'
        }, {
          ele: '.charts .chart-item-4', // 导航
          classes: 'floow-big-line-3'
        }, {
          ele: '.phone', // 导航
          classes: 'showphone'
        }],
        3: [{
          ele: '.main-view .header', // 顶部标题动画
          classes: 'floow-up'
        }, {
          ele: '.laptop', // 顶部标题动画
          classes: 'floow-laptop-left'
        }, {
          ele: '.show-colorful',
          classes: 'show-colorfull'
        }],
        4: [{
          ele: '.phone .phone-contain',
          classes: 'show-blue-phone'
        }, {
          ele: '.laptop-container',
          classes: 'show-blue-laotop'
        }],
        5: [{
          ele: '.phone .phone-contain',
          classes: 'show-dark-phone'
        }, {
          ele: '.laptop-container',
          classes: 'show-dark-laotop'
        }]
      }
      if (!animation.clock) return
      if (id) {
        animation.time = id
      } else {
        animation.time++
      };
      animation.clock = false

      if (animation.time === 2) {
        this.showOrange = true
      };

      const animationList = aniConfig[animation.time]
      if (!animationList) return
      const result = animationList.map(item => {
        try {
          // 获取dom
          let { ele, classes } = item
          const element = document.querySelector(ele)
          const animationName = element.dataset.animation
          element.classList.remove(animationName)
          element.classList.add(classes)
          element.dataset.animation = classes
          return true
        } catch (error) {
          return false
        }
      })
      const tag = result.every(item => {
        return item
      })
      if (tag) animation.clock = true
    }
  }
}
</script>

<style lang='scss'>
.view-container {
  height: 100vh;
  background: #201E2B;
};

body, html {
  font-size: 100px !important;
}

@media screen and (max-width: 1400px) {
  html {
    font-size: 100px !important;
  }
}

@media screen and (max-width: 1000px) {
  html {
    font-size: 70px !important;
  }
}

@media screen and (max-width: 600px) {
  html {
    font-size: 50px !important;
  }
}

</style>

<style lang="scss">
$laptopAni-time:1s;
.floow-line-2 {
  animation: floow-line-2 $laptopAni-time linear;
  animation-fill-mode: forwards;
}

@keyframes floow-line-2 {
  0% {
    transform: translateX(0px);
    opacity: 1;
  }
  100%{
    // transform: translate(10px, 7px) scale(0.36);
    transform: translate(88px, 60px) scale(0.52);
    opacity: 1;
    z-index: 1;
  }
}

.floow-line-3 {
  animation: floow-line-3 1s linear;
  animation-fill-mode: forwards;
  z-index: 1;
}

@keyframes floow-line-3 {
  0%{
    transform: translate(10px, 7px) scale(0.36);
    opacity: 1;
    z-index: 1;
  }
  100%{
    transform: translate(-110px, 7px) scale(0.36);
    opacity: 1;
    z-index: 1;
  }
}

.floow-bar-2 {
  animation: floow-bar-2 $laptopAni-time linear;
  animation-fill-mode: forwards;
  z-index: 1;
}

@keyframes floow-bar-2 {
  0% {
    transform: translateX(0px);
    opacity: 1;
    z-index: 1;
  }
  100%{
    // transform: translate(-100px, 7px) scale(0.36);
    transform: translate(-76px, 60px) scale(0.52);
    opacity: 1;
    z-index: 1;
  }
}

.floow-bar-3 {
  animation: floow-bar-3 1s linear;
  animation-fill-mode: forwards;
  z-index: 1;
}

@keyframes floow-bar-3 {
  0% {
    transform: translate(-100px, 7px) scale(0.36);
    opacity: 1;
    z-index: 1;
  }
  100%{
    transform: translate(-200px, 7px) scale(0.36);
    opacity: 1;
    z-index: 1;
  }
}

.floow-radius-2 {
  animation: floow-radius-2 $laptopAni-time linear;
  animation-fill-mode: forwards;
  z-index: 1;
}

@keyframes floow-radius-2 {
  0% {
    transform: translateX(0px);
    opacity: 1;
    z-index: 1;
  }
  100%{
    // transform: translate(10px, 7px) scale(0.36);
        transform: translate(-241px, 59px) scale(0.52);
    opacity: 1;
    z-index: 1;
  }
}
.floow-radius-3 {
  animation: floow-radius-3 1s linear;
  animation-fill-mode: forwards;
  z-index: 1;
}

@keyframes floow-radius-3 {
  0% {
    transform: translate(10px, 7px) scale(0.36);
    opacity: 1;
    z-index: 1;
  }
  100%{
    transform: translate(-90px, 7px) scale(0.36);
    opacity: 1;
    z-index: 1;
  }
}

.floow-big-line-2 {
  animation: floow-big-line-2 $laptopAni-time linear;
  animation-fill-mode: forwards;
}

@keyframes floow-big-line-2 {
  0%{
    transform: translateX(0px);
    opacity: 1;
    z-index: 1;
  }
  100%{
    // transform: translate(-63px, -188px) scale(0.5,0.35);
    transform: translate(-87px, -90px) scale(0.51);
    opacity: 1;
    z-index: 1;
  }
}

.floow-big-line-3 {
  animation: floow-big-line-3 1s linear;
  animation-fill-mode: forwards;
}

@keyframes floow-big-line-3 {
  0%{
    transform: translate(-63px, -188px) scale(0.5,0.35);
    opacity: 1;
    z-index: 1;
  }
  100%{
    transform: translate(-163px, -188px) scale(0.5,0.35);
    opacity: 1;
    z-index: 1;
  }
}

// 高度
.scale-height{
  height: 100%;
  animation: scale-height 0.1s linear;
  animation-fill-mode: forwards;
}

@keyframes scale-height {
  0%{
    height: 100%;
  }
  100% {
    height: 0px;
  }
}

.showlaptop {
  animation: showlaptop $laptopAni-time linear;
  transform: scale(1.98) translateY(450px);
  animation-fill-mode: forwards;
}

// 笔记本动画效果-上移1
@keyframes showlaptop {
  0% {
    transform: scale(1.98) translateY(450px);
  }
  100% {
    transform: scale(1) translateY(0);
  };
}

.opactyAni {
  opacity: 0;
  animation: opactyAni;
  animation-duration: $laptopAni-time * 0.1;
  animation-delay: $laptopAni-time * 0.9;
  animation-fill-mode: forwards;
}

// 动画显隐藏
@keyframes opactyAni {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  };
}

.laptopanileft {
  animation: laptopanileft 1s linear;
  animation-fill-mode: forwards;
}

@keyframes laptopanileft {
  0%{
    transform: scale(1) translate(0);
  }
  100%{
    transform: scale(1) translate(-100px, 0);
  }
}

.chartboxanileft .chart-item{
  animation: chartboxanileft 1s linear;
  animation-fill-mode: forwards;
}

@keyframes chartboxanileft {
  0%{
    transform: scale(1) translate(0);
    z-index: 1;
  }
  100%{
    z-index: 1;
    transform: scale(1) translate(-100px, 0);
  }
}

.showphone{
  animation: showphone 1s linear;
  animation-fill-mode: forwards;
}

@keyframes showphone {
  0%{
    opacity: 0;
    position: absolute;
    left: 60%;
  }
  67%{
     opacity: 0;
    position: absolute;
    left: 67%;
  }
  100%{
     opacity: 1;
    position: absolute;
    left: 90%;
  }
}

.floow-up{
  animation: floow-up 1s linear;
  animation-fill-mode: forwards;
}

@keyframes floow-up {
  0%{
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-400px);
    opacity: 1;
  }
}

.floow-laptop-left{
  animation: floow-laptop-left 1s linear;
  animation-fill-mode: forwards;
}

@keyframes floow-laptop-left {
  0%{
    transform: scale(1) translate(-100px, 0)
  }
  100% {
    transform: scale(1) translate(-400px, -100px)
  }
}

.show-colorfull{
  animation: show-colorfull 1s linear;
  animation-fill-mode: forwards;
}

@keyframes show-colorfull {
  0%{
    transform: translateY(100vh);
  };
  100%{
    transform: translateY(0);
  };
}

.show-blue-phone{
  animation: show-blue-phone 1s linear;
  animation-fill-mode: forwards;
}

@keyframes show-blue-phone {
  0%{
    transform: translateY(-2%);
  };
  100%{
    transform: translateY(-35.6%);
  };
}

.show-dark-phone{
  animation: show-dark-phone 1s linear;
  animation-fill-mode: forwards;
  transform: translateY(-35.6%);
}

@keyframes show-dark-phone {
  0%{
    transform: translateY(-35.6%);
  };
  100%{
    transform: translateY(-68.7%);
  };
}

.show-blue-laotop{
  animation: show-blue-laotop 1s linear forwards;
};

@keyframes show-blue-laotop {
  0%{
    transform: translateY(0);
  };
  100%{
    transform: translateY(-33%);
  };
}

.show-dark-laotop{
  animation: show-dark-laotop 1s linear forwards;
};

@keyframes show-dark-laotop {
  0%{
    transform: translateY(-33%);
  };
  100%{
    transform: translateY(-67.1%);
  };
}

</style>

<style lang="scss" scoped>
@import "./common.scss";

.btn2 {
  position: fixed;
  width: 100px;
  height: 40px;
  line-height: 40px;
  right: 0;
  bottom: 50%;
  cursor: pointer;
  z-index: 100000;
}

.view-container {
  padding-top: 0.20rem;
  box-sizing: border-box;
  section {
    color: #fff;
    font-size: 0.20rem;
    letter-spacing: 0;
    .desc {
      opacity: 0.6;
      margin:  0.30rem 0 0.4rem;
    };
  };
  .charts {
    width: 100%;
    max-width: 10.14rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .chart-item {
    display: inline-block;
    margin-right: 0.20rem;
    margin-bottom: 0.20rem;
    flex:1;
    &:nth-last-of-type(){
      margin-right: 0;
    }
    &.full-item {
      width: 100%;
      display: block;
      margin-right: 0;
      color: $light-font-color;
      .sub-title {
        width: 100%;
        justify-content: space-between;
        .change {
          li {
            width: 100px;
            text-align: center;
            position: relative;
            &.active span{
              @include bottom-border(#FF7D4D,3px,-15px)
            }
          }
        }
      }
    }
  }
}

.header{
  animation: flow linear 1s forwards;
  transform: translateY(400px);
  opacity: 0;
};

$aniChart: 1s; // 折线图和柱状图 执行时间
$AniChartDelay: 1s;
$AniChartDelay2: 1.2s;

.chart-1{
  transform: translate3d(-400px, 0, 0);
  opacity: 0;
  animation: chartItemAnima1 $AniChartDelay linear $aniChart forwards;
}

@keyframes chartItemAnima1 {
  0%{
    transform: translate3d(-400px, 0, 0);
    opacity: 0;
    z-index: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
    z-index: 1;
  }
}

.chart-2{
  transform: translate3d(-400px, 0, 0);
  opacity: 0;
  animation: chartItemAnima2 $AniChartDelay linear $aniChart forwards;
}

@keyframes chartItemAnima2 {
  0%{
    transform: translate3d(-400px, 0, 0);
    opacity: 0;
    z-index: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
    z-index: 1;
  }
}

// 饼图动画
.chart-3{
  transform: translate3d(400px, 0, 0);
  opacity: 0;
  animation: chartItemAnima3 $AniChartDelay2 linear $aniChart forwards;
  animation-fill-mode: forwards;
}

@keyframes chartItemAnima3 {
  0%{
    transform: translate3d(400px, 0, 0);
    opacity: 0;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
}

// 饼图动画
.chart-4{
  transform: translate3d(1000px, 0, 0);
  opacity: 0;
  animation: chartItemAnima4 linear $aniChart forwards;
  animation-delay: $AniChartDelay2;
}

@keyframes chartItemAnima4 {
  0%{
    transform: translate3d(1000px, 0, 0);
    opacity: 0;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
  // 70%{
  //   transform: translateX(0px);
  //   opacity: 1;
  // }
  // 100%{
  //   transform: translate(-63px, -188px) scale(0.5,0.35);
  //   opacity: 1;
  //   z-index: 1;
  // }
}

@keyframes flow {
  0%{
    transform: translateY(400px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.chart-box {
  height: 100%;
  // animation: hideBox 1s ease;
  animation-fill-mode: forwards;
}

@keyframes hideBox {
  0%{
    height: 100%;
  }
  100% {
    height: 0px;
  }
}

.laptop-container {
  // max-width: 12.53rem;
  // margin: 0.30rem 0;
};

$laptopAni-time: 1s;

.laptop {
  width: 100%;
  height: 6rem;
  position: relative;
  .laptop-container{
    // overflow: hidden;
    // width: 70%;
    // height: 273%;
    // margin-left: 15%;
    // margin-top: 6%;
    >img{
      width: 100%;
    };
  }
  .laptop-main-container{
    width: 69.4%;
    height: 73%;
    margin-left: 15.3%;
    margin-top: 6%;
    overflow: hidden;
  }
  .laptop-main {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: url('../../assets/visualization-chart/laptop.png') center center no-repeat;
    background-size: contain;
    overflow: hidden;
  }
  .laptop-contain {
    position: relative;
    width: 100%;
    height: 34%;
    left: 0;
    top: 0;
    overflow: hidden;
    .nav{
      width: 100%;
    }
    .bottom {
      width: 100%;
    }
    .content {
      display: flex;
      flex:1;
      margin: 0 1%;
      .right {
        width: 25%;
        img{
          width: 100%;
        }
      }
    }
    .desc-item, .radius, .nav, .bottom {
      opacity: 0;
      // animation: laptopAniRadius;
      // animation-duration: $laptopAni-time * 0.1;
      // animation-delay: $laptopAni-time * 0.9;
      // animation-fill-mode: forwards;
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
  width: 20%;
  height: 68%;
  position: absolute;
  left: 60%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  opacity: 0;
  overflow: hidden;
  background: url('../../assets/visualization-chart/phone.png') no-repeat center center;
  background-size: contain;

  .phone-container {
    width: 100%;
    height: 86%;
    overflow: hidden;
    margin-top: 36px;
    margin-left: 3%;
    z-index: -1;
    position: absolute;
    img{
      width: 92%;
    };
    .phone-contain {
      position: absolute;
      width: 100%;
      height: 330%;
      overflow: hidden;
      transform: translateY(-2%);
    }
  }
}

.show-colorful {
  position: absolute;
  top: 10%;
  right: -60%;
  z-index: 2;
  transform: translateY(100vh);
  .title{
    color: #fff;
  }
  p{
    margin: 0.32rem 0 0.56rem;
    opacity: 0.6;
    font-size: 0.20rem;
    color: #fff;
    letter-spacing: 0;
    line-height: 0.32rem;
  }
  .check-box
  {
    .checks{
      width: 0.46rem;
      height: 0.46rem;
      border: 4px solid rgba(255,255,255,0.20);
      display: inline-block;
      border-radius: 50%;
      margin-right: 0.2rem;
      cursor: pointer;
      transition: borderColor;
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
    }
  }
}

</style>
