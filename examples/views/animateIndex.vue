<template>
  <div class="container" @click="changePage">
    <component :is="componentName">
    </component>
  </div>
</template>

<script>
import Standard from '@/views/standard'
import homeAnimation from '@/views/homeAnimation'
import LastPage from '@/views/lastPage'

export default {
  components: {
    Standard,
    homeAnimation,
    LastPage,
  },
  data () {
    return {
      componentName: 'Standard',
      pageIndex: 0,
      pageNameArr: ['Standard', 'homeAnimation', 'LastPage'],
    }
  },
  methods:{
    changePage() {
      console.log('changePagechangePagechangePage');
      console.log('pageNameArr index', this.pageNameArr[this.pageIndex]);
      if (this.pageNameArr[this.pageIndex]) {
        this.componentName = this.pageNameArr[this.pageIndex]
      }
    }
  },
  mounted () {


    function debounce(fn, wait, immediate) {
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
            console.log(this);
            fn.apply(_this, _arg);
            count++;
          }, wait);
        }
      }
    }


    windowAddMouseWheel();
    let self = this;
    function windowAddMouseWheel() {
      var scrollFunc = function (e) {
        e = e || window.event;
        let wheelDistance; // 滑轮滚动距离
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
          wheelDistance = e.wheelDelta
        } else if (e.detail) {  //Firefox滑轮事件
          wheelDistance = e.detail
        }
        if (wheelDistance > 0 && self.pageIndex>=1) { //当滑轮向上滚动时
          self.pageIndex--
          console.log("滑轮向上滚动");
        }
        if (wheelDistance < 0 && self.pageIndex < self.pageNameArr.length - 1) { //当滑轮向下滚动时
          self.pageIndex++
        }
        console.log('[pageIndex]', self.pageIndex);
        self.changePage()
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
