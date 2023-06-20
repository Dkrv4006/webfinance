import { newTrasation } from '@/servers/newtransaction'
import { defineStore } from 'pinia'


export const useStore = defineStore('storeId', {
  state() {
    return {
      receita: {
        origin: '',
        description: '',
        valor: '',
        date: '',
        formpayment: '',
        category: '',
        dateCreate: '',

      },
      categories: [],
      user: '',
      money: '',
      valor:'',
      salveColor:'',
    };
  },

  actions: {
    salva(data) {
      this.receita.origin = data[0];
      this.receita.description = data[1];
      this.receita.valor = data[2];
      this.receita.dateCreate = data[3];
      this.receita.formpayment = data[4];
      this.receita.category = data[5];
      this.receita.date = data[6];
 

      console.log(this.receita);
      newTrasation(this.receita);
    },

    init(data) {
      this.categories = data;
    },

    salveUser(data) {
      const { email } = data;
      this.user = email;

    },
    moneySalve(data){
      this.money = data
    },
    salveColor(data){
      this.salveColor = data
    },
  },

  getters: {
    olha() {
      return this.categories;
    },

    getEmail() {

      return this.user;
    },
    getMoney() {
      
      return this.money;
    },
    getColor() {

      return this.salveColor
    },
  },
});
