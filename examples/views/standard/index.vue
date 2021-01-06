<template>
  <div class="infinite-standard"
       :class="wrapAnimate">

    <div
      class="infinite-standard-card-exclamatory-mark"
      :class="{'end-mask':endTop,'show-tip':showMask,'hide-mask':hideMask}"
      :style="{transform: `scale(${1.265 * scale})`}"
      ref="iconMask"
    >
      <i class="icon-annotate"></i>
    </div>
    <div class="main-view-content-standard">
      <div class="top-wrapper">
        <div class="infinite-standard-top design"
             :class="{'end-top':endTop,'show-top':showTop, 'hide-design':showCardMoveToLeft}">
          <div class="infinite-standard-top_title">组件设计规范</div>
          <div class="infinite-standard-top_subTitle">
            完善的设计指引、设计资源，帮助产品等非设计者快速产出高质量的产品原型帮助设计者完善产品设计、统一设计规范
          </div>
        </div>
        <div class="infinite-standard-top"
             :class="{'end-top':endTop,'show-top':showCardMoveToLeft}">
          <div class="infinite-standard-top_title">组件代码规范</div>
          <div class="infinite-standard-top_subTitle">
            轻松查看以及调用组件代码，清晰的前端代码规范以及前端架构，快速封装代码，提高开发效率
          </div>
        </div>
      </div>
      <div class="infinite-standard_content-flex">
        <div class="infinite-standard_content"
             :class="{'end-top':endTop}">
          <div class="infinite-standard-card-wrapper">
            <div class="infinite-standard-card"
                 :class="{'move-card':showCardMoveToLeft}">
              <div class="infinite-standard-line">

                <!-- horizontal line -->
                <div class="infinite-standard-line_horizontal transform-origin-left"
                     :class="{'fade-in-box-6':showLine}"></div>
                <div class="infinite-standard-line_horizontal top55 transform-origin-right line-transition-delay"
                     :class="{'fade-in-box-7':showLine}"></div>
                <div class="infinite-standard-line_horizontal top90 transform-origin-right line-transition-delay"
                     :class="{'fade-in-box-7':showLine}"></div>
                <div class="infinite-standard-line_horizontal top135 transform-origin-left line-transition-delay"
                     :class="{'fade-in-box-9':showLine}"></div>
                <div class="infinite-standard-line_horizontal top195 transform-origin-left line-transition-delay"
                     :class="{'fade-in-box-9':showLine}"></div>
                <div class="infinite-standard-line_horizontal top255 transform-origin-right line-transition-delay"
                     :class="{'fade-in-box-7':showLine}"></div>
                <div class="infinite-standard-line_horizontal top295 transform-origin-left line-transition-delay"
                     :class="{'fade-in-box-9':showLine}"></div>
                <div class="infinite-standard-line_horizontal top370 transform-origin-left line-transition-delay"
                     :class="{'fade-in-box-9':showLine}"></div>
                <div class="infinite-standard-line_horizontal top410 transform-origin-left line-transition-delay"
                     :class="{'fade-in-box-9':showLine}"></div>
                <div class="infinite-standard-line_horizontal top450 transform-origin-left"
                     :class="{'fade-in-box-6':showLine}"></div>

                <!-- vertical line -->
                <div class="infinite-standard-line_vertical left0 transform-origin-top"
                     :class="{'fade-in-box-1':showLine}"></div>
                <div class="infinite-standard-line_vertical left55 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>
                <div class="infinite-standard-line_vertical right110 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>

                <div class="infinite-standard-line_vertical right70 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>
                <div class="infinite-standard-line_vertical right0 transform-origin-top"
                     :class="{'fade-in-box-1':showLine}"></div>

                <!-- small line -->
                <div class="infinite-standard-line_vertical-small left135 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>
                <div class="infinite-standard-line_vertical-small left175 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>
                <div class="infinite-standard-line_vertical-small left200 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>
                <div class="infinite-standard-line_vertical-small left210 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>
                <div class="infinite-standard-line_vertical-small right140 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>
                <div class="infinite-standard-line_vertical-small right176 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>
                <div class="infinite-standard-line_vertical-small right150 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>
                <div class="infinite-standard-line_vertical-small righ180 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>
                <div class="infinite-standard-line_vertical-small right210 transform-origin-bottom line-transition-delay"
                     :class="{'fade-in-box-2':showLine}"></div>
              </div>

              <!-- 外框线 -->
              <div class="infinite-standard-line line-box"
                   :class="{'show-sec-line':showCardMoveToLeft}">
                <!-- horizontal line -->
                <div class="infinite-standard-line_horizontal transform-origin-left"></div>
                <div class="infinite-standard-line_horizontal top450 transform-origin-left"></div>

                <!-- vertical line -->
                <div class="infinite-standard-line_vertical left0"></div>
                <div class="infinite-standard-line_vertical right0"></div>
              </div>
              <!-- end of 外框线 -->
              <img class="infinite-standard-card_img"
                   :src="require('@/assets/bigcardComponent.png')" />
              <!-- <div :class="`infinite-standard-card-icon ${hideGruyIcon ? 'hide-gruy-icon' : ''}`"></div> -->
              <div class="infinite-standard-card-icon-gruy">
                <i class="icon-annotate"></i>
              </div>
            </div>

          </div>
          <!-- 代码打字效果 -->
          <div class="infinite-standard-code"
               :class="{'show-code':showCardMoveToLeft}">
            <p :class="showCode(index)"
               v-for="(code, index) in codes"
               :key="index">
              {{ code }}
            </p>
          </div>
          <!-- end of 代码打字效果 -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EventBus from '@/EventBus'
let timer
let hideMaskTimer
export default {
  data () {
    return {
      animesFun: [this.page2_goShowTop, this.page2_goShowLine, this.page2_goShowCardMoveToLeft, this.page2_goShowExlamatoryMark, this.page2_goEndTop],
      stepFun: [this.page2_step1, this.page2_step2, this.page2_step3, this.page2_step4, this.page2_step5],
      isShowCode: false,
      row: 0,
      endTop: false,
      showTop: false,
      showMask: false,
      showLine: false,
      showCardMoveToLeft: false,
      codes: [
        'const { itemData, formModels } = this',
        "const placeholder = itemData.placeholder || ''",
        'formModels[itemData.key] = formModels[itemData.key] || itemData.defaultValue',
        'switch (itemData.type) {',
        "case 'component':",
        'const component = itemData.component(h)',
        'const componentOptions = component.componentOptions',
        // "const sealedOptions = componentOptions.Ctor.sealedOptions",
        'const model = sealedOptions.model',
        'let flag = model && model.event && model.prop'
        // "const listenersFlag = !componentOptions.listeners",
      ],
      wrapAnimate: '',
      hideGruyIcon: false,
      hideMask: false,
      gruyIconLeft: 0,
      gruyIconTop: 0,
      gruyIconTopBefore: 0,
      listenResizeTimer: '',
      listenResizeFlag: false,
      intervalResetMask: '',
      scale: 1,
      afterScale: 1
    }
  },
  computed: {
    showCode () {
      return function (currentIndex) {
        // console.log(this.row, currentIndex)
        return {
          typing_active: this.row === currentIndex,
          typing_normal: this.row < currentIndex,
          typing_pl45: currentIndex >= 6,
          typing_pl20: currentIndex === 4,
          typing_pl30: currentIndex === 5
        }
      }
    },
    clientScale () {
      const a = (document.body.clientWidth / 1920).toFixed(1)
      return a > 1 ? 1 : a
    }
  },
  methods: {
    /**  
     * 动画执行顺序
     * 1. 显示 头部信息 卡片出现
     * 2. 显示边框描线
     * 3. 边框描线消失 保留四周描线 卡片左移 出现右侧code 并显示完成代码
     * 4. 感叹号出现
     * 5. 感叹号右移20px 其他部件上滑至透明
     */
    // 步骤1 显示头部与卡片 把上卡片的图片隐藏 当前卡片显示
    page2_goShowTop (reversal) {
      return new Promise((resolve, reject) => {
        if (!reversal) {
          // console.log('page2_goShowTop == ', document.querySelector('.imgs_content_9'))
          this.$nextTick(() => {
            document.querySelector('.imgs_content_9').style.display = 'none'
            document.querySelector('.infinite-standard-card_img').style.display = 'block'
            document.querySelector('.infinite-standard-card-icon-gruy').style.display = 'flex'
            this.showTop = !this.showTop
            setTimeout(_ => {
              resolve(true)
            }, 1000)
          })
        } else {
          document.querySelector('.imgs_content_9').style.display = 'block'
          this.showTop = !this.showTop
          setTimeout(_ => {
            document.querySelector('.infinite-standard-card-icon-gruy').style.display = 'none'
            document.querySelector('.infinite-standard-card_img').style.display = 'none'
            resolve(true)
          }, 1000)
        }
      })
    },
    page2_step1 (reversal) {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          setTimeout(() => {
            if (!reversal) {
              document.querySelector('.imgs_content_9').style.display = 'none'
              console.log('stand -- ', document.querySelector('.imgs_content_9'), document.querySelector('.imgs_content_9').style.display)
              document.querySelector('.infinite-standard-card_img').style.display = 'block'
              document.querySelector('.infinite-standard-card-icon-gruy').style.display = 'flex'
              this.showTop = true
            } else {
              document.querySelector('.infinite-standard-card-icon-gruy').style.display = 'none'
              document.querySelector('.imgs_content_9').style.display = 'block'
              console.log('stand prev -- ', document.querySelector('.imgs_content_9').style.display)
              document.querySelector('.infinite-standard-card_img').style.display = 'none'
              this.showTop = false
            }
          }, 0)
          resolve(true)
        })
      })
    },
    // 步骤2 显示边框线
    page2_goShowLine (reversal) {
      return new Promise((resolve, reject) => {
        if (!reversal) {
          this.showLine = true
          setTimeout(_ => {
            resolve(true)
          }, 1500)
        } else {
          this.showLine = false
          setTimeout(_ => {
            resolve(true)
          }, 1500)
        }
      })
    },
    page2_step2 (reversal) {
      return new Promise((resolve, reject) => {
        if (!reversal) {
          this.showLine = true
        } else {
          this.showLine = false
        }
        resolve(true)
      })
    },
    // 步骤3 卡片位移
    page2_goShowCardMoveToLeft (reversal) {
      return new Promise((resolve, reject) => {
        if (!reversal) {
          setTimeout(() => {
            this.row = 0
          }, 100)
          this.showLine = false
          this.showCardMoveToLeft = true
          this.codeShowLine()
          // this.getGruyIconPosition()
          // this.setIconMaskPosition(this.gruyIconLeft, this.gruyIconTop)
          // this.gruyIconTopBefore = this.gruyIconTop
          setTimeout(_ => {
            this.getGruyIconPosition()
            this.setIconMaskPosition(this.gruyIconLeft, this.gruyIconTop)
            this.gruyIconTopBefore = this.gruyIconTop
          }, 1000)
          setTimeout(_ => {
            resolve(true)
          }, 1500)
        } else {
          setTimeout(() => {
            this.row = 0
          }, 100)
          this.showLine = true
          this.showCardMoveToLeft = false
          this.codeShowLine()
          // this.getGruyIconPosition()
          // this.setIconMaskPosition(this.gruyIconLeft, this.gruyIconTop)
          // this.gruyIconTopBefore = this.gruyIconTop
          setTimeout(_ => {
            // this.getGruyIconPosition()
            // this.setIconMaskPosition(this.gruyIconLeft, this.gruyIconTop)
            // this.gruyIconTopBefore = this.gruyIconTop
            resolve(true)
          }, 1500)
        }
      })
    },
    page2_step3 (reversal) {
      return new Promise((resolve, reject) => {
        this.row = 0
        if (!reversal) {
          this.showLine = false
          this.showCardMoveToLeft = true
        } else {
          this.showLine = true
          this.showCardMoveToLeft = false
        }
        for (let i = 0; i < this.codes.length; i++) {
          this.row += 1
        }
        this.getGruyIconPosition()
        this.setIconMaskPosition(this.gruyIconLeft, this.gruyIconTop)
        this.gruyIconTopBefore = this.gruyIconTop
        resolve(true)
      })
    },
    // 步骤4 显示感叹号
    page2_goShowExlamatoryMark (reversal) {
      return new Promise((resolve, reject) => {
        // this.showMask = !this.showMask
        if (!reversal) {
          this.showMask = true
          // this.setIconMaskTransform(0, 0, 2)
          this.setIconMaskTransform({ transform: `scale(${2 * this.scale})` })
          // this.getGruyIconPosition()
          // console.log('---')
          // this.setIconMaskPosition((this.gruyIconLeft.replace('px', '') - 12) + 'px', (this.gruyIconTop.replace('px', '') - 12) + 'px')
          // this.hideGruyIcon = true
        } else {
          setTimeout(_ => {
            this.showMask = false
          }, 500)
          // this.setIconMaskTransform(0, 0, 1.265)
          this.setIconMaskTransform({ transform: `scale(${1.265 * this.scale})` })
          // this.getGruyIconPosition()
          // this.setIconMaskPosition(this.gruyIconLeft, this.gruyIconTop)
          // this.hideGruyIcon = false
        }
        setTimeout(_ => {
          resolve(true)
        }, 1500)
      })
    },
    // 步骤4 显示感叹号
    page2_step4 (reversal) {
      return new Promise((resolve, reject) => {
        if (!reversal) {
          this.showMask = true
          // this.setIconMaskTransform(0, 0, 2)
          this.setIconMaskTransform({ transform: `scale(${2 * this.scale})` })
        } else {
          this.showMask = false
          // this.setIconMaskTransform(0, 0, 1.265)
          this.setIconMaskTransform({ transform: `scale(${1.265 * this.scale})` })
        }
        resolve(true)
      })
    },
    // 获取灰色icon位置
    getGruyIconPosition (callback) {
      const gruyIcon = document.querySelector('.infinite-standard-card-icon-gruy')
      if (gruyIcon) {
        const h = gruyIcon.getBoundingClientRect() // 计算点居中
        // console.log('gruyIcon == ', gruyIcon, h)
        const a = this.scale === 1 ? 2 : 0
        const c = this.scale === 1 ? 3 : 0
        this.gruyIconLeft = `${h.left - (1 - this.scale) + a}px`
        this.gruyIconTop = `${h.top - (1 - this.scale) + c}px`
        callback && callback()
      }
    },
    // 赋予IconMask位置
    setIconMaskPosition (left, top) {
      // console.log('setIconMaskPosition left, top == ', left, top)
      const { iconMask } = this.$refs
      if (iconMask) {
        iconMask.style.transformOrigin = 'center center'
        iconMask.style.left = left
        iconMask.style.top = top
      }
    },
    // 赋予IconMaskStyle
    setIconMaskTransform (obj) {
      // console.log('setIconMaskPosition left, top == ', left, top)
      setTimeout(() => {
        const { iconMask } = this.$refs
        if (iconMask) {
          // console.log('setIconMaskTransform == ', sca, this.scale, sca * this.scale)
          for (let k in obj) {
            iconMask.style[k] = obj[k]
          }
          // iconMask.style.transform = `scale(${sca * this.scale})`
          // iconMask.style.transformOrigin = `center center`
        }
      }, 0)
    },
    // 步骤5 保留感叹号 其他部分上滑
    page2_goEndTop (reversal) {
      return new Promise((resolve, reject) => {
        // 告诉动画页-4此时我的运动状态
        const hideIcon = document.querySelector('.hideIcon') // 下一动画的首个icon
        if (!reversal) {
          if (hideIcon) {
            const b = hideIcon.getBoundingClientRect() // 计算点居中
            this.setIconMaskPosition(`${b.left - 1}px`, `${b.top + 0.83}px`)
          }
          this.endTop = true
          this.setIconMaskTransform({ transform: `scale(${1 * this.afterScale})`, transformOrigin: 'top left' })

          this.getGruyIconPosition()
          this.gruyIconTopBefore = this.gruyIconTop

          EventBus.$emit('page2_goEndTop', reversal)
          hideMaskTimer = setTimeout(_ => {
            this.hideMask = true
          }, 1600)
        } else {
          // console.log('page2_goEndTop prev - this.gruyIconLeft, this.gruyIconTop == ', this.gruyIconLeft, this.gruyIconTop)
          // this.getGruyIconPosition()
          // console.log('page2_goEndTop prev get - this.gruyIconLeft, this.gruyIconTop == ', this.gruyIconLeft, this.gruyIconTop)

          this.intervalResetMask = setInterval(() => {
            this.getGruyIconPosition()
            let topPosi = 0
            if (hideIcon) {
              const b = hideIcon.getBoundingClientRect() // 计算点居中
              topPosi = b.top + 'px'
              if (Number(this.gruyIconTop.replace('px', '')) > b.top) {
                topPosi = this.gruyIconTop
              }
            }
            if (this.gruyIconTopBefore === this.gruyIconTop) {
              topPosi = this.gruyIconTop
              clearInterval(this.intervalResetMask)
            }
            this.setIconMaskPosition(this.gruyIconLeft, topPosi)
            this.gruyIconTopBefore = this.gruyIconTop
            // console.log('this.gruyIconLeft, this.gruyIconTop == ', this.gruyIconLeft, this.gruyIconTop)
          }, 100)
          this.endTop = false
          // this.setIconMaskTransform(0, 0, 2)
          this.setIconMaskTransform({ transform: `scale(${2 * this.afterScale})`, transformOrigin: 'top left' })
          clearTimeout(hideMaskTimer)
          this.hideMask = false
          EventBus.$emit('page2_goEndTop', reversal)
        }

        // this.endTop = !this.endTop
        // this.wrapAnimate = reversal ? '' : 'fade-out'
        setTimeout(_ => {
          // clearInterval(this.intervalResetMask)
          resolve(true)
        }, 1600)
      })
    },
    page2_step5 (reversal) {
      return new Promise((resolve, reject) => {
        // 告诉动画页-4此时我的运动状态
        const hideIcon = document.querySelector('.hideIcon') // 下一动画的首个icon
        if (!reversal) {
          if (hideIcon) {
            const b = hideIcon.getBoundingClientRect() // 计算点居中
            this.setIconMaskPosition(`${b.left - 1}px`, `${b.top + 1.83}px`)
          }
          this.endTop = true
          // this.setIconMaskTransform(0, 0, 1)
          this.setIconMaskTransform({ transform: `scale(${1 * this.afterScale})`, transformOrigin: 'top left' })

          this.getGruyIconPosition()
          this.gruyIconTopBefore = this.gruyIconTop

          EventBus.$emit('page2_goEndTop', reversal)
          // hideMaskTimer = setTimeout(_ => {
          this.hideMask = true
          // }, 1600)
        } else {
          // console.log('page2_goEndTop prev - this.gruyIconLeft, this.gruyIconTop == ', this.gruyIconLeft, this.gruyIconTop)
          // this.getGruyIconPosition()
          // console.log('page2_goEndTop prev get - this.gruyIconLeft, this.gruyIconTop == ', this.gruyIconLeft, this.gruyIconTop)

          // this.intervalResetMask = setInterval(() => {
          this.getGruyIconPosition()
          let topPosi = 0
          if (hideIcon) {
            const b = hideIcon.getBoundingClientRect() // 计算点居中
            topPosi = b.top + 'px'
            if (Number(this.gruyIconTop.replace('px', '')) > b.top) {
              topPosi = this.gruyIconTop
            }
          }
          if (this.gruyIconTopBefore === this.gruyIconTop) {
            topPosi = this.gruyIconTop
            // clearInterval(this.intervalResetMask)
          }
          this.setIconMaskPosition(this.gruyIconLeft, topPosi)
          this.gruyIconTopBefore = this.gruyIconTop
          // console.log('this.gruyIconLeft, this.gruyIconTop == ', this.gruyIconLeft, this.gruyIconTop)
          // }, 100)
          this.endTop = false
          // this.setIconMaskTransform(0, 0, 2)
          this.setIconMaskTransform({ transform: `scale(${2 * this.afterScale})`, transformOrigin: 'top left' })
          // clearTimeout(hideMaskTimer)
          this.hideMask = false
          EventBus.$emit('page2_goEndTop', reversal)
        }

        // this.endTop = !this.endTop
        // this.wrapAnimate = reversal ? '' : 'fade-out'
        // setTimeout(_ => {
        // clearInterval(this.intervalResetMask)
        resolve(true)
        // }, 1000)
      })
    },
    // 计时器
    codeShowLine () {
      // 设置计时器
      timer = setInterval(() => {
        this.row += 1
        if (this.row === this.codes.length) {
          clearInterval(timer)
        }
      }, 150)
    },
    // 窗口大小改变时的操作
    listenResize () {
      const _that = this
      if (!_that.listenResizeFlag) {
        _that.listenResizeFlag = true
        setTimeout(() => {
          _that.getGruyIconPosition(() => {
            _that.gruyIconTopBefore = _that.gruyIconTop
            _that.setIconMaskPosition(_that.gruyIconLeft, _that.gruyIconTop)
          })
          _that.listenResizeFlag = false
        }, 400)
      }
    },
    setAutoFill () {
      const { clientHeight } = document.documentElement
      const element = document.querySelector('.main-view-content-standard')
      const elementTransform = element.style.transform
      const { height } = element.getBoundingClientRect()
      const thresholdValue = 0.1 // 防止不够，多缩小一点
      if ((clientHeight - height) < 100) {
        const scale = 1 - Math.abs(clientHeight - height) / height - thresholdValue
        this.scale = scale
        element.style.transform = elementTransform + `scale(${scale}) translate(-50%,-50%)`
        element.style.transformOrigin = 'left top'
      }
    }
  },
  mounted () {
    this.setAutoFill()
    window.addEventListener('resize', this.listenResize)
    EventBus.$emit('standardScale', this.scale)
    EventBus.$on('page2_setAutoFill_cale', (res) => {
      this.afterScale = res || 1
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.listenResize)
  }

}
</script>
<style lang="scss" scoped>
@import "./index.scss";
@media screen and (min-width: 1360px) {
  @import "./index.scss";
}
</style>
