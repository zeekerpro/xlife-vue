import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/plugins/base";
import "@/plugins/fontawesome";
import "@/plugins/iconfont";
import "@/plugins/svg";
import "@/plugins/directives";
import "@/assets/styles/app.scss";
import 'vue2-animate/dist/vue2-animate.min.css';
import '@/plugins/vTooltip';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
