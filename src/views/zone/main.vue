<template>
  <section>
    <el-row id="big-row" type="flex">
      <el-col :span="4" id="left-tab">
        <el-tabs tab-position="left" @tab-click="handleClick">
          <el-tab-pane v-for="item in zone_list" :key="item" :label="item"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="20" id="right-pan">
        <zone-score :zone_name="zone_list[tabIndex]"/>
        <hr>
        <zone-account :zone_name="zone_list[tabIndex]"/>
        <hr>
        <zone-director :zone_name="zone_list[tabIndex]"/>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import { listZone } from '../../api/api'
import ZoneScore from './ZoneScore'
import ZoneAccount from './ZoneAccount'
import ZoneDirector from './ZoneDirector'

export default {
  name: 'zone',
  data () {
    return {
      tabIndex: 0,
      zone_list: []
    }
  },
  methods: {
    // 处理点击左侧Tab栏的方法
    handleClick (tab) {
      this.tabIndex = parseInt(tab.index)
    }
  },
  components: {
    'zone-score': ZoneScore,
    'zone-account': ZoneAccount,
    'zone-director': ZoneDirector
  },
  created () {
    // 先获取到电影流派(类别)枚举
    listZone().then(res => {
      this.zone_list = res.data
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

#right-pan {
  padding: 30px 0px 30px 60px;
}

#right-pan {
  background-color: rgb(244, 244, 255);
}
</style>
