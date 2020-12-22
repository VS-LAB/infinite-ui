<template>
  <div style="height: 100%">
    <el-container :class="{ 'home-container': isFixed }">
      <!-- <el-header height="80"
                 :class="{ 'header-fixed': !isFixed }">
        <header-model></header-model>
      </el-header> -->
      <div :class="{ 'view-container': !isFixed }">
        <div class="view-container-scroll">
          <router-view></router-view>
        </div>
      </div>
    </el-container>
  </div>
</template>
<script>
// import HeaderModel from './components/header'
export default {
  components: {
    // HeaderModel
  },
  data () {
    return {}
  },
  computed: {
    isFixed () {
      // const { name = '' } = this.$route
      // return name && name.includes('home')
      return false
    }
  }
}
</script>
<style lang='scss' scoped>
.header-fixed {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1500;
  .header-model {
    border-bottom: 1px solid rgba(151, 151, 151, 0.1);
  }
}
.home-container {
  background: url("./assets/bg_header.png") no-repeat top;
  background-size: 2556px;
}
</style>
