<template>
  <div class="cascader-container">
    <el-cascader class="cascader-container-cascader"
                 v-model="keys"
                 :options="options"
                 :props="initProps"
                 @change="handleChange">
    </el-cascader>

    <div class="cascader-container-component">
      <el-input v-if="selectNode.component === 'input'"
                :type="selectNode.type"
                @input="componentEvent"
                :placeholder="selectNode.placeholder || ''"
                v-model="value" />

      <el-button v-if="selectNode.component === 'button'"
                 @click="componentEvent"
                 :type="selectNode.type">
        {{selectNode.name}}</el-button>

      <el-date-picker v-if="selectNode.component === 'date-picker'"
                      v-model="value"
                      @change="componentEvent"
                      value-format="yyyy-MM-dd"
                      :placeholder="selectNode.placeholder || ''"
                      :type="selectNode.type" />
    </div>
  </div>
</template>
<script>
import ElCascader from 'element-ui/lib/cascader'
import ElInput from 'element-ui/lib/input'
import ElButton from 'element-ui/lib/button'
import ElDatePicker from 'element-ui/lib/date-picker'
export default {
  name: 'InfiniteCascaders',
  components: {
    ElCascader,
    ElInput,
    ElButton,
    ElDatePicker
  },
  model: {
    prop: 'vModel',
    event: 'change'
  },
  props: {
    vModel: {
      type: Object,
      default: () => {
        return {
          keys: [],
          value: ''
        }
      }
    },
    options: {
      type: Array,
      default: () => []
    },
    props: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      keys: [],
      value: '',
      selectNode: {},
      initProps: {
        value: 'value',
        label: 'label',
        children: 'children',
        disabled: 'disabled'
      }
    }
  },
  methods: {
    // 输入框event-input
    componentEvent () {
      this.setVModel()
      this.$emit('componentEvent', this.value)
    },
    // 及联动event-chenge
    handleChange () {
      this.value = ''
      this.setSelectNode()
      this.setVModel()
      this.$emit('cascaderChange', this.keys)
    },
    // 初始化本地参数
    initParam () {
      this.initProps = { ...this.initProps, ...this.props }
      const { keys, value } = this.vModel
      this.keys = keys
      this.value = value
    },
    // 设置选中节点
    setSelectNode () {
      const { value } = this.initProps
      const selectNode = this.tiledOptions.find(item => item[value] === this.keys[this.keys.length - 1])
      this.selectNode = selectNode || {}
    },
    // 设置vModel
    setVModel () {
      const vModel = {
        keys: this.keys,
        value: this.value
      }
      this.$emit('change', vModel)
    },
    // json数据平铺
    tiledArray (json, props = { children: 'children' }) {
      const { children } = props
      const result = []
      const tiledArraying = (data) => {
        data.forEach(item => {
          if (item[children] && item[children].length) {
            tiledArraying(item[children])
          }
          result.push(item)
        })
      }
      tiledArraying(json)
      return result
    }

  },
  watch: {
    // 由于数据可能是动态的，所有在监听里边做初始化
    options: {
      handler (val) {
        const initVal = val || []
        this.initParam()
        this.tiledOptions = this.tiledArray(initVal, { children: this.initProps.children })
        this.setSelectNode()
      },
      immediate: true,
      deep: true
    },
    // 双向绑定的v-model被父组件变动时，及时更新上去
    vModel: {
      handler (newV, oldV) {
        const initNewV = newV || {}
        this.keys = initNewV.keys
        this.value = initNewV.value
        initNewV.keys && this.setSelectNode()
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
