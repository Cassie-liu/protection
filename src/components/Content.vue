<template>
<div class="content-wrap">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      slide: 0,
      sliding: null,
      images: [
        'https://picsum.photos/1024/480/?image=10',
        'https://picsum.photos/1024/480/?image=12',
        'https://picsum.photos/1024/480/?image=22',
        'https://picsum.photos/1024/480/?image=23'
      ],
      active: 0
    }
  },
  methods: {
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
  }
  .carousel-control-next{
    margin-right:350px;
    text-align: right;
    width: auto;
    /*display: none;*/
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
</style>
