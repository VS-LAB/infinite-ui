import { shallowMount } from '@vue/test-utils'
import InfiniteThemePicker from '@/packages/infinite-theme-picker/src/index.vue'
import ElColorPicker from 'element-ui/lib/color-picker'

const later = time => new Promise((resolve) => {
  setTimeout(() => { resolve() }, time)
})

describe('InfiniteThemePicker.vue', () => {
  const wrapper = shallowMount(InfiniteThemePicker)
  const vModel = '#F41371'

  // 远端样式获取
  it('origin style get methods', async () => {
    // 等待资源响应
    await later(3000)
    // toBeTruthy重写ing ...
    expect(wrapper.vm.updateStyle).toBeTruthy()
  })

  // v-model属性匹配
  it('renders props.v-model to toBe value', async () => {
    await wrapper.setProps({
      vModel
    })
    expect(wrapper.attributes().value).toBe(vModel)
  })

  // 自定义方法测试
  it('event test toBeTruthy', () => {
    wrapper.findComponent(ElColorPicker).vm.$emit('change')
    expect(wrapper.emitted('change')).toBeTruthy()
    wrapper.findComponent(ElColorPicker).vm.$emit('active-change')
    expect(wrapper.emitted('activeChange')).toBeTruthy()
    wrapper.destroy()
  })
})
