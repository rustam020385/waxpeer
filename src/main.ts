import './assets/main.css'
import vuetify from '@/plugins/vuetify.js'
import { createApp } from 'vue'
import App from './App.vue'



const app = createApp(App)

import components from '@/components/UI/index.js'

components.forEach(component => {
    app.component(component.name, component)
})

app.use(vuetify).mount('#app')
