<template>
  <div class="infinite-select-group"
       :class="`infinite-select-group-level-${level}`">
    <div v-for="(item, index) in options"
         :key="item.id"
         class="infinite-select-group-box"
         :class="item.children && item.children.length && level < maxLevel?'exist-children':''">
      <el-checkbox v-model="showChecked[item.id]"
                   v-show="showKeys[item.id]"
                   :disabled="disabledKeys[item.id]"
                   :indeterminate="getIndeterminate(item)"
                   @change="change(item, index, $event,getIndeterminate(item))">
        <el-tooltip :content="item.name"
                    placement="top"
                    popper-class="infinite-select-tags-tooltip-popper"
                    :disabled="tooltipDisable[item.id]">
          <div class="infinite-select-tags-tooltip">
            <span :ref="`infinite-select-tags-tooltip${item.id}`">
              {{ item.name }}
            </span>
          </div>
        </el-tooltip>
      </el-checkbox>
      <!-- &&  -->
      <template v-if="item.children && item.children.length && maxLevel > level">
        <infinite-select-tags-option ref="infiniteSelectTagsOptionChildrenRef"
                                     :options="item.children"
                                     :disabledKeys="disabledKeys"
                                     :show-checked="showChecked"
                                     :level="(level)+1"
                                     :showKeys="showKeys"
                                     :maxLevel="maxLevel"
                                     :titled-desc-options="titledDescOptions"
                                     :parent-ids="parentIds"
                                     @change="change" />
      </template>
    </div>
  </div>
</template>

<script>
import ElCheckbox from 'element-ui/lib/checkbox'
import ElTooltip from 'element-ui/lib/tooltip'

export default {
  name: 'InfiniteSelectTagsOption',
  components: { ElCheckbox, ElTooltip },
  props: {
    options: {
      type: Array
    },
    titledDescOptions: {
      type: Array
    },
    showChecked: {
      type: Object,
      default: () => { }
    },
    disabledKeys: {
      type: Object,
      default: () => { }
    },
    level: {
      type: Number,
      default: 1
    },
    maxLevel: {
      type: Number,
      default: 6
    },
    parentIds: {
      type: Object,
      default: () => { }
    },
    showKeys: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      tooltipDisable: {}
    }
  },
  methods: {
    change (item, index, $event) {
      this.$emit('change', item, index, $event)
    },
    // 该节点是否为半选中状态
    getIndeterminate (item) {
      // 子节点总数
      let count = 0
      // 选中的子节点数量
      let checkedCount = 0
      // 父节点找子
      let titledDescOptionsIds = [item.id]
      this.titledDescOptions.forEach(item => {
        if (titledDescOptionsIds.includes(this.parentIds[item.id])) {
          count += 1
          titledDescOptionsIds.push(item.id)
          if (this.showChecked[item.id]) {
            checkedCount += 1
          }
        }
      })
      return !!(checkedCount > 0 && checkedCount < count)
    },
    // 该节点是否禁用tooltip
    setTooltipDisabledFun () {
      this.$nextTick(() => {
        this.options.forEach(item => {
          const selfEl = this.$refs['infinite-select-tags-tooltip' + item.id][0]
          this.$set(this.tooltipDisable, item.id, selfEl.parentNode.offsetWidth >= selfEl.offsetWidth)
        })
        const childRefs = this.$refs.infiniteSelectTagsOptionChildrenRef
        childRefs && childRefs.forEach(item => {
          item.setTooltipDisabledFun()
        })
      })
    }
  }
}
</script>
