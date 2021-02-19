## Download 下载

用于数据流的下载方法

### 基础用法

当`$infiniteDownload`已经挂在到 Vue 上后，我们就可以这样去使用了
:::demo `mode` 默认 `stream`

```html
<el-row>
  <infinite-button type="primary" @click="download">默认下载</infinite-button>
</el-row>
<script>
  export default {
    data() {
      return {
        resouce: new Blob(['Hello Infinite!']),
      };
    },
    methods: {
      download() {
        this.$infiniteDownload({
          resouce: this.resouce,
          name: 'infinite.txt',
        });
      },
    },
  };
</script>
```

:::

### 使用下载方式下载

还可以直接根据 `mode` 属性来调用下载 `infiniteDownload`
:::demo 第一个参数接受一个 Blob（数据流）,第二个参数接受一个文件名称

```html
<el-row>
  <infinite-button type="primary" @click="download"
    >直接使用stream下载</infinite-button
  >
</el-row>
<script>
  export default {
    data() {
      return {
        resouce: new Blob(['Hello Infinite!']),
      };
    },
    methods: {
      download() {
        this.$infiniteDownload.stream(this.resouce, 'infinite.txt');
      },
    },
  };
</script>
```

:::

### 使用请求方式进行下载

调整 `mode` 属性为'url'来调用下载
:::demo 只接受一个参数`resouce`，这里的`resouce`是一个 get 请求的地址

```html
<el-row>
  <infinite-button type="primary" @click="download">链接下载</infinite-button>
</el-row>
<script>
  export default {
    methods: {
      download() {
        const resouce =
          'https://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fimage.tuandai.com%252Fnewfile%252Fimage%252F2016%252F20161219%252F20161219152616_1253.jpg%26refer%3Dhttp%253A%252F%252Fimage.tuandai.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1616319851%26t%3De6307f62b3f6aa8ea6a1ffc82681bd8b&thumburl=https%3A%2F%2Fss1.bdstatic.com%2F70cFuXSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D2687833140%2C4265281269%26fm%3D26%26gp%3D0.jpg';
        this.$infiniteDownload({
          resouce,
          mode: 'url',
        });
      },
    },
  };
</script>
```

:::

### Attributes

| 参数    | 说明     | 类型   | 可选值       | 默认值 |
| ------- | -------- | ------ | ------------ | ------ |
| mode    | 模式     | String | stream / url | stream |
| resouce | 下载资源 | -      | -            | -      |
| name    | 资源名称 | String | -            | -      |
