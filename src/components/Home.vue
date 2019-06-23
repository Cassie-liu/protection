<template>
  <div>
    <section id="intro">
      <div class="intro-container">
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" v-for="(item, index) in images" :key="index" :data-slide-to="index" :class="active == index ? 'active': ''"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item" v-for="(item, index) in images" :key="index" :class="active == index ? 'active': ''" >
              <img :src="item">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <img src="../images/button_left.png" alt="">
            <!--<span class="carousel-control-prev-icon ion-chevron-left"></span>-->
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <img src="../images/button_right.png" alt="">
            <!--<span class="carousel-control-next-icon ion-chevron-right"></span>-->
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="side-menu">
        <div class="side-header">
          服务项目
        </div>
        <div class="side-content">
          <ul class="content-project">
            <li v-for="(item, index) in project" :key="index">
              <router-link :to="{path: '/project/' + item.id}">{{item.title}}</router-link>
            </li>
            <li v-if="projects.length > 4">
              <router-link :to="{path: '/project'}">查看更多</router-link>
            </li>
          </ul>
        </div>
        <div class="side-footer">
          <div class="footer-title">关注微信公众号</div>
          <div>
            <img src="../images/QR_code.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
    <main id="main">
      <section id="advance">
        <div class="title center">
          <img src="../images/advantage.png" alt="">
        </div>
        <div class="content">
          <img src="../images/advantages.png" alt="">
        </div>
      </section>
      <section id="company">
        <div class="title center">
          <img src="../images/company_intro.png" alt="">
        </div>
        <div class="content">
          <!--<div class="img img1">-->
            <!--<img src="../images/company1.jpg" alt="">-->
          <!--</div>-->
          <!--<div class="img img2">-->
            <!--<img src="../images/company2.jpg" alt="">-->
          <!--</div>-->
          <div class="img">
            <img src="../images/company3.jpg" alt="">
          </div>
          <div class="img introduce">
            <div class="">
              <p>
                常州环泰环保科技有限公司，成立于2018年6月，公司为中小企业绿色创新服务平台立足于常州、面向全国、放眼世界，借助科技、文化和人才聚集优势，结合中小企业实际需求，利用互联网+专业服务的模式，搭建中小企业绿色发展与创新一站式服务平台。
              </p>
              <p>
                环泰管家平台积极响应政府提出大众创业万众创新、产业结构调整、高精尖产业发展和绿色创新、一体化协同能力提升，提供重要服务支撑。公司拥有环保部颁发的环保设施运营管理（工业废水）甲级资质以及相关污水处理的多项国家级资质。
              </p>
              <p>
                公司成立以来专业从事废水处理工程的设计、施工、运营管理以及污水处理设备的设计、制造。业务以涉及粉尘处理、活性炭吸附设备、填料塔吸收设备、低温等离子设备、生物滴滤设备、UV光解废气净化和催化燃烧设备等各种废气、粉尘净化处理技术。公司拥有一批具有丰富经验的工程师领衔设计，提供从技术咨询到设计、安装、调试、验收等一条龙服务，彻底解决客户的后顾之忧
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="project">
        <div class="center">
          <span class="project" :class="tab === 'project' ? 'active': ''" @click="switchTab('project')"></span>
          <span class="case" :class="tab === 'case' ? 'active': ''" @click="switchTab('case')"></span>
        </div>
        <div class="case-project" v-if="tab === 'project'">
          <div class="content">
            <router-link :to="{name: 'Project'}">
              <article v-for="(item, index) in projects" :key="index" @click="$router.push({name: 'Project'})" class="post-152 post type-post status-publish format-standard hentry category-people category-photos">
                <div class="post-format-content">
                  <div class="post-thumbnail">
                    <img  :src="item.imageUrl" class="attachment-thumbnail wp-post-image" alt="105694702">
                  </div>
                  <div class="content-wrap">
                    <h1 class="entry-title">
                      <a href="" class="featured-image" rel="bookmark">{{item.title}}</a>
                    </h1>
                  </div>
                </div>
              </article>
            </router-link>
          </div>
        </div>
        <div class="case-project" v-if="tab === 'case'">
          <div class="content">
           <router-link :to="{name: 'Case'}">
             <article v-for="(item, index) in cases" :key="index"  class="post-152 post type-post status-publish format-standard hentry category-people category-photos">
               <div class="post-format-content">
                 <div class="post-thumbnail">
                   <img width="480" height="640" :src="item.imageUrl" class="attachment-thumbnail wp-post-image" alt="105694702">
                 </div>
                 <div class="content-wrap">
                   <h1 class="entry-title">
                     <a href="" class="featured-image" rel="bookmark">{{item.title}}</a>
                   </h1>
                 </div>
               </div>
             </article>
           </router-link>
          </div>
        </div>
      </section>
      <section id="contact">
          <div class="contact_us">
            <div class="phone">
              <img src="../images/phone-square.png" alt="">
              <span class="text">{{contact.hotline}}</span>
            </div>
            <div class="phone">
              <img src="../images/email-streamline.png" alt="">
              <span class="text">{{contact.email}}</span>
            </div>
            <div class="phone">
              <img src="../images/locations.png" alt="">
              <span class="text">{{contact.address}}</span>
            </div>
          </div>
      </section>
    </main>
  </div>
</template>

<script>
import * as BaseService from './services/BaseService'
export default {
  name: 'Home',
  data () {
    return {
      images: [], // 轮播图
      active: 0,
      contact: {}, // 联系我们
      news: [], // 新闻资讯
      projects: [], // 项目
      cases: [], // 工程,
      project: [], // 四个项目
      tab: 'project'
    }
  },
  mounted () {
    this.getBannerInfo()
    this.getContact()
    this.getNewsInfo()
    this.getProjectInfo()
    this.getCaseInfo()
  },
  methods: {
    switchTab (tab) {
      this.tab = tab
    },
    directToPath (path) {
      this.$router.push({path: path})
    },
    getBannerInfo () {
      BaseService.getBannerInfo()
        .then(res => {
          this.images = res.data.data
        })
    },
    getContact () {
      BaseService.getContactInfo()
        .then(res => {
          this.contact = res.data.data
        })
    },
    getNewsInfo () {
      BaseService.getNewsInfo()
        .then(res => {
          this.news = res.data.data
        })
    },
    getProjectInfo () {
      BaseService.getProjectInfo()
        .then(res => {
          this.projects = res.data.data
          if (this.projects.length >= 4) {
            this.project = this.projects.slice(0, 4)
          }
        })
    },
    getCaseInfo () {
      BaseService.getEngineerInfo()
        .then(res => {
          if (res.data.data.length > 5) {
            this.cases = res.data.data.slice(0, 5)
          } else {
            this.cases = res.data.data
          }
        })
    }
  }
}
</script>

<style scoped>
  #intro{
    height:70vh;
    position: relative;
  }
  .intro-container,.carousel,.carousel-inner{
    height:100%;
  }
  .carousel-inner img{
    height: 450px;
  }
  .carousel-control-prev{
    margin-left:100px;
    text-align: left;
    width: auto;
    /*display: none;*/
    opacity: 0;
  }
  .carousel-control-next{
    margin-right:100px;
    text-align: right;
    width: auto;
    opacity: 0;
  }
  #carouselExampleIndicators:hover .carousel-control-prev,#carouselExampleIndicators:hover .carousel-control-next {
    /*display: inline-block;*/
    opacity: 1;
  }
  #carouselExampleIndicators .carousel-item {
    width: 100%;
    /*height: -moz-calc(90vh - 90px);*/
    /*height: -webkit-calc(90vh - 90px);*/
    /*height: calc(90vh - 90px);*/
    /*height:90%;*/
    height:100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  #carouselExampleIndicators .carousel-item img{
    width: 100%;
    height:100%;
  }
  .carousel-indicators li{
    /*width:20px;*/
    /*height:10px;*/
    /*border-radius: 5px;*/
    /*background-color: #fff;*/
    /*background-clip: padding-box;*/
    /*border-top: none;*/
    /*border-bottom: none;*/
  }
  .carousel-indicators li::before{
    position: absolute;
    top: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: "";
  }
  .carousel-indicators li::after{
    position: absolute;
    bottom: -10px;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 10px;
    content: "";
  }
  #carouselExampleIndicators .carousel-fade .carousel-inner .carousel-item,
  #carouselExampleIndicators .carousel-fade .carousel-inner .active.carousel-item-left,
  #carouselExampleIndicators .carousel-fade .carousel-inner .active.carousel-item-right{
   opacity: 0;
  }
  #carouselExampleIndicators .carousel-fade .carousel-inner .active,
  #carouselExampleIndicators .carousel-fade .carousel-inner .carousel-item-next.carousel-item-left,
  #carouselExampleIndicators .carousel-fade .carousel-inner .carousel-item-prev.carousel-item-right{
    opacity: 1;
    transition: 0.5s;
  }
  #carouselExampleIndicators .carousel-fade .carousel-inner .carousel-item{
    -webkit-transition-property: opacity;
    transition-property: opacity;
  }
  .carousel-indicators{
    /*bottom: 70px;*/
  }
  .carousel-indicators li.active{
    /*width:25px;*/
    /*background-color: #41903B;*/
  }
   #intro .side-menu {
     position: fixed;
     top: 120px;
     z-index: 1000;
     border: 1px solid #333;
     /*height: 80vh;*/
     width: 200px;
     background: #fff;
   }
   #intro .side-menu .side-header{
     width: 100%;
     height: 60px;
     text-align: center;
     line-height: 60px;
     background: #003221;
     color: #fff;
     font-size: 18px;
   }
  #intro .side-menu .side-content{
    /*min-height: 40vh;*/
  }
  #intro .side-menu .side-content .content-project{
    padding: 10px 0;
    padding-bottom: 0;
  }
  #intro .side-menu .side-content .content-project li {
    list-style: none;
    width: 100%;
    height: 40px;
    line-height:40px;
    text-align: center;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    white-space: nowrap;
    text-overflow:ellipsis;/*设置超出部分显示...*/
    -o-text-overflow:ellipsis;
    overflow: hidden;
    padding: 0 10px;
  }
  #intro .side-menu .side-content .content-project li a {
    width: 150px;
    display: inline-block;
    margin-right: 10px;
  }
  #intro .side-menu .side-content .content-project li a,#intro .side-menu .side-content .content-project li a:hover{
    text-decoration: none;
    color: #333;
  }
  #intro .side-menu .side-footer{
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    /*height: 160px;*/
  }
  #intro .side-menu .side-footer img{
    width: 180px;
  }
  #intro .side-menu .side-footer .footer-title{
    height: 60px;
    background: #003221;
    width: 100%;
    line-height: 60px;
    color: #fff;
    text-align: center;
    font-size: 18px;
  }
  #advance, #company, #project{
    background: url(../images/img_mapbg.png) center top no-repeat fixed;
    background-size: cover;
    /*padding: 60px 0 40px 0;*/
    position: relative;
    /*margin-top: 30px;*/
  }
  #project{
    margin-top:30px;
  }
  .center{
    text-align: center;
  }
  #advance .title img, #company .title img{
    height:100px;
  }
  #advance .content img{
    width: 100%;
    height:70vh
  }
 #contact{
    background-image: url("../images/advantages.png");
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  #contact {
    background-image: url("../images/img_contact_bg.png");
    height:315px;
    position: relative;
  }
  #contact .contact_us {
    height: 60px;
    /*border: 1px solid red;*/
    /*width: 200px;*/
    position: absolute;
    top: 60%;
    left: 17%;
  }
  #contact .contact_us .phone {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  #contact .contact_us .phone img {
    width: 18px;
    height:18px;
  }
  #contact .contact_us .text{
    color:#fff;
    margin-left:10px;
  }

  #company .content{
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    margin-bottom: 20px;
  }
  #company .content .img{
    /*width:33%;*/
    width: 50%;
    margin-right: 20px;
    /*height:80vh;*/
  }
  #company .content .introduce{
    /*width: 30%;*/
    width: 50%;
    font-size:18px;
  }
  #company .content .img img {
    width:100%;
    height:100%;
  }
  #company .content .introduce p {
    text-indent: 30px;
    line-height:32px;
  }
  #project>div.center> span{
    display: inline-block;
    width: 270px;
    height:80px;
  }
  #project>div.center> span.case{
    background-image: url("../images/button_caseproduce_n.png");
    /*margin-right:160px;*/
    background-size: 80%;
    background-repeat: no-repeat;
  }
  #project>div.center> span.case.active{
    background-image: url("../images/button_caseproduce_h.png");
    background-size: 80%;
    background-repeat: no-repeat;
  }
  #project>div.center> span.project{
    background-image: url("../images/button_itemproduce_n.png");
    margin-right:160px;
    background-size: 80%;
    background-repeat: no-repeat;
  }
  #project>div.center> span.project.active{
    background-image: url("../images/button_itemproduce_h.png");
    background-size: 80%;
    background-repeat: no-repeat;
  }
  .case-project {
    /*padding:60px;*/
    padding: 10px 60px;
  }
  .case-project .content{
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*justify-content: space-between;*/
  }
  .case-project .content>a {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-left: 2%;
  }
  .case-project .content article {
    margin-right: 3%;
    position: relative;
    margin-bottom: 3.5%;
    width: 30%;
  }
  .post-format-content {
    position: relative;
    background: #111;
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
</style>
