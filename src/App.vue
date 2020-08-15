<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import userService from '@/services/rest/userService';

export default {
	name: 'App',
	mounted(){
		userService.initSignState();
	},
}
</script>

<style>
</style>
