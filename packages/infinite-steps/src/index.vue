<template>
  <div class="infinite-steps-container">
    <ElSteps :active="active"
             :align-center="alignCenter"
             :direction="direction"
             :finish-status="finishStatus"
             :simple="simple"
             :space="space"
             :process-status="processStatus">
      <slot></slot>
    </ElSteps>
  </div>
</template>

<script>
import ElSteps from 'element-ui/lib/steps'
import { props } from './props'
export default {
  name: 'InfiniteSteps',
  props: props,
  components: {
    ElSteps
  }
}
</script>
