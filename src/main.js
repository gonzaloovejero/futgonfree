import { createApp } from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueIframe from 'vue-iframes';
import 'vuetify/dist/vuetify.min.css'


const app = createApp(App)
app.use(Vuetify)
.use(VueIframe)

app.mount('#app')