import { shallowMount, config } from '@vue/test-utils'
import InfiniteForm from '@/packages/infinite-form/src/index.vue'
import InfiniteFormItem from '@/packages/infinite-form/src/infiniteFormItem.vue'
import InfiniteButton from '@/packages/infinite-button'
import ElForm from 'element-ui/lib/form.js'
import ElFormItem from 'element-ui/lib/form-item.js'
import ElInput from 'element-ui/lib/input.js'
import ElSelect from 'element-ui/lib/select.js'
import ElSwitch from 'element-ui/lib/switch.js'
import ElRadio from 'element-ui/lib/radio.js'
import ElDatePicker from 'element-ui/lib/date-picker.js'
config.stubs['InfiniteFormItem'] = InfiniteFormItem
config.stubs['InfiniteButton'] = InfiniteButton
config.stubs['ElForm'] = ElForm
config.stubs['ElFormItem'] = ElFormItem
const validatePass = (_, value, callback) => {
  if (!value) {
    callback(new Error('密码不能为空'))
  } else if (value.length < 6) {
    callback(new Error('密码不能小于6位数'))
  } else {
    callback()
  }
}

const getTestData = function () {
  return [
    {
      label: '姓名',
      type: 'input',
      key: 'name',
      isShow: false
    },
    {
      label: '喜好',
      type: 'select',
      key: 'likes',
      clearable: true,
      isShow: true,
      options: [
        {
          id: '1',
          label: '篮球'
        },
        {
          id: '2',
          label: '兵乓球'
        }
      ]
    },
    {
      label: '今日开心',
      type: 'switch',
      key: 'happy',
      isShow: true
    },
    {
      label: '出生日期',
      type: 'date',
      key: 'birthday',
      isShow: true
    },
    {
      label: '自我介绍',
      type: 'textarea',
      key: 'introduction',
      isShow: true
    },
    {
      label: '密码',
      type: 'input',
      key: 'password',
      isShow: true,
      rules: [
        { required: true, validator: validatePass, trigger: 'blur' }
      ]
    }
  ]
}
const getBtnData = function () {
  return [
    {
      name: '保存',
      type: 'primary',
      click: (val, refs) => { }
    },
    {
      name: '取消'
    }
  ]
}

describe('InfiniteForm.vue', () => {
  const formData = getTestData()
  const formBtns = getBtnData()
  const inline = false
  const labelPosition = 'left'
  const requiredPosition = 'label'
  const wrapper = shallowMount(InfiniteForm, {
    propsData: {
      formData,
      formBtns,
      inline,
      labelPosition,
      requiredPosition
    }
  })

  it('renders components to exists', () => {
    const formItems = wrapper.findAll('.el-form-item')
    formData.forEach((item, index) => {
      switch (item.type) {
        case 'component':
          break
        case 'input':
          expect(formItems.at(index).findComponent(ElInput).exists()).toBe(true)
          break
        case 'select':
          expect(formItems.at(index).findComponent(ElSelect).exists()).toBe(true)
          break
        case 'switch':
          expect(formItems.at(index).findComponent(ElSwitch).exists()).toBe(true)
          break
        case 'textarea':
          expect(formItems.at(index).findComponent(ElInput).exists()).toBe(true)
          break
        case 'radio':
          expect(formItems.at(index).findComponent(ElRadio).exists()).toBe(true)
          break
        case 'date':
          expect(formItems.at(index).findComponent(ElDatePicker).exists()).toBe(true)
          break
        default:
          break
      }
    })
  })

  it('renders item-label text to toBe', () => {
    const formItemLabels = wrapper.findAll('.el-form-item .el-form-item__label')
    formData.forEach((item, index) => {
      expect(formItemLabels.at(index).text()).toBe(item.label)
    })
  })

  it('buttons component and text and event to verify', () => {
    const formBtnEls = wrapper.findAll('.infinite-button')
    formBtns.forEach((item, index) => {
      const btnEl = formBtnEls.at(index)
      if (item.name === '保存') {
        btnEl.vm.$emit('click')
        expect(btnEl.emitted().click).toBeTruthy()
      }
      expect(btnEl.exists()).toBe(true)
      expect(btnEl.text()).toBe(item.name)
    })
  })

  it('renders form attributes toBe', () => {
    expect(wrapper.vm.inline).toBe(inline)
    expect(wrapper.vm.labelPosition).toBe(labelPosition)
    expect(wrapper.vm.requiredPosition).toBe(requiredPosition)
    wrapper.destroy()
  })
})
