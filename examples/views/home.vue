<template>
  <div class="explain-container">
    <!--头部模块-->
    <div class="flex explain">
      <div class="flex-1 explain-total">
        <p>Infinite-UI</p>
        <p>桌面端组件库</p>
        <p class="last">
          一套基于 Vue 2.0 ，为平安内部前端开发者提供的<br />桌面端组件库，旨在打造敏捷迭代的开发体验
        </p>
        <infinite-button class="btn"
                         @click="toPath()">立即体验</infinite-button>
      </div>
      <img src="@/assets/img_header.png"
           alt="桌面端组件库"
           class="img-ui" />
    </div>
    <!--内容模块-->
    <section v-for="(item, i) in explainArray"
             :key="i"
             :class="'list' + i"
             class="explain-list">
      <div class="explain"
           :class="{ flex: item.isFlex }">
        <img v-if="item.imgLeft"
             :src="item.imgSrc"
             :alt="item.title"
             :class="'img' + i"
             :style="{ width: item.width }" />
        <div :class="{ 'flex-1': item.isFlex }"
             class="explain-txt">
          <p class="fs-48"
             :class="[
              { black: item.titleCl === 'black' },
              { white: item.titleCl === 'white' },
              { tags: item.isTags },
              { 'mb-32': item.isFlex },
              { 'mb-16': !item.isFlex },
            ]">
            {{ item.title }}
          </p>
          <p class="fs-18"
             :class="[
              { 'word-warp': item.isWarp },
              { gray: item.titleCl === 'black' },
              { white: item.titleCl === 'white' },
            ]">
            {{ item.txt }}
          </p>
          <infinite-button v-if="item.isBtn"
                           class="btn"
                           @click="toPath()">立即体验</infinite-button>
        </div>
        <img v-if="item.imgRight"
             :src="item.imgSrc"
             :alt="item.title"
             :class="'img' + i"
             :style="{ width: item.width }" />
        <!--内容模块第一部分的特殊内容-->
        <div v-if="item.model"
             class="explain-base">
          <div class="explain-base-list"
               v-for="(item, i) in baseList"
               :key="i">
            <img :src="item.imgSrc"
                 :alt="item.title"
                 :style="{ width: item.width }" />
            <p class="base-title">{{ item.title }}</p>
            <p class="base-txt">{{ item.txt }}</p>
            <infinite-button :disabled="!item.toPath"
                             @click="toPath()">{{
              item.tips
            }}</infinite-button>
          </div>
        </div>
      </div>
    </section>
    <!--底部模块-->
    <div class="explain-footer">
      <img src="@/assets/log_footer.png"
           alt="Infinite-ui" />
      <p>Copyright&copy;2021 信贷风险及数据分析数据中台可视化</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      baseList: [
        // 内容模块第一部分的特殊内容数据
        {
          title: '开发指南',
          txt: '参看设计指南，使用组件库,快速完成界面设计',
          tips: '了解更多',
          toPath: true,
          imgSrc: require('@/assets/base1.png')
        },
        {
          title: '组件',
          txt: '了解图标设计规范，轻松搞定各类图标设计',
          tips: '了解更多',
          toPath: true,
          imgSrc: require('@/assets/base2.png')
        },
        {
          title: '资源下载',
          txt: '在线实时编辑，多种主题样式，轻松完成海报设计',
          tips: '暂无开放',
          toPath: false,
          imgSrc: require('@/assets/base3.png')
        },
        {
          title: '可视化图表',
          txt: '大量可视化图表简介，带你认识数据可视化设计要点',
          tips: '暂无开放',
          toPath: false,
          imgSrc: require('@/assets/base4.png')
        }
      ],
      explainArray: [
        // 内容模块数据
        {
          isFlex: false,
          title: '所有基本功能',
          titleCl: 'white',
          txt: '从规范到代码，一套完备的组件库，轻松搞定开发任务',
          model: true
        },
        {
          isFlex: true,
          title: '规范组件',
          titleCl: 'black',
          isTags: true,
          txt:
            '带你了解栅格布局、字体规范、基础控件等设计指南，快速搭建高保真视觉稿，提升产品设计效率。',
          isWarp: true,
          imgRight: true,
          imgSrc: require('@/assets/img1.png'),
          width: '1004px'
        },
        {
          isFlex: true,
          title: '图标库',
          titleCl: 'black',
          isTags: true,
          txt:
            '基于平安项目的矢量图标库。实时预览编辑、一键定制，支持图标源文件下载。',
          isWarp: true,
          imgLeft: true,
          imgSrc: require('@/assets/img2.png'),
          width: '650px'
        },
        {
          isFlex: true,
          title: '可视化图表',
          titleCl: 'white',
          isTags: true,
          txt:
            'Vslab全新数据可视化解决方案，从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
          isWarp: true,
          imgRight: true,
          imgSrc: require('@/assets/img3.png'),
          width: '650px'
        },
        {
          isFlex: false,
          title: '100+ 前端组件',
          titleCl: 'black',
          isTags: false,
          txt: '一套为平安前端开发者提供的桌面端组件，支持编辑和扩展',
          imgRight: true,
          imgSrc: require('@/assets/img4.png'),
          isBtn: true,
          width: '1270px'
        }
      ]
    }
  },
  methods: {
    // 目前已有的跳转，都只能跳到组件文档页面
    toPath () {
      this.$router.push('/guide/installation')
    }
  },
  mounted () {
    document.body.style.overflow = 'auto'
  }
}
</script>
<style lang='scss' scoped>
//****通用定义****//
.flex {
  display: flex;
  align-items: center;
}
.flex-1 {
  flex: 1;
}
.fs-18 {
  font-size: 18px;
}
.fs-48 {
  font-size: 48px;
}
.mb-16 {
  margin-bottom: 16px;
}
.mb-32 {
  margin-bottom: 32px;
}
.black {
  color: #222;
  display: inline-block;
  &.tags::before {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #ff7635;
  }
}
.white {
  color: #fff;
  &.tags::before {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #fff;
  }
}
.gray {
  color: #0f2237;
}

.btn {
  background-image: linear-gradient(90deg, #ff9163 0%, #ff7979 100%);
  border-radius: 36px;
  border: none;
  color: #fff;
  font-size: 20px;
  width: 200px;
  height: 56px;
  &:hover {
    color: #fff;
    &:hover {
      box-shadow: -1px 2px 8px 3px rgba(255, 145, 99, 0.43);
    }
  }
}
.word-warp {
  width: 323px;
  word-wrap: break-word;
}
.explain-list {
  padding: 20px 0 240px 0;
}

.explain {
  max-width: 1200px;
  margin: 0 auto;
  .img-ui {
    width: 78%;
    margin: 0 -240px 200px 0;
  }
  img:hover {
    animation: scaleDraw 5s ease-in-out infinite;
  }
}

//****非通用定义****//

// 头部模块
.explain-total {
  padding: 140px 0 510px 0;
  position: relative;
  animation: lightSpeedIn 1.5s ease-in-out infinite;
  animation-iteration-count: 1;
  p {
    font-size: 40px;
    font-weight: 600;
    color: #000d2b;
    letter-spacing: 6px;

    &.last {
      font-size: 20px;
      font-weight: normal;
      color: rgba(0, 15, 47, 0.8);
      letter-spacing: 0;
      margin: 20px 0 40px 0;
    }
  }
}

// 内容模块
.explain-container {
  padding-top: 80px;
  // 说明内容list
  .list0 {
    text-align: center;
    &.explain-list {
      padding-bottom: 60px;
    }
  }
  .list2 {
    .explain-txt {
      margin-left: 100px;
    }
  }
  .list3 {
    background: url("~@/assets/bg_center.png") no-repeat top;
    background-size: cover;
    .img3 {
      padding-top: 200px;
    }
  }
  .list4 {
    &.explain-list {
      padding-bottom: 0;
    }
    .explain-txt {
      width: 600px;
      margin: 0 auto;
      text-align: center;
    }
    .btn {
      margin: 50px 0 80px 0;
    }
  }
}

// 内容模块第一部分的特殊内容
.explain-base {
  display: flex;
  background-color: #fff;
  box-shadow: 0 2px 50px 0 rgba(239, 120, 86, 0.2);
  border-radius: 8px;
  margin-top: 80px;
  &-list {
    flex: 1;
    padding: 94px 0 110px 0;
    img {
      width: 180px;
    }
    .base-title {
      font-size: 24px;
      font-weight: 600;
      color: #0f2237;
    }
    .base-txt {
      font-size: 14px;
      color: rgba(15, 34, 55, 0.5);
      width: 180px;
      margin: 20px auto;
    }
  }
}

// 底部模块
.explain-footer {
  background: url("~@/assets/bg_footer.png") no-repeat top;
  background-size: 2556px;
  height: 498px;
  text-align: center;
  img {
    width: 184px;
    margin-top: 320px;
  }
  p {
    font-size: 14px;
    color: #fff;
    margin-top: 20px;
  }
}

@keyframes scaleDraw {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.2);
  }
}

@keyframes lightSpeedIn {
  0% {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
</style>
