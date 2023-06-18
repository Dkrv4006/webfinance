
<template>
    <v-app id="inspire" color="secondary" v-theme="selectedTheme" >
        <v-navigation-drawer v-model="drawer" color="secondary">
         <v-text-field>Finance<strong>Dkrv</strong> </v-text-field>
        
        <div
          v-for="[icon, text, link] in links"
          :key="icon"
          link
        >
        <v-btn
          class="w-100 mt-5"
          href="/home"
          color="secondary"
          elevation="0"
          :to="link"
        >
      <v-row
        align="center"
      >
       <v-col
         class="text-left"
         cols="6"
       >
          
       <v-sheet
         width="150"
         color="secondary"
       ><v-icon
         class="pr-5"
         size="large"
         color="primary"
         :icon="icon"
       >
      </v-icon>{{text}}</v-sheet>
        </v-col>
      </v-row>
    </v-btn>
      </div>
    
        </v-navigation-drawer>
    
        <v-app-bar color="primary" >
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="primary ">Finance<strong>Dkrv</strong> 

          </v-toolbar-title>
          <v-toolbar-title class="primary  d-flex justify-end ">
            <v-avatar
             class="ma-10"
              size="small"
              :image="this.photoURL"
            >
            </v-avatar>
          </v-toolbar-title>
        </v-app-bar>
        
        <v-main class="color">
          <slot></slot>
        </v-main>
        <New></New>

     
        <Config v-show="false" />
    </v-app>
  
  </template>
  
  <script setup>
  import {  ref } from "vue"
import New from "../creditCards/new.vue"

import Config from "@/views/config.vue";
const drawer = ref(false)

const links = ref([
        ['mdi-view-dashboard', 'Dashboard', '/home'],
        ['mdi-bank', 'Contas', '/home'],
        ['mdi-transfer', 'Transações'],
        ['mdi-credit-card-outline', 'Cartões', '/home'],
        ['mdi-chart-areaspline', 'chart', '/home'],
        ['mdi-chart-areaspline', 'chart', '/config'],
      ],)
       
  </script>
  
  <style scoped>
  
  .fixed{
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  .card{
    position: fixed;
    bottom: 80px;
    right: 80px;
  }
  .red{
    background: #222222;
  }
  
  main{
    position: relative;
    padding-top: 64px;
    height: 1000px;
  }

  .color{
    background: #000000;
  }
  
  nav {
    padding: 30px;
    color: #42b983;
  }
  
  nav a {
    font-weight: bold;
  
  }
  
  nav a.router-link-exact-active {
    color: #42b983;

  }
  </style>
  