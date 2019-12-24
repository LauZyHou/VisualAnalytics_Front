<template>
  <section>
    <actor-relation/>
  </section>
</template>

<script>
import ActorRelation from './ActorRelation'

export default {
  name: 'person',
  data () {
    return {}
  },
  components: {
    'actor-relation': ActorRelation
  }
}
</script>

<style scoped>
section {
  padding-top: 15px;
  min-height: 1000px;
}
</style>

<style>
.childpan {
  margin: 0 auto;
}
</style>
