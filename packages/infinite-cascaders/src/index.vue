<template>
  <div class="cascader-container">
    <el-cascader class="cascader-container-cascader"
                 v-model="keys"
                 :options="options"
                 @change="handleChange">
    </el-cascader>

    <div class="cascader-container-component">
      <el-input v-if="selectNode.component === 'input'"
                :type="selectNode.type"
                @input="onInput"
                v-model="selectNode.defaultValue" />

      <el-button v-if="selectNode.component === 'button'"
                 @click="onClick"
                 :type="selectNode.type">
        {{selectNode.name}}</el-button>

      <el-date-picker v-if="selectNode.component === 'date-picker'"
                      v-model="selectNode.defaultValue"
                      @change="onChange"
                      value-format="yyyy-MM-dd"
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
      tiledOptions: [],
      selectNode: {},
      reProps: {
        expandTrigger: 'click',
        multiple: false,
        checkStrictly: false,
        value: 'value',
        label: 'label',
        children: 'children',
        disabled: 'disabled',
        leaf: 'leaf'
      }
    }
  },
  methods: {
    // 输入框event-input
    onInput () {
      this.$emit('change', { keys: this.keys, value: this.selectNode.defaultValue })
      if (this.selectNode.component === 'input' && this.selectNode.defaultValue !== this.vModel.value) {
        this.$emit('componentInput', this.selectNode.defaultValue)
      }
    },
    // 按钮event-click
    onClick () {
      this.$emit('componentClick', this.keys[this.keys.length - 1])
    },
    // 按钮event-click
    onChange (val) {
      this.$emit('componentChange', val)
    },
    // 及联动event-chenge
    handleChange () {
      this.setSelectNode()
      this.$emit('cascaderChange', this.keys)
    },
    // 获取options平铺数据
    getTiledArrayed () {
      const { children } = this.reProps
      const result = []
      const tiledArray = (data) => {
        data.forEach(item => {
          if (item[children] && item[children].length) {
            tiledArray(item[children])
          }
          result.push(item)
        })
      }
      tiledArray(this.options)
      return result
    },
    // 初始化本地参数
    initParam () {
      this.reProps = { ...{}, ...this.reProps, ...this.props }
      const { keys, value } = this.vModel
      this.keys = keys
      this.value = value
    },
    // 设置选中节点
    setSelectNode () {
      const { value } = this.reProps
      const selectNode = this.tiledOptions.find(item => item[value] === this.keys[this.keys.length - 1])
      this.selectNode = selectNode ? JSON.parse(JSON.stringify(selectNode)) : {}
      const defaultValue = this.selectNode.defaultValue || ''
      this.$emit('change', {
        keys: this.keys,
        value: defaultValue
      })
    }
  },
  watch: {
    // 由于数据可能是动态的，所有在监听里边做初始化
    options: {
      handler (val) {
        if (val && val.length) {
          this.initParam()
          this.tiledOptions = this.getTiledArrayed()
          this.setSelectNode()
        }
      },
      immediate: true
    }
  }
}
</script>
