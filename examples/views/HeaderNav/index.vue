<template>
  <div class="header-nav-container"
    :class="showHeaderNav ? 'header-nav-container-show' : 'header-nav-container-hide'"
  >
    <div class="header-nav-container-inner"
      :class="isOpen ? 'header-nav-container-inner-show' : 'header-nav-container-inner-hide'">
      <div class="header-nav-container-mask" 
        :class="isOpen ? 'header-nav-container-mask-show' : 'header-nav-container-mask-hide'"
        @click.stop="menuOpen"></div>
      <i class="icon-close header-nav-container-inner-close" @click.stop="menuOpen"></i>
      <div class="header-nav-container-inner-bg"
        :class="isOpen ? 'header-nav-container-inner-bg-show' : 'header-nav-container-inner-bg-hide'"></div>
      <div class="header-nav-container-inner-list">
        <ul class="header-nav-container-inner-list-ul">
          <li class="header-nav-container-inner-list-ul-li"
            v-for="(listItem, listIndex) of listTabTitle"
            :key="listIndex"
            :class="`${isOpen ? `header-nav-container-inner-list-ul-li-show` : 'header-nav-container-inner-list-ul-li-hide'}
            ${routerIndex === listIndex ? 'header-nav-container-inner-list-ul-li-active' : ''}`"
            @click="listItem.click()"
          >{{listItem.iconText}} {{listItem.text}}</li>
        </ul>
      </div>
    </div>
    <div class="header-nav-container-logo">
      <img class="header-nav-container-logo-img"
        src="@/assets/logo.png"
        alt="" />
    </div>
    <div class="header-nav-container-tab">
      <div class="header-nav-container-tab-item"
        v-for="(item, index) of navTabTitle"
        :key="index"
        :class="`${item.disabled ? 'header-nav-container-tab-item-unactive' : 'header-nav-container-tab-item-nomal'} 
        ${$route.path === item.route ? 'header-nav-container-tab-item-active' : ''}`"
        @click="item.click()"
        @mouseenter="mouseover(item, index)" 
        @mouseleave="mouseLeave(item, index)"
      >
        {{item.text}}
        <div class="header-nav-container-tab-item-hover" v-if="tabActiveIndex === index + 1">
          <span>敬请期待</span>
        </div>
      </div>
    </div>
    <div class="header-nav-container-menu">
      <i class="icon-nav header-nav-container-menu-out-icon" @click.stop="menuOpen"></i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderNav',
  props: {
    showHeaderNav: {
      type: Boolean,
      default: false
    },
    closeHeaderInner: {
      type: Boolean,
      default: false
    },
    routerIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    showHeaderNav (val) {
      if (!val) {
        this.isOpen = false
      }
    },
    closeHeaderInner (val) {
      this.isOpen = false
    }
  },
  data () {
    return {
      isOpen: false, // 下拉蒙层是否打开
      tabActiveIndex: 0, // 气泡提示
      navTabTitle: [
        {
          text: '首页',
          route: '/index',
          click: () => { this.toPath(1, 'Home') }
        },
        {
          text: '组件',
          click: () => { this.toPath() }
        },
        {
          text: '图标',
          disabled: true,
          click: () => { }
        },
        {
          text: '图表',
          disabled: true,
          click: () => { }
        },
        {
          text: '下载',
          disabled: true,
          click: () => { }
        }
      ],
      listTabTitle: [
        {
          text: '首页',
          iconText: 'Home',
          click: () => { this.toPath(1, 'Home') }
        },
        {
          text: '组件',
          iconText: 'Component',
          click: () => { this.toPath(1, 'Component') }
        },
        {
          text: '图标库',
          iconText: 'Icon',
          click: () => { this.toPath(1, 'Icon') }
        },
        {
          text: '可视化图表',
          iconText: 'Chart',
          click: () => { this.toPath(1, 'Chart') }
        }
      ],
      scale: 1
    }
  },
  computed: {
    
  },
  methods: {
    // 鼠标进入
    mouseover (item, index) {
      if (item.disabled) {
        this.tabActiveIndex = index + 1
      }
    },
    // 鼠标离开
    mouseLeave (item, index) {
      this.tabActiveIndex = 0
    },
    // 展示/关闭弹窗
    menuOpen () {
      console.log('menuOpen')
      this.isOpen = !this.isOpen
    },
    // 目前已有的跳转，都只能跳到组件文档页面
    toPath (type, typwName) {
      if (type) {
        this.$emit('goAnimationStep', typwName)
      } else {
        this.$router.push('/guide/installation')
      }
    },
    setAutoFill () {
      const { clientHeight } = document.documentElement
      const element = document.querySelector('.header-nav-container-inner-list-ul')
      const elementTransform = element.style.transform
      const { height } = element.getBoundingClientRect()
      const thresholdValue = 0.1 // 防止不够，多缩小一点
      if ((clientHeight - height) < 100) {
        const scale = 1 - Math.abs(clientHeight - height) / height - thresholdValue
        this.scale = scale
        element.style.transform = elementTransform + `scale(${scale})`
        element.style.transformOrigin = 'left center'
      }
    }
  },
  mounted () {
    this.setAutoFill()
  }
}
</script>
<style lang='scss' scoped>
@import "./index.scss";
@media screen and (min-width: 1360px) {
  @import "./index.scss";
}
</style>
