<template>
  <div class="tree-container">
    <el-tree
      ref="getNode"
      class="tree"
      :data="treeData"
      :props="defaultProps"
      :draggable="isDraggable"
      :showCheckbox="showCheckbox"
      :default-expand-all="defaultExpandAll"
      :default-expanded-keys="defaultExpandedKeys"
      :node-key="nodeKey"
      :expand-on-click-node="expandOnClickNode"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <!-- 非编辑状态 -->
        <span v-if="data.type === 'text'">{{ node.label }}</span>
        <!--编辑状态-->
        <span v-else-if="data.type === 'input'">
          <el-input
            id="node-input"
            v-model="nodeInput"
            placeholder="节点名称不能为空"
          ></el-input>
          <!-- 确定保存按钮 -->
          <i class="btn-text" @click="() => saveNode(data)">确定</i>
          <!-- 取消按钮 -->
          <i class="btn-text" @click="() => cancelEdit(data, node)">取消</i>
          <div class="same-node-error" v-show="sameNodeName">
            已存在同名节点
          </div>
          <div class="same-node-error" v-show="isRequired">请输入节点名称</div>
        </span>
        <!---编辑节点按钮，只在编辑状态下显示-->
        <span v-if="isEditNode && data.type === 'text'" class="com-tree-btn">
          <!-- 新增 -->
          <el-button
            icon="el-icon-plus"
            size="mini"
            circle
            type="primary"
            @click="append(data, node)"
          ></el-button>
          <!-- 编辑 -->
          <el-button
            icon="el-icon-edit"
            size="mini"
            circle
            type="info"
            @click="() => editNode(data)"
          ></el-button>
          <!-- 删除 -->
          <el-button
            icon="el-icon-delete"
            size="mini"
            circle
            type="danger"
            @click="() => remove(node, true)"
          ></el-button>
        </span>
      </span>
    </el-tree>

    <!-- <el-dialog
      title="确认要删除此节点吗？"
      :visible.sync="delDialogVisible"
      width="30%"
      :append-to-body="true"
    >
      <span slot="footer">
        <el-button size="small" @click="delDialogVisible = false">
          取 消
        </el-button>
        <el-button size="small" type="primary" @click="delSelect(true)">
          确 定
        </el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import ElTree from 'element-ui/lib/tree'
import ElInput from 'element-ui/lib/input'
// import ElButton from 'element-ui/lib/button'
import { props } from './props'
import TreeCtrl from './tree'
export default {
  name: 'Tree',
  props: props,
  components: {
    ElTree,
    ElInput
    // ElButton
  },
  data () {
    return {
      expandOnClickNode: true, // 点击节点是否触发收缩事件
      nodeInput: '', // 节点输入框v-model
      editingNode: [], // 当前编辑的节点
      sameNodeName: false, // 是否存在重名节点
      isRequired: false, // 是否显示非空错误提示
      delDialogVisible: false, // 删除节点确认弹出框
      selectNode: null // 当前选中的节点
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
        return
      }
      // 修改节点名称重名判断
      this.sameNodeName = TreeCtrl.isSameNodeName(
        this.treeData,
        this.nodeInput,
        data
      )
      if (this.sameNodeName) {
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

<style lang="less" scoped>
// 显示按钮

.tree-container {
  width: 100%;
  max-width: 700px;
  max-height: 60vh;
  padding: 2em;
  overflow: auto;
  /deep/#node-input {
    height: 25px;
  }

  /deep/.el-tree-node__content {
    height: 100%;
  }
  /deep/.same-node-error {
    margin-top: 4px;
    margin-bottom: 5px;
    font-size: 12px;
    color: red;
  }

  // 高亮显示按钮
  .is-current {
    & > .el-tree-node__content {
      .com-tree-btn {
        opacity: 1;
      }
    }
  }
  // 悬浮显示按钮
  .el-tree-node__content {
    &:hover {
      .com-tree-btn {
        opacity: 1;
      }
    }
  }
  .com-tree-btn {
    margin-left: 10px;
    opacity: 0;
    transition: opacity 0.1s;
    .el-button {
      transform: scale(0.7); // 缩小按钮
      & + .el-button {
        margin-left: -1px;
      }
    }
  }
  .btn-text {
    font-size: 12px;
    color: #409eff;
    margin-right: 5px;
    margin-left: 5px;
  }
}

// .tree /deep/ .is-focusable.is-expanded.el-tree-node:before {
//   content: "";
//   position: absolute;
//   border-left: 1px dashed #b8b9bb;
//   bottom: 0px;
//   height: calc(~"100%-22px");
//   margin: 22px, 0, 0;
//   top: 18px;
//   left: 11px;
//   width: 1px;
// }

.tree /deep/.el-tree-node .el-tree-node__content {
  // height: 30px;

  &:hover .ly-visible {
    visibility: visible;
  }

  // &::before,
  // &::after {
  //   content: "";
  //   position: absolute;
  //   right: auto;
  // }

  // &::before {
  //   border-left: 1px solid #e6e6e6;
  //   bottom: 50px;
  //   height: 100%;
  //   // height: calc(~"100%-22px");
  //   top: 0px;
  //   width: 1px;
  //   margin-top: 25px;
  //   margin-left: 10px;
  // }

  // &::after {
  //   border-top: 1px solid #e6e6e6;
  //   height: 20px;
  //   top: 104px;
  //   width: 10px;
  //   margin-left: -5px;
  // }
}

.el-tree .el-tree-node {
  position: relative;
}
</style>
