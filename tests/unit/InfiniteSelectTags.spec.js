import { shallowMount } from '@vue/test-utils'
import InfiniteSelectTags from '@/packages/infinite-select-tags/src/index.vue'

describe('InfiniteSelectTags.vue', () => {
  // console.log(InfiniteSelectTags)
  const wrapper = shallowMount(InfiniteSelectTags, {
    propsData: {
      data: { id: 'GBP',
        name: '英镑',
        disabled: true }
    }
  })
  // it('click select', () => {
  //   // const buttonWrapper = wrapper.find({ ref: 'myButton' })
  //   wrapper.trigger('click')
  // })

  it('应该渲染正确的options的长度', () => {
    console.log(wrapper.html())

    // el-select
    wrapper.trigger('focus')
    const box = wrapper.find('.infinite-select-group')
    // expect(box.findAll('div').length).toBe(1)
    // expect(box.findAll('div').at(0).text().toBe('英镑'))
    console.log(box.html())
  })
})
