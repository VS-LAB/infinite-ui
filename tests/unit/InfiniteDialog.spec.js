import { shallowMount } from '@vue/test-utils' // 创建一个包含被挂载和渲染的 Vue 组件的 Wrapper

import InfiniteDialog from '@/packages/infinite-dialog/src/index.vue' // 引入组件
import ElDialog from 'element-ui/lib/dialog'

describe('InfiniteDialog.vue', () => { // describe 代表一个作用域
  it('create', () => {
    // ‘creat’ 这里只是一个自定义的描述性文字
    const wrapper = shallowMount(InfiniteDialog, {
      // 通过 shallowMount 生成了一个包裹器，包括了一个挂载组件或 vnode，以及测试该组件或 vnode 的方法
      propsData: {
        title: '提示'
      },
      // 可以带参数
      stubs: {
        ElDialog: ElDialog
      }
    })
    expect(wrapper.find('.el-dialog__header').text()).toEqual('提示')
    expect(wrapper.vm.visible).toBe(false)
    // .vm 可以获取当前实例对象，相当于拿到了 vue组件里的 this 对象
    // find()可以匹配各种类型的选择器，类似于选中 DOM, text() 就是获取其中的内容
    // toEqual 是一个断言，判断结果为 ‘title’ 时，通过测试，否则猜测是失败
    // toBe 和toEqual 类似，区别在于toBe 更严格限于同一个对象，如果是基本类型则没什么区别
  })

  it('needFooter', () => {
    const wrapper = shallowMount(InfiniteDialog, {
      propsData: {
        title: 'needFooter',
        needFooter: false
      },
      stubs: {
        ElDialog: ElDialog
      }
    })
    expect(wrapper.classes('el-dialog__footer')).toBe(false)
    // classes() 方法，返回 class 名称的数组。或在提供 class 名的时候返回一个布尔值
  })

  it('footer slot', () => {
    const wrapper = shallowMount(InfiniteDialog, {
      propsData: {
        title: 'footer'
      },
      slots: {
        footer: '<span>foo</span>'
      },
      stubs: {
        ElDialog: ElDialog
      }
    })
    // 这里通过slots 属性，添加了一个 slot 插槽，然后来判断插槽内容是否正确渲染进去了
    expect(wrapper.find('.el-dialog__footer').text()).toEqual('foo')
  })

  it('close', () => {
    const wrapper = shallowMount(InfiniteDialog, {
      propsData: {
        title: 'test',
        visible: true
      },
      stubs: {
        ElDialog: ElDialog
      }
    })
    console.log(22222, wrapper.vm.visible)
    wrapper.find('.el-dialog__headerbtn').trigger('click')
    expect(wrapper.vm.visible).toBe(true)
    // trigger()可以触发一个事件，这里模拟了点击
  })
})
