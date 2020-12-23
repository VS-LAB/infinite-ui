<template>
  <div class="container">
    <component ref="componnet"
               :style="{zIndex:100-index,position:'fixed',width:'100vw',height:'100vh'}"
               v-for="(component,index) in pageNameArr"
               :is="component"
               :key="component">
    </component>
  </div>
</template>

<script>
import LogAnimation from '@/views/LogAnimation'
import CardsAnimation from '@/views/CardsAnimation'
import Standard from '@/views/standard'
import homeAnimation from '@/views/homeAnimation'
import LastPage from '@/views/lastPage'

export default {
  components: {
    LogAnimation,
    CardsAnimation,
    Standard,
    homeAnimation,
    LastPage,
  },
  data () {
    return {
      animesFun: [],
      animeIndex: 0,
      completeAnimation: false,
      pageNameArr: ['LogAnimation', 'CardsAnimation', 'Standard'],
      // pageNameArr: ['LogAnimation', 'CardsAnimation', 'Standard', 'homeAnimation', 'LastPage'],
    }
  },
  methods: {
    async next () {
      this.completeAnimation = false
      this.completeAnimation = await this.animesFun[this.animeIndex]()
    },
    async prev () {
      this.completeAnimation = false
      this.completeAnimation = await this.animesFun[this.animeIndex + 1](true)
    }
  },
  mounted () {
    let animesFun = []
    this.$refs.componnet.forEach(c => {
      animesFun = [...animesFun, ...(c.animesFun || [])]
    })
    this.animesFun = animesFun
    this.next()
    function debounce (fn, wait, immediate) {
      immediate = immediate || false;
      var timer = null;
      var count = 0;
      return function () {
        var _this = this;
        var _arg = arguments;
        clearTimeout(timer);
        if (immediate) {
          fn.apply(_this, _arg);
          count++;
        } else {
          timer = setTimeout(function () {
            fn.apply(_this, _arg);
            count++;
          }, wait);
        }
      }
    }


    windowAddMouseWheel();
    let self = this;
    function windowAddMouseWheel () {
      var scrollFunc = function (e) {
        e = e || window.event;
        let wheelDistance; // 滑轮滚动距离
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
          wheelDistance = e.wheelDelta
        } else if (e.detail) {  //Firefox滑轮事件
          wheelDistance = e.detail
        }
        console.log(self.completeAnimation);
        if (self.completeAnimation) {
          if (wheelDistance > 0 && self.animeIndex >= 1) { //当滑轮向上滚动时
            self.animeIndex -= 1
            console.log("滑轮向上滚动");
            self.prev()
          }
          console.log(self.animeIndex, self.animesFun.length);
          console.log(self.animeIndex < self.animesFun.length - 1);
          if (wheelDistance < 0 && self.animeIndex < self.animesFun.length - 1) { //当滑轮向下滚动时
            self.animeIndex += 1
            console.log("滑轮向下滚动");
            self.next()
          }
        }
      };
      //给页面绑定滑轮滚动事件
      if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', debounce(scrollFunc, 300), false);
      }
      //滚动滑轮触发scrollFunc方法
      document.addEventListener('mousewheel', debounce(scrollFunc, 300));
    }


  }
}
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
}
</style>
