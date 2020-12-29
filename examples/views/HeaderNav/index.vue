<template>
  <div class="header-nav-container"
    :class="showHeaderNav ? 'header-nav-container-show' : 'header-nav-container-hide'"
  >
    <div class="header-nav-container-inner"
      :class="isOpen ? 'header-nav-container-inner-show' : 'header-nav-container-inner-hide'">
      <i class="icon-shutdown header-nav-container-inner-close" @click.stop="menuOpen"></i>
      <div class="header-nav-container-inner-bg"
        :class="isOpen ? 'header-nav-container-inner-bg-show' : 'header-nav-container-inner-bg-hide'"
        @click.stop="menuOpen"></div>
      <ul class="header-nav-container-inner-list" v-if="isOpen">
        <li class="header-nav-container-inner-list-li"
          v-for="(listItem, listIndex) of listTabTitle"
          :key="listIndex"
          :class="`${isOpen ? `header-nav-container-inner-list-li-show` : 'header-nav-container-inner-list-li-hide'}
          ${routerIndex === listIndex ? 'header-nav-container-inner-list-li-active' : ''}`"
          :style="{transition: `all .2s linear .${listIndex}s`}"
          @click="listItem.click()"
        >{{listItem.iconText}} {{listItem.text}}</li>
      </ul>
    </div>
    <div class="header-nav-container-mask" :class="isOpen ? 'header-nav-container-mask-show' : 'header-nav-container-mask-hide'"></div>
    <div class="header-nav-container-logo">
      <img class="header-nav-container-logo-img"
        src="@/assets/logo.png"
        alt="" />
    </div>
    <div class="header-nav-container-tab">
      <div class="header-nav-container-tab-item"
        v-for="(item, index) of navTabTitle"
        :key="index"
        @click="item.click()"
      >{{item.text}}</div>
    </div>
    <div class="header-nav-container-menu">
      <i class="icon-history header-nav-container-menu-out-icon" @click.stop="menuOpen"></i>
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
    routerIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      isOpen: false,
      navTabTitle: [
        {
          text: '首页',
          click: () => { this.toPath() }
        },
        {
          text: '组件',
          click: () => { this.toPath() }
        },
        {
          text: '图标',
          click: () => { this.toPath() }
        },
        {
          text: '图表',
          click: () => { this.toPath() }
        },
        {
          text: '下载',
          click: () => { this.toPath() }
        }
      ],
      listTabTitle: [
        {
          text: '首页',
          iconText: 'Home',
          click: () => { this.toPath() }
        },
        {
          text: '组件',
          iconText: 'Component',
          click: () => { this.toPath() }
        },
        {
          text: '图标库',
          iconText: 'Icon',
          click: () => { this.toPath() }
        },
        {
          text: '可视化图表',
          iconText: 'Chart',
          click: () => { this.toPath() }
        }
      ]
    }
  },
  computed: {
    
  },
  methods: {
    // 展示/关闭弹窗
    menuOpen () {
      console.log('menuOpen')
      this.isOpen = !this.isOpen
    },
    // 目前已有的跳转，都只能跳到组件文档页面
    toPath () {
      this.$router.push('/guide/installation')
    }
  },
  mounted () {
    
  }
}
</script>
<style lang='scss' scoped>
@import "./index.scss";
@media screen and (min-width: 1366px) {
  @import "./index.scss";
}
</style>
