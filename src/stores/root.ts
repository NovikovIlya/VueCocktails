import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { INGREDIENTS_URL } from '@/constants'

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [] as any
  }),
  // getters: {
  //   doubleCount: (state) => state.count * 2
  // },
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL)
      this.ingredients = data?.data?.drinks
    }
  }})
