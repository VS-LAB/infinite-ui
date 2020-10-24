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
    </div>
  </div>
</template>
<script>
import ElCascader from 'element-ui/lib/cascader'
import ElInput from 'element-ui/lib/input'
import ElButton from 'element-ui/lib/button'
export default {
  name: 'InfiniteCascaders',
  components: {
    ElCascader,
    ElInput,
    ElButton
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
        this.$emit('componentChange', this.selectNode.defaultValue)
      }
    },
    // 按钮event-click
    onClick () {
      this.$emit('componentClick', this.keys[this.keys.length - 1])
    },
    // 及联动event-chenge
    handleChange () {
      console.log(this.keys)
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
      this.selectNode = JSON.parse(JSON.stringify(selectNode))
      this.$emit('change', {
        keys: this.keys,
        value: this.selectNode.defaultValue || ''
      })
    }
  },
  watch: {
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
