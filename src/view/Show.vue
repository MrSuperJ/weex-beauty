<template>
    <scroller class="photo" >
          <v-item :Info="s" v-for="(s,index) in List" :key="index" ></v-item>
    </scroller>
</template>

<script>
import vItem from '../components/item.vue';
export default {
  name:'home',
  components:{
    vItem
  },
  data(){
    return{
    }
  },
  computed:{
    index:function(){
      return this.$route.params.index
    },
    List:function(){
      return this.$route.params.list
    }
  },
  created(){
  }
}
</script>

<style lang="css">
.photo{
  width: 700px;
}
</style>
