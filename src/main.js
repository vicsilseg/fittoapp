/* SERVICES */
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes/routes";
import { TweenMax, TimelineMax, MorphSVGPlugin } from "gsap";

/* CSS */

import "./styles/reset.css";
import "./styles/main.css";

/* SERVICES USE */

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

