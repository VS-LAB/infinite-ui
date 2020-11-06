const LABELPOSITION = ['right', 'left', 'top']

const validateLabelPosition = function (value) {
  if (LABELPOSITION.includes(value)) {
    return true
  }
  return false
}

export {
  validateLabelPosition
}
