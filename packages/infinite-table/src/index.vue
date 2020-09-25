<template>
  <div class="infinite-table">
    <el-table :data="data"
              width="100%">
      <el-table-column v-for="hItem in header"
                       :key="hItem.prop"
                       :prop="hItem.prop"
                       :label="hItem.label"
                       :width="hItem.width || ''">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import ElTable from 'element-ui/packages/table'
import ElTableColumn from 'element-ui/packages/table-column'
export default {
  name: 'InfiniteTable',
  components: {
    ElTable,
    ElTableColumn
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },

    header: {
      type: Array,
      default: function () {
        return []
      }
    },

    width: [String, Number],

    height: [String, Number],

    maxHeight: [String, Number]
  },
  methods: {},
  mounted () { }
}
</script>
