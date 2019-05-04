<template>
  <div class="footer-content">
    <div class="container">
     <ul class="nav-tab">
       <li>
         <router-link :to="{name: 'Home'}">首页</router-link>
       </li>
       <li>
         <router-link :to="{name: 'Company'}">公司介绍</router-link>
       </li>
       <li>
         <router-link :to="{name: 'News'}">新闻资讯</router-link>
       </li>
       <li>
         <router-link :to="{name: 'Project'}">项目介绍</router-link>
       </li>
       <li>
         <router-link :to="{name: 'Case'}">工程案例</router-link>
       </li>
       <li>
         <router-link :to="{name: 'Contact'}">联系我们</router-link>
       </li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-content{
  width:100%;
  background: #f1f1f1;
  display: flex;
  align-items: center;
}
.nav-tab{
  list-style: none;
  font-size:21px;
  display: flex;
  align-items: center;
  height: 60px;
}
  .nav-tab li {
    width: 200px;
    text-align: center;
  }
  .nav-tab li a {
    color:#000;
    text-decoration: none;
  }
</style>
