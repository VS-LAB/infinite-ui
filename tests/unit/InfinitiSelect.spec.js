/*
 * @Author: your name
 * @Date: 2021-02-05 14:31:42
 * @LastEditTime: 2021-02-05 15:03:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /infinite-ui/tests/unit/InfinitiSelect.spec.js
 */
import {shallowMount,mount,createLocalVue} from '@vue/test-utils'

import InfiniteSelect from '@/packages/infinite-select/src/index.vue'

describe('InfiniteSelect',() =>{
  const wrapper = mount(InfiniteSelect,{
    propsData: {
      value: '123'
    }
  })

  it('toMatchSnapshot',() =>{
    expect(wrapper).toMatchSnapshot()
  })

  it('select exists',() =>{
    const select = wrapper.findComponent({
      ref: 'infiniteSelect'
    })
    expect(select.exists()).toBe(true)
  })

  it('visible-change true',() =>{
    const select = wrapper.findComponent({
      ref: 'infiniteSelect'
    })
    wrapper.vm.visibleChange = jest.fn()
    select.vm.visible = true
  })

  it('visible-change false',async () =>{
    const select = wrapper.findComponent({
      ref: 'infiniteSelect'
    })
    wrapper.vm.visibleChange = jest.fn()
    select.vm.visible = false
  })
})