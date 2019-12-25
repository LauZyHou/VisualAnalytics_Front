<template>
  <div id="ActorRelation" class="childpan" :style="{width: '1000px', height: '1000px'}"></div>
</template>

<script>
import echarts from 'echarts'
var $ = require('jquery')

export default {
  name: 'ActorRelation',
  data () {
    return {
      xAxisData: [],
      data1: [],
      data2: []
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(
        document.getElementById('ActorRelation')
      )
      myChart.showLoading()
      $.get(
        '../../static/actor_relation2.gexf',
        function (xml) {
          myChart.hideLoading()

          var graph = echarts.dataTool.gexf.parse(xml)
          // console.log(graph)
          var categories = []
          for (var i = 0; i < 7; i++) {
            categories[i] = {
              name: '热度' + (7 - i)
            }
          }
          graph.nodes.forEach(function (node) {
            node.itemStyle = null
            node.value = node.symbolSize
            node.symbolSize /= 1.5
            node.label = {
              normal: {
                show: node.symbolSize > 10
              }
            }
            node.category = node.attributes.modularity_class
          })
          let option = {
            title: {
              text: '演员参演关系'
            },
            tooltip: {},
            legend: [
              {
                // selectedMode: 'single',
                data: categories.map(function (a) {
                  return a.name
                })
                // selected: { // 设置默认不显示的Legend
                //   '热度1': false,
                //   '热度2': false,
                //   '热度3': false,
                //   '热度4': false,
                //   '热度6': false
                // }
              }
            ],
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
              {
                name: '演员参演关系',
                type: 'graph',
                layout: 'circular',
                circular: {
                  rotateLabel: true
                },
                data: graph.nodes,
                links: graph.links,
                categories: categories,
                // roam: true, // 是否开启鼠标缩放，平移漫游
                label: {
                  normal: {
                    position: 'right',
                    formatter: '{b}'
                  }
                },
                lineStyle: {
                  normal: {
                    color: 'source',
                    curveness: 0.3
                  }
                }
                // edgeLabel: {// 线条的边缘标签
                //   normal: {
                //     show: true,
                //     // 通过回调函数设置连线上的标签
                //     formatter: function (x) {
                //       return x.data.weight
                //     }
                //   }
                // }
              }
            ]
          }

          myChart.setOption(option)
        },
        'xml'
      )
    }
  }
}
</script>

<style scoped>
</style>
