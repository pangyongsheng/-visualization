import Vue from 'vue'
import App from './App.vue'
// import VCharts from 'v-charts'

import router from './router'
import store from './store'
import './registerServiceWorker'
import './element'

// Vue.use(VCharts)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
