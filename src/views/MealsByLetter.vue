<template>

  <div>
    <router-link :to="{name:'byLetter',params:{letter}}" v-for="letter of letters" :key="letter" class="mt-2 ml-4">
      {{ letter }}
    </router-link></div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
         <div v-for="meal in meals.meals" :key="meal.idMeal" class="bg-white shadow-lg rounded-xl ">
          

       
         <img class="p-3 w-full h-48 object-cover rounded-t-xl" :src="meal.strMealThumb" alt="strMeal">
         
         <div class="p-3">
          <h1 class=" font-bold">{{meal.strMeal}}</h1>  
                 <p class="mb-4">{{meal.strInstructions}}</p>

          <div class="gap-4">
            <a class="border border-red-700 px-3 py-2 bg-red-500 text-white rounded-lg mr-2" :href="meal.strYoutube" target="_blank">YouTube</a>
        
           
         </div>
        
         </div>
        


         </div> 
    </div>

 
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route=useRoute();
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals=computed(()=>store.state.searchedMealsByLetter);


watch(route,()=>{
  store.dispatch("searchMealsByLetter",route.params.letter)
})

onMounted(()=>{
 store.dispatch("searchMealsByLetter",route.params.letter)
 
})

</script>