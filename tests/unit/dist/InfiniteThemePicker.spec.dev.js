"use strict";

var _testUtils = require("@vue/test-utils");

var _index = _interopRequireDefault(require("@/packages/infinite-theme-picker/src/index.vue"));

var _colorPicker = _interopRequireDefault(require("element-ui/lib/color-picker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var version = require('element-ui/package.json').version;

describe('InfiniteThemePicker.vue', function () {
  var wrapper = (0, _testUtils.shallowMount)(_index["default"]);
  var vModel = '#F41371'; // 远端样式获取

  it('origin style get methods', function _callee() {
    var url, mockGetCSSString, chalk;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 等待资源响应
            url = "https://unpkg.com/element-ui@".concat(version, "/lib/theme-chalk/index.css");
            mockGetCSSString = jest.fn(wrapper.vm.getCSSString);
            _context.next = 4;
            return regeneratorRuntime.awrap(mockGetCSSString(url));

          case 4:
            chalk = _context.sent;
            expect(chalk === '').toBe(false);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  }); // v-model属性匹配

  it('renders props.v-model to toBe value', function _callee2() {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(wrapper.setProps({
              vModel: vModel
            }));

          case 2:
            expect(wrapper.attributes().value).toBe(vModel);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    });
  }); // 自定义方法测试

  it('event test toBeTruthy', function () {
    wrapper.findComponent(_colorPicker["default"]).vm.$emit('change');
    expect(wrapper.emitted('change')).toBeTruthy();
    wrapper.findComponent(_colorPicker["default"]).vm.$emit('active-change');
    expect(wrapper.emitted('activeChange')).toBeTruthy();
    wrapper.destroy();
  });
});