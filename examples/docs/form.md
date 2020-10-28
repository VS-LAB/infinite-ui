## Form

### 基础用法

表单用法。
:::demo

```html
<template>
  <infinite-form :formData="formData" :formBtns="formBtns"> </infinite-form>
</template>
<script>
  const ElInput = require('element-ui/lib/input');
  const cascaders = require('../../packages/infinite-cascaders');
  const validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请再次输入密码'));
    } else {
      callback('密码不能为空');
    }
  };
  const opts = [
    {
      value: 'inputs',
      label: '输入框',
      children: [
        {
          value: 'input-1',
          label: '数字输入框',
          component: 'input',
          type: 'number',
        },
        {
          value: 'input-2',
          label: '文本输入框',
          component: 'input',
          type: 'text',
        },
      ],
    },
    {
      value: 'button',
      label: '按钮',
      children: [
        {
          value: 'button-1',
          label: '主要按钮',
          name: '主要按钮',
          component: 'button',
          type: 'primary',
        },
        {
          value: 'button-2',
          label: '成功按钮',
          name: '成功按钮',
          component: 'button',
          type: 'success',
        },
        {
          value: 'button-3',
          label: '警告按钮',
          name: '警告按钮',
          component: 'button',
          type: 'warning',
        },
        {
          value: 'button-4',
          label: '危险按钮',
          name: '危险按钮',
          component: 'button',
          type: 'danger',
        },
      ],
    },
    {
      value: 'date-picker',
      label: '日期选择器',
      children: [
        {
          value: 'date-picker-1',
          label: '日选择器',
          component: 'date-picker',
          type: 'date',
        },
      ],
    },
  ];
  export default {
    methods: {
      componentClick(val) {
        console.log('====event-click===', val);
      },
      componentEvent(val) {
        console.log('event-input=', val);
      },
    },
    data() {
      return {
        inline: true,
        formData: [
          {
            label: '自定义表单组件',
            type: 'component',
            key: 'cascaders',
            isShow: true,
            component: (h) => {
              return h(cascaders.default, {
                props: {
                  options: opts,
                },
                nativeOn: {
                  click: (val) => {
                    this.componentClick(val);
                  },
                },
                on: {
                  componentEvent: (val) => {
                    this.componentEvent(val);
                  },
                },
              });
            },
          },
          {
            label: '姓名',
            type: 'input',
            key: 'name',
            isShow: false,
          },
          {
            label: '喜好',
            type: 'select',
            key: 'likes',
            clearable: true,
            isShow: true,
            options: [
              {
                id: '1',
                label: '篮球',
              },
              {
                id: '2',
                label: '兵乓球',
              },
            ],
          },
          {
            label: '今日开心',
            type: 'switch',
            key: 'happy',
            isShow: true,
          },
          {
            label: '出生日期',
            type: 'date',
            key: 'birthday',
            isShow: true,
          },
          {
            label: '自我介绍',
            type: 'textarea',
            key: 'introduction',
            isShow: true,
          },
          {
            label: '密码',
            type: 'input',
            key: 'password',
            isShow: true,
            rules: [
              { validator: validatePass, trigger: 'blur' },
              { required: true, trigger: 'blur' },
            ],
          },
        ],
        formBtns: [
          {
            name: '保存',
            type: 'primary',
            click: (val) => {
              console.log(val);
            },
          },
          {
            name: '取消',
          },
        ],
      };
    },
  };
</script>
```
