export function stripScript (content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}
export function stripStyle (content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}
export function stripTemplate (content) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

export function isFirefox () {
  var sAgent = window.navigator.userAgent.toLowerCase()
  if (sAgent.indexOf('firefox') !== -1) {
    return true
  }
  return false
}
export function debounce (fn, wait, immediate) {
  immediate = immediate || false
  var timer = null
  var count = 0
  return function () {
    var _this = this
    var _arg = arguments
    clearTimeout(timer)
    if (immediate) {
      fn.apply(_this, _arg)
      count++
    } else {
      timer = setTimeout(function () {
        fn.apply(_this, _arg)
        count++
      }, wait)
    }
  }
}

export function throttle (func, wait, options) {
  var context, args, result
  var timeout = null
  var previous = 0

  if (!options) { options = {} }

  var later = function () {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) { context = args = null }
  }

  return function () {
    var now = Date.now()
    if (!previous && options.leading === false) { previous = now }

    var remaining = wait - (now - previous)
    context = this
    args = arguments

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }

      previous = now

      result = func.apply(context, args)
      if (!timeout) { context = args = null }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }

    return result
  }
};
