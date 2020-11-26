"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "InfiniteButton", {
  enumerable: true,
  get: function get() {
    return _infiniteButton["default"];
  }
});
Object.defineProperty(exports, "InfiniteCascaders", {
  enumerable: true,
  get: function get() {
    return _infiniteCascaders["default"];
  }
});
Object.defineProperty(exports, "InfiniteDialog", {
  enumerable: true,
  get: function get() {
    return _infiniteDialog["default"];
  }
});
Object.defineProperty(exports, "InfiniteForm", {
  enumerable: true,
  get: function get() {
    return _infiniteForm["default"];
  }
});
Object.defineProperty(exports, "InfiniteLineChart", {
  enumerable: true,
  get: function get() {
    return _infiniteLineChart["default"];
  }
});
Object.defineProperty(exports, "InfiniteNavMenu", {
  enumerable: true,
  get: function get() {
    return _infiniteNavMenu["default"];
  }
});
Object.defineProperty(exports, "InfinitePagination", {
  enumerable: true,
  get: function get() {
    return _infinitePagination["default"];
  }
});
Object.defineProperty(exports, "InfinitePieChart", {
  enumerable: true,
  get: function get() {
    return _infinitePieChart["default"];
  }
});
Object.defineProperty(exports, "InfiniteSelectTags", {
  enumerable: true,
  get: function get() {
    return _infiniteSelectTags["default"];
  }
});
Object.defineProperty(exports, "InfiniteSelectTagsOption", {
  enumerable: true,
  get: function get() {
    return _infiniteSelectTagsOption["default"];
  }
});
Object.defineProperty(exports, "InfiniteTable", {
  enumerable: true,
  get: function get() {
    return _infiniteTable["default"];
  }
});
Object.defineProperty(exports, "InfiniteTableColumn", {
  enumerable: true,
  get: function get() {
    return _infiniteTableColumn["default"];
  }
});
Object.defineProperty(exports, "InfiniteThemePicker", {
  enumerable: true,
  get: function get() {
    return _infiniteThemePicker["default"];
  }
});
Object.defineProperty(exports, "InfiniteTree", {
  enumerable: true,
  get: function get() {
    return _infiniteTree["default"];
  }
});
exports["default"] = exports.version = exports.install = void 0;

var _infiniteButton = _interopRequireDefault(require("./infinite-button"));

var _infiniteCascaders = _interopRequireDefault(require("./infinite-cascaders"));

var _infiniteDialog = _interopRequireDefault(require("./infinite-dialog"));

var _infiniteForm = _interopRequireDefault(require("./infinite-form"));

var _infiniteLineChart = _interopRequireDefault(require("./infinite-line-chart"));

var _infiniteNavMenu = _interopRequireDefault(require("./infinite-nav-menu"));

var _infinitePagination = _interopRequireDefault(require("./infinite-pagination"));

var _infinitePieChart = _interopRequireDefault(require("./infinite-pie-chart"));

var _infiniteSelectTags = _interopRequireDefault(require("./infinite-select-tags"));

var _infiniteSelectTagsOption = _interopRequireDefault(require("./infinite-select-tags-option"));

var _infiniteTable = _interopRequireDefault(require("./infinite-table"));

var _infiniteTableColumn = _interopRequireDefault(require("./infinite-table-column"));

var _infiniteThemePicker = _interopRequireDefault(require("./infinite-theme-picker"));

var _infiniteTree = _interopRequireDefault(require("./infinite-tree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable */
// This file is auto gererated by build/build-entry.js
var version = '0.0.3';
exports.version = version;
var components = [_infiniteButton["default"], _infiniteCascaders["default"], _infiniteDialog["default"], _infiniteForm["default"], _infiniteLineChart["default"], _infiniteNavMenu["default"], _infinitePagination["default"], _infinitePieChart["default"], _infiniteSelectTags["default"], _infiniteSelectTagsOption["default"], _infiniteTable["default"], _infiniteTableColumn["default"], _infiniteThemePicker["default"], _infiniteTree["default"]];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


exports.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var _default = {
  install: install,
  version: version,
  InfiniteButton: _infiniteButton["default"],
  InfiniteCascaders: _infiniteCascaders["default"],
  InfiniteDialog: _infiniteDialog["default"],
  InfiniteForm: _infiniteForm["default"],
  InfiniteLineChart: _infiniteLineChart["default"],
  InfiniteNavMenu: _infiniteNavMenu["default"],
  InfinitePagination: _infinitePagination["default"],
  InfinitePieChart: _infinitePieChart["default"],
  InfiniteSelectTags: _infiniteSelectTags["default"],
  InfiniteSelectTagsOption: _infiniteSelectTagsOption["default"],
  InfiniteTable: _infiniteTable["default"],
  InfiniteTableColumn: _infiniteTableColumn["default"],
  InfiniteThemePicker: _infiniteThemePicker["default"],
  InfiniteTree: _infiniteTree["default"]
};
exports["default"] = _default;