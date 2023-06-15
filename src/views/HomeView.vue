<template>
  <Header>
    <v-carousel  height="100" hide-delimiters progress="primary" v-model="selectedSlide">
      <template v-slot:prev="{ props }">
      <v-btn
        variant="elevated"
        color="secondary  primary-text"
        icon="mdi-chevron-left"
        @click="props.onClick"
      ></v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
        variant="elevated"
        color="secondary  primary-text"
        icon="mdi-chevron-right"
        @click="props.onClick"
      ></v-btn>
    </template>
    <v-carousel-item v-for="(slide, i) in slides" :key="i" color="secondary">
      <v-sheet height="100%" color="secondary">
        <div class="d-flex fill-height justify-center align-center" color="secondary">
          <div class="text-h6" color="primary">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
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
            <v-text-field color="primary01" clearable label="R$0,00" prepend-icon="mdi-bank" variant="plain" v-model="money" ></v-text-field>
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
            <v-autocomplete :items="items" prepend-icon="mdi-bank"  label="Categotia" variant="plain" v-model="category" ></v-autocomplete>
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


  
  <v-container class="my-10">
      <v-row justify="space-around">
        <v-card width="400" color="secondary">
          
  
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Today
            </div>
  
            <v-timeline density="compact" align="start" line-color="primary" va> 
              <v-timeline-item
              v-for="(item , index ) in storeId.getMoney " :key="index"
   
                dot-color="secondary"
                :icon="item.money > 0 ? 'mdi-home' : 'mdi-bank'"
                size="small"
                fill-dot
                icon-color="red"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>{{ item.date }}</strong> 
                  </div>
                  <div class="font-weight-normal">
                    <strong>{{ item.description}}</strong>
                  </div>
                  <div class="font-weight-normal">
                    <strong>{{ item.category}}</strong>
                  </div>
                  <div>{{ Number(item.money).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
</Header>

  <div>

 
  </div>
</template>

<script setup>
import Header from '@/components/header/Header.vue';
import { onMounted, onBeforeMount, ref, watch } from 'vue';
import { useStore } from '@/store/index'
import  Overview from '@/components/overview/overview.vue';
import { getAllCategoris, getAllMoney } from '@/store/db';
import  moment  from "moment-timezone"

const description = ref('')
const money = ref(0)
const category = ref('')
const categoris = ref('')
const date = ref('')
const conta = ref('')

const dialogVisible = ref(false)
const drawer = ref(false)
const show = ref(false)
const title = ref('')
const location = ref('left')
const selectedSlide = ref('');

watch(selectedSlide, (value) => {
  // Aqui você pode realizar alguma ação com o valor do slide selecionado
  const selectedValue = slides.value[value];
  console.log(selectedValue);
});

const slides = ref([
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ]
)

const items = ref([
  { title: 'Receitas', icon: 'mdi-bank-plus',},
  { title: 'Despesas', icon: 'mdi-bank-minus' },
])


const storeId = useStore()
onBeforeMount( async () => {

})
  onMounted( async () => {

    await getAllMoney()
    await getAllCategoris()
    const value = storeId.olha
    categoris.value = value

    // const valu = storeId.getMoney
    // catego.value = value
    // console.log('mo', valu);
    
      }
    )


const openDialog = (e) => {
  title.value = e.target.innerText
  dialogVisible.value = true
}

const closeDialog = () => {
  dialogVisible.value = false
}
const to = (value) => {
  console.log(value);
}

const submitForm = (event) => {
  event.preventDefault()
  let day = moment.tz('America/Sao_Paulo')
  let dateCreate = day.format('DD/MM/YYYY HH:mm');
  getAllMoney()
 storeId.salva( description.value, money.value,  date.value, conta.value,category.value, dateCreate)
 
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
  