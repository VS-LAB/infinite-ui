<template>
  <el-button class="infinite-button"
             :disabled="disabled"
             @click="handleClick"
             :plain="plain"
             :round="round"
             :circle="circle"
             :size="size"
             :type="type">
    <i :class="icon"
       v-if="icon">
    </i>
    <!-- 如果没有传入插槽的时候才显示 -->
    <template v-if="$slots.default">
      <slot></slot>
    </template>

  </el-button>
</template>
<script>
import ElButton from 'element-ui/lib/button'
export default {
  name: 'InfiniteButton',
  components: {
    ElButton
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 向上递归查找button DOM
    recursionSetBtnRmFocus (target) {
      if (target) {
        if (target.nodeName === 'BUTTON') {
          target.blur()
        } else {
          this.recursionSetBtnRmFocus(target.parentNode)
        }
      }
    },
    handleClick (e) {
      this.recursionSetBtnRmFocus(e.target)
      this.$emit('click', e)
    }
  }
}
</script>
