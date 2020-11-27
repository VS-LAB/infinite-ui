<script>
import ElTableColumn from 'element-ui/lib/table-column'
import ElTooltip from 'element-ui/lib/tooltip'
export default {
  name: 'InfiniteTableColumn',
  components: {
    ElTableColumn,
    ElTooltip
  },
  data () {
    return {
      concatTooltipOption: {
        effect: 'dark',
        popperClass: '',
        placement: 'top'
      },
      disableds: {},
      content: {},
      tooltipResizes: {}
    }
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
    },
    tooltipFilter: {
      type: Function,
      default: (val) => {
        return val
      }
    },
    tooltipOption: {
      type: Object,
      default: () => { }
    }
  },
  mounted () {
    this.concatTooltipOption = { ...this.concatTooltipOption, ...this.tooltipOption }
  },
  render (h) {
    const that = this
    const { type, prop, label, fixed, width, minWidth, sortable, align, showOverflowTooltip, disableds, content, tooltipFilter, tooltipResizes, concatTooltipOption } = this
    const scopedSlots = !type ? {
      default: scope => {
        const soleID = scope.column.id + '' + scope.$index
        const slotsDefault = this.$scopedSlots.default && this.$scopedSlots.default(scope)
        const slotDefault = slotsDefault ? [slotsDefault] : scope.row[prop]
        let tooltip = null
        // 添加tooltip场景
        if (showOverflowTooltip) {
          tooltip = h('el-tooltip', {
            props: {
              popperClass: 'infinite-table-column-tooltip-popper ' + concatTooltipOption.popperClass,
              disabled: that.disableds[soleID],
              effect: concatTooltipOption.effect,
              placement: concatTooltipOption.placement
            },
            'class': 'infinite-table-column-tooltip',
            ref: 'infiniteTableColumnTooltipRef'
          }, [h('div', [h('span', [slotDefault])]), (content[soleID])])
        }
        const endSlot = [showOverflowTooltip ? tooltip : slotDefault]
        this.$nextTick((val) => {
          // 每一个td在设置showOverflowTooltip后，切没有tooltipResizes方法时才进行初始化
          if (showOverflowTooltip && !tooltipResizes[soleID]) {
            // 设置每一个tooltipResizes，拉伸拼屏幕时动态设置tooltip开关功能
            this.$set(tooltipResizes, soleID, () => {
              const td = endSlot[0].elm
              const curentTd = parseFloat(window.getComputedStyle(td).width)
              const tdChild = parseFloat(td.children[0].offsetWidth)
              // 计算tooltip开关状态
              const newdisabled = curentTd >= tdChild
              that.$set(disableds, soleID, newdisabled)
              let slotTooltip = ''
              // 这里特殊处理插槽渲染时，返回纯文本，便于过滤
              if (typeof slotDefault === 'string') {
                slotTooltip = slotDefault
              } else {
                const elm = slotDefault[0][0].elm
                slotTooltip = elm.nodeType === 3 ? elm.textContent.trim() : elm.innerText
              }
              let showTooltip = typeof slotDefault === 'string' ? slotDefault : slotTooltip
              // 设置过滤文本器
              that.$set(content, soleID, (<div class="infinite-table-column-tooltip-popper-container" slot="content">{tooltipFilter(showTooltip)}</div>))
            })
            tooltipResizes[soleID]()
            window.addEventListener('resize', tooltipResizes[soleID])
          }
        })
        return h('div', {}, endSlot)
      },
      header: scope => {
        const slotsDefault = this.$scopedSlots.header && this.$scopedSlots.header(scope)
        const slotDefault = slotsDefault ? [slotsDefault] : label
        return h('span', slotDefault)
      }
    } : {}
    return h('el-table-column', {
      props: {
        type, prop, label, fixed, width, minWidth, sortable, align, showOverflowTooltip: false
      },
      scopedSlots
    })
  },
  beforeDestroy () {
    Object.keys(this.tooltipResizes).forEach(key => {
      window.removeEventListener('resize', this.tooltipResizes[key])
    })
  }
}
</script>
