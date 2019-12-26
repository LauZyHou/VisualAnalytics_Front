<template>
    <div id="ZoneAccount" class="childpan" :style="{width: '900px', height: '400px'}"></div>
</template>

<script>
import { retrieveZoneAccount } from '../../api/api'

export default {
  name: 'ZoneAccount',
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
      let myChart = this.$echarts.init(document.getElementById('ZoneAccount'))
      // 绘制图表
      let option = {
        title: {
          text: '评论数情况·' + this.zone_name,
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['小于2000', '2000-5000', '5000-10000', '10000-50000', '50000以上']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        series: [
          {
            name: '评论数情况',
            type: 'pie',
            radius: [30, 110],
            // center: ['75%', '50%'],
            roseType: 'area',
            data: [
              {value: this.data[0], name: '小于2000'},
              {value: this.data[1], name: '2000-5000'},
              {value: this.data[2], name: '5000-10000'},
              {value: this.data[3], name: '10000-50000'},
              {value: this.data[4], name: '50000以上'}
            ]
          }
        ]
      }
      // 为echarts对象加载数据
      myChart.setOption(option)
    },
    refreshData (v = null) {
      let r = v === null ? this.zone_name : v
      if (r === undefined) { return }
      retrieveZoneAccount(r).then(res => {
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
