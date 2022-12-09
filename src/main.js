import { createApp } from "vue";
import Vuelidate from 'vuelidate'
import Toaster from '@meforma/vue-toaster';
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import globalComponents from "./global-components";
import utils from "./utils";
import "./assets/css/app.css";  

const app = createApp(App).use(router).use(Toaster,{
  // One of the options
  position: 'top-right'
}).use(createPinia());

globalComponents(app);
utils(app);

app.mount("#app");