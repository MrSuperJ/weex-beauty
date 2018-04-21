<template>
    <div class="item">
        <div class="">{{Info.name}}  </div>
        <image  class="imgs" :src="Info.url" resize="contain"></image>
    </div>
</template>

<script>
export default {
  name:'Item',
  props:{
    Info:Object
  }
}
</script>

<style lang="css">
  .item{
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
  }
  .imgs {
    width: 600px;
    height: 800px;
  }
</style>
