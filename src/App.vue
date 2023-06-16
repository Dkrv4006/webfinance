
<template>
<Header>

<router-view v-slot="{ Component }">
   <transition name="fade" >
    <component :is="Component" />
</transition>
</router-view>
</Header>
</template>
<script setup>

import { onBeforeMount,onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from '@/components/header/Header.vue';

 
</script>




<style scoped>

body, html{
    background: #000000;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* color: #ffffff; */
  background: #000000;
}
.fade-enter-from{
      opacity: 0;
      transform: translateX(100px);
}
.fade-enter-active{
      transition: ass 0.3s ease-out;
}
.fade-leave-to {
      opacity: 0;
      transform: translateX(-100px);
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}

</style>
