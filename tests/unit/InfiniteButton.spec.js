import { mount } from '@vue/test-utils'
import InfiniteButton from '@/packages/infinite-button/src/index.vue'

const getTestData = function () {
  return [
    {
      type: 'success',
      plain: true,
      round: true,
      size: 'small'
    },
    {
      type: 'info',
      plain: true,
      round: true,
      size: 'small'
    },
    {
      type: 'warning',
      plain: true,
      round: true,
      size: 'small'
    },
    {
      type: 'danger',
      plain: true,
      round: true,
      size: 'small'
    }
  ]
}

describe('InfiniteButton.vue', () => {
  const wrapperObj = {}
  const props = getTestData()
  props.forEach(propsItem => {
    wrapperObj[propsItem.type] = mount(InfiniteButton, {
      propsData: {
        type: propsItem.type,
        plain: propsItem.plain,
        round: propsItem.round,
        size: propsItem.size
      }
    })
  })

  it('renders props to contain class', () => {
    props.forEach(propsItem => {
      expect(wrapperObj[propsItem.type].attributes().class).toContain(`infinite-button el-button--${propsItem.type}${propsItem.size ? ' el-button--' + propsItem.size : ''}${propsItem.plain ? ' is-plain' : ''}${propsItem.round ? ' is-round' : ''}`)
      wrapperObj[propsItem.type].destroy()
    })
  })
})
