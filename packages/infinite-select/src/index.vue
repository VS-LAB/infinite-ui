<template>
  <el-select
    v-bind="$attrs"
    ref="infiniteSelect"
    v-on="$listeners"
  >
    <slot>
      <infinite-option>
      </infinite-option>
    </slot>
  </el-select>
</template>

<script>
import ElSelect from 'element-ui/lib/select'
import infiniteOption from './infiniteOption'

export default {
  name: 'InfiniteSelect',
  inheritAttrs: false,
  components: {
    ElSelect,
    infiniteOption
  },
  mounted () {
    this.visibilityChangeHandler()
  },
  methods: {
    visibilityChangeHandler () {
      const _this = this
      if (document.visibilityState === 'visible') {
        _this.$refs && _this.$refs.infiniteSelect && _this.$refs.infiniteSelect.blur()
      }
      window.addEventListener('blur', () => {
        _this.$refs && _this.$refs.infiniteSelect && _this.$refs.infiniteSelect.blur()
      })
    }
  }
}
</script>