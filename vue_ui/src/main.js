import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios'


require('@/store/subscribe')

axios.defaults.baseURL = 'http://localhost:4001/'

Vue.config.productionTip = false

store.dispatch('AttemptAction', localStorage.getItem('token'))

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
