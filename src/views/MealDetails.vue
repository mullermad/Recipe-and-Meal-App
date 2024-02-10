<template>
 
   <div class="w-[800px] mx-auto" v-for="ml in meal.meals" :key="ml.idMeal">
    <h1 class="font-bold mb-6 ml-6 text-lg">{{ml.strMeal}}</h1>
    <img class="w-[400px] items-center ml-8" :src="ml.strMealThumb" :alt="ml.strMeal">
<div class=" gap-5">
    <div class="flex m-2 gap-6">

<div>
    <span class="font-bold text-lg">Catagory :</span>
    <span>{{ml.strCategory}}</span>
</div>
<div>
    <span class="font-bold text-lg">Area :</span>
    <span>{{ml.strArea}}</span>
</div>
</div>
<div>
    <p>{{ml.strInstructions}}</p>
</div>
<div class="flex">
    <div class="w-1/2">
      <span class="font-bold text-lg">Ingredients:</span>

      <span class="block">{{ ml.strIngredient1 }}</span>
      <span class="block">{{ ml.strIngredient2 }}</span>
      <span class="block">{{ ml.strIngredient3 }}</span>
      <span class="block">{{ ml.strIngredient4 }}</span>
      <span class="block">{{ ml.strIngredient5 }}</span>
      <span class="block">{{ ml.strIngredient6}}</span>
      <span class="block">{{ ml.strIngredient7 }}</span>
      <span class="block">{{ ml.strIngredient8 }}</span>
      <span class="block">{{ ml.strIngredient9 }}</span>
      <span class="block">etc...</span>
    </div>
    <div class="w-1/2">
      <span class="font-bold text-lg">Measures:</span>

      <span class="block">{{ ml.strMeasure1 }}</span>
      <span class="block">{{ ml.strMeasure2 }}</span>
      <span class="block">{{ ml.strMeasure3 }}</span>
      <span class="block">{{ ml.strMeasure4 }}</span>
      <span class="block">{{ ml.strMeasure5 }}</span>
      <span class="block">{{ ml.strMeasure6 }}</span>
      <span class="block">{{ ml.strMeasure7 }}</span>
      <span class="block">{{ ml.strMeasure8 }}</span>
      <span class="block">{{ ml.strMeasure9 }}</span>
      <span class="block">etc...</span>
    </div>
  </div>

<div class="flex">
          <div  class="mr-2 p-3">
            <a class="border border-red-700 px-3 py-2 bg-red-500 text-white rounded-lg " :href="ml.strYoutube" target="_blank">YouTube</a>
        
           
         </div>
              <router-link to="/" class="border border-purple-700 px-3 py-2  hover:bg-purple-500 hover:text-white rounded-lg">
                View original surce
            </router-link>
            </div>
</div>
   </div>
   


    
</template>

<script setup>
import { onMounted, ref }from "vue";
import axiosClient from "../axiosClient";
import {useRoute} from 'vue-router';
const meal=ref('')
const route=useRoute()


onMounted(()=>{
    
axiosClient.get(`lookup.php?i=${route.params.id}`).then(({data})=>{
    debugger;
    meal.value=data;
})

})
</script>