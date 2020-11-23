import { shallowMount } from '@vue/test-utils'
import InfiniteSelectTags from '@/packages/infinite-select-tags/src/index.vue'
import ElInput from 'element-ui/lib/input'
import ElTag from 'element-ui/lib/tag'
import ElSelect from 'element-ui/lib/select'
import ElOption from 'element-ui/lib/option'
import ElCheckbox from 'element-ui/lib/checkbox'
import InfiniteButton from '@/packages/infinite-button/src/index.vue'
import InfiniteSelectTagsOption from '@/packages/infinite-select-tags-option'
const getTestData = function () {
  return [
    {
      id: 'USD',
      name: '美元',
      disabled: true,
      children: [
        {
          id: 'USD-1',
          name: '美元-1'
        },
        {
          id: 'USD-2',
          name: '美元-2'
        },
        {
          id: 'USD-3',
          name: '美元-3'
        },
        {
          id: 'USD-4',
          name: '美元-4'
        }
      ]
    },
    {
      id: 'GBP',
      name: '英镑',
      children: [
        {
          id: 'GBP-1',
          name: '英镑-1'
        },
        {
          id: 'GBP-2',
          name: '英镑-2'
        },
        {
          id: 'GBP-3',
          name: '英镑-3'
        },
        {
          id: 'GBP-4',
          name: '英镑-4'
        }
      ]
    },
    {
      id: 'RMB',
      name: '人民币'
    },
    {
      id: 'EUR',
      name: '欧元'
    },
    {
      id: 'CAD',
      name: '加元'
    },
    {
      id: 'AUD',
      name: '澳大利亚元'
    },
    {
      id: 'TAD',
      name: '泰元'
    },
    {
      id: 'MUD',
      name: '孟加拉元'
    }
  ]
}

describe('InfiniteSelectTags.vue', () => {
  const placeholder = '测试placeholder'
  const defaultCheckeds = ['USD']
  const options = getTestData()
  const wrapper = shallowMount(InfiniteSelectTags, {
    propsData: {
      placeholder
    },
    stubs: {
      ElSelect,
      ElInput,
      ElTag,
      ElOption,
      ElCheckbox,
      InfiniteButton,
      InfiniteSelectTagsOption
    }
  })

  it('是否正确渲染', () => {
    expect(wrapper.attributes().class).toContain('infinite-select-tags')
  })

  // 检查已存在的元素
  it('是否有按钮', () => {
    expect(wrapper.find('.infinite-button').exists()).toBe(true)
  })

  // 事件测试
  it('component event emited', async () => {
    await wrapper.setProps({
      options,
      defaultCheckeds
    })
    // console.log(wrapper.html())
    const rootCheckboxInput = wrapper.findAll('.infinite-select-group-level-1 .exist-children > .el-checkbox input[type="checkbox"]').at(1)
    // 选中根节点
    await rootCheckboxInput.setChecked()
    expect(wrapper.emitted('checkBoxChange')).toBeTruthy()
    const childCheckboxInput = wrapper.findAll('.infinite-select-group-level-2').at(1).findAll('input[type="checkbox"]').at(0)
    // 取消子节点
    await childCheckboxInput.setChecked(false)
    expect(wrapper.emitted('checkBoxChange').length).toBe(2)
    // 点击全选
    const selectAllInput = wrapper.find('.infinite-select-button input[type="checkbox"]')
    await selectAllInput.setChecked()
    expect(wrapper.emitted('allSelect')).toBeTruthy()

    // 下拉框弹出
    const selectTags = wrapper.find('.el-select.el-select--small')
    await selectTags.trigger('click')
    expect(wrapper.vm.visibleChange).toBeTruthy()
  })
})
