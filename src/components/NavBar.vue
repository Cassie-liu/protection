<template>
  <div class="navBar">
    <div class="container">
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
      this.tab = path.slice(path.indexOf('/') + 1)
      console.log(this.tab)
    },
    switchTab (tab) {
      this.tab = tab
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
.navBar{
  width: 100%;
  background: #41903b;
  height:60px;
}
.nav-tab{
  list-style: none;
  color:#fff;
  font-size:21px;
  height:60px;
  display: flex;
  align-items: center;
}
.nav-tab li {
  width: 200px;
  height:60px;
  line-height:60px;
  text-align: center;
}
.nav-tab li a {
  color: #fff;
  text-decoration: none;
  height: 100%;
  display: inline-block;
  width: 100%;
}
.nav-tab li:hover{
  cursor: pointer;
}
.nav-tab li.active{
  background: #2a5c26;
}
</style>
