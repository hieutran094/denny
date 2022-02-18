import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/util.css";
import "@/assets/css/main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
