<template>
  <div class="movies-page">  
    <div class="movies-page-header">
      <img :src="`${this.$store.state.imgUrl}/w1280${info.backdrop_path}`" :alt="info.title" />
      <div class="movies-page-header-info">
        <router-link class="back-link" to="/">Home</router-link> 
        <h1>{{info.title}}</h1>
        <div class="movies-page-header-info-popularity"><div>Popularity</div>{{info.popularity}}</div>
      </div>
    </div>
    <div class="movies-page-film wrap wrap_1280">
      <div class="movies-page-film-cover">       
        <img :src="`${this.$store.state.imgUrl}/w500${info.poster_path}`" :alt="info.title" />         
      </div>
      <div class="movies-page-film-info">
        <h1>{{info.title}}</h1>
        <div>
          <div>
            <p><b>Description:</b></p>
           </div>
           <p>{{info.overview}}</p>
        </div> 
        <p>
          <b>Genres: </b>
          <span class="movies-page-film-info-genres" v-for="item in info.genres">
            {{item.name}}
          </span>          
        </p>
        <p><b>Release Date: </b>{{info.release_date}} ({{info.status}})</p> 
        <p><b>Original language: </b>{{info.original_language}}</p> 
        <p><b>Budget: </b>{{info.budget}}$</p> 
        <p><b>Runtime: </b>{{info.runtime}} minutes</p>  
        <p><b>Homepage: </b><a :href="info.homepage">{{info.homepage}}</a></p>  
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'card',
  data() {
    return {
      number: this.$router.currentRoute.params.id,
      info: null,
    };
  },
  mounted() {
    axios
      .get(`${this.$store.state.url}/${this.number}?api_key=${this.$store.state.apiKey}`)
      .then(response => (this.info = response.data))
  }
}

</script>

<style lang="less">
  .wrap_1280 {
    max-width:1280px;
  }
  .back-link {
    color:#fff;
    font-size:16px;
  }
  .movies-page {
    &-header {
      position:relative;
      overflow:hidden;
      background:#000;   
      padding:3rem 2rem;   
      margin-bottom:3rem;   
      img {
        width: 100%;
        height:inherit;
        position: absolute;
        left: 50%;
        top: 50%;  
        transform: translate(-50%,-50%);    
        opacity:.5;  
        object-fit: cover;
      }
      &-info {
        position:relative;
        z-index:2;
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        align-items: center; 
        height:inherit;        
        @media (max-width:767px) {
          flex-direction:column;
        }         
        h1 {
          color:#fff;
          font-size:3rem;
        }
        &-popularity {
          color:rgba(255,255,255,0.8);
          font-size:16px;
          text-align:center;
          
        }
      }
    }
    &-nav {}
    &-film {
      display:flex;
      flex-wrap:wrap; 
      @media (max-width:767px) {
        flex-direction:column;
      }           
      &-cover {
        flex-basis:35%;
        text-align: center;
         @media (max-width:767px) {
          flex-basis:100%;
          max-width: 400px;
          margin:0 auto;
        }       
        img {
          max-width: 100%;            
        }
      }
      &-info {
        padding:2rem 4rem;
        flex-basis:65%;
        box-sizing: border-box;
        h1 {
          font-size:3rem;
        }
        p{
           font-size:16px;
           line-height:1.5em;
        }
        &-genres {
          background:#eee;
          padding:3px 5px;
          margin-right:10px;
        }
      }
    }
  }
</style>
