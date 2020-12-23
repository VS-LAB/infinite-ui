<template>
  <div class="loading">
    <div class="left">
      <div class="inner"></div>
    </div>
    <div class="right">
      <div class="inner"></div>
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

  }
}
</script>

<style lang='scss' scoped>

$radiusColor1: #4CA9FF;
$width: 3.52vw;
$radius:1vw;

.loading {
  width: $width;
  height: $width;
  position: relative;
  // margin: 1vw;
}

.loading .content {
    position: absolute;
    width: $width - 1vw;
    height: $width - 1vw;
    background-color: white;
    border-radius: 50%;
    left: $radius /2;
    top: $radius/2;
    line-height: $width;
    text-align: center;
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
    // content: "";
    // position: absolute;
    // display: block;
    // width: $radius;
    // height: $radius;
    // border-radius: 50%;
    // background-color: $radiusColor1;
    // left: -$radius/4;
}

.right .inner {
  content: "";
  position: absolute;
  display: block;
  border-radius: 0 $width $width 0;
  &::before{
    content: "";
    width: $radius /2;
    height: $radius /2;
    background: $radiusColor1;
    position: absolute;
    top: 0;
    border-radius: 50%;
    display: block;
    left: -$radius/4;
    z-index: 1;
  };
}
.left .inner {
  transform-origin: right center;
  transform: rotateZ(-135deg);
  &::before{
    content: "";
    width: $radius /2;
    height: $radius /2 ;
    background: $radiusColor1;
    position: absolute;
    top: 0;
    border-radius: 50%;
    display: block;
    right: -$radius/4;
    z-index: 1;
  }
}

.right .inner {
    transform-origin: left center;
    transform: rotateZ(95deg);
}
</style>
