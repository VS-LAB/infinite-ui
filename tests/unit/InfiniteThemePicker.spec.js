import { shallowMount } from '@vue/test-utils'
import InfiniteThemePicker from '@/packages/infinite-theme-picker/src/index.vue'
import ElColorPicker from 'element-ui/lib/color-picker'
const version = require('element-ui/package.json').version

describe('InfiniteThemePicker.vue', () => {
  const wrapper = shallowMount(InfiniteThemePicker)
  const vModel = '#F41371'

  // 远端样式获取
  it('origin style get methods', async () => {
    // 等待资源响应
    const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
    const mockGetCSSString = jest.fn(wrapper.vm.getCSSString)
    const chalk = await mockGetCSSString(url)
    expect(chalk === '').toBe(false)
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
