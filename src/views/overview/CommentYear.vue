<template>
  <div id="CommentYear" class="childpan" :style="{width: '1000px', height: '280px'}"></div>
</template>

<script>
export default {
  name: 'CommentYear',
  data () {
    return {
    }
  },
  mounted () {
    // 根据父组件传递来的类型,获取单词数据并生成词云
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('CommentYear'))
      // 绘制图表
      let option = {
        title: {
          text: '电影数&评论数变化'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['中国电影数', '世界电影数', '中国电影评论数', '世界电影评论数']
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '电影数',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} 部'
            }
          },
          {
            type: 'value',
            name: '影评数',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} 条'
            }
          }
        ],
        series: [
          {
            name: '中国电影数',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '世界电影数',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '中国电影评论数',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          },
          {
            name: '世界电影评论数',
            type: 'line',
            yAxisIndex: 1,
            data: [3.0, 3.2, 4.3, 5.5, 7.3, 12.2, 21.3, 25.4, 26.0, 19.5, 13.0, 7.2]
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
