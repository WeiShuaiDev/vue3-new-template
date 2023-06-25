import { createApp } from 'vue'
// 引入 vue-router
import router from './router'
// 引入 vuex
import store from './store'
import './assets/css/index.css'
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
