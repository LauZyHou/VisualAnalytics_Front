<template>
    <div id="ZoneDirector" class="childpan" :style="{width: '900px', height: '400px'}"></div>
</template>

<script>
import { retrieveZoneDirector } from '../../api/api'

export default {
  name: 'ZoneDirector',
  props: ['zone_name'],
  watch: {
    zone_name (v) {
      this.refreshData(v)
    }
  },
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.refreshData()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('ZoneDirector'))
      // 绘制图表
      let option = {
        title: {
          text: '常见导演·' + this.zone_name,
          x: 'center'
        },
        legend: {
          x: 'center',
          y: 'bottom'
        },
        tooltip: {},
        dataset: {
          source: [
            ['作品得分', '小于7分作品', '7-8分作品', '大于8分作品'],
            this.data[0],
            this.data[1],
            this.data[2],
            this.data[3]
          ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ]
      }
      // 为echarts对象加载数据
      myChart.setOption(option)
    },
    refreshData (v = undefined) {
      let r = v === undefined ? this.zone_name : v
      if (r === undefined) { return }
      retrieveZoneDirector(r).then(res => {
        this.data = res.data
      }).then(() => {
        this.drawLine()
      })
    }
  }
}
</script>

<style scoped>

</style>
