
/**
 * @description 获取鼠标滚轮事件
 */
function onwheel (e) {
  let _log = ''
  let _ie9 = navigator.userAgent.indexOf('MSIE 9.0') > 0
  let _h = _ie9 ? window.innerHeight : document.body.clientHeight

  _log += 'deltaY:' + e.deltaY
  _log += '|wheelDelta:' + e.wheelDelta
  _log += '|screenY:' + e.offsetY
  _log += '|H:' + _h

  console.log('====================================')
  console.log(_log)
  console.log(e)
  console.log('====================================')
}

function isString (value) {
  return typeof value === 'string'
}

class MouseWheel {
  constructor ({ stepLength = 100, timer = 200, ele }) {
    this.stepLength = stepLength
    this.moveWheel1 = true
    this.moveWheel2 = true
    this.moveTimer = null
    this.timer = timer
    this.stepList = []
    this.ele = isString(ele) ? document.querySelector(ele) : ele
  }
  onWheel (cb) {
    const _this = this
    this._cb = cb
    const wheelCall = function (e) {
      // 记录当前的滚动距离
      const { offsetY } = e
      if (!_this.stepList.length) {
        _this.stepList.push(offsetY)
      }
      if (_this.stepList.length === 2) {
        _this.stepList.pop()
        _this.stepList.push(offsetY)
      }

      if (_this.moveWheel1) {
        _this.moveWheel1 = false
        _this.moveWheel2 = true
        _this.moveTimer = setTimeout(_this.stopWheel(e, _this), _this.timer)
      } else {
        clearTimeout(_this.moveTimer)
        _this.moveTimer = setTimeout(_this.stopWheel(e, _this), 100)
      }
    }
    _this.wheelCall = wheelCall
    document.addEventListener('wheel', wheelCall, false)
  }
  stopWheel (e, _this) {
    if (e && _this && _this.moveWheel2) {
      _this.moveWheel1 = true
      _this.moveWheel2 = false
      let offsetY
      if (e) {
        offsetY = e.offsetY
      }
      if (offsetY && _this.stepList.length === 2) {
        _this.stepList.pop()
        _this.stepList.push(offsetY)
      }
      if (offsetY && _this.stepList.length === 1) {
        _this.stepList.push(offsetY)
      }
      // 获取步进数
      const step = _this.getStep()
      if (step) {
        _this._cb(step)
      };
    }
  }
  clearStepList () {
    this.stepList = []
  }
  getStep () {
    const { stepList } = this
    if (stepList.length === 2) {
      const result = Math.abs(stepList[1] - stepList[0]) / this.stepLength
      return result > 1 ? 1 : result
    }
  }
  destroy () {
    this.clearStepList()
    document.removeEventListener('wheel', this.wheelCall, false)
  }
}

export {
  onwheel,
  MouseWheel
}
