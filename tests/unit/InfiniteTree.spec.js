import { mount } from '@vue/test-utils'
import InfiniteTree from '@/packages/infinite-tree/src/index.vue'
import InfiniteButton from '@/packages/infinite-button/src/index.vue'
import ElTree from 'element-ui/lib/tree'
import ElInput from 'element-ui/lib/input'
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
  // console.log(InfiniteSelectTags)
  const defaultExpandedKeys = [20, 21]
  const defaultProps = {
    children: 'children',
    label: 'label'
  }
  const isEditNode = true
  const treeData = getTestData()
  const wrapper = mount(InfiniteTree, {
    isEditNode,
    defaultProps,
    treeData
  })

  it('test noData toContain', () => {
    expect(wrapper.html()).toContain('暂无数据')
  })

  // 数据是否正确传入
  it('render data attr toBe', async () => {
    // await wrapper.setProps({
    //   treeData
    // })
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(ElTree).vm.data).toBe(treeData)
  })

  // 取消编辑操作
  it('cancel event toBeTruthy', async () => {
    console.log(wrapper.html())
    console.log(wrapper.findAllComponents(InfiniteButton).at(0))
    expect(wrapper.findComponent(ElTree).vm.data).toBe(treeData)
  })
})
