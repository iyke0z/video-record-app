import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'jquery/dist/jquery.min.js'
import $ from 'jquery'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
window.$ = $
createApp(App)
    .use($)
    .use(router)
    .mount('#app')