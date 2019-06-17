<template>
<div class="container company">
  <div class="content" v-html="company.content"></div>
</div>
</template>

<script>
import * as BaseService from './services/BaseService'
export default {
  name: 'Company',
  data () {
    return {
      company: {}
    }
  },
  mounted () {
    this.getCompany()
  },
  methods: {
    getCompany () {
      BaseService.getCompanyInfo()
        .then(res => {
          if (res.data.resultCode === 200) {
            this.company = res.data.data
          }
        })
    }
  }
}
</script>

<style scoped>
.company{
  padding: 20px;
}
  @media screen and (max-device-width: 768px) {
    .company .content img {
      width: 100% !important;
    }
  }
</style>
