const files = require.context('../docs', false, /\.md$/)

export function getFileList () {
  const result = []
  const blackList = ['./Installation.md']
  files.keys().map(key => {
    if (blackList.includes(key)) return
    const name = key.split('./')[1].split('.')[0]
    const element = {
      path: `/guide/${name}`,
      name: name,
      component: files(key).default,
      meta: {
        type: 'component'
      }
    }
    console.log(element)
    result.push(element)
  })
  return result
};
