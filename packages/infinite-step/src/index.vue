<template>
  <el-step v-bind="$attrs" v-on="$listeners"/>
</template>
<script>
import ElStep from 'element-ui/lib/step'
export default {
  name: 'InfiniteStep',
  components: {
    ElStep
  }
}
</script>
