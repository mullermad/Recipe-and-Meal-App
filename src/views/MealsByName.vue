<template>
    <div class="p-8">
        <input v-model="keyword" @change="searchByName" type="text" class="w-full rounded border-2 p-2 border-gray-200" 
         placeholder="search for meals">
    </div>
   
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
       <div v-for="meal in meals" :key="meal.idMeal" class="bg-white shadow-lg rounded-xl ">
        <router-link :to="{name:'mealdetail',params:{id:meal.idMeal}}">

       
         <img class="p-3 w-full h-48 object-cover rounded-t-xl" :src="meal.strMealThumb" alt="strMeal">
          </router-link>
         <div class="p-3">
          <h1 class=" font-bold">{{meal.strMeal}}</h1>  
                 <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse assumenda distinctio, </p>

          <div class="gap-4">
            <a class="border border-red-700 px-3 py-2 bg-red-500 text-white rounded-lg mr-2" :href="meal.strYoutube" target="_blank">YouTube</a>
        
           
         </div>
        
         </div>
        


       </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue"

import store from "../store"
import {useRoute} from 'vue-router'
const route=useRoute()
const keyword=ref('')
const meals=computed(()=>store.state.searchedMeals.meals)

const searchByName=()=>{
store.dispatch('searchMeals',keyword.value)
}

//Two way data binding  giving the route parameters to the keyword so that they can show  pn the navbars
onMounted(()=>{
  keyword.value=route.params.name;
})

</script>