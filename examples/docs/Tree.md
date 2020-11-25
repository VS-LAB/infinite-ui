## Tree

### 基础用法

Tree 用法。
:::demo

```html
<template>
  <infinite-tree
    :tree-data="treeData"
    :default-props="defaultProps"
    :show-checkbox="showCheckbox"
    :default-expand-all="defaultExpandAll"
    :default-expanded-keys="defaultExpandedKeys"
    :is-edit-node="isEditNode"
    :is-draggable="isDraggable"
    @handlerAdd="handlerAdd"
    @handlerDelete="handlerDelete"
  >
  </infinite-tree>
</template>
<script>
  export default {
    data() {
      return {
        options: ['可勾选', '可编辑', '显示连接线', '可拖拽'],
        treeData: [
          {
            id: 10,
            label: '一级 1',
            type: 'text',
            children: [
              {
                id: 11,
                label: '二级 1-1',
                type: 'text',
                children: [
                  {
                    id: 111,
                    label: '三级 1-1-1',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            id: 20,
            label: '一级 2',
            type: 'text',
            children: [
              {
                id: 21,
                label: '二级 2-1',
                type: 'text',
                children: [
                  {
                    id: 211,
                    label: '三级 2-1-1',
                    type: 'text',
                  },
                ],
              },
              {
                id: 22,
                label: '二级 2-2',
                type: 'text',
                children: [
                  {
                    id: 212,
                    label: '三级 2-2-1',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            id: 30,
            label: '一级 3',
            type: 'text',
            children: [
              {
                id: 31,
                label: '二级 3-1',
                type: 'text',
                children: [
                  {
                    id: 311,
                    label: '三级 3-1-1',
                    type: 'text',
                  },
                ],
              },
              {
                id: 32,
                label: '二级 3-2',
                type: 'text',
                children: [
                  {
                    id: 312,
                    label: '三级 3-2-1',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            id: 40,
            label: '一级 4',
            type: 'text',
            children: [
              {
                id: 41,
                label: '二级 4-1',
                type: 'text',
                children: [
                  {
                    id: 411,
                    label: '三级 4-1-1',
                    type: 'text',
                  },
                ],
              },
              {
                id: 42,
                label: '二级 4-2',
                type: 'text',
                children: [
                  {
                    id: 412,
                    label: '三级 4-2-1',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            id: 50,
            label: '一级 5',
            type: 'text',
            children: [
              {
                id: 51,
                label: '二级 5-1',
                type: 'text',
                children: [
                  {
                    id: 511,
                    label: '三级 5-1-1',
                    type: 'text',
                  },
                ],
              },
              {
                id: 52,
                label: '二级 5-2',
                type: 'text',
                children: [
                  {
                    id: 512,
                    label: '三级 5-2-1',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        ],
        defaultProps: {
          children: 'children',
          label: 'label',
        },
        showCheckbox: true,
        checkList: [],
        defaultExpandAll: true,
        defaultExpandedKeys: [20, 21],
        isEditNode: true,
        isDraggable: false,
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      setOptions(value) {
        this.showCheckbox = value.includes('可勾选');
        this.isEditNode = value.includes('可编辑');
        this.isDraggable = value.includes('可拖拽');
      },
      handlerAdd(data, node) {
        console.log(data);
        console.log(node);
      },
      handlerDelete(node) {
        console.log(node);
      },
    },
  };
</script>
```

:::

### 基础用法-2

Tree 用法。
:::demo

```html
<template>
  <infinite-tree
    :tree-data="treeData"
    :default-props="defaultProps"
    :is-edit-node="isEditNode"
  >
  </infinite-tree>
</template>
<script>
  export default {
    data() {
      return {
        treeData: [
          {
            id: 10,
            label: '一级 1',
            type: 'text',
            children: [
              {
                id: 11,
                label: '二级 1-1',
                type: 'text',
                children: [
                  {
                    id: 111,
                    label: '三级 1-1-1',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            id: 20,
            label: '一级 2',
            type: 'text',
            children: [
              {
                id: 21,
                label: '二级 2-1',
                type: 'text',
                children: [
                  {
                    id: 211,
                    label: '三级 2-1-1',
                    type: 'text',
                  },
                ],
              },
              {
                id: 22,
                label: '二级 2-2',
                type: 'text',
                children: [
                  {
                    id: 212,
                    label: '三级 2-2-1',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            id: 30,
            label: '一级 3',
            type: 'text',
            children: [
              {
                id: 31,
                label: '二级 3-1',
                type: 'text',
                children: [
                  {
                    id: 311,
                    label: '三级 3-1-1',
                    type: 'text',
                  },
                ],
              },
              {
                id: 32,
                label: '二级 3-2',
                type: 'text',
                children: [
                  {
                    id: 312,
                    label: '三级 3-2-1',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            id: 40,
            label: '一级 4',
            type: 'text',
            children: [
              {
                id: 41,
                label: '二级 4-1',
                type: 'text',
                children: [
                  {
                    id: 411,
                    label: '三级 4-1-1',
                    type: 'text',
                  },
                ],
              },
              {
                id: 42,
                label: '二级 4-2',
                type: 'text',
                children: [
                  {
                    id: 412,
                    label: '三级 4-2-1',
                    type: 'text',
                  },
                ],
              },
            ],
          },
          {
            id: 50,
            label: '一级 5',
            type: 'text',
            children: [
              {
                id: 51,
                label: '二级 5-1',
                type: 'text',
                children: [
                  {
                    id: 511,
                    label: '三级 5-1-1',
                    type: 'text',
                  },
                ],
              },
              {
                id: 52,
                label: '二级 5-2',
                type: 'text',
                children: [
                  {
                    id: 512,
                    label: '三级 5-2-1',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        ],
        defaultProps: {
          children: 'children',
          label: 'label',
        },
        isEditNode: true,
      };
    },
  };
</script>
```

:::

### Attributes

| 参数     | 说明                 | 类型   | 可选值 | 默认值 |
| -------- | -------------------- | ------ | ------ | ------ |
| treeData | 展示数据             | Array  | —      | —      |
| props    | 配置选项，具体看下表 | object | —      | —      |

### Props Attributes

| 参数                | 说明             | 类型    | 可选值 | 默认值 |
| ------------------- | ---------------- | ------- | ------ | ------ |
| showCheckbox        | 是否现实复选框   | Boolean | —      | false  |
| defaultExpandAll    | 是否展开全部     | Boolean | —      | true   |
| defaultExpandedKeys | 展开的节点       | Array   | —      | —      |
| isEditNode          | 是否可编辑子节点 | Boolean | —      | false  |
| isDraggable         | 是否可拖拽       | Boolean | -      | false  |

### Options Attributes

| 参数     | 说明      | 类型   | 可选值     | 默认值 |
| -------- | --------- | ------ | ---------- | ------ |
| id       | 选项的 id | String | —          | —      |
| label    | 选项标签  | String | —          | —      |
| children | 子选项    | String | —          | —      |
| type     | 组件属性  | String | text/input | —      |

### Events

| 参数 | 说明 | 回调参数 |
| ---- | ---- | -------- |

