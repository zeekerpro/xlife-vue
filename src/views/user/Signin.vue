<template>
	<div>
			login page
			<button @click="signin">sigin in</button>
	</div>
</template>

<script>

import userService from "@/services/userService" 

export default {
	name: "signin",
	data(){
		return {}
	},
	methods: {
		async signin(){
			let data = {
				user: {
					account: "user2",
					password: "123123"
				}
			};
			let ret = await userService.signin(data);
			console.log(ret);
		}
	}

}

</script>

<style></style>
