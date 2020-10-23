
## Form

### 基础用法
表单用法。
:::demo 

```html 
    <template>
        <infinite-form 
            :formData='formData'
            :formBtns="formBtns"
        >
        </infinite-form>
    </template>
    <script>
        const ElInput =  require('element-ui/lib/input')
        const validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else {
            callback('密码不能为空');
            }
        };

        export default {
            data(){
                return {
                    inline: true,
                    formData: [
                         {
                            label: '自定义表单组件',
                            type: 'component',
                            key: 'component',
                            component: {
                                render (h) {
                                    return h('div', [
                                        h('span', 'Hello world')
                                    ])
                                }
                            }
                            },
                            {
                                label: '姓名',
                                type: 'input',
                                key: 'name',
                            },
                            {
                                label: '喜好',
                                type: 'select',
                                key: 'likes',
                                clearable: true,
                                options: [
                                    {
                                        id: '1',
                                        label: '篮球'
                                    },
                                    {
                                        id: '2',
                                        label: '兵乓球'
                                    }
                                ]
                            },
                            {
                                label: '今日开心',
                                type: 'switch',
                                key: 'happy',
                            },
                            {
                                label: '出生日期',
                                type: 'date',
                                key: 'birthday',
                            },
                            {
                                label: '自我介绍',
                                type: 'textarea',
                                key: 'introduction',
                            },
                            {
                                label: '我有我独特',
                                type: 'own',
                                key: 'special',
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
                    ],
                    formBtns: [
                        {
                            name: '保存',
                            type: 'primary'
                        },
                        {
                            name:'取消'
                        }
                    ]
                }
            }
        }
    </script>
```

