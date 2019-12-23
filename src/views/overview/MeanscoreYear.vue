<template>
  <div id="MeanscoreYear" class="childpan" :style="{width: '1000px', height: '280px'}"></div>
</template>

<script>

import { listMeanScore } from '../../api/api'

export default {
  name: 'MeanscoreYear',
  data () {
    return {
      xAxisData: [],
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
    for (var i = 0; i < 92; i++) {
      this.xAxisData.push(i + 1925 + '年')
    }

    // 世界&中国大陆的电影得分
    listMeanScore().then(res => {
      this.data2 = res.data['世界']
      this.data1 = res.data['中国大陆']
    }).then(() => {
      // 根据父组件传递来的类型,获取单词数据并生成词云
      this.drawLine()
    })
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('MeanscoreYear'))
      // 绘制图表
      let option = {
        title: {
          text: '平均评分随年份变化(1925-2016)'
        },
        legend: {
          data: ['中国大陆', '世界'],
          align: 'left'
        },
        toolbox: {
        // y: 'bottom',
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: this.xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
          max: 9,
          min: 5.5
        },
        series: [{
          name: '中国大陆',
          type: 'bar',
          data: this.data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: '世界',
          type: 'bar',
          data: this.data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }
      // 为echarts对象加载数据
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
