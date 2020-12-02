<template lang="html">
  <el-container>
     <el-aside width="240px">
       <menu-model></menu-model>
     </el-aside>
     <el-main>
        <router-view></router-view>
    </el-main>
 </el-container>
</template>

<script>
import MenuModel from '@/components/menu'
export default {
  components: {
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
  width: 100%;
  padding: 0 0 0 270px;
  padding-bottom: 100px;
  box-sizing: border-box;
  overflow: initial;
}
.el-aside {
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 60px;
  transition: padding-top 0.3s;
  z-index: 10;
}
</style>
