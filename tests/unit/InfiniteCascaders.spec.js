
import { shallowMount } from '@vue/test-utils'
import InfiniteCascaders from '@/packages/infinite-cascaders/src/index.vue'

const getTestData = function () {
  return [
    {
      value: 'inputs',
      label: '输入框',
      children: [
        {
          value: 'input-1',
          label: '数字输入框',
          component: 'input',
          type: 'number'
        },
        {
          value: 'input-2',
          label: '文本输入框',
          component: 'input',
          type: 'text'
        }
      ]
    },
    {
      value: 'button',
      label: '按钮',
      children: [
        {
          value: 'button-1',
          label: '主要按钮',
          name: '主要按钮',
          component: 'button',
          type: 'primary'
        },
        {
          value: 'button-2',
          label: '成功按钮',
          name: '成功按钮',
          component: 'button',
          type: 'success'
        },
        {
          value: 'button-3',
          label: '警告按钮',
          name: '警告按钮',
          component: 'button',
          type: 'warning'
        },
        {
          value: 'button-4',
          label: '危险按钮',
          name: '危险按钮',
          component: 'button',
          type: 'danger'
        }
      ]
    },
    {
      value: 'date-picker',
      label: '日期选择器',
      children: [
        {
          value: 'date-picker-1',
          label: '日选择器',
          component: 'date-picker',
          type: 'date'
        }
      ]
    }
  ]
}

describe('InfiniteCascaders.vue', () => {
  const options = getTestData()
  const vModel = {
    keys: ['button', 'button-1'],
    value: ''
  }
  const wrapper = shallowMount(InfiniteCascaders)

  it('component event emited', async () => {
    await wrapper.setProps({
      vModel,
      options
    })
    // 创建infinite-cascader对应组件event
    const ElButton = wrapper.findComponent({ name: 'InfiniteButton' })
    ElButton.vm.$emit('click')
    expect(wrapper.emitted().componentEvent).toBeTruthy()

    // 创建el-cascader change事件
    const ElCascader = wrapper.findComponent({ name: 'ElCascader' })
    ElCascader.vm.$emit('change')
    expect(wrapper.emitted().cascaderChange).toBeTruthy()

    wrapper.destroy()
  })
})
