
import { shallowMount } from '@vue/test-utils'
import InfiniteDialog from '@/packages/infinite-dialog/src/index.vue'
import ElDialog from 'element-ui/lib/dialog'

const getTestData = function () {
  return {
    vModel: {
      key: 'visible',
      value: true
    },
    width: {
      key: 'width',
      value: '60%'
    },
    top: {
      key: 'top',
      value: '25vh'
    },
    modalAppendToBody: {
      key: 'modalappendtobody',
      value: false,
      notTest: true
    },
    appendToBody: {
      key: 'appendtobody',
      value: true
    },
    customClass: {
      key: 'customclass',
      value: 'custom-class'
    },
    closeOnClickModal: {
      key: 'closeonclickmodal',
      value: false,
      notTest: true
    },
    closeOnPressEscape: {
      key: 'closeonpressescape',
      value: true,
      notTest: true
    },
    destroyOnClose: {
      key: 'destroyonclose',
      value: true,
      notTest: true
    },
    containerHeight: {
      key: 'containerheight',
      value: 400,
      notTest: true
    }
  }
}
describe('InfiniteCascaders.vue', () => {
  const testData = getTestData()
  const testDataKeys = Object.keys(testData)
  const props = {}
  testDataKeys.forEach(key => {
    props[key] = testData[key].value
  })
  let attrsWrapper = shallowMount(InfiniteDialog, {
    propsData: props
  })

  it('component attrs to all match', () => {
    testDataKeys.forEach(key => {
      if (!testData[key].notTest) {
        expect(attrsWrapper.attributes()[testData[key].key]).toBe(String(testData[key].value))
      }
    })
    attrsWrapper.destroy()
  })

  let eventWrapper = shallowMount(InfiniteDialog, {
    propsData: props,
    stubs: { ElDialog }
  })
  // stubs: { ElDialog }

  it('component event to all match', () => {
    const InfiniteButtonWrappers = eventWrapper.findAllComponents({ name: 'InfiniteButton' })
    const ElDialogWrapper = eventWrapper.findComponent({ name: 'ElDialog' })
    // emit方法是否执行
    const events = ['open', 'opened', 'close', 'closed']
    events.forEach(event => {
      ElDialogWrapper.vm.$emit(event)
      expect(eventWrapper.emitted()[event]).toBeTruthy()
    })
    // 关闭之前的函数是否执行
    ElDialogWrapper.vm.beforeClose()
    expect(eventWrapper.emitted().beforeClose).toBeTruthy()

    // 默认确认按钮是否点击
    InfiniteButtonWrappers.at(1).vm.$emit('click')
    expect(InfiniteButtonWrappers.at(1).emitted().click).toBeTruthy()
  })
})
