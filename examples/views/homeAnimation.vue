<template>
  <div :class="`infinite-home-animation-icon-page infinite-home-animation-icon-page-step${showAni}`">
    <button class="start" @click.stop="showAniFunc">start</button>
    <!-- <div class="infinite-icon-page-bg"></div> -->
    <div class="orange-circle" :class="showDefaultBg"></div>
    <div class="icon-bg-circle blue-circle" :class="bgAnimateName"></div>
    <div class="icon-bg-circle black-circle" :class="bgAnimateName"></div>
    <div class="infinite-icon-page-content flex fdc aic jcc">
      <div class="icons-introduce" :class="showIconsIntroduce">
        <h3 class="infinite-icon-page-title-h3">
        随心图标库
        </h3>
        <p class="infinite-icon-page-title-p-top">
          基于平安项目的矢量图标库，实时预览编辑、一键定制
        </p>
        <p class="infinite-icon-page-title-p-bottom">
          图标颜色、粗细等各种样式随心选择，完美贴合您的项目产品
        </p>
      </div>
  
      <div class="infinite-icon-page-window flex" :class="rotateAnimateName">
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
export default {
  components: {
  },
  data () {
    return {
      bgAnimateName: '',
      rotateAnimateName: '',
      showIconsIntroduce: '',
      showDefaultBg: '',
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
      this.bgAnimateName = 'circle-animate'
      this.showIconsIntroduce = 'slide-up-animate'
      this.showDefaultBg = 'slide-up-bg'
      if(this.rotateAnimateName === 'rotate-in'){
        this.rotateAnimateName = '';
      } else {
        this.rotateAnimateName = 'rotate-in';
      }
      if (this.bgAnimateName === 'circle-animate') {
        this.bgAnimateName = ''
        setTimeout(() => {
          this.bgAnimateName = 'circle-animate'
        }, 1000);
      }
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
        this.showAni = 0
      }, 6000)
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
  background: #fff;

  .start {
    position: fixed;
    top: 0;
    left: 0;
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
  .icon-bg-circle {
    position: absolute;
    left: -100vw;
    top: -70vw;
    margin:150px auto;
    width:100vw;
    height:100vw;
    border-radius: 50%;
    background: linear-gradient(180deg, #FFB240 0%, #FF8D38 100%);
  }
  .circle-animate {
    animation: circleWave 1s cubic-bezier(0.41, 0.14, 1, 0.74);
    animation-fill-mode:forwards;
  }
  // 随心图标库文字上滑动画
  .slide-up-animate {
    animation: slideUp 0.5s ease-out;
    animation-fill-mode:forwards;
    animation-delay: 0.5s;
  }
  // 第一个橙色背景上滑动画
  .slide-up-bg {
    animation: slideUpBg 0.6s cubic-bezier(0.44, 0.01, 1, 1);
    animation-fill-mode:forwards;
  }
  .rotate-in {
    animation: rotateIn 0.7s cubic-bezier(0.29, 0.07, 0.88, 0.8);
    animation-fill-mode:forwards;
  }
  .orange-circle {
    position: absolute;
    top: 100vh;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #FFB240 0%, #FF8D38 100%);
    opacity: 0;
  }
  .blue-circle {
    background: linear-gradient(180deg, #45AAFF 0%, #1890FF 100%);
    animation-delay: 2s;
  }
  .black-circle {
    background: linear-gradient(180deg, #32303F 0%, #201E2B 100%);
    animation-delay: 4s;
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
    .icons-introduce {
      position: absolute;
      opacity: 0;
      top: 7vw;
    }
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
      position: absolute;
      top: 20vh;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 42vw;
      height: 42vw;
      max-height: 58.5%;
      margin-top: 2.34vw;
      border-radius: 7px;

      //   top: -77vh;
      // left: 198vw;
      // transform: rotateZ(50deg) skewY(158deg) scale(5);
      // transform-origin: -128px -43px;
      // overflow: hidden;
      // box-shadow: 0 0 16px 8px rgba(24, 144, 255, 0.6);
      .infinite-icon-page-window-menu {
        width: 7.2vw;
        height: 100%;
        background: #1890FF;
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
        background: #f7fafc;
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
            // background: rgba(255,255,255,1);
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
                color: #1890FF;
              }
              .infinite-icon-page-li-icon-text {
                font-size: 0.6vw;
                color: #485968;
              } 
            }
          }
        }
      }
    }
  }
  
  &.infinite-home-animation-icon-page-step3,
  &.infinite-home-animation-icon-page-step5 {
    .infinite-icon-page-list-main {
      .infinite-icon-page-list-main-li {
        &:nth-child(1) {
          & .infinite-icon-page-li-beat {
            animation: '';
            animation: labelOfLiBeat .8s linear 0s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: '';
              animation: labelOfIconBeat .8s linear .3s;
            }
          }
        }
        &:nth-child(2) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear .3s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear .6s;
            }
          }
        }
        &:nth-child(5) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear .3s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear .6s;
            }
          }
        }
        &:nth-child(3) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear .6s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear .9s;
            }
          }
        }
        &:nth-child(6) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear .6s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear .9s;
            }
          }
        }
        &:nth-child(9) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear .6s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear .9s;
            }
          }
        }
        &:nth-child(4) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear .9s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear 1.2s;
            }
          }
        }
        &:nth-child(7) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear .9s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear 1.2s;
            }
          }
        }
        &:nth-child(10) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear .9s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear 1.2s;
            }
          }
        }
        &:nth-child(13) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear .9s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear 1.2s;
            }
          }
        }
        &:nth-child(8) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear 1.2s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear 1.5s;
            }
          }
        }
        &:nth-child(11) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear 1.2s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear 1.5s;
            }
          }
        }
        &:nth-child(14) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear 1.2s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear 1.5s;
            }
          }
        }
        &:nth-child(12) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear 1.5s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear 1.8s;
            }
          }
        }
        &:nth-child(15) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear 1.5s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear 1.8s;
            }
          }
        }
        &:nth-child(16) {
          & .infinite-icon-page-li-beat {
            animation: labelOfLiBeat .8s linear 1.8s;
          }
          & .infinite-icon-page-li-icon {
            .infinite-icon-page-li-icon-i {
              animation: labelOfIconBeat .8s linear 2.1s;
            }
          }
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
        box-shadow: 0 0 16px 8px rgba(0,0,0,0.2);
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
              background: rgba(255,255,255,0);
              .infinite-icon-page-li-beat {

              }
              .infinite-icon-page-li-icon {
                .infinite-icon-page-li-icon-i {
                  color: rgba(255,118,53,0);
                }
                .infinite-icon-page-li-icon-text {
                  color: rgba(72,89,104,0);
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
        // overflow: hidden;
        // box-shadow: 0 0 16px 8px rgba(24, 144, 255, 0.6);
        .infinite-icon-page-window-menu {
          width: 7.2vw;
          height: 100%;
          background: #1890FF;
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
              // background: rgba(255,255,255,1);
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
                  color: #1890FF;
                }
                .infinite-icon-page-li-icon-text {
                  font-size: 0.6vw;
                  color: #485968;
                } 
              }
            }
          }
        }
      }
    }
  }

  @keyframes labelOfLiBeat {
    0% {
      transform: translate(-16px, -20px);
      background: rgba(255,255,255,0);
    }
    50% {
      transform: translate(-0px, -0px);
      background: rgba(255,255,255,1);
      // background: rgba(255,255,255,0.9);
    }
    100% {
      // transform: translate(-0px, -0px);
      background: rgba(255,255,255,0);
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

  /* 背景纯色圆环仿水波效果 */
  @keyframes circleWave {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(3.5);
      top: -45vw;
    }
  }
  /* 元素以一定角度旋转飞入效果 */
  @keyframes rotateIn {
    0% {
      top: -77vh;
      left: 170vw;
      transform: rotateZ(50deg) skewY(158deg) scale(5);
      transform-origin: -128px -43px;
    }
    60% {
      top: -72vh;
    }
    100% {
      top: 20vh;
      left: 0vw;
      transform: rotateZ(0deg) skewY(180deg) scale(1);
      transform-origin: -128px -43px;
    }
  }
  @keyframes slideUp {
    0% {
      opacity: 0;
      top: 20vh;
    }
    100% {
      opacity: 1;
      top: 7vh;
    }
  }
  @keyframes slideUpBg {
    0% {
      opacity: 0;
      top: 100vh;
    }
    100% {
      opacity: 1;
      top: 0vh;
    }
  }
}
</style>
