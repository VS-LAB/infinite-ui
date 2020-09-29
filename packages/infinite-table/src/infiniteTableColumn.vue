<template>
  <el-table-column
    :type="type"
    :prop="prop"
    :label="label"
    :fixed="fixed"
    :width="width"
    :min-width="minWidth"
    :sortable="sortable"
    :align="align"
    :show-overflow-tooltip="showOverflowTooltip"
  >
  
    <template slot="header" slot-scope="scope">
      <slot name="header" v-bind="{...{},...scope}">{{label}}</slot>
    </template>

    <template slot-scope="scope">
      <slot v-bind="scope">{{scope.row[prop]}}</slot>
    </template>

  </el-table-column>
</template>
<script>
import ElTableColumn from 'element-ui/packages/table-column'
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

  }
}
</script>
