<template>
	<div>
		user profile page
		<button @click="signout">退出登录</button>
	</div>
</template>

<script>
import userService from '@/services/userService';

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
