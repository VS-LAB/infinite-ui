import { shallowMount } from '@vue/test-utils'
import InfiniteTree from '@/packages/infinite-tree/src/index.vue'
import ElTree from 'element-ui/lib/tree'
import $message from 'element-ui/lib/message'
import $notify from 'element-ui/lib/notification'
const getTestData = function () {
  return [
    {
      id: 10,
      label: '一级 1',
      type: 'text',
      children: [
        {
          id: 11,
          label: '二级 1-1',
          type: 'text',
          children: [
            {
              id: 111,
              label: '三级 1-1-1',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      id: 20,
      label: '一级 2',
      type: 'text',
      children: [
        {
          id: 21,
          label: '二级 2-1',
          type: 'text',
          children: [
            {
              id: 211,
              label: '三级 2-1-1',
              type: 'text'
            }
          ]
        },
        {
          id: 22,
          label: '二级 2-2',
          type: 'text',
          children: [
            {
              id: 212,
              label: '三级 2-2-1',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      id: 30,
      label: '一级 3',
      type: 'text',
      children: [
        {
          id: 31,
          label: '二级 3-1',
          type: 'text',
          children: [
            {
              id: 311,
              label: '三级 3-1-1',
              type: 'text'
            }
          ]
        },
        {
          id: 32,
          label: '二级 3-2',
          type: 'text',
          children: [
            {
              id: 312,
              label: '三级 3-2-1',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      id: 40,
      label: '一级 4',
      type: 'text',
      children: [
        {
          id: 41,
          label: '二级 4-1',
          type: 'text',
          children: [
            {
              id: 411,
              label: '三级 4-1-1',
              type: 'text'
            }
          ]
        },
        {
          id: 42,
          label: '二级 4-2',
          type: 'text',
          children: [
            {
              id: 412,
              label: '三级 4-2-1',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      id: 50,
      label: '一级 5',
      type: 'text',
      children: [
        {
          id: 51,
          label: '二级 5-1',
          type: 'text',
          children: [
            {
              id: 511,
              label: '三级 5-1-1',
              type: 'text'
            }
          ]
        },
        {
          id: 52,
          label: '二级 5-2',
          type: 'text',
          children: [
            {
              id: 512,
              label: '三级 5-2-1',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}

describe('InfiniteSelectTags.vue', () => {
  const defaultProps = {
    children: 'children',
    label: 'label'
  }
  const isEditNode = true
  const treeData = getTestData()
  const wrapper = shallowMount(InfiniteTree, {
    mocks: {
      $message,
      $notify
    }
  })

  it('test noData toContain', () => {
    expect(wrapper.findComponent(ElTree).attributes('emptytext')).toBe('暂无数据')
  })

  // 数据是否正确传入
  it('render data attr toBe', async () => {
    await wrapper.setProps({
      treeData,
      defaultProps,
      isEditNode
    })
    expect(wrapper.findComponent(ElTree).vm.data).toBe(treeData)
    expect(wrapper.findComponent(ElTree).vm.props).toBe(defaultProps)
    expect(wrapper.findComponent(ElTree).vm.expandOnClickNode).toBe(!isEditNode)
  })

  // 编辑中非确定的场景
  it('editting noConfirm scenario', () => {
    // 模拟编辑数据
    const mockEditNode = jest.fn(wrapper.vm.editNode)
    mockEditNode(treeData[0])
    // 模拟再次编辑
    mockEditNode(treeData[1])
    expect(mockEditNode).toBeCalledTimes(2)
    // 模拟取消操作
    const mockCancelEdit = jest.fn(wrapper.vm.cancelEdit)
    mockCancelEdit(treeData[0])
    expect(mockCancelEdit).toBeCalledTimes(1)
  })

  // 新增中非确定的场景
  it('add noConfirm scenario', async () => {
    // 模拟新增数据
    const mockAppende = jest.fn(wrapper.vm.append)
    mockAppende(treeData[0])
    // 再次新增数据
    mockAppende(treeData[1])
    expect(mockAppende).toBeCalledTimes(2)
    // emited测试
    expect(wrapper.emitted('handlerAdd').length).toBe(1)
    // 模拟取消操作
    const mockCancelEdit = jest.fn(wrapper.vm.cancelEdit)
    const data = treeData[0].children[treeData[0].children.length - 1]
    const editNode = {
      parent: {
        data: treeData[0],
        children: data
      },
      data
    }
    mockCancelEdit(data, editNode)
    expect(mockCancelEdit).toBeCalledTimes(1)

    // 模拟新增无子节点数据
    mockAppende(treeData[0].children[0].children[0])
    expect(mockAppende).toBeCalledTimes(3)
  })

  // 确定场景
  it('confirm scenario', async () => {
    // 模拟新增数据
    const mockAppende = jest.fn(wrapper.vm.append)
    mockAppende(treeData[0])
    // 再次新增数据
    expect(mockAppende).toBeCalledTimes(1)
    // 模拟无输入值保存操作
    const mockSaveNode = jest.fn(wrapper.vm.saveNode)
    const data = treeData[0].children[treeData[0].children.length - 1]
    mockSaveNode(data)
    // 模拟同名输入值保存操作
    wrapper.vm.nodeInput = treeData[0].label
    mockSaveNode(data)
    // 模拟正常输入值保存操作
    wrapper.vm.nodeInput = treeData[0].label + '测试数据'
    mockSaveNode(data)
    expect(mockSaveNode).toBeCalledTimes(3)
  })

  // 删除弹窗场景
  it('add noConfirm scenario', async () => {
    // 创建无子节点数据操作 
    const data = treeData[1].children[0].children[0]
    const editNode = {
      parent: {
        data: treeData[1].children[0],
        children: data
      },
      data
    }
    const mockRemove = jest.fn(wrapper.vm.remove)
    // 模拟点击删除打开弹窗
    mockRemove(editNode, true)
    expect(mockRemove).toBeCalledTimes(1)
    // 模拟取消点击
    const mockCancelClick = jest.fn(wrapper.vm.operations[0].click)
    mockCancelClick()
    expect(mockCancelClick).toBeCalledTimes(1)
    // 模拟打开删除弹窗
    await wrapper.setData({ delDialogVisible: true })
    // 模拟确定点击
    const mockConfirmClick = jest.fn(wrapper.vm.operations[1].click)
    mockConfirmClick(true)
    expect(mockConfirmClick).toBeCalledTimes(1)
  })
})
