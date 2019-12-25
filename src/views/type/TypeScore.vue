<template>
    <div id="TypeScore" class="childpan" :style="{width: '900px', height: '400px'}"></div>
</template>

<script>
export default {
  name: 'TypeScore',
  props: ['type_name'],
  watch: {
    type_name (v) {
      this.drawLine()
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('TypeScore'))
      // 绘制图表
      let option = {
        title: {
          text: '得分情况·' + this.type_name,
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['5分以下', '5-6分', '6-7分', '7-8分', '8分以上']
        },
        series: [
          {
            name: '评分',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '低分', selected: true},
              {value: 679, name: '一般'},
              {value: 48, name: '高分'}
            ]
          },
          {
            name: '评分',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
              normal: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                shadowBlur: 3,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                shadowColor: '#999',
                padding: [0, 7],
                rich: {
                  a: {
                    color: '#FFF', // 卡片文字前景色
                    lineHeight: 22,
                    align: 'center'
                  },
                  abg: {
                    backgroundColor: '#000', // 卡片标题背景色
                    width: '100%',
                    align: 'right',
                    height: 22,
                    borderRadius: [4, 4, 0, 0]
                  },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            },
            data: [
              {value: 335, name: '5分以下'},
              {value: 310, name: '5-6分'},
              {value: 234, name: '6-7分'},
              {value: 135, name: '7-8分'},
              {value: 48, name: '8分以上'}
            ]
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
