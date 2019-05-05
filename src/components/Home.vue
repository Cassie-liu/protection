<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" v-for="(item, index) in images" :key="index" :data-slide-to="index" :class="active == index ? 'active': ''"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(item, index) in images" :key="index" :class="active == index ? 'active': ''">
          <img class="d-block w-100" :src="item">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <img src="../images/button_left.png" alt="">
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <img src="../images/button_right.png" alt="">
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container">
      <div class="services">
        <div class="title">服务项目</div>
        <div class="services-img">
          <div class="card cursor" v-for="(item, index) in projects" :key="index" @click="$router.push('/project/' + item.id)">
            <img class="card-img-top" src="../images/service.png">
            <div class="card-body">
              <h5 class="card-title">甲醛检测</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-news">
        <div class="contact">
          <div class="title">
            <span class="title-wrap"></span>
            <span class="title-text">联系我们</span>
          </div>
          <div class="content">
            <div class="item-wrap">
              <img src="../images/phone.png">
              <span class="text">服务热线</span>:
              <span class="text-wrap">{{contact.hotline}}</span>
            </div>
            <div class="item-wrap">
              <img src="../images/email.png">
              <span class="text">公司邮箱</span>:
              <span class="text-wrap">{{contact.emile}}</span>
            </div>
            <div class="item-wrap">
              <img src="../images/fax.png">
              <span class="text">传真</span>:
              <span class="text-wrap">{{contact.fax}}</span>
            </div>
            <div class="item-wrap">
              <img src="../images/location.png">
              <span class="text">公司地址</span>:
              <span class="text-wrap">{{contact.address}}</span>
            </div>
          </div>
        </div>
        <div class="news">
         <div class="news-title">
           <div class="title">
             <span class="title-wrap"></span>
             <span class="title-text">新闻资讯</span>
           </div>
           <div class="more">
             <router-link :to="{name: 'News'}">查看更多> ></router-link>
           </div>
         </div>
          <div class="content">
            <div class="item-wrap cursor" v-for="(item, index) in news" :key="index" @click="$router.push('/news/' + item.id)">
              <span class="news-icon"></span>
              <div class="news-text">
                <span class="ext">{{item.title}}</span>
                 <span class="news-time">2019-05-01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services">
        <div class="title">工程案例</div>
        <div class="services-img">
          <div class="card contact" v-for="(item, index) in cases" :key="index" @click="$router.push('/case/' + item.id)">
            <img class="card-img-top" src="../images/service.png">
            <div class="card-body">
              <h5 class="card-title">甲醛检测</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as BaseService from './services/BaseService'
export default {
  name: 'Home',
  data () {
    return {
      images: [
        'https://picsum.photos/1024/480/?image=10',
        'https://picsum.photos/1024/480/?image=12',
        'https://picsum.photos/1024/480/?image=22',
        'https://picsum.photos/1024/480/?image=23'
      ], // 轮播图
      active: 0,
      contact: {
        hotline: '18862142956',
        emile: '875889022@qq.com',
        fax: '010-52486932',
        address: '工业园区独墅湖启月街1号'
      }, // 联系我们
      news: [], // 新闻资讯
      projects: [], // 项目
      cases: [] // 工程
    }
  },
  mounted () {
    // this.getBannerInfo()
    // this.getContact()
    this.getNewsInfo()
    this.getProjectInfo()
    this.getCaseInfo()
  },
  methods: {
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
          if (res.data.data.length > 4) {
            this.news = res.data.data.slice(0, 4)
          } else {
            this.news = res.data.data
          }
        })
    },
    getProjectInfo () {
      BaseService.getProjectInfo()
        .then(res => {
          if (res.data.data.length > 5) {
            this.projects = res.data.data.slice(0, 5)
          } else {
            this.projects = res.data.data
          }
        })
    },
    getCaseInfo () {
      BaseService.getEngineerInfo()
        .then(res => {
          console.log(res.data)
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
  .carousel-inner img{
    height: 450px;
  }
  .carousel-control-prev{
    margin-left:350px;
    text-align: left;
    width: auto;
    /*display: none;*/
    opacity: 0;
  }
  .carousel-control-next{
    margin-right:350px;
    text-align: right;
    width: auto;
    opacity: 0;
  }
  #carouselExampleIndicators:hover .carousel-control-prev,#carouselExampleIndicators:hover .carousel-control-next {
    /*display: inline-block;*/
    opacity: 1;
  }
  .carousel-indicators li{
    width:20px;
    height:10px;
    border-radius: 5px;
    background-color: #fff;
    background-clip: padding-box;
    border-top: none;
    border-bottom: none;
  }
  .carousel-indicators li.active{
    width:25px;
    background-color: #41903B;
  }
  .container .services .title{
    font-size:24px;
    font-weight: bold;
    height:100px;
    line-height:100px;
    text-align: center;
    color:#2a5c26;
  }
  .services-img{
    display: flex;
    justify-content: space-between;
  }
  .card{
    border:none;
    display: inline-flex;
  }
  .card .card-title{
    font-size:20px;
  }
  .card .card-body {
    text-align: center;
    margin-top: 24px;
    padding:0;
  }
  .card .card-img-top{
    width: 200px;
    height:200px;
  }
  .contact-news{
    display: flex;
    justify-content: space-between;
    margin-top:37px;
  }
  .contact {
    width: 40%;
    margin-right: 10%
  }
  .news {
    width: 50%;
  }
  .contact-news .title{
    display: flex;
    align-items: center;
    color: #41903B;
  }
  .contact-news .title .title-wrap{
    width: 8px;
    height:22px;
    background: #41903B;
    margin-right:10px;
  }
  .contact-news .title .title-text{
    font-size: 24px;
    font-weight: 600;
  }
  .contact-news .content{
    margin-top:20px;
  }
  .cursor{
    cursor: pointer;
  }
  .contact-news .content .item-wrap{
    line-height:30px;
    display: flex;
    align-items: flex-start;
    font-size: 21px;
    margin-bottom: 10px;
  }
  .contact-news .content .item-wrap .text{
    display: inline-block;
    width: 110px;
    text-align: justify;
    height: 36px;
    line-height: 36px;
    color:#000;
  }
  .contact-news .content .item-wrap .text:after{
    display: inline-block;
    width: 100%;
    content: '';
  }
  .contact-news .content .item-wrap .text-wrap{
    margin-left:10px;
    height: 36px;
    line-height: 36px;
    color:#666;
  }
  .news-title{
    display: flex;
    justify-content: space-between;
  }
  .more a{
    font-size:18px;
    color:#999
  }
  .contact-news .news .content .item-wrap{
    align-items: center;
    line-height: 37px;
  }
  .contact-news .news .content .item-wrap .news-icon{
    width: 12px;
    height: 12px;
    background: #41903B;
    margin-right:10px;
  }
  .contact-news .news .content .item-wrap .news-text{
    display: flex;
    justify-content: space-between;
    width: 99%;
  }
</style>
