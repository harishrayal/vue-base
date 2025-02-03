import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@/lang/i18n'
import '@/assets/css/main.css'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/reset.css';
// import '@/log/index'

const app = createApp(App)
const pinia = createPinia()
app.config.errorHandler = (err: any) => {
    throw new Error(err)
}
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(Antd)
app.mount('#app')
