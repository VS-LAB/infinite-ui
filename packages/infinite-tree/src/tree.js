class TreeCtrl {
  constructor () { }
    id = 1000
    /**
     * 从数据源中删除当前节点
     * @param {*} data 
     * @param {*} node 
     */
    removeCurrentNode (data, node) {
      const index = data.findIndex(d => d.id === node.id)
      data.splice(index, 1)
    }
    /**
     * 创建新的节点
     */
    createNode () {
      return {
        id: `tem${this.id++}`,
        label: '',
        type: 'input',
        children: []
      }
    }
    /**
     * 判断当前节点是否存在TreeData中
     * @param {*} data 
     * @param {*} node 
     */
    isSameNodeName (data, name, currentNode) {
      const result = []
      findChildNode(data, name)
      function findNode (node, value) {
        if (node.label === value && node.id !== currentNode.id) {
          result.push(node)
        }
      }
      function findChildNode (array, value) {
        array.map(c => {
          findNode(c, value)
          if (c.children && typeof (c.children) === 'object') {
            findChildNode(c.children, value)
          }
        })
      }
      return result.length > 0
    }
    /**
     * 判断是否为新增节点时取消
     */
    isAddCancel (data) {
      return data.id.toString().includes('tem')
    }
}
export default new TreeCtrl()
