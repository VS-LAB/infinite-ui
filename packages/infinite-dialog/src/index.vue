<template>
  <el-dialog class="infinite-dialog"
             ref="infiniteDialog"
             :visible="vModel"
             :width="width"
             :top="top"
             :center="center"
             :append-to-body="appendToBody"
             :show-close="showClose"
             :custom-class="customClass"
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
      <slot>默认内容</slot>
    </template>
    <template slot="title">
      <slot name="title">默认标题</slot>
    </template>
    <template v-if="needFooter"
              slot="footer">
      <slot name="footer">
        <span class="dialog-footer-btn dialog-footer">
          <infinite-button v-for="(btn,index) in (operations.length?operations:localOperations)"
                           :key="index"
                           :type="btn.type"
                           @click="handleClick(btn)">
            {{btn.label}}
          </infinite-button>
        </span>
      </slot>
    </template>

  </el-dialog>
</template>
<script>
import ElDialog from 'element-ui/lib/dialog'
import InfiniteButton from '../../infinite-button/src/index'
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
  watch: {
    vModel: {
      handler () {
        if (this.vModel && this.containerHeight) {
          // 设置container-height
          this.$nextTick(() => {
            const infiniteDialogEl = this.$refs.infiniteDialog.$el.querySelectorAll('.el-dialog__body')[0]
            // console.log(this.$refs.infiniteDialog.$refs.dialog)
            // console.dir(this.$refs.infiniteDialog.$children[0].$el)
            // console.dir(this.$refs.infiniteDialog.$el.childNodes[0])x
            // console.log(this.$refs.infiniteDialog.$el.childNodes[0].childNodes[1])
            // console.log(document.getElementsByClassName('el-dialog__body'))
            // console.log(document.getElementsByClassName('el-dialog__body'))
            if (infiniteDialogEl) {
              infiniteDialogEl.style.height = this.containerHeight + 'px'
            }
          })
        }
      },
      immediate: true
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
