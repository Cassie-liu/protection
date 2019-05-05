<template>
  <div class="container case">
    <div class="item-wrap" v-for="(item, index) in Cases" :key="index" @click="$router.push('/case/' + item.id)">
      <img src="../images/service.png" alt="">
    </div>
  </div>
</template>

<script>
import * as BaseService from './services/BaseService'
export default {
  name: 'Case',
  data () {
    return {
      Cases: []
    }
  },
  mounted () {
    this.getEngineerInfo()
  },
  methods: {
    getEngineerInfo () {
      BaseService.getEngineerInfo()
        .then(res => {
          console.log(res.data)
          if (res.data.resultCode === 200) {
            this.Cases = res.data.data
          }
        })
    }
  }
}
</script>

<style scoped>
  .case {
    padding-top:20px;
    width: 100%;
  }
  .item-wrap {
    display: inline-block;
    margin-right:20px;
    margin-bottom: 20px;
  }
  .item-wrap img{
    width:200px;
    height:200px;
  }
</style>
