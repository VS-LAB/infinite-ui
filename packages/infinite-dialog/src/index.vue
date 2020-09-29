<template>
  <el-dialog
    :visible="visible"
    :widh="width"
    :before-close="beforeClose"
    :top="top"
    :center="center"
    @open="open"
    @opened="opened"
    @close="close"
    @closed="closed"
  >
  <template>
    <slot>默认内容</slot>
  </template>
  <template slot="title">
    <slot name="title">{{title}}</slot>
  </template>
  <template slot="footer">
    <slot name="footer">
      <span class="dialog-footer-btn">
        <infinite-button infinite-button v-for="(btn,index) in (operations.length?operations:localOperations)" :key="index" :type="btn.type" @click="handleClick(btn)">
          {{btn.label}}
        </infinite-button>
      </span>
    </slot>
  </template>

  </el-dialog>
</template>
<script>
import ElDialog from 'element-ui/packages/dialog'
import InfiniteButton from '../../infinite-button'
export default {
  name: 'InfiniteDialog',
  components: {
    ElDialog,
    InfiniteButton
  },
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%'
    },
    title: {
      type: String,
      default: '默认标题'
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
    handleClick (btn) {
      btn.click && btn.click()
    },
    // 点击默认确定按钮
    confirm () {
      this.$emit('confirm')
    }
  }
}
</script>
<style lang="scss" scoped>
  .dialog-footer-btn{
    .infinite-button{
      &+.infinite-button{
        margin-left: 10px;
      }
    }
  }
</style>
