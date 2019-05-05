<template>
<div class="container">
  <div class="item-wrap" v-for="(item, index) in news" :key="index" @click="$router.push('/news/' + item.id)">
    <div class="title"><a>{{item.title}}</a></div>
    <div class="time">2019-04-26</div>
  </div>
  <div class="pages mt-3">
    <b-pagination  v-model="params.page" :total-rows="totalCount" align="right" :per-page="params.size" @change="query"></b-pagination>
  </div>
</div>
</template>

<script>
import * as BaseService from './services/BaseService'
export default {
  name: 'News',
  data () {
    return {
      totalCount: 0,
      totalPages: 0,
      params: {
        page: 1,
        size: 10
      },
      news: []
    }
  },
  components: {
  },
  mounted () {
    this.query(1)
  },
  methods: {
    query (pageNum) {
      if (pageNum) {
        this.params.page = pageNum
      }
      this.totalCount = 100
      this.totalPages = 1
      BaseService.getNewsInfo()
        .then(res => {
          if (res.data.resultCode === 200) {
            this.news = res.data.data
          }
        })
    }
  }
}
</script>

<style scoped>
.container{
  margin-top:20px;
}
.item-wrap{
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  cursor: pointer;
}
</style>
