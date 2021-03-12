<template>
  <el-steps v-bind="$attrs" v-on="$listeners" @change="change" :class="`infinite-steps-container ${stepsClass}`" ref="infiniteSteps">
    <slot></slot>
    <el-step v-for="(item, index) of children" :key="item.key || index" v-bind="item" />
  </el-steps>
</template>
<script>
import ElStep from 'element-ui/lib/step'
import ElSteps from 'element-ui/lib/steps'
export default {
  name: 'InfiniteSteps',
  components: {
    ElStep,
    ElSteps
  },
  props: {
    // steps的数据
    stepsData: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    // step的数据集合
    children () {
      return this?.stepsData?.children || []
    },
    // step的添加类名
    stepsClass () {
      const { combinationDirection } = this.$attrs
      let str = ''
      if (!this.$attrs.hasOwnProperty('align-center')) {
        if (['horizontal'].includes(combinationDirection)) {
          str = 'infinite-steps-step-horizontal' // 水平-标题居右
        }
        if (['vertical'].includes(combinationDirection)) {
          str = 'infinite-steps-step-vertical' // 垂直-标题在底部
        }
      }
      return str
    }
  },
  methods: {
    change (newVal, oldVal) {
      this.$emit('change', newVal, oldVal)
    }
  }
}
</script>
