import '@/assets/main.css'
import vuetify from '@/plugins/vuetify'
import { createApp } from 'vue'
import App from './App.vue'



const app = createApp(App)

import components from '@/components/UI/index'

components.forEach(component => {
    app.component(component.name, component)
})

app.use(vuetify).mount('#app')
