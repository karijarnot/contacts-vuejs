import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
import {ClientTable, Event} from 'vue-tables-2';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'toastr/build/toastr.min.css';

Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');