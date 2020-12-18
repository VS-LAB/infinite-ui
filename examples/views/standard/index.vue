<template>
  <div class="infinite-standard">
    <div class="infinite-standard-top">
      <div class="infinite-standard-top_title">组件设计规范</div>
      <div class="infinite-standard-top_subTitle">
        完善的设计指引、设计资源，帮助产品等非设计者快速产出高质量的产品原型帮助设计者完善产品设计、统一设计规范
      </div>
    </div>
    <div class="infinite-standard_content">
      <div class="infinite-standard-card">
        <div class="infinite-standard-line">
          <!-- horizontal line -->
          <div class="infinite-standard-line_horizontal"></div>
          <div class="infinite-standard-line_horizontal top55"></div>
          <div class="infinite-standard-line_horizontal top90"></div>
          <div class="infinite-standard-line_horizontal top135"></div>
          <div class="infinite-standard-line_horizontal top195"></div>
          <div class="infinite-standard-line_horizontal top255"></div>
          <div class="infinite-standard-line_horizontal top295"></div>
          <div class="infinite-standard-line_horizontal top370"></div>
          <div class="infinite-standard-line_horizontal top410"></div>
          <div class="infinite-standard-line_horizontal top450"></div>

          <!-- vertical line -->
          <div class="infinite-standard-line_vertical left0"></div>
          <div class="infinite-standard-line_vertical left55"></div>
          <div class="infinite-standard-line_vertical left55"></div>
          <div class="infinite-standard-line_vertical right110"></div>

          <div class="infinite-standard-line_vertical right70"></div>
          <div class="infinite-standard-line_vertical right0"></div>

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
        <img
          class="infinite-standard-card_img"
          :src="require('@/assets/cardComponent.png')"
        />
        <!-- <div class="card-top">
        <p>营收额达成率</p>
        <i class="card-top_explain"></i>
      </div>
      <div class="card-content">
        <p>68%</p>
        <div class="card-content_progress">
          <div class="card-content_innerProgress"></div>
        </div>
      </div>
      <div class="card-bottom">
        <div class="card-bottom_container">
            <div class="card-bottom_container-text">同比：<span><i class="card-bottom_container-redUp" />12%</span></div>
        </div>
        <div class="card-bottom_container">
            <div class="card-bottom_container-text">环比：<span><i class="card-bottom_container-greenDown" />11%</span></div>
        </div>
      </div> -->
      </div>
      <div class="infinite-standard-code" v-if="isShowCode">
        <p :class="showCode(index)" v-for="(code, index) in codes" :key="index">
          {{ code }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
let timer;
let timerout;
export default {
  data() {
    return {
      isShowCode: false,
      row: 0,
      codes: [
        "const { itemData, formModels } = this",
        "const placeholder = itemData.placeholder || ''",
        "formModels[itemData.key] = formModels[itemData.key] || itemData.defaultValue",
        "switch (itemData.type) {",
        "case 'component':",
        "const component = itemData.component(h)",
        "const componentOptions = component.componentOptions",
        // "const sealedOptions = componentOptions.Ctor.sealedOptions",
        "const model = sealedOptions.model",
        "let flag = model && model.event && model.prop",
        // "const listenersFlag = !componentOptions.listeners",
      ],
    };
  },
   watch: {
      isShowCode(showCode) {
       if(showCode){
        
       }
      }
    },
  computed: {
    showCode() {
      return function (currentIndex) {
        return {
          typing_active: this.row === currentIndex,
          typing_normal: this.row < currentIndex,
          typing_opacity: currentIndex === 0,
          typing_pl45: currentIndex >= 5,
          typing_pl20: currentIndex === 3,
          typing_pl30: currentIndex === 4,
        };
      };
    },
  },
  mounted() {
    timer = setInterval(() => {
      this.row += 1;
      if (this.row === this.codes.length) clearInterval(timer);
    }, 1000);

    setTimeout(() => {
      this.isShowCode = true;
    }, 1500);
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>