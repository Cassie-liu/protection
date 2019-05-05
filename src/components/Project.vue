<template>
  <div class="container project">
    <div class="item-wrap" v-for="(item, index) in projects" :key="index" @click="$router.push('/project/' + item.id)">
      <img src="../images/service.png" alt="">
    </div>
  </div>
</template>

<script>
import * as BaseService from './services/BaseService'
export default {
  name: 'Project',
  data () {
    return {
      projects: []
    }
  },
  mounted () {
    this.getProject()
  },
  methods: {
    getProject () {
      BaseService.getProjectInfo()
        .then(res => {
          console.log(res.data)
          if (res.data.resultCode === 200) {
            this.projects = res.data.data
          }
        })
    }
  }
}
</script>

<style scoped>
  .project {
    /*display: flex;*/
    /*justify-content: space-between;*/
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
