import { shallowMount } from '@vue/test-utils'
import InfiniteTree from '@/packages/infinite-tree/src/index.vue'
import ElTree from 'element-ui/lib/tree'
import ElInput from 'element-ui/lib/input'

describe('InfiniteSelectTags.vue', () => {
  // console.log(InfiniteSelectTags)
  const wrapper = shallowMount(InfiniteTree, {
    stubs: {
      ElInput: ElInput,
      ElTree: ElTree
    }
  })

  // console.log(wrapper.vm)
  // console.log(wrapper.html())

  it('是否正确渲染', () => {
    expect(wrapper.html()).toContain('暂无数据')
  })
})
