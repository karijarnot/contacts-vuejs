<template>
<div>
    <table class="table table-striped">
    	<thead>
    		<tr>
    			<th>First Name</th>
    			<th>Last Name</th>
    			<th>Phone Number</th>
    			<th>Email</th>
    			<th></th>
    			<th></th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr v-for="contact in contactEntities" :key="contact.id" >
    			<td>{{contact.firstName}}</td>
    			<td>{{contact.lastName}}</td>
    			<td>{{contact.phoneNumber}}</td>
    			<td>{{contact.email}}</td>
    			<td><button class="btn btn-primary btn-sm" @click="selectContactForUpdate(contact)">Update</button></td>
    			<td><button class="btn btn-danger btn-sm" @click="deleteContact(contact.id)">Delete</button></td>
     		</tr>
     	</tbody>
     </table>
     <div class="text-center">
		<button type="button" class="btn btn-primary m-1" @click="openAdd">Add Contact</button>
		<button type="button" class="btn btn-primary m-1" data-toggle="modal" data-target="#searchModal">Search Contacts</button>
		<button type="button" class="btn btn-primary m-1" @click="clearSearch()">Display All Contacts</button>
	</div>
	<SearchContactsModal />
	<b-modal ref="addModal" title="Add Contact" :hide-footer="hideFooter">
		<ContactForm v-on:close="closeAddModal" :update="false" />
	</b-modal>	
	<b-modal ref="updateModal" title="Update Contact" :hide-footer="hideFooter">
		<ContactForm v-on:close="closeUpdateModal" :update="true" />
	</b-modal>
</div>
</template>

<script>

import { mapActions } from 'vuex';
import SearchContactsModal from './SearchContactsModal.vue';
import ContactForm from './ContactForm.vue';
import toastr from 'toastr';

export default {
  name: 'contactsManager',
  data () {
    return {
      msg: 'Contacts',
      //showUpdateModal: false,
      hideFooter: true
    }
  },
  components: {
	  ContactForm,
	  SearchContactsModal
  },
  computed: {
	  contactEntities() {
		  return this.$store.state.contactEntities;
	  }
  },
  methods: {
	  ...mapActions(['deleteContactEntity', 'getContactEntities', 'updateSelectedContact'] ),
	  deleteContact: function(id) {
		  this.deleteContactEntity(id);
		  toastr.success('Contact deleted');
	  },
	  clearSearch: function() {
		  this.$store.dispatch('getContactEntities');
	  },
	  openAdd: function() {
		  this.$store.commit('updateSelectedContact', {});
		  this.$refs.addModal.show();
	  },
	  selectContactForUpdate: function(contactEntity) {
		  this.$store.commit('updateSelectedContact', Object.assign({}, contactEntity));
		  this.$refs.updateModal.show();
	  },
	  closeUpdateModal: function() {
		  this.$refs.updateModal.hide();
	  },
	  closeAddModal: function() {
		  this.$refs.addModal.hide();
	  }
  },
  created: function () {
	  this.$store.dispatch('getContactEntities');
  }
}
</script>

<style>

</style>
