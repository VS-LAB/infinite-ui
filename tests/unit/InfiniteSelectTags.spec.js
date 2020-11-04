import { mount } from '@vue/test-utils'
import InfiniteSelectTags from '@/packages/infinite-select-tags/src/index.vue'

describe('InfiniteSelectTags.vue', () => {
  it('应该渲染正确的options的长度', () => {
    const wrapper = mount(InfiniteSelectTags, {
      propsData: {
        id: 'GBP',
        name: '英镑',
        disabled: true
      }
    })
    const box = wrapper.find('.infinite-select-group')
    expect(box.findAll('div').length).toBe(1)
    // expect(box.findAll('div').at(0).text()).toBe('英镑')
  })
})
