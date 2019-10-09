<template>  
  <div class="movies-category-list__item">
    <router-link class="movies-category-list__item-link" :to="{name: 'card', params: {id: item.id}}">   
      <img :src="`${imgUrl}/w500${item.poster_path}`" :alt="item.title">    
      <div class="movies-category-list__item-title">{{item.title}}</div>
    </router-link>
  </div>  
</template>

<script>
export default {
  props: ['item'],
  computed: {
    imgUrl(){
      return this.$store.state.imgUrl;  
    }  
  } 
}
</script>

<style lang="less" scoped>
.movies-category-list__item {
  min-width:300px;
  flex-basis:20%;
  padding:20px;
  box-sizing: border-box;
  &-link{
    text-decoration:none;
    img {
      display:block;
      max-width:100%;
      margin-bottom:10px;
      transition-duration:0.2s;
    }
    &:hover {
      img {
        opacity:.8;
      }
    }    
  }  
  &-title {
    text-align:center;
    font-size:18px;    
    color:#2a2a2a;
  }
}

</style>
