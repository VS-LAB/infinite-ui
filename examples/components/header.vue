<template>
  <div class="header-model" to ='/'>
    <img src='@/assets/logo.png' alt="Infinite-ui" class="info" @click="toHome()">
    <div class="header-menu" @click="toPath()">组件</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    toHome () {
      this.$router.push('/index')
    },
    toPath () {
      this.$router.push('/guide/installation')
    }
  }
}
</script>
<style lang="scss" scoped>
.header-model {
  width: 1200px;
  height: 80px;
  background: #fff;
  box-sizing: border-box;
  margin: 0 auto;
  display:flex;
  align-items: center;
  text-align: right;
  .info {
   width: 180px;
   &:hover{
    cursor:pointer;
   }
  }
  .header-menu{
    flex: 1;
    font-size: 16px;
    color: #FF7635;
    &:hover{
      cursor:pointer;
      // background: rgba(255,118,53,.1);
      // border-radius: 14px;
    }
  }
}
</style>
