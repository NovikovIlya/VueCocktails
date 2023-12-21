<script setup lang="ts">
import {
    Back
} from '@element-plus/icons-vue'
import {useRoute,useRouter} from 'vue-router'
import { computed } from 'vue';
import {ROUTER_PATHS} from '../constants/router'

const props = defineProps({
    imgUrl: {
        type: String,
        required: true,
    },
    backFunc:{
        type: Function,
    },
    isBackButtonVisible:{
        type:Boolean,
        default: true,
    }
})

const route = useRoute()
const router = useRouter()

const routerName = computed(()=>{
    return route.name
})

const goForCocktalRandom = ()=>{
    router.push(ROUTER_PATHS.COCKTAIL_RANDOM)
    console.log('routerName.value',routerName.value)
    console.log('ROUTER_PATHS.COCKTAIL_RANDOM',ROUTER_PATHS.COCKTAIL_RANDOM)
    
    //Если текущая страница - случайный коктейль
    if(routerName.value === ROUTER_PATHS.COCKTAIL_RANDOM){
        router.go(0)
    }
}

const goBack = ()=>{
    props.backFunc ? props.backFunc() : router.go(-1)
}

</script>

<template>
    <div class="root">
        <div :style="`background-image: url(${props.imgUrl})`" class="img"></div>
        <div class="main">
            <div class="btns">
                <el-button v-if="isBackButtonVisible" @click="goBack" type="primary" :icon="Back" circle class="back"/>
                <el-button @click="goForCocktalRandom" class="btn">Get random cocktail</el-button>
            </div> 
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
.btns{
    display: flex;
    justify-content: space-between;
    align-self: center;
}
.back{
    background-color: transparent;
    border-color: white;
    &:hover{
        border-color: red;
    }
}
</style>