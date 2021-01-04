<template>
  <div class="anime-container" @wheel="mousewheelCallBack">
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
      <div class="component_view"
           :class="{
                       'component_view_position':tableImgsPosition
                     }">
        <img ref="componentViewNotebookRef"
             class="component_view-notebook"
             :class="{
               'component_view-notebook-anime_start':componentViewNotebookAnime
             }"
             src="@/assets/component/notebook.png">
        <div class="component_view-container">
          <div class="component_view-imgs_padding">
            <div class="component_view-imgs-linear_gradient"
                 :class="{
                   'imgs_animed':imgsAnimed
                 }">
              <div ref="componentViewImgsContainerRef"
                   class="component_view-imgs_container"
                   :style="{overflowY:isOverflowAutoPad?'hidden':''}">
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
         :src="require(`@/assets/bigcardComponentBefore.png`)"
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
      animesFun: [this.page1_animeStep1, this.page1_animeStep4],
      stepFun: [this.page1_step1, this.page1_step4],
      standardScale: 1,
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
      componentViewNotebookAnime: '', // 笔记本动画
      tableImgsPosition: true, // 图片集合初始化位置
      imgsAnimed: false, // 是否开启遮罩及其他imgs数据
      timeStep3: null,
      imgConnectStyle: null,
      recordStartImgConnectStyle: null,
      recordEndImgConnectAnime: null, // 连接下个图片图画
      imgConnectAnime: false,
      lastAnimeCompile: false, // 最后一个动画状态
      animeContinue: false, // 动画是否进行当中
      isOverflowAutoPad: false, // 是否在pad上进行滚动
      padScrollSwitch: false, // 电脑上下滑动开关
      continueSlide: false // 持续滑动
    }
  },
  methods: {
    // 头部文案动画
    page1_animeStep1 (reversal) {
      this.padScrollSwitch = false
      return new Promise(async (resolve, reject) => {
        this.animeContinue = true
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
    page1_step1 (reversal) {
      this.padScrollSwitch = false
      return new Promise(async (resolve, reject) => {
        this.animeContinue = true
        const componentViewImgsContainerRefEl = this.$refs.componentViewImgsContainerRef
        const replaceScrollRefEl = this.$refs.replaceScrollRef
        const replace_scroll = document.getElementsByClassName('replace_scroll')[0]
        if (!reversal) {
          this.headerTextAnime = true
          await this.page1_step2()
          await this.page1_step3()
          replaceScrollRefEl.style.display = 'block'
          componentViewImgsContainerRefEl.scrollTop = componentViewImgsContainerRefEl.children[0].clientHeight - componentViewImgsContainerRefEl.clientHeight
           replaceScrollRefEl.scrollTop =  replaceScrollRefEl.children[0].clientHeight - replaceScrollRefEl.clientHeight
        } else {
          await this.page1_step3(true)
          this.headerTextAnime = false
          await this.page1_step2(true)
          replaceScrollRefEl.style.display = 'block'
          componentViewImgsContainerRefEl.scrollTop = replaceScrollRefEl.scrollTop = 0
        }
          replaceScrollRefEl.style.display = 'none'
      // if (replace_scroll) { // 重置scroll滚动值
      //   replace_scroll.scrollTop = 0
      // }
        resolve(true)
        this.animeContinue = false
      })
    },
    // 组件视图区域
    page1_animeStep2 (reversal) {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          this.componentViewNotebookAnime = !reversal
          this.tableImgsPosition = reversal
          // 动画执行完成后
          setTimeout(() => {
            resolve(true)
          }, 1000)
        })
      })
    },
    page1_step2 (reversal) {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          this.componentViewNotebookAnime = !reversal
          this.tableImgsPosition = reversal
          // 动画执行完成后
          // setTimeout(() => {
          resolve(true)
          // }, 1000)
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
          }, 200)
        } else {
          this.imgsAnimed = false
          this.timeStep3 = setTimeout(() => {
            this.isOverflowAutoPad = false
            resolve(true)
          }, 200)
        }
      })
    },
    page1_step3 (reversal) {
      return new Promise((resolve, reject) => {
        // if (this.timeStep3) {
        //   clearTimeout(this.timeStep3)
        // }
        if (!reversal) {
          this.imgsAnimed = true
          this.isOverflowAutoPad = true
          // setTimeout(_ => {
          this.padScrollSwitch = true
          resolve(true)
          // }, 200)
        } else {
          this.imgsAnimed = false
          // this.timeStep3 = setTimeout(() => {
          this.isOverflowAutoPad = false
          resolve(true)
          // }, 200)
        }
      })
    },
    page1_animeStep4 (reversal) {
      this.padScrollSwitch = false
      EventBus.$emit('page1_animeStep4', reversal)
      return new Promise((resolve, reject) => {
        const standardCaedImgEl = document.querySelector('.infinite-standard-card_img')
        standardCaedImgEl.style.display = 'block'
        const connectImgElientRect = standardCaedImgEl.getBoundingClientRect()
        this.animeContinue = true
        const imgEl = this.$refs.imgRef9[1]
        if (imgEl) {
          const boundingClientRect = imgEl.getBoundingClientRect()
          this.recordStartImgConnectStyle = {
            width: imgEl.offsetWidth + 'px',
            height: imgEl.offsetHeight + 'px',
            left: boundingClientRect.left + 'px',
            top: !reversal ? boundingClientRect.top + 'px' : `calc(${boundingClientRect.top}px + 150vh)`,
            display: 'block'
          }
          this.recordEndImgConnectStyle = {
            width: `${connectImgElientRect.width}px`,
            height: `${connectImgElientRect.height}px`,
            top: `${connectImgElientRect.top}px`,
            left: `${connectImgElientRect.left}px`
          }
          document.querySelector('.imgs_content_9').style.display = 'block'
          standardCaedImgEl.style.display = 'none'
          this.imgConnectStyle = reversal ? this.recordEndImgConnectStyle : this.recordStartImgConnectStyle
        }
        this.$nextTick(() => {
          setTimeout(() => {
            this.imgConnectStyle = reversal ? this.recordStartImgConnectStyle : this.recordEndImgConnectStyle
            this.imgConnectAnime = !reversal
            this.animeCanvasAnime = !reversal
            setTimeout(() => {
              this.lastAnimeCompile = !reversal
              this.animeContinue = false
              if (reversal) {
                document.querySelector('.imgs_content_9').style.display = 'none'
                standardCaedImgEl.style.display = 'block'
                this.padScrollSwitch = true
              }
              resolve(true)
            }, 1000)
          }, 200)
        })
      })
    },
    page1_step4 (reversal) {
      this.padScrollSwitch = false
      EventBus.$emit('page1_animeStep4', reversal)
      return new Promise((resolve, reject) => {
        const standardCaedImgEl = document.querySelector('.infinite-standard-card_img')
        const connectImgElientRect = standardCaedImgEl.getBoundingClientRect()
        this.animeContinue = true
        const imgEl = this.$refs.imgRef9[1]
        console.log('imgEl ---- ', imgEl)
        if (imgEl) {
          const boundingClientRect = imgEl.getBoundingClientRect()
          this.recordStartImgConnectStyle = {
            width: imgEl.offsetWidth + 'px',
            height: imgEl.offsetHeight + 'px',
            opacity: 1,
            left: boundingClientRect.left + 'px',
            top: !reversal ? boundingClientRect.top + 'px' : `calc(${boundingClientRect.top}px + 150vh)`,
            display: 'block'
          }
          this.recordEndImgConnectStyle = {
            width: `${connectImgElientRect.width}px`,
            height: `${connectImgElientRect.height}px`,
            left: `50% `,
            top: `${connectImgElientRect.top}px`,
            transform: `translateX(-50%)`
          }
          // document.querySelector('.imgs_content_9').style.display = 'block'
          standardCaedImgEl.style.display = 'none'
          this.imgConnectStyle = reversal ? this.recordEndImgConnectStyle : this.recordStartImgConnectStyle
        }
        this.$nextTick(() => {
          this.imgConnectStyle = reversal ? this.recordStartImgConnectStyle : this.recordEndImgConnectStyle
          this.imgConnectAnime = !reversal
          this.animeCanvasAnime = !reversal
          this.lastAnimeCompile = !reversal
          this.animeContinue = false
          console.log('reversal ---- ', reversal)
          if (reversal) {
            console.log('nex ---- ', document.querySelector('.imgs_content_9'))
            document.querySelector('.imgs_content_9').style.display = 'none'
            standardCaedImgEl.style.display = 'block'
            this.padScrollSwitch = true
          }
          resolve(true)
        })
      })
    },
    onScroll (e) {
      let first = this.$refs.replaceScrollRef
      let second = this.$refs.componentViewImgsContainerRef
      const secondHeightDifference = second.children[0].clientHeight - second.clientHeight
      const scrollTop = first.scrollTop / (first.children[0].clientHeight - first.clientHeight) * secondHeightDifference
      second.scrollTop = scrollTop >= secondHeightDifference ? secondHeightDifference : scrollTop
    },
    mousewheelCallBack (e) {
      const event = e || window.event
      const el = this.$refs.replaceScrollRef
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
    }
  },
  mounted () {
    EventBus.$on('standardScale', (scale) => {
      this.standardScale = scale
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
