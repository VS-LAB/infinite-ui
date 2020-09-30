<template>
  <component
    v-if="typeof component !== 'string'"
    v-bind="component.props"
    v-on="component.events"
    :is="component.name">
    <infinite-dynamic-component v-for="(item, index) in children" :key="index" :component="item"></infinite-dynamic-component>
  </component>
  <span v-else>{{ component }}</span>
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
  },
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>
