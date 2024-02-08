<template>
    <div class="p-8">
        <input v-model="keyword" @change="searchByName" type="text" class="w-full rounded border-2 p-2 border-gray-200" 
         placeholder="search for meals">
    </div>
   
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3 p-8">
       <div v-for="meal in meals" :key="meal.idMeal" class="bg-white shadow-lg rounded-xl ">
         <img class="p-3 w-full h-48 object-cover rounded-t-xl" :src="meal.strMealThumb" alt="strMeal">
         <div class="p-3">
          <h1 class=" font-bold">{{meal.strMeal}}</h1>
         <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse assumenda distinctio, </p>
          <div class="gap-4">
            <a class="mr-3  border border-red-700 px-3 py-2 bg-red-500 text-white rounded-lg" :href="meal.strYoutube" target="_blank">YouTube</a>
        
            <router-link to="/" class=" ml-2 border border-purple-700 px-3 py-2  hover:bg-purple-500 hover:text-white rounded-lg">
                View
            </router-link>
         </div>
        
         </div>
        


       </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue"

import store from "../store"


const keyword=ref('')
const meals=computed(()=>store.state.searchedMeals.meals)

const searchByName=()=>{
store.dispatch('searchMeals',keyword.value)
}
</script>