import Vue from 'vue'
import ElementUI from 'element-ui';
import './theme/element/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './services/api'

Vue.use(ElementUI);

Vue.config.productionTip = process.env.NODE_ENV ==='"development"'?true:false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
