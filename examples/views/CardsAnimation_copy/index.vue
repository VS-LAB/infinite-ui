<template>
  <div class="anime-container">
    <div class="anime-canvas"
         ref="animeCanvasAnimeRef"
         :class="{
           'anime-canvas-anime_start':animeCanvasAnime
         }">
      <div class="header_text"
           ref="headerTextRef"
           :class="{
             'header_text-anime_start':headerTextAnime
           }">
        <h1>全新可视化前端组件</h1>
        <p v-html="'一套基于 Vue 2.0，为平安内部前端开发者提供的桌面端组件库\r打造全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠的数据可视化组件'"></p>
      </div>
      <div class="component_view">
        <img ref="componentViewNotebookRef"
             class="component_view-notebook"
             :style="componentViewNotebookAnime"
             src="@/assets/component/notebook.png">
        <!-- :class="{
               'component_view-notebook-anime_start':componentViewNotebookAnime
             }" -->
        <div class="component_view-container">
          <div class="component_view-imgs_padding">
            <div class="component_view-imgs-linear_gradient"
                 :class="imgsAnimed?'imgs_animed':''">
              <div ref="componentViewImgsContainerRef"
                   class="component_view-imgs_container"
                   :style="{overflow:isOverflowAutoPad?'hidden auto':''}">
                <div class="imgs_container-table"
                     :class="{
                       'table_imgs_position':tableImgsPosition
                     }">
                  <div class="imgs_container-table-tr"
                       :class="tr.col?`imgs-col_${tr.col}`:''"
                       v-for="(tr,trIndex) in imgCards"
                       :key="trIndex">
                    <div class="imgs_container-table-tr-td"
                         v-for="(td,tdIndex) in tr.data"
                         :key="tdIndex">
                      <img v-for="img in td"
                           :ref="`imgRef${img}`"
                           :key="img"
                           :class="`imgs_${img}`"
                           :src="require(`@/assets/component/card (${img}).png`)">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="img_connect imgs_content_9"
         :style="imgConnectStyle"
         :class="{
           'img_connect-anime_start':imgConnectAnime
         }"
         :src="require(`@/assets/component/card (9).png`)"
         alt="">
    <div class="replace_scroll"
         v-show="isOverflowAutoPad && !animeContinue && !lastAnimeCompile"
         ref="replaceScrollRef"
         @scroll="onScroll">
      <div class="replace_scroll-placeholder"></div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/EventBus'
export default {
  name: 'CardsAnimation',
  data () {
    return {
      animeTime: 3000,
      animeConfig: [
        {
          crtRatio: 0,
          section: [0, 20],
          animeFun: this.padAnime
        },
        {
          crtRatio: 0,
          section: [0, 20],
          animeFun: this.cardAnime
        }
      ],
      animesFun: [this.page1_animeStep1, this.page1_animeStep4],
      // 图片数据
      imgCards: [{
        col: 5,
        data: [
          [1, 5],
          [2, 6, 7],
          [3, 9, 10],
          [12, 13],
          [15, 16]
        ]
      },
      {
        data: [
          [4],
          [11],
          [14]
        ]
      },
      {
        col: 3,
        data: [
          [17, 18, 19],
          [22, 23, 24],
          [27, 28]
        ]
      },
      {
        data: [
          [20],
          [25],
          [8]
        ]
      },
      {
        data: [
          [21],
          [26]
        ]
      },
      {
        col: 5,
        data: [
          [1, 5],
          [2, 6, 7],
          [3, 9, 10],
          [12, 13],
          [15, 16]
        ]
      },
      {
        data: [
          [4],
          [11],
          [14]
        ]
      }],
      animeCanvasAnime: '', // 画布动画
      headerTextAnime: '', // 头部文案动画
      componentViewNotebookAnime: {}, // 笔记本动画
      tableImgsPosition: true, // 图片集合初始化位置
      scrollTop: 0,
      imgsAnimed: false, // 是否开启遮罩及其他imgs数据
      timeStep3: null,
      imgConnectStyle: null,
      imgConnectAnime: '', // 连接下个图片图画
      lastAnimeCompile: false, // 最后一个动画状态
      animeContinue: false, // 动画是否进行当中
      isOverflowAutoPad: false, // 是否在pad上进行滚动
      padScrollSwitch: false, // 电脑上下滑动开关
      continueSlide: false // 持续滑动
    }
  },
  methods: {
    animation (ratio) {
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
      // console.log('第二个动画进度 ===' + ratio);
    },
    // 获取该区间滚动信息
    isCrtSectionMessage (arr) {
      const message = {
        status: this.ratio >= arr[0] && this.ratio <= arr[1], // 是否在区间内
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
    // 设置样式-电脑
    padAnime (newRatio) {
      console.log(`translate('-50%', -${this.getComputedData(100, 50, newRatio)}%)`)
      this.componentViewNotebookAnime = {
        width: `${this.getComputedData(4080, 1440, newRatio)}px`,
        transform: `translate(-50%, ${this.getComputedData(100, -50, newRatio)}%)`
      }
    },
    // 设置样式-卡片
    cardAnime (newRatio) {
      console.log(`translate('-50%', -${this.getComputedData(100, 50, newRatio)}%)`)
      this.componentViewNotebookAnime = {
        width: `${this.getComputedData(4080, 1440, newRatio)}px`,
        transform: `translate(-50%, ${this.getComputedData(100, -50, newRatio)}%)`
      }
    },
    // 头部文案动画
    page1_animeStep1 (reversal) {
      this.padScrollSwitch = false
      return new Promise(async (resolve, reject) => {
        this.animeContinue = true
        const el = this.$refs.componentViewImgsContainerRef
        this.scrollTop = el.scrollTop = 0
        if (!reversal) {
          this.headerTextAnime = true
          await this.page1_animeStep2()
          await this.page1_animeStep3()
        } else {
          await this.page1_animeStep3(true)
          this.headerTextAnime = false
          await this.page1_animeStep2(true)
        }
        resolve(true)
        this.animeContinue = false
      })
    },
    // 组件视图区域
    page1_animeStep2 (reversal) {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          this.tableImgsPosition = reversal
          // 动画执行完成后
          this.$refs.componentViewNotebookRef.ontransitionend = (event) => {
            if (event.propertyName == 'transform') {
              resolve(true)
            }
          }
        })
      })
    },
    // 遮罩层+渲染新的数据动画
    page1_animeStep3 (reversal) {
      return new Promise((resolve, reject) => {
        if (this.timeStep3) {
          clearTimeout(this.timeStep3)
        }
        if (!reversal) {
          this.imgsAnimed = true
          this.isOverflowAutoPad = true
          setTimeout(_ => {
            this.padScrollSwitch = true
            resolve(true)
          }, 800)
        } else {
          this.imgsAnimed = false
          this.timeStep3 = setTimeout(() => {
            this.isOverflowAutoPad = false
            resolve(true)
          }, 800)
        }
      })
    },
    page1_animeStep4 (reversal) {
      EventBus.$emit('page1_animeStep4', reversal)
      this.padScrollSwitch = false
      return new Promise((resolve, reject) => {
        this.animeContinue = true
        const imgEl = this.$refs.imgRef9[1]
        if (imgEl) {
          const boundingClientRect = imgEl.getBoundingClientRect()
          this.imgConnectStyle = {
            width: imgEl.offsetWidth + 'px',
            height: imgEl.offsetHeight + 'px',
            opacity: 1,
            left: boundingClientRect.left + 'px',
            top: !reversal ? boundingClientRect.top + 'px' : `calc(${boundingClientRect.top}px + 150vh)`,
            zIndex: 1,
            transition: 'all 1s',
            display: 'block'
          }
          document.querySelector('.imgs_content_9').style.display = 'block'
          document.querySelector('.infinite-standard-card_img').style.display = 'none'
        }
        this.$nextTick(() => {
          setTimeout(() => {
            this.imgConnectAnime = !reversal
            this.animeCanvasAnime = !reversal
            setTimeout(() => {
              this.lastAnimeCompile = !reversal
              this.animeContinue = false

              if (reversal) {
                document.querySelector('.imgs_content_9').style.display = 'none'
              }
              if (reversal) {
                this.padScrollSwitch = true
              }
              resolve(true)
            }, 1000)
          }, 200)
        })
      })
    },
    onScroll (e) {
      let first = this.$refs.replaceScrollRef
      let second = this.$refs.componentViewImgsContainerRef
      second.scrollTop = first.scrollTop / (first.scrollHeight - first.clientHeight) * (second.scrollHeight - second.clientHeight)
    }
  },
  mounted () {
    document.body.addEventListener('mousewheel', (e) => {
      const event = e || window.event
      const el = this.$refs.componentViewImgsContainerRef
      if (el && this.padScrollSwitch) {
        let wheelDistance // 滑轮滚动距离
        if (e.wheelDelta) { // 判断浏览器IE，谷歌滑轮事件
          wheelDistance = e.wheelDelta
        } else if (e.detail) { // Firefox滑轮事件
          wheelDistance = e.detail
        }
        const scrollTopSpace = el.children[0].clientHeight - el.clientHeight
        // 判断是否不可以滚动了，此时需要走上一步或者下一步动画
        if ((el.scrollTop === 0 && wheelDistance > 0) || (scrollTopSpace - el.scrollTop < 1 && wheelDistance < 0) || this.lastAnimeCompile || this.animeContinue) {
          this.padScrollSwitch = false
        }
        event.stopPropagation()
        event.cancelBubble = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
@media screen and (min-width: 1360px) {
  @import "./index.scss";
}
</style>
