import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Pagination from 'v-pagination-3';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
app.component('pagination', Pagination);