<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import AppLayout from '../components/AppLayout.vue'
import { COCKTAIL_RANDOM } from '../constants/api'

const route = useRoute()
const router = useRouter()

const cocktail = ref<any>(null)
const cocktailId = computed(() => {
  return route.path.split('/').pop()
})

const getCoctail = async () => {
  const data = await axios.get(COCKTAIL_RANDOM)
  cocktail.value = data?.data?.drinks[0]
}

const ingredients = computed(() => {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) {
      break
    }
    const ingredient: any = {}
    ingredient.name = cocktail.value[`strIngredient${i}`]
    ingredient.measure = cocktail.value[`strMeasure${i}`]
    ingredients.push(ingredient)
  }
  return ingredients
})

const goBack = () => {
  router.go(-1)
}

onMounted(() => {
  getCoctail()
})
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :back-func="goBack" :img-url="cocktail?.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail?.strDrink }}</div>
          <div class="line"></div>

          <div class="instructions">
            {{ cocktail?.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';
.list-item {
  text-align: center;
}
</style>
