<template>
  <div id="MeanscoreStackWorld" class="childpan" :style="{width: '1000px', height: '280px'}"></div>
</template>

<script>
export default {
  name: 'MeanscoreStackWorld',
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
      let myChart = this.$echarts.init(document.getElementById('MeanscoreStackWorld'))
      // 绘制图表
      let option = {
        title: {
          text: '电影得分占比(世界)'
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
          data: ['5分以下', '5-6.6分', '6.6-7.6分', '7.6-8.6分', '8.6分以上']
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '5-6.6分',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '6.6-7.6分',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '7.6-8.6分',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '8.6分以上',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {normal: {}},
            data: [120, 232, 201, 234, 590, 630, 620]
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
