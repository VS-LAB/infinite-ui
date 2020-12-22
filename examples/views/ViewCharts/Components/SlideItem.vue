<template>
  <div class="slider-container" :class="{
      'small-item': showType === 'small',
      'large-item': showType === 'large',
    }">
    <div class="slider-title flex flex-align flex-content-space">
      <slot name='header'>
        <div class="flex-1 font font-color-light ">{{title}}</div>
      </slot>
      <div class="icon" v-if="showIcon">
        <!-- <embed src="~@/assets/info.svg" type="image/svg+xml" /> -->
        <svg width="58px" height="58px" viewBox="0 0 58 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="编组-37备份-4">
                  <g id="act">
                      <rect id="矩形" x="0" y="0" width="58" height="58"></rect>
                  </g>
                  <g id="Group-129" transform="translate(13.920000, 13.083333)" fill="#909399">
                      <path d="M15.1,28.7906247 C16.8402344,28.7906247 18.5277344,28.4507809 20.115625,27.7798825 C21.6507813,27.1294919 23.0277344,26.2007809 24.2142578,25.0171872 C25.3978516,23.8335934 26.3294922,22.4537106 26.9769531,20.9185544 C27.6507813,19.327734 27.990625,17.640234 27.990625,15.8999997 C27.990625,14.1597653 27.6507813,12.4722653 26.9798828,10.8843747 C26.3294922,9.34921842 25.4007813,7.97226529 24.2171875,6.78574185 C23.0335938,5.6021481 21.6537109,4.67050748 20.1185547,4.02304654 C18.5277344,3.34921842 16.8402344,3.00937467 15.1,3.00937467 C13.3597656,3.00937467 11.6722656,3.34921842 10.084375,4.02011685 C8.54921875,4.67050748 7.17226563,5.59921842 5.98574219,6.78281217 C4.80214844,7.96640592 3.87050781,9.34628873 3.22304688,10.881445 C2.54921875,12.4722653 2.209375,14.1597653 2.209375,15.8999997 C2.209375,17.640234 2.54921875,19.327734 3.22011719,20.9156247 C3.87050781,22.4507809 4.79921875,23.827734 5.9828125,25.0142575 C7.16640625,26.1978512 8.54628906,27.1294919 10.0814453,27.7769528 C11.6722656,28.4507809 13.3597656,28.7906247 15.1,28.7906247 L15.1,28.7906247 Z M15.1,30.8999997 C6.81484375,30.8999997 0.1,24.1851559 0.1,15.8999997 C0.1,7.61484342 6.81484375,0.899999667 15.1,0.899999667 C23.3851563,0.899999667 30.1,7.61484342 30.1,15.8999997 C30.1,24.1851559 23.3851563,30.8999997 15.1,30.8999997 L15.1,30.8999997 L15.1,30.8999997 Z M15.1,12.1499997 C14.4525391,12.1499997 13.928125,12.6744137 13.928125,13.3218747 L13.928125,24.1324215 C13.928125,24.7798825 14.4525391,25.3042965 15.1,25.3042965 C15.7474609,25.3042965 16.271875,24.7798825 16.271875,24.1324215 L16.271875,13.3218747 C16.271875,12.6744137 15.7474609,12.1499997 15.1,12.1499997 L15.1,12.1499997 Z M13.7816406,8.95664029 C13.7816406,9.68475007 14.3718902,10.2749997 15.1,10.2749997 C15.8281098,10.2749997 16.4183594,9.68475007 16.4183594,8.95664029 C16.4183594,8.22853051 15.8281098,7.63828092 15.1,7.63828092 C14.3718902,7.63828092 13.7816406,8.22853051 13.7816406,8.95664029 L13.7816406,8.95664029 Z" id="Shape"></path>
                  </g>
              </g>
          </g>
        </svg>
      </div>
    </div>
    <div class="desc-container" v-if="desc.length">
      <div class="bg-white desc flex flex-align flex-content-space"  v-for="item in desc" :key="item.title">
        <div class="desc-title font-color-dark">
          {{item.title}}
        </div>
        <div class="flex">
          <div class="sub-title font-color-light">{{item.sub_title}}</div>
          <div class="sub-value font-color-dark">{{item.sub_value}}</div>
        </div>
      </div>
    </div>
    <div class="chart-containr">
      <component :ref="this.cardType" :is="showCard" :id="id" :height='height' :showType='showType'></component>
    </div>
  </div>
</template>

<script>
import LineChart from './Charts/LineChart'
import BarChart from './Charts/BarChart'
import RadialBar from './Charts/RadialBar'
import Radius from './Radius/Index'
export default {
  name: 'SliderItem',
  components: { LineChart, BarChart, Radius },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    desc: {
      type: Array,
      default: () => {
        return []
      }
    },
    cardType: {
      type: String,
      default: ''
    },
    showType: {
      type: String,
      default: 'small'
    },
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    showCard () {
      const { cardType } = this
      if (cardType === 'line') {
        return LineChart
      }
      if (cardType === 'bar') {
        return BarChart
      }
      if (cardType === 'RadialBar') {
        return Radius
      }
      return ''
    },
    id () {
      return 'kkk' + Math.round(Math.random() * 100000000)
    },
    height () {
      const { showType, width } = this
      if (showType === 'large') {
        return 15.625 * width
      }
      return 6.042 * width
    },
    width () {
      return document.documentElement.clientWidth / 100
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../common.scss';

$default-padding: 1.25vw;

.slider-container{
  background: #FFFFFF;
  box-shadow: 0 0 5px 0 rgba(137,137,152,0.10);
  border-radius: 10px;
  overflow: hidden;
  .slider-title{
    height: 1.41vw;
    margin: $default-padding $default-padding 11px $default-padding;
    .font{
      font-size: 0.834vw;
    }
  }
  .desc-container {
    margin: 0 $default-padding;
    .desc-title{
      font-size: 1.875vw;
    }
  }
  .desc {
    height: 2.396vw;
    .sub-title{
      margin-right: 0.52vw
    }
    .sub-title, .sub-value{
      font-size: 0.834vw;
    }

  };
}
.small-item{
  // width: 325px;
  // height: 224px;
}
.large-item {
  width: 100%;
  height: 100%;
}
.icon {
  width: 1.2542vw;
  height: 1.2542vw;
  cursor: pointer;
  margin-right: -0.42vw;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
