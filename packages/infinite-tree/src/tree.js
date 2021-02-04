class TreeCtrl {
  constructor() { }
  tempId = 10000
  /**
   * 创建新的节点
   */
  createNode (node) {
    return {
      id: `tempin-${this.tempId++}`,
      'in-input-type': 'input',
      outer: true
    }
  }

  /**
   * 判断是否为新增节点时取消
   */
  isAddCancel (data) {
    return data.id.toString().includes('temp')
  }
}
export default new TreeCtrl()
