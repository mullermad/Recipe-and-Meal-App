<template>
    <header class="bg-white h-16 shadow-sm flex justify-between items-stretch">

        <router-link :to="{name:'home'}" class="ml-3 text-lg px-5 inline-flex items-center">Home</router-link>
        <div class="flex items-center justify-end gap-1  ">
            <router-link :to="{name:'byName'}" class="hover:bg-purple-100  px-2 h-full   inline-flex items-center transition-colors ">Meals by Name </router-link>
             <router-link :to="{name:'byLetter'}" class="hover:bg-purple-100 px-2 h-full inline-flex items-center" >Meals by letters  </router-link>
              <router-link :to="{name:'ingrediant'}" class="hover:bg-purple-100 px-2 h-full inline-flex items-center">Meals by ingrediants </router-link>
        </div>
    </header>
</template>

<script setup>
</script>