<script>
import ElInput from 'element-ui/packages/input'

export default {
  name: 'InfiniteFormItem',
  data () {
    return {
      models: this.formModels
    }
  },
  components: {
    ElInput
  },
  props: {
    itemData: {
      type: Object,
      default: () => {},
      required: true
    },
    formModels: {
      type: Object,
      default: () => {}
    }
  },
  methods: {

  },
  render (h, context) {
    const { itemData, formModels } = this
    const placeholder = itemData.placeholder || ''
    formModels[itemData.key] = formModels[itemData.key] || itemData.defaultValue

    switch (itemData.type) {
      case 'input':
        return (<el-input placeholder={placeholder} class={itemData.class} v-model={formModels[itemData.key]}/>)
      case 'textarea':
        return (<el-input placeholder={placeholder} class={itemData.class} v-model={formModels[itemData.key]}/>) 
      case 'radio':
        return (<el-input placeholder={placeholder} class={itemData.class} v-model={formModels[itemData.key]}/>) 
      case 'date':
        return (<el-input placeholder={placeholder} class={itemData.class} v-model={formModels[itemData.key]}/>)
    }
    return '-'
  }
}
</script>
