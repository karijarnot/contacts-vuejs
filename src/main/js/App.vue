<template>
  <div id="app" class="container-fluid">
  <header>
  	<router-link class="nav-link" :to="{name: 'Contacts'}" exact>
  		Home
  	</router-link>
  	<router-link class="nav-link" :to="{name: 'Vue-Tables-2'}" exact>
  		Vue-Tables-2
  	</router-link>
  </header>
  <main>
  	<router-view />
  </main>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import AddContactModal from './components/AddContactModal.vue';
import SearchContactsModal from './components/SearchContactsModal.vue';
import UpdateContactModal from './components/UpdateContactModal.vue';
import ContactsTable from './components/ContactsTable.vue';
import toastr from 'toastr';

export default {
  name: 'app'
}
</script>

<style>

</style>
