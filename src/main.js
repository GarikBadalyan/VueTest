import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from "@/MyComponent";
import store from "@/store";
import router from "@/router";

const app = createApp(App);
app.component('my-component', MyComponent)
app.use(router)
app.use(store)
app.mount('#app');
// createApp(App).mount('#app')
