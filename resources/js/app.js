import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from './App.vue';
import router from './router';

const app = createApp({});
app.component('app-component', App);
app.use(router);

app.mount("#app");
