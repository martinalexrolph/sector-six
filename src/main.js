import { createApp } from 'vue'
import App from './App.vue'
import VueTextareaAutosize from "vue-textarea-autosize";

const app = createApp(App)

app.use(VueTextareaAutosize)
app.mount('#app')
