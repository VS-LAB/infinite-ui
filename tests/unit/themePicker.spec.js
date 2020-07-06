import { shallowMount, createLocalVue } from '@vue/test-utils'
import elementUI from 'element-ui'
import ThemePicker from 'packages/ThemePicker/index'

const localVue = createLocalVue()
localVue.use(elementUI)

describe('ThemePicker.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(ThemePicker, { localVue }, {})
  })

  it('renders ThemePicker when passed', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders ThemePicker when passed', () => {
    const elPicker = wrapper.find('.theme-picker')
    console.log(wrapper.classes(), 'elPicker')
  })
})
