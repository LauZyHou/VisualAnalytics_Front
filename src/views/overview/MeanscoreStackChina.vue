<template>
  <div id="MeanscoreStackChina" class="childpan" :style="{width: '1000px', height: '280px'}"></div>
</template>

<script>
import { listScoreFlow } from '../../api/api'

export default {
  name: 'MeanscoreStackChina',
  data () {
    return {
      data: [[], [], [], [], []]
    }
  },
  mounted () {
    listScoreFlow().then(res => {
      this.data = res.data['中国大陆']
    }).then(() => {
      this.drawLine()
    })
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('MeanscoreStackChina'))
      // 绘制图表
      let option = {
        title: {
          text: '近年得分情况(中国大陆)'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['5分以下', '5-6分', '6-7分', '7-8分', '8分以上']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '5分以下',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.data[0]
          },
          {
            name: '5-6分',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.data[1]
          },
          {
            name: '6-7分',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.data[2]
          },
          {
            name: '7-8分',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: this.data[3]
          },
          {
            name: '8分以上',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {normal: {}},
            data: this.data[4]
          }
        ]
      }
      // 为echarts对象加载数据
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
