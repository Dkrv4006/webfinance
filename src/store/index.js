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
    },
    categoris: [],
    user: []
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

  init(data){
    this.categoris = data

  },
  salveUser(data){
    const { email } = data
    this.user = email

  }
},

  getters: {
    olha(){
      newTrasation(this.receita)
      return  this.categoris
    },
    getEmail(){
      return this.user
    }
  }
})
