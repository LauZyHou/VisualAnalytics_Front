<template>
  <div id="CommentYear" class="childpan" :style="{width: '1000px', height: '280px'}"></div>
</template>

<script>
import { listMvAndPNum } from '../../api/api'

export default {
  name: 'CommentYear',
  data () {
    return {
      xAxisData: [],
      mvnum: [],
      mvnum_cn: [],
      pnum: [],
      pnum_cn: []
    }
  },
  mounted () {
    for (var i = 0; i < 97; i++) {
      this.xAxisData.push(i + 1920 + '年')
    }

    listMvAndPNum().then(res => {
      this.mvnum_cn = res.data['电影数(中国大陆)']
      this.mvnum = res.data['电影数(世界)']
      this.pnum_cn = res.data['评论数(中国大陆)']
      this.pnum = res.data['评论数(世界)']
    }).then(() => {
      this.drawLine()
    })
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
          data: ['电影数(中国大陆)', '电影数(世界)', '评论数(中国大陆)', '评论数(世界)']
        },
        xAxis: [
          {
            type: 'category',
            data: this.xAxisData,
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
            max: 8000,
            interval: 800,
            axisLabel: {
              formatter: '{value} 部'
            }
          },
          {
            type: 'value',
            name: '评论数',
            min: 0,
            max: 80000000,
            interval: 8000000,
            axisLabel: {
              formatter: '{value} 条'
            }
          }
        ],
        series: [
          {
            name: '电影数(中国大陆)',
            type: 'bar',
            data: this.mvnum_cn
          },
          {
            name: '电影数(世界)',
            type: 'bar',
            data: this.mvnum
          },
          {
            name: '评论数(中国大陆)',
            type: 'line',
            yAxisIndex: 1,
            data: this.pnum_cn
          },
          {
            name: '评论数(世界)',
            type: 'line',
            yAxisIndex: 1,
            data: this.pnum
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
