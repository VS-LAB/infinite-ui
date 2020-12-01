<template>
  <div class="infinite-cascader">
    <el-cascader class="infinite-cascader-cascader"
                 v-model="keys"
                 :options="options"
                 :props="initProps"
                 :size="size"
                 :popper-class="`infinite-cascader-popper ${popperClass}`"
                 @change="handleChange">
    </el-cascader>

    <div class="infinite-cascader-component">
      <el-input v-if="selectNode.component === 'input'"
                :type="selectNode.type || 'text'"
                @input="componentEvent"
                :size="size"
                :placeholder="selectNode.placeholder || ''"
                v-model.trim="value" />

      <infinite-button v-if="selectNode.component === 'button'"
                       @click="componentEvent"
                       :size="size"
                       :type="selectNode.type">
        {{selectNode.name}}</infinite-button>

      <el-date-picker v-if="selectNode.component === 'date-picker'"
                      v-model="value"
                      @change="componentEvent"
                      :value-format="selectNode.valueFormat || 'yyyy-MM-dd'"
                      :format="selectNode.format"
                      :size="size"
                      popper-class="infinite-cascader-picker-popper"
                      :placeholder="selectNode.placeholder || ''"
                      :type="selectNode.type ||'date' " />
    </div>
  </div>
</template>
<script>
import ElCascader from 'element-ui/lib/cascader'
import ElInput from 'element-ui/lib/input'
import InfiniteButton from '../../infinite-button/src/index.vue'
import ElDatePicker from 'element-ui/lib/date-picker'
export default {
  name: 'InfiniteCascaders',
  components: {
    ElCascader,
    ElInput,
    InfiniteButton,
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
    },
    size: {
      type: String,
      default: 'small'
    },
    popperClass: {
      type: String,
      default: ''
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
    tiledArray (json, props) {
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
        const initVal = val
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
        const initNewV = newV
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
