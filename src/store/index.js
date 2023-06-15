import { newTrasation } from '@/servers/newtransaction'
import { defineStore } from 'pinia'


export const useStore = defineStore('storeId', {
  state() {
    return {
      receita: {
        category: '',
        money: '',
        date: '',
        conta: '',
        dateCreate: '',
        description: '',
      },
      categories: [],
      user: '',
      money:'',
    };
  },

  actions: {
    salva(description, money, date, conta, category, dateCreate) {
      this.receita.description = description;
      this.receita.money = money;
      this.receita.category = category;
      this.receita.date = date;
      this.receita.conta = conta;
      this.receita.dateCreate = dateCreate;

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
    }
  },

  getters: {
    olha() {
      return this.categories;
    },

    getEmail() {
      console.log('getemail', this.user);
      return this.user;
    },
    getMoney() {
      console.log(this.money,'1111');
      return this.money;
    },
  },
});
