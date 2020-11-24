"use strict";

var _testUtils = require("@vue/test-utils");

var _index = _interopRequireDefault(require("@/packages/infinite-nav-menu/src/index.vue"));

var _menu = _interopRequireDefault(require("element-ui/lib/menu.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getTestData = function getTestData() {
  return [{
    index: '1',
    label: '处理中心'
  }, {
    index: '2',
    label: '我的工作台',
    children: [{
      index: '2-1',
      label: '选项1'
    }, {
      index: '2-2',
      label: '选项2'
    }, {
      index: '2-3',
      label: '选项3'
    }, {
      index: '2-4',
      label: '选项4',
      children: [{
        index: '2-4-1',
        label: '选项4-1'
      }, {
        index: '2-4-2',
        label: '选项4-2'
      }, {
        index: '2-4-3',
        label: '选项4-3'
      }]
    }]
  }, {
    index: '3',
    label: '消息中心',
    disabled: true
  }, {
    index: '4',
    label: '订单管理',
    component: function component(h) {
      return h('a', {
        attrs: {
          href: 'https://www.ele.me',
          target: '_blank'
        }
      }, [h('span', {
        slot: 'title'
      }, '订单管理')]);
    }
  }];
};

describe('InfiniteNavMenu.vue', function () {
  var data = getTestData();
  var wrapper = (0, _testUtils.shallowMount)(_index["default"]);
  it('InfiniteNavMenu data to checked', function _callee() {
    var circulation;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(wrapper.setProps({
              data: data
            }));

          case 2:
            circulation = function circulation(menuData, element) {
              menuData.forEach(function (item, index) {
                var curElement = element.filter(function (w) {
                  return w.attributes('index') === item.index;
                });

                if (item.children && item.children.length) {
                  circulation(item.children, element);
                } else {
                  expect(curElement.at(0).html()).toContain(item.label);
                }
              });
            };

            circulation(data, wrapper.findAll('.infinite-nav-menu-container *'));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it('InfiniteNavMenu event to toBeTruthy', function _callee2() {
    var ElMenuWrapper;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ElMenuWrapper = wrapper.findComponent(_menu["default"]);
            ElMenuWrapper.vm.$emit('select');
            expect(wrapper.emitted('select')).toBeTruthy();
            ElMenuWrapper.vm.$emit('open');
            expect(wrapper.emitted('open')).toBeTruthy();
            ElMenuWrapper.vm.$emit('close');
            expect(wrapper.emitted('close')).toBeTruthy(); // wrapper.vm.open()
            // expect(ElMenuWrapper.vm.open).toBeTruthy()
            // wrapper.vm.close()
            // expect(ElMenuWrapper.vm.close).toBeTruthy()

            wrapper.destroy();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});