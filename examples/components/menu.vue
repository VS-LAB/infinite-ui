<template lang="html">
  <div class="menu-model">
    <infinite-nav-menu 
      v-model="menuList" 
      :default-openeds="['1', '2', '3']"
      :default-active="defaultActive"
      :router="true"
    >
    </infinite-nav-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultActive: '/guide/installation',
      mainMenuData: [
        {
          index: '1',
          label: '开发指南',
          children: [
            {
              index: '/guide/installation',
              label: '安装'
            }
          ]
        },
        {
          index: '2',
          label: '通用模块'
        }
      ]
    }
  },
  computed: {
    menuList () {
      const componentlist = []
      this.$router.options.routes.forEach((route) => {
        if (route.meta && route.meta.type === 'component') {
          componentlist.push({
            index: route.path,
            label: route.name
          })
        }
      })
      this.$set(this.mainMenuData[1], 'children', componentlist)
      return this.mainMenuData
    }
  },
  watch: {
    '$route': {
      handler (val) {
        console.log(val)
        const path = val.fullPath
        this.defaultActive = path === '/' ? '/guide/installation' : path
      },
      immediate: true
    }
  }
}
</script>
