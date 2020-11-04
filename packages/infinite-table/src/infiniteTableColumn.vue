<script>
import ElTableColumn from 'element-ui/lib/table-column'
export default {
  name: 'InfiniteTableColumn',
  components: {
    ElTableColumn
  },
  props: {
    prop: {
      type: String,
      default: ''
    },

    label: {
      type: String,
      default: ''
    },

    fixed: [String, Boolean],

    showOverflowTooltip: {
      type: Boolean,
      default: false
    },

    sortable: {
      type: [String, Boolean],
      default: false
    },

    width: {
      type: [String, Number],
      default: ''
    },

    minWidth: {
      type: [String, Number],
      default: ''
    },

    type: String,

    align: {
      type: String,
      default: 'left'
    }
  },
  render (h) {
    const { type, prop, label, fixed, width, minWidth, sortable, align, showOverflowTooltip } = this
    const scopedSlots = !type ? {
      default: scope => {
        const slotsDefault = this.$scopedSlots.default && this.$scopedSlots.default(scope)
        const slotDefault = slotsDefault ? [slotsDefault] : scope.row[prop]
        return h('span', slotDefault)
      },
      header: scope => {
        const slotsDefault = this.$scopedSlots.header && this.$scopedSlots.header(scope)
        const slotDefault = slotsDefault ? [slotsDefault] : label
        return h('span', slotDefault)
      }
    } : {}
    return h('el-table-column', {
      props: {
        type, prop, label, fixed, width, minWidth, sortable, align, showOverflowTooltip
      },
      scopedSlots

    })
  }
}
</script>
