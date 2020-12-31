module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 1360, // ui设计图为1920*1080的屏幕 1920 
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [
        /(\/|\\)node_modules/,
        /(\/|\\)packages/,
        /(\/|\\)examples(\/|\\)docs/,
        /(\/|\\)examples(\/|\\)style/,
        /(\/|\\)examples(\/|\\)views(\/|\\)index\.vue/,
        /(\/|\\)examples(\/|\\)App\.vue/,
        /(\/|\\)examples(\/|\\)components/
      ],
      include: undefined,
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568
    }
  }
}
