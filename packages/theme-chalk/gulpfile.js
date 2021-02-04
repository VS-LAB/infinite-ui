'use strict'

const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const replace = require('gulp-replace')
const themeNames = ['', 'blue']
// var_default
const compiles = []
themeNames.forEach((name, index) => {
  const newName = name ? '-' + name : ''
  const changeVar = () => {
    return src('./src/*.scss').pipe(replace(`var${themeNames[index - 1] ? '_' + themeNames[index - 1] : ''}.scss`, `var${themeNames[index] ? '_' + themeNames[index] : ''}.scss`)).pipe(dest('./src/'))
  }
  compiles.push(changeVar)
  const compile = () => {
    return src('./src/*.scss')
      .pipe(sass.sync())
      .pipe(autoprefixer({
        browsers: ['ie > 9', 'last 2 versions'],
        cascade: false
      }))
      .pipe(cssmin())
      .pipe(dest(`./lib${newName}`))
  }
  compiles.push(compile)
})

function recover () {
  return src('./src/*.scss')
    .pipe(replace(`var_${themeNames[themeNames.length - 1]}.scss`, 'var.scss'))
    .pipe(dest('./src/'))
}

const copyfonts = themeNames.map(name => {
  return () => {
    const newName = name ? '-' + name : ''
    return src('./src/fonts/**')
      .pipe(cssmin())
      .pipe(dest(`./lib${newName}/fonts`))
  }
})

const moveFile = themeNames.map(name => {
  return () => {
    const newName = name ? '-' + name : ''
    return src(`./lib${newName}/**`)
      .pipe(dest(`../../lib/theme-chalk${newName}`))
  }
})
exports.build = series(...compiles, recover, ...copyfonts, ...moveFile)
