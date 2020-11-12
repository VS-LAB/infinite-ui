import { shallowMount } from '@vue/test-utils'
import InfiniteSelectTags from '@/packages/infinite-select-tags/src/index.vue'
import ElInput from 'element-ui/lib/input'
import ElTag from 'element-ui/lib/tag'
import ElSelect from 'element-ui/lib/select'
import ElOption from 'element-ui/lib/option'
import ElCheckbox from 'element-ui/lib/checkbox'
import InfiniteButton from '@/packages/infinite-button/src'

describe('InfiniteSelectTags.vue', () => {
  // console.log(InfiniteSelectTags)
  const wrapper = shallowMount(InfiniteSelectTags, {
    stubs: {
      ElSelect: ElSelect,
      ElInput: ElInput,
      ElTag: ElTag,
      ElOption: ElOption,
      InfiniteButton: InfiniteButton
    }
  })

  // console.log(wrapper.vm)
  // console.log(wrapper.html())

  it('是否正确渲染', () => {
    expect(wrapper.attributes().class).toContain('infinite-select-tags')
  })

  // 检查已存在的元素
  it('是否有按钮', () => {
    expect(wrapper.find('.infinite-button').exists()).toBe(true)
  })

  // it('触发一个自定义事件', async () => {
  //   await wrapper.vm.$nextTick()
  //   const buttonEls = wrapper.find('.infinite-select-button')
  //   console.log(buttonEls.html())
  //   buttonEls.findComponent(ElCheckbox)
  //   buttonEls.vm.$emit('change')
  //   console.log(wrapper.emitted())
  //   expect(wrapper.emitted().allSelect).toBeTruthy()
  // })

  // it('触发按钮', () => {
  //   // 获取对应按钮
  //   const primaryButton = wrapper.find('.infinite-select-button .infinite-button-stub')
  //   // 点击按钮->注意触发方式不能使用trigger
  //   // primaryButton.vm.$emit('click')
  // })
})
