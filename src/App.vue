<template>
  <div id="app">
    <router-view name="head"></router-view>
    <router-view name="content"></router-view>
    <router-view name="foot"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html,body,#app {
    height: 100%;
  }

  header {
    height: 10%;
  }

  section {
    height: 85%;
  }

  footer {
    height: 5%;
  }

  section {
    /* background-color: aqua; */
  }
</style>
