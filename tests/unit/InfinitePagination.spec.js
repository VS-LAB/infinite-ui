import { shallowMount } from '@vue/test-utils'
import InfinitePagination from '@/packages/infinite-pagination/src/index.vue'
import ElPagination from 'element-ui/lib/pagination'

describe('InfinitePagination.vue', () => {
  const total = 400
  const layout = 'total, sizes, prev, pager, next, jumper'
  const pageSize = 100
  const currentPage = 1
  const wrapper = shallowMount(InfinitePagination, {
    propsData: {
      total,
      layout,
      pageSize,
      currentPage
    }
  })

  it('props data test toBe', async () => {
    const ElPaginationWrapper = wrapper.findComponent(ElPagination)
    expect(ElPaginationWrapper.vm.total).toBe(total)
    expect(ElPaginationWrapper.vm.layout).toBe(layout)
    expect(ElPaginationWrapper.vm.pageSize).toBe(pageSize)
    expect(ElPaginationWrapper.vm.currentPage).toBe(currentPage)
  })

  it('event emit test length toBe', async () => {
    const ElPaginationWrapper = wrapper.findComponent(ElPagination)
    ElPaginationWrapper.vm.$emit('size-change')
    expect(wrapper.emitted('sizeChange').length).toBe(1)
    ElPaginationWrapper.vm.$emit('current-change')
    expect(wrapper.emitted('currentChange').length).toBe(1)
    ElPaginationWrapper.vm.$emit('prev-click')
    expect(wrapper.emitted('prevClick').length).toBe(1)
    ElPaginationWrapper.vm.$emit('next-click')
    expect(wrapper.emitted('nextClick').length).toBe(1)
    wrapper.destroy()
  })
})
