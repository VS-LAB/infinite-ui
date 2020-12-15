<template>
  <el-dialog class="infinite-dialog"
             :custom-class="`${customClass} infinite-dialog-popper`"
             ref="infiniteDialog"
             :visible="vModel"
             :title="title"
             :width="width"
             :top="top"
             :center="center"
             :append-to-body="appendToBody"
             :show-close="showClose"
             :modal-append-to-body="modalAppendToBody"
             :close-on-click-modal="closeOnClickModal"
             :close-on-press-escape="closeOnPressEscape"
             :destroy-on-close="destroyOnClose"
             :before-close="beforeClose"
             @open="open"
             @opened="opened"
             @close="close"
             @closed="closed">
    <template>
      <div v-if="containerHeight"
           :style="{height:`${containerHeight}px`}">
        <slot></slot>
      </div>
      <slot v-else></slot>
    </template>
    <template v-if="!title"
              slot="title">
      <slot name="title">{{$slots}}</slot>
    </template>
    <template v-if="needFooter"
              slot="footer">
      <slot name="footer">
        <span class="dialog-footer-btn dialog-footer">
          <infinite-button v-for="(btn,index) in (operations.length?operations:localOperations)"
                           :key="index"
                           :size="btn.size"
                           :type="btn.type"
                           @click="handleClick(btn,index)">
            {{btn.label}}
          </infinite-button>
        </span>
      </slot>
    </template>

  </el-dialog>
</template>
<script>
import ElDialog from 'element-ui/lib/dialog'
import InfiniteButton from '../../infinite-button/src/index.vue'
export default {
  name: 'InfiniteDialog',
  components: {
    ElDialog,
    InfiniteButton
  },
  model: {
    prop: 'vModel',
    event: 'change'
  },
  props: {
    vModel: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '默认标题'
    },
    width: {
      type: String,
      default: '50%'
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    // 弹窗距离顶部高度
    top: {
      type: String,
      default: '15vh'
    },
    // 操作按钮
    operations: {
      type: Array,
      default: () => []
    },
    // 操作按钮
    center: {
      type: Boolean,
      default: false
    },
    // 需要footer <slot>
    needFooter: {
      type: Boolean,
      default: true
    },
    containerHeight: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      localOperations: [
        {
          label: '取消',
          click: this.close
        },
        {
          label: '确定',
          type: 'primary',
          click: this.confirm
        }
      ]
    }
  },
  methods: {
    // Dialog 打开的回调
    open () {
      this.$emit('change', true)
      this.$emit('open')
    },
    // Dialog 打开动画结束时的回调
    opened () {
      this.$emit('opened')
    },
    // Dialog 关闭前的回调
    beforeClose () {
      this.$emit('change', false)
      this.$emit('beforeClose')
    },
    // Dialog 关闭的回调
    close () {
      this.$emit('change', false)
      this.$emit('close')
    },
    // Dialog 关闭动画结束时的回调
    closed () {
      this.$emit('closed')
    },
    // 默认按钮点击event
    handleClick (btn, index) {
      btn.click && btn.click(btn, index)
    },
    // 点击默认确定按钮
    confirm () {
      this.$emit('confirm')
    }
  }
}
</script>
