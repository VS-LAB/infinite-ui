
export const
  props = {
    defaultProps: {
      type: Object,
      default: () => {
        return {
          children: 'child',
          lable: 'lable'
        }
      }
    },
    treeData: { // 数据源
      type: Array,
      default: () => []
    },
    showCheckbox: { // 是否现实复选框
      type: Boolean,
      default: false
    },
    defaultExpandAll: { // 默认是否展开全部
      type: Boolean,
      default: true
    },
    defaultExpandedKeys: { // 默认展开的节点
      type: Array,
      default: () => []
    },
    nodeKey: { // 节点数据中的字段名称，必须唯一
      type: String,
      default: 'id'
    },
    isEditNode: { // 是否可编辑树节点
      type: Boolean,
      default: false
    },
    isDraggable: {// 是否可拖拽
      type: Boolean,
      default: false
    },
    getNode: {
      type: Function,
      default: () => { }
    }
  }
