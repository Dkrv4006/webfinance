<template>
  <div>
    <v-btn @click="selectedTheme('myCustomBlueTheme')" color="blue">Blue theme</v-btn>
    <v-btn @click="selectedTheme('myCustomYellonTheme')" color="#ffff00">Yellon theme</v-btn>
    <v-btn @click="selectedTheme('myCustomPinckTheme')" color="#FF1867">Pinck theme</v-btn>
    <v-btn @click="selectedTheme('myCustomRedTheme')" color="#ff0000">Pinck theme</v-btn>

  </div>
</template>

<script setup>
import { useStore } from '@/store';

import { onMounted, ref } from "vue"
import { useTheme } from 'vuetify'


const color = ref('')
const theme = useTheme()

onMounted( () => {
  const colorData = localStorage.getItem('colorData')

  color.value = JSON.parse(colorData)
    
      console.log(color.value);
    //  theme.global.theme.value = colorData
    
     theme.global.name.value = theme.global.current.value.dark ? color.value : colorData
  // theme.global.name.value = color.value
})


const selectedTheme = (a) => {
  localStorage.setItem('colorData', JSON.stringify(a))
  // color.value = a
   theme.global.name.value = a
  // darkMode.value ? 'myCustomDarkTheme' : 
}


 const storeId =  useStore()

</script>

<style lang="scss" scoped>

</style>