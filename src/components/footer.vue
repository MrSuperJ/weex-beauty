<template>
    <div class="nav">
        <div  class="navItems" v-for='(s,i) in menuList' :key='i' @click="goItem(s)">
          <image class="bottom_nav_icon" :src="s.checkUrl" v-if='i===index-1'></image>
          <image class="bottom_nav_icon" :src="s.url" v-else></image>
          <text class="bottom_nav_text router-link-active" v-if='i===index-1'>{{s.name}}</text>
          <text class="bottom_nav_text" v-else>{{s.name}}</text>
        </div>
    </div>
</template>

<script>
const main='http://47.100.104.66:7001';   
export default {
  data(){
    return {
      menuList:[
        {
          url:main+'/public/imgs/bottom_nav/home_dark_icon.png',
          checkUrl:main+'/public/imgs/bottom_nav/home_icon.png',
          route:'/home',
          name:'首页'
        },
         {
          url:main+'/public/imgs/bottom_nav/collect_dark_icon.png',
          checkUrl:main+'/public/imgs/bottom_nav/collect_icon.png',
          route:'/',
          name:'收藏'
        },
         {
          url:main+'/public/imgs/bottom_nav/heart_dark_icon.png',
          checkUrl:main+'/public/imgs/bottom_nav/heart_icon.png',
          route:'/',
          name:'关注'
        },
         {
          url:main+'/public/imgs/bottom_nav/head_dark_icon.png',
          checkUrl:main+'/public/imgs/bottom_nav/head_icon.png',
          route:'/',
          name:'我的'
        },
      ],
      index:0,
    }
  },
  watch:{
    $route:function(to,from){
        var routes=to.path
        switch(routes){
          case '/':
              this.index=0;
              break;
          case '/home':
              this.index=1;
              break;
          default:
              this.index=0;
        }
    }
  },
  methods:{
    goItem(s){
      this.$router.push({path:s.route})
    }
  }
}
</script>

<style lang="css">
.router-link-active {
        color: #d43d3d;
}
.nav {
    height: 100px;
    position: fixed;
    left: 0;
    right:0;
    bottom: 0;
    font-size: 10px;
    z-index: 1000;
    opacity: 1;
    flex-direction: row;
}
 .navItems {
    color: #999999;
    flex:1;
    justify-content: center;
    align-items: center;  
}
.bottom_nav_icon{
  width:50px;
  height: 50px;
}
 .bottom_nav_text{
  height: 50px;
  text-align: center;
}
</style>
