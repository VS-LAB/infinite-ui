## Select

当选项过多时，使用下拉菜单展示并选择内容。

### 基础功能

适用广泛的基础单选

:::demo `v-model`的值为当前被选中的`infinite-option`的`value`属性值

```html
<template>
  <infinite-select v-model="dataVal" :placeholder="'测试提示'" @change="change">
    <infinite-option
      v-for="item in list"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal: "",
        list: [
          {
            value: "选项1",
            label: "黄金糕",
          },
          {
            value: "选项2",
            label: "双皮奶",
          },
          {
            value: "选项3",
            label: "蚵仔煎",
          },
          {
            value: "选项4",
            label: "龙须面",
          },
          {
            value: "选项5",
            label: "北京烤鸭",
          },
        ],
      };
    },
    methods: {
      change(value) {
        console.log(value);
      },
    },
  };
</script>
```

:::

### 有禁用选项

:::demo `infinite-option`参数中支持`disabled`

```html
<template>
  <infinite-select v-model="dataVal" :placeholder="'测试提示'" @change="change">
    <infinite-option
      v-for="item in list"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal: "",
        list: [
          {
            value: "选项1",
            label: "黄金糕",
          },
          {
            value: "选项2",
            label: "双皮奶",
            disabled: true,
          },
          {
            value: "选项3",
            label: "蚵仔煎",
          },
          {
            value: "选项4",
            label: "龙须面",
          },
          {
            value: "选项5",
            label: "北京烤鸭",
          },
        ],
      };
    },
    methods: {
      change(value) {
        console.log(value);
      },
    },
  };
</script>
```

:::

### 选项框禁用

:::demo `infinite-select`使用`disabled`

```html
<template>
  <infinite-select
    disabled
    v-model="dataVal"
    :placeholder="'测试提示'"
    @change="change"
  >
    <infinite-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px"
        >{{ item.value }}</span
      >
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal: "",
        cities: [
          {
            value: "Beijing",
            label: "北京",
          },
          {
            value: "Shanghai",
            label: "上海",
          },
          {
            value: "Nanjing",
            label: "南京",
          },
          {
            value: "Chengdu",
            label: "成都",
          },
          {
            value: "Shenzhen",
            label: "深圳",
          },
          {
            value: "Guangzhou",
            label: "广州",
          },
        ],
      };
    },
    methods: {
      change(value) {
        console.log(value);
      },
    },
  };
</script>
```

:::

### 基础多选

:::demo `infinite-option`标签内可以使用自定义内容

```html
<template>
  <infinite-select
    multiple
    v-model="dataVal"
    :placeholder="'测试提示'"
    @change="change"
  >
    <infinite-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal: "",
        cities: [
          {
            value: "Beijing",
            label: "北京",
          },
          {
            value: "Shanghai",
            label: "上海",
          },
          {
            value: "Nanjing",
            label: "南京",
          },
          {
            value: "Chengdu",
            label: "成都",
          },
          {
            value: "Shenzhen",
            label: "深圳",
          },
          {
            value: "Guangzhou",
            label: "广州",
          },
        ],
      };
    },
    methods: {
      change(value) {
        console.log(value);
      },
    },
  };
</script>
```

:::

### 自定义数据显示

:::demo `infinite-option`标签内可以使用自定义内容

```html
<template>
  <infinite-select v-model="dataVal" :placeholder="'测试提示'" @change="change">
    <infinite-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px"
        >{{ item.value }}</span
      >
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal: "",
        cities: [
          {
            value: "Beijing",
            label: "北京",
          },
          {
            value: "Shanghai",
            label: "上海",
          },
          {
            value: "Nanjing",
            label: "南京",
          },
          {
            value: "Chengdu",
            label: "成都",
          },
          {
            value: "Shenzhen",
            label: "深圳",
          },
          {
            value: "Guangzhou",
            label: "广州",
          },
        ],
      };
    },
    methods: {
      change(value) {
        console.log(value);
      },
    },
  };
</script>
```

:::

### 可搜索

:::demo 为`infinite-select`添加`filterable`启用搜索功能

```html
<template>
  <infinite-select
    filterable
    v-model="dataVal"
    :placeholder="'测试提示'"
    @change="change"
  >
    <infinite-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px"
        >{{ item.value }}</span
      >
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal: "",
        cities: [
          {
            value: "Beijing",
            label: "北京",
          },
          {
            value: "Shanghai",
            label: "上海",
          },
          {
            value: "Nanjing",
            label: "南京",
          },
          {
            value: "Chengdu",
            label: "成都",
          },
          {
            value: "Shenzhen",
            label: "深圳",
          },
          {
            value: "Guangzhou",
            label: "广州",
          },
        ],
      };
    },
    methods: {
      change(value) {
        console.log(value);
      },
    },
  };
</script>
```

:::

### 远程搜索

:::demo 为了启用远程搜索，需要将`filterable`和`remote`设置为`true`，同时传入一个`remote-method`。`remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果`infinite-option`是通过`v-for`指令渲染出来的，此时需要为`infinite-option`添加`key`属性，且其值需具有唯一性，比如此例中的`item.value`。

```html
<template>
  <infinite-select
    filterable
    v-model="dataVal"
    :placeholder="'测试提示'"
    @change="change"
  >
    <infinite-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px"
        >{{ item.value }}</span
      >
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal: "",
        cities: [
          {
            value: "Beijing",
            label: "北京",
          },
          {
            value: "Shanghai",
            label: "上海",
          },
          {
            value: "Nanjing",
            label: "南京",
          },
          {
            value: "Chengdu",
            label: "成都",
          },
          {
            value: "Shenzhen",
            label: "深圳",
          },
          {
            value: "Guangzhou",
            label: "广州",
          },
        ],
      };
    },
    methods: {
      change(value) {
        console.log(value);
      },
    },
  };
</script>
```

:::

### Select Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| value-key | 作为 value 唯一标识的键名，绑定值为对象类型时必填 | string | — | value |
| size | 输入框尺寸 | string | medium/small/mini | — |
| clearable | 是否可以清空选项 | boolean | — | false |
| collapse-tags | 多选时是否将选中值按文字的形式展示 | boolean | — | false |
| multiple-limit | 多选时用户最多可以选择的项目数，为 0 则不限制 | number | — | 0 |
| name | select input 的 name 属性 | string | — | — |
| autocomplete | select input 的 autocomplete 属性 | string | — | off |
| placeholder | 占位符 | string | — | 请选择 |
| filterable | 是否可搜索 | boolean | — | false |
| allow-create | 是否允许用户创建新条目，需配合 `filterable` 使用 | boolean | — | false |
| filter-method | 自定义搜索方法 | function | — | — |
| remote | 是否为远程搜索 | boolean | — | false |
| remote-method | 远程搜索方法 | function | — | — |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| loading-text | 远程加载时显示的文字 | string | — | 加载中 |
| no-match-text | 搜索条件无匹配时显示的文字，也可以使用`slot="empty"`设置 | string | — | 无匹配数据 |
| no-data-text | 选项为空时显示的文字，也可以使用`slot="empty"`设置 | string | — | 无数据 |
| popper-class | Select 下拉框的类名 | string | — | — |
| reserve-keyword | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词 | boolean | — | false |
| default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用 | boolean | - | false |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false | boolean | - | true |
| automatic-dropdown | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单 | boolean | - | false |

### Select Events

| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 多选模式下移除tag时触发 | 移除的tag值 |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |

### Select Slots

|   name  | 说明     |
|---------|---------|
|    —    | Option 组件列表 |
| prefix  | Select 组件头部内容 |
| empty | 无选项时的列表 |

### Option Group Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 分组的组名 | string | — | — |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | — | false |

### Option Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |

### Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
| blur | 使 input 失去焦点，并隐藏下拉框 | - |