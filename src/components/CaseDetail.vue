<template>
  <div class="container project-detail">
    <div class="title">{{detail.title}}</div>
    <div class="content" v-html="detail.content"></div>
  </div>
</template>

<script>
import * as BaseService from './services/BaseService'
export default {
  name: 'CaseDetail',
  data () {
    return {
      detail: {}
    }
  },
  mounted () {
    this.getEngineerDetail()
  },
  methods: {
    getEngineerDetail () {
      BaseService.getEngineerDetail(this.$route.params.id)
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
  .project-detail{
    padding:20px;
  }
  .content{
    margin-top:20px;
  }
</style>
