<template>
  <div class="home">
    <div class="cube bg-white">
      <div class="cube-item"></div>
    </div>
    <div class="btn1" @click="handleNext">前进</div>
    <div class="btn2" @click="handlePrev">后退</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    handleNext () {
      const ele = document.querySelector('.cube')
      ele.classList.add('flow')
    },
    handlePrev () {
      const ele = document.querySelector('.cube')
      ele.classList.remove('flow')
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100vw;
  height: 100vh;
  // background: #fff;
}
.cube-item{
  width: 100px;
  height: 100px;
  background: white;
  animation: scale-cube 1s ease forwards;
};
@keyframes scale-cube {
  0%{
    transform: scale(1);
  }
  100% {
    transform: scale(2);
  }
}

.home {
  // background: #FFF
};

.btn1 {
  position: fixed;
  width: 100px;
  height: 40px;
  line-height: 40px;
  left: 0;
  bottom: 50%;
  cursor: pointer;
  z-index: 100000;
  background: #fff;

}
.btn2 {
  background: #fff;
  position: fixed;
  width: 100px;
  height: 40px;
  line-height: 40px;
  right: 0;
  bottom: 50%;
  cursor: pointer;
  z-index: 100000;
}


.cube {
  transition: all 4s ease;
  transform: translateX(0vw);
}

.flow {
  transform: translateX(40vw);
}

</style>

<style >

</style>
