<template>
  <section>
    <el-row id="big-row" type="flex">
      <el-col :span="4" id="left-tab">
        <el-tabs tab-position="left" @tab-click="handleClick">
          <el-tab-pane v-for="item in type_list" :key="item" :label="item"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="20" id="right-pan">
        <type-panel :type_name="type_list[tabIndex]"/>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import { listTypeSet } from '../../api/api'
import typePanel from './type-panel'

export default {
  name: 'type',
  data () {
    return {
      tabIndex: 0,
      type_list: []
    }
  },
  methods: {
    // 处理点击左侧Tab栏的方法
    handleClick (tab) {
      this.tabIndex = parseInt(tab.index)
    }
  },
  components: {
    'type-panel': typePanel
  },
  created () {
    // 先获取到电影流派(类别)枚举
    listTypeSet().then(res => {
      for (let k in res.data) {
        this.type_list.push(res.data[k])
      }
    })
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
  border-radius: 4px;
  min-height: 36px;
}

#big-row {
  width: 100%;
  height: 100%;
}

#left-tab {

}

#right-pan {
  background-color: rgb(244, 244, 255);
}
</style>
