<template>
    <div>
    <v-menu
      :location="location"
      transition="scale-transition"
      z-index="1000"
    >
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
            <v-form  @submit="submitFormReceita">
            <v-text-field
              :rules="nameRules"
              color="primary01"
              clearable
              label="Origin"
              prepend-icon="mdi-bank"
              variant="plain"
              v-model="origin"
              ></v-text-field
            >
            <v-text-field
                :rules="nameRules"
                color="primary01"
                clearable
                label="Descrição"
                prepend-icon="mdi-bank"
                variant="plain"
                v-model="description"
            ></v-text-field>
            <v-text-field
                :rules="nameRules"
                color="primary01"
                clearable
                label="R$0,00"
                prepend-icon="mdi-bank"
                variant="plain"
                type="number"
                v-model="valor"
            ></v-text-field>
            <v-text-field
                :rules="nameRules"
                color="primary01"
                clearable
                label="Data"
                prepend-icon="mdi-bank"
                variant="plain"
                type="date"
                v-model="date"
            ></v-text-field>
            <v-autocomplete
                :rules="nameRules"
                :items="formp"
                prepend-icon="mdi-bank"
                label="Conta"
                variant="plain"
                v-model="formpayment"
              ></v-autocomplete
            ><v-autocomplete :rules="nameRules" :items="items" prepend-icon="mdi-bank"  label="Categotia" variant="plain" v-model="category" ></v-autocomplete>
            <v-btn type="submit" block class="mt-2" color="success">Submit</v-btn>
          </v-form>
      </v-card-text>

          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="closeDialog">Fechar</v-btn>
            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show" ></v-btn>
          </v-card-actions>
        </v-card>
        <v-card color="secondary" v-if="title == 'DESPESAS'" min-width="400px">
          <v-toolbar color="error" variant="tonal" :title="title"></v-toolbar>
          <v-card-text>
            <v-form  @submit.prevent="submitFormDespesa">
                <v-text-field :rules="nameRules" color="primary01" clearable label="Destino" prepend-icon="mdi-bank" variant="plain" v-model="origin" ></v-text-field>
            <v-text-field  :rules="nameRules" required color="primary01" clearable label="Descrição" prepend-icon="mdi-bank" variant="plain" v-model="description" ></v-text-field>
            <v-text-field :rules="nameRules" color="primary01" clearable label="R$0,00" prepend-icon="mdi-bank" variant="plain" type="number" v-model="valor" ></v-text-field>
            <v-text-field :rules="nameRules" color="primary01" clearable label="Data" prepend-icon="mdi-bank" variant="plain" type="date" v-model="date" ></v-text-field>
            <v-autocomplete :rules="nameRules" :items="formp" prepend-icon="mdi-bank"  label="Conta" variant="plain" v-model="formpayment" ></v-autocomplete>
            <v-autocomplete :rules="nameRules" :items="items" prepend-icon="mdi-bank"  label="Categotia" variant="plain" v-model="category" ></v-autocomplete>
            <v-btn type="submit" block class="mt-2" color="#ff0000">Submit</v-btn>
          </v-form>
      </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="closeDialog">Fechar</v-btn>
            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show" ></v-btn>
          </v-card-actions>
        </v-card>

      </template>
    </v-dialog>


  </v-row>
    </div>
</template>

<script setup>

import { ref} from 'vue';
import { useStore } from '@/store/index'
import { v4 as uuidV4 } from 'uuid'
import { deleteFinance, getAllCategoris, getAllFinance, getAllMoney } from '@/store/db';
import  moment  from 'moment-timezone'

const storeId = useStore()

const origin = ref('')
const description = ref()
const valor = ref()
const formpayment = ref()
const category = ref()
const date = ref('')
// const conta = ref('')

const location = ref('left')

const nameRules = ref( [
        value => {
          if (value) return true

          return 'Name is requred.'
        },
    ])
const dialogVisible = ref(false)
const show = ref(false)
const title = ref('')

const items = ref([
  { title: 'Receitas', icon: 'mdi-bank-plus',},
  { title: 'Despesas', icon: 'mdi-bank-minus' },
])
const formp = ref(['Pix', 'Dinheiro'])


const closeDialog = () => {
  dialogVisible.value = false
}

const openDialog = (e) => {
  title.value = e.target.innerText
  dialogVisible.value = true
}
const submitForm = (event, signal) => {
  event.preventDefault();
  let day = moment.tz('America/Sao_Paulo');
  let dateCreate = day.format('DD/MM/YYYY HH:mm');
  getAllFinance();

  // Validação dos campos
  if (
    origin.value === '' ||
    description.value === '' ||
    valor.value === '' ||
    date.value === '' ||
    formpayment.value === '' ||
    category.value === ''
  ) {
    alert('Por favor, preencha todos os campos do formulário.');
    return;
  }

  const data = [
    origin.value,
    description.value,
    signal * valor.value,
    date.value,
    formpayment.value,
    category.value,
    dateCreate,
  ];

  storeId.salva(data);

  dialogVisible.value = false
  description.value = '';
  valor.value = '';
  category.value = '';
  date.value = '';
  origin.value = '';
};

const submitFormReceita = (event) => {
  submitForm(event, 1); // chama a função submitForm com o sinal 1 para receita
};

const submitFormDespesa = (event) => {
  submitForm(event, -1); // chama a função submitForm com o sinal -1 para despesa
};

</script>

<style  scoped>
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
  
</style>