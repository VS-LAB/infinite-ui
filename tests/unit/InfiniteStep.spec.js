import { shallowMount } from '@vue/test-utils'
import InfiniteSteps from '@/packages/infinite-steps/src/index.vue'
import InfiniteStep from '@/packages/infinite-steps/src/step.vue'
import ElSteps from 'element-ui/lib/steps'

const renderFun = function (h, length, component) {
  const renders = []
  for (let index = 0; index < length; index++) {
    renders.push(h(component, {
      props: {
        title: '步骤' + index,
        description: '这是一段很长很长很长的描述性文字' + index
      },
      slots: {
        default: index
      }
    }))
  }
  return renders
}

describe('InfiniteSteps.vue', () => {
  const active = 1
  const wrapper = shallowMount({
    render: (h) => {
      return h(InfiniteSteps, {
        props: {
          active
        },
        scopedSlots: {
          default: _ => renderFun(h, 3, InfiniteStep)
        }
      })
    }
  })

  it('test1', async () => {
    console.log(wrapper.html())
    const ElStepWrapper = wrapper.findComponent(ElSteps)
    await wrapper.setProps({
      active: 2
    })
  })

  it('test2', async () => {
    const ElStepWrapper = wrapper.findComponent(ElSteps)
  })
})
