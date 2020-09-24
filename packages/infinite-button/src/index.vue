<template>
  <button
    class="infinite-button"
    :disabled="disabled"
    @click="handleClick"
    :class="[
      `infinite-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
  >
    <i :class="icon" v-if="icon"></i>
    <!-- 如果没有传入插槽的时候才显示 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
// import ElButton from "element-ui/packages/button";
export default {
  name: 'InfiniteButton',
  // components: {
  //   ElButton,
  // },
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
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  },
  mounted () {
    console.log(this.$attrs)
  }
}
</script>
