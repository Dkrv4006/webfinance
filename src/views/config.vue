<template>
  <v-card
  class="ma-auto my-5"
   max-width="440px"
   color="secondary"
  >
  <v-card-title>Tema</v-card-title>

  <v-card-text>

    <v-btn class="mx-2" @click="selectedTheme('myCustomBlueTheme')" color="blue">Blue</v-btn>
    <v-btn class="mx-2" @click="selectedTheme('myCustomYellonTheme')" color="#ffff00">Yellon</v-btn>
    <v-btn class="mx-2" @click="selectedTheme('myCustomPinckTheme')" color="#FF1867">Pinck </v-btn>
    <v-btn class="mx-2" @click="selectedTheme('myCustomRedTheme')" color="#ff0000">Pinck </v-btn>
  </v-card-text>
  </v-card>


</template>

<script setup>


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



</script>

<style lang="scss" scoped>

</style>