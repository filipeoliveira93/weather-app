import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from 'axios'

import './assets/main.css'

const app = createApp(App)
app.config.globalProperties.axios = axios

app.use(createPinia())

app.mount('#app')
