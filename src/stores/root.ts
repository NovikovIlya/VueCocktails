import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { INGREDIENTS_URL, COCKTAILS_BY_INGREDIENTS } from '@/constants'

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [] as any,
    ingredientSelect : null as any,
    cocktails: [] as any
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL)
      this.ingredients = data?.data?.drinks
    },
    async getCocktails(ingredient:any) {
      const data = await axios.get(`${COCKTAILS_BY_INGREDIENTS}${ingredient}`)
      this.cocktails = data?.data?.drinks
    },
    setIngredient(val:any){
      this.ingredientSelect = val
    }
  }
})
