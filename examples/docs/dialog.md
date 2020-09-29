
## Dialog

### 基础用法
Dialog 弹出一个对话框，适合需要定制性更大的场景。
:::demo 需要设置visible属性，它接收Boolean，当为true时显示 Dialog。Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。title属性用于定义标题，它是可选的，默认值为空。

```html
    <template>
        <infinite-button type="text" @click="visible = true">点击打开 Dialog</infinite-button>
        <infinite-dialog 
          v-model='visible'
          title="提示"  
          width="30%"
        >
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
