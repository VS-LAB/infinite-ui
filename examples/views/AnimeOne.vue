<template>
  <div v-if="resetCanvas"
       class="anime-one-canvas">
    <div ref="animeOneContainer"
         class="anime-one-container">
      <!-- 正+菱+infinite动画 -->
      <div :class="animeOneContainerTopAnime">
        <!-- 正菱动画 -->
        <div class="anime-one-container-logs"
             :class="animeOneContainerLogsAnime">
          <!-- 菱形动画 -->
          <div class="group_rhombus">
            <img class="rhombus-svf"
                 :class="rhombusSvfAnime"
                 src="@/assets/rhombus.svg"
                 alt="" />
            <div class="group_rhombus-shade"
                 :class="shadeAnime"></div>
          </div>
          <!-- 正方体动画 -->
          <div class="group_cube">
            <Cube v-for="(item,index) in animes"
                  :key="index"
                  :cube-class="`group_cube-class ${item.defaultClass} ${item.startClass}`" />
          </div>
        </div>

        <!-- infinite-english动画 -->
        <div class="group_infinite_english">
          <img class="infinite-english-svf"
               :class="infiniteEnglishSvfAnime"
               src="@/assets/infinite-english.svg"
               alt="" />
        </div>
      </div>

      <div class="header-model"
           :class="headerModelAnime"
           v-if="moveWhiteBackgroundAnime">
        <div class="header-menu">组件</div>
      </div>

      <!-- footer text -->
      <div class="footer-text"
           :class="footerTextAnime">
        创造无限可能
      </div>
    </div>
    <!-- 移动白色背景 -->
    <div class="move-white-background"
         :class="moveWhiteBackgroundAnime">
    </div>
  </div>

</template>

<script>
import Cube from '@/components/Cube'
export default {
  components: {
    Cube
  },
  data () {
    return {
      resetCanvas: true,
      timer: null,//cube计时器
      count: 0,//计数
      // 立方体动画
      animes: [
        {
          defaultClass: 'anime-1',
          startClass: ''
        },
        {
          defaultClass: 'anime-2',
          startClass: ''
        },
        {
          defaultClass: 'anime-3',
          startClass: ''
        },
        {
          defaultClass: 'anime-4',
          startClass: ''
        },
        {
          defaultClass: 'anime-5',
          startClass: ''
        },
        {
          defaultClass: 'anime-6',
          startClass: ''
        },
        {
          defaultClass: 'anime-7',
          startClass: ''
        },
        {
          defaultClass: 'anime-8',
          startClass: ''
        },
      ],
      rhombusSvfAnime: '',//菱形动画
      shadeAnime: '',//菱形遮罩动画
      animeOneContainerLogsAnime: '',// 正菱logs动画
      infiniteEnglishSvfAnime: '',//infinite动画
      footerTextAnime: '',//创造无限可能动画 footer-text-anime_start
      moveWhiteBackgroundAnime: '',//背景动画
      animeOneContainerTopAnime: '',//左上角log动画
      headerModelAnime: '',//菜单动画
    }
  },
  methods: {
    initParams () {

      setTimeout(() => {
        this.timer = null//cube计时器
        this.count = 0//计数
        this.rhombusSvfAnime = ''//菱形动画
        this.shadeAnime = ''//菱形遮罩动画
        this.animeOneContainerLogsAnime = ''// 正菱logs动画
        this.infiniteEnglishSvfAnime = ''//infinite动画
        this.footerTextAnime = ''//创造无限可能动画 footer-text-anime_start
        this.moveWhiteBackgroundAnime = ''//背景动画
        this.animeOneContainerTopAnime = ''//左上角log动画
        this.animes.forEach(item => {
          item.startClass = ''
        })
        this.resetCanvas = true
        this.init()
      })

    },
    async init () {
      await this.animeStep1()
      await this.animeStep2()
      await this.animeStep3()
      await this.animeStep4()
      await this.animeStep5()
      // this.resetCanvas = false
    },
    setAnimes () {
      this.count += 1
      this.animes[this.count - 1].startClass = `anime-start-${this.count}`
    },
    // 立方体动画
    animeStep1 () {
      return new Promise((resolve, reject) => {
        this.timer = setInterval(_ => {
          if (this.count === this.animes.length) {
            clearInterval(this.timer)
            resolve()
            return
          }
          this.setAnimes()
          if (this.count === 6) {
            this.setAnimes()
          }
          if (this.count === 1) {
            this.setAnimes()
            this.setAnimes()
          }
        }, 300)
      })
    },
    // 菱形动画
    animeStep2 (reversal) {
      return new Promise((resolve, reject) => {
        if (reversal) {
          this.shadeAnime = ""
          setTimeout(_ => {
            this.rhombusSvfAnime = ""
            setTimeout(_ => {
              resolve()
            }, 400)
          }, 400)
        } else {
          this.rhombusSvfAnime = "rhombus-svf-start"
          setTimeout(_ => {
            this.shadeAnime = "group_rhombus-shade-start"
            setTimeout(_ => {
              resolve()
            }, 400)
          }, 400)
        }

      })
    },
    //正菱logs + infinite 动画
    animeStep3 (reversal) {
      return new Promise((resolve, reject) => {
        this.animeOneContainerLogsAnime = reversal ? '' : "anime-one-container-logs_start"
        this.infiniteEnglishSvfAnime = reversal ? '' : "infinite-english-svf-anime_start"
        setTimeout(_ => {
          resolve()
        }, 500)
      })

    },
    // 创造无限可能动画
    animeStep4 (reversal) {
      return new Promise((resolve, reject) => {
        this.footerTextAnime = reversal ? '' : "footer-text-anime_start"
        setTimeout(_ => {
          resolve()
        }, 500)
      })
    },
    // 最终动画
    animeStep5 (reversal) {
      return new Promise((resolve, reject) => {
        this.moveWhiteBackgroundAnime = reversal ? '' : "move-white-background-anime_start"
        this.animeOneContainerTopAnime = reversal ? '' : "anime-one-container-top-anime_start"
        this.footerTextAnime = reversal ? '' : "footer-text-anime_end"
        setTimeout(_ => {
          this.animeOneContainerTopAnime = reversal ? '' : "anime-one-container-top-anime_end"
          this.headerModelAnime = reversal ? '' : "header-model-anime_start"
          setTimeout(_ => {
            resolve()
          }, 500)
        }, 1000)

      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
// 画布
.anime-one-canvas {
  height: 100%;
  // 中心点
  .center-dot {
    width: 0;
    height: 0;
    position: relative;
    left: calc(50% - 34px);
    top: 40vh;
    z-index: 1;
  }
  .anime-one-container {
    @extend .center-dot;

    // 立方体start
    .group_cube {
      &-class {
        position: absolute;
        transition: all 0.2s cubic-bezier(0.25, 0.1, 0.24, 0.71);
        filter: blur(8px);
      }

      // 设置公共模糊
      .anime-start-common {
        filter: blur(0px);
      }

      .anime-1 {
        transform: translate(-20px, -20px) scale(0, 0);
      }
      .anime-start-1 {
        transform: translate(0, 0) scale(1, 1);
        @extend .anime-start-common;
      }

      .anime-2 {
        transform: translate(-40px, 0px) scale(0, 0);
      }
      .anime-start-2 {
        transform: translate(-14px, 10px) scale(1, 1);
        @extend .anime-start-common;
      }

      .anime-3 {
        transform: translate(30px, -20px) scale(0, 0);
      }
      .anime-start-3 {
        transform: translate(0, -14px) scale(1, 1);
        @extend .anime-start-common;
      }

      .anime-4 {
        transform: translate(40px, 40px) scale(0, 0);
      }
      .anime-start-4 {
        transform: translate(14px, 10px) scale(1, 1);
        @extend .anime-start-common;
      }
      .anime-5 {
        transform: translate(0, 40px) scale(0, 0);
      }
      .anime-start-5 {
        transform: translate(0, 20px) scale(1, 1);
        @extend .anime-start-common;
      }

      .anime-6 {
        transform: translate(-40px, -40px) scale(0, 0);
      }
      .anime-start-6 {
        transform: translate(-14px, -4px) scale(1, 1);
        @extend .anime-start-common;
      }

      .anime-7 {
        transform: translate(40px, -40px) scale(0, 0);
      }
      .anime-start-7 {
        transform: translate(14px, -4px) scale(1, 1);
        @extend .anime-start-common;
      }

      .anime-8 {
        transform: translate(10px, 50px) scale(0, 0);
      }
      .anime-start-8 {
        transform: translate(0, 6px) scale(1, 1);
        @extend .anime-start-common;
      }
    }
    // 立方体end

    // 菱形start
    .group_rhombus {
      .rhombus-svf {
        position: absolute;
        height: 70px;
        margin: -22px 0 0 -30px;
        opacity: 0;
        transition: all 1s;
      }
      .rhombus-svf-start {
        opacity: 1;
        transform: translateX(-28px);
      }
      &-shade {
        position: absolute;
        left: 0;
        top: -56px;
        width: 0;
        height: 0;
        border: 70px solid transparent;
        border-right-color: #fff;
        border-radius: 50%;
        transition: all 0.2s;
      }
      &-shade-start {
        left: -114px;
      }
    }
    // 菱形end

    // 正菱logs start
    &-logs {
      transition: all 0.5s;
    }
    &-logs_start {
      transform: translateX(-88px);
    }
    // 正菱logs end

    // infinite-English start
    .group_infinite_english {
      width: 330px;
      position: relative;
      top: -3px;
      margin-left: -90px;
      overflow: hidden;
      .infinite-english-svf {
        transition: all 0.5s;
        width: 220px;
        opacity: 0;
      }
      .infinite-english-svf-anime_start {
        opacity: 1;
        transform: translateX(74px);
      }
    }
    // infinite-English end

    // 创造无限可能 start
    .footer-text {
      display: inline-block;
      letter-spacing: 48px;
      color: #7a7a7a;
      font-size: 17px;
      white-space: nowrap;
      transition: all 0.5s;
      opacity: 0;
      transform: translate(-140px, 120px);
    }
    .footer-text-anime_start {
      transform: translate(-140px, 60px);
      opacity: 1;
    }
    .footer-text-anime_end {
      transform: translate(-140px, 00px);
      opacity: 0;
    }
    // 创造无限可能 end
  }
  // 白色背景 start
  .move-white-background {
    height: 100%;
    background: #fff;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
    transition: all 1.5s cubic-bezier(0.17, 0.08, 0.39, 0.97);
  }
  .move-white-background-anime_start {
    transform: translateY(-105%);
  }
  // 白色背景 end

  // 正-菱-infinite动画 start
  .anime-one-container-top-anime_start {
    transition: all 1s;
    transform: translate(-300px, -38vh) scale(0.5);
  }
  .anime-one-container-top-anime_end {
    transition: all 0.3s;
    transform: translate(-300px, -48vh) scale(0.5);
  }
  // 正-菱-infinite动画 end

  // 顶部菜单动画 start
  .header-model {
    white-space: nowrap;
    transform: translate(200px, -42vh);
    transition: all 0.3s;
    .header-menu {
      font-size: 16px;
      color: #ff7635;
    }
  }
  .header-model-anime_start {
    transform: translate(200px, -52vh);
  }
  // 顶部菜单动画 end
}
</style>
