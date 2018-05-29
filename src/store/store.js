import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

const state = {
  usuario: {
    nombre: "Víctor",
    apellidos: ["Silva", "Segarra"],
    bio: "",
    email: "",
    codigo: null,
    avatar: {
      color: null,
      figura: null,
    }
  },
  NewPost: {
    titulo: "",
    fecha: "",
    post: ""
  }
};

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
