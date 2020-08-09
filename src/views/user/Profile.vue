<template>
	<div class="profile-wrapper d-flex flex-column w-100 h-100 rounded-sm px-4 pt-4 min-vh-100 h-auto">
		<div class="profile-content d-flex flex-grow-1">
			<div class="account-info d-flex">
				<div class="avatar-wrapper d-flex flex-column mr-3">
						<router-link 
						 :to="{ name: 'userDetail', params: {id: userInfo.id} }"
							class="bg-transparent">
							<img class="avatar-image rounded shadow cursor-pointer" src="https://avatars3.githubusercontent.com/u/29775830?v=4" alt="image">
						</router-link>
				</div>
				<div class="brief-wrapper d-flex flex-column ml-1">
					<div class="user-title d-flex light">
						<span class="font-md"> {{ userInfo.name }} </span>
						<div class="operator-wrapper d-flex align-items-center w-100"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="horizontal-hr"></div>
		<div class="theme-selector"></div>



		<button v-throttle="{event: 'click', timeout: 1000, handler: signout}" ref="btn">退出登录</button>
	</div>
</template>

<script>
import userService from '@/services/userService';
import mxUserStoreMap from '@/mixins/storeMap/user';

export default {
	name: "UserProfile",
	mixins: [mxUserStoreMap],
	inject: ['reload'],
	methods: {
		signout: async () => {
			await userService.signout();
		}
	}
}
</script>

<style lang="scss" scoped>
.profile-wrapper {
	border-top: 3px solid $lighter;
}
.avatar-image {
	width: 80px;
	height: 80px;
	margin-top: 6px;
	margin-bottom: 8px;
}
</style>
