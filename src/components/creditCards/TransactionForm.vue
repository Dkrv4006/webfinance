<template>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        :rules="nameRules"
        color="primary01"
        clearable
        :label="originLabel"
        prepend-icon="mdi-bank"
        variant="plain"
        v-model="origin"
      ></v-text-field>
      <v-text-field
        :rules="nameRules"
        color="primary01"
        clearable
        :label="descriptionLabel"
        prepend-icon="mdi-bank"
        variant="plain"
        v-model="description"
      ></v-text-field>
      <v-text-field
        :rules="nameRules"
        color="primary01"
        clearable
        :label="valorLabel"
        prepend-icon="mdi-bank"
        variant="plain"
        type="number"
        v-model="valor"
      ></v-text-field>
      <v-text-field
        :rules="nameRules"
        color="primary01"
        clearable
        :label="dateLabel"
        prepend-icon="mdi-bank"
        variant="plain"
        type="date"
        v-model="date"
      ></v-text-field>
      <v-autocomplete
        :rules="nameRules"
        :items="formp"
        prepend-icon="mdi-bank"
        :label="formpaymentLabel"
        variant="plain"
        v-model="formpayment"
      ></v-autocomplete>
      <v-autocomplete
        :rules="nameRules"
        :items="items"
        prepend-icon="mdi-bank"
        :label="categoryLabel"
        variant="plain"
        v-model="category"
      ></v-autocomplete>
      <v-btn type="submit" block class="mt-2" :color="buttonColor">Submit</v-btn>
    </v-form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const origin = ref('');
  const description = ref('');
  const valor = ref('');
  const date = ref('');
  const formpayment = ref('');
  const category = ref('');
  const items = ref([
  { title: 'Receitas', icon: 'mdi-bank-plus',},
  { title: 'Despesas', icon: 'mdi-bank-minus' },
])
  const submitForm = () => {
    // Implemente a lógica do envio do formulário aqui
  };
  </script>
  