<template>
  <div class="infinite-standard">
    <div
      class="infinite-standard-card-exclamatory-mark"
      :class="{'end-mask':endTop}"
      v-if="showMask"
    />
    <div
      class="infinite-standard-top"
      :class="{'end-top':endTop}"
    >
      <div class="infinite-standard-top_title">组件设计规范</div>
      <div class="infinite-standard-top_subTitle">
        完善的设计指引、设计资源，帮助产品等非设计者快速产出高质量的产品原型帮助设计者完善产品设计、统一设计规范
      </div>
    </div>
    <div class="infinite-standard_content" :class="{'end-top':endTop}">
      <div class="infinite-standard-card-wrapper">
        <div
          class="infinite-standard-card"
        >
          <div class="infinite-standard-line">

            <!-- horizontal line -->
            <div class="infinite-standard-line_horizontal line-box"></div>
            <div class="infinite-standard-line_horizontal top55"></div>
            <div class="infinite-standard-line_horizontal top90"></div>
            <div class="infinite-standard-line_horizontal top135"></div>
            <div class="infinite-standard-line_horizontal top195"></div>
            <div class="infinite-standard-line_horizontal top255"></div>
            <div class="infinite-standard-line_horizontal top295"></div>
            <div class="infinite-standard-line_horizontal top370"></div>
            <div class="infinite-standard-line_horizontal top410"></div>
            <div class="infinite-standard-line_horizontal top450 line-box"></div>

            <!-- vertical line -->
            <div class="infinite-standard-line_vertical left0 line-box"></div>
            <div class="infinite-standard-line_vertical left55"></div>
            <div class="infinite-standard-line_vertical left55"></div>
            <div class="infinite-standard-line_vertical right110"></div>

            <div class="infinite-standard-line_vertical right70"></div>
            <div class="infinite-standard-line_vertical right0 line-box"></div>

            <!-- small line -->
            <div class="infinite-standard-line_vertical-small left135"></div>
            <div class="infinite-standard-line_vertical-small left175"></div>
            <div class="infinite-standard-line_vertical-small left200"></div>
            <div class="infinite-standard-line_vertical-small left210"></div>
            <div class="infinite-standard-line_vertical-small right140"></div>
            <div class="infinite-standard-line_vertical-small right176"></div>
            <div class="infinite-standard-line_vertical-small right150"></div>
            <div class="infinite-standard-line_vertical-small righ180"></div>
            <div class="infinite-standard-line_vertical-small right210"></div>
          </div>

          <!-- 外框线 -->
          <div
            class="infinite-standard-line line-box"
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
            :src="require('@/assets/cardComponent.png')"
          />
        </div>

      </div>
      <!-- 代码打字效果 -->
      <div
        class="infinite-standard-code"
        v-show="isShowCode"
      >
      <div class="infinite-standard-code-mask"></div>
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
let timer
export default {
  data () {
    return {
      isShowCode: false,
      row: 0,
      endTop: false,
      showMask: false,
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
      ]
    }
  },
  // watch: {
  //   isShowCode (showCode) {
  //     if (showCode) {

  //     }
  //   }
  // },
  computed: {
    showCode () {
      return function (currentIndex) {
        // console.log(this.row, currentIndex)
        return {
          typing_active: this.row === currentIndex,
          typing_normal: this.row < currentIndex,
          // typing_opacity: currentIndex === 1,
          typing_pl45: currentIndex >= 6,
          typing_pl20: currentIndex === 4,
          typing_pl30: currentIndex === 5
        }
      }
    }
  },
  mounted () {
    const _that = this
    // 设置代码框显示时间
    setTimeout(() => {
      this.isShowCode = true
      setTimeout(() => {
        _that.codeShowLine()
      }, 500)
    }, 2500)
  },
  methods: {
    // 计时器
    codeShowLine () {
      // 设置计时器
      timer = setInterval(() => {
        this.row += 1
        if (this.row === this.codes.length) {
          clearInterval(timer)
          this.showMark()
        }
      }, 100)
    },
    // 显示感叹号
    showMark () {
      this.showMask = true
      setTimeout(() => {
        this.endTop = true
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
