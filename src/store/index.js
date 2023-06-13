import { newTrasation } from '@/servers/newtransaction'
import { defineStore } from 'pinia'



export const useStore = defineStore('storeId', {
  state: () => ({
    receita: {
      description: '',
      money: '',
      category: '',
      date: '',
      conta: '',
    }
}),


  actions:{
    salva(description, category, money, date, conta){
      this.receita.description = description
      this.receita.money = money
      this.receita.category = category
      this.receita.date = date
      this.receita.conta = conta

      this.olha
  },
},

  getters: {
    olha(){
      console.log(this.receita.description);
      newTrasation(this.receita)
    }
  }
})
