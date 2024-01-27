import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'


const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBSVJGbH7Xwi-RFeogw4ish2fPwsvt23Ic',
    },
}).mount('#app')


