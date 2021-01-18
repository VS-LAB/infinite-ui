import { shallowMount, config } from '@vue/test-utils'
import InfiniteForm from '@/packages/infinite-form/src/index.vue'
import InfiniteFormItem from '@/packages/infinite-form/src/infiniteFormItem.vue'
import InfiniteButton from '@/packages/infinite-button/src/index.vue'
import InfiniteCascaders from '@/packages/infinite-cascaders/src/index.vue'
import InfiniteSelectTags from '@/packages/infinite-select-tags/src/index.vue'
import ElForm from 'element-ui/lib/form.js'
import ElFormItem from 'element-ui/lib/form-item.js'
import ElInput from 'element-ui/lib/input.js'
import ElSwitch from 'element-ui/lib/switch.js'
import ElSlider from 'element-ui/lib/slider.js'
import ElDatePicker from 'element-ui/lib/date-picker.js'
config.stubs['InfiniteFormItem'] = InfiniteFormItem
config.stubs['ElForm'] = ElForm
config.stubs['ElFormItem'] = ElFormItem
config.stubs['InfiniteButton'] = InfiniteButton
config.stubs['InfiniteButton'] = InfiniteButton
const validatePass = (_, value, callback) => {
  if (!value) {
    callback(new Error('密码不能为空'))
  } else if (value.length < 6) {
    callback(new Error('密码不能小于6位数'))
  } else {
    callback()
  }
}
const opts = [
  {
    value: 'inputs',
    label: '输入框',
    children: [
      {
        value: 'input-1',
        label: '数字输入框',
        component: 'input',
        type: 'number'
      },
      {
        value: 'input-2',
        label: '文本输入框',
        component: 'input',
        type: 'text'
      }
    ]
  },
  {
    value: 'button',
    label: '按钮',
    children: [
      {
        value: 'button-1',
        label: '主要按钮',
        name: '主要按钮',
        component: 'button',
        type: 'primary'
      },
      {
        value: 'button-2',
        label: '成功按钮',
        name: '成功按钮',
        component: 'button',
        type: 'success'
      },
      {
        value: 'button-3',
        label: '警告按钮',
        name: '警告按钮',
        component: 'button',
        type: 'warning'
      },
      {
        value: 'button-4',
        label: '危险按钮',
        name: '危险按钮',
        component: 'button',
        type: 'danger'
      }
    ]
  },
  {
    value: 'date-picker',
    label: '日期选择器',
    children: [
      {
        value: 'date-picker-1',
        label: '日选择器',
        component: 'date-picker',
        type: 'date'
      }
    ]
  }
]
const seletOpts = [
  {
    id: 'USD',
    name: '美元',
    children: [
      {
        id: 'USD-1',
        name: '美元-1'
      },
      {
        id: 'USD-2',
        name: '美元-2'
      },
      {
        id: 'USD-3',
        name: '美元-3'
      },
      {
        id: 'USD-4',
        name: '美元-4'
      }
    ]
  },
  {
    id: 'GBP',
    name: '英镑',
    disabled: true,
    children: [
      {
        id: 'GBP-1',
        name: '英镑-1'
      },
      {
        id: 'GBP-2',
        name: '英镑-2'
      },
      {
        id: 'GBP-3',
        name: '英镑-3'
      },
      {
        id: 'GBP-4',
        name: '英镑-4'
      }
    ]
  },
  {
    id: 'RMB',
    name: '人民币'
  },
  {
    id: 'EUR',
    name: '欧元'
  },
  {
    id: 'CAD',
    name: '加元'
  }
]
const cascadersVModel = {
  keys: ['button', 'button-1'],
  value: ''
}
const getTestData = function () {
  return [
    {
      label: '自定义表单组件',
      type: 'component',
      key: 'cascaders',
      isShow: true,
      defaultValue: cascadersVModel,
      component: (h) => {
        return h(InfiniteCascaders, {
          props: {
            options: opts
          }
        })
      }
    },
    {
      label: '自定义表单组件',
      type: 'component',
      key: 'selectTags',
      isShow: true,
      component: (h) => {
        return h(InfiniteSelectTags, {
          props: {
            options: seletOpts,
            placeholder: '请选择查询信息',
            tagsNum: 4,
            defaultCheckeds: ['GBP']
          },
          on: {
            componentEvent: (val) => {
              this.componentEvent(val)
            }
          }
        })
      }
    },
    {
      label: '自定义表单组件-slider',
      type: 'component',
      key: 'slider',
      isShow: true,
      defaultValue: 50,
      component: (h) => {
        return h(ElSlider, {
          props: {
            range: true
          }
        })
      }
    },
    {
      label: '姓名',
      type: 'input',
      key: 'name',
      isShow: true
    },
    {
      label: '喜好',
      type: 'select',
      key: 'likes',
      clearable: true,
      isShow: true,
      placeholder: '请选择喜好',
      class: 'test-class',
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
      label: '太阳',
      type: 'radio',
      key: 'sun',
      isShow: true
    },
    {
      label: '出生日期',
      type: 'date-picker',
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
    },
    {
      label: '空',
      type: '',
      key: 'kk',
      isShow: true
    }
  ]
}
const formModel = {}
const getBtnData = function () {
  return [
    {
      name: '保存',
      type: 'primary',
      click: (val, refs) => {
        formModel.models = val.models
      }
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
      inline,
      labelPosition,
      requiredPosition
    }
  })

  it('renders components to exists', async () => {
    await wrapper.setProps({
      formData,
      formBtns
    })

    const formItems = wrapper.findAll('.el-form-item')
    formData.forEach((item, index) => {
      switch (item.type) {
        case 'component':
          break
        case 'input':
          expect(formItems.at(index).findComponent(ElInput).exists()).toBe(true)
          break
        // case 'select':
        //   expect(formItems.at(index).findComponent(ElSelect).exists()).toBe(true)
        //   break
        case 'switch':
          expect(formItems.at(index).findComponent(ElSwitch).exists()).toBe(true)
          break
        case 'textarea':
          expect(formItems.at(index).findComponent(ElInput).exists()).toBe(true)
          break
        case 'date-picker':
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
  })

  it('renders form validate Funcs emited', () => {
    // 手动调用 validate 方法
    const mackValidate = jest.fn(wrapper.vm.validate)
    mackValidate()
    mackValidate(() => { })
    expect(mackValidate).toBeCalledTimes(2)
  })

  it('renders component v-model test', async () => {
    const confirmBtn = wrapper.findAllComponents(InfiniteButton).at(0)
    const value = '测试'
    wrapper.findComponent(InfiniteCascaders).vm.$emit('change', {
      keys: cascadersVModel.keys,
      value
    })
    confirmBtn.vm.$emit('click')
    expect(formModel.models.cascaders.value).toBe(value)
    wrapper.destroy()
  })
})
