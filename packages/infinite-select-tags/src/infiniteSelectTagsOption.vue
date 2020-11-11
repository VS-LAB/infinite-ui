<template>
  <div class="infinite-select-group"
       :class="`infinite-select-group-level-${level}`">
    <div v-for="(item, index) in options"
         :key="item.id"
         class="infinite-select-group-box">
      <el-checkbox v-model="showChecked[item.id]"
                   :disabled="item.disabled"
                   :indeterminate="getIndeterminate(item)"
                   @change="change(item, index, $event)">
        {{ item.name }}
      </el-checkbox>
      <template v-if="item.children && item.children.length">
        <infinite-select-tags-option :options="item.children"
                                     :show-checked="showChecked"
                                     :level="level+1"
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
    showChecked: {
      type: Object,
      default: () => { }
    },
    level: {
      type: Number,
      default: 1
    }
  },
  methods: {
    change (item, index, $event) {
      this.$emit('change', item, index, $event)
    },
    // 该节点是否为半选中双胎
    getIndeterminate (item) {
      // 选中数量
      let count = 0
      if (item.children && item.children.length) {
        item.children.forEach(item => {
          Object.keys(this.showChecked)
          if (this.showChecked[item.id]) {
            count++
          }
        })
      }
      return !!(count > 0 && count < item.children.length)
    }
  }
}
</script>
