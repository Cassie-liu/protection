<template>
<div class="container">
  <div class="item-wrap" v-for="(item, index) in news" :key="index" @click="$router.push('/news/' + item.id)">
    <div class="title"><a>{{item.title}}</a></div>
    <div class="time">{{item.times}}</div>
  </div>
  <div class="pages mt-3">
    <b-pagination  v-model="params.page" v-if="totalCount > 0" :total-rows="totalCount" align="right" :per-page="params.size" @change="query"></b-pagination>
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
      news: [],
      allNews: []
    }
  },
  components: {
  },
  mounted () {
    this.queryAllNews(1)
  },
  methods: {
    queryAllNews () {
      BaseService.getNewsInfo()
        .then(res => {
          if (res.data.resultCode === 200) {
            this.allNews = res.data.data
            this.totalCount = this.allNews.length
            this.query(1)
          }
        })
    },
    query (pageNum) {
      if (pageNum) {
        this.params.page = pageNum
      }
      this.news = this.allNews.slice((this.params.page - 1) * 10, this.params.page * 10)
    }
  },
  watch: {
    news: {
      handler (culVal, oldVal) {
        if (document.body.clientWidth <= 768) {
          for (let i in this.news) {
            this.news[i].times = this.news[i].time.split(' ')[0]
          }
        } else {
          for (let i in this.news) {
            this.news[i].times = this.news[i].time
          }
        }
      }
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
@media screen and (max-device-width: 768px) {
  .item-wrap{
    border-bottom: 1px solid #ddd;
  }
  .item-wrap .title {
    width: 74%;
  }
  .item-wrap .time {
    width: 30%;
    margin-left:2%;
  }
  .pages.mt-3{
    margin-top: 3rem !important;
  }
}
</style>
