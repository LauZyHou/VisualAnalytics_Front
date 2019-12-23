<template>
  <div id="MeanscoreDistribution" class="childpan" :style="{width: '1000px', height: '280px'}"></div>
</template>

<script>
import { listScoreDistri } from '../../api/api'

export default {
  name: 'MeanscoreDistribution',
  data () {
    return {
      data1: [],
      data2: []
    }
  },
  /*
  props: {
    // 父组件使用时传递此值:1->当前用户的测验常错词,0/其它->随机
    kind: {
      type: Number,
      required: true
    }
  }, */
  mounted () {
    listScoreDistri().then(res => {
      this.data2 = res.data['世界']
      this.data1 = res.data['中国大陆']
    }).then(() => {
      this.drawLine()
    })
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('MeanscoreDistribution'))
      // 绘制图表
      let option = {
        title: {
          text: '电影评分分布情况'
        //   subtext: '豆瓣电影数据集'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['中国大陆', '世界']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['<5分', '5-6.5分', '6.5-7.5分', '7.5-8分', '8-8.5分', '8.5-9分', '>9分']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '中国大陆',
            type: 'bar',
            data: this.data1,
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '世界',
            type: 'bar',
            data: this.data2,
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
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
