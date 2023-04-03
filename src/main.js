import { createApp } from 'vue'
import DataVVue3 from '@kjgl77/datav-vue3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(DataVVue3)
app.use(ElementPlus)
app.mount('#app')
