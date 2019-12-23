<template>
    <section>
        <meanscore-year/>
        <hr>
        <meanscore-distribution/>
        <hr>
        <comment-year/>
    </section>
</template>

<script>
import MeanscoreYear from './MeanscoreYear'
import MeanscoreDistribution from './MeanscoreDistribution'
import CommentYear from './CommentYear'

export default {
  name: 'overview',
  data () {
    return {

    }
  },
  components: {
    'meanscore-year': MeanscoreYear,
    'meanscore-distribution': MeanscoreDistribution,
    'comment-year': CommentYear
  }
}
</script>

<style scoped>
    section {
        padding-top: 15px;
    }
</style>
