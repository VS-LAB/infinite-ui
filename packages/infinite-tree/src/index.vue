<template>
  <!-- tree-line -->
  <el-tree ref="infiniteTreeRef"
           class="infinite-tree "
           :class="{
             'in-tree-line':treeLine,
             'in-show-checkbox':$attrs['show-checkbox']
           }"
           v-bind="$attrs"
           v-on="$listeners"
           :props="props"
           :node-key="nodeKey"
           :indent="0"
           :expand-on-click-node="!this.isEditNode"
           :draggable="!operationNode && draggable"
           @node-expand="nodeExpand"
           @node-drag-start="nodeDragStart"
           @node-drag-end="nodeDragEnd"
           @node-drag-enter="nodeDragEnter"
           @node-click="nodeClick"
           @node-drop="nodeDrop">
    <span class="custom-tree-node"
          :class="{'node_editing':data && data[nodeKey] === (operationNode?operationNode.data[nodeKey]:'')}"
          slot-scope="{ node, data }">
      <!-- 非编辑状态 -->
      <span class="custom-tree-node-text"
            :class="{
              'highlight-node':highlightNodeMap[data[nodeKey]]
            }"
            v-if="!data['in-input-type']">
        <slot v-bind="{ node, data }">
          <template v-for="(item,index) in editInputs">
            <template v-if="index && data[item.id || props.label]">({{data[item.id || props.label]}})</template>
            <template v-else>{{data[item.id || props.label]}}</template>
          </template>
        </slot>
      </span>

      <!---编辑节点按钮，只在编辑状态下显示-->
      <span v-if="!moving && isEditNode && !data['in-input-type']"
            class="tree-edit-btns">
        <!-- 节点操作按钮 -->
        <i v-for="(btn,index) in nodeOperationBtn"
           :key="index"
           :class="btn.icon"
           @click="btn.click(data, node)"></i>
      </span>

      <!--编辑状态中...-->
      <div class="editing__content"
           v-else-if="data['in-input-type'] === 'input' && isEditNode">
        <div class="editing__content-group_inputs"
             v-for="(item,index) in editInputs"
             v-show="!item.hidden"
             :key="index">
          <el-input v-model.trim="editInputMap[item.id].value"
                    :disabled="item.disabled"
                    :size="editComponentSize"
                    :placeholder="item.placeholder"
                    @input="validateInput(item)"></el-input>
          <div class="group_inputs-vilidate-error">
            {{item.validateFun && editInputMap[item.id].validateError}}
          </div>
        </div>
        <!-- 编辑节点操作 -->
        <div class="operation-group-btn">
          <infinite-button class="btn-text"
                           :class="btn.class"
                           v-for="(btn,index) in editNodeOperationBtn"
                           :key="index"
                           :type="btn.type"
                           @click="btn.click(data,node)">{{btn.label}}</infinite-button>
        </div>
      </div>

    </span>
  </el-tree>
</template>

<script>
import ElTree from 'element-ui/lib/tree'
import ElInput from 'element-ui/lib/input'
import ElMessage from 'element-ui/lib/message'
import pmMixin from './pmMixin'
import dragMixin from './dragMixin'
import InfiniteButton from '../../infinite-button/src/index.vue'
export default {
  name: 'InfiniteTree',
  mixins: [pmMixin, dragMixin],
  inheritAttrs: false,
  components: {
    ElTree,
    ElInput,
    InfiniteButton
  },
  beforeCreate () {
    this.$message = ElMessage
  },
  data () {
    return {
      // 垃圾回收器
      dustbin: {
        peerDatas: null,
        data: null,
        index: 0
      },
      highlightNodeMap: {}, // 高亮keys集合
      dragTimer: null, // 自动展开定时器
      draggNode: null, // 记录拖拽节点
      moving: false, // 拖拽中
      dragSuccess: false, // 是否拖拽成功
      editInputMap: [], // 输入框集合
      operationNode: null, // 当前操作节点
      peerOperationNodes: null, // 当前操作节点父节点
      // 编辑中的操作按钮
      editNodeOperationBtn: [
        {
          class: 'operation-confirm',
          label: '确定',
          type: 'text',
          click: (data, node) => {
            this.confirmNode(data, node)
          }
        },
        {
          class: 'operation-cancel',
          label: '取消',
          type: 'text',
          click: (data, node) => {
            this.cancelNode(data, node)
          }
        }
      ],
      // 节点操作按钮
      nodeOperationBtn: [
        // 新增
        {
          icon: 'el-icon-circle-plus-outline',
          click: (data, node) => {
            // 判断是否有正在编辑的节点
            this.isInOperation(() => {
              this.$emit('addNodeBefore', data, node)
              this.addNode(data, node)
            })
          }
        },
        // 删除
        {
          icon: 'el-icon-remove-outline',
          click: (_, node) => {
            this.isInOperation(() => {
              this.delSelect(node, true)
            })
          }
        },
        // 编辑
        {
          icon: 'el-icon-edit',
          click: (data, node) => {
            // 判断是否有正在编辑的节点
            this.isInOperation(() => {
              this.$emit('editNodeBefore', data, node)
              this.editNode(data, node)
            })
          }
        }
      ]
    }
  },
  watch: {
    isEditNode: {
      handler (val) {
        if (val) {
          // 初始化编辑时input
          this.editInputs.forEach(item => {
            this.$set(this.editInputMap, item.id, {})
            this.$set(this.editInputMap[item.id], 'value', '')
            this.$set(this.editInputMap[item.id], 'validateError', '')
          })
        }
      },
      immediate: true
    }
  },
  mounted () {
    this.filter = this.$refs.infiniteTreeRef.filter
    this.updateKeyChildren = this.$refs.infiniteTreeRef.updateKeyChildren
    this.getCheckedNodes = this.$refs.infiniteTreeRef.getCheckedNodes
    this.setCheckedNodes = this.$refs.infiniteTreeRef.setCheckedNodes
    this.getCheckedKeys = this.$refs.infiniteTreeRef.getCheckedKeys
    this.setCheckedKeys = this.$refs.infiniteTreeRef.setCheckedKeys
    this.setChecked = this.$refs.infiniteTreeRef.setChecked
    this.getHalfCheckedNodes = this.$refs.infiniteTreeRef.getHalfCheckedNodes
    this.getHalfCheckedKeys = this.$refs.infiniteTreeRef.getHalfCheckedKeys
    this.getCurrentKey = this.$refs.infiniteTreeRef.getCurrentKey
    this.getCurrentNode = this.$refs.infiniteTreeRef.getCurrentNode
    this.setCurrentKey = this.$refs.infiniteTreeRef.setCurrentKey
    this.setCurrentNode = this.$refs.infiniteTreeRef.setCurrentNode
    this.getNode = this.$refs.infiniteTreeRef.getNode
    this.addNotChildrenNodeAttr()
  }
}
</script>
