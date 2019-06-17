<template>
  <div class="layout">
    <!--<div class="header container">-->
      <!--<img src="../images/logo.png" alt="">-->
    <!--</div>-->
    <div class="content">
      <NavBar></NavBar>
      <div class="top_header">{{title}}</div>
      <Content></Content>
    </div>
    <div class="footer">
     <Footer></Footer>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
import Content from './Content'
import Footer from './Footer'
export default {
  name: 'LayOut',
  data () {
    return {
      title: ''
    }
  },
  components: {
    NavBar,
    Content,
    Footer
  },
  mounted () {
    this.initTitle()
  },
  methods: {
    initTitle () {
      if (this.$route.path.indexOf('/company') > -1) {
        this.title = '公司介绍'
      } else if (this.$route.path.indexOf('/news') > -1) {
        this.title = '新闻资讯'
      } else if (this.$route.path.indexOf('/project') > -1) {
        this.title = '项目介绍'
      } else if (this.$route.path.indexOf('/case') > -1) {
        this.title = '工程案例'
      } else if (this.$route.path.indexOf('/contact') > -1) {
        this.title = '联系我们'
      }
    }
  },
  watch: {
    '$route': {
      handler (to, from) {
        this.initTitle()
      }
    }
  }
}
</script>

<style scoped>
  .layout{
    display: flex;
    flex-direction: column;
    -webkit-box-flex:1;
    -webkit-flex:1;
    flex:1;
    min-height:100vh;
  }
.header{
  height: 120px;
  line-height:120px;
  flex:0 1 100px;
  display: -webkit-box;
}
.content{
  webkit-box-flex:1;
  -webkit-flex:1;
  flex:1;
  /*overflow-y: auto;*/
}
  .footer{
    height:120px;
    display:-webkit-box;
    /*margin-top:75px;*/
  }
  .top_header{
    height:50px;
    background: #4AB344;
    color:#fff;
    font-family: KaiTi;
    font-size:1.5rem;
    /*display: flex;*/
    justify-content: center;
    align-items: center;
    display: none;
  }
  @media only screen and (max-device-width: 768px) {
   .layout .navBar, .layout .footer{
      display: none;
    }
    .layout .top_header {
      display: flex;
    }
  }
</style>
