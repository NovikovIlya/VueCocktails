<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRootStore } from '../stores/root'
import { storeToRefs } from 'pinia'

import AppLayout from '../components/AppLayout.vue'
import CocktailThumb from '../components/CocktailThumb.vue'

const rootStore = useRootStore()
const { ingredients, cocktails, ingredientSelect } = storeToRefs(rootStore)

const getCock = () => {
  rootStore.getCocktails(rootStore.ingredientSelect)
}

const removeIngredient = ()=>{
  rootStore.setIngredient(null)
}

onMounted(() => {
  rootStore.getIngredients()
})
</script>

<template>
  <div>
    <AppLayout :isBackButtonVisible="!!ingredientSelect" :backFunc="removeIngredient" imgUrl="/src/assets/img/cocktail.jpg">
      <div class="wrapper">
        <div v-if="!ingredientSelect || !cocktails" class="info">
          <div class="title">Choose your drink</div>
          <div class="line"></div>
          <div class="select">
            <el-select
              v-model="ingredientSelect"
              filterable
              allow-create
              placeholder="Choose main ingredientSelect"
              size="large"
            >
              <el-option
                v-for="item in ingredients"
                :key="item.strIngredient1"
                :label="item.strIngredient1"
                :value="item.strIngredient1"
                @click="getCock"
              />
            </el-select>
          </div>
          <div class="text">
            Try our Delicious cocktail recipes every ocasion.Find delicioous cocktail recipe by
            ingredientSelect through out cocktail
          </div>
          <img src="/src/assets/img/mini.png" alt="mini" class="imagesMini" />
        </div>
        <div v-else class="info">
          <div class="title">COCKTAILS WITH {{ ingredientSelect }}</div>
          <div class="line"></div>
          <div class="cocktails">
            <CocktailThumb
              v-for="cocktail in cocktails"
              :key="cocktail.idDrink"
              :cocktail="cocktail"
            />
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="scss">
@import '../assets/main.scss';

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  margin-bottom: 60px;
  font-size: 30px;
}
.info {
  padding-top: 80px;
  text-align: center;
}
.line {
  margin-bottom: 60px;
}
.select {
  width: 200px;
  margin: 0 auto;
  margin-bottom: 60px;
}
.text {
  margin-bottom: 60px;
}

.cocktails {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: none;
}
.cocktails::-webkit-scrollbar {
  width: 10px;
}

.cocktails::-webkit-scrollbar-track {
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: #f9f9fd;
}

.cocktails::-webkit-scrollbar-thumb {
  background-color: #f2bf93;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.25) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0.25) 75%,
    transparent 75%,
    transparent
  );
}
</style>
