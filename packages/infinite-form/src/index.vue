<template>
  <el-form
    ref="infinite-form"
    class="infinite-form"
    :inline="inline"
    :rules="formModels.rules"
    :model="formModels.models"
    :label-width="labelWidth"
  >
    <el-form-item
      v-for="formItem in formData"
      :key="formItem.key"
      :label="formItem.label"
      :class="formItem.class"
      :prop="formItem.key"
    >
      <infiniteDynamicComponent
        v-if="formItem.component"
        :component="formItem.component"
      />
      <infinite-form-item
        v-else
        :ref="formItem.key"
        :itemData="formItem"
        :formModels="formModels.models"
      />
    </el-form-item>
    <el-form-item v-if="formBtns.length > 0" class="infinite-form-btns">
      <el-button
        :type="btn.type"
        v-for="(btn, i) in formBtns"
        :key="i"
        class="infinite-form-btns"
      >
        {{ btn.name }}
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import ElForm from 'element-ui/lib/form'
import ElFormItem from 'element-ui/lib/form-item'
import ElButton from '../../infinite-button'
import InfiniteFormItem from './infiniteFormItem'
import infiniteDynamicComponent from './component/component'
export default {
  name: 'InfiniteForm',
  components: {
    ElForm,
    ElFormItem,
    InfiniteFormItem,
    ElButton,
    infiniteDynamicComponent
  },
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Array,
      default: () => [],
      required: true
    },
    labelWidth: {
      type: String,
      default: '120px'
    },
    formBtns: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    formModels () {
      const { formData = [] } = this
      const result = {
        models: {},
        rules: {}
      }
      formData.forEach((v) => {
        result['models'][v.key] = ''
        result['rules'][v.key] = v.rules || []
      })
      return result
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
