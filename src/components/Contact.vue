<template>
  <div class="container">
    <div class="contact">
      <div class="maps">
        <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
          <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
            <bm-label content="" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
          </bm-marker>
          <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        </baidu-map>
      </div>
      <div class="right">
        <div class="item-wrap">
          <img src="../images/phone.png">
          <label class="text">服务热线</label>:
          <span class="text-wrap">{{contact.hotline}}</span>
        </div>
        <div class="item-wrap">
          <img src="../images/fax.png">
          <label class="text">传真</label>:
          <span class="text-wrap">{{contact.fax}}</span>
        </div>
        <div class="item-wrap">
          <img src="../images/email.png">
          <label class="text">公司邮箱</label>:
          <span class="text-wrap">{{contact.email}}</span>
        </div>
        <div class="item-wrap">
          <img src="../images/location.png">
          <label class="text">公司地址</label>:
          <span class="text-wrap">{{contact.address}}</span>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="item-info">
        <label>电话</label>
        <span>{{contact.hotline}}</span>
      </div>
      <div class="item-info">
        <label>传真</label>
        <span>{{contact.fax}}</span>
      </div>
      <div class="item-info">
        <label>邮箱</label>
        <span>{{contact.email}}</span>
      </div>
      <div class="item-info">
        <label>地址</label>
        <span>{{contact.address}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import BMapComponent from './components/BMapComponent'
import * as BaseService from './services/BaseService'
import BaiduMap from 'vue-baidu-map/components/Map/Map'
export default {
  name: 'Contact',
  data () {
    return {
      center: {
        lng: 0,
        lat: 0
      }, // 经纬度
      zoom: 3, // 地图展示级别
      contact: {}
    }
  },
  components: {
    BaiduMap
  },
  created () {
    this.getContactInfo()
  },
  methods: {
    getContactInfo () {
      BaseService.getContactInfo()
        .then(res => {
          this.contact = res.data.data
          this.center.lng = Number(this.contact.longitude)
          this.center.lat = Number(this.contact.latitude)
        })
    },
    handler ({BMap, map}) {
      this.center.lng = this.contact.longitude
      this.center.lat = this.contact.latitude
      this.zoom = 15
    }
  }
}
</script>

<style scoped>
.contact {
  margin-top:20px;
  display: flex;
  justify-content: space-between;
  margin-bottom:20px;
}
  .contact .maps{
    width: 58%;
    margin-right:2%;
    height:500px;
    /*border:1px solid #666;*/
  }
  .maps .map {
    width:100%;
    height:100%;
  }
  .contact .right{
    width: 40%
  }
  .item-wrap{
    line-height:30px;
    display: flex;
    align-items: flex-start;
    font-size: 21px;
    margin-bottom: 10px;
  }
  .item-wrap .text{
    display: inline-block;
    width: 110px;
    text-align: justify;
    height: 36px;
    line-height: 36px;
    color:#000;
  }
  .item-wrap .text:after{
    display: inline-block;
    width: 100%;
    content: '';
  }
  .item-wrap .text-wrap{
    margin-left:10px;
    height: 36px;
    line-height: 36px;
    color:#666;
  }
  .container .info{
    display: none;
  }
  .container  .info .item-info{
    height: 50px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    border-bottom: 1px solid #ddd;
    align-items: center;
  }
  .container  .info .item-info label{
    margin-bottom: 0;
  }
  @media screen  and (max-device-width: 768px){
   .contact .maps {
      width: 100% !important;
      margin-right:0;
     height:300px;
    }
    .right{
      display: none;
    }
    .container .info{
      display: block;
    }
  }
</style>
