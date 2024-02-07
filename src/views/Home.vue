<template>
    <div class=" p-8">
   
  <div class="gap-2 flex p-3 sm:flex sm:inline-block">
    <router-link :to="{name:'byLetter',params:{letter}}" v-for="letter of letters" :key="letter" class="mt-2 ml-4">
{{ letter}}
</router-link>
  </div>
   
   </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from '../axiosClient'



const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(async()=>{
  const response=await axiosClient.get('/list.php?i=list')
  console.log(response.data);
})



</script>



