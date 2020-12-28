<template>
  <div class="infinite-standard" :class="wrapAnimate">
    <div class="infinite-standard-card-exclamatory-mark"
        :class="{'end-mask':endTop,'show-tip':showMask,'hide-mask':hideMask}" 
        ref="iconMask"
      >
      <i 
        class="icon-annotate" 
        :style="{transform: `scale(${clientScale})`}"
        ></i>
    </div>
    <div
      class="infinite-standard-top"
      :class="{'end-top':endTop,'show-top':showTop}"
    >
      <div class="infinite-standard-top_title">组件设计规范</div>
      <div class="infinite-standard-top_subTitle">
        完善的设计指引、设计资源，帮助产品等非设计者快速产出高质量的产品原型帮助设计者完善产品设计、统一设计规范
      </div>
    </div>
    <div
      class="infinite-standard_content"
      :class="{'end-top':endTop}"
    >
      <div class="infinite-standard-card-wrapper">
        <div
          class="infinite-standard-card"
          :class="{'move-card':showCardMoveToLeft}"
        >
          <div
            class="infinite-standard-line"
            :class="{'hide-line':showCardMoveToLeft}"
          >

            <!-- horizontal line -->
            <div
              class="infinite-standard-line_horizontal"
              :class="{'fade-in-box-6':showLine}"
            ></div>
            <div
              class="infinite-standard-line_horizontal top55"
              :class="{'fade-in-box-7':showLine}"
            ></div>
            <div
              class="infinite-standard-line_horizontal top90 "
              :class="{'fade-in-box-7':showLine}"
            ></div>
            <div
              class="infinite-standard-line_horizontal top135"
              :class="{'fade-in-box-9':showLine}"
            ></div>
            <div
              class="infinite-standard-line_horizontal top195"
              :class="{'fade-in-box-9':showLine}"
            ></div>
            <div
              class="infinite-standard-line_horizontal top255"
              :class="{'fade-in-box-7':showLine}"
            ></div>
            <div
              class="infinite-standard-line_horizontal top295"
              :class="{'fade-in-box-9':showLine}"
            ></div>
            <div
              class="infinite-standard-line_horizontal top370 "
              :class="{'fade-in-box-9':showLine}"
            ></div>
            <div
              class="infinite-standard-line_horizontal top410 "
              :class="{'fade-in-box-9':showLine}"
            ></div>
            <div
              class="infinite-standard-line_horizontal top450 "
              :class="{'fade-in-box-6':showLine}"
            ></div>

            <!-- vertical line -->
            <div
              class="infinite-standard-line_vertical left0 "
              :class="{'fade-in-box-1':showLine}"
            ></div>
            <div
              class="infinite-standard-line_vertical left55 "
              :class="{'fade-in-box-2':showLine}"
            ></div>
            <div
              class="infinite-standard-line_vertical right110 "
              :class="{'fade-in-box-2':showLine}"
            ></div>

            <div
              class="infinite-standard-line_vertical right70 "
              :class="{'fade-in-box-2':showLine}"
            ></div>
            <div
              class="infinite-standard-line_vertical right0 "
              :class="{'fade-in-box-1':showLine}"
            ></div>

            <!-- small line -->
            <div
              class="infinite-standard-line_vertical-small left135"
              :class="{'fade-in-box-2':showLine}"
            ></div>
            <div
              class="infinite-standard-line_vertical-small left175"
              :class="{'fade-in-box-2':showLine}"
            ></div>
            <div
              class="infinite-standard-line_vertical-small left200"
              :class="{'fade-in-box-2':showLine}"
            ></div>
            <div
              class="infinite-standard-line_vertical-small left210"
              :class="{'fade-in-box-2':showLine}"
            ></div>
            <div
              class="infinite-standard-line_vertical-small right140"
              :class="{'fade-in-box-2':showLine}"
            ></div>
            <div
              class="infinite-standard-line_vertical-small right176"
              :class="{'fade-in-box-2':showLine}"
            ></div>
            <div
              class="infinite-standard-line_vertical-small right150"
              :class="{'fade-in-box-2':showLine}"
            ></div>
            <div
              class="infinite-standard-line_vertical-small righ180"
              :class="{'fade-in-box-2':showLine}"
            ></div>
            <div
              class="infinite-standard-line_vertical-small right210"
              :class="{'fade-in-box-2':showLine}"
            ></div>
          </div>

          <!-- 外框线 -->
          <div
            class="infinite-standard-line line-box"
            :class="{'show-sec-line':showCardMoveToLeft}"
          >
            <!-- horizontal line -->
            <div class="infinite-standard-line_horizontal"></div>
            <div class="infinite-standard-line_horizontal top450"></div>

            <!-- vertical line -->
            <div class="infinite-standard-line_vertical left0"></div>
            <div class="infinite-standard-line_vertical right0"></div>
          </div>
          <!-- end of 外框线 -->
          <img
            class="infinite-standard-card_img"
            :src="require('@/assets/bigcardComponent.png')"
          />
          <div :class="`infinite-standard-card-icon ${hideGruyIcon ? 'hide-gruy-icon' : ''}`"></div>
        </div>

      </div>
      <!-- 代码打字效果 -->
      <div
        class="infinite-standard-code"
        :class="{'show-code':showCardMoveToLeft}"
      >
        <p
          :class="showCode(index)"
          v-for="(code, index) in codes"
          :key="index"
        >
          {{ code }}
        </p>
      </div>
      <!-- end of 代码打字效果 -->
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
      hideMask: false
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
    page2_goShowTop () {
      return new Promise((resolve, reject) => {
        document.querySelector('.imgs_content_9').style.display = 'none'
        document.querySelector('.infinite-standard-card_img').style.display = 'block'
        this.showTop = !this.showTop
        setTimeout(_ => {
          resolve(true)
        }, 1000)
      })
    },
    // 步骤2 显示边框线
    page2_goShowLine () {
      return new Promise((resolve, reject) => {
        this.showLine = !this.showLine
        setTimeout(_ => {
          resolve(true)
        }, 1000)
      })
    },
    // 步骤3 卡片位移
    page2_goShowCardMoveToLeft () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.row = 0
        }, 100)
        this.showCardMoveToLeft = !this.showCardMoveToLeft
        this.codeShowLine()
        setTimeout(_ => {
          resolve(true)
        }, 1000)
      })
    },
    // 步骤4 显示感叹号
    page2_goShowExlamatoryMark (reversal) {
      return new Promise((resolve, reject) => {
        this.showMask = !this.showMask
        if (!reversal) {
          this.hideGruyIcon = true
        } else {
          this.hideGruyIcon = false
        }
        setTimeout(_ => {
          resolve(true)
        }, 1000)
      })
    },
    // 步骤5 保留感叹号 其他部分上滑
    page2_goEndTop (reversal) {
      return new Promise((resolve, reject) => {
        if (!reversal) {
          // 告诉动画页-4此时我的运动状态
          const hideIcon = document.querySelector('.hideIcon')
          if (hideIcon) {
            const b = hideIcon.getBoundingClientRect() // 计算点居中
            const { iconMask } = this.$refs
            iconMask.style.left = `${b.left}px`
            iconMask.style.top = `${Math.floor(b.top) + 3}px`
          }
          EventBus.$emit('page2_goEndTop', reversal)
          hideMaskTimer = setTimeout(_ => {
            this.hideMask = true
          }, 1500)
        } else {
          const { iconMask } = this.$refs
          const c = document.body.clientWidth
          const d = document.body.clientHeight
          clearTimeout(hideMaskTimer)
          this.hideMask = false
          iconMask.style.left = `${c * 0.5 - c * 0.0869}px`
          iconMask.style.top = `${d * 0.5 - c * 0.0174}px`
          EventBus.$emit('page2_goEndTop', reversal)
        }
        
        this.endTop = !this.endTop
        // this.wrapAnimate = reversal ? '' : 'fade-out'
        setTimeout(_ => {
          resolve(true)
        }, 1000)
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
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
@media screen and (min-width: 1366px) {
  @import "./index.scss";
}
</style>
