<template>
  <el-table ref="infiniteTableRef"
            :data="data"
            :stripe="stripe"
            :border="border"
            :height="height || computedHeight || 'auto'"
            :row-class-name="rowClassName"
            :cell-class-name="cellClassName"
            :header-row-class-name="headerRowClassName"
            :header-row-style="headerRowStyle"
            :header-cell-class-name="headerCellClassName"
            :header-cell-style="headerCellStyle"
            @selection-change="selectionChange"
            @sort-change="sortChange"
            :default-sort="defaultSort"
            class="infinite-table"
            width="100%">

    <template v-if="header.length">
      <template v-if="type">
        <infinite-table-column :type="type"
                               width="60px">
        </infinite-table-column>
      </template>

      <infinite-table-column v-for="hItem in header"
                             :key="hItem.prop"
                             :prop="hItem.prop"
                             :label="hItem.label"
                             :fixed="isFixed(hItem)"
                             :min-width="getColumnWidth(hItem)"
                             :sortable="hItem.sortable"
                             :align="hItem.align"
                             :show-overflow-tooltip="hItem.showOverflowTooltip">
        <template v-if="hItem.prop === 'operation'"
                  slot-scope="scope">
          <div class="infinite-table-operation-btn">
            <template v-for="(btn,index) in operations">
              <infinite-button :key="index"
                               :type="btn.type"
                               @click="handleClick(btn,scope.$index, scope.row)">{{btn.label}}</infinite-button>
            </template>
          </div>
        </template>
      </infinite-table-column>

    </template>

    <template v-else>
      <slot></slot>
    </template>

  </el-table>
</template>
<script>
import InfiniteTableColumn from './infiniteTableColumn'
import InfiniteButton from '../../infinite-button/src/index.vue'
import ElTable from 'element-ui/lib/table'
export default {
  name: 'InfiniteTable',
  components: {
    ElTable,
    InfiniteTableColumn,
    InfiniteButton
  },
  data () {
    return {
      computedHeight: '',
      computedHeightData: this.computedHeightFun
    }
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
      default: () => []
    },

    stripe: {
      type: Boolean,
      default: false
    },

    border: {
      type: Boolean,
      default: false
    },

    rowClassName: [String, Function],

    cellClassName: [String, Function],

    headerRowClassName: [String, Function],

    headerRowStyle: [Object, Function],

    headerCellClassName: [String, Function],

    headerCellStyle: [Object, Function],

    needAutoHeight: {
      type: Boolean,
      default: false
    },

    height: [String, Number],

    defaultSort: {
      type: Object,
      default: () => { }
    },

    defaultFontSize: {
      type: Number,
      default: 14
    },

    defaultTdAtuoPadding: {
      type: Number,
      default: 20
    },

    type: {
      type: String,
      default: ''
    },

    operations: {
      type: Array,
      default: () => { }
    }
  },
  methods: {
    // 计算表格高度随父盒子
    computedHeightFun () {
      this.$nextTick(() => {
        // 获取父节点及高度
        const parentElement = this.$refs.infiniteTableRef.$el.parentNode
        if (parentElement) {
          this.computedHeight = parseFloat(window.getComputedStyle(parentElement).height)
        }
      })
    },
    // 选中change
    selectionChange (val) {
      this.$emit('selection-change', val)
    },
    // 远程排序
    sortChange (column) {
      this.$emit('sort-change', column)
    },
    // 获取列自适应宽度
    getColumnWidth (item) {
      let colW = item.width || ''
      // 定义字符区间
      // let charInterval = item.charInterval || [5, 25]
      // const minCharLength = charInterval[0]
      // const maxCharLength = charInterval[1]
      // 当前满足header存在切开启了needAutoWidth为true时计算
      if (item.needAutoWidth && this.header.length) {
        const CDW = this.computedDomWidth(item.prop, item.label)
        return CDW + 1 + this.defaultTdAtuoPadding
      }
      return colW
    },
    computedDomWidth (prop, label) {
      const ws = [this.getRealDomWidth(label)]
      this.data.forEach(item => {
        ws.push(this.getRealDomWidth(item[prop]))
      })
      return Math.max(...ws)
    },
    getRealDomWidth (name) {
      let rEl = document.getElementById('realDom')
      if (!rEl) {
        // 生成DOM
        rEl = document.createElement('span')
        rEl.style.fontSize = this.defaultFontSize + 'px'
        rEl.id = 'realDom'
        document.body.append(rEl)
      }
      // 删除DOM
      clearTimeout(this.clearREl)
      this.clearREl = setTimeout(() => {
        rEl.remove()
      })
      rEl.innerHTML = name
      return rEl.offsetWidth
    },
    isFixed (item) {
      if (item.prop === 'operation') {
        return 'right'
      }
      return item.fixed
    },
    // 操作按钮点击
    handleClick (item, index, row) {
      item.click && item.click(index, row)
    }
  },
  mounted () {
    // 设置tabel methods
    // 切换选中状态
    this.toggleRowSelection = this.$refs.infiniteTableRef.toggleRowSelection
    // 取消选中
    this.clearSelection = this.$refs.infiniteTableRef.clearSelection

    // 设置高度拉伸
    if (!this.height && this.needAutoHeight) {
      this.computedHeightData()
      window.addEventListener('resize', () => {
        this.computedHeightData()
      })
    }
  },
  beforeDestroy () {
    this.computedHeightData = () => { }
  }
}
</script>
