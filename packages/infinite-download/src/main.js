const download_stream = function (resouce, name) {
  const blob = new Blob([resouce])
  console.log(blob)
  // IE浏览器
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, name)
  } else {
    const downloadElement = document.createElement('a')
    const href = window.URL.createObjectURL(blob)// 创建下载链接
    downloadElement.href = href
    downloadElement.download = name// 下载文件名
    downloadElement.style.zIndex = -100
    document.body.appendChild(downloadElement)
    downloadElement.click()// 下载开始
    document.body.removeChild(downloadElement)// 下载完成移除元素
    window.URL.revokeObjectURL(href) // 释放blob对象
  }
}

const download_url = function (resouce) {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = resouce
  document.body.appendChild(iframe)
  setTimeout(() => {
    document.body.removeChild(iframe)
  }, 1000)
}

const Download = function (options) {
  options = options || {}
  if (options.constructor === Object) {
    const { resouce = '', name = '', mode = 'stream' } = options
    switch (mode) {
      case 'stream':
        download_stream(resouce, name)
        break
      case 'url':
        download_url(resouce, name)
        break
      default:
        console.error('This approach does not exist')
        break
    }
  } else {
    console.error('You need to pass in an object')
  }
};

['stream', 'url'].forEach(mode => {
  Download[mode] = (resouce = '', name = '') => {
    Download({
      resouce,
      name,
      mode
    })
  }
})

export default Download
