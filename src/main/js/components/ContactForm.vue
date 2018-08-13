<template>


<form @submit.prevent="updateContact(selectedContact)">
<div class="modal-body">
	<div class="form-group">
		<label class="control-label" for="updateFirstName">First Name</label> 
		<input type="text" class="form-control" id="updateFirstName" name="firstName" v-model="selectedContact.firstName" required />
	</div>
	<div class="form-group">
		<label class="control-label" for="updateLastName">Last Name</label> 
		<input type="text" class="form-control" id="updateLastName" name="lastName" v-model="selectedContact.lastName" required />
	</div>
	<div class="form-group">
		<label class="control-label" for="updatePhoneNumber">Phone Number</label> 
		<input type="text" class="form-control" id="updatePhoneNumber" name="phoneNumber" v-model="selectedContact.phoneNumber"  />
	</div>
	<div class="form-group">
		<label class="control-label" for="updateEmail">Email</label> 
		<input type="text" class="form-control" id="updateEmail" name="email" v-model="selectedContact.email" />
	</div>
</div>
<div class="modal-footer">
	<input type="submit" value="Submit" class="btn btn-primary" /> 
	<input type="button" value="Reset" class="btn btn-secondary" @click="resetContact()" />
	<button type="button" class="btn btn-secondary" @click="close()" >Close</button>
</div>
</form>




</template>

<script>
import toastr from 'toastr';

export default {
  name: 'updateContactModal',
  props: ['update'],
  computed: {
	 selectedContact() {
		 return this.$store.state.selectedContact;
	 }
  },
  methods: {
	  updateContact: function(contactEntity) {
		  if(this.update) {
			  this.$store.dispatch('updateContactEntity', contactEntity);
			  toastr.success('Contact updated');
		  } else {
			  this.$store.dispatch('addContactEntity', contactEntity);
			  $('#addModal').modal('hide');
			  toastr.success('Contact added');
		  }
		  
		  this.close();
		  
	  },
	  resetContact: function() {
		  //???
	  },
	  close: function() {
		  this.$emit('close');
	  }
  }
}
</script>

<style>

</style>