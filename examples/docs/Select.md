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
      :value="item.value">
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal:'',
        list: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      };
    },
    methods:{
      change(value){
        console.log(value)
      }
    }
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
      :disabled="item.disabled">
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal:'',
        list: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      };
    },
    methods:{
      change(value){
        console.log(value)
      }
    }
  };
</script>
```

:::

### 选项框禁用

:::demo `infinite-select`使用`disabled`

```html
<template>
  <infinite-select disabled v-model="dataVal" :placeholder="'测试提示'" @change="change">
    <infinite-option  
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal:'',
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }]
      };
    },
    methods:{
      change(value){
        console.log(value)
      }
    }
  };
</script>
```

:::

### 基础多选

:::demo `infinite-option`标签内可以使用自定义内容 

```html
<template>
  <infinite-select multiple v-model="dataVal" :placeholder="'测试提示'" @change="change">
    <infinite-option  
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal:'',
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }]
      };
    },
    methods:{
      change(value){
        console.log(value)
      }
    }
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
      :disabled="item.disabled">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal:'',
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }]
      };
    },
    methods:{
      change(value){
        console.log(value)
      }
    }
  };
</script>
```

:::

### 可搜索

:::demo 为`infinite-select`添加`filterable`启用搜索功能

```html
<template>
  <infinite-select filterable v-model="dataVal" :placeholder="'测试提示'" @change="change">
    <infinite-option  
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal:'',
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }]
      };
    },
    methods:{
      change(value){
        console.log(value)
      }
    }
  };
</script>
```

:::

### 远程搜索

:::demo 为了启用远程搜索，需要将`filterable`和`remote`设置为`true`，同时传入一个`remote-method`。`remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果`infinite-option`是通过`v-for`指令渲染出来的，此时需要为`infinite-option`添加`key`属性，且其值需具有唯一性，比如此例中的`item.value`。

```html
<template>
  <infinite-select filterable v-model="dataVal" :placeholder="'测试提示'" @change="change">
    <infinite-option  
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </infinite-option>
  </infinite-select>
</template>

<script>
  export default {
    data() {
      return {
        dataVal:'',
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }]
      };
    },
    methods:{
      change(value){
        console.log(value)
      }
    }
  };
</script>
```

:::
