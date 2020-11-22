<template>
  <div class="tree-container">
    <el-tree ref="getNode"
             class="tree"
             :data="treeData"
             :props="defaultProps"
             :draggable="isDraggable"
             :showCheckbox="showCheckbox"
             :default-expand-all="defaultExpandAll"
             :default-expanded-keys="defaultExpandedKeys"
             :node-key="nodeKey"
             :expand-on-click-node="expandOnClickNode">
      <span class="custom-tree-node"
            slot-scope="{ node, data }">
        <!-- 非编辑状态 -->
        <span v-if="data.type === 'text'">{{ node.label }}</span>
        <!--编辑状态-->
        <span v-else-if="data.type === 'input'">
          <div>
            <el-input id="node-input"
                      v-model.trim="nodeInput"
                      placeholder="节点名称不能为空"></el-input>
            <!-- 确定保存按钮 -->
            <infinite-button class="btn-text"
                             type="text"
                             @click="() => saveNode(data)">确定</infinite-button>
            <!-- 取消按钮 -->
            <infinite-button class="btn-text"
                             type="text"
                             @click="() => cancelEdit(data, node)">取消</infinite-button>
          </div>
        </span>
        <!---编辑节点按钮，只在编辑状态下显示-->
        <span v-if="isEditNode && data.type === 'text'"
              class="com-tree-btn"
              @click.stop="">
          <!-- 新增 -->
          <infinite-button icon="el-icon-plus"
                           size="mini"
                           circle
                           type="primary"
                           @click="append(data, node)"></infinite-button>
          <!-- 编辑 -->
          <infinite-button icon="el-icon-edit"
                           size="mini"
                           circle
                           type="info"
                           @click="() => editNode(data)"></infinite-button>
          <!-- 删除 -->
          <infinite-button icon="el-icon-delete"
                           size="mini"
                           circle
                           type="danger"
                           @click="() => remove(node, true)"></infinite-button>
        </span>
      </span>
    </el-tree>

    <infinite-dialog title="确认要删除此节点吗？"
                     v-model="delDialogVisible"
                     width="30%"
                     :operations="operations"
                     :append-to-body="true">
    </infinite-dialog>
  </div>
</template>

<script>
import ElTree from 'element-ui/lib/tree'
import ElInput from 'element-ui/lib/input'
// import ElButton from 'element-ui/lib/button'
import { props } from './props'
import TreeCtrl from './tree'
import InfiniteButton from '../../infinite-button/src/index.vue'
import InfiniteDialog from '../../infinite-dialog/src/index.vue'
export default {
  name: 'InfiniteTree',
  props: props,
  components: {
    ElTree,
    ElInput,
    InfiniteButton,
    InfiniteDialog
  },
  data () {
    return {
      expandOnClickNode: true, // 点击节点是否触发收缩事件
      nodeInput: '', // 节点输入框v-model
      editingNode: [], // 当前编辑的节点
      sameNodeName: false, // 是否存在重名节点
      isRequired: false, // 是否显示非空错误提示
      delDialogVisible: false, // 删除节点确认弹出框
      selectNode: null, // 当前选中的节点
      operations: [
        {
          label: '取消',
          click: () => {
            this.delDialogVisible = false
          }
        },
        {
          label: '确定',
          type: 'primary',
          click: () => {
            this.delSelect(true)
          }
        }
      ]
    }
  },
  watch: {
    // 当开启编辑树节点时，点击树节点时，不做展开伸缩操作
    isEditNode: {
      handler: function (newValue) {
        this.expandOnClickNode = !newValue
      }
    }
  },
  methods: {
    // 新增节点
    append (data, node) {
      if (this.editingNode.length > 0) {
        this.$message.error('请先完成当前操作')
        return
      }
      this.isRequired = false // 初始化输入框校验状态
      this.sameNodeName = false
      this.nodeInput = '' // 初始化输入框值
      this.editingNode.push(TreeCtrl.createNode())
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(...this.editingNode)

      // 将新增节点数据暴露出去
      this.$emit('handlerAdd', data, node)
    },

    // 删除节点
    remove (node, showDialog) {
      this.selectNode = node
      if (showDialog) this.delDialogVisible = true
      else this.delSelect(false)
    },
    // 确认删除节点
    delSelect (showNotify) {
      // 将新增节点数据暴露出去
      this.$emit('handlerDelete', this.selectNode)
      this.delDialogVisible = false
      const parent = this.selectNode.parent
      const treeData = parent.data.children || parent.data
      TreeCtrl.removeCurrentNode(treeData, this.selectNode.data) // 删除树中的节点
      TreeCtrl.removeCurrentNode(this.editingNode, this.selectNode.data) // 删除正在缓存中编辑的节点
      this.sameNodeName = false

      // 删除提示
      showNotify &&
        this.$notify({
          type: 'success',
          title: '操作提示',
          message: '删除成功!',
          duration: 2000
        })
    },
    // 保存编辑的节点
    saveNode (data) {
      // 非空校验
      this.isRequired = this.nodeInput === ''
      if (this.nodeInput === '') {
        this.$message.error('请输入节点名称')
        return
      }
      // 修改节点名称重名判断
      this.sameNodeName = TreeCtrl.isSameNodeName(
        this.treeData,
        this.nodeInput,
        data
      )
      if (this.sameNodeName) {
        this.$message.error('已存在同名节点')
        return
      }
      data.label = this.nodeInput
      this.clearEditStatus(data) // 点击确定保存后清除当前编辑状态

      this.$notify({
        type: 'success',
        title: '操作提示',
        message: '保存成功！',
        duration: 2000
      })
    },
    editNode (data) {
      // 判断是否有正在编辑的节点
      if (this.editingNode.length > 0) {
        this.$message.error('请先完成当前操作')
        return
      }
      data.type = 'input' // 显示输入框
      this.nodeInput = data.label // 修改节点赋值
      this.editingNode.push(data) // 将data添加到正在编辑的节点中
    },
    // 取消编辑
    cancelEdit (data, node) {
      // 判断是新增节点取消还是修改节点取消
      this.isRequired = false
      if (TreeCtrl.isAddCancel(data)) {
        this.remove(node, false) // 删除节点
      } else {
        this.nodeInput = ''
        this.clearEditStatus(data) // 取消编辑状态
      }
    },
    // 清除编辑状态
    clearEditStatus (data) {
      data.type = 'text'
      // 删除正在缓存中编辑的节点
      TreeCtrl.removeCurrentNode(this.editingNode, data)
    }
  }
}
</script>
