<template>
  <Header>
    <Overview />
    <v-menu :location="location"  transition="scale-transition" >
      <template v-slot:activator="{ props }">
       <v-btn
         color="primary"
         v-bind="props"
         class="fixed "
         icon="mdi-wallet-plus"
         variant="tonal"
         size="x-large"
       ></v-btn>
      </template>
  
        <v-list  class="pa-0">
         <v-list-item
           v-for="(item, index) in items"
           :key="index"
           class="pa-0 red"
         >
           <v-btn
             width="250"
             color="secondary"
             @click="openDialog"
           ><v-icon
             class="pr-5"
             size="large"
             color="primary"
             :icon="item.icon"
             :title="item.title"
             ></v-icon
           >{{item.title}}</v-btn>
          </v-list-item>
        </v-list>
    </v-menu>

    <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog v-model="dialogVisible" transition="dialog-bottom-transition" width="auto">
      <template v-slot>
        <v-card color="secondary" v-if="title == 'TRASFERENCIA'" min-width="400px">
          <v-toolbar color="primary" variant="tonal" :title="title"></v-toolbar>
          <v-card-text>
            <v-form  @submit="submitForm">
            <v-text-field color="primary01" clearable label="Descrição" prepend-icon="mdi-bank" variant="plain" v-model="description" ></v-text-field>
            <v-text-field color="primary01" clearable label="R$0,00" prepend-icon="mdi-bank" variant="plain" v-model="money" ></v-text-field>
            <v-text-field color="primary01" clearable label="Data" prepend-icon="mdi-bank" variant="plain" v-model="dete" ></v-text-field>
            <v-autocomplete :items="categoris" prepend-icon="mdi-bank"  label="Conta" variant="plain" v-model="conta" ></v-autocomplete>
            <v-autocomplete :items="items" prepend-icon="mdi-bank"  label="Categotia" variant="plain" v-model="category" ></v-autocomplete>
            <v-btn type="submit" block class="mt-2" color="error">Submit</v-btn>
          </v-form>
      </v-card-text>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          
          <v-card-text>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
           
          </v-card-text>
        </div>
      </v-expand-transition>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="closeDialog">Fechar</v-btn>
            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show" ></v-btn>
          </v-card-actions>
        </v-card>
        <v-card color="secondary" v-if="title == 'RECEITAS'" min-width="400px">
          <v-toolbar color="primary" variant="tonal" :title="title"></v-toolbar>
          <v-card-text>
            <v-form  @submit="submitForm">
            <v-text-field color="primary01" clearable label="Descrição" prepend-icon="mdi-bank" variant="plain" v-model="description" ></v-text-field>
            <v-text-field color="primary01" clearable label="R$0,00" prepend-icon="mdi-bank" variant="plain" v-model="money" ></v-text-field>
            <v-text-field color="primary01" clearable label="Data" prepend-icon="mdi-bank" variant="plain" v-model="dete" ></v-text-field>
            <v-autocomplete :items="categoris" prepend-icon="mdi-bank"  label="Conta" variant="plain" v-model="conta" ></v-autocomplete>
            <v-autocomplete :items="items" prepend-icon="mdi-bank"  label="Categotia" variant="plain" v-model="category" ></v-autocomplete>
            <v-btn type="submit" block class="mt-2" color="primary">Submit</v-btn>
          </v-form>
      </v-card-text>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          
          <v-card-text>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
           
          </v-card-text>
        </div>
      </v-expand-transition>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="closeDialog">Fechar</v-btn>
            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show" ></v-btn>
          </v-card-actions>
        </v-card>
        <v-card color="secondary" v-if="title == 'DESPESAS'" min-width="400px">
          <v-toolbar color="primary" variant="tonal" :title="title"></v-toolbar>
          <v-card-text>
            <v-form  @submit="submitForm">
            <v-text-field color="primary01" clearable label="Descrição" prepend-icon="mdi-bank" variant="plain" v-model="description" ></v-text-field>
            <v-text-field color="primary01" clearable label="R$0,00" prepend-icon="mdi-bank" variant="plain" v-model="money" ></v-text-field>
            <v-text-field color="primary01" clearable label="Data" prepend-icon="mdi-bank" variant="plain" v-model="dete" ></v-text-field>
            <v-autocomplete :items="categoris" prepend-icon="mdi-bank"  label="Conta" variant="plain" v-model="conta" ></v-autocomplete>
            <v-autocomplete :items="items" prepend-icon="mdi-bank"  label="Categotia" variant="plain" v-model="category" ></v-autocomplete>
            <v-btn type="submit" block class="mt-2" color="primary">Submit</v-btn>
          </v-form>
      </v-card-text>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          
          <v-card-text>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
           
          </v-card-text>
        </div>
      </v-expand-transition>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="closeDialog">Fechar</v-btn>
            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show" ></v-btn>
          </v-card-actions>
        </v-card>
        <v-card color="secondary" v-if="title == 'DESPESAS CARTÃO'" min-width="400px">
          <v-toolbar color="primary" variant="tonal" :title="title"></v-toolbar>
          <v-card-text>
            <v-form  @submit="submitForm">
            <v-text-field color="primary01" clearable label="Descrição" prepend-icon="mdi-bank" variant="plain" v-model="description" ></v-text-field>
            <v-text-field color="primary01" clearable label="R$0,00" prepend-icon="mdi-bank" variant="plain" v-model="money" ></v-text-field>
            <v-text-field color="primary01" clearable label="Data" prepend-icon="mdi-bank" variant="plain" v-model="dete" ></v-text-field>
            <v-autocomplete :items="categoris" prepend-icon="mdi-bank"  label="Conta" variant="plain" v-model="conta" ></v-autocomplete>
            <v-autocomplete :items="items" prepend-icon="mdi-bank"  label="Categotia" variant="plain" v-model="category" ></v-autocomplete>
            <v-btn type="submit" block class="mt-2" color="primary">Submit</v-btn>
          </v-form>
      </v-card-text>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          
          <v-card-text>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
           
          </v-card-text>
        </div>
      </v-expand-transition>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="closeDialog">Fechar</v-btn>
            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show" ></v-btn>
          </v-card-actions>
        </v-card>

      </template>
    </v-dialog>
    </v-col>

  </v-row>

  <h4>{{ categoris }}</h4>

  </Header>

  <div>


 
  </div>
</template>

<script setup>
import Header from '@/components/header/Header.vue';
import { defineComponent, onBeforeMount, ref } from 'vue';
import { useStore } from '@/store/index'
import  Overview from '@/components/overview/overview.vue';
import { getAllCategoris } from '@/store/db';

const description = ref('')
const money = ref('')
const category = ref('')
const categoris = ref('')
const date = ref('')
const conta = ref('')

const dialogVisible = ref(false)
const drawer = ref(false)
const show = ref(false)
const title = ref('')
const location = ref('left')

const items = ref([
  { title: 'Trasferencia', icon: 'mdi-swap-vertical' },
  { title: 'Receitas', icon: 'mdi-bank-plus' },
  { title: 'Despesas', icon: 'mdi-bank-minus' },
  { title: 'Despesas cartão', icon: 'mdi-credit-card-outline' },
])

const storeId = useStore()

onBeforeMount( async () => {
await getAllCategoris()
const value = storeId.olha
categoris.value = value
console.log('home', value)
})

const openDialog = (e) => {
  title.value = e.target.innerText
  dialogVisible.value = true
}

const closeDialog = () => {
  dialogVisible.value = false
}

const submitForm = (event) => {
  event.preventDefault()

 // storeId.salva(description.value, money.value, category.value, date.value, conta.value)
  console.log('teste', categoris.value)

  description.value = ''
  money.value = ''
  category.value = ''
  date.value = ''
  conta.value = ''
}
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
    /* padding-top: 100px; */
    height: 1000px;
  }
  
  .color{
    background: #000000;
    color: #ff1869ab;
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
  