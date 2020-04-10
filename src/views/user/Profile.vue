<template>
	<div>
		user profile page
		<button @click="signout">退出登录</button>
	</div>
</template>

<script>
import UserService from '@/services/userService';
let userService = new UserService();

export default {
	name: "UserProfile",
	inject: ['reload'],
	methods: {
		signout: () => {
			userService.signout();
		}
	}
}
</script>
<style></style>
