<template>
  <div v-if="resetCanvas"
       class="anime_container">
    <div ref="animeLogContainer"
         class="anime_log_container">
      <!-- 正+菱+infinite动画 -->
      <div class="anime_log_container-group"
           :class="animeLogContainerTopAnime">
        <!-- 正菱动画 -->
        <div class="anime_log_container-logs"
             :class="animeLogContainerLogsAnime">
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

      <!-- footer text -->
      <div class="footer-text"
           :class="footerTextAnime">
        创造无限可能
      </div>
    </div>
    <div class="header-model"
         :class="headerModelAnime"
         v-if="moveWhiteBackgroundAnime">
      <div class="header-menu"
           @click="$router.push('/guide')">组件</div>
    </div>
    <!-- 移动白色背景 -->
    <div class="move-white-background"
         :class="moveWhiteBackgroundAnime">
    </div>
  </div>

</template>

<script>
import Cube from './components/Cube'
export default {
  name: 'LogAnimation',
  components: {
    Cube
  },
  data () {
    return {
      animesFun: [this.page0_animeStep1, this.page0_animeStep5],
      resetCanvas: true,
      timer: null, // cube计时器
      count: 0, // 计数
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
        }
      ],
      rhombusSvfAnime: '',//菱形动画
      shadeAnime: '',//菱形遮罩动画
      animeLogContainerLogsAnime: '',// 正菱logs动画
      infiniteEnglishSvfAnime: '',//infinite动画
      footerTextAnime: '',//创造无限可能动画 footer-text-anime_start
      moveWhiteBackgroundAnime: '',//背景动画
      animeLogContainerTopAnime: '',//左上角log动画
      headerModelAnime: '',//菜单动画
    }
  },
  methods: {
    setAnimes () {
      this.count += 1
      this.animes[this.count - 1].startClass = `anime-start-${this.count}`
    },
    // 立方体动画
    page0_animeStep1 () {
      return new Promise((resolve, reject) => {
        this.timer = setInterval(async _ => {
          if (this.count === this.animes.length) {
            clearInterval(this.timer)
            await this.page0_animeStep2()
            await this.page0_animeStep3()
            await this.page0_animeStep4()
            resolve(true)
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
    page0_animeStep2 (reversal) {
      return new Promise((resolve, reject) => {
        if (reversal) {
          this.shadeAnime = ''
          setTimeout(_ => {
            this.rhombusSvfAnime = ''
            setTimeout(_ => {
              resolve(true)
            }, 400)
          }, 400)
        } else {
          this.rhombusSvfAnime = 'rhombus-svf-start'
          setTimeout(_ => {
            this.shadeAnime = 'group_rhombus-shade-start'
            setTimeout(_ => {
              resolve(true)
            }, 400)
          }, 400)
        }
      })
    },
    //正菱logs + infinite 动画
    page0_animeStep3 (reversal) {
      return new Promise((resolve, reject) => {
        this.animeLogContainerLogsAnime = reversal ? '' : "anime_log_container-logs_start"
        this.infiniteEnglishSvfAnime = reversal ? '' : "infinite-english-svf-anime_start"
        setTimeout(_ => {
          resolve(true)
        }, 500)
      })
    },
    // 创造无限可能动画
    page0_animeStep4 (reversal) {
      return new Promise((resolve, reject) => {
        this.footerTextAnime = reversal ? '' : 'footer-text-anime_start'
        setTimeout(_ => {
          resolve(true)
        }, 500)
      })
    },
    // 最终动画
    page0_animeStep5 (reversal) {
      return new Promise((resolve, reject) => {
        if (!reversal) {
          this.moveWhiteBackgroundAnime = "move-white-background-anime_start"
          this.animeLogContainerTopAnime = "anime_log_container-top-anime_start"
          this.footerTextAnime = "footer-text-anime_end"
          setTimeout(_ => {
            this.animeLogContainerTopAnime = "anime_log_container-top-anime_end"
            this.headerModelAnime = "header-model-anime_start"
            setTimeout(_ => {
              resolve(true)
            }, 300)
          }, 1000)
        } else {
          this.moveWhiteBackgroundAnime = "_"
          this.animeLogContainerTopAnime = "anime_log_container-top-anime_end_reversal"
          this.headerModelAnime = ""
          setTimeout(_ => {
            this.animeLogContainerTopAnime = "anime_log_container-top-anime_start_reversal"
            setTimeout(_ => {
              this.footerTextAnime = "footer-text-anime_start"
              this.moveWhiteBackgroundAnime = ""
              setTimeout(() => {
                resolve(true)
              }, 300)
            }, 1000)
          }, 300)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
