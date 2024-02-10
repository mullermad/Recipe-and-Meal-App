<template>
       <div class="bg-gray-100">
          <nav class="fixed w-full top-0 left-0 navbar ">
       <NavBar />
    </nav>
          
   
    <main class="mt-16">
         <router-view></router-view>
    </main>
</div>
</template>

<script setup>
import NavBar from './NavBar.vue';

</script>