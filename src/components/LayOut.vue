<template>
  <div class="layout">
    <div class="header container">
      <img src="../images/logo.png" alt="">
    </div>
    <div class="content">
      <NavBar></NavBar>
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
    return {}
  },
  components: {
    NavBar,
    Content,
    Footer
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
    height:230px;
    display:-webkit-box;
    margin-top:75px;
  }
</style>
