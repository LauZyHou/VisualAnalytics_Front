<template>
    <div id="ZoneScore" class="childpan" :style="{width: '900px', height: '400px'}"></div>
</template>

<script>
import { retrieveZoneScore } from '../../api/api'

export default {
  name: 'ZoneScore',
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
  computed: {
    lowsum () {
      return this.data[0] + this.data[1]
    },
    midsum () {
      return this.data[2] + this.data[3]
    }
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('ZoneScore'))
      // 绘制图表
      let option = {
        title: {
          text: '得分情况·' + this.zone_name,
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
              {value: this.lowsum, name: '低分', selected: true},
              {value: this.midsum, name: '一般'},
              {value: this.data[1], name: '高分'}
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
              {value: this.data[0], name: '5分以下'},
              {value: this.data[1], name: '5-6分'},
              {value: this.data[2], name: '6-7分'},
              {value: this.data[3], name: '7-8分'},
              {value: this.data[4], name: '8分以上'}
            ]
          }
        ]
      }
      // 为echarts对象加载数据Score
      myChart.setOption(option)
    },
    refreshData (v = null) {
      let r = v === null ? this.zone_name : v
      if (r === undefined) { return }
      retrieveZoneScore(r).then(res => {
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
