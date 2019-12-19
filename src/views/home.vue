<template>
  <section>
    <!-- 全局 -->
    <el-row id="big-row" type="flex">
      <!-- 1.1 左侧栏 -->
      <el-col :span="3" id="left-tab">
        <el-tabs tab-position="left">
          <el-tab-pane label="电影概览">概览</el-tab-pane>
          <el-tab-pane label="电影查询">查询</el-tab-pane>
          <el-tab-pane label="电影分析">分析</el-tab-pane>
        </el-tabs>
      </el-col>
      <!-- 1.2 右侧大区域 -->
      <el-col :span="21" id="right-pan"><div>123</div></el-col>
    </el-row>
  </section>
</template>

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

<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>
