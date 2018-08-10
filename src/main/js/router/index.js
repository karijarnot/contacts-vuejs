import Vue from 'vue';
import Router from 'vue-router';

import ContactsManager from '../components/ContactsManager.vue';
import ContactsTable from '../components/ContactsTable.vue';

Vue.use(Router);


export default new Router({
//  mode: 'history',
  routes: [{
    path: '/',
    name: 'Contacts',
    components: {
      default: ContactsManager
    }
  },
  {
    path: '/vue-tables-2',
    name: 'Vue-Tables-2',
    components: {
      default: ContactsTable
    }
  }]
});