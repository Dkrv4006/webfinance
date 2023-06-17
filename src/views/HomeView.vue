<template>

    <Overview />
    <v-menu :location="location"  transition="scale-transition" z-index="1000">
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
             width="240"
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

    <v-row >

      <v-dialog v-model="dialogVisible" transition="dialog-bottom-transition" width="auto">
      <template v-slot>
        <v-card color="secondary" v-if="title == 'RECEITAS'" min-width="450px">
          <v-toolbar color="success" variant="tonal" :title="title"></v-toolbar>
          <v-card-text>
            <v-form  @submit="submitForm">
            <v-text-field color="primary01" clearable label="Descrição" prepend-icon="mdi-bank" variant="plain" v-model="description" ></v-text-field>
            <v-text-field color="primary01" clearable label="R$0,00" prepend-icon="mdi-bank" variant="plain" type="number" v-model="money" ></v-text-field>
            <v-text-field color="primary01" clearable label="Data" prepend-icon="mdi-bank" variant="plain" type="date" v-model="date" ></v-text-field>
            <v-autocomplete :items="categoris" prepend-icon="mdi-bank"  label="Conta" variant="plain" v-model="conta" ></v-autocomplete>
            <v-autocomplete :items="items" prepend-icon="mdi-bank"  label="Categotia" variant="plain" v-model="category" ></v-autocomplete>
            <v-btn type="submit" block class="mt-2" color="success">Submit</v-btn>
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
          <v-toolbar color="error" variant="tonal" :title="title"></v-toolbar>
          <v-card-text>
            <v-form  @submit="submitForm">
            <v-text-field color="primary01" clearable label="Descrição" prepend-icon="mdi-bank" variant="plain" v-model="description" ></v-text-field>
            <v-text-field color="primary01" clearable label="R$0,00" prepend-icon="mdi-bank" variant="plain" v-model="money" ></v-text-field>
            <v-text-field color="primary01" clearable label="Data" prepend-icon="mdi-bank" variant="plain" type="date" v-model="date" ></v-text-field>
            <v-autocomplete :items="categoris" prepend-icon="mdi-bank"  label="Conta" variant="plain" v-model="conta" ></v-autocomplete>
            <v-autocomplete :items="categoris" prepend-icon="mdi-bank"  label="Categotia" variant="plain" v-model="category" ></v-autocomplete>
            <v-btn type="submit" block class="mt-2" color="#ff0000">Submit</v-btn>
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


  </v-row>

  <v-dialog
        v-model="deleteVisible"
        transition="dialog-bottom-transition"
        width="auto"
      >
 
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar
              color="primary"
              title="Opening from the bottom"
            ></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                variant="text"
                @click="yesDelete"
              >yes</v-btn>
              <v-btn
                variant="text"
                @click="isActive.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
  
  <v-container class="my-10" z>
  
        <v-card  width="100%" color="#000">
          
  
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Today
            </div>
  
           <table class="  w-100 texte" >
            <thead class="w-100%">
            <th> % </th>
             <th> data</th>
              <th>description </th>
              <th> ds </th>
              <th> deleta </th>
         
            </thead>
            <tbody class="w-100%" >
              <tr  v-for="(item , index ) in storeId.getMoney " :key="index">
                <td><v-timeline-item  dot-color="secondary"
                :icon="item.valor > 0 ? 'mdi-arrow-top-right' : 'mdi-arrow-bottom-right'"
                size="small"
                fill-dot
                :icon-color="item.valor > 0 ? 'success' : 'error'"></v-timeline-item></td>
                <td>{{ item.date }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.valor }}</td>

                <td><v-btn :value="item.id" icon="mdi-delete" color="secondary" elevation="0" @click="openDelete(item.id)" ></v-btn></td>
              </tr>
            </tbody>
           </table>

          </v-card-text>
        </v-card>
  
    </v-container>


  <div>

 
  </div>
</template>

<script setup>

import { onMounted, onBeforeMount, ref, watch } from 'vue';
import { useStore } from '@/store/index'
import  Overview from '@/components/overview/overview.vue';
import { deleteFinance, getAllCategoris, getAllFinance, getAllMoney } from '@/store/db';
import  moment  from 'moment-timezone'
 

import 'moment/locale/pt-br';


const description = ref('')
const idDelete = ref('')
const money = ref()
const category = ref('')
const categoris = ref('')
const date = ref('')
const conta = ref('')

const dialogVisible = ref(false)
const deleteVisible = ref(false)
const drawer = ref(false)
const show = ref(false)
const title = ref('')
const location = ref('left')
const selectedSlide = ref('');

watch(selectedSlide, (value) => {
  // Aqui você pode realizar alguma ação com o valor do slide selecionado
  const selectedValue = months.value[value];
  console.log(selectedValue);
  
});

async function deleteMoney(value){
  console.log(value);
  deleteFinance(value)
  await getAllFinance();

}
const items = ref([
  { title: 'Receitas', icon: 'mdi-bank-plus',},
  { title: 'Despesas', icon: 'mdi-bank-minus' },
])


const storeId = useStore();
const months = ref([]);

onBeforeMount(async () => {
  await getAllFinance();
  // moment.locale('pt-br');
  // const value = storeId.olha;
  // categoris.value = value;

  // const currentMonth = moment().month(); // Obtém o mês atual (0-11, onde janeiro é 0)

  // for (let i = 0; i < 12; i++) {
  //   const month = moment().month(i).format('MMMM');
  //   months.value.push(month);
  // }

  // // Define o valor inicial do carrossel como o índice do mês atual
  // selectedSlide.value = currentMonth;
});

const openDialog = (e) => {
  title.value = e.target.innerText
  dialogVisible.value = true
}
const openDelete = (da) => {
   idDelete.value = da
  deleteVisible.value = true
}
const yesDelete = () => {

   deleteMoney(idDelete.value)
  deleteVisible.value = false
}

const closeDialog = () => {
  dialogVisible.value = false
}


const submitForm = (event) => {
  event.preventDefault()
  let day = moment.tz('America/Sao_Paulo')
  let dateCreate = day.format('DD/MM/YYYY HH:mm');
  getAllFinance()
 storeId.salva( description.value, money.value,  date.value, conta.value,category.value, dateCreate)
 
  description.value = ''
  money.value = ''
  category.value = ''
  date.value = ''
  conta.value = ''
}
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
tr, th{
  background: #222222;
  color: white;
}
table tr:first-child {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

table tr:last-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

table th,
table td {
  padding: 10px;
  border-block-start: 5px solid black;
}

  .texte{
    text-align: center;
  }
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
  