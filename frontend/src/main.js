/*import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootswatch/dist/journal/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')*/

  import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
