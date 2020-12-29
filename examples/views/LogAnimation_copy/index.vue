<template>
  <div :class="{
    'reversal':reversal
  }"
       class="anime_container">
    <!-- 雪碧图 -->
    <div ref="animeLogContainer"
         :style="logoInitPosition"
         :class="{
           'logo_init_size':this.logoAnimeCompile
         }"
         class="anime_log_container">
      <img class="anime_log_container-drawing"
           v-if="!this.logoAnimeCompile"
           :src="require(`@/assets/cube/logo (${this.logoCount}).png`)" />
      <img v-show="this.logoAnimeCompile"
           class="anime_log_container-drawing replace_logo"
           :src="this.logoUrl" />
    </div>
    <!-- 创造无限可能 -->
    <div class="footer-text"
         :style="footerTextAnime">
      创造无限可能
    </div>
    <!-- menu -->
    <div class="header-model"
         :style="headerModelAnime"
         :class="{
           'header-model-anime_start':headerModelAnime
         }"
         v-show="moveWhiteBackgroundAnime">
      <div class="header-menu"
           :class="{
             'active':$route.path === menu.route
           }"
           v-for="menu in menuData"
           :key="menu.label"
           @click="menuClick(menu)">{{menu.label}}</div>
    </div>
    <!-- 移动白色背景 -->
    <div class="move-white-background"
         :style="moveWhiteBackgroundAnime">
    </div>

  </div>

</template>

<script>
export default {
  name: 'LogAnimation',
  data () {
    return {
      animeTime: 2000,
      ratio: 0,
      animeConfig: [
        {
          crtRatio: 0,
          section: [0, 30],
          animeFun: this.textAnime
        },
        {
          crtRatio: 0,
          section: [30, 86],
          animeFun: this.logAnime
        },
        {
          crtRatio: 0,
          section: [40, 100],
          animeFun: this.canvasAnime
        },
        {
          crtRatio: 0,
          section: [92, 98],
          animeFun: this.logAnime_2
        },
        {
          crtRatio: 0,
          section: [40, 60],
          animeFun: this.textAnime_2
        },
        {
          crtRatio: 0,
          section: [92, 98],
          animeFun: this.menuAnime
        }
      ],
      animesFun: [this.page0_animeStep2, this.page0_animeStep3],
      menuData: [
        {
          label: '首页',
          route: '/index'
        },
        {
          label: '组件',
          route: '/guide/installation'
        },
        {
          label: '图标',
          route: ''
        },
        {
          label: '图表',
          route: '/guide/LineChart'
        },
        {
          label: '下载',
          route: '/guide/installation'
        }
      ],
      logoTimer: null, // cube计时器
      logoCount: 1, // 计数
      logoUrl: require('@/assets/logo.png'),
      logoNum: 30,
      logoSwitchTime: 60,//图片切换时间
      logoAnimeCompile: false,//logo的动画完成
      logoInitPosition: {},//logo初始化左上角位置
      logoMoveHidden: false,//logo是否移动至隐藏
      footerTextAnime: '',//创造无限可能动画 footer-text-anime_start
      moveWhiteBackgroundAnime: '',//背景动画
      headerModelAnime: {},//菜单动画
      reversal: false,//正动画或倒动画
    }
  },
  methods: {
    animation (ratio) {
      console.log(ratio);
      this.ratio = ratio
      this.animeConfig.forEach((item) => {
        const message = this.isCrtSectionMessage(item.section)
        if (message.status) {
          item.crtRatio = ratio
          const newRatio = parseFloat(message.ratio.toFixed(2))
          item.animeFun(newRatio)
        } else if (message.position === 'top' && item.crtRatio !== item.section[0] && item.crtRatio !== 0) {
          item.crtRatio = item.section[0]
          item.animeFun(0)
        } else if (message.position === 'bottom' && item.crtRatio !== item.section[1] && item.crtRatio !== 1) {
          item.crtRatio = item.section[1]
          item.animeFun(1)
        }
      })
    },
    // 设置样式-创造无限可能-2
    textAnime (newRatio) {
      this.footerTextAnime = {
        transform: `translate(calc(-50% + 32px), calc((-50% + ${this.getComputedData(160, 120, newRatio)}px)))`,
        opacity: newRatio
      }
    },
    // 设置样式-logo
    logAnime (newRatio) {
      this.logoInitPosition = {
        transform: `translate(-${this.getComputedData(50, 25, newRatio)}%, calc(-${this.getComputedData(50, 21.5, newRatio)}%)) scale(${this.getComputedData(1, 0.57, newRatio)})`,
        left: `${this.getComputedData(50, 20, newRatio)}%`,
        top: `${this.getComputedData(50, 0, newRatio)}%`,
      }
    },
    // 设置样式-画布
    canvasAnime (newRatio) {
      this.moveWhiteBackgroundAnime = {
        transform: `translateY(-${this.getComputedData(0, 105, newRatio)}%)`
      }
    },
    // 设置样式-logo_2
    logAnime_2 (newRatio) {
      this.logoInitPosition.transform = `translate(-25%, calc(-${this.getComputedData(21.5, 100, newRatio)}%)) scale(0.57)`
    },
    // 设置样式-menu
    menuAnime (newRatio) {
      this.headerModelAnime = {
        transform: `translateY(-${this.getComputedData(0, 100, newRatio)}%)`
      }
    },
    // 设置样式-创造无限可能-2
    textAnime_2 (newRatio) {
      this.footerTextAnime = {
        transform: `translate(calc(-50% + 32px), calc((-50% + ${this.getComputedData(120, 80, newRatio)}px)))`,
        opacity: 1 - newRatio
      }
    },
    // 获取该区间滚动信息
    isCrtSectionMessage (arr) {
      const message = {
        status: this.ratio >= arr[0] && this.ratio <= arr[1],//是否在区间内
        ratio: (this.ratio - arr[0]) / (arr[1] - arr[0]),
        position: null
      }
      if (!message.status) {
        message.position = this.ratio < arr[0] ? 'top' : 'bottom'
      }
      return message
    },
    // 通用计算方法
    getComputedData (start, end, ratio) {
      return start - (start - end) * ratio
    },
    // 菜单点击
    menuClick (menu) {
      if (!menu.route || menu.route === this.$route.path) return
      this.$router.push(menu.route)
    },
    // 立方体动画
    page0_animeStep1 () {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          this.logoTimer = setInterval(async () => {
            if (this.logoCount === this.logoNum) {
              clearInterval(this.logoTimer)
              setTimeout(() => {
                this.logoAnimeCompile = true
              }, this.logoSwitchTime)
              resolve(true)
              return
            }
            this.logoCount += 1
          }, this.logoSwitchTime)
        })
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
@media screen and (min-width: 1200px) {
  @import "./index.scss";
}
</style>
