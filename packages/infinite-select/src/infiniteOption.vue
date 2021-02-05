<template>
  <el-option
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-option>
</template>

<script>
import ElOption from 'element-ui/lib/option'
export default {
  name: 'infiniteOption',
  inheritAttrs: false,
  components: {
    ElOption
  }
}
</script>