import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '@/pages/CocktailRandom.vue'
import {ROUTER_PATHS} from '@/constants/router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ROUTER_PATHS.HOME,
      name: ROUTER_PATHS.HOME,
      component: Home
    },
    {
      path: ROUTER_PATHS.COCKTAIL,
      name: ROUTER_PATHS.COCKTAIL,
      component: Cocktail
    },
    {
      path: ROUTER_PATHS.COCKTAIL_RANDOM,
      name: ROUTER_PATHS.COCKTAIL_RANDOM,
      component: CocktailRandom
    },
    
  ]
})

export default router
