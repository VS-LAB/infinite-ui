
import { mount } from '@vue/test-utils'
import InfiniteTable from '@/packages/infinite-table/src/index.vue'
import InfiniteTableColumn from '@/packages/infinite-table/src/infiniteTableColumn.vue'
import ElTable from 'element-ui/lib/table.js'
const getTestData = function () {
  return [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路平安号'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路信息'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路手机号码'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ]
}

const getTestHeader = function () {
  return [
    {
      prop: 'date',
      label: '日期',
      width: '180'
    },
    {
      prop: 'name',
      label: '姓名',
      width: '180'
    },
    {
      prop: 'address',
      label: '地址',
      needAutoWidth: true
    },
    {
      prop: 'operation',
      label: '操作',
      align: 'center',
      width: '200'
    }
  ]
}
const getoperations = function () {
  return [
    {
      label: 'Edit',
      click: _ => { }
    },
    {
      label: 'Delete',
      type: 'danger',
      click: _ => { }
    }
  ]
}

const later = time => new Promise((resolve) => {
  setTimeout(() => { resolve() }, time)
})
describe('InfiniteTable.vue', () => {
  const data = getTestData()
  const header = getTestHeader()
  const operations = getoperations()
  const defaultTdAtuoPadding = 20
  const needAutoHeight = true
  const rowClassName = 'row-class-name'
  const border = true
  const type = 'selection'
  const wrapper = mount(InfiniteTable, {
    propsData: {
      defaultTdAtuoPadding,
      operations,
      border,
      needAutoHeight,
      rowClassName,
      type
    },
    slots: {
      header: '<div />'
    }
  })

  // 属性测试
  it('table props test toBe', async () => {
    await wrapper.setProps({
      data,
      header
    })
    await later()
    const ElTableWrapper = wrapper.findComponent(ElTable)
    const ElTableWrapperVm = ElTableWrapper.vm
    expect(ElTableWrapperVm.data).toBe(data)
    expect(ElTableWrapperVm.border).toBe(border)
    expect(ElTableWrapperVm.rowClassName).toBe(rowClassName)
  })

  // 排序回调
  it('table sort event toBeTruthy', async () => {
    const ElTableWrapper = wrapper.findComponent(ElTable)
    ElTableWrapper.vm.$emit('selection-change')
    expect(wrapper.emitted('selection-change')).toBeTruthy()
    ElTableWrapper.vm.$emit('sort-change')
    expect(wrapper.emitted('sort-change')).toBeTruthy()
  })

  // 按钮回调
  it('operations button clicked', async () => {
    const InfiniteButtonWrapper = wrapper.findAll('.infinite-table-operation-btn .infinite-button').at(0)
    await InfiniteButtonWrapper.trigger('click')
    expect(wrapper.vm.handleClick).toBeTruthy()
  })

  // resize evnet 
  it('resize evnet test', () => {
    window.dispatchEvent(new Event('resize'))
    expect(wrapper.vm.computedHeightData).toBeTruthy()
  })

  // 高度自动拉伸
  const autoHeightWrapper = mount({
    render: (h) => {
      return h('div', {
        style: {
          height: '100px'
        }
      }, [h(InfiniteTable, {
        props: {
          data,
          header,
          needAutoHeight
        }
      })])
    }
  })

  // 高度自适应
  it('table autoHeight test', () => {
    expect(autoHeightWrapper.find('.infinite-table').attributes('style')).toContain('height: 100px')
  })

  // 插槽使用
  const headerSlotName = '姓名'
  const slotWrapper = mount({
    render: (h) => {
      return h(
        InfiniteTable,
        {
          props: {
            data: [
              {
                name: '王小虎'
              }
            ]
          }
        }, [h(InfiniteTableColumn, {
          props: {
            prop: 'name'
          },
          scopedSlots: {
            header: () => h('div', {
              domProps: {
                innerHTML: headerSlotName
              }
            })
          }
        }
        )]
      )
    }
  })
  // 插槽值匹配
  it('table slot header toBo', () => {
    expect(slotWrapper.find('.el-table__header-wrapper .cell>span').html()).toBe(`<span><div>${headerSlotName}</div></span>`)
    wrapper.destroy()
    autoHeightWrapper.destroy()
    slotWrapper.destroy()
  })
})
