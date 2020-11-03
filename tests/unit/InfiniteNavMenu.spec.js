
import { shallowMount } from '@vue/test-utils'
import InfiniteNavMenu from '@/packages/infinite-nav-menu/src/index.vue'

const getTestData = function () {
  return [
    {
      index: '1',
      label: '处理中心'
    },
    {
      index: '2',
      label: '我的工作台',
      children: [
        {
          index: '2-1',
          label: '选项1'
        },
        {
          index: '2-2',
          label: '选项2'
        },
        {
          index: '2-3',
          label: '选项3'
        },
        {
          index: '2-4',
          label: '选项4',
          children: [
            {
              index: '2-4-1',
              label: '选项4-1'
            },
            {
              index: '2-4-2',
              label: '选项4-2'
            },
            {
              index: '2-4-3',
              label: '选项4-3'
            }
          ]
        }
      ]
    },
    {
      index: '3',
      label: '消息中心',
      disabled: true
    },
    {
      index: '4',
      label: '订单管理',
      component (h) {
        return h(
          'a',
          {
            attrs: {
              href: 'https://www.ele.me',
              target: '_blank'
            }
          },
          [h('span', { slot: 'title' }, '订单管理')]
        )
      }
    }
  ]
}

describe('InfiniteNavMenu.vue', () => {
  const data = getTestData()
  let wrapper = shallowMount(InfiniteNavMenu, {
    propsData: {
      data
    }
  })

  it('InfiniteNavMenu data to checked', () => {
    const circulation = (menuData, element) => {
      menuData.forEach((item, index) => {
        const curElement = element.filter(w => w.attributes('index') === item.index)
        if (item.children && item.children.length) {
          circulation(item.children, element)
        } else {
          expect(curElement.at(0).html()).toContain(item.label)
        }
      })
    }
    circulation(data, wrapper.findAll('.infinite-nav-menu-container *'))
    wrapper.destroy()
  })
})
