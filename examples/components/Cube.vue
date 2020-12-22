<template>
  <div :class="cubeClass">
    <div class="cube_container"
         :style="cubeStyle">
      <div class="face face1"></div>
      <div class="face face2"></div>
      <div class="face face3"></div>
      <div class="face face4"></div>
      <div class="face face5"></div>
      <div class="face face6"></div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    cubeStyle: {
      type: Object,
      default: () => { }
    },
    cubeClass: {
      type: String,
      default: ''
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
$cubeWidth: 20px;
$cubeFaceWidth: 10px;
$rightFaceColor: #ff9947;
$feftFaceColor: #ff5838;
$topFaceColor: #ff7c37;
.flex_center {
  display: flex;
  align-content: center;
  justify-content: center;
}
.cube_container {
  width: $cubeWidth;
  height: $cubeWidth;
  display: inline-block;
  position: relative;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  transition: all 0.3s;
  transform: rotateX(-45deg) rotateY(45deg);

  .face {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100%;
    width: 100%;
    @extend .flex_center;
  }

  .face1 {
    background-color: $rightFaceColor;
    transform: translate(-50%, -50%) translateZ($cubeFaceWidth);
  }

  .face2 {
    background-color: $feftFaceColor;
    transform: translate(-50%, -50%) translateX(-$cubeFaceWidth) rotateY(90deg);
  }

  .face3 {
    background-color: $topFaceColor;
    transform: translate(-50%, -50%) translateY(-$cubeFaceWidth) rotateX(90deg);
  }

  .face4 {
    background-color: $rightFaceColor;
    transform: translate(-50%, -50%) translateX($cubeFaceWidth) rotateY(90deg);
  }
  .face5 {
    background-color: $rightFaceColor;
    transform: translate(-50%, -50%) translateY(9.8px) rotateX(90deg);
  }

  .face6 {
    background-color: $feftFaceColor;
    transform: translate(-50%, -50%) translateZ(-$cubeFaceWidth);
  }
}
</style>
