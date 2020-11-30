<template>
  <component v-if="typeof component !== 'string'"
             v-bind="component.props"
             v-on="component.events"
             :is="component.name">
  </component>
  <span v-else>{{ component.name }}</span>
</template>

<script>
export default {
  name: 'infinite-dynamic-component',
  componentName: 'infinite-dynamic-component',
  props: {
    component: {
      type: [Object, String],
      required: true
    }
  },
  components: {},
  computed: {
    children () {
      if (!this.component.children) {
        return []
      }
      if (typeof this.component.children === 'string') {
        return [this.component.children]
      }
      if (Array.isArray(this.component.children)) {
        return this.component.children
      }
      return []
    }
  }
}
</script>
