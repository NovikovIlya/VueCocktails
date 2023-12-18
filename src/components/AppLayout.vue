<script setup lang="ts">
const props = defineProps({
    imgUrl: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <div class="root">
        <div :style="`background-image: url(${props.imgUrl})`" class="img"></div>
        <div class="main">
            <el-button class="btn">Get random cocktail</el-button>
            <slot/>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import '../assets/main.scss';
.root{
    display:flex;
    background-color: $background;
    min-height: 100vh;
}
.img{
    width: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

}
.main{
    position: relative;
    width: 50%;
    padding:32px 40px
}
.btn{
    position:absolute;
    top:32px;
    right: 32px;
    background-color: $accent;
    color: $background;
    border: 1px solid $accent;
    &:hover{
        background-color: $background;
        color: $accent;
    }
}
</style>