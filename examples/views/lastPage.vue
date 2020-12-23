<template>
  <div class="explain-container">
    <!--内容模块-->
    <section class="explain-list slide-up-animate">
      <div class="explain">
        <!-- 组件标题 -->
        <div class="explain-txt">
          <p class="title fs-48">Infinite 开箱即用的前端组件库</p>
          <p class="subTitle fs-18">从设计到开发，一站式服务，仅需几行代码轻松搞定前端界面开发</p>
        </div>
        <!--组件功能介绍-->
        <div class="explain-base">
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
      <p>Copyright&copy;2020 信贷风险及数据分析数据中台可视化</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      animesFun: [this.page5_animeStep1],
      baseList: [
        // 内容模块第一部分的特殊内容数据
        {
          title: '开发指南',
          txt: '参看开发指南，一键调用前端组件库,快速完成界面设计',
          tips: '了解详情',
          toPath: true,
          imgSrc: require('@/assets/base1.png')
        },
        {
          title: '规范组件',
          txt: '详细的组件规范，使用封装的前端代码快速完成界面开发',
          tips: '了解详情',
          toPath: true,
          imgSrc: require('@/assets/base2.png')
        },
        {
          title: '图标库',
          txt: '在线实时预览，可视化定制和管理图标样式，轻松搞定图标设计',
          tips: '了解详情',
          toPath: true,
          imgSrc: require('@/assets/base3.png')
        },
        {
          title: '可视化图表',
          txt: '从数据出发，轻松构建各类图表，让数据栩栩如生',
          tips: '了解详情',
          toPath: true,
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
    },
    page5_animeStep1 () {
      console.log('page5_animeStep1');
      return new Promise((resolve, reject) => {
        resolve(true)
      })
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
  opacity: 0;
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

// 内容模块
.explain-container {
  background: #F3F7FE;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .explain-txt {
    text-align: center;
    margin-top: 60px;
    .title {
      font-family: PingFangSC-Semibold;
      font-size: 56px;
      color: #222222;
    }
    .subTitle {
      margin-top: 28px;
      opacity: 0.6;
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: #222222;
    }
  }
  .btn {
    margin: 50px 0 80px 0;
  }
}

// 内容模块第一部分的特殊内容
.explain-base {
  display: flex;
  background-color: #fff;
  box-shadow: 0 2px 50px 0 #eaf1fc;
  border-radius: 8px;
  margin-top: 80px;
  &-list {
    flex: 1;
    padding: 94px 0 110px 0;
    text-align: center;
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
      width: 200px;
      margin: 20px auto;
    }
  }
}

// 底部模块
.explain-footer {
  margin-top: 126px;
  background: #d8d8d800;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 10px;
  img {
    width: 172px;
  }
  p {
    margin-top: 20px;
    opacity: 0.65;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #222;
  }
}

.slide-up-animate {
  animation: slideUp 0.5s ease-out;
  animation-fill-mode:forwards;
  animation-delay: 0.7s;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    position: relative;
    top: 20vh;
  }
  100% {
    position: relative;
    opacity: 1;
    top: 7vh;
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
