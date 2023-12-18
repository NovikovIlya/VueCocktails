<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppLayout from '../components/AppLayout.vue'
import { useRootStore } from '../stores/root'
import { storeToRefs } from 'pinia'

const rootStore = useRootStore()

const { ingredients } = storeToRefs(rootStore)

const ingredient = ref<any>(null)

onMounted(() => {
  rootStore.getIngredients()
})
</script>

<template>
  <div>
    <AppLayout imgUrl="/src/assets/img/cocktail.jpg">
      <div class="wrapper">
        <div class="info">
          <div class="title">Choose your drink</div>
          <div class="line"></div>
          <div class="select">
            <el-select v-model="ingredient" placeholder="Choose main ingredient" size="large">
              <el-option
                v-for="item in ingredients"
                :key="item.strIngredient1"
                :label="item.strIngredient1"
                :value="item.strIngredient1"
              />
            </el-select>
          </div>
          <div class="text">
            Try our Delicious cocktail recipes every ocasion.Find delicioous cocktail recipe by
            ingredient through out cocktail
          </div>
          <img src="/src/assets/img/mini.png" alt="mini" class="imagesMini" />
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
  padding: 80px;
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
</style>
