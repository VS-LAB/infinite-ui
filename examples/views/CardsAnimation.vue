<template>
  <div class="anime-container">
    <div class="anime-canvas"
         ref="animeCanvasAnimeRef"
         :class="animeCanvasAnime">
      <div class="header_text"
           ref="headerTextRef"
           :class="headerTextAnime">
        <h1>全新可视化前端组件</h1>
        <p v-html="'一套基于 Vue 2.0 , 为平安内部前端开发者提供的桌面端组件库\r打造全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠的数据可视化组件'"></p>
      </div>
      <div class="component_view">
        <img ref="componentViewNotebookRef"
             class="component_view-notebook"
             :class="componentViewNotebookAnime"
             src="@/assets/component/notebook.png">
        <div class="component_view-container">
          <div class="component_view-imgs_padding">
            <div class="component_view-imgs-linear_gradient"
                 :class="imgsAnimed?'imgs_animed':''">
              <transition>
                <div ref="componentViewImgsContainerRef"
                     class="component_view-imgs_container"
                     :style="{overflow:isOverflowAutoPad?'hidden auto':''}">
                  <div class="imgs_container-table"
                       :class="tableImgsPosition">
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
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="img_connect imgs_content_9"
         :style="imgConnectStyle"
         :class="imgConnectAnime"
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
export default {
  name: 'CardsAnimation',
  data () {
    return {
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
      componentViewNotebookAnime: '', // 笔记本动画
      tableImgsPosition: 'table_imgs_position', // 图片集合初始化位置
      scrollTop: 0,
      imgsAnimed: false, // 是否开启遮罩及其他imgs数据
      timeStep3: null,
      imgConnectStyle: null,
      imgConnectAnime: '', // 连接下个图片图画
      lastAnimeCompile: false, // 最后一个动画状态
      animeContinue: false, // 动画是否进行当中
      isOverflowAutoPad: false,//是否在pad上进行滚动
      padScrollSwitch: false,//电脑上下滑动开关
      continueSlide: false,//持续滑动
    }
  },
  methods: {
    // 头部文案动画
    page1_animeStep1 (reversal) {
      this.padScrollSwitch = false
      return new Promise(async (resolve, reject) => {
        this.animeContinue = true
        const el = this.$refs.componentViewImgsContainerRef
        this.scrollTop = el.scrollTop = 0
        if (!reversal) {
          this.headerTextAnime = 'header_text-anime_start'
          await this.page1_animeStep2()
          await this.page1_animeStep3()
        } else {
          await this.page1_animeStep3(true)
          this.headerTextAnime = ''
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
          this.componentViewNotebookAnime = reversal ? '' : 'component_view-notebook-anime_start'
          this.tableImgsPosition = reversal ? 'table_imgs_position' : ''
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
            this.imgConnectAnime = reversal ? '' : 'img_connect-anime_start'
            this.animeCanvasAnime = reversal ? '' : 'anime-canvas-anime_start'
            setTimeout(() => {
              this.lastAnimeCompile = !reversal
              this.animeContinue = false
              this.$nextTick(() => {
                this.$refs.replaceScrollRef.focus()
              })
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
        this.$refs.replaceScrollRef.focus()
        event.stopPropagation()
        event.cancelBubble = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.anime-container {
  user-select: none;
  .img_connect {
    opacity: 0;
    position: fixed;
    pointer-events: none;
    box-shadow: 0px 0.9375vw 5.41667vw #dfe5f6;
  }

  .img_connect-anime_start {
    width: 650.11px !important;
    height: 450px !important;
    left: 50% !important;
    top: 50% !important;
    margin-top: 7.09vw;
    transform: translate(-50%, -50%);
  }

  // 替代滚动
  .replace_scroll {
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden auto;
    opacity: 0;
    &-placeholder {
      height: 400vh;
    }
  }
  // 画布动画
  .anime-canvas-anime_start {
    transform: translateY(-150vh);
  }
  // 画布
  .anime-canvas {
    height: 100%;
    background: #f3f7fe;
    overflow: hidden;
    transition: all 0.8s;

    // 头部文案动画 start
    .header_text {
      position: absolute;
      width: 100%;
      padding-top: 130px;
      text-align: center;
      transition: all 0.8s;
      z-index: 1;
      h1 {
        margin: 0 0 32px;
        font-size: 60px;
      }
      p {
        color: rgba(34, 34, 34, 0.6);
        font-size: 20px;
        line-height: 32px;
        white-space: break-spaces;
      }
    }
    .header_text-anime_start {
      transform: translateY(-100vh);
    }
    // 头部文案动画 end

    // 组件视图区域 start
    .component_view {
      width: 85%;
      height: 100vh;
      position: relative;
      z-index: 1;
      margin: 0 auto;
      box-sizing: border-box;
      text-align: center;
      &-container {
        position: relative;
        padding-bottom: calc(100% * 2028 / 3752);
        top: 50%;
        transform: translateY(-50%);
      }
      &-notebook {
        width: 4080px;
        position: fixed;
        left: 50%;
        top: 50%;
        transition: all 1s;
        transform: translate(-50%, 90vh);
      }
      .component_view-notebook-anime_start {
        transform: translate(-50%, -50%);
        width: 85%;
      }

      &-imgs_padding {
        padding: 3.4% 15.5% 7.47%;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
      }
      &-imgs-linear_gradient {
        height: 100%;
        position: relative;
        &::before {
          content: "";
          width: 100%;
          height: 24%;
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          transition: all 0.8s;
          opacity: 0;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
          z-index: 1;
          pointer-events: none;
        }
      }
      // 图片集合动画完成后
      .imgs_animed {
        &::before {
          opacity: 1;
        }
        .imgs_container-table {
          &-tr {
            &:nth-child(n + 2) {
              opacity: 1;
            }
            &-td {
              img {
                transition: inherit;
              }
            }
          }
        }
      }
      &-imgs_container {
        height: 100%;
        pointer-events: none;
        scrollbar-width: none; /* firefox */
        -ms-overflow-style: none; /* IE 10+ */
        &::-webkit-scrollbar {
          display: none;
        }

        .imgs_container-table {
          width: 100%;
          padding-top: 1%;
          &-tr {
            display: flex;
            padding: 0 1%;
            transition: all 0.8s;
            &:nth-child(7) {
              padding-bottom: 4vw;
            }
            &:nth-child(n + 2) {
              opacity: 0;
            }
            & + .imgs_container-table-tr {
              margin-top: -7px;
            }
            &.imgs-col_5 {
              .imgs_container-table-tr-td:nth-child(1) {
                width: 18.4%;
              }
              .imgs_container-table-tr-td:nth-child(2) {
                width: 24.1%;
              }
              .imgs_container-table-tr-td:nth-child(3) {
                width: 23.3%;
              }
              .imgs_container-table-tr-td:nth-child(4) {
                width: 15.9%;
              }
              .imgs_container-table-tr-td:nth-child(5) {
                width: 18.3%;
              }
            }
            &.imgs-col_3 {
              .imgs_container-table-tr-td:nth-child(1) {
                width: 24.14%;
              }
              .imgs_container-table-tr-td:nth-child(2) {
                width: 40.08%;
              }
              .imgs_container-table-tr-td:nth-child(3) {
                width: 35.78%;
              }
            }
            &-td {
              padding: 1%;
              box-sizing: border-box;
              position: relative;
              vertical-align: top;
              img {
                position: relative;
                width: 100%;
                transition: all 1s;
                transform-origin: 0 0;
                box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
                border-radius: 12px;
                + img {
                  margin-top: calc(0.9vw - 4px);
                }
              }

              .imgs_1,
              .imgs_5,
              .imgs_16 {
                transition-duration: 1.2s;
              }
              .imgs_7 {
                width: 35.4vw;
              }
              .imgs_18,
              .imgs_19 {
                width: 23vw;
              }
              .imgs_23 {
                width: 11.6vw;
                left: 5.1vw;
              }
              .imgs_24 {
                width: 32.4vw;
                left: 10.3vw;
              }
            }
          }
        }
        .table_imgs_position {
          $start_position_x: -28vw;
          $start_position_y: 13vw;
          // 第一列
          .imgs_1 {
            transform: translate($start_position_x, $start_position_y) scale(2);
          }
          .imgs_5 {
            transform: translate($start_position_x, $start_position_y + 19)
              scale(2);
          }
          // 第二列
          .imgs_2 {
            transform: translate($start_position_x + 11, $start_position_y)
              scale(2);
          }
          .imgs_6 {
            transform: translate(
                $start_position_x + 11,
                $start_position_y + 10.4
              )
              scale(2);
          }
          .imgs_7 {
            transform: translate(
                $start_position_x + 11,
                $start_position_y + 24.4
              )
              scale(2);
          }

          // 第三列
          .imgs_3 {
            transform: translate($start_position_x + 25, $start_position_y)
              scale(2);
          }
          .imgs_9 {
            transform: translate($start_position_x + 25, $start_position_y + 7)
              scale(2);
          }
          .imgs_10 {
            transform: translate($start_position_x + 25, $start_position_y + 19)
              scale(2);
          }

          // 第四列
          .imgs_12 {
            transform: translate($start_position_x + 38.5, $start_position_y)
              scale(2);
          }
          .imgs_13 {
            transform: translate(
                $start_position_x + 38.5,
                $start_position_y + 14.4
              )
              scale(2);
          }
          .imgs_15 {
            transform: translate($start_position_x + 47.5, $start_position_y)
              scale(2);
          }
          .imgs_16 {
            transform: translate(
                $start_position_x + 47.5,
                $start_position_y + +16.7
              )
              scale(2);
          }
        }
      }
    }
    // 组件视图区域 end
  }
}
</style>
