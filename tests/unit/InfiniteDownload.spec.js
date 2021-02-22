import InfiniteDownload from '@/packages/infinite-download/src/main.js'

describe('InfiniteDownload.vue', () => {
  // 代理createObjectURL和revokeObjectURL方法
  window.URL = {
    createObjectURL: jest.fn(
      _ => 'http://test.com'
    ),
    revokeObjectURL: jest.fn()
  }

  it('test error', () => {
    function drinkOctopus () {
      InfiniteDownload('测试数据')
    }
    expect(drinkOctopus).toThrowError('You need to pass in an object')
  })

  const resouceStream = new Blob(['Hello Infinite!'])
  const resouceUrl = 'https://trust.pingan.com/ncfbupload/img/historyimg/e0f21488-4ea1-4f2d-b813-8a349d88438f.doc'
  it('mode to stram ant config Object to download', () => {
    // 设置模拟原始'removeChild'jest函数的跟踪器
    jest.spyOn(document.body, 'appendChild')
    InfiniteDownload({
      resouce: resouceStream,
      mode: 'stream',
      name: 'infinite.txt'
    })
    const expectObjectContaining = expect.objectContaining({
      download: 'infinite.txt',
      href: 'http://test.com/'
    })
    expect(document.body.appendChild).toBeCalledWith(expectObjectContaining)
  })

  it('mode to url ant config Object to download', async () => {
    // 设置模拟原始'removeChild'jest函数的跟踪器
    jest.spyOn(document.body, 'appendChild')
    const expectObjectContaining = expect.objectContaining({
      src: resouceUrl
    })
    InfiniteDownload.url(resouceUrl)
    document.body.onload = function () {
      expect(document.body.appendChild).toBeCalledWith(expectObjectContaining)
    }
  })

  it('test IE download ', () => {
    window.navigator.msSaveOrOpenBlob = jest.fn()
    navigator.msSaveBlob = jest.fn()
    InfiniteDownload.stream(resouceStream, 'infinite.txt')
    expect(navigator.msSaveBlob.mock.calls[0].length).toBe(2)
  })
})
