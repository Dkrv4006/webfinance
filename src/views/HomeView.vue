<template>

    <Overview />
   

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
  
           <table class="  w-100 texte"  >
            <thead class="w-100%" color="red">
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
const money = -ref()
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
thead{

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
  