<template>
  <transition name="el-fade-in-linear">
    <div class="tip_scroll"
         v-show="show">
      <div class="tip_scroll-container">
        <div class="tip_scroll-container-point"></div>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: 'tipScroll',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
$tipColor: #a8abb3;
.tip_scroll {
  width: 30px;
  height: 44px;
  position: fixed;
  z-index: 200;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  &-container {
    height: 100%;
    box-sizing: border-box;
    border: 2px solid $tipColor;
    border-radius: 22px;
    position: relative;
    &-point {
      width: 4px;
      height: 6px;
      border-radius: 8px;
      background-color: $tipColor;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 12px;
      animation: gearMove 1.5s infinite;
    }
  }
}
@keyframes gearMove {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  95% {
    top: 20px;
  }
  100% {
    opacity: 0;
  }
}
</style>
