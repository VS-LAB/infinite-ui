<template>
  <div class="explain-container">
    <!--内容模块-->
    <section class="explain-list">
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
            <span class="text-button" :class="item.toPath ? 'text-button-path-active' : ''" :disabled="!item.toPath"
                             @click="toPath(item.toPath)">{{
              item.tips
            }}</span>
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
      animesFun: [this.page5_animeStep1],
      stepFun: [this.page5_animeStep1],
      baseList: [
        // 内容模块第一部分的特殊内容数据
        {
          title: '开发指南',
          txt: '参看开发指南，一键调用前端组件库，快速完成界面设计',
          tips: '了解详情',
          toPath: true,
          imgSrc: require('@/assets/base3.png')
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
          tips: '敬请期待',
          toPath: false,
          imgSrc: require('@/assets/base1.png')
        },
        {
          title: '可视化图表',
          txt: '从数据出发，轻松构建各类图表，让数据栩栩如生',
          tips: '敬请期待',
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
    /**
     *
     */
    setAutoFill () {
      const { clientHeight } = document.documentElement
      const element = document.querySelector('.explain-list')
      const explainFooter = document.querySelector('.explain-footer')
      const elementTransform = element.style.transform
      const { height } = element.getBoundingClientRect()
      const { height: explainFooterHeight, bottom } = explainFooter.getBoundingClientRect()
      const explainFooterBottom = clientHeight - bottom
      const thresholdValue = 0.1 // 防止不够，多缩小一点
      console.log('(clientHeight - height - explainFooterHeight)', (clientHeight - height - explainFooterHeight), (clientHeight - height - explainFooterHeight) < 100)
      // debugger
      if ((clientHeight - height - explainFooterHeight) < 100) {
        // const scale = 1 - Math.abs(clientHeight - height - explainFooterHeight) / height - thresholdValue
        // //  如果此时任然不够
        // // 主要内容区，底部实际高度
        // const RealHeight = (clientHeight - scale * height) / 2 - 10
        // if ((explainFooterHeight + explainFooterBottom) * scale > RealHeight) {
        //   return
        // }
        const scale = getScale(thresholdValue)
        this.scale = scale
        element.style.transform = elementTransform + `scale(${scale}) translate(-50%,-50%)`
        element.style.transformOrigin = 'left top'

        explainFooter.style.transform = elementTransform + `scale(${scale})`
        explainFooter.style.transformOrigin = 'center bottom'
        if (explainFooterBottom) {
          const RealHeight = ((clientHeight - scale * height) / 2 - explainFooterHeight * scale) / 2
          if (RealHeight < explainFooterBottom) {
            explainFooter.style.bottom = `${RealHeight}px`
          }
        }
      }
      // 布局不合理导致的位置遮挡问题
      else if (element.getBoundingClientRect().bottom > explainFooter.getBoundingClientRect().top) {
        const newBottom = clientHeight - element.getBoundingClientRect().bottom - explainFooterHeight
        explainFooter.style.bottom = `${newBottom / 2}px`
      }

      function getScale (thresholdValue = 0.1) {
        var scale = 1 - Math.abs(clientHeight - height - explainFooterHeight) / height - thresholdValue
        const RealHeight = (clientHeight - scale * height) / 2 - 10
        //  如果此时任然不够
        // 主要内容区，底部实际高度
        if ((explainFooterHeight + explainFooterBottom) * scale < RealHeight) {
          return scale
        }
        var newthresholdValue = thresholdValue + 0.05
        return getScale(newthresholdValue)
      }
    },
    // 目前已有的跳转，都只能跳到组件文档页面
    toPath (is) {
      if (is) {
        this.$router.push('/guide/installation')
      }
    },
    page5_animeStep1 () {
      console.log('page5_animeStep1')
      return new Promise((resolve, reject) => {
        resolve(true)
      })
    }
  },
  mounted () {
    document.body.style.overflow = 'auto'
    setTimeout(() => {
      this.setAutoFill()
    }, 100)
  }
}
</script>
<style lang='scss' scoped>
@import "./index.scss";
@media screen and (min-width: 1360px) {
  @import "./index.scss";
}
</style>
