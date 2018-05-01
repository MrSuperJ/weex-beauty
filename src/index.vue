<template>
  <div class="wrapper">
    <router-view/>
    <footer v-if='showFooter'></footer>
  </div>
</template>

<script>
import footer from './components/footer.vue'
export default {
  name: 'App',
  components:{
    footer
  },
  computed:{
    showFooter(){
      var routes=this.$route.path
      if(routes==='/home'||routes==='/'||routes==='/collect'||routes==='/my'||routes==='/heart') return true
      else return false
    }
  },
  data () {
    return {
      // logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  methods:{
  },
  watch:{
    $route:function(from,to){
      window.scrollTo(0,0)
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
