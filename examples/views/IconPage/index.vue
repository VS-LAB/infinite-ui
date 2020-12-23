<template>
  <div class="template-container">
    <div :class="`infinite-home-animation-icon-page infinite-home-animation-icon-page-step${showAni}`">
      <!-- <button class="start" @click.stop="showAniFunc">start</button> -->
      <!-- <button class="reset" @click.stop="showAniFuncReset">reset</button> -->
      <!-- <div class="infinite-icon-page-bg"></div> -->
      <div class="icon-bg-move orange-circle" :class="showDefaultBg"></div>
      <div class="icon-bg-move icon-bg-circle blue-circle" :class="blueBgAnimateName"></div>
      <div class="icon-bg-move icon-bg-circle black-circle" :class="blackBgAnimateName"></div>
      <!-- <div :class="bgIconPageAnimateName"></div> -->
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
  </div>
</template>

<script>
export default {
  name: 'IconPage',
  components: {
  },
  props: {
    pageCurrentZindex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      // pageOneAnimateName: '', // 第一个页面动画
      blueBgAnimateName: '',
      blackBgAnimateName: '',
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
      showAni: 0, // 动画状态
      timing: 500, // 动画开始时间
      // pageOneZindex: 0,
      // pageTwoZindex: 0
      bgIconPageAnimateName: '',
      animesFun: [this.page3_showAniStep1, this.page3_showAniStep2, this.page3_showAniStep3, this.page3_showAniStep4, this.page3_showAniStep5]
    }
  },
  watch: {
    // pageCurrentZindex: {
    //   handler (val) {
    //     console.log('pageCurrentZindex -watch == ', this.pageCurrentZindex)
    //     if (val === 3) {
    //       this.showAniFunc()
    //     } else {
    //       this.bgAnimateName = ''
    //       this.rotateAnimateName = ''
    //       this.showIconsIntroduce = ''
    //       this.showDefaultBg = ''
    //       this.showAni = 0
    //     }
    //   }
    // }
  },
  methods: {
    // 
    page3_showAniStep1 (reversal) {
      return new Promise((resolve, reject) => {
        if (!reversal) {
          this.showIconsIntroduce = 'slide-up-animate'
          this.showDefaultBg = 'slide-up-bg'
          this.rotateAnimateName = 'rotate-in'
          this.bgIconPageAnimateName = 
          setTimeout(_ => {
            resolve(true)
          }, 700)
        } else {
          this.showIconsIntroduce = ''
          this.showDefaultBg = ''
          this.rotateAnimateName = ''
          setTimeout(_ => {
            resolve(true)
          }, 1500)
        }
      })
    },
    // 
    page3_showAniStep2 (reversal) {
      return new Promise((resolve, reject) => {
        const _that = this
        if (!reversal) {
          _that.showAni = 1
          setTimeout(_ => {
            _that.showAni = 2
            // setTimeout(_ => {
            resolve(true)
            // }, 500)
          }, 1500)
        } else {
          // setTimeout(_ => {
          _that.showAni = 0
          resolve(true)
          // }, 1500)
        }
      })
    },
    // 
    page3_showAniStep3 (reversal) {
      return new Promise((resolve, reject) => {
        const _that = this
        if (!reversal) {
          this.blueBgAnimateName = 'circle-animate'
          setTimeout(_ => {
            _that.showAni = 3
            setTimeout(_ => {
              _that.showAni = 4
              // setTimeout(_ => {
              resolve(true)
            // }, 500)
            }, 1500)
          }, 500)
        } else {
          // setTimeout(_ => {
          _that.showAni = 2
          this.blueBgAnimateName = ''
          resolve(true)
          // }, 1500)
        }
      })
    },
    // 
    page3_showAniStep4 (reversal) {
      return new Promise((resolve, reject) => {
        const _that = this
        if (!reversal) {
          this.blackBgAnimateName = 'circle-animate'
          setTimeout(_ => {
            _that.showAni = 5
            setTimeout(_ => {
              _that.showAni = 6
              // setTimeout(_ => {
              resolve(true)
            // }, 500)
            }, 1500)
          }, 500)
        } else {
          // setTimeout(_ => {
          this.blackBgAnimateName = ''
          _that.showAni = 4
          resolve(true)
          // }, 1500)
        }
      })
    },
    // 
    page3_showAniStep5 (reversal) {
      return new Promise((resolve, reject) => {
        const _that = this
        if (!reversal) {
          // this.blackBgAnimateName = 'circle-animate'
          setTimeout(_ => {
            _that.showAni = 7
            setTimeout(_ => {
              // _that.showAni = 6
              // setTimeout(_ => {
              resolve(true)
            // }, 500)
            }, 500)
          }, 500)
        } else {
          // setTimeout(_ => {
          // this.blackBgAnimateName = ''
          _that.showAni = 6
          resolve(true)
          // }, 1500)
        }
      })
    },
    showAniFunc () {
      // <div class="orange-circle" :class="showDefaultBg"></div>
      // <div class="icon-bg-circle blue-circle" :class="bgAnimateName"></div>
      // <div class="icon-bg-circle black-circle" :class="bgAnimateName"></div>
      // this.pageTwoZindex = 1

      this.bgAnimateName = 'circle-animate'
      // this.showIconsIntroduce = 'slide-up-animate'
      // this.showDefaultBg = 'slide-up-bg'
      console.log('this.rotateAnimateName', this.rotateAnimateName)
      if (this.rotateAnimateName === 'rotate-in') {
        this.rotateAnimateName = ''
      } else {
        // this.rotateAnimateName = 'rotate-in'
      }
      console.log('this.rotateAnimateName after', this.rotateAnimateName)

      if (this.bgAnimateName === 'circle-animate') {
        this.bgAnimateName = ''
        setTimeout(() => {
          this.bgAnimateName = 'circle-animate'
        }, 1000)
      }
      // this.showAni = this.showAni > 4 ? 0 : this.showAni += 1
      // console.log('this.showAni == ', this.showAni)
      setTimeout(() => {
        this.showAni = 1
      }, this.timing + 500)
      setTimeout(() => {
        this.showAni = 2
      }, this.timing + 2000)
      setTimeout(() => {
        this.showAni = 3
      }, this.timing + 2500)
      setTimeout(() => {
        this.showAni = 4
      }, this.timing + 4000)
      setTimeout(() => {
        this.showAni = 5
      }, this.timing + 4500)
      setTimeout(() => {
        this.showAni = 6
      }, this.timing + 6000)
    },
    showAniFuncReset () {
      this.showAni = 0
    }
  },
  mounted () {
    // document.body.style.overflow = 'auto'
    // setTimeout(() => {
    //   this.pageOneAnimateName = 'slide-up-animate'
    //   this.pageOneZindex = 1
    // }, 2000)

    // function debounce (fn, wait, immediate) {
    //   immediate = immediate || false
    //   var timer = null
    //   var count = 0
    //   return function () {
    //     var _this = this
    //     var _arg = arguments
    //     clearTimeout(timer)
    //     if (immediate) {
    //       fn.apply(_this, _arg)
    //       count++
    //     } else {
    //       timer = setTimeout(function () {
    //         console.log(this)
    //         fn.apply(_this, _arg)
    //         count++
    //       }, wait)
    //     }
    //   }
    // }

    // windowAddMouseWheel()
    // let self = this
    // function windowAddMouseWheel () {
    //   var scrollFunc = function (e) {
    //     e = e || window.event
    //     let wheelDistance // 滑轮滚动距离
    //     if (e.wheelDelta) { // 判断浏览器IE，谷歌滑轮事件
    //       wheelDistance = e.wheelDelta
    //     } else if (e.detail) { // Firefox滑轮事件
    //       wheelDistance = e.detail
    //     }
    //     if (wheelDistance > 0) { // 当滑轮向上滚动时
    //       console.log('滑轮向上滚动')
    //     }
    //     if (wheelDistance < 0) { // 当滑轮向下滚动时
    //       self.showAniFunc()
    //     }
    //   }
    //   // 给页面绑定滑轮滚动事件
    //   if (document.addEventListener) {
    //     document.addEventListener('DOMMouseScroll', debounce(scrollFunc, 300), false)
    //   }
    //   // 滚动滑轮触发scrollFunc方法
    //   document.addEventListener('mousewheel', debounce(scrollFunc, 300))
    // }
  }
}
</script>
<style lang='scss' scoped>
  @import "./index.scss";
</style>
