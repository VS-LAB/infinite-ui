<template>
  <el-pagination :small="small"
                 :background="background"
                 :page-size="pageSize"
                 :total="total"
                 :pager-count="pagerCount"
                 :current-page="currentPage"
                 :layout="layout"
                 :page-sizes="pageSizes"
                 :popper-class="popperClass"
                 :prev-text="prevText"
                 :next-text="nextText"
                 :disabled="disabled"
                 :hide-on-single-page="hideOnSinglePage"
                 @size-change="sizeChange"
                 @current-change="currentChange"
                 @prev-click="prevClick"
                 @next-click="nextClick">
    <slot />
  </el-pagination>
</template>
<script>
import ElPagination from 'element-ui/lib/pagination'
export default {
  name: 'ElPagination',
  components: {
    ElPagination
  },
  data () {
    return {
      computedHeight: '',
      computedHeightData: this.computedHeightFun
    }
  },
  props: {
    // 是否使用小型分页样式
    small: {
      type: Boolean,
      default: false
    },
    // 是否为分页按钮添加背景色
    background: {
      type: Boolean,
      default: false
    },
    // 每页显示条目个数，支持 .sync 修饰符
    pageSize: {
      type: Number,
      default: 10
    },
    // 总条目数
    total: {
      type: Number,
      default: 0
    },
    // 页码按钮的数量，当总页数超过该值时会折叠
    pagerCount: {
      type: Number,
      default: 7
    },
    // 当前页数，支持 .sync 修饰符
    currentPage: {
      type: Number,
      default: 1
    },
    // 组件布局，子组件名用逗号分隔
    layout: {
      type: String,
      default: 'prev, pager, next, jumper, ->, total'
    },
    // 每页显示个数选择器的选项设置
    pageSizes: {
      type: Array[Number],
      default: () => [10, 20, 30, 40, 50, 100]
    },
    // 每页显示个数选择器的下拉框类名
    popperClass: {
      type: String,
      default: ''
    },
    // 替代图标显示的上一页文字
    prevText: {
      type: String,
      default: ''
    },
    // 替代图标显示的下一页文字
    nextText: {
      type: String,
      default: ''
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 只有一页时是否隐藏
    hideOnSinglePage: {
      type: Boolean,
      default: false
    }

  },
  methods: {
    // pageSize 改变时会触发
    sizeChange (val) {
      this.$emit('sizeChanfe', val)
    },
    // currentPage 改变时会触发
    currentChange (val) {
      this.$emit('currentChange', val)
    },
    // 用户点击上一页按钮改变当前页后触发
    prevClick (val) {
      this.$emit('prevClick', val)
    },
    // 用户点击下一页按钮改变当前页后触发
    nextClick (val) {
      this.$emit('nextClick', val)
    }
  }
}
</script>
