<template>
  <div class="infinite-select-tags">
    <el-select ref="infiniteSekectTags"
               :value="[]"
               multiple
               :popper-class="`infinite-select-popover ${filterable?'infinite-select-filterable':''}`"
               :popper-append-to-body="false"
               :placeholder="defaultPlaceholder"
               @visible-change="visibleChange"
               :size="size">
      <!-- popper展示核心内容 -->
      <div class="infinite-select-search"
           v-show="filterable">
        <el-input v-model.trim="serachKeyWord"
                  placeholder="请输入字段名称"
                  prefix-icon="el-icon-search" />
      </div>
      <!-- option递归 -->
      <infinite-select-tags-option ref="infiniteSelectTagsOption"
                                   :options="newOptions"
                                   :show-checked="showChecked"
                                   :disabled-keys="disabledKeys"
                                   :titled-desc-options="titledDescOptions"
                                   :parent-ids="parentIds"
                                   :maxLevel='maxLevel'
                                   :showKeys="showKeys"
                                   @change="checkBoxChange"></infinite-select-tags-option>
      <!-- popper占位符 start -->
      <el-option v-for="item in newOptions"
                 :key="item.id"
                 :value="item.id"></el-option>
      <!-- popper占位符 end -->
      <div class="infinite-select-button">
        <el-checkbox v-model="allChecked"
                     :indeterminate="indeterminate"
                     @change="allSelect">全选</el-checkbox>
        <infinite-button type="primary"
                         :size="size"
                         @click="makeSure">确定</infinite-button>
      </div>
      <template slot="prefix">
        <div slot="reference"
             class="infinite-selected">
          <slot name="prefix">
            <div v-if="labels.length > 0"
                 class="infinite-selected-tag">
              <el-tag v-for="(item, i) in labels"
                      v-show="i < tagsNum"
                      :size="size"
                      :key="item">{{ item }}</el-tag>
              <el-tag v-if="labels.length > tagsNum"
                      :size="size"
                      class="last-tag">+{{ labels.length - tagsNum }}</el-tag>
            </div>
          </slot>
        </div>
      </template>
    </el-select>
  </div>
</template>

<script>
import ElInput from 'element-ui/lib/input'
import ElTag from 'element-ui/lib/tag'
import ElSelect from 'element-ui/lib/select'
import ElOption from 'element-ui/lib/option'
import ElCheckbox from 'element-ui/lib/checkbox'
import InfiniteButton from '../../infinite-button'
import infiniteSelectTagsOption from './infiniteSelectTagsOption'

export default {
  name: 'InfiniteSelectTags',
  components: { ElInput, ElTag, ElSelect, ElOption, ElCheckbox, InfiniteButton, infiniteSelectTagsOption },
  model: {
    prop: 'vModel',
    event: 'change'
  },
  props: {
    // checkbox-group遍历的数据
    options: {
      type: Array,
      default: () => []
    },
    defaultCheckeds: {
      type: Array,
      default: () => []
    },
    tagsNum: {
      type: Number,
      default: 3
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    filterable: {
      type: Boolean,
      default: false
    },
    vModel: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  data () {
    return {
      allChecked: false, // 是否默认选中
      checked: {}, // 最终选中的值
      showChecked: {}, // 展示勾选的值
      maxLevel: 2, // 展示最大级
      serachKeyWord: '' // 关键字搜索
    }
  },
  computed: {
    defaultPlaceholder () {
      return this.labels.length > 0 ? '' : this.placeholder
    },
    // input上展示的数据
    labels () {
      const labels = []
      this.titledDescOptions.forEach(el => {
        if (this.checked[el.id]) labels.push(el.name)
      })
      return labels
    },
    // 平铺后的子找父数据
    newOptions () {
      return JSON.parse(JSON.stringify(this.options))
    },
    // 平铺后的子找父数据
    titledOptions () {
      return this.tiledArray(this.newOptions)
    },
    // 平铺后的父找子数据
    titledDescOptions () {
      return this.tiledArray(this.newOptions, { children: 'children' }, true)
    },
    // 禁用了的data
    disabledKeys () {
      const disabledKeys = {}
      this.options.forEach(el => {
        if (el.disabled || disabledKeys[el.id]) {
          disabledKeys[el.id] = true
          if (el.children && el.children.length) {
            el.children.forEach(cEl => {
              disabledKeys[cEl.id] = true
            })
          }
        }
      })
      return disabledKeys
    },
    // 是否显示半选中状态
    indeterminate () {
      const showCheckedArray = Object.keys(this.showChecked).filter(key => this.showChecked[key])
      return !!(showCheckedArray.length && showCheckedArray.length < this.titledOptions.length)
    },
    // 父ID集合
    parentIds () {
      const parentIds = {}
      this.titledDescOptions.forEach(item => {
        if (item.children && item.children.length) {
          item.children.forEach(cItem => {
            parentIds[cItem.id] = item.id
          })
        }
      })
      return parentIds
    },
    showKeys () {
      const showKeys = {}
      this.titledOptions.forEach(item => {
        if (!this.serachKeyWord) {
          showKeys[item.id] = true
        } else {
          showKeys[item.id] = item.name.includes(this.serachKeyWord)
        }
      })
      return showKeys
    }
  },
  watch: {
    titledOptions: {
      handler (val) {
        this.setChecked(['showChecked'])
      },
      immediate: true
    },
    vModel: {
      handler (val, oldVal) {
        this.setChecked(['checked'])
      },
      immediate: true
    },
    defaultCheckeds: {
      handler (val, oldVal) {
        if (val && val.length) {
          if (oldVal && oldVal.join(',') === val.join(',')) return
          this.watchDefaultCheckedsChange(val)
          this.makeSure()
        }
      },
      immediate: true
    }
  },
  methods: {
    // 二级树数据平铺
    tiledArray (json, props = { children: 'children' }, desc) {
      const { children } = props
      const result = []
      const tiledArraying = (data, stop) => {
        data.forEach(item => {
          if (stop) {
            delete item.children
          }
          if (desc) {
            result.push(item)
          }
          if (!status && item[children] && item[children].length && !stop) {
            tiledArraying(item[children], true)
          }
          if (!desc) {
            result.push(item)
          }
        })
      }
      tiledArraying(json)
      return result
    },
    // 设置选中box
    setChecked (attrs) {
      this.titledOptions.forEach((el) => {
        attrs.forEach(attr => {
          this.$set(this[attr], el.id, this.vModel.includes(el.id))
        })
      })
    },
    // 初始化全选
    initAllchecked () {
      let flag = true // 假如全选
      const includesArr = []
      Object.keys(this.showChecked).forEach(el => {
        if (this.showChecked[el]) {
          includesArr.push(el)
        }
      })
      this.titledOptions.forEach(el => {
        if (flag && !includesArr.includes(el.id)) {
          flag = false
        }
      })
      this.allChecked = flag
    },
    // 点击确定按钮
    makeSure () {
      const vModel = []
      Object.keys(this.showChecked).map(key => {
        if (this.showChecked[key]) vModel.push(key)
      })
      this.$emit('change', vModel)
      this.$emit('makeSure')
      const infiniteSekectTagsEl = this.$refs.infiniteSekectTags
      infiniteSekectTagsEl && infiniteSekectTagsEl.blur()
    },
    // 全选按钮的点击事件
    allSelect (val) {
      const status = this.updateNodeStatus(null, val)
      this.titledDescOptions.forEach(item => {
        if (!this.disabledKeys[item.id]) {
          this.$set(this.showChecked, item.id, status)
        }
      })
      this.allChecked = status
      this.$emit('allSelect', status)
    },
    // 下拉框每次显示隐藏时
    visibleChange (val) {
      if (val) {
        // 每次展开时
        this.setChecked(['showChecked'])
        this.initAllchecked()
        this.serachKeyWord = ''
      }
    },
    watchDefaultCheckedsChange (val) {
      if (val && val.length) {
        val.forEach(v => {
          const item = this.titledOptions.filter(nItem => nItem.id === v)[0]
          this.setSiblingCheckbox(item, true)
          this.makeSure()
        })
      }
    },
    // 设置相邻节点checkbox
    setSiblingCheckbox (item, status) {
      const { id } = item
      // 根据父节点设置子节点
      let newDescOptionsIds = [id]
      this.titledDescOptions.forEach(nItem => {
        // 获取当前节点父节点
        const itemPid = this.parentIds[nItem.id]
        // 当遍历节点为子节点时
        if (newDescOptionsIds.includes(itemPid)) {
          // 收集当前节点及当前节点下的所有父节点集合
          newDescOptionsIds.push(nItem.id)
          // 设置遍历节点状态
          this.$set(this.showChecked, nItem.id, status)
        }
      })
      let newOptionsId = id
      // 根据子节点设置父节点及当前节点
      this.titledOptions.forEach(nItem => {
        // 当前节点为遍历节点时
        if (nItem.id === newOptionsId) {
          // 父节点操作
          this.$set(this.showChecked, nItem.id, this.updateNodeStatus(nItem, status, true))
          // 设置遍历节点为当前节点为
          newOptionsId = this.parentIds[nItem.id] || newOptionsId
        }
      })
    },
    // checkbox change
    checkBoxChange (item, index, status) {
      const initStatus = this.updateNodeStatus(item, status)
      this.setSiblingCheckbox(item, initStatus)
      this.initAllchecked()
      this.$emit('checkBoxChange', initStatus)
    },
    // 该节点的子节点是否为可以勾选的节点
    updateNodeStatus (item, status, ifDisabledAttr) {
      // 假设该节点为需要做取消勾选处理
      let flag = !!ifDisabledAttr
      if (!item) {
        // 父节点找子
        const allRootIds = []
        this.newOptions.forEach(oItem => {
          allRootIds.push(oItem.id)
        })
        this.titledDescOptions.forEach(nItem => {
          // 排除禁用节点
          if (!this.disabledKeys[nItem.id]) {
            // 判断遍历节点是否为判断条件
            if (allRootIds.includes(nItem.id)) {
              // 所有所有子节点为父节点
              allRootIds.push(nItem.id)
              // 如果存在一个未勾选的checkbox,说明该状态也不该设置为勾选状态,即返回false
              if (!flag && !this.showChecked[nItem.id]) {
                flag = true
              }
            }
          }
        })
        // let newOptionsIds = item && item.id ? [item.id] : allRootIds
      } else if (!item.children || !item.children.length) {
        flag = status
      } else {
        let newOptionsIds = [item.id]
        this.titledOptions.forEach(nItem => {
          // 排除禁用节点
          if (!this.disabledKeys[nItem.id] || ifDisabledAttr) {
            // 判断遍历节点是否为为子节点
            if (newOptionsIds.includes(this.parentIds[nItem.id])) {
              // 所有所有子节点为父节点
              newOptionsIds.push(nItem.id)
              // 如果存在一个未勾选的checkbox,说明该状态也不该设置为勾选状态,即返回false
              if (ifDisabledAttr) {
                if (flag && !this.showChecked[nItem.id]) {
                  flag = false
                }
              } else {
                if (!flag && !this.showChecked[nItem.id]) {
                  flag = true
                }
              }
            }
          }
        })
      }
      return flag
    }
  }
}
</script>
