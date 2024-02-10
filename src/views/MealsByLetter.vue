<template>
    <div class="gap-2 flex p-3 sm:flex sm:inline-block">
    <router-link :to="{name:'byLetter',params:{letter}}" v-for="letter of letters" :key="letter" class="mt-2 ml-4">
{{ letter}}
</router-link>
  </div>

  <p>{{meals}}</p>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route=useRoute();
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals=store.state.searchedMealsByLetter;

onMounted(()=>{
 store.dispatch("searchMealsByLetter",route.params.letter)
 
})

</script>