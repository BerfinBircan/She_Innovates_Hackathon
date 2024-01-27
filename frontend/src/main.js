import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueGoogleMaps from '@fawmi/vue-google-maps'



loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBrfkV741KVu8q50a5YANCjE-14t7vQy0k',
    },
}).mount('#app')

