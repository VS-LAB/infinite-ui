const LABELPOSITION = ['right', 'left', 'top']

export const validateLabelPosition = function (value) {
  if (LABELPOSITION.includes(value)) {
    return true
  }
  return false
}

export default {
  validateLabelPosition
}
