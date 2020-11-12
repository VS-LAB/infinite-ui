<template>
  <div class="infinite-select-group"
       :class="`infinite-select-group-level-${level}`">
    <div v-for="(item, index) in options"
         :key="item.id"
         class="infinite-select-group-box"
         :class="item.children && item.children.length && level < maxLevel?'exist-children':''">
      <el-checkbox v-model="showChecked[item.id]"
                   :disabled="disabledKeys[item.id]"
                   :indeterminate="getIndeterminate(item)"
                   @change="change(item, index, $event,getIndeterminate(item))">
        {{ item.name }}
      </el-checkbox>
      <!-- &&  -->
      <template v-if="item.children && item.children.length && maxLevel > level">
        <infinite-select-tags-option :options="item.children"
                                     :disabledKeys="disabledKeys"
                                     :show-checked="showChecked"
                                     :level="level+1"
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

export default {
  name: 'InfiniteSelectTagsOption',
  components: { ElCheckbox },
  props: {
    options: {
      type: Array,
      defualt: () => []
    },
    titledDescOptions: {
      type: Array,
      defualt: () => []
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
    }
  }
}
</script>
