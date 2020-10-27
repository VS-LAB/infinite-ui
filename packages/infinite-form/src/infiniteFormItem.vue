<script>
import ElInput from 'element-ui/lib/input'
import ElSelect from 'element-ui/lib/select'
import ElOption from 'element-ui/lib/option'
import DatePicker from 'element-ui/lib/date-picker'
import ElSwitch from 'element-ui/lib/switch'

export default {
  name: 'InfiniteFormItem',
  data () {
    return {
      models: this.formModels
    }
  },
  components: {
    ElInput,
    ElSelect,
    ElOption,
    DatePicker,
    ElSwitch
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
  render (h, context) {
    const { itemData, formModels } = this
    const placeholder = itemData.placeholder || ''
    formModels[itemData.key] = formModels[itemData.key] || itemData.defaultValue
    switch (itemData.type) {
      case 'component': 
        // return h(itemData.component)
        return itemData.component(h)
      case 'input':
        return (<el-input placeholder={placeholder} class={itemData.class} v-model={formModels[itemData.key]}/>)
      case 'select':
        return (<el-select placeholder={placeholder} class={itemData.class} clearable={itemData.clearable} v-model={formModels[itemData.key]}>
          {
            (itemData.options || []).map(o => (<el-option label={o.label} value={o.id} />))
          }
        </el-select>)
      case 'switch':
        return (<el-switch v-model={formModels[itemData.key]}></el-switch>)
      case 'textarea':
        return (<el-input type="textarea" placeholder={placeholder} class={itemData.class} v-model={formModels[itemData.key]}/>) 
      case 'radio':
        return (<el-input placeholder={placeholder} class={itemData.class} v-model={formModels[itemData.key]}/>) 
      case 'own':
        return ''
      case 'date':
        return (
          <el-date-picker
            v-model={formModels[itemData.key]}
            align="right"
            type="date"
            placeholder="选择日期"
            // picker-options={}
          >
          </el-date-picker>
        )
      default: 
        return null
    }
  }
}
</script>
