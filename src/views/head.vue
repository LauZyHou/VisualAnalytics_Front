<template>
  <header>
    <el-menu
      default-active="1"
      mode="horizontal"
      @select="handleSelect"
      :router="true"
    >
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="/overview">总览</el-menu-item>
      <el-menu-item index="/type">按类别</el-menu-item>
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
