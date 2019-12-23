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
  html,#app {
    height: 100%;
    margin: 0;
  }

  body {
    height: 100%;
    margin: 0;
  }

  header {
    height: 10%;
  }

  section {
    min-height: 360px;
  }

  footer {
    height: 5%;
  }

  section {
    /* background-color: aqua; */
  }
</style>
