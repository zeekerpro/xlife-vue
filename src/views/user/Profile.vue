<template>
	<div>
		user profile page
		<button v-throttle="{event: 'click', timeout: 1000, handler: signout}" ref="btn">退出登录</button>
	</div>
</template>

<script>
import userService from '@/services/userService';

export default {
	name: "UserProfile",
	inject: ['reload'],
	methods: {
		signout: async () => {
			await userService.signout();
		}
	}
}
</script>

<style></style>
