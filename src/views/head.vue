<template>
  <header>
    <el-menu
      default-active="1"
      mode="horizontal"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="/">电影</el-menu-item>
      <el-submenu index="2">
        <template slot="title">选项二</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="/teleplay">电视剧</el-menu-item>
    </el-menu>
  </header>
</template>

<script>
export default {
  name: 'head_',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
</style>
