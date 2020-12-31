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
        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 63 (92445) - https://sketch.com -->
            <title>Shape</title>
            <desc>Created with Sketch.</desc>
            <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="1.0-首页" transform="translate(-739.000000, -5812.000000)" fill="#909399">
                    <g id="丰富的可视化图表" transform="translate(0.000000, 5400.000000)">
                        <g id="图表1" transform="translate(454.000000, 382.000000)">
                            <path d="M293,44.875 C293.928125,44.875 294.828125,44.69375 295.675,44.3359375 C296.49375,43.9890625 297.228125,43.49375 297.860937,42.8625 C298.492188,42.23125 298.989062,41.4953125 299.334375,40.6765625 C299.69375,39.828125 299.875,38.928125 299.875,38 C299.875,37.071875 299.69375,36.171875 299.335938,35.325 C298.989062,34.50625 298.49375,33.771875 297.8625,33.1390625 C297.23125,32.5078125 296.495313,32.0109375 295.676562,31.665625 C294.828125,31.30625 293.928125,31.125 293,31.125 C292.071875,31.125 291.171875,31.30625 290.325,31.6640625 C289.50625,32.0109375 288.771875,32.50625 288.139063,33.1375 C287.507812,33.76875 287.010938,34.5046875 286.665625,35.3234375 C286.30625,36.171875 286.125,37.071875 286.125,38 C286.125,38.928125 286.30625,39.828125 286.664062,40.675 C287.010938,41.49375 287.50625,42.228125 288.1375,42.8609375 C288.76875,43.4921875 289.504687,43.9890625 290.323438,44.334375 C291.171875,44.69375 292.071875,44.875 293,44.875 L293,44.875 Z M293,46 C288.58125,46 285,42.41875 285,38 C285,33.58125 288.58125,30 293,30 C297.41875,30 301,33.58125 301,38 C301,42.41875 297.41875,46 293,46 L293,46 L293,46 Z M293,36 C292.654688,36 292.375,36.2796875 292.375,36.625 L292.375,42.390625 C292.375,42.7359375 292.654688,43.015625 293,43.015625 C293.345312,43.015625 293.625,42.7359375 293.625,42.390625 L293.625,36.625 C293.625,36.2796875 293.345312,36 293,36 L293,36 Z M292.296875,34.296875 C292.296875,34.6852002 292.611675,35 293,35 C293.388325,35 293.703125,34.6852002 293.703125,34.296875 C293.703125,33.9085498 293.388325,33.59375 293,33.59375 C292.611675,33.59375 292.296875,33.9085498 292.296875,34.296875 L292.296875,34.296875 Z" id="Shape"></path>
                        </g>
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
import { WIDTH } from './CONFIG'
import LineChart from './Charts/LineChart'
import BarChart from './Charts/BarChart'
import Radius from './Radius/Index2'
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
        return 58 * (WIDTH / 1920) * width
      }
      return 12.08 * 2 * (WIDTH / 1920) * width
    },
    width () {
      const { clientWidth } = document.documentElement
      if (clientWidth > WIDTH) {
        return WIDTH / 100
      } else {
        return document.documentElement.clientWidth / 100
      };
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./SlideItem.scss";

@media screen and (min-width: 1360px) {
  @import "./SlideItem.scss";
}
</style>
