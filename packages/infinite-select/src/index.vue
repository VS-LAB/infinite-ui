<script>
import ElSelect from 'element-ui/lib/select'

export default {
  name: 'InfiniteSelect',
  inheritAttrs: false,
  components: {
    ElSelect
  },
  methods: {
    visibleChange (val) {
      !val && this.$refs.infiniteSelect.blur()
    }
  },
  render (h) {
    return h('el-select', {
      ref: 'infiniteSelect',
      props: this.$attrs,
      on: {
        'visible-change': this.visibleChange,
        ...this.$listeners
      }
    }, [this.$slots.default])
  }
}
</script>
