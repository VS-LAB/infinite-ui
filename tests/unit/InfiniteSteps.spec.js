
import { shallowMount, mount } from '@vue/test-utils'
import InfiniteSteps from '@/packages/infinite-steps/src/index.vue'
import ElStep from 'element-ui/lib/step.js'

const stepsData = {
  children: [
    {
      title: '步骤一',
      description: '这里是步骤一的一些基本描述'
    },
    {
      title: '步骤二',
      description: '这里是步骤二的一些基本描述'
    },
    {
      title: '步骤三',
      description: '这里是步骤三的一些基本描述'
    }
  ]
}
const active = 0

describe('InfiniteSteps.vue', () => {
  it('InfiniteSteps data to match step', async () => {
    const wrapper = shallowMount(InfiniteSteps)
    await wrapper.setProps({
      stepsData,
      active
    })
    const ElStepWrapper = wrapper.findAllComponents(ElStep)
    const examinationStep = (data, element) => {
      data.forEach((item, index) => {
        expect(ElStepWrapper.at(index).attributes('title')).toContain(item.title)
      })
    }
    examinationStep(stepsData?.children || [])
  })

  it('InfiniteStep class has infinite-steps-step-horizontal', () => {
    const wrapper = shallowMount(InfiniteSteps, {
      attrs: {
        combinationDirection: 'horizontal'
      }
    })
    wrapper.setProps({
      stepsData,
      active
    })
    expect(wrapper.attributes().class).toContain('infinite-steps-step-horizontal')
  })
  it('InfiniteStep class has infinite-steps-step-vertical', () => {
    const wrapper = shallowMount(InfiniteSteps, {
      attrs: {
        combinationDirection: 'vertical'
      }
    })
    wrapper.setProps({
      stepsData,
      active
    })
    expect(wrapper.attributes().class).toContain('infinite-steps-step-vertical')
  })

  it('component event emited', async () => {
    const wrapper = mount(InfiniteSteps)
    await wrapper.setProps({
      stepsData,
      active
    })
    expect(wrapper.emitted().change).toBeTruthy()
  })
})
