<template>
  <div class="template-container">
    <button class="start" @click.stop="showAniFunc">pageCurrentZindex=={{pageCurrentZindex}}</button>
    <button class="reset" @click.stop="showAniFuncReset">reset</button>
    <div class="page-one" style="width: 100vw;height: 100vh;background: antiquewhite;position: absolute; top:0;"
      :style="{zIndex: pageCurrentZindex === 0 ? 99 : 0}">
      page-onepage-onepage-onepage-onepage-one
      <div class="circle" :class="pageOneAnimateName" style="width: 30vw;height: 30vh;background: blue;">
        test circle
      </div>
    </div>
    <div class="page-four"
      :style="{zIndex: pageCurrentZindex === 3 ? 99 : 0}">
      <IconPage
        :page-current-zindex="pageCurrentZindex"
      ></IconPage>
    </div>
  </div>
</template>

<script>

import IconPage from './IconPage'

export default {
  components: {
    IconPage
  },
  data () {
    return {
      // pageOneZindex: 0,
      // pageTwoZindex: 0
      pageOneAnimateName: '', // 第一个页面动画
      pageCurrentZindex: 0
    }
  },
  methods: {
    // start
    showAniFunc () {
      this.pageCurrentZindex === 3 ? this.pageCurrentZindex = 0 : this.pageCurrentZindex = 3
    },
    // reset
    showAniFuncReset () {
      this.pageCurrentZindex = 0
    }
  },
  mounted () {
    this.showAniFunc()
    document.body.style.overflow = 'auto'
    setTimeout(() => {
      this.pageOneAnimateName = 'slide-up-animate'
      this.pageOneZindex = 1
    }, 2000)

    function debounce (fn, wait, immediate) {
      immediate = immediate || false
      var timer = null
      var count = 0
      return function () {
        var _this = this
        var _arg = arguments
        clearTimeout(timer)
        if (immediate) {
          fn.apply(_this, _arg)
          count++
        } else {
          timer = setTimeout(function () {
            console.log(this)
            fn.apply(_this, _arg)
            count++
          }, wait)
        }
      }
    }

    windowAddMouseWheel()
    let self = this
    function windowAddMouseWheel () {
      var scrollFunc = function (e) {
        e = e || window.event
        let wheelDistance // 滑轮滚动距离
        if (e.wheelDelta) { // 判断浏览器IE，谷歌滑轮事件
          wheelDistance = e.wheelDelta
        } else if (e.detail) { // Firefox滑轮事件
          wheelDistance = e.detail
        }
        if (wheelDistance > 0) { // 当滑轮向上滚动时
          console.log('滑轮向上滚动')
        }
        if (wheelDistance < 0) { // 当滑轮向下滚动时
          self.showAniFunc()
        }
      }
      // 给页面绑定滑轮滚动事件
      if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', debounce(scrollFunc, 300), false)
      }
      // 滚动滑轮触发scrollFunc方法
      document.addEventListener('mousewheel', debounce(scrollFunc, 300))
    }
  }
}
</script>
<style lang='scss' scoped>
  .start {
    position: fixed;
    top: 0;
    left: 1px;
    width: 200px;
    height: 30px;
    z-index: 999;
    &:focus {
      outline: 1px dotted Highlight;
      // outline: 1px auto #fff;
    }
  }
  .reset {
    position: fixed;
    top: 31px;
    left: 0px;
    width: 60px;
    height: 30px;
    z-index: 999;
    &:focus {
      outline: 1px dotted Highlight;
      // outline: 1px auto #fff;
    }
  }

  .template-container{
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .circle {
      opacity:0;
    }
    .slide-up-animate {
      animation: slideUp 0.5s ease-out;
      animation-fill-mode:forwards;
      animation-delay: 0.7s;
    }
  }
</style>
