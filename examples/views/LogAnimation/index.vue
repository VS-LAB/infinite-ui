<template>
  <div :class="{
    'reversal':reversal
  }"
       class="anime_container">
    <!-- 雪碧图 -->
    <div ref="animeLogContainer"
         :class="{
          'logo_init_position':logoInitPosition,
          'logo_move_hidden':logoMoveHidden,
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
         :class="footerTextAnime">
      创造无限可能
    </div>
    <!-- menu -->
    <div class="header-model"
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
         :class="moveWhiteBackgroundAnime">
    </div>

  </div>

</template>

<script>
export default {
  name: 'LogAnimation',
  data () {
    return {
      animesFun: [this.page0_animeStep1, this.page0_animeStep3],
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
      logoInitPosition: false,//logo初始化左上角位置
      logoMoveHidden: false,//logo是否移动至隐藏
      footerTextAnime: '',//创造无限可能动画 footer-text-anime_start
      moveWhiteBackgroundAnime: '',//背景动画
      headerModelAnime: '',//菜单动画
      reversal: false,//正动画或倒动画
    }
  },
  methods: {
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
              await this.page0_animeStep2()
              resolve(true)
              return
            }
            this.logoCount += 1
          }, this.logoSwitchTime)
        })
      })
    },
    // 创造无限可能动画
    page0_animeStep2 (reversal) {
      return new Promise((resolve, reject) => {
        this.footerTextAnime = reversal ? '' : 'footer-text-anime_start'
        setTimeout(_ => {
          resolve(true)
        }, 500)
      })
    },
    // 最终动画
    page0_animeStep3 (reversal) {
      this.reversal = reversal
      return new Promise((resolve, reject) => {
        if (!reversal) {
          this.logoInitPosition = true
          this.moveWhiteBackgroundAnime = "move-white-background-anime_start"
          this.footerTextAnime = "footer-text-anime_end"
          setTimeout(_ => {
            this.logoMoveHidden = true
            this.headerModelAnime = true
            setTimeout(_ => {
              resolve(true)
            }, 500)
          }, 700)
        } else {
          this.moveWhiteBackgroundAnime = "_"
          this.headerModelAnime = false
          this.logoMoveHidden = false
          setTimeout(_ => {
            this.logoInitPosition = false
            setTimeout(_ => {
              this.moveWhiteBackgroundAnime = ""
              resolve(true)
            }, 800)
            setTimeout(() => {
              this.footerTextAnime = "footer-text-anime_start"
            }, 400)
          }, 400)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
@media screen and (min-width: 1200px) {
  @import "./index.scss";
}
</style>
