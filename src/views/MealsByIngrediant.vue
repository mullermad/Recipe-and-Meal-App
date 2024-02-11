<template>
   <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
   
         <div v-for="meal in meals" :key="meal.idMeal" class="bg-white shadow-lg rounded-xl ">
          
         <img class="p-3 w-full h-48 object-cover rounded-t-xl" :src="meal.strMealThumb" alt="strMeal">
         
         <div class="p-3">
          <h1 class=" font-bold">{{meal.strMeal}}</h1>  
                 <p class="mb-4">{{meal.strInstructions}}</p>

          <div class="gap-4">
            <a class="border border-red-700 px-3 py-2 bg-red-500 text-white rounded-lg mr-2" :href="meal.strYoutube" target="_blank">YouTube</a>
        
           
         </div>
        
         </div>
        


         </div> 

         <div v-if="!meals.length">
            <p>No Ingredient found here </p>
         </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue"
import { useRoute } from "vue-router";
import store from "../store";

const meals=computed(()=>store.state.searchedMealsByIngrediant);

const route=useRoute();
onMounted(()=>{
   
 store.dispatch("searchMealsByIngrediant",route.params.ingrediant)
 
 
})

</script>