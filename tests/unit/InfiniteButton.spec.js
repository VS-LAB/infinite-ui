import { shallowMount } from '@vue/test-utils'
import InfiniteButton from '@/packages/infinite-button/src/index.vue'
import ElButton from 'element-ui/lib/button'

const getTestData = function () {
  return {
    type: 'success',
    plain: true,
    round: true,
    size: 'small'
  }
}

describe('InfiniteButton.vue', () => {
  const props = getTestData()
  const wrapper = shallowMount(InfiniteButton, {
    propsData: {
      type: props.type,
      plain: props.plain,
      round: props.round,
      size: props.size
    },
    slots: {
      default: '测试按钮'
    },
    stubs: {
      ElButton
    }
  })

  it('event cancel clicked focus', async () => {
    const spanEl = wrapper.find('span')
    await spanEl.trigger('click')
    expect(wrapper.vm.handleClick).toBeTruthy()
  })
})
