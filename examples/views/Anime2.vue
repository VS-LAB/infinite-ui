<template>
  <div class="anime-container">
    <div class="anime-canvas"
         ref="animeCanvasAnimeRef"
         :class="animeCanvasAnime">
      <!-- <div style="position:fixed;z-index:10">
      <button @click="()=>{statusStep1 =!statusStep1;animeStep1(statusStep1)}">步骤1</button>
      <button @click="()=>{statusStep2 =!statusStep2;animeStep2(statusStep2)}">步骤2</button>
      <button @click="()=>{statusStep3 = !statusStep3;animeStep3(statusStep3)}">步骤3</button>
    </div> -->
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
              <div class="component_view-imgs_container"
                   :style="{overflow:imgCards.length > 1?'hidden auto':''}">
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="img_connect"
         :style="imgConnectStyle"
         :class="imgConnectAnime"
         :src="require(`@/assets/component/card (9).png`)"
         alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 图片数据
      imgCards: [],
      initImgCards: [
        {
          col: 5,
          data: [
            [1, 5],
            [2, 6, 7],
            [3, 9, 10],
            [12, 13],
            [15, 16],
          ]
        },
      ],
      addImgCards: [
        {
          data: [
            [4],
            [11],
            [14],
          ]
        },
        {
          col: 3,
          data: [
            [17, 18, 19],
            [22, 23, 24],
            [27, 28],
          ]
        },
        {
          data: [
            [20],
            [25],
            [8],
          ]
        },
        {
          data: [
            [21],
            [26],
          ]
        },
        {
          col: 5,
          data: [
            [1, 5],
            [2, 6, 7],
            [3, 9, 10],
            [12, 13],
            [15, 16],
          ]
        },
        {
          data: [
            [4],
            [11],
            [14],
          ]
        },
      ],
      animeCanvasAnime: '',//
      headerTextAnime: '',//头部文案动画
      componentViewNotebookAnime: '',// 笔记本动画
      tableImgsPosition: 'table_imgs_position',//图片集合初始化位置
      imgsAnimed: false,//是否开启遮罩及其他imgs数据
      statusStep1: true,
      statusStep2: true,
      statusStep3: true,
      timeStep3: null,
      imgConnectStyle: {},
      imgConnectAnime: ''
    }
  },
  methods: {
    initParams () {
      this.headerTextAnime = ''
      this.componentViewNotebookAnime = ''
      this.tableImgsPosition = 'table_imgs_position'
      this.imgsAnimed = false
      setTimeout(() => {
        this.imgCards = [...this.initImgCards]
        this.init()
      })
    },
    init () {
      setTimeout(async () => {
        this.animeStep1()
        await this.animeStep2()
        await this.animeStep3()
        setTimeout(async () => {
          await this.animeStep4()
        }, 3000)
        // await this.animeStep4(true)
        // await this.animeStep3(true)
        // this.animeStep1(true)/
        // await this.animeStep2(true)
        // this.initParams()
      })
    },
    // 头部文案动画
    animeStep1 (reversal) {
      return new Promise((resolve, reject) => {
        this.headerTextAnime = reversal ? '' : 'header_text-anime_start'
      })
    },
    // 组件视图区域
    animeStep2 (reversal) {
      return new Promise((resolve, reject) => {
        this.componentViewNotebookAnime = reversal ? '' : 'component_view-notebook-anime_start'
        this.tableImgsPosition = reversal ? 'table_imgs_position' : ''
        // 动画执行完成后
        this.$refs.componentViewNotebookRef.ontransitionend = (event) => {
          if (event.propertyName == 'transform') {
            resolve()
          }
        }
      })
    },
    // 遮罩层+渲染新的数据动画
    animeStep3 (reversal) {
      return new Promise((resolve, reject) => {
        if (this.timeStep3) {
          clearTimeout(this.timeStep3)
        }
        if (!reversal) {
          this.imgCards = [...this.initImgCards, ...this.addImgCards]
          this.timeStep3 = setTimeout(() => {
            this.imgsAnimed = true
          })
          setTimeout(_ => {
            resolve()
          }, 800)
        } else {
          this.imgsAnimed = false
          this.timeStep3 = setTimeout(() => {
            this.imgCards = [...this.initImgCards]
            resolve()
          }, 800)
        }

      })
    },
    animeStep4 (reversal) {
      return new Promise((resolve, reject) => {
        const imgEl = this.$refs.imgRef9[1]
        const boundingClientRect = imgEl.getBoundingClientRect()
        this.imgConnectStyle = {
          width: imgEl.offsetWidth + 'px',
          height: imgEl.offsetHeight + 'px',
          opacity: 1,
          left: boundingClientRect.left + 'px',
          top: boundingClientRect.top + 'px',
          zIndex: 1,
          transition: 'all 1s'
        }
        setTimeout(() => {
          this.imgConnectAnime = reversal ? "" : 'img_connect-anime_start'
        })
        this.animeCanvasAnime = reversal ? '' : 'anime-canvas-anime_start'
        this.$refs.animeCanvasAnimeRef.ontransitionend = (event) => {
          if (event.propertyName == 'transform') {
            resolve()
          }
        }
      })
    }
  },
  mounted () {
    this.imgCards = [...this.initImgCards]
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.anime-container {
  .img_connect {
    opacity: 0;
    position: fixed;
    pointer-events: none;
  }
  .img_connect-anime_start {
    width: 500px !important;
    height: 300px !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
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
    transition: all 1s;

    // 头部文案动画 start
    .header_text {
      position: absolute;
      width: 100%;
      padding-top: 130px;
      text-align: center;
      transition: all 1s;
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
