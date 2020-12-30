<template>
  <div class="loading">
    <div class="left">
      <div class="inner"
        :class="{
          'rotate-step-1': renderAni
        }"
      ></div>
    </div>
    <div class="right">
      <div class="inner"/>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Radius1',
  props: {
    renderAni: Boolean
  },
  data () {
    return {
      show: false
    }
  },
  watch: {
    renderAni: function (val) {
      if (val) {
        this.showSmallRoundEdge()
      }
    }
  },
  methods: {
    showSmallRoundEdge () {
      const _this = this
      setTimeout(()=>{
        _this.show = true
      }, 320)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./Radius2.scss";

@media screen and (min-width: 1440px) {
  @import "./Radius2.scss";
}
</style>
