<template>
  <div class="navBar">
    <div class="company-content">
      <span>常州环泰环保科技有限公司</span>
      <span>咨询电话：0519-88299177</span>
    </div>
    <div class="top-nav">
      <div class="logo">
        <img src="../images/logo.png" alt="">
      </div>
     <ul class="nav-tab">
      <li :class="{'active': tab == 'index'}" @click="switchTab('index')">
       <router-link :to="{name: 'Home'}">首页</router-link>
      </li>
      <li :class="{'active': tab == 'company'}" @click="switchTab('company')">
        <router-link :to="{name: 'Company'}">公司介绍</router-link>
      </li>
      <li :class="{'active': tab == 'news'}" @click="switchTab('news')">
        <router-link :to="{name: 'News'}">新闻资讯</router-link>
      </li>
      <li :class="{'active': tab == 'project'}" @click="switchTab('project')">
        <router-link :to="{name: 'Project'}">项目介绍</router-link>
      </li>
      <li :class="{'active': tab == 'case'}" @click="switchTab('case')">
        <router-link :to="{name: 'Case'}">工程案例</router-link>
      </li>
      <li :class="{'active': tab == 'contact'}" @click="switchTab('contact')">
        <router-link :to="{name: 'Contact'}">联系我们</router-link>
      </li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      tab: 'home'
    }
  },
  mounted () {
    this.initTab(this.$route.path)
  },
  methods: {
    initTab (path) {
      var positions = this.searchSubStr(this.$route.path, '/')
      if (positions.length > 0 && positions.length === 1) {
        this.tab = path.slice(positions[0] + 1)
      } else {
        this.tab = path.slice(positions[0] + 1, positions[positions.length - 1])
      }
    },
    switchTab (tab) {
      this.tab = tab
    },
    searchSubStr (str, subStr) {
      var positions = []
      var pos = str.indexOf(subStr)
      while (pos > -1) {
        positions.push(pos)
        pos = str.indexOf(subStr, pos + 1)
      }
      return positions
    }
  },
  watch: {
    '$route' (to, from) {
      this.initTab(to.path)
    }
  }
}
</script>

<style scoped>
  .company-content{
    display: flex;
    height: 30px;
    align-items: center;
    background: #003221;
    color: #fff;
  }
  .company-content span{
    margin-left:40px;
    font-family: KaiTi;
  }
.navBar .top-nav{
  width: 100%;
  /*background: #41903b;*/
  height:90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navBar .top-nav img{
  width:179px;
  height:69px;
  margin-left:40px;
}
.nav-tab{
  width: 80%;
  list-style: none;
  color:#fff;
  font-size:21px;
  height:60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav-tab li {
  text-align: center;
  width:98px;
  height:38px;
  line-height:38px;
  border-radius:19px;
}
.nav-tab li a {
  color: #333;
  text-decoration: none;
  height: 100%;
  display: inline-block;
  width: 100%;
  font-size:16px;
}
.nav-tab li:hover{
  cursor: pointer;
}
.nav-tab li.active{
  background:rgba(74,179,68,1);
}
  .nav-tab li.active a {
    color: #FFFFFF;
  }
</style>
