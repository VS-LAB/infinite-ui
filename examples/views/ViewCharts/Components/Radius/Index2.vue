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
      <Radius>
        <Radius1>
          <Radius2 />
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
  }
}
</script>

<style lang='scss' scoped>
@import '../../common.scss';
.radius{
  // margin: 0.3125vw 1.25vw;
  height: 8.4375vw;
  margin: 0 1.25vw;
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
    margin-bottom: 8px;
    dt{
      width: 0.521vw;
      height: 0.521vw;
      border-radius: 3px;
      margin-right: 10px;
    }
    dd{
      flex: 1;
      display: flex;
      flex-direction: column;
      .name{
        font-size: 0.625vw
      }
      .value{
        font-size: 0.7292vw
      }
    };
  };
}
</style>
