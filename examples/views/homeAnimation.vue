<template>
  <div :class="`infinite-home-animation-icon-page infinite-home-animation-icon-page-step${showAni}`">
    <button class="start" @click.stop="showAniFunc">start</button>
    <button class="reset" @click.stop="showAniFuncReset">reset</button>
    <div class="infinite-icon-page-bg"></div>
    <div class="infinite-icon-page-content flex fdc aic jcc">
      <h3 class="infinite-icon-page-title-h3">
        随心图标库
      </h3>
      <p class="infinite-icon-page-title-p-top">
        基于平安项目的矢量图标库，实时预览编辑、一键定制
      </p>
      <p class="infinite-icon-page-title-p-bottom">
        图标颜色、粗细等各种样式随心选择，完美贴合您的项目产品
      </p>
      <div class="infinite-icon-page-window flex">
        <div class="infinite-icon-page-window-menu">
          <div class="infinite-icon-page-menu-top flex aic jcfs"><i class="el-icon-picture-outline"></i>Wireframe</div>
          <div class="infinite-icon-page-menu-center flex aic jcfs"><i class="el-icon-picture"></i>Filled</div>
          <div class="infinite-icon-page-menu-bottom flex aic jcfs"><i class="el-icon-picture-outline-round"></i>Mixed</div>
        </div>
        <div class="infinite-icon-page-window-icon-list">
          <div class="infinite-icon-page-list-mask"></div>
          <ul class="infinite-icon-page-list-main flex jcsb aic fww">
            <li 
              class="infinite-icon-page-list-main-li fn"
              v-for="(item, index) in iconList"
              :key="index"
            >
              <div class="infinite-icon-page-li-beat"></div>
              <div class="infinite-icon-page-li-icon flex fdc aic jcc">
                <i :class="`infinite-icon-page-li-icon-i ${item.icon}`"></i>
                <p class="infinite-icon-page-li-icon-text">{{item.text}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ElIcon from 'element-ui/lib/icon'
export default {
  components: {
    // ElIcon
  },
  data () {
    return {
      iconList: [
        {
          icon: 'el-icon-warning-outline',
          text: 'annotate'
        },
        {
          icon: 'el-icon-edit',
          text: 'edit'
        },
        {
          icon: 'el-icon-delete',
          text: 'delete'
        },
        {
          icon: 'el-icon-s-home',
          text: 'home'
        },
        {
          icon: 'el-icon-refresh',
          text: 'Refresh'
        },
        {
          icon: 'el-icon-chat-dot-square',
          text: 'message'
        },
        {
          icon: 'el-icon-date',
          text: 'calendar'
        },
        {
          icon: 'el-icon-picture-outline',
          text: 'Report'
        },
        {
          icon: 'el-icon-time',
          text: 'history'
        },
        {
          icon: 'el-icon-message',
          text: 'mail'
        },
        {
          icon: 'el-icon-share',
          text: 'share'
        },
        {
          icon: 'el-icon-search',
          text: 'search'
        },
        {
          icon: 'el-icon-setting',
          text: 'set'
        },
        {
          icon: 'el-icon-download',
          text: 'download'
        },
        {
          icon: 'el-icon-circle-close',
          text: 'shut down'
        },
        {
          icon: 'el-icon-document-copy',
          text: 'file'
        }
      ],
      showAni: 0
    }
  },
  methods: {
    showAniFunc () {
      // this.showAni = this.showAni > 4 ? 0 : this.showAni += 1
      // console.log('this.showAni == ', this.showAni)
      setTimeout(() => {
        this.showAni = 1
      }, 500)
      setTimeout(() => {
        this.showAni = 2
      }, 2000)
      setTimeout(() => {
        this.showAni = 3
      }, 2500)
      setTimeout(() => {
        this.showAni = 4
      }, 4000)
      setTimeout(() => {
        this.showAni = 5
      }, 4500)
      setTimeout(() => {
        this.showAni = 6
      }, 6000)
    },
    showAniFuncReset () {
      this.showAni = 0
    }
  },
  mounted () {
    document.body.style.overflow = 'auto'
  }
}
</script>
<style lang='scss' scoped>
.infinite-home-animation-icon-page {
  position: relative;
  width: 100vw;
  height: 100vh;

  .start {
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    height: 30px;
    z-index: 999;
  }
  .reset {
    position: fixed;
    top: 0;
    left: 60px;
    width: 60px;
    height: 30px;
    z-index: 999;
  }

  //****通用定义****//
  .flex {
    display: flex;
  }
  .fdc {
    flex-direction: column;
  }
  .aic {
    align-items: center;
  }
  .jcc {
    justify-content: center;
  }
  .jcsb {
    justify-content: space-between;
  }
  .jcfs {
    justify-content: flex-start;
  }
  .fn {
    flex: none;
  }
  .fww {
    flex-wrap: wrap;
  }

  //****非通用定义****//
  .infinite-icon-page-bg {
    width: 100%;
    height: 100%;
    // background-image: linear-gradient(180deg, #45AAFF 0%, #1890FF 100%); // 蓝
    // background-image: linear-gradient(180deg, #FFB240 0%, #FF8D38 100%); // 橙
  }
  .infinite-icon-page-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    font-family: PingFangSC-Semibold;
    .infinite-icon-page-title-h3 {
      font-size: 2.186vw;
      font-weight: 400;
      margin: 0;
    }
    .infinite-icon-page-title-p-top {
      font-size: 0.732vw;
      margin-top: 1.4vw;
    }
    .infinite-icon-page-title-p-bottom {
      font-size: 0.732vw;
      margin-top: 2px;
    }
    .infinite-icon-page-window {
      height: 42vw;
      max-height: 58.5%;
      margin-top: 2.34vw;
      border-radius: 7px;
      // overflow: hidden;
      // box-shadow: 0 0 16px 8px rgba(24, 144, 255, 0.6);
      box-shadow: 0 0 16px 8px rgba(0,0,0,0.1);
      .infinite-icon-page-window-menu {
        width: 7.2vw;
        height: 100%;
        // background: rgba(24,144,255,1);
        .infinite-icon-page-menu-top {
          height: 10.5%;
          margin-top: 29.4%;
          font-size: 8px;
          background: rgba(255, 255, 255, 0.16);
        }
        .infinite-icon-page-menu-center {
          height: 10.5%;
          margin-top: 14.4%;
          font-size: 8px;
        }
        .infinite-icon-page-menu-bottom {
          height: 10.5%;
          margin-top: 14.4%;
          font-size: 8px;
        }
        i {
          margin: 0 6px 0 12px;
        }
      }
      .infinite-icon-page-window-icon-list {
        height: 100%;
        // background: rgba(247,250,252,.8);
        .infinite-icon-page-list-mask {

        }
        .infinite-icon-page-list-main {
          box-sizing: border-box;
          // width: calc(43.2vw + 24.6px);
          // height: calc(35.2vw + 24.6px);
          width: 34.8vw;
          // height: 38.6vw;
          height: 100%;
          // max-height: 21.6%;
          padding: 1.6% 2.2%;
          .infinite-icon-page-list-main-li {
            position: relative;
            width: 24%;
            // height: 8.8vw;
            height: 23%;
            border-radius: 6px;
            background: rgba(255,255,255,0);
            // box-shadow: 0 0 4px 1px rgba(233, 231, 251, 1);
            .infinite-icon-page-li-beat {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 6px;
              z-index: 9;
              // animation: labelOfLiBeat .8s linear;
            }
            .infinite-icon-page-li-icon {
              height: 100%;
              .infinite-icon-page-li-icon-i {
                margin: 10%;
                font-size: 1.4vw;
                transform: translate(-0px, -0px);
                // color: #1890FF;
                opacity: 0;
              }
              .infinite-icon-page-li-icon-text {
                font-size: 0.6vw;
                // color: #485968;
                opacity: 0;
              } 
            }
          }
        }
      }
    }
  }
  
  .animationOfLi {
    &:nth-child(1) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear 0s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .15s;
        }
      }
    }
    &:nth-child(2) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .15s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .3s;
        }
      }
    }
    &:nth-child(5) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .15s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .3s;
        }
      }
    }
    &:nth-child(3) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .3s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .45s;
        }
      }
    }
    &:nth-child(6) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .3s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .45s;
        }
      }
    }
    &:nth-child(9) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .3s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .45s;
        }
      }
    }
    &:nth-child(4) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .45s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .6s;
        }
      }
    }
    &:nth-child(7) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .45s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .6s;
        }
      }
    }
    &:nth-child(10) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .45s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .6s;
        }
      }
    }
    &:nth-child(13) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .45s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .6s;
        }
      }
    }
    &:nth-child(8) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .6s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .75s;
        }
      }
    }
    &:nth-child(11) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .6s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .75s;
        }
      }
    }
    &:nth-child(14) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .6s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .75s;
        }
      }
    }
    &:nth-child(12) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .75s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .9s;
        }
      }
    }
    &:nth-child(15) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .75s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear .9s;
        }
      }
    }
    &:nth-child(16) {
      & .infinite-icon-page-li-beat {
        animation: labelOfLiBeat .4s linear .9s;
      }
      & .infinite-icon-page-li-icon {
        .infinite-icon-page-li-icon-i {
          animation: labelOfIconBeat .4s linear 1.05s;
        }
      }
    }
  }

  // 无
  &.infinite-home-animation-icon-page-step0 {
    .infinite-icon-page-bg {
      background-image: linear-gradient(180deg, #FFB240 0%, #FF8D38 100%); // 橙
    }
    .infinite-icon-page-content {
      .infinite-icon-page-title-h3 {

      }
      .infinite-icon-page-title-p-top {

      }
      .infinite-icon-page-title-p-bottom {

      }
      .infinite-icon-page-window {
        .infinite-icon-page-window-menu {
          background: rgba(255,141,56,1);
          .infinite-icon-page-menu-top {
            background: rgba(255,255,255,0.16);
          }
          .infinite-icon-page-menu-center {

          }
          .infinite-icon-page-menu-bottom {

          }
        }
        .infinite-icon-page-window-icon-list {
          background: rgba(247,250,252,1);
          .infinite-icon-page-list-mask {

          }
          .infinite-icon-page-list-main {
            .infinite-icon-page-list-main-li {
              // background: rgba(255,255,255,0);
              .infinite-icon-page-li-beat {

              }
              .infinite-icon-page-li-icon {
                .infinite-icon-page-li-icon-i {
                  // color: rgba(255,118,53,0);
                }
                .infinite-icon-page-li-icon-text {
                  // color: rgba(72,89,104,0);
                } 
              }
            }
          }
        }
      }
    }
  }
  
  // 无 => 橙
  &.infinite-home-animation-icon-page-step1 {
    .infinite-icon-page-bg {
      background-image: linear-gradient(180deg, #FFB240 0%, #FF8D38 100%); // 橙
    }
    .infinite-icon-page-content {
      .infinite-icon-page-title-h3 {

      }
      .infinite-icon-page-title-p-top {

      }
      .infinite-icon-page-title-p-bottom {

      }
      .infinite-icon-page-window {
        .infinite-icon-page-window-menu {
          // animation: sectionOfMenuTransparency 1.5s linear 0s;
          background: rgba(255,141,56,1);
          .infinite-icon-page-menu-top {
            background: rgba(255,255,255,0.16);
          }
          .infinite-icon-page-menu-center {

          }
          .infinite-icon-page-menu-bottom {
            
          }
          i {
            
          }
        }
        .infinite-icon-page-window-icon-list {
          background: rgba(247,250,252,1);
          .infinite-icon-page-list-mask {

          }
          .infinite-icon-page-list-main {
            .infinite-icon-page-list-main-li {
              &:nth-child(1) {
                animation: labelOfLi1 1.5s linear .2s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear 0s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .15s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .15s;
                  }
                }
              }
              &:nth-child(2) {
                animation: labelOfLi1 1.5s linear .35s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .15s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .3s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .3s;
                  }
                }
              }
              &:nth-child(5) {
                animation: labelOfLi1 1.5s linear .35s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .15s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .3s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .3s;
                  }
                }
              }
              &:nth-child(3) {
                animation: labelOfLi1 1.5s linear .5s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .3s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .45s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .45s;
                  }
                }
              }
              &:nth-child(6) {
                animation: labelOfLi1 1.5s linear .5s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .3s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .45s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .45s;
                  }
                }
              }
              &:nth-child(9) {
                animation: labelOfLi1 1.5s linear .5s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .3s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .45s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .45s;
                  }
                }
              }
              &:nth-child(4) {
                animation: labelOfLi1 1.5s linear .65s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(7) {
                animation: labelOfLi1 1.5s linear .65s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(10) {
                animation: labelOfLi1 1.5s linear .65s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(13) {
                animation: labelOfLi1 1.5s linear .65s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(8) {
                animation: labelOfLi1 1.5s linear .8s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .6s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .75s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .75s;
                  }
                }
              }
              &:nth-child(11) {
                animation: labelOfLi1 1.5s linear .8s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .6s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .75s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .75s;
                  }
                }
              }
              &:nth-child(14) {
                animation: labelOfLi1 1.5s linear .8s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .6s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .75s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .75s;
                  }
                }
              }
              &:nth-child(12) {
                animation: labelOfLi1 1.5s linear .95s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .75s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .9s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .9s;
                  }
                }
              }
              &:nth-child(15) {
                animation: labelOfLi1 1.5s linear .95s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .75s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear .9s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .9s;
                  }
                }
              }
              &:nth-child(16) {
                animation: labelOfLi1 1.5s linear 1.1s;
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .9s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat1 1.5s linear 1.05s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear 1.05s;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // 橙
  &.infinite-home-animation-icon-page-step2 {
    .infinite-icon-page-bg {
      background-image: linear-gradient(180deg, #FFB240 0%, #FF8D38 100%); // 橙
    }
    .infinite-icon-page-content {
      .infinite-icon-page-title-h3 {

      }
      .infinite-icon-page-title-p-top {

      }
      .infinite-icon-page-title-p-bottom {

      }
      .infinite-icon-page-window {
        .infinite-icon-page-window-menu {
          background: rgba(255,141,56,1);
          .infinite-icon-page-menu-top {
            background: rgba(255,255,255,0.16);
          }
          .infinite-icon-page-menu-center {

          }
          .infinite-icon-page-menu-bottom {

          }
        }
        .infinite-icon-page-window-icon-list {
          background: rgba(247,250,252,1);
          .infinite-icon-page-list-mask {

          }
          .infinite-icon-page-list-main {
            .infinite-icon-page-list-main-li {
              background: rgba(255,255,255,1);
              box-shadow: 0 0 4px 1px rgba(233, 231, 251, 1);
              .infinite-icon-page-li-beat {

              }
              .infinite-icon-page-li-icon {
                .infinite-icon-page-li-icon-i {
                  color: rgba(255,118,53,1);
                  opacity: 1;
                }
                .infinite-icon-page-li-icon-text {
                  color: rgba(72,89,104,1);
                  opacity: 1;
                } 
              }
            }
          }
        }
      }
    }
  }

  // 橙 => 蓝
  &.infinite-home-animation-icon-page-step3 {
    .infinite-icon-page-bg {
      background-image: linear-gradient(180deg, #45AAFF 0%, #1890FF 100%);
    }
    .infinite-icon-page-content {
      .infinite-icon-page-title-h3 {

      }
      .infinite-icon-page-title-p-top {

      }
      .infinite-icon-page-title-p-bottom {

      }
      .infinite-icon-page-window {
        .infinite-icon-page-window-menu {
          animation: sectionOfMenuTransparency3 1.5s linear 0s;
          .infinite-icon-page-menu-top {
            background: rgba(255,255,255,0.16);
          }
          .infinite-icon-page-menu-center {

          }
          .infinite-icon-page-menu-bottom {
            
          }
          i {
            
          }
        }
        .infinite-icon-page-window-icon-list {
          animation: sectionOfList 1.5s linear 0s;
          background: rgba(247,250,252,1);
          .infinite-icon-page-list-mask {

          }
          .infinite-icon-page-list-main {
            .infinite-icon-page-list-main-li {
              background: rgba(255,255,255,1);
              box-shadow: 0 0 4px 1px rgba(233, 231, 251, 1);
              .infinite-icon-page-li-icon {
                .infinite-icon-page-li-icon-i {
                  color: rgba(255,118,53,1);
                  opacity: 1;
                }
                .infinite-icon-page-li-icon-text {
                  color: rgba(72,89,104,1);
                  opacity: 1;
                } 
              }
              &:nth-child(1) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear 0s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .15s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .15s;
                  }
                }
              }
              &:nth-child(2) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .15s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .3s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .3s;
                  }
                }
              }
              &:nth-child(5) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .15s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .3s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .3s;
                  }
                }
              }
              &:nth-child(3) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .3s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .45s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .45s;
                  }
                }
              }
              &:nth-child(6) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .3s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .45s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .45s;
                  }
                }
              }
              &:nth-child(9) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .3s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .45s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .45s;
                  }
                }
              }
              &:nth-child(4) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(7) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(10) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(13) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(8) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .6s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .75s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .75s;
                  }
                }
              }
              &:nth-child(11) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .6s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .75s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .75s;
                  }
                }
              }
              &:nth-child(14) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .6s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .75s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .75s;
                  }
                }
              }
              &:nth-child(12) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .75s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .9s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .9s;
                  }
                }
              }
              &:nth-child(15) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .75s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear .9s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .9s;
                  }
                }
              }
              &:nth-child(16) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .9s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat3 1.5s linear 1.05s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear 1.05s;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // 蓝
  &.infinite-home-animation-icon-page-step4 {
    .infinite-icon-page-bg {
      background-image: linear-gradient(180deg, #45AAFF 0%, #1890FF 100%);
    }
    .infinite-icon-page-content {
      .infinite-icon-page-title-h3 {

      }
      .infinite-icon-page-title-p-top {

      }
      .infinite-icon-page-title-p-bottom {

      }
      .infinite-icon-page-window {
        .infinite-icon-page-window-menu {
          background: rgba(24,144,255,1);
          .infinite-icon-page-menu-top {
            background: rgba(255,255,255,0.16);
          }
          .infinite-icon-page-menu-center {

          }
          .infinite-icon-page-menu-bottom {

          }
        }
        .infinite-icon-page-window-icon-list {
          background: rgba(247,250,252,1);
          .infinite-icon-page-list-mask {

          }
          .infinite-icon-page-list-main {
            .infinite-icon-page-list-main-li {
              background: rgba(255,255,255,1);
              box-shadow: 0 0 4px 1px rgba(233, 231, 251, 1);
              .infinite-icon-page-li-beat {

              }
              .infinite-icon-page-li-icon {
                .infinite-icon-page-li-icon-i {
                  color: rgba(24,144,255,1);
                  opacity: 1;
                }
                .infinite-icon-page-li-icon-text {
                  color: rgba(72,89,104,1);
                  opacity: 1;
                } 
              }
            }
          }
        }
      }
    }
  }

  // 蓝 => 黑
  &.infinite-home-animation-icon-page-step5 {
    .infinite-icon-page-bg {
      background-image: linear-gradient(180deg, #32303F 0%, #201E2B 100%);
    }
    .infinite-icon-page-content {
      .infinite-icon-page-title-h3 {

      }
      .infinite-icon-page-title-p-top {

      }
      .infinite-icon-page-title-p-bottom {

      }
      .infinite-icon-page-window {
        .infinite-icon-page-window-menu {
          animation: sectionOfMenuTransparency5 1.5s linear 0s;
          .infinite-icon-page-menu-top {
            background: rgba(255,255,255,0.16);
          }
          .infinite-icon-page-menu-center {

          }
          .infinite-icon-page-menu-bottom {
            
          }
          i {
            
          }
        }
        .infinite-icon-page-window-icon-list {
          animation: sectionOfList 1.5s linear 0s;
          background: rgba(247,250,252,1);
          .infinite-icon-page-list-mask {

          }
          .infinite-icon-page-list-main {
            .infinite-icon-page-list-main-li {
              background: rgba(255,255,255,1);
              box-shadow: 0 0 4px 1px rgba(233, 231, 251, 1);
              .infinite-icon-page-li-icon {
                .infinite-icon-page-li-icon-i {
                  color: rgba(24,144,255,1);
                  opacity: 1;
                }
                .infinite-icon-page-li-icon-text {
                  color: rgba(72,89,104,1);
                  opacity: 1;
                } 
              }
              &:nth-child(1) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear 0s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .15s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .15s;
                  }
                }
              }
              &:nth-child(2) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .15s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .3s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .3s;
                  }
                }
              }
              &:nth-child(5) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .15s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .3s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .3s;
                  }
                }
              }
              &:nth-child(3) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .3s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .45s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .45s;
                  }
                }
              }
              &:nth-child(6) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .3s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .45s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .45s;
                  }
                }
              }
              &:nth-child(9) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .3s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .45s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .45s;
                  }
                }
              }
              &:nth-child(4) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(7) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(10) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(13) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .45s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .6s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .6s;
                  }
                }
              }
              &:nth-child(8) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .6s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .75s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .75s;
                  }
                }
              }
              &:nth-child(11) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .6s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .75s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .75s;
                  }
                }
              }
              &:nth-child(14) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .6s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .75s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .75s;
                  }
                }
              }
              &:nth-child(12) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .75s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .9s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .9s;
                  }
                }
              }
              &:nth-child(15) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .75s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear .9s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear .9s;
                  }
                }
              }
              &:nth-child(16) {
                & .infinite-icon-page-li-beat {
                  animation: labelOfLiBeat .4s linear .9s;
                }
                & .infinite-icon-page-li-icon {
                  .infinite-icon-page-li-icon-i {
                    animation: labelOfIconBeat5 1.5s linear 1.05s;
                  }
                  .infinite-icon-page-li-icon-text {
                    animation: labelOfTextBeat 1.5s linear 1.05s;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // 黑
  &.infinite-home-animation-icon-page-step6 {
    .infinite-icon-page-bg {
      background-image: linear-gradient(180deg, #32303F 0%, #201E2B 100%);
    }
    .infinite-icon-page-content {
      .infinite-icon-page-title-h3 {

      }
      .infinite-icon-page-title-p-top {

      }
      .infinite-icon-page-title-p-bottom {

      }
      .infinite-icon-page-window {
        .infinite-icon-page-window-menu {
          background: rgba(43,41,57,1);
          .infinite-icon-page-menu-top {
            background: rgba(255,255,255,0.16);
          }
          .infinite-icon-page-menu-center {

          }
          .infinite-icon-page-menu-bottom {

          }
        }
        .infinite-icon-page-window-icon-list {
          background: rgba(247,250,252,1);
          .infinite-icon-page-list-mask {

          }
          .infinite-icon-page-list-main {
            .infinite-icon-page-list-main-li {
              background: rgba(255,255,255,1);
              box-shadow: 0 0 4px 1px rgba(233, 231, 251, 1);
              .infinite-icon-page-li-beat {

              }
              .infinite-icon-page-li-icon {
                .infinite-icon-page-li-icon-i {
                  color: rgba(48,49,51,1);
                  opacity: 1;
                }
                .infinite-icon-page-li-icon-text {
                  color: rgba(72,89,104,1);
                  opacity: 1;
                } 
              }
            }
          }
        }
      }
    }
  }

  @keyframes labelOfLi1 {
    0% {
      background: rgba(255,255,255,1);
      box-shadow: 0 0 4px 1px rgba(233, 231, 251, 1);
    }
    100% {
      background: rgba(255,255,255,1);
      box-shadow: 0 0 4px 1px rgba(233, 231, 251, 1);
    }
  }

  @keyframes labelOfLiBeat {
    0% {
      transform: translate(-16px, -20px);
      background: rgba(255,255,255,0);
      box-shadow: 0 0 4px 1px rgba(233, 231, 251, 0);
    }
    50% {
      transform: translate(-0px, -0px);
      background: rgba(255,255,255,1);
      box-shadow: 0 0 4px 1px rgba(233, 231, 251, 1);
      // background: rgba(255,255,255,0.9);
    }
    51% {
      box-shadow: 0 0 4px 1px rgba(233, 231, 251, 0);
    }
    100% {
      // transform: translate(-0px, -0px);
      background: rgba(255,255,255,0);
    }
  }

  @keyframes labelOfTextBeat {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
      color: rgba(72,89,104,1);
    }
    50% {
      opacity: 1;
      color: rgba(72,89,104,1);
    }
    100% {
      opacity: 1;
      color: rgba(72,89,104,1);
    }
  }

  @keyframes labelOfIconBeat {
    0% {
      transform: translate(-6px, -14px);
      opacity: 0;
    }
    1% {
      transform: translate(-6px, -14px);
      opacity: 1;
    }
    25% {
      transform: translate(-6px, -14px);
      opacity: 1;
    }
    75% {
      transform: translate(-0px, -0px);
      opacity: 1;
    }
    100% {
      transform: translate(-0px, -0px);
      opacity: 1;
    }
  }

  @keyframes labelOfIconBeat1 {
    0% {
      transform: translate(-6px, -14px);
      opacity: 0;
      // color: rgba(255,118,53,1);
    }
    1% {
      transform: translate(-6px, -14px);
      opacity: 1;
      color: rgba(255,118,53,1);
    }
    5% {
      transform: translate(-6px, -14px);
      opacity: 1;
    }
    15% {
      transform: translate(-0px, -0px);
      opacity: 1;
    }
    100% {
      transform: translate(-0px, -0px);
      opacity: 1;
      color: rgba(255,118,53,1);
    }
  }

  @keyframes labelOfIconBeat3 {
    0% {
      transform: translate(-6px, -14px);
      opacity: 0;
      color: rgba(24,144,255,1);
    }
    1% {
      transform: translate(-6px, -14px);
      opacity: 1;
    }
    // 1~5是白色从出现到完全遮挡时间
    5% {
      transform: translate(-6px, -14px);
      opacity: 1;
    }
    15% {
      transform: translate(-0px, -0px);
      opacity: 1;
      color: rgba(24,144,255,1);
    }
    100% {
      transform: translate(-0px, -0px);
      opacity: 1;
      color: rgba(24,144,255,1);
    }
  }

  @keyframes labelOfIconBeat5 {
    0% {
      transform: translate(-6px, -14px);
      opacity: 0;
      color: rgba(48,49,51,1);
    }
    1% {
      transform: translate(-6px, -14px);
      opacity: 1;
    }
    // 1~5是白色从出现到完全遮挡时间
    5% {
      transform: translate(-6px, -14px);
      opacity: 1;
    }
    15% {
      transform: translate(-0px, -0px);
      opacity: 1;
      color: rgba(48,49,51,1);
    }
    100% {
      transform: translate(-0px, -0px);
      opacity: 1;
      color: rgba(48,49,51,1);
    }
  }

  @keyframes sectionOfMenuTransparency3 {
    0% {
      background: rgba(255,141,56,1);
      // opacity: 1;
    }
    25% {
      background: rgba(255,141,56,.5);
      // opacity: 1;
    }
    // 50% {
    //   opacity: .5;
    // }
    75% {
      background: rgba(24,144,255,.5);
      // opacity: 1;
    }
    100% {
      background: rgba(24,144,255,1);
      // opacity: 1;
    }
  }

  @keyframes sectionOfMenuTransparency5 {
    0% {
      background: rgba(24,144,255,1);
      // opacity: 1;
    }
    25% {
      background: rgba(24,144,255,.5);
      // opacity: 1;
    }
    // 50% {
    //   opacity: .5;
    // }
    75% {
      background: rgba(43,41,57,.5);
      // opacity: 1;
    }
    100% {
      background: rgba(43,41,57,1);
      // opacity: 1;
    }
  }
  @keyframes sectionOfList {
    0% {
      background: rgba(247,250,252,1);
    }
    15% {
      background: rgba(247,250,252,1);
    }
    50% {
      background: rgba(247,250,252,.8);
    }
    75% {
      background: rgba(247,250,252,1);
    }
    100% {
      background: rgba(247,250,252,1);
    }
  }
}
</style>
