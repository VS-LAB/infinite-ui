<script>
import ElInput from 'element-ui/packages/input'
import ElSelect from 'element-ui/packages/select'
// import ElOption from 'element-ui/packages/option'


export default {
  name: 'InfiniteFormItem',
  data () {
    return {
      models: this.formModels
    }
  },
  components: {
    ElInput,
    ElSelect
    // ElOption
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
      case 'select':
        return (<el-select placeholder={placeholder} class={itemData.class} v-model={formModels[itemData.key]}>
        </el-select>)
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
