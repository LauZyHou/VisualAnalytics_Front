<template>
  <section>
    <div id="tit">
      <span class="green">d</span><span class="blue">o</span><span class="orange">u</span><span class="green">b</span><span class="blue">a</span><span class="orange">n</span>
      <span>电影数据可视分析</span>
    </div>
    <!-- <div id="subtit">
      ECNU数据可视化·可视分析 2019
    </div> -->
    <div id="uname">刘知昊 · 刘宇 · 胡政仲 · 骆挺宇 · 任成东 · 杨伟杰 · 盛季宇</div>
  </section>
</template>

<style scoped>

#tit {
  width: 80%;
  font-size: 50px;
  /* background-color: antiquewhite; */
  margin: 130px auto 0;
}

#subtit {
  font-size: 25px;
}

div {
  text-align: center;
  margin-top: 10px;
}

span {
  margin: 0;
  padding: 0;
}
.green {
  color: rgb(8, 114, 8);
}

.blue {
  color: rgb(23, 108, 204);
}

.orange {
  color:rgb(206, 156, 98);
}

#uname {
  font-size: 20px;
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
