<template lang="html">
  <div class="menu-model">
    <el-menu
      default-active="1"
      :unique-opened="true"
      :default-openeds="['1', '2', '3']"
      :default-active="defaultActive"
      :router="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>开发指南</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/guide/installation">安装</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>通用模块</span>
        </template>
        <el-menu-item-group v-for="menu in menuList" :key="menu.label">
          <el-menu-item :index="menu.index">{{menu.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultActive: '/guide/install'
    }
  },
  computed: {
    menuList () {
      const menulist = []
      this.$router.options.routes.forEach((route) => {
        if (route.meta && route.meta.type === 'component') {
          menulist.push({
            index: route.path,
            label: route.name
          })
        }
      })
      return menulist
    }
  },
  created () {
    const path = this.$route.fullPath
    this.defaultActive = path === '/' ? '/guide/install' : path
  },
  methods: {
  }
}
</script>
