<template >
  <div>
    <slider class="slider" interval="3000" auto-play="true">
     <div class="frame" v-for="(img,i) in imageList" @click="goInfo(i)" :key="i" v-if='imageList.length>0'>
       <image class="image" resize="cover" :src="img.url"></image>
       <text class='text'>1</text>
     </div>
   </slider>
  </div>
</template>

<script>
import {getImgUrl} from '../api';
export default {
  name:'Swiper',
  data(){
    return{
      resData:[]
    }
  },
  computed:{
    imageList:function(){
      if(this.resData.length>0){
        return [
          this.resData[0][0],
          this.resData[1][0],
          this.resData[2][0],
          this.resData[3][0],  
          ]
      } else{
        return []
      }
     
    }
  },
  methods:{
    goInfo:function(i){
      this.$router.push({name:'show',params:{index:i+1,list:this.resData[i]}})
    }
  },
  mounted(){
    getImgUrl().then(res=>{
      this.resData=res.data
    })
  }
}
</script>

<style scoped>
.main{
  text-align: center;
}
.image {
  width: 700px;
  height: 400px;
}
.slider {
  margin-top: 25px;
  margin-left: 25px;
  width: 700px;
  height: 400px;
}
.text{
  width: 700px;
  height: 100px;
  /* background:rgb(255, 255, 255); */
  color:#333;
  flex:1;
  margin-top:-40px;
  text-align: center;

}
</style>
