
## Dialog

### 基础用法
Dialog 弹出一个对话框，适合需要定制性更大的场景。
:::demo 需要设置v-model属性，它接收Boolean，当为true时显示 Dialog。Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。title属性用于定义标题，它是可选的，默认值为空。

```html
    <template>
        <infinite-button type="text" @click="visible = true">点击打开 Dialog</infinite-button>
        <infinite-dialog 
          v-model='visible'
          title="提示"  
          width="30%"
        >
        <span>
          这是一段信息
        </span>
        <span slot="footer" class="dialog-footer">
          <infinite-button @click="visible = false">取 消</infinite-button>
          <infinite-button type="primary" @click="visible = false">确 定</infinite-button>
        </span>
        </infinite-dialog>
    </template>
    <script>
        export default {
            data(){
                return {
                    visible:false
                }
            }
        }
    </script>
```
:::


### 嵌套的 Dialog
如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。
:::demo 正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了append-to-body属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。

```html
    <template>
        <infinite-button type="text" @click="visible = true">点击打开外层 Dialog</infinite-button>
        <infinite-dialog 
          v-model='visible'
        >
         <infinite-dialog
          width="30%"
          title="内层 Dialog"
          v-model="innerVisible"
          :append-to-body="true">
        </infinite-dialog>
        <div slot="footer" class="dialog-footer">
          <infinite-button @click="outerVisible = false">取 消</infinite-button>
          <infinite-button type="primary" @click="innerVisible = true">打开内层 Dialog</infinite-button>
        </div>
        </infinite-dialog>
    </template>
    <script>
        export default {
            data(){
                return {
                    visible:false,
                    innerVisible:false
                }
            }
        }
    </script>
```
:::

### 嵌套的表格
Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 infinite Table的样例。
:::demo。


```html
    <template>
        <infinite-button type="text" @click="visible = true">点击打开外层 Dialog</infinite-button>
        <infinite-dialog 
          v-model='visible'
          :needFooter="false"
          width="620px"
          container-height="500"
          title="收货地址"
        >
          <infinite-table
            ref="tableRef"
            :data="tableData"
            :header="tableHeader"
            :needAutoHeight="true"
          >  
          </infinite-table>
        </infinite-dialog>
    </template>
    <script>
        export default {
            data(){
                return {
                    visible:false,
                    tableHeader:[
                    {
                      prop:'date',
                      label:'日期',
                      width:'180'
                    },
                    {
                      prop:'name',
                      label:'姓名',
                      width:'180'
                    },
                    {
                      prop:'address',
                      label:'地址'
                    }
                  ],
                  tableData: [
                      {
                      date: '2016-05-02',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                      date: '2016-05-04',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                      date: '2016-05-01',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                      date: '2016-05-03',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1516 弄'
                    }, {
                      date: '2016-05-06',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1520 弄'
                    }, {
                      date: '2016-05-07',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1514 弄'
                    }
                  ]
                }
            }
        }
    </script>
```
:::
