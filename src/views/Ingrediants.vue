<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-3">Ingrediants</h1>
   <div v-for="ing in ingrediants " :key="ing.idIngredient" class=" bg-white rounded p-3 mb-3 shadow">
    <div class="text-2xl font-bold">{{ing.strIngredient}}</div>
    <p>{{ing.strDescription}}</p>

   </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";




const ingrediants=ref([]);


onMounted(()=>{
    axiosClient.get('list.php?i=list').then(({data})=>{
        debugger;
ingrediants.value=data.meals;
    })

})

</script>