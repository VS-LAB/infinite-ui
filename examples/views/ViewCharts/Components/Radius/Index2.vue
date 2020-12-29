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
@import '../../common.scss';
.radius{
  height: 162 * 2px;
  margin: 0 48px;
  .radius-content{
    align-items: center;
    justify-content: center;
    transform: translate(20px, -10px);
  }
}

.legend{
  display: flex;
  flex-direction: column;
  dl{
    display: flex;
    align-items: baseline;
    margin-bottom: 32px;
    dt{
      width: 20px;
      height: 20px;
      border-radius: 6px;
      margin-right: 20px;
    }
    dd{
      flex: 1;
      display: flex;
      flex-direction: column;
      .name{
        font-size: 24px
      }
      .value{
        font-size: 28px
      }
    };
  };
}
</style>
