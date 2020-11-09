<template>
  <div style="height:100%">
    <el-container style="height:100%">
      <el-header height="40">
        <header-model></header-model>
      </el-header>
      <div class="view-container">
        <el-container>
          <el-aside width="240px">
            <menu-model></menu-model>
          </el-aside>
          <el-main>

            <router-view></router-view>
          </el-main>
        </el-container>
      </div>

    </el-container>
  </div>
</template>
<script>
import HeaderModel from './components/header'
import MenuModel from './components/menu'
export default {
  components: {
    HeaderModel,
    MenuModel
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style>
/* 引入代码高亮样式 */
@import "~highlight.js/styles/color-brewer.css";
.el-container .el-main {
  padding-left: 270px;
  padding-bottom: 100px;
  box-sizing: border-box;
}
.el-aside {
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 80px;
  transition: padding-top 0.3s;
}
.el-header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1500;
}
.view-container {
}
</style>
