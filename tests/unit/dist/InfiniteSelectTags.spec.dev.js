"use strict";

var _testUtils = require("@vue/test-utils");

var _index = _interopRequireDefault(require("@/packages/infinite-select-tags/src/index.vue"));

var _input = _interopRequireDefault(require("element-ui/lib/input"));

var _tag = _interopRequireDefault(require("element-ui/lib/tag"));

var _select = _interopRequireDefault(require("element-ui/lib/select"));

var _option = _interopRequireDefault(require("element-ui/lib/option"));

var _checkbox = _interopRequireDefault(require("element-ui/lib/checkbox"));

var _index2 = _interopRequireDefault(require("@/packages/infinite-button/src/index.vue"));

var _InfiniteSelectTagsOption = _interopRequireDefault(require("@/packages/infinite-select-tags/src/InfiniteSelectTagsOption.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getTestData = function getTestData() {
  return [{
    id: 'USD',
    name: '美元',
    disabled: true,
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
    name: '人民币',
    disabled: true
  }, {
    id: 'EUR',
    name: '欧元'
  }, {
    id: 'CAD',
    name: '加元'
  }, {
    id: 'AUD',
    name: '澳大利亚元'
  }, {
    id: 'TAD',
    name: '泰元'
  }, {
    id: 'MUD',
    name: '孟加拉元'
  }];
};

describe('InfiniteSelectTags.vue', function () {
  var placeholder = '测试placeholder';
  var defaultCheckeds = ['USD', 'GBP-1', 'TAD'];
  var options = getTestData();
  var wrapper = (0, _testUtils.shallowMount)(_index["default"], {
    propsData: {
      filterable: true
    },
    stubs: {
      ElSelect: _select["default"],
      ElInput: _input["default"],
      ElTag: _tag["default"],
      ElOption: _option["default"],
      ElCheckbox: _checkbox["default"],
      InfiniteButton: _index2["default"],
      InfiniteSelectTagsOption: _InfiniteSelectTagsOption["default"]
    }
  });
  it('是否正确渲染', function () {
    expect(wrapper.attributes()["class"]).toContain('infinite-select-tags');
  }); // 检查已存在的元素

  it('是否有按钮', function () {
    expect(wrapper.find('.infinite-button').exists()).toBe(true);
  }); // 事件测试

  it('component event emited', function _callee2() {
    var checked, rootCheckboxInput, childCheckboxInput, selectAllInput, selectTags, mockBlur;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(wrapper.setProps({
              options: options,
              defaultCheckeds: defaultCheckeds,
              placeholder: placeholder
            }));

          case 2:
            // 勾选选中数据
            checked = {};
            defaultCheckeds.forEach(function _callee(item) {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      checked[item] = true;
                      _context.next = 3;
                      return regeneratorRuntime.awrap(wrapper.setData({
                        checked: checked
                      }));

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            });
            rootCheckboxInput = wrapper.findAll('.infinite-select-group-level-1 .exist-children > .el-checkbox input[type="checkbox"]').at(1); // 选中根节点

            _context2.next = 7;
            return regeneratorRuntime.awrap(rootCheckboxInput.setChecked());

          case 7:
            expect(wrapper.emitted('checkBoxChange')).toBeTruthy();
            childCheckboxInput = wrapper.findAll('.infinite-select-group-level-2').at(1).findAll('input[type="checkbox"]').at(0); // 取消子节点

            _context2.next = 11;
            return regeneratorRuntime.awrap(childCheckboxInput.setChecked(false));

          case 11:
            expect(wrapper.emitted('checkBoxChange').length).toBe(2); // 点击全选

            selectAllInput = wrapper.find('.infinite-select-button input[type="checkbox"]');
            _context2.next = 15;
            return regeneratorRuntime.awrap(selectAllInput.setChecked());

          case 15:
            expect(wrapper.emitted('allSelect')).toBeTruthy(); // 下拉框弹出

            selectTags = wrapper.find('.el-select');
            _context2.next = 19;
            return regeneratorRuntime.awrap(selectTags.trigger('click'));

          case 19:
            expect(selectTags.emitted('visible-change').length).toBe(1);
            mockBlur = jest.fn(wrapper.vm.blur);
            mockBlur();
            expect(mockBlur).toBeCalledTimes(1);
            _context2.next = 25;
            return regeneratorRuntime.awrap(wrapper.vm.$nextTick());

          case 25:
            expect(selectTags.emitted('visible-change').length).toBe(2);

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    });
  }); // 关键字搜索方法控制显隐

  it('reader search Fun', function _callee3() {
    var inputWrapper;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            inputWrapper = wrapper.find('.infinite-select-search input[type="text"]');
            _context3.next = 3;
            return regeneratorRuntime.awrap(inputWrapper.setValue(options[2].name));

          case 3:
            expect(inputWrapper.element.value).toBe(options[2].name);
            wrapper.destroy();

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
});