<template>
  <div id="MeanscoreDistribution" class="childpan" :style="{width: '1000px', height: '280px'}"></div>
</template>

<script>
export default {
  name: 'MeanscoreDistribution',
  data () {
    return {
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
    // 根据父组件传递来的类型,获取单词数据并生成词云
    this.drawLine()
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
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6],
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
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6],
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
