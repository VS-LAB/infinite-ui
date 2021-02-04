export default {
  methods: {
    // 拖拽开始
    nodeDragStart (node) {
      this.moving = true
      this.dragSuccess = false
      this.draggNode = {
        parent: node.parent,
        nextSibling: node.nextSibling,
        previousSibling: node.previousSibling,
        data: node.data
      }
    },
    // 拖拽结束
    nodeDragEnd () {
      this.moving = false
    },
    // 拽入至其他节点时
    nodeDragEnter (_, innerNode) {
      if (this.isAutoExpandChildren) {
        if (this.dragTimer) {
          clearTimeout(this.dragTimer)
        }
        this.dragTimer = setTimeout(_ => {
          innerNode.expanded = true
        }, 1000)
      }
    },
    // 拖拽成功
    nodeDrop (dragging) {
      this.dragSuccess = true
      // 清除上一次拖拽后的高亮节点
      this.setHighlightNode(null, false)
      // 添加新的高亮节点
      this.setHighlightNode(dragging.data.id)
    },
    // 树节点点击
    nodeClick () {
      if (this.draggable) {
        // 清除上一次拖拽后的高亮节点
        this.setHighlightNode(null, false)
      }
    },
    // 拖拽成功后撤销方法
    revocationDrag () {
      if (this.dragSuccess && this.draggNode) {
        // 移除拖拽后的节点
        this.remove(this.draggNode.data)
        this.dustbin = null
        // 恢复拖拽前的节点
        this.revocationDel(this.draggNode)
        this.draggNode = null
        this.dragSuccess = false
      }
    }
  }
}
