"use strict";

var _testUtils = require("@vue/test-utils");

var _index = _interopRequireDefault(require("@/packages/infinite-table/src/index.vue"));

var _infiniteTableColumn = _interopRequireDefault(require("@/packages/infinite-table/src/infiniteTableColumn.vue"));

var _table = _interopRequireDefault(require("element-ui/lib/table.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getTestData = function getTestData() {
  return [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路平安号'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路信息'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路手机号码'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }];
};

var getTestHeader = function getTestHeader() {
  return [{
    prop: 'date',
    label: '日期',
    width: '180'
  }, {
    prop: 'name',
    label: '姓名',
    width: '180'
  }, {
    prop: 'address',
    label: '地址',
    needAutoWidth: true
  }, {
    prop: 'operation',
    label: '操作',
    align: 'center',
    width: '200'
  }];
};

var getoperations = function getoperations() {
  return [{
    label: 'Edit',
    click: function click(_) {}
  }, {
    label: 'Delete',
    type: 'danger',
    click: function click(_) {}
  }];
};

var later = function later(time) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, time);
  });
};

describe('InfiniteTable.vue', function () {
  var data = getTestData();
  var header = getTestHeader();
  var operations = getoperations();
  var defaultTdAtuoPadding = 20;
  var needAutoHeight = true;
  var rowClassName = 'row-class-name';
  var border = true;
  var type = 'selection';
  var wrapper = (0, _testUtils.mount)(_index["default"], {
    propsData: {
      defaultTdAtuoPadding: defaultTdAtuoPadding,
      operations: operations,
      border: border,
      needAutoHeight: needAutoHeight,
      rowClassName: rowClassName,
      type: type
    },
    slots: {
      header: '<div />'
    }
  }); // 属性测试

  it('table props test toBe', function _callee() {
    var ElTableWrapper, ElTableWrapperVm;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(wrapper.setProps({
              data: data,
              header: header
            }));

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(later());

          case 4:
            ElTableWrapper = wrapper.findComponent(_table["default"]);
            ElTableWrapperVm = ElTableWrapper.vm;
            expect(ElTableWrapperVm.data).toBe(data);
            expect(ElTableWrapperVm.border).toBe(border);
            expect(ElTableWrapperVm.rowClassName).toBe(rowClassName);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  }); // 排序回调

  it('table sort event toBeTruthy', function _callee2() {
    var ElTableWrapper;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ElTableWrapper = wrapper.findComponent(_table["default"]);
            ElTableWrapper.vm.$emit('selection-change');
            expect(wrapper.emitted('selection-change')).toBeTruthy();
            ElTableWrapper.vm.$emit('sort-change');
            expect(wrapper.emitted('sort-change')).toBeTruthy();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  }); // 按钮回调

  it('operations button clicked', function _callee3() {
    var InfiniteButtonWrapper, mockClick, click;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            InfiniteButtonWrapper = wrapper.findAll('.infinite-table-operation-btn .infinite-button').at(0);
            _context3.next = 3;
            return regeneratorRuntime.awrap(InfiniteButtonWrapper.trigger('click'));

          case 3:
            mockClick = jest.fn(wrapper.vm.handleClick);
            click = jest.fn(function () {});
            mockClick({
              click: click
            });
            expect(click).toBeCalledTimes(1);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  }); // resize evnet 

  it('resize evnet test', function _callee4() {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            window.dispatchEvent(new Event('resize'));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    });
  }); // 高度自动拉伸

  var autoHeightWrapper = (0, _testUtils.mount)({
    render: function render(h) {
      return h('div', {
        style: {
          height: '100px'
        }
      }, [h(_index["default"], {
        props: {
          data: data,
          header: header,
          needAutoHeight: needAutoHeight
        }
      })]);
    }
  }); // 高度自适应

  it('table autoHeight test', function () {
    expect(autoHeightWrapper.find('.infinite-table').attributes('style')).toContain('height: 100px');
  }); // 插槽使用

  var headerSlotName = '姓名';
  var slotWrapper = (0, _testUtils.mount)({
    render: function render(h) {
      return h(_index["default"], {
        props: {
          data: [{
            name: '王小虎'
          }]
        }
      }, [h(_infiniteTableColumn["default"], {
        props: {
          prop: 'name'
        },
        scopedSlots: {
          header: function header() {
            return h('div', {
              domProps: {
                innerHTML: headerSlotName
              }
            });
          }
        }
      })]);
    }
  }); // 插槽值匹配

  it('table slot header toBo', function () {
    expect(slotWrapper.find('.el-table__header-wrapper .cell>span').html()).toBe("<span><div>".concat(headerSlotName, "</div></span>"));
    wrapper.destroy();
    autoHeightWrapper.destroy();
    slotWrapper.destroy();
  });
});