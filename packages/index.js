/* eslint-disable */
const files = require.context('./', true, /\index\.js$/)
function getImportComponents() {
  const result = []
  files.keys().map(key => {
    if (!key.includes('infinite')) return
    const element = files(key).default
    result.push(element)
  });
  return result
};

const components = getImportComponents()

const version = '0.0.3'
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const exportObj = {
  install,
  version,
}

components.map(component => {
  if (component) {
    const { name } = component
    if (!name) return
    exportObj[name] = component
  };
});

export default exportObj
