<template>
   <b-container fluid id="app">
  <header>
  <b-navbar toggleable="md" type="dark" variant="info">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  	<b-navbar-brand href="#">Contacts</b-navbar-brand>
  	<b-collapse is-nav id="nav_collapse">
  	<b-navbar-nav>
    <b-nav-item>
  	<router-link class="nav-link" :to="{name: 'Contacts'}" exact>
  		Home
  	</router-link>
  		</b-nav-item>
  		<b-nav-item>
  	<router-link class="nav-link" :to="{name: 'Vue-Tables-2'}" exact>
  		Vue-Tables-2
  	</router-link>
  		</b-nav-item>
  		</b-navbar-nav>
  		</b-collapse>
  	</b-navbar>
  </header>
  <main>
  	<router-view />
  </main>
  </b-container>

</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
.container-fluid {
	padding: 0;
}

</style>
