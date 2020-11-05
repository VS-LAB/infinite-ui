/**
 * @description 属性配置
*/
export const props = {
  space: [Number, String],
  active: Number,
  direction: {
    type: String,
    default: 'horizontal'
  },
  alignCenter: Boolean,
  simple: Boolean,
  finishStatus: {
    type: String,
    default: 'finish'
  },
  processStatus: {
    type: String,
    default: 'process'
  }
}
