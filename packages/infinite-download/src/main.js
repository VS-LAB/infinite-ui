const modes = ['stream', 'url']

const Download = function (options) {
  options = options || {}
  if (options.constructor === Object) {
    const { resouce = '', name = '', mode = modes[0] } = options
    Download.downloadFun[mode](resouce, name)
  } else {
    console.error('You need to pass in an object')
  }
}

modes.forEach(mode => {
  Download[mode] = (resouce = '', name = '') => {
    Download({
      resouce,
      name,
      mode
    })
  }
})

Download.downloadFun = {
  stream: function (resouce, name) {
    const blob = new Blob([resouce])
    // IE浏览器
    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, name)
    } else {
      const downloadElement = document.createElement('a')
      const href = window.URL.createObjectURL(blob)// 创建下载链接
      downloadElement.href = href
      downloadElement.download = name// 下载文件名
      downloadElement.style.transform = 'translateX(-9999px)'
      document.body.appendChild(downloadElement)
      downloadElement.click()// 下载开始
      document.body.removeChild(downloadElement)// 下载完成移除元素
      window.URL.revokeObjectURL(href) // 释放blob对象
    }
  },
  url: function (resouce) {
    const iframe = document.createElement('iframe')
    iframe.style.transform = 'translateX(-9999px)'
    iframe.src = resouce
    document.body.appendChild(iframe)
    setTimeout(() => {
      document.body.removeChild(iframe)
    }, 300)
  }
}

export default Download
