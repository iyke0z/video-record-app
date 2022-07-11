import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
// import 'font-awesome/css/font-awesom'

createApp(App)
    .use(router)
    .mount('#app')