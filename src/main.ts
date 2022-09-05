import { createApp } from 'vue'
import VueApp from './App.vue'
import router from './router/route'
import './assets/main.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

const app = createApp(VueApp)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).mount('#app')