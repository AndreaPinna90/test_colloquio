import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
