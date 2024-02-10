<template>
    <div class=" p-8">
   
  
   
   </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import axiosClient from '../axiosClient'





onMounted(async()=>{
  const response=await axiosClient.get('/list.php?i=list')
  console.log(response.data);
})



</script>



