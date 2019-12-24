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
        '../../static/les-miserables.gexf',
        function (xml) {
          myChart.hideLoading()

          var graph = echarts.dataTool.gexf.parse(xml)
          var categories = []
          for (var i = 0; i < 9; i++) {
            categories[i] = {
              name: '类目' + i
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
                roam: true,
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
