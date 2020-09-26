module.exports = {
  'presets': [
    ['@babel/preset-env', { 'modules': false }],
    [
      "@vue/app",
      {
        useBuiltIns: "entry",
        jsx: {
          injectH: false
        }
      }
    ]
  ],
  'plugins': [
    ['transform-vue-jsx'],
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
