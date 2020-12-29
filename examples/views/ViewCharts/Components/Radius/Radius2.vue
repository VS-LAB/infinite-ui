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

$radiusColor1: #4CA9FF;
$width: 70 * 2px;
$radius: 30px;
$animtion-time: 0.4s;

.loading {
  width: $width;
  height: $width;
  position: relative;
  transform: rotate(45deg);
}

.loading .content {
  position: absolute;
  width: $width - $radius;
  height: $width - $radius;
  background-color: white;
  border-radius: 50%;
  left: $radius/2;
  top: $radius/2;
  line-height: $width;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left,
.right {
  width: $width / 2;
  height: $width;
  overflow: hidden;
  position: relative;
  float: left;
  background-color: #ECEEF1
}

.left {
  border-radius: $width 0 0 $width;
}

.right {
  border-radius: 0 $width $width 0;
  transform: translateX(-0.1PX);
}

.left .inner,
.right .inner {
  content: "";
  position: absolute;
  display: block;
  width: $width / 2;
  height: $width;
  background-color: white;
  border-radius: $width 0 0 $width;
  background-color: $radiusColor1;
}

.left::before,
.right::before {
  content: "";
  position: absolute;
  display: block;
  width: $radius / 2;
  height: $radius / 2;
  border-radius: 50%;
  background-color: $radiusColor1;
  left: -$radius/4;
}

.left .inner {
  transform-origin: right center;
  transition: all  $animtion-time linear;
  transform: rotateZ(180deg);
  position: relative;
  &::before{
    content: "";
    width: $radius / 2;
    height: $radius / 2;
    background: $radiusColor1;
    position: absolute;
    border-radius: 50%;
    display: block;
    bottom: 0;
    right: -$radius/4;
    z-index: 1;
  }
  &.rotate-step-1{
    transform: rotateZ(26deg);
  };
}

.right .inner {
  content: "";
  position: absolute;
  display: block;
  border-radius: 0 $width $width 0;
  transform-origin: left center;
  transform: rotateZ(180deg);
  &::before{
    display: none;
    content: "";
    width: $radius / 2;
    height: $radius / 2;
    background: $radiusColor1;
    position: absolute;
    top: 0;
    border-radius: 50%;
    left: -$radius/4;
    z-index: 1;
  };
  &.show-small-round-edge{
    &::before{
      display: block;
    }
  };
  &.rotate-step-1{
    transform: rotateZ(135deg);
  };
}
</style>
