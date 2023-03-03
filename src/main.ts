import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus';
import VForm3 from 'vform3-builds'

import 'element-plus/dist/index.css'

import 'vform3-builds/dist/designer.style.css'  


const app = createApp(App)
app.use(ElementPlus,{size:'small',zIndex:1000})
app.use(router)
app.use(VForm3)
app.mount('#app')
