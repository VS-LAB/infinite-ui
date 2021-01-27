import { mount } from '@vue/test-utils'
import InfiniteTree from '@/packages/infinite-tree/src/index.vue'
import ElTree from 'element-ui/lib/tree'
import ElInput from 'element-ui/lib/input'
const getTestData = function () {
  return [
    {
      id: 10,
      label: '资源1',
      number: '1',
      children: [
        {
          id: 11,
          label: '资源11',
          number: '11',
          children: [
            {
              id: 111,
              label: '资源111',
              number: '111'
            }
          ]
        }
      ]
    },
    {
      id: 20,
      label: '资源2',
      number: '2',
      children: [
        {
          id: 21,
          label: '资源21',
          number: '21',
          children: [
            {
              id: 211,
              label: '资源211',
              number: '211'
            }
          ]
        },
        {
          id: 22,
          label: '资源22',
          number: '22',
          children: [
            {
              id: 212,
              label: '资源221',
              number: '221'
            }
          ]
        }
      ]
    }
  ]
}
const delay = (time = 1000) => {
  return new Promise(resolve => {
    setTimeout(_ => {
      resolve()
    }, time)
  })
}

describe('InfiniteSelectTags.vue', () => {
  const isEditNode = true
  const data = getTestData()

  const wrapper = mount(InfiniteTree, {
    propsData: {
      draggable: true
    }
  })

  //  新增测试
  it('add node test', async () => {
    await wrapper.setProps({
      data,
      isEditNode: true
    })
    // 获取新增按钮
    const addBtn = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[0].icon}`).at(0)
    // 点击新增按钮，事件触发
    await addBtn.trigger('click')
    expect(wrapper.emitted('addNodeBefore')).toBeTruthy()
    // 获取输入框
    const editInput = wrapper.findComponent(ElInput)
    // 输入内容
    editInput.vm.$emit('input', '哈哈哈哈哈')
    // 获取确认按钮
    const confirmBtn = wrapper.find(`.operation-confirm`)
    // 点击确认按钮
    await confirmBtn.trigger('click')
    // 保存后数据比较
    expect(data[0].children[0].label).toBe('哈哈哈哈哈')
  })

  //  编辑测试
  it('edit node test', async () => {
    // 获取编辑按钮
    const editBtn = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[2].icon}`).at(0)
    // 点击编辑按钮，事件触发
    await editBtn.trigger('click')
    expect(wrapper.emitted('editNodeBefore')).toBeTruthy()
    // 获取输入框
    const editInput = wrapper.findComponent(ElInput)
    // 输入内容
    editInput.vm.$emit('input', '很高兴遇见你')
    // 获取确认按钮
    const confirmBtn = wrapper.find(`.operation-confirm`)
    // 点击确认按钮
    await confirmBtn.trigger('click')
    // 保存后数据比较
    expect(data[0].label).toBe('很高兴遇见你')
  })

  //  删除撤回测试
  it('delete and revocation test', async () => {
    // 获取拥有相邻的下一个节点的按钮
    const deleteBtn0 = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[1].icon}`).at(0)
    // 点击删除按钮，事件触发
    await deleteBtn0.trigger('click')
    expect(wrapper.emitted('handlerDelete')).toBeTruthy()
    // 调用撤回功能
    wrapper.vm.revocationDel()
    // 对比撤销节点值
    expect(data[0].label).toBe('很高兴遇见你')
    await wrapper.vm.$nextTick()
    // 获取拥有相邻的上一个节点的按钮
    const deleteBtn1 = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[1].icon}`).at(1)
    await deleteBtn1.trigger('click')
    // 调用撤回功能
    wrapper.vm.revocationDel()
    // 对比撤销节点值
    expect(data[1].label).toBe('资源2')
    await wrapper.vm.$nextTick()
    // 边界情况:当撤销的节点是唯一的一个子节点时
    // 获取点击删除按钮
    const deleteBtn2 = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[1].icon}`).at(0)
    // 事件触发
    await deleteBtn2.trigger('click')
    await wrapper.vm.$nextTick()
    // 将剩下的节点删除完
    const deleteBtn3 = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[1].icon}`).at(0)
    await deleteBtn3.trigger('click')
    // 调用撤回功能
    wrapper.vm.revocationDel()
    // 对比撤销节点值
    expect(data[0].label).toBe('资源2')
  })

  // 取消测试
  it('cancel test', async () => {
    // 获取编辑按钮
    const editBtn = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[2].icon}`).at(0)
    // 点击编辑按钮
    await editBtn.trigger('click')
    // 获取输入框
    const editInput = wrapper.findComponent(ElInput)
    // 输入内容
    editInput.vm.$emit('input', '极限挑战')
    // 获取取消按钮
    const cancelBtn = wrapper.find(`.operation-cancel`)
    // 点击取消按钮
    await cancelBtn.trigger('click')
    // 保存后数据比较
    expect(data[0].label !== '极限挑战').toBe(true)
  })

  // 编辑时校验重不通过测试
  it('error validate test', async () => {
    await wrapper.setProps({
      data: getTestData()
    })
    // 获取编辑按钮
    const editBtn = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[2].icon}`).at(0)
    // 点击编辑按钮
    await editBtn.trigger('click')
    // 获取输入框
    const editInput = wrapper.findComponent(ElInput)
    // 输入内容
    editInput.vm.$emit('input', '')
    await wrapper.vm.$nextTick()
    // 确定后错误信息比较
    expect(wrapper.find('.group_inputs-vilidate-error').text()).toBe(wrapper.vm.editInputs[0].validateFun(''))
    // 获取确定按钮
    const confirmBtn = wrapper.find(`.operation-confirm`)
    // 点击确定按钮
    await confirmBtn.trigger('click')
    expect(wrapper.emitted('handlerSave').length).toBe(2)
    // 点击取消按钮
    await wrapper.find(`.operation-cancel`).trigger('click')
  })

  // 同层级的重复值的校验测试
  it('sameLevel sameValues test', async () => {
    // 获取编辑按钮
    const editBtn = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[2].icon}`).at(0)
    // 点击编辑按钮
    await editBtn.trigger('click')
    // 获取输入框
    const editInput = wrapper.findComponent(ElInput)
    // 输入内容
    editInput.vm.$emit('input', '资源2')
    // 获取确定按钮
    const confirmBtn = wrapper.find(`.operation-confirm`)
    // 点击确定按钮
    await confirmBtn.trigger('click')
    await wrapper.vm.$nextTick()
    // 确定后错误信息比较
    expect(wrapper.find('.group_inputs-vilidate-error').text()).toBe(wrapper.vm.editInputs[0].sameNameError)
    // 点击取消按钮
    await wrapper.find(`.operation-cancel`).trigger('click')
  })

  // 所有节点的重复值的校验测试
  it('allData sameValues test', async () => {
    const editInputs = [
      {
        id: 'label',
        placeholder: '请输入节点名称',
        sameNameValiMode: 'overall',
        sameNameError: '节点名称重复',
        validateFun: value => {
          return !value ? '节点名称不能为空' : ''
        }
      }
    ]
    const wrapper2 = mount(InfiniteTree, {
      propsData: {
        data: getTestData(),
        isEditNode,
        editInputs
      }
    })
    // 获取编辑按钮
    const editBtn = wrapper2.findAll(`.${wrapper2.vm.nodeOperationBtn[2].icon}`).at(0)
    // 点击编辑按钮
    await editBtn.trigger('click')
    // 获取输入框
    const editInput = wrapper2.findComponent(ElInput)
    // 输入内容
    editInput.vm.$emit('input', '资源21')
    // 获取确定按钮
    const confirmBtn = wrapper2.find(`.operation-confirm`)
    // 点击确定按钮
    await confirmBtn.trigger('click')
    await wrapper2.vm.$nextTick()
    // 确定后错误信息比较
    expect(wrapper2.find('.group_inputs-vilidate-error').text()).toBe(editInputs[0].sameNameError)
    // 点击取消按钮
    await wrapper2.find(`.operation-cancel`).trigger('click')
  })

  // 添加根节点测试
  it('add root node test', async () => {
    // 调用添加根节点方法
    wrapper.vm.addRootNode()
    // 断言添加方法执行完成
    expect(wrapper.emitted('addNode')).toBeTruthy()
    await wrapper.vm.$nextTick()
    // 点击取消按钮
    await wrapper.find(`.operation-cancel`).trigger('click')

    // 当不存在任何节点时添加根节点测试
    // 获取点击删除按钮
    const deleteBtn = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[1].icon}`).at(0)
    // 事件触发
    await deleteBtn.trigger('click')
    await wrapper.vm.$nextTick()
    // 将剩下的节点删除完
    const deleteBtn2 = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[1].icon}`).at(0)
    await deleteBtn2.trigger('click')
    // 调用添加根节点方法
    wrapper.vm.addRootNode()
    // 断言添加方法执行完成
    expect(wrapper.emitted('addNode')).toBeTruthy()
    await wrapper.vm.$nextTick()
    // 点击取消按钮
    await wrapper.find(`.operation-cancel`).trigger('click')
  })

  // 重复操作测试
  it('repetition operation test', async () => {
    await wrapper.setProps({
      data: getTestData()
    })
    // 获取编辑按钮
    const editBtn = wrapper.findAll(`.${wrapper.vm.nodeOperationBtn[2].icon}`).at(0)
    // 点击编辑按钮
    await editBtn.trigger('click')
    // 再次点击编辑按钮
    await editBtn.trigger('click')
    expect(!!wrapper.vm.operationNode).toBe(true)
    // 点击取消按钮
    await wrapper.find(`.operation-cancel`).trigger('click')
  })

  // 设置高亮节点测试
  it('set highlight node test', async () => {
    // 高亮所有节点
    wrapper.vm.setHighlightNode(null)
    // 获取所有节点高亮状态
    const highlightNodeMap = wrapper.vm.highlightNodeMap
    // 是否所有节点都是高亮节点
    const flag = Object.values(highlightNodeMap).every(_ => true)
    expect(flag).toBe(true)
    // 关闭所有高亮节点
    wrapper.vm.setHighlightNode(null, false)
    // 高亮nodeKey（id）的第一个节点--Array参数
    wrapper.vm.setHighlightNode([data[0][wrapper.vm.nodeKey]])
    await wrapper.vm.$nextTick()
    // 断言高亮节点为同一个节点
    expect(wrapper.find('.highlight-node').text()).toBe(data[0][wrapper.vm.editInputs[0].id])
    // 关闭所有高亮节点
    wrapper.vm.setHighlightNode(null, false)
    // 高亮nodeKey（id）的第一个节点--String || Number参数
    wrapper.vm.setHighlightNode(data[0][wrapper.vm.nodeKey])
    await wrapper.vm.$nextTick()
    // 断言高亮节点为同一个节点
    expect(wrapper.find('.highlight-node').text()).toBe(data[0][wrapper.vm.editInputs[0].id])
    // 关闭所有高亮节点
    wrapper.vm.setHighlightNode(null, false)
  })

  // 节点展开后,设置节点是否存在子字节的属性测试
  it('set not-children attr test', async () => {
    // 获取需要做展开的节点
    const nodeExpand = wrapper.find('.el-tree-node__expand-icon')
    // 展开节点
    await nodeExpand.trigger('click')
    await wrapper.vm.$nextTick()
    // 获取展开后的子节点
    const childNode = wrapper.findAll('.el-tree-node').at(1)
    expect(childNode.attributes('not-children')).toBe('true')
  })

  // 模拟拖拽功能测试
  it('draggable test', async () => {
    //  获取树控件
    const localTree = wrapper.findComponent(ElTree)
    //  手动触发开始拖拽
    localTree.vm.$emit('node-drag-start', wrapper.vm.getNode(11))
    expect(wrapper.vm.moving).toBe(true)
    expect(wrapper.vm.dragSuccess).toBe(false)
    //  手动触发拽入至自身节点时
    localTree.vm.$emit('node-drag-enter', null, wrapper.vm.getNode(11))
    //  手动触发拽入至其他节点时
    localTree.vm.$emit('node-drag-enter', null, wrapper.vm.getNode(20))
    await delay(1000)
    expect(!!wrapper.vm.dragTimer).toBe(true)
    //  手动触发结束拖拽
    localTree.vm.$emit('node-drag-end')
    expect(wrapper.vm.moving).toBe(false)
    //  手动触发拖拽成功
    localTree.vm.$emit('node-drop', wrapper.vm.getNode(11))
    expect(wrapper.vm.dragSuccess).toBe(true)
    // 模拟节点移动至
    wrapper.vm.remove(wrapper.vm.getNode(11))
    const testData = getTestData()
    wrapper.vm.insertBefore(testData[0].children[0], wrapper.vm.getNode(21))
    // 调用拖拽后撤销
    wrapper.vm.revocationDrag()
    await wrapper.vm.$nextTick()
    // 断言原节点位资源2位置不变
    expect(localTree.vm.data[0].children[0].label).toBe(testData[0].children[0].label)
    // 手动触发节点点击，清除拖拽后高亮状态,即不存在高亮节点
    localTree.vm.$emit('node-click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.highlight-node').exists()).toBe(false)
  })
})
