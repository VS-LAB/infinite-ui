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
      ElCheckbox: ElCheckbox,
      ElTag: ElTag,
      ElOption: ElOption,
      InfiniteButton: InfiniteButton
    }
  })

  // console.log(wrapper.vm)
  // console.log(wrapper.html())

  it('是否正确渲染', () => {
    expect(wrapper.html()).toContain('<div class="infinite-select-group"></div>')
  })

  // 检查已存在的元素
  it('是否有按钮', () => {
    expect(wrapper.find('.infinite-button-stub'))
  })

  it('触发一个自定义事件', () => {
    expect(wrapper.findComponent(ElCheckbox).vm.$emit('change'))
  })

  // it('触发按钮', () => {
  //   // 获取对应按钮
  //   const primaryButton = wrapper.find('.infinite-select-button .infinite-button-stub')
  //   // 点击按钮->注意触发方式不能使用trigger
  //   // primaryButton.vm.$emit('click')
  // })
})
