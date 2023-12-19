import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '@/pages/CocktailRandom.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cocktails/:id',
      name: 'cocktails',
      component: Cocktail
    },
    {
      path: '/random',
      name: 'cocktailrandom',
      component: CocktailRandom
    },
    
  ]
})

export default router
