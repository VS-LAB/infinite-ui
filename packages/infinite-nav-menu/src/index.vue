<script>
import ElMenu from 'element-ui/lib/menu'
import ElMenuItem from 'element-ui/lib/menu-item'
import ElSubmenu from 'element-ui/lib/submenu'
export default {
  name: 'InfiniteNavMenu',
  components: {
    ElMenu,
    ElMenuItem,
    ElSubmenu
  },
  props: {
    // menu数据
    data: {
      type: Array,
      default: () => []
    },
    // 模式
    mode: {
      type: String,
      default: 'vertical'
    },
    // 默认选中
    defaultActive: {
      type: String,
      default: ''
    },
    // 当前打开的 sub-menu 的 index 的数组
    defaultOpeneds: {
      type: Array,
      default: () => []
    },
    // 折叠
    collapse: {
      type: Boolean,
      default: false
    },
    // 折叠效果开关
    collapseTransition: {
      type: Boolean,
      default: true
    },
    // 背景颜色
    backgroundColor: {
      type: String,
      default: ''
    },
    // 文案颜色
    textColor: {
      type: String,
      default: ''
    },
    // 文案选中选择
    activeTextColor: {
      type: String,
      default: ''
    },
    // 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
    router: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleSelect (index, indexPath) {
      this.$emit('select', index, indexPath)
    },
    handleOpen (key, keyPath) {
      this.$emit('open', key, keyPath)
    },
    handleClose (key, keyPath) {
      this.$emit('close', key, keyPath)
    }
  },
  mounted () {
    this.open = this.$refs.infiniteNavMenu.open
    this.close = this.$refs.infiniteNavMenu.close
  },
  render (h, context) {
    const {
      data,
      mode,
      defaultActive,
      defaultOpeneds,
      collapse,
      collapseTransition,
      backgroundColor,
      textColor,
      activeTextColor,
      router
    } = this.$props
    function iterate (arr) {
      return arr.map((item, index) => {
        const flat = item.children && item.children.length
        let children = !flat ? [] : iterate(item.children)
        if (flat) {
          const tamplateTitleEl = (<template slot='title'>{item.icon ? <i class={item.icon}></i> : ''}<span>{item.label}</span></template>)
          return h('el-submenu', {
            props: {
              key: item.index,
              index: item.index
            }
          }, [tamplateTitleEl, children])
        } else {
          const componentEl = item.component ? item.component(h) : ([item.icon ? <i class={item.icon}></i> : '', <span slot="title">{item.label}</span>])
          return h('el-menu-item', {
            props: {
              key: item.index,
              index: item.index,
              disabled: item.disabled
            }
          }, [componentEl, children])
        }
      })
    }
    let children = iterate(data)
    let el = h('el-menu', {
      props: {
        mode,
        defaultActive,
        defaultOpeneds,
        collapse,
        collapseTransition,
        backgroundColor,
        textColor,
        activeTextColor,
        router
      },
      'class': ['infinite-nav-menu-container'],
      on: {
        select: this.handleSelect,
        open: this.handleOpen,
        close: this.handleClose
      },
      ref: 'infiniteNavMenu'
    }, children)
    return el
  }
}

</script>
