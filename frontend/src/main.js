import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import router from './router'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
const myApp = createApp(App)

myApp.use(
  Quasar,
  {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang
  }
)

myApp.use(router)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
