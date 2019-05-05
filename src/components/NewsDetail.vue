<template>
    <div class="container news-detail">
      <div class="title">{{detail.title}}</div>
      <div class="content" v-html="detail.content"></div>
    </div>
</template>

<script>
import * as BaseService from './services/BaseService'
export default {
  name: 'NewsDetail',
  data () {
    return {
      detail: {}
    }
  },
  mounted () {
    this.getNewsDetail()
  },
  methods: {
    getNewsDetail () {
      console.log(this.$route.params.id)
      BaseService.getNewsDetail(this.$route.params.id)
        .then(res => {
          if (res.data.resultCode === 200) {
            this.detail = res.data.data
          }
        })
    }
  }
}
</script>

<style scoped>
.news-detail{
  padding: 20px;
}
</style>
