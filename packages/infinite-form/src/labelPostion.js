const LABELPOSITION = ['right', 'left', 'top']

function validateLabelPosition (value) {
  if (LABELPOSITION.includes(value)) {
    return true
  }
  return false
}

export default {
  validateLabelPosition
}
