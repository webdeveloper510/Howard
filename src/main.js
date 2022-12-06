import { createApp } from "vue";
import Vuelidate from 'vuelidate'

import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import globalComponents from "./global-components";
import utils from "./utils";
import "./assets/css/app.css";  

const app = createApp(App).use(router).use(Vuelidate).use(createPinia());

globalComponents(app);
utils(app);

app.mount("#app");
