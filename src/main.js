import { createApp } from "vue";
// import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";

createApp(App)
  .use(router)
  .component("Icon", Icon)
  .mount("#app");
