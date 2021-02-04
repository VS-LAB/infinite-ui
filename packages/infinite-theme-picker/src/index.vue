<template>
  <el-color-picker v-model="theme"
                   class="theme-picker"
                   :size="size"
                   @change="change"
                   @active-change="activeChange"
                   popper-class="theme-picker-dropdown" />
</template>

<script>
// default color
// const ColorPicker = require('element-ui/packages/color-picker')
import ElColorPicker from 'element-ui/lib/color-picker'
const version = require('element-ui/package.json').version
const ORIGINAL_THEME = '#409EFF'

export default {
  name: 'InfiniteThemePicker',
  model: {
    prop: 'vModel',
    event: 'change'
  },
  props: {
    vModel: {
      type: String,
      default: ORIGINAL_THEME
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  data () {
    return {
      theme: '',
      chalk: '' // content of theme-chalk css
    }
  },
  components: {
    ElColorPicker
  },
  watch: {
    vModel: {
      async handler (val, oldVal) {
        this.theme = val
        const nVal = val
        const oldV = oldVal || ORIGINAL_THEME
        const themeCluster = this.getThemeCluster(nVal.replace('#', ''))
        const originalCluster = this.getThemeCluster(oldV.replace('#', ''))
        const getHandler = (variable, id) => {
          return () => {
            const originalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''))
            const newStyle = this.updateStyle(this[variable], originalCluster, themeCluster)
            let styleTag = document.getElementById(id)
            if (!styleTag) {
              styleTag = document.createElement('style')
              styleTag.setAttribute('id', id)
              document.head.appendChild(styleTag)
            }
            styleTag.innerText = newStyle
          }
        }

        const chalkHandler = getHandler('chalk', 'chalk-style')
        if (!this.chalk) {
          const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
          await this.getCSSString(url)
        }
        chalkHandler()
        this.$nextTick(() => {
          const styles = [].slice.call(document.querySelectorAll('style'))
            .filter(style => {
              const text = style.innerText
              return new RegExp(oldV, 'i').test(text) && !/Chalk Variables/.test(text)
            })
          styles.forEach(style => {
            const { innerText } = style
            style.innerText = this.updateStyle(innerText, originalCluster, themeCluster)
          })
        })
        this.$emit('changeTheme', this.vModel)
      },
      immediate: true
    },
    theme () {
      this.$emit('change', this.theme)
    }
  },

  methods: {
    change (val) {
      this.$emit('change', val)
    },
    activeChange (val) {
      this.$emit('activeChange', val)
    },
    updateStyle (style, oldCluster, newCluster) {
      let newStyle = style
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
      })
      return newStyle
    },
    getCSSString (url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            this.chalk = xhr.responseText.replace(/@font-face{[^}]+}/, '')
            resolve(this.chalk)
          }
        }
        xhr.open('GET', url)
        xhr.send()
      })
    },

    getThemeCluster (theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        if (tint === 0) { // when primary color is in its rgb space
          return [red, green, blue].join(',')
        } else {
          red += Math.round(tint * (255 - red))
          green += Math.round(tint * (255 - green))
          blue += Math.round(tint * (255 - blue))

          red = red.toString(16)
          green = green.toString(16)
          blue = blue.toString(16)

          return `#${red}${green}${blue}`
        }
      }

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        red = Math.round((1 - shade) * red)
        green = Math.round((1 - shade) * green)
        blue = Math.round((1 - shade) * blue)
        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)

        return `#${red}${green}${blue}`
      }

      const clusters = [theme]
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
      }
      clusters.push(shadeColor(theme, 0.1))
      return clusters
    }
  }
}
</script>
