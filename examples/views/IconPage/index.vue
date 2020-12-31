<template>
  <div class="template-container">
    <div :class="`infinite-home-animation-icon-page
      infinite-home-animation-icon-page-step${showAni}
      ${noShow ? 'infinite-home-animation-icon-page-noShow' : ''}
      flex aic jcc`">
      <div class="orange-circle" :class="`${showDefaultBg} ${orangeBgAnimateName}`" :style="{zIndex: bgAnimateNameZindex === 0 ? 1 : ''}"></div>
      <div class="icon-bg-circle or-circle" :class="orBgAnimateName" :style="{zIndex: bgAnimateNameZindex === 1 ? 2 : ''}"></div>
      <div class="icon-bg-circle blue-circle" :class="blueBgAnimateName" :style="{zIndex: bgAnimateNameZindex === 2 ? 3 : ''}"></div>
      <div class="icon-bg-circle black-circle" :class="blackBgAnimateName" :style="{zIndex: bgAnimateNameZindex === 3 ? 4 : ''}"></div>
      <div class="infinite-icon-page-content flex fdc aic jcc">
        <!-- title -->
        <div class="icons-introduce flex fdc aic jcfe"
             :class="showIconsIntroduce">
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
        <!-- end of title -->
        <!-- 中间白色区域 -->
        <div class="infinite-icon-page-window flex">
          <!-- 白色区域旋转动画部分 -->
          <div class="infinite-icon-page-window-bg flex"
               :class="rotateAnimateName">
            <!-- 左侧菜单 -->
            <div class="infinite-icon-page-window-menu">
              <div class="infinite-icon-page-menu-top flex aic jcfs">
                <div :class="`infinite-icon-page-menu-i`">
                  <i :class="`icon-wireframe`"></i>  
                </div>
                <p>Wireframe</p>
              </div>
              <div class="infinite-icon-page-menu-center flex aic jcfs">
                <div :class="`infinite-icon-page-menu-i`">
                  <i :class="`icon-filled`"></i>  
                </div>
                <p>Filled</p>
              </div>
              <div class="infinite-icon-page-menu-bottom flex aic jcfs">
                <div :class="`infinite-icon-page-menu-i`">
                  <i :class="`icon-mixed`"></i>  
                </div>
                <p>Mixed</p>
              </div>
            </div>
            <!-- end of 左侧菜单 -->
            <!-- 右侧icon列表 -->
            <div class="infinite-icon-page-window-icon-list"></div>
            <!-- end of 右侧icon列表 -->
          </div>
          <!-- end of 白色区域旋转动画部分 -->
          <!-- 白色区域占位、透明部分 -->
          <!-- 左侧菜单 -->
          <div class="infinite-icon-page-window-menu"></div>
          <!-- end of 左侧菜单 -->
          <!-- 右侧icon列表 -->
          <div class="infinite-icon-page-window-icon-list"
               :class="iconDislocationAnimation">
            <div class="infinite-icon-page-list-mask"></div>
            <ul class="infinite-icon-page-list-main flex jcsb aic fww">
              <li class="infinite-icon-page-list-main-li fn"
                  v-for="(item, index) in iconList"
                  :key="index">
                <div class="infinite-icon-page-li-beat"></div>
                <div class="infinite-icon-page-li-icon flex fdc aic jcc">
                  <div :class="`infinite-icon-page-li-icon-i ${item.other || ''}`"
                       :ref="item.other">
                    <i :class="`${item.icon}`"></i>
                  </div>
                  <p class="infinite-icon-page-li-icon-text">{{item.text}}</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- end of 右侧icon列表 -->
          <!-- end of 白色区域占位、透明部分 -->
        </div>
        <!-- end of 中间白色区域 -->
        <div class="infinite-icon-page-step flex aic jcc">
          <i v-for="(item, index) of 3" :key="index"
            :class="listStepIndex === index ? 'infinite-icon-page-step-active' : ''"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import EventBus from '@/EventBus'

export default {
  name: 'IconPage',
  props: {
    pageCurrentZindex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      orangeBgAnimateName: 'hide-orange-circle', // 橙色上升背景动画
      orBgAnimateName: '', // 橙色背景圈圈动画
      blueBgAnimateName: '', // 蓝色背景圈圈动画
      blackBgAnimateName: '', // 黑色背景圈圈动画
      rotateAnimateName: '', // iconlist旋转进入动画
      showIconsIntroduce: 'hide-icons-introduce', // title上升动画
      iconDislocationAnimation: '', // 首个iocn开始错位
      showDefaultBg: '',
      iconList: [
        {
          // icon: 'el-icon-warning-outline',
          icon: 'icon-annotate',
          component: 'Annotate',
          text: 'annotate',
          other: 'hideIcon'
        },
        {
          // icon: 'el-icon-edit',
          icon: 'icon-edit',
          component: 'Edit',
          text: 'edit'
        },
        {
          // icon: 'el-icon-delete',
          icon: 'icon-delete',
          component: 'Delete',
          text: 'delete'
        },
        {
          // icon: 'el-icon-s-home',
          icon: 'icon-home',
          component: 'Home',
          text: 'home'
        },
        {
          // icon: 'el-icon-refresh',
          icon: 'icon-refresh',
          component: 'Refresh',
          text: 'refresh'
        },
        {
          // icon: 'el-icon-chat-dot-square',
          icon: 'icon-message',
          component: 'Message',
          text: 'message'
        },
        {
          // icon: 'el-icon-date',
          icon: 'icon-calendar',
          component: 'Calendar',
          text: 'calendar'
        },
        {
          // icon: 'el-icon-picture-outline',
          icon: 'icon-report',
          component: 'Report',
          text: 'report'
        },
        {
          icon: 'icon-history',
          component: 'History',
          text: 'history'
        },
        {
          icon: 'icon-share',
          component: 'Share',
          text: 'share'
        },
        {
          icon: 'icon-mail',
          component: 'Mail',
          text: 'mail'
        },
        {
          icon: 'icon-search',
          component: 'Search',
          text: 'search'
        },
        {
          icon: 'icon-set',
          component: 'Set',
          text: 'set'
        },
        {
          icon: 'icon-download',
          component: 'Download',
          text: 'download'
        },
        {
          icon: 'icon-shutdown',
          component: 'Shut',
          text: 'shut down'
        },
        {
          icon: 'icon-file',
          component: 'File',
          text: 'file'
        }
      ], // 图标列表
      showAni: 0, // 动画状态
      timing: 500, // 动画开始时间
      bgIconPageAnimateName: '',
      noShow: true,
      showIcon: false,
      bgAnimateNameZindex: 0,
      listStepIndex: 0, // 动画在第几页
      animesFun: [this.page3_showAniStep2, this.page3_showAniStep3, this.page3_showAniStep4, this.page3_showAniStep5]
    }
  },
  computed: {
    // 屏幕与1920的比值，决定图标缩放
    clientScale () {
      const a = (document.body.clientWidth / 1920).toFixed(1)
      return a > 1 ? 1 : a
    }
  },
  methods: {
    // 第一步，由上个动画的最后一步触发，橙色与title上升，首个icon固定，iconlist旋转出现
    page3_showAniStep1 (reversal) {
      return new Promise((resolve, reject) => {
        // 当前页动画才展示icon 回到上页动画则icon消失
        if (!reversal) {
          this.showIconsIntroduce = 'show-icons-introduce'
          this.orangeBgAnimateName = 'show-orange-circle'
          this.rotateAnimateName = 'rotate-in'
          this.iconDislocationAnimation = 'icon-dislocation-animation'
          this.rotateAnimateName = 'show-rotate-in'
          this.noShow = false
          setTimeout(_ => {
            resolve(true)
          }, 700)
        } else {
          this.showIcon = false
          this.showIconsIntroduce = 'hide-icons-introduce'
          this.rotateAnimateName = ''
          this.orangeBgAnimateName = 'hide-orange-circle'
          this.iconDislocationAnimation = ''
          this.noShow = true
          setTimeout(_ => {
            resolve(true)
          }, 1500)
        }
      })
    },
    // 第二步，橙色iconlist跳动出现
    async page3_showAniStep2 (reversal, executionType) {
      console.log('page3_showAniStep2')
      if (executionType) {
        await this.page3_showAniStep1()
      }
      return new Promise((resolve, reject) => {
        const m = document.querySelector('.infinite-standard-card-exclamatory-mark')
        const _that = this
        if (!reversal) {
          this.showAni = 1
          this.showIcon = true
          setTimeout(_ => {
            if (m) {
              m.style.display = 'none'
            }
            _that.showAni = 2
            resolve(true)
          }, 1500)
        } else {
          if (m) {
            m.style.display = ''
            this.showIcon = true
          }
          this.bgAnimateNameZindex = 0
          this.orBgAnimateName = ''
          this.showAni = 0
          setTimeout(_ => {
            resolve(true)
          }, 1500)
        }
      })
    },
    // 第三步，蓝色iconlist跳动出现，蓝色圈圈出现
    page3_showAniStep3 (reversal) {
      return new Promise((resolve, reject) => {
        const _that = this
        if (!reversal) {
          this.blueBgAnimateName = 'circle-animate'
          this.bgAnimateNameZindex = 2
          setTimeout(_ => {
            _that.showAni = 3
            _that.showIcon = false
            setTimeout(_ => {
              _that.showAni = 4
              _that.showDefaultBg = ''
              _that.orBgAnimateName = ''
              this.listStepIndex = 1
              resolve(true)
            }, 1500)
          }, 100)
        } else {
          this.orBgAnimateName = 'circle-animate'
          this.bgAnimateNameZindex = 1
          setTimeout(_ => {
            _that.showAni = 9
            _that.showIcon = true
            setTimeout(_ => {
              _that.showAni = 2
              _that.blueBgAnimateName = ''
              this.listStepIndex = 0
              resolve(true)
            }, 1500)
          }, 100)
        }
      })
    },
    // 第四步，黑色iconlist出现，黑色圈圈出现
    page3_showAniStep4 (reversal) {
      return new Promise((resolve, reject) => {
        const _that = this
        this.showIcon = false
        if (!reversal) {
          this.blackBgAnimateName = 'circle-animate'
          this.bgAnimateNameZindex = 3
          setTimeout(_ => {
            _that.showAni = 5
            setTimeout(_ => {
              _that.showAni = 6
              _that.blueBgAnimateName = ''
              this.listStepIndex = 2
              resolve(true)
            }, 1500)
          }, 100)
        } else {
          this.blueBgAnimateName = 'circle-animate'
          this.bgAnimateNameZindex = 2
          setTimeout(_ => {
            _that.showAni = 8
            setTimeout(_ => {
              _that.showAni = 4
              _that.blackBgAnimateName = ''
              this.listStepIndex = 1
              resolve(true)
            }, 1500)
          }, 100)
        }
      })
    },
    // iconlist上升消失，触发下一动画第一步
    page3_showAniStep5 (reversal) {
      return new Promise((resolve, reject) => {
        EventBus.$emit('page3_showAniStep5', reversal)
        if (!reversal) {
          this.showAni = 7
          setTimeout(_ => {
            resolve(true)
          }, 1500)
        } else {
          this.showAni = 6
          setTimeout(_ => {
            resolve(true)
          }, 1500)
        }
      })
    }
  },
  mounted () {
    EventBus.$on('page2_goEndTop', (reversal) => {
      this.page3_showAniStep1(reversal)
    })
  }
}
</script>
<style lang='scss' scoped>
@import "./index.scss";
@media screen and (min-width: 1360px) {
  @import "./index.scss";
}
</style>
