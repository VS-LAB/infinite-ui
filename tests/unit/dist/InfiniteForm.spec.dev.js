"use strict";

var _testUtils = require("@vue/test-utils");

var _index = _interopRequireDefault(require("@/packages/infinite-form/src/index.vue"));

var _infiniteFormItem = _interopRequireDefault(require("@/packages/infinite-form/src/infiniteFormItem.vue"));

var _index2 = _interopRequireDefault(require("@/packages/infinite-button/src/index.vue"));

var _index3 = _interopRequireDefault(require("@/packages/infinite-cascaders/src/index.vue"));

var _index4 = _interopRequireDefault(require("@/packages/infinite-select-tags/src/index.vue"));

var _form = _interopRequireDefault(require("element-ui/lib/form.js"));

var _formItem = _interopRequireDefault(require("element-ui/lib/form-item.js"));

var _input = _interopRequireDefault(require("element-ui/lib/input.js"));

var _select = _interopRequireDefault(require("element-ui/lib/select.js"));

var _option = _interopRequireDefault(require("element-ui/lib/option.js"));

var _switch = _interopRequireDefault(require("element-ui/lib/switch.js"));

var _slider = _interopRequireDefault(require("element-ui/lib/slider.js"));

var _datePicker = _interopRequireDefault(require("element-ui/lib/date-picker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import ElRadio from 'element-ui/lib/radio.js'
_testUtils.config.stubs['InfiniteFormItem'] = _infiniteFormItem["default"];
_testUtils.config.stubs['ElForm'] = _form["default"];
_testUtils.config.stubs['ElFormItem'] = _formItem["default"];
_testUtils.config.stubs['InfiniteButton'] = _index2["default"];
_testUtils.config.stubs['InfiniteButton'] = _index2["default"];
_testUtils.config.stubs['ElSelect'] = _select["default"];
_testUtils.config.stubs['ElOption'] = _option["default"];

var validatePass = function validatePass(_, value, callback) {
  if (!value) {
    callback(new Error('密码不能为空'));
  } else if (value.length < 6) {
    callback(new Error('密码不能小于6位数'));
  } else {
    callback();
  }
};

var opts = [{
  value: 'inputs',
  label: '输入框',
  children: [{
    value: 'input-1',
    label: '数字输入框',
    component: 'input',
    type: 'number'
  }, {
    value: 'input-2',
    label: '文本输入框',
    component: 'input',
    type: 'text'
  }]
}, {
  value: 'button',
  label: '按钮',
  children: [{
    value: 'button-1',
    label: '主要按钮',
    name: '主要按钮',
    component: 'button',
    type: 'primary'
  }, {
    value: 'button-2',
    label: '成功按钮',
    name: '成功按钮',
    component: 'button',
    type: 'success'
  }, {
    value: 'button-3',
    label: '警告按钮',
    name: '警告按钮',
    component: 'button',
    type: 'warning'
  }, {
    value: 'button-4',
    label: '危险按钮',
    name: '危险按钮',
    component: 'button',
    type: 'danger'
  }]
}, {
  value: 'date-picker',
  label: '日期选择器',
  children: [{
    value: 'date-picker-1',
    label: '日选择器',
    component: 'date-picker',
    type: 'date'
  }]
}];
var seletOpts = [{
  id: 'USD',
  name: '美元',
  children: [{
    id: 'USD-1',
    name: '美元-1'
  }, {
    id: 'USD-2',
    name: '美元-2'
  }, {
    id: 'USD-3',
    name: '美元-3'
  }, {
    id: 'USD-4',
    name: '美元-4'
  }]
}, {
  id: 'GBP',
  name: '英镑',
  disabled: true,
  children: [{
    id: 'GBP-1',
    name: '英镑-1'
  }, {
    id: 'GBP-2',
    name: '英镑-2'
  }, {
    id: 'GBP-3',
    name: '英镑-3'
  }, {
    id: 'GBP-4',
    name: '英镑-4'
  }]
}, {
  id: 'RMB',
  name: '人民币'
}, {
  id: 'EUR',
  name: '欧元'
}, {
  id: 'CAD',
  name: '加元'
}];
var cascadersVModel = {
  keys: ['button', 'button-1'],
  value: ''
};

var getTestData = function getTestData() {
  var _this = this;

  return [{
    label: '自定义表单组件',
    type: 'component',
    key: 'cascaders',
    isShow: true,
    defaultValue: cascadersVModel,
    component: function component(h) {
      return h(_index3["default"], {
        props: {
          options: opts
        }
      });
    }
  }, {
    label: '自定义表单组件',
    type: 'component',
    key: 'selectTags',
    isShow: true,
    component: function component(h) {
      return h(_index4["default"], {
        props: {
          options: seletOpts,
          placeholder: '请选择查询信息',
          tagsNum: 4,
          defaultCheckeds: ['GBP']
        },
        on: {
          componentEvent: function componentEvent(val) {
            _this.componentEvent(val);
          }
        }
      });
    }
  }, {
    label: '自定义表单组件-slider',
    type: 'component',
    key: 'slider',
    isShow: true,
    defaultValue: 50,
    component: function component(h) {
      return h(_slider["default"], {
        props: {
          range: true
        }
      });
    }
  }, {
    label: '姓名',
    type: 'input',
    key: 'name',
    isShow: true
  }, {
    label: '喜好',
    type: 'select',
    key: 'likes',
    clearable: true,
    isShow: true,
    placeholder: '请选择喜好',
    "class": 'test-class',
    options: [{
      id: '1',
      label: '篮球'
    }, {
      id: '2',
      label: '兵乓球'
    }]
  }, {
    label: '今日开心',
    type: 'switch',
    key: 'happy',
    isShow: true
  }, {
    label: '太阳',
    type: 'radio',
    key: 'sun',
    isShow: true
  }, {
    label: '出生日期',
    type: 'date-picker',
    key: 'birthday',
    isShow: true
  }, {
    label: '自我介绍',
    type: 'textarea',
    key: 'introduction',
    isShow: true
  }, {
    label: '密码',
    type: 'input',
    key: 'password',
    isShow: true,
    rules: [{
      required: true,
      validator: validatePass,
      trigger: 'blur'
    }]
  }, {
    label: '空',
    type: '',
    key: 'kk',
    isShow: true
  }];
};

var formModel = {};

var getBtnData = function getBtnData() {
  return [{
    name: '保存',
    type: 'primary',
    click: function click(val, refs) {
      formModel.models = val.models;
    }
  }, {
    name: '取消'
  }];
};

describe('InfiniteForm.vue', function () {
  var formData = getTestData();
  var formBtns = getBtnData();
  var inline = false;
  var labelPosition = 'left';
  var requiredPosition = 'label';
  var wrapper = (0, _testUtils.shallowMount)(_index["default"], {
    propsData: {
      inline: inline,
      labelPosition: labelPosition,
      requiredPosition: requiredPosition
    }
  });
  it('renders components to exists', function _callee() {
    var formItems;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(wrapper.setProps({
              formData: formData,
              formBtns: formBtns
            }));

          case 2:
            formItems = wrapper.findAll('.el-form-item');
            formData.forEach(function (item, index) {
              switch (item.type) {
                case 'component':
                  break;

                case 'input':
                  expect(formItems.at(index).findComponent(_input["default"]).exists()).toBe(true);
                  break;
                // case 'select':
                //   expect(formItems.at(index).findComponent(ElSelect).exists()).toBe(true)
                //   break

                case 'switch':
                  expect(formItems.at(index).findComponent(_switch["default"]).exists()).toBe(true);
                  break;

                case 'textarea':
                  expect(formItems.at(index).findComponent(_input["default"]).exists()).toBe(true);
                  break;

                case 'date-picker':
                  expect(formItems.at(index).findComponent(_datePicker["default"]).exists()).toBe(true);
                  break;

                default:
                  break;
              }
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it('renders item-label text to toBe', function () {
    var formItemLabels = wrapper.findAll('.el-form-item .el-form-item__label');
    formData.forEach(function (item, index) {
      expect(formItemLabels.at(index).text()).toBe(item.label);
    });
  });
  it('buttons component and text and event to verify', function () {
    var formBtnEls = wrapper.findAll('.infinite-button');
    formBtns.forEach(function (item, index) {
      var btnEl = formBtnEls.at(index);

      if (item.name === '保存') {
        btnEl.vm.$emit('click');
        expect(btnEl.emitted().click).toBeTruthy();
      }

      expect(btnEl.exists()).toBe(true);
      expect(btnEl.text()).toBe(item.name);
    });
  });
  it('renders form attributes toBe', function () {
    expect(wrapper.vm.inline).toBe(inline);
    expect(wrapper.vm.labelPosition).toBe(labelPosition);
    expect(wrapper.vm.requiredPosition).toBe(requiredPosition);
  });
  it('renders form validate Funcs emited', function () {
    var ElForm = wrapper.findComponent({
      name: 'ElForm'
    });
    wrapper.vm.validate();
    wrapper.vm.validate(function () {}); // toBeTruthy重写ing ...

    expect(ElForm.vm.validate).toBeTruthy();
    wrapper.vm.clearValidate();
    expect(ElForm.vm.clearValidate).toBeTruthy();
    wrapper.vm.resetFields();
    expect(ElForm.vm.resetFields).toBeTruthy();
  });
  it('renders component v-model test', function _callee2() {
    var confirmBtn, value;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            confirmBtn = wrapper.findAllComponents(_index2["default"]).at(0);
            value = '测试';
            wrapper.findComponent(_index3["default"]).vm.$emit('change', {
              keys: cascadersVModel.keys,
              value: value
            });
            confirmBtn.vm.$emit('click');
            expect(formModel.models.cascaders.value).toBe(value);
            wrapper.destroy();

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});