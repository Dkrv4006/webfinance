<template>
    <Header>
        <v-card
          v-for="(item, index) in creditCards.card"
          :key="index"
          class="mx-auto my-3"
          max-width="398"
          color="secondary"
        >
  <v-row>
    <v-col cols="7">
      <v-card-item :title="item.nameCard" color="primary">
      </v-card-item>

    </v-col>
    <v-col cols="5" class="d-flex align-center">

      <v-btn icon="mdi-format-align-left"
      :color="item.cor"
      variant="tanal"
      ></v-btn>
      <v-btn icon="mdi-format-align-left"
      :color="item.cor"
      variant="tanal"
      ></v-btn>
      <v-btn icon="mdi-format-align-left"
      :color="item.cor"
      variant="tanal"
      ></v-btn>



    </v-col>
  </v-row>

    <v-divider :color="item.cor"  :thickness="9"></v-divider>
    <v-container >
        <v-row >
            <v-row no-gutters >
                <v-col align="center" cols="12" class="text-caption" >Limite</v-col>
                <v-col  align="center" cols="12" class="text-caption">{{ item.emaberto }}</v-col>
            </v-row>
            <v-row no-gutters >
                <v-col align="center" cols="12" class="text-caption" >Em aberto</v-col>
                <v-col  align="center" cols="12" class="text-caption">{{ item.emaberto }}</v-col>
            </v-row>
            <v-row no-gutters >
                <v-col align="center" cols="12" class="text-caption" >lim.disponivel</v-col>
                <v-col  align="center" cols="12" class="text-caption" >{{item.limite - item.emaberto}}</v-col>
            </v-row>
            <v-progress-linear :max="item.limite" rounded :color="item.cor" :model-value="item.limite - item.emaberto" :height="5"></v-progress-linear>
          </v-row>
          
          <v-row  >
            <v-col align="start" cols="6" title="ere" >{{ item.limite }}</v-col>
            <v-col  align="end" cols="6" >{{ item.fechamento }}</v-col>
          </v-row>
        </v-container>
        <v-spacer></v-spacer>
    


    
    
    
    
    
  </v-card>
  <div>
    <div v-for="(card, index) in creditCards" :key="index">
      <!-- Renderizar os dados do cartão aqui -->
      <p>Limite: {{ card.limite }}</p>
      <p>Em aberto: {{ card.emaberto }}</p>
      <p>Nome do cartão: {{ card.nameCard }}</p>
      <p>Fatura: {{ card.fatura }}</p>
      <p>Fechamento: {{ card.fechamento }}</p>
      <p>Vencimento: {{ card.vencimento }}</p>
    </div>
  </div>
        <div>
            <h2>Cartões de credito</h2>
            <v-btn to="/">home</v-btn>
        </div>

    </Header>
</template>

<script setup>
import Header from '@/components/header/Header.vue';
import { useStore } from '@/store/index'
import { ref } from 'vue';

const creditCards = ref({
 card:[
     {
    limite: 1000,
    emaberto: 100,
    nameCard: 'Nubank',
    fatura: 100,
    fechamento: '01/jun',
    vencimento:  '01/jun',
    cor: '#4a3485'
  },
   {
    limite: 1300,
    emaberto: 423,
    nameCard: 'Nuba',
    fatura: 400,
    fechamento: '01/jun',
    vencimento:  '01/jun',
    cor: '#4a3425'
  },
   {
    limite: 4230,
    emaberto: 423,
    nameCard: 'ank',
    fatura: 1230,
    fechamento: '01/jun',
    vencimento:  '01/jun',
    cor:  '#013324',
  },
]
})

const jsonString = JSON.stringify(creditCards);
const sizeInBytes = new Blob([jsonString]).size;
const sizeInKB = sizeInBytes / 1024;
console.log(sizeInKB); // Saída: tamanho em kilobytes (KB)

const storeId = useStore()

</script>

<style  scoped>

</style>