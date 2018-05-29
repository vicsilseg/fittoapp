import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

new Vuex.Store({
  state: {
    usuario: {
        nombre: '',
        apellidos: '',
        bio:'',
        email:'',
        codigo: null,
        avatar:'',
    },
    NewPost:{
        titulo:'',
        fecha:'',
        post:'',
    },
    
  }
});
