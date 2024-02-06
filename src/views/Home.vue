<template>
    <div class="flex justify-center p-8">
   <input type="text" class="w-full rounded border-1 p-2 border-gray-200" 
   placeholder="search for meals">
   <div>

   </div>
   </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";


const meals=computed(()=>store.state.meals);

</script>



