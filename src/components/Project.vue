<template>
  <!--<div class="container project">-->
    <!--<div class="item-wrap" v-for="(item, index) in projects" :key="index" @click="$router.push('/project/' + item.id)">-->
      <!--<img :src="item.imageUrl" alt="">-->
      <!--<div class="title">{{item.title}}</div>-->
    <!--</div>-->
  <!--</div>-->
  <div class="case-project">
    <div class="content">
      <article v-for="(item, index) in projects" :key="index"  class="post-152 post type-post status-publish format-standard hentry category-people category-photos">
        <div class="post-format-content">
          <div class="post-thumbnail">
            <img  :src="item.imageUrl" class="attachment-thumbnail wp-post-image" alt="105694702">
          </div>
          <div class="content-wrap">
            <h1 class="entry-title">
              <!--<a href="" class="featured-image" rel="bookmark">{{item.title}}</a>-->
              <router-link :to="{path: '/project/' + item.id}" class="featured-image" rel="bookmark">{{item.title}}</router-link>
            </h1>
          </div>
          <div class="title">{{item.title}}</div>
        </div>
      </article>
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
  .item-wrap .title{
    text-align: center;
    font-size:21px;
    margin-top:10px;
  }
  .case-project {
    padding:60px;
  }
  .case-project .content{
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
  }
  .case-project .content article {
    margin-right: 3%;
    position: relative;
    margin-bottom: 3.5%;
    width: 30%;
    background: #fff !important;
  }
  .post-format-content {
    position: relative;
    background: #111;
  }
  .post-format-content .title {
    display: none;
  }
  .post-thumbnail {
    /*max-width: 100%;*/
    height: auto;
    overflow: hidden;
  }
  .content-wrap {
    padding: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    top: 0;
    bottom: 0;
    display: table-cell;
    vertical-align: middle;
    overflow: hidden;
  }
  .content-wrap h1.entry-title {
    display: table;
    font-size: 110%;
    height: 100%;
    text-transform: uppercase;
    width: 100%;
    margin:0;
  }
  .edit-link {
    z-index: 2;
  }
  .featured-image {
    display: table-cell;
    position: relative;
    transition: opacity .25s ease-in-out, background .25s ease-in-out;
    -moz-transition: opacity .25s ease-in-out, background .25s ease-in-out;
    -webkit-transition: opacity .25s ease-in-out, background .25s ease-in-out;
    vertical-align: middle;
    z-index: 1;
    color: #fff;
    text-decoration: none;
    opacity: 0;
    padding: 10%;
  }
  .featured-image:hover {
    opacity: 0.9;
    color: #fff;
    background: rgba(0,0,0,0.8);
  }
  .post-thumbnail{
    /*width:300px;*/
    width:100%;
    height:200px;
  }
  .post-thumbnail img {
    display: block;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-device-width: 768px) {
    .case-project{
      padding: 20px;
    }
    .case-project .content article {
      width: 100%;
      border-bottom:1px solid #ddd;
    }
    .case-project .content article .post-format-content{
      background: #fff;
    }
    .case-project .content article .post-thumbnail img{
      border-radius: 10px;
    }
    .case-project .content article .post-format-content .title {
      display: block;
      margin-top:10px;
      margin-bottom:10px;
    }
  }
</style>
