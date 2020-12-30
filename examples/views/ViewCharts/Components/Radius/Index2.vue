<template>
  <div class="flex radius">
    <div class="legend">
      <dl v-for="item in legend" :key="item.id">
        <dt :style="{background:item.color}"></dt>
        <dd class="font-color-dark">
          <div class="font-color-light name">{{item.name}}</div>
          <div class="value">{{item.value}}</div>
        </dd>
      </dl>
    </div>
    <div class="radius-content flex flex-1">
      <Radius :renderAni="renderClass" :class="{
        'render': renderClass
      }">
        <Radius1 :renderAni="renderClass" :class="{
          'render': renderClass
        }">
          <Radius2 :renderAni="renderClass" :class="{
            'render': renderClass
          }" />
        </Radius1>
      </Radius>
    </div>
  </div>
</template>

<script>
import Radius from './Radius'
import Radius1 from './Radius1'
import Radius2 from './Radius2'
export default {
  components: {
    Radius,
    Radius1,
    Radius2
  },
  data () {
    return {
      renderClass: false,
      legend: [{
        id: 1,
        color: '#FF8678',
        name: '全貌',
        value: '66.6%'
      }, {
        id: 2,
        color: '#AC7AFF',
        name: '服务',
        value: '59.6%'
      }, {
        id: 3,
        color: '#4CA9FF',
        name: '增量',
        value: '33.6%'
      }]
    }
  },
  methods: {
    render () {
      this.renderClass = true
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./Index2.scss";

@media screen and (min-width: 1440px) {
  @import "./Index2.scss";
}
</style>
