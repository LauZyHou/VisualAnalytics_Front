<template>
  <section>
    <el-row id="big-row" type="flex">
      <el-col :span="4" id="left-tab">
        <el-tabs tab-position="left" @tab-click="handleClick">
          <el-tab-pane v-for="item in genres" :key="item" :label="item"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="20" id="right-pan">
        <genre-panel :genre_type="genres[tabIndex]"></genre-panel>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import { listGenres } from '../../api/api'
import genre from './genre'

export default {
  name: 'movie',
  data () {
    return {
      tabIndex: 0,
      genres: []
    }
  },
  methods: {
    // 处理点击左侧Tab栏的方法
    handleClick (tab) {
      this.tabIndex = parseInt(tab.index)
    }
  },
  components: {
    'genre-panel': genre
  },
  created () {
    // 先获取到电影流派(类别)枚举
    listGenres().then(res => {
      for (let k in res.data) {
        this.genres.push(res.data[k]['genre'])
      }
      // console.log(this.genres)
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

#left-tab {

}

#right-pan {
  background-color: rgb(244, 244, 255);
}
</style>
