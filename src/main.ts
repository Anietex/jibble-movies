import { createApp } from 'vue'
import { store } from '@/plugins/store'
import { vuetify } from '@/plugins/vuetify'
import router from './router'
import App from './App.vue'
import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(vuetify)
app.mount('#app')
