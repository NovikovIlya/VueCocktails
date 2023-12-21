<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import AppLayout from '../components/AppLayout.vue'
import { COCKTAIL_RANDOM,INGREDIENT_PIC } from '../constants/api'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const route = useRoute()
const router = useRouter()

const cocktail = ref<any>(null)

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
    const ingredient = cocktail.value[`strIngredient${i}`]
   
    ingredients.push(ingredient)
  }
  return ingredients
})



const onSwiper = ()=>{

}

const onSlideChange = ()=>{

}

onMounted(() => {
  getCoctail()
})
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout  :img-url="cocktail?.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail?.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper
              class="swiper"
              :slides-per-view="3"
              :space-between="50"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide v-for="ingredient in ingredients" :key="ingredient" >
                <img :src="`${INGREDIENT_PIC}${ingredient}-Small.png`" alt="logo"/>
                <div class="name">{{ ingredient }}</div>
              </swiper-slide>
             
            </swiper>
          </div>
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
.slider{
  padding: 50px 0;
}
.swiper{
  width: 586px;
}
.name{
  padding-top: 20px;
}
</style>
