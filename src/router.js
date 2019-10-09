import Vue from 'vue'
import Router from 'vue-router'
import Catalog from './views/Catalog.vue'
import Card from './views/Card.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Catalog
    },
    {
      name: 'card',
      path: '/movie/:id',
      component: Card
    },
  ]
})
