import { InfiniteBackPlatform } from '@/packages/infinite-back-platform/src/index.js'
const delay = (time = 1000) => {
  return new Promise(resolve => {
    setTimeout(_ => {
      resolve()
    }, time)
  })
}
describe('InfiniteBackPlatform.vue', () => {
  let actionStr = ''
  it('document is has appendChild after InfiniteBackPlatform in vNode', () => {
    jest.spyOn(document.body, 'appendChild')
    InfiniteBackPlatform({
      platform: (h) => {
        return h('div', {}, [
          h('span', null, '内容必须是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      },
      style: {
        right: '2px',
        bottom: '2px'
      },
      click: action => {
        actionStr = action
      }  
    })
    // 是否触发appendChild
    expect(document.body.appendChild).toBeCalledWith(expect.objectContaining({}))
  })
  it('document is has appendChild after InfiniteBackPlatform in string', () => {
    jest.spyOn(document.body, 'appendChild')
    InfiniteBackPlatform({
      platform: '<div>string of platform</div>'
    })
    // 是否触发appendChild
    expect(document.body.appendChild).toBeCalledWith(expect.objectContaining({}))
  })
  it('InfiniteBackPlatform is click hide or remove after event', async () => {
    const dom = document.body.querySelector('.infinite-back-platform')
    expect(window.getComputedStyle(dom).display).toBe('inline-block')
    dom.click()
    await delay(300)
    expect(actionStr).toBe('click')

    // 关闭拖拽容器
    InfiniteBackPlatform.close()
    await delay(300)
    expect(window.getComputedStyle(dom).display).toBe('none')
    // 移除拖拽容器 
    InfiniteBackPlatform.remove()
    await delay(3000)
    const removeDom = document.body.querySelector('.infinite-back-platform')
    expect(removeDom).toBe(null)
  })
  // 定义鼠标按下时位置点
  const mousedownEv = {
    clientX: 0,
    clientY: 0,
    preventDefault: () => {},
    stopPropagation: () => {}
  }
  // 定义鼠标移动时位置点
  const mousemoveEv = {
    clientX: 0,
    clientY: 0,
    preventDefault: () => {},
    stopPropagation: () => {}
  }
  // 定义鼠标放开时位置点
  const mouseupEv = {
    clientX: 0,
    clientY: 0,
    preventDefault: () => {},
    stopPropagation: () => {}
  }
  // 模拟拖拽功能测试
  it('draggable of test', async () => {
    InfiniteBackPlatform({
      platform: (h) => {
        return h('div', {}, [
          h('span', null, '内容必须是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      }
    })
    InfiniteBackPlatform.getInstance()
    InfiniteBackPlatform.instance.handleMousedown(mousedownEv)
    await delay(300)
    expect(InfiniteBackPlatform.instance.move).toBe(true)
    InfiniteBackPlatform.instance.handleMousemove(mousemoveEv)
    await delay(300)
    InfiniteBackPlatform.instance.handleMouseup(mouseupEv)
    await delay(300)
    expect(InfiniteBackPlatform.instance.move).toBe(false)
    const dom = document.body.querySelector('.infinite-back-platform')
    expect(window.getComputedStyle(dom).right).toBe('0px')
    expect(window.getComputedStyle(dom).bottom).toBe('0px')
  })
  it('draggable of horizontal test', async () => {
    InfiniteBackPlatform({
      platform: (h) => {
        return h('div', {}, [
          h('span', null, '内容必须是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      },
      dragDirection: 'horizontal'
    })
    InfiniteBackPlatform.getInstance()
    InfiniteBackPlatform.instance.handleMousedown(mousedownEv)
    await delay(300)
    expect(InfiniteBackPlatform.instance.move).toBe(true)
    InfiniteBackPlatform.instance.handleMousemove(mousemoveEv)
    await delay(300)
    InfiniteBackPlatform.instance.handleMouseup(mouseupEv)
    await delay(300)
    expect(InfiniteBackPlatform.instance.move).toBe(false)
    const dom = document.body.querySelector('.infinite-back-platform')
    expect(window.getComputedStyle(dom).right).toBe('0px')
    expect(window.getComputedStyle(dom).bottom).toBe('0px')
  })
  it('draggable of vertical test', async () => {
    InfiniteBackPlatform({
      platform: (h) => {
        return h('div', {}, [
          h('span', null, '内容必须是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      },
      dragDirection: 'vertical'
    })
    InfiniteBackPlatform.getInstance()
    // 定义鼠标按下时位置点
    const mousedownEv = {
      clientX: 0,
      clientY: 0,
      preventDefault: () => {},
      stopPropagation: () => {}
    }
    // 定义鼠标移动时位置点
    const mousemoveEv = {
      clientX: -10,
      clientY: -10,
      preventDefault: () => {},
      stopPropagation: () => {}
    }
    // 定义鼠标放开时位置点
    const mouseupEv = {
      clientX: -10,
      clientY: -10,
      preventDefault: () => {},
      stopPropagation: () => {}
    }
    InfiniteBackPlatform.instance.handleMousedown(mousedownEv)
    await delay(300)
    expect(InfiniteBackPlatform.instance.move).toBe(true)
    InfiniteBackPlatform.instance.handleMousemove(mousemoveEv)
    await delay(300)
    InfiniteBackPlatform.instance.handleMouseup(mouseupEv)
    await delay(300)
    expect(InfiniteBackPlatform.instance.move).toBe(false)
    const dom = document.body.querySelector('.infinite-back-platform')
    expect(window.getComputedStyle(dom).right).toBe('0px')
    expect(window.getComputedStyle(dom).bottom).toBe('0px')
    await delay(300)
    InfiniteBackPlatform({
      platform: (h) => {
        return h('div', {}, [
          h('span', null, '内容必须是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      },
      dragDirection: 'vertical'
    })
    InfiniteBackPlatform.getInstance()
  })
})
