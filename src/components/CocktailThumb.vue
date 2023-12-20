<script setup lang="ts">

const props = defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <div :style="`background-image:url(${cocktail.strDrinkThumb})`" class="pic"></div>
      <div class="name">{{ cocktail.strDrink }}</div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

.root {
  width: calc((100% - 76px) / 3);
  margin: 0 auto;
  padding-left: 10px;
}
.pic {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
}
.name {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  color:white
}
</style>
