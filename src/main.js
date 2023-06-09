import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store/store'

Vue.config.productionTip = false
// Vue.use(VueAxios, axios)

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
