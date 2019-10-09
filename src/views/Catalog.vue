<template>
  <div>
    <header class="header">
      <h1>Welcome to movies catalog</h1>
    </header>
    <div class="movies-category wrap">  
      <div class="movies-category-list">      
        <mItem v-for="item in arr" :item="item"></mItem>
      </div>
      <div class="ta-c">
        <span @click="loadPoster" class="movies-category-load-more">Load more</span>
      </div>
    </div>
  </div>
</template>

<script>
import mItem from '@/components/moviesItem.vue'

export default {
  name: 'catalog',
  components: {
    mItem
  },

  data() {
    return {
      page: 0,      
      arr: []   
    };
  },

  mounted() {
    this.loadPoster()
  },

  computed: {
    request(){
        return `${this.$store.state.url}/popular?api_key=${this.$store.state.apiKey}&page=${this.page}`;  
    }  
  },

  methods: {
    loadPoster() {            
      this.page++;
      axios.get(this.request)
      .then(function(response){
          let newData = this.arr.concat(response.data.results);
          this.arr = newData;
      }.bind(this));   
    }
  }

}

</script>

<style lang="less">
.header {
  background-color: #eee;
  text-align:center;
  padding:2rem 0;
}
.wrap {
  max-width:1920px;
  min-width:300px;
  margin:0 auto;
}
.ta-c {
  text-align:center;
}
.movies-category {
  padding-bottom:50px;
  &-list {
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    padding-bottom:30px;
  }
  &-load-more {
    cursor:pointer;
    padding:20px 60px;
    font-size:18px;
    color:#fff;
    background-color: #2aa6dc;
    display:inline-block;
    transition-duration:0.2s;
    border-radius:4px;
    &:hover {
      background-color: #56b3dc;
    }
  }
}
</style>
