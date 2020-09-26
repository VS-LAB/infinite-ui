
## Form

### 基础用法
基础的按钮用法。
:::demo 

```html
    <template>
        <infinite-form :formData='formData'>Form</infinite-form>
    </template>
    <script>
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else {
          callback('密码不能为空');
        }
      };
        export default {
            data(){
                return {
                    formData: [
                        {
                            label: '姓名',
                            type: 'input',
                            key: 'name',
                        },
                        {
                            label: '喜好',
                            type: 'select',
                            key: 'likes',
                        },
                         {
                            label: '密码',
                            type: 'input',
                            key: 'password',
                            rules: [
                                { validator: validatePass, trigger: 'blur' },
                                { required: true, trigger: 'blur' }

                            ]
                        }
                    ]
                }
            }
        }
    </script>
```

