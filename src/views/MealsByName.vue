<template>
    <div class="p-8">
        <input v-model="keyword" @change="searchByName" type="text" class="w-full rounded border-2 p-2 border-gray-200" 
   placeholder="search for meals">
    </div>
</template>

<script setup>
import { ref } from "vue"
import axiosClient from "../axiosClient"


const keyword=ref('')

const searchByName=()=>{
axiosClient.get(`search.php?s=${keyword.value}`)
}
</script>