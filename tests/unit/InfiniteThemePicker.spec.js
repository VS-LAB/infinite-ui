import { shallowMount } from '@vue/test-utils'
import InfiniteThemePicker from '@/packages/infinite-theme-picker/src/index.vue'

describe('InfiniteThemePicker.vue', () => {
  const wrapper = shallowMount(InfiniteThemePicker)
  const theme = '#F41371'
  it('renders props.v-model to match value', async () => {
    await wrapper.setProps({
      vModel: theme
    })
    expect(wrapper.attributes().value).toBe(theme)
    wrapper.destroy()
  })
})
