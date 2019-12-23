<template>
  <section>
    <meanscore-year />
    <hr />
    <meanscore-distribution />
    <hr />
    <comment-year />
    <hr />
    <meanscore-stack-world />
    <hr />
    <meanscore-stack-china />
  </section>
</template>

<script>
import MeanscoreYear from './MeanscoreYear'
import MeanscoreDistribution from './MeanscoreDistribution'
import CommentYear from './CommentYear'
import MeanscoreStackWorld from './MeanscoreStackWorld'
import MeanscoreStackChina from './MeanscoreStackChina'

export default {
  name: 'overview',
  data () {
    return {}
  },
  components: {
    'meanscore-year': MeanscoreYear,
    'meanscore-distribution': MeanscoreDistribution,
    'comment-year': CommentYear,
    'meanscore-stack-world': MeanscoreStackWorld,
    'meanscore-stack-china': MeanscoreStackChina
  }
}
</script>

<style scoped>
section {
  padding-top: 15px;
}
</style>

<style>
.childpan {
  margin: 0 auto;
}
</style>
