<template>
  <div class="infinite-select-tags">
    <el-select ref="infiniteSekectTags"
               :value="[]"
               multiple
               popper-class="infinite-select-popover"
               :popper-append-to-body="false"
               :placeholder="defaultPlaceholder"
               @visible-change="visibleChange"
               size="large">
      <!-- popper展示核心内容 -->
      <div class="infinite-select-search"
           v-if="filterable">
        <el-input placeholder="请输入字段名称"
                  prefix-icon="el-icon-search"
                  @input="keyWordChange" />
      </div>
      <!-- option递归 -->
      <infinite-select-tags-option ref="infiniteSelectTagsOption"
                                   :options="options"
                                   :show-checked="showChecked"
                                   :disabled-keys="disabledKeys"
                                   :new-desc-options="newDescOptions"
                                   :parent-ids="parentIds"
                                   :maxLevel='maxLevel'
                                   @change="change"></infinite-select-tags-option>
      <!-- popper占位符 start -->
      <el-option v-for="item in options"
                 :key="item.id"
                 :value="item.id"></el-option>
      <!-- popper占位符 end -->
      <div class="infinite-select-button">
        <el-checkbox v-model="allChecked"
                     @change="allSelect">全选</el-checkbox>
        <infinite-button type="primary"
                         @click="makeSure">确定</infinite-button>
        <!-- :indeterminate="indeterminate" -->
      </div>
      <template slot="prefix">
        <div slot="reference"
             class="infinite-selected">
          <div v-if="labels.length > 0"
               class="infinite-selected-tag">
            <el-tag v-for="(item, i) in labels"
                    v-show="i < tagsNum"
                    :key="item">{{ item }}</el-tag>
            <el-tag v-if="labels.length > tagsNum"
                    class="last-tag">+{{ labels.length - tagsNum }}</el-tag>
          </div>
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
    options: {
      // checkbox-group遍历的数据
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
    }
  },
  data () {
    return {
      allChecked: false, // 是否默认选中
      checked: {}, // 最终选中的值
      showChecked: {}, // 展示勾选的值
      maxLevel: 2 // 展示最大级
    }
  },
  computed: {
    defaultPlaceholder () {
      return this.labels.length > 0 ? '' : this.placeholder
    },
    // input上展示的数据
    labels () {
      const labels = []
      this.newDescOptions.forEach(el => {
        if (this.checked[el.id]) labels.push(el.name)
      })
      return labels
    },
    // 平铺后的子找父数据
    newOptions () {
      return this.tiledArray(this.options)
    },
    // 平铺后的父找子数据
    newDescOptions () {
      return this.tiledArray(this.options, { children: 'children' }, true)
    },
    // 禁用了的data
    disabledKeys () {
      const disabledKeys = {}
      this.newDescOptions.forEach(el => {
        if (el.disabled || disabledKeys[el.id]) {
          disabledKeys[el.id] = true
          if (el.children && el.children.length) {
            el.children.forEach(cItem => {
              disabledKeys[cItem.id] = true
            })
          }
        }
      })
      return disabledKeys
    },
    // 禁用且选中的data
    disabledAndCheckedKeys () {
      const disabledAndCheckedKeys = {}
      this.newOptions.forEach(el => {
        if (this.disabledKeys[el.id] && this.vModel.includes(el.id)) {
          disabledAndCheckedKeys[el.id] = true
        }
      })
      return disabledAndCheckedKeys
    },
    // 是否显示半选中状态
    indeterminate () {
      const showCheckedArray = Object.keys(this.showChecked).filter(key => this.showChecked[key])
      return !!(showCheckedArray.length && showCheckedArray.length < this.newOptions.length)
    },
    // 父ID集合
    parentIds () {
      const parentIds = {}
      this.newDescOptions.forEach(item => {
        if (item.children && item.children.length) {
          item.children.forEach(cItem => {
            parentIds[cItem.id] = item.id
          })
        }
      })
      return parentIds
    }
  },
  watch: {
    newOptions: {
      handler (val) {
        this.setChecked(['showChecked'])
      },
      immediate: true
    },
    vModel: {
      handler () {
        this.setChecked(['checked', 'showChecked'])
      },
      immediate: true
    }
  },
  methods: {
    // json数据平铺
    tiledArray (json, props = { children: 'children' }, desc) {
      const { children } = props
      const result = []
      const tiledArraying = (data, status) => {
        data.forEach(item => {
          if (desc) {
            result.push(item)
          }
          if (!status && item[children] && item[children].length) {
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
      this.newOptions.forEach((el) => {
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
      this.newOptions.forEach(el => {
        if (flag && !includesArr.includes(el.id)) {
          flag = false
        }
      })
      // this.allChecked = flag
    },
    // 点击确定按钮
    makeSure () {
      const vModel = []
      Object.keys(this.showChecked).map(key => {
        if (this.showChecked[key]) vModel.push(key)
      })
      this.$emit('change', vModel)
      this.$refs.infiniteSekectTags.blur()
    },
    // 全选按钮的点击事件
    allSelect (val) {
      this.newDescOptions.forEach(item => {
        if (!this.disabledKeys[item.id]) {
          this.$set(this.showChecked, item.id, val)
        }
      })
      // this.allChecked = this.crtNodeHashCheck(null, val)
    },
    // 下拉框每次显示隐藏时
    visibleChange (val) {
      if (val) {
        // 每次展开时
        this.setChecked(['showChecked'])
        this.initAllchecked()
      }
    },
    // 设置相邻节点checkbox
    setAdjacentCheckboc (item, status) {
      const { id } = item
      // 父节点找子
      console.log(this.newDescOptions)
      let newDescOptionsIds = [id]
      this.newDescOptions.forEach(item => {
        const itemPid = this.parentIds[item.id]
        if (newDescOptionsIds.includes(itemPid) && !this.disabledKeys[item.id]) {
          newDescOptionsIds.push(item.id)
          this.$set(this.showChecked, item.id, status)
        }
      })

      let newOptionsId = id
      // 子节点找父
      this.newOptions.forEach(item => {
        if (item.id === newOptionsId) {
          if (newOptionsId !== id) {
            this.$set(this.showChecked, item.id, status)
          }
          newOptionsId = this.parentIds[item.id] || newOptionsId
        }
      })
    },
    // 该节点是否为全选中
    crtNodeIsChecked (item) {
      let flag = true
      if (item.chiildren && item.children.length) {
        item.children.forEach(item => {
          if (flag && !this.showChecked[item.id]) {
            flag = false
          }
        })
      }
      return flag
    },
    // checkbox change
    change (item, index, status) {
      this.setAdjacentCheckboc(item, status)
      this.initAllchecked()
    },
    // 该节点的子节点是否为可以勾选的节点
    crtNodeHashCheck (item, status) {
      let flag = false
      if (item && (!item.children || !item.children.length)) {
        flag = status
      } else {
        // 父节点找子
        const allRootIds = []
        if (!item) {
          this.options.forEach(oItem => {
            allRootIds.push(oItem.id)
          })
        }
        let newOptionsIds = item ? [item.id] : allRootIds
        this.newOptions.forEach(nItem => {
          if (newOptionsIds.includes(this.parentIds[nItem.id]) && !this.disabledKeys[nItem.id]) {
            newOptionsIds.push(nItem.id)
            // 如果不存在选中的checkbox，说明该状态为勾选状态
            if (flag && !this.showChecked[nItem.id]) {
              flag = true
            }
          }
        })
      }
      return flag
    }
  }
}
</script>
