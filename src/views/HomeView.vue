<template>

    <!-- <Overview /> -->
   

  <v-dialog
        v-model="deleteVisible"
        transition="dialog-bottom-transition"
        width="auto"
      >
 
        <template v-slot:default="{ isActive }">
          <v-card color="secondary">
            <v-toolbar
              color="primary"
              title="Sera apagado do BANCO!"
            ></v-toolbar>
            <v-card-text>
              <div class="text-h4 pa-12">Deseja excluir?</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                variant="text"
                @click="yesDelete"
              >Sim</v-btn>
              <v-btn
                variant="tonal"
                @click="isActive.value = false"
              >Não</v-btn>
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
  
           <table theme="dark" class="  w-100 texte"  >
            <thead class="primary">
            <th> Tipo </th>
            <th> Data </th>
            <th> Ori/Des </th>
              <th>Descrição </th>
              <th> Valor </th>
              <th> Excluir </th>
         
            </thead>
            <tbody class="w-100%" >
              <tr class="animate__backInLeft"  v-for="(item , index ) in storeId.getMoney " :key="index">
                <td><v-timeline-item  dot-color="secondary"
                :icon="item.valor > 0 ? 'mdi-arrow-top-right' : 'mdi-arrow-bottom-right'"
                size="small"
                fill-dot
                :icon-color="item.valor > 0 ? 'success' : 'error'"></v-timeline-item></td>
                <td>{{ item.date }}</td>
                <td>{{ item.origin }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.valor }}</td>

                <td><v-btn :value="item.uuid" icon="mdi-delete" color="secondary" elevation="0" @click="openDelete(item.uuid)" ></v-btn></td>
          
              </tr>
            </tbody>
           </table>

          </v-card-text>
        </v-card>
  
    </v-container>

</template>

<script setup>

import { onMounted, onBeforeMount, ref, watch,computed } from 'vue';
import { useStore } from '@/store/index'
import  Overview from '@/components/overview/overview.vue';
import { deleteFinance, getAllCategoris, getAllFinance, getAllMoney } from '@/store/db';
import  moment  from 'moment-timezone'
// import { useTheme } from 'vuetify';

// const { theme } = useTheme();
// console.log(theme);
// const tableHeadClass = computed( async() => {
//   return theme.value.dark ? 'theme--dark' : 'theme--light';
// });


import 'moment/locale/pt-br';



const idDelete = ref('')

const deleteVisible = ref(false)

const selectedSlide = ref('');

watch(selectedSlide, (value) => {
  // Aqui você pode realizar alguma ação com o valor do slide selecionado
  const selectedValue = months.value[value];
  console.log(selectedValue);
  
});

async function deleteMoney(value){
  deleteFinance(value)
  await getAllFinance();

}
const storeId = useStore();
const months = ref([]);

onBeforeMount(async () => {
  await getAllFinance();

});


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

.custom-class {
    background: rgb(var(--primary));
    /* color: rgba(var(--v-theme-on-something), 0.9); */
  }

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
td{
  max-width: 180px;
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
  