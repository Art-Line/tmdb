import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'https://api.themoviedb.org/3/movie',
    apiKey: '2958340674aac214ebdd74e915a7a36d',
    imgUrl: 'https://image.tmdb.org/t/p'
  },
  mutations: {

  },
  actions: {

  }
})
