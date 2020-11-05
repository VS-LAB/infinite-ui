<template>
  <el-button class="infinite-button"
             :disabled="disabled"
             @click="handleClick"
             :plain="plain"
             :round="round"
             :size="size"
             :type="type">
    <i :class="icon"
       v-if="icon">
    </i>
    <!-- 如果没有传入插槽的时候才显示 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
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
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
