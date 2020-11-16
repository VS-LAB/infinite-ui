## Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础表格

基础的表格展示用法。

:::demo 当`infinite-table`元素中注入`data`、`header`对象数组后，在`header`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。

```html
<template>
  <infinite-table :data="tableData" :header="tableHeader"> </infinite-table>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'address',
            label: '地址',
          },
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
      };
    },
  };
</script>
```

:::

### 固定表头

纵向内容过多时，可选择固定表头。

:::demo 只要在`el-table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码。

```html
<template>
  <infinite-table :data="tableData" :header="tableHeader" height="200px">
  </infinite-table>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'address',
            label: '地址',
          },
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
      };
    },
  };
</script>
```

:::

### 固定列

横向内容过多时，可选择固定列。

:::demo 固定列需要使用`fixed`属性，它接受 Boolean 值或者`left` `right`，表示左边固定还是右边固定。

```html
<template>
  <infinite-table :data="tableData" :header="tableHeader"> </infinite-table>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            fixed: true,
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'province',
            label: '省份',
            width: '180',
          },
          {
            prop: 'city',
            label: '市区',
            width: '100',
          },
          {
            prop: 'address',
            label: '地址',
            width: '280',
          },
          {
            prop: 'zip',
            label: '邮编',
            width: '120',
            fixed: 'right',
          },
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333,
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333,
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333,
          },
        ],
      };
    },
  };
</script>
```

:::

### 固定列和表头

横纵内容过多时，可选择固定列和表头。

:::demo 固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。

```html
<template>
  <infinite-table :data="tableData" :header="tableHeader" height="200px">
  </infinite-table>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            fixed: true,
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'province',
            label: '省份',
            width: '180',
          },
          {
            prop: 'city',
            label: '市区',
            width: '100',
          },
          {
            prop: 'address',
            label: '地址',
            width: '280',
          },
          {
            prop: 'zip',
            label: '邮编',
            width: '120',
            fixed: 'right',
          },
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333,
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333,
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333,
          },
        ],
      };
    },
  };
</script>
```

:::

### 高度自动拉伸表格

使用属性 needAutoHeight 使表格的高度随父元素的高度拉伸。这里建议父节点使用纵向的 felx 布局。

:::demo `needAutoHeight`属性可以让表格随父盒子的高度拉伸。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。`height`属性会导致`needAutoHeight`属性失效

```html
<template>
  <div style="height:200px" ref="tableContainerRef">
    <infinite-table
      ref="tableRef"
      :data="tableData"
      :header="tableHeader"
      :needAutoHeight="true"
    >
    </infinite-table>
  </div>
  <div style="margin-top: 20px;">
    <infinite-button @click="handleClick">增加父盒子高度</infinite-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'address',
            label: '地址',
          },
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1520 弄',
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1514 弄',
          },
        ],
      };
    },
    methods: {
      handleClick() {
        const tableContainerRef = this.$refs.tableContainerRef;
        tableContainerRef.style.height =
          tableContainerRef.clientHeight + 10 + 'px';
        // 手动调用重新计算方法
        this.$refs.tableRef.computedHeightFun();
      },
    },
  };
</script>
```

:::

### 多选

选择多行数据时使用 Checkbox。

:::demo 实现多选非常简单:<br/>方法一:在传入 header 属性的前提下， 设置`type`为`true`即可；<br/>方法二: 手动添加一个`infinite-table-column`，设`type`属性为`selection`即可；<br/>默认情况下若内容过多会折行显示，若需要单行显示可以使用`show-overflow-tooltip`属性，它接受一个`Boolean`，为`true`时多余的内容会在 hover 时以 tooltip 的形式显示出来。

```html
<template>
  <infinite-table
    ref="multipleTable"
    :data="tableData"
    :header="tableHeader"
    height="200px"
    type="selection"
    @selection-change="handleSelectionChange"
  >
  </infinite-table>
  <div style="margin-top: 20px">
    <infinite-button @click="toggleSelection([tableData[1], tableData[2]])"
      >切换第二、第三行的选中状态</infinite-button
    >
    <infinite-button @click="toggleSelection()">取消选择</infinite-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'address',
            label: '地址',
          },
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
        multipleSelection: [],
      };
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach((row) => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(val);
      },
    },
  };
</script>
```

:::

### 树表格

选择多行数据时使用 Checkbox。

:::demo 实现多选非常简单:<br/>方法一:在传入 header 属性的前提下， 设置`type`为`true`即可；<br/>方法二: 手动添加一个`infinite-table-column`，设`type`属性为`expand`即可；<br/>默认情况下若内容过多会折行显示，若需要单行显示可以使用`show-overflow-tooltip`属性，它接受一个`Boolean`，为`true`时多余的内容会在 hover 时以 tooltip 的形式显示出来。

```html
<template>
  <infinite-table
    ref="multipleTable"
    :data="tableData"
    :header="tableHeader"
    height="200px"
    type="selection"
    @selection-change="handleSelectionChange"
  >
  </infinite-table>
  <div style="margin-top: 20px">
    <infinite-button @click="toggleSelection([tableData[1], tableData[2]])"
      >切换第二、第三行的选中状态</infinite-button
    >
    <infinite-button @click="toggleSelection()">取消选择</infinite-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'address',
            label: '地址',
          },
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
        multipleSelection: [],
      };
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach((row) => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(val);
      },
    },
  };
</script>
```

:::

### 排序

对表格进行排序，可快速查找或对比数据。

:::demo 在列中设置`sortable`属性即可实现以该列为基准的排序，接受一个`Boolean`，默认为`false`。可以通过 Table 的`default-sort`属性设置默认的排序列和排序顺序。可以使用`sort-method`或者`sort-by`使用自定义的排序规则。如果需要后端排序，需将`sortable`设置为`custom`，同时在 Table 上监听`sort-change`事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。

```html
<template>
  <infinite-table
    :data="tableData"
    :header="tableHeader"
    :default-sort="{prop: 'date', order: 'descending'}"
    @sort-change="sortChange"
  >
  </infinite-table>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
            sortable: true,
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'address',
            label: '地址',
            sortable: 'custom',
          },
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
        multipleSelection: [],
      };
    },
    methods: {
      sortChange(column) {
        console.log(column);
      },
    },
  };
</script>
```

:::

### 自定义列模板

在不使用 header 属性的条件下，可以自定义列的显示内容，可组合其他组件使用。
:::demo 通过 `Scoped slot` 可以获取到 row, column, \$index 和 store（table 内部的状态管理）的数据，用法参考 demo。

```html
<template>
  <infinite-table :data="tableData">
    <infinite-table-column
      v-for="hItem in tableHeader"
      :key="hItem.prop"
      :prop="hItem.prop"
      :label="hItem.label"
      :width="hItem.width"
    >
    </infinite-table-column>
  </infinite-table>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            prop: 'date',
            label: '日期',
            width: '180',
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'address',
            label: '地址',
          },
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
      };
    },
    methods: {},
  };
</script>
```

:::

### 自定义表头

### 表头支持自定义。

:::demo 通过设置 [Scoped slot](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD) 来自定义表头。

```html
<template>
  <infinite-table :data="tableData">
    <infinite-table-column prop="date" label="日期" width="180">
    </infinite-table-column>
    <infinite-table-column prop="name" label="姓名" width="180">
    </infinite-table-column>
    <infinite-table-column prop="address" label="地址">
      <template slot="header" slot-scope="scope">
        <infinite-button @click="handleFreedom">自定义</infinite-button>
      </template>

      <template slot-scope="scope">
        <infinite-button @click="handleEdit(scope.$index, scope.row)"
          >Edit</infinite-button
        >
        <infinite-button
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</infinite-button
        >
      </template>
    </infinite-table-column>
  </infinite-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
      };
    },
    methods: {
      handleFreedom() {
        console.log('点击了自定义');
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    },
  };
</script>
```

:::

### 列宽自适应

每一列的宽度值都扩展了自适应属性。

:::demo 通过设置`needAutoWidth`属性来定义该列是否需要根据内容来定宽度，它接受一个 Boolean，默认为 false，设置为 true 即为启用。

```html
<template>
  <infinite-table :data="tableData" :header="tableHeader"> </infinite-table>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            prop: 'time',
            label: '时间',
            width: '180',
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'address',
            label: '地址',
            needAutoWidth: true,
          },
        ],
        tableData: [
          {
            time: '2016-05-02 10:55:44',
            name: '王小虎',
            address: '广东省深圳市福田区市花路16号平安银行信息科技中心',
          },
          {
            time: '2016-05-04 10:55:44',
            name: '王小虎',
            address: '广东省深圳市福田区市花路16号平安银行L',
          },
          {
            time: '2016-05-01 10:55:44',
            name: '王小虎',
            address: '广东省深圳市福田区市花路16号平安银行信息科技中心2L',
          },
          {
            time: '2016-05-03 10:55:44',
            name: '王小虎',
            address: '广东省深圳市福田区市花路16号',
          },
        ],
      };
    },
  };
</script>
```

:::

### 操作列

提供操作列按钮 operation。

:::demo 通过为`prop`提供`operation`值来定义该列是否需要是否为操作列。

```html
<template>
  <infinite-table
    :data="tableData"
    :header="tableHeader"
    :operations="operations"
  >
  </infinite-table>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: [
          {
            prop: 'time',
            label: '时间',
            width: '180',
          },
          {
            prop: 'name',
            label: '姓名',
            width: '180',
          },
          {
            prop: 'address',
            label: '地址',
            needAutoWidth: true,
          },
          {
            prop: 'operation',
            label: '操作',
            align: 'center',
            width: '200',
          },
        ],
        tableData: [
          {
            time: '2016-05-02 10:55:44',
            name: '王小虎',
            address: '广东省深圳市福田区市花路16号平安银行信息科技中心',
          },
          {
            time: '2016-05-04 10:55:44',
            name: '王小虎',
            address: '广东省深圳市福田区市花路16号平安银行L',
          },
          {
            time: '2016-05-01 10:55:44',
            name: '王小虎',
            address: '广东省深圳市福田区市花路16号平安银行信息科技中心2L',
          },
          {
            time: '2016-05-03 10:55:44',
            name: '王小虎',
            address: '广东省深圳市福田区市花路16号',
          },
        ],
        operations: [
          {
            label: 'Edit',
            click: (index, row) => {
              console.log(index, row);
            },
          },
          {
            label: 'Delete',
            type: 'danger',
            click: (index, row) => {
              console.log(index, row);
            },
          },
        ],
      };
    },
  };
</script>
```

:::

### Table Attributes

| 参数                    | 说明                                                                                                                                                | 类型                             | 可选值                         | 默认值                                                      |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------ | ----------------------------------------------------------- |
| data                    | 显示的数据                                                                                                                                          | Array                            | —                              | —                                                           |
| header                  | 表头的数据                                                                                                                                          | Array                            | `option` 属性                  | —                                                           |
| need-auto-height        | 表格的高度随父组件拉伸，不设置 height 时生效                                                                                                        | Boolean                          | —                              | false                                                       |
| height                  | Table 的高度                                                                                                                                        | String/Number                    | —                              | —                                                           |
| Stripe                  | 是否为斑马纹 table                                                                                                                                  | Boolean                          | —                              | false                                                       |
| border                  | 是否带有纵向边框                                                                                                                                    | Boolean                          | —                              | false                                                       |
| row-class-name          | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className                                                                         | Function({row, rowIndex})/String | —                              | —                                                           |
| default-sort            | 默认的排序列的 prop 和顺序。它的`prop`属性指定默认的排序的列，`order`指定默认排序的顺序                                                             | Object                           | `order`: ascending, descending | 如果只指定了`prop`, 没有指定`order`, 则默认顺序是 ascending |
| default-font-size       | 当 `option`:needAutoWidth 为 true 时,默认计算的文案大小                                                                                             | Number                           | —                              | 14                                                          |
| default-td-atuo-padding | 当 `option`:needAutoWidth 为 true 时,默认计算的单元格间距                                                                                           | Number                           | —                              | 20                                                          |
| type                    | 对应列的类型。如果设置了 `selection` 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 `expand` 则显示为一个可展开的按钮 | String                           | selection, expand              | —                                                           |
| operations              | 操作列操作按钮。如果设置了 `prop`: 'operation' 则显示该；                                                                                           | Array                            | —                              | —                                                           |

### option Attributes

| 参数                | 说明                                                                                                                                                | 类型           | 可选值              | 默认值 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------- | ------ |
| prop                | 列的唯一表示                                                                                                                                        | String         | —                   | —      |
| label               | 表头的默认数据                                                                                                                                      | String         | —                   | —      |
| fixed               | 固定列表示                                                                                                                                          | Boolean        | —                   | false  |
| showOverflowTooltip | 当内容过长被隐藏时显示 tooltip                                                                                                                      | Boolean        | —                   | false  |
| sortable            | 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件                                                 | Boolean/String | —                   | false  |
| minWidth            | 最小宽度，这里不提供 width，因为 width 会存在断列的可能                                                                                             | String/Numbe   | —                   | —      |
| type                | 对应列的类型。如果设置了 `selection` 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 `expand` 则显示为一个可展开的按钮 | String         | selection, expand   | —      |
| align               | 对齐方式                                                                                                                                            | String         | left, center, right | left   |

### Table Events

| 事件名           | 说明                                       | 参数                    |
| ---------------- | ------------------------------------------ | ----------------------- |
| selection-change | 当选择项发生变化时会触发该事件             | selection               |
| sort-change      | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |

### Table Methods

| 事件名             | 说明                                                                                                        | 参数          |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------------- |
| clearSelection     | 用于多选表格，清空用户的选择                                                                                | —             |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |

### Table-column Scoped Slot

| name   | 说明                                            |
| ------ | ----------------------------------------------- |
| —      | 自定义列的内容，参数为 { row, column, \$index } |
| header | 自定义表头的内容. 参数为 { column, \$index }    |
