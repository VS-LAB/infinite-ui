
import { mount } from '@vue/test-utils'
import InfiniteTable from '@/packages/infinite-table/src/index.vue'

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
      label: '地址'
    }
  ]
}

describe('InfiniteTable.vue', () => {
  const data = getTestData()
  const header = getTestHeader()
  const defaultTdAtuoPadding = 20
  const needAutoHeight = true
  let wrapper = mount(InfiniteTable, {
    propsData: {
      data,
      header,
      defaultTdAtuoPadding
    }
  })

  it('tableData to checked', () => {
    const wrapperArrayCell = wrapper.findAll('.el-table__header-wrapper thead .cell')
    header.forEach((hItem, hIndex) => {
      expect(wrapperArrayCell.at(hIndex).text()).toBe(hItem.label)
    })

    const wrapperArrayRow = wrapper.findAll('.el-table__body-wrapper .el-table__row')
    data.forEach((dItem, dIndex) => {
      const wrapperArrayRowCell = wrapperArrayRow.at(dIndex).findAll('.cell')
      header.forEach((hItem, hIndex) => {
        expect(wrapperArrayRowCell.at(hIndex).text()).toBe(dItem[hItem.prop])
      })
    })
    wrapper.destroy()
  })

  it('table colAutoWidth test', () => {
    header.forEach(async (hItem, hIndex) => {
      if (hItem.needAutoWidth) {
        // 自适应宽度在table组件中使用 creatElement 不被识别，导致获取宽度为0，这里只测试自适应宽度列的默认宽度
        const wrapperColgroupCols = wrapper.findAll('.el-table__body-wrapper colgroup col')
        expect(wrapperColgroupCols.at(hIndex).attributes('width')).toBe(String(defaultTdAtuoPadding + 1))
      }
    })
    wrapper.destroy()
  })

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

  it('table autoHeight test', () => {
    expect(autoHeightWrapper.find('.infinite-table').attributes('style')).toContain('height: 100px')
    autoHeightWrapper.destroy()
  })
})
