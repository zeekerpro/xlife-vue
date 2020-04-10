<template>
	<div>
		<div v-for="user in users">
			<span> {{ user.name }} </span>
			<span> {{ user.email }} </span>
		</div>
	</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import UserService from '@/services/userService';

let userService = new UserService();

export default {
	name: "UserList",
	data(){
		return {
			users: null
		}
	},
	async created(){
		// get all users
		let userList = await userService.users();
		this.users = userList;
	},
	methods: {
	}
}
</script>

<style>
</style>
