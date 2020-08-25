<template>
	<div class="profile-wrapper d-flex flex-column w-100 h-100 rounded-sm p-4 min-vh-100 h-auto">
		<div class="profile-content d-flex flex-column flex-grow-1">
			<div class="account-info d-flex">
				<div class="avatar-wrapper d-flex flex-column mr-3">
						<router-link 
						 :to="{ name: 'userDetail', params: {id: userInfo.id} }"
							class="bg-transparent"
							>
								<img 
									class="avatar-image rounded shadow cursor-pointer" 
									src="https://avatars3.githubusercontent.com/u/29775830?v=4" 
									alt="image"
								>
						</router-link>
				</div>
				<div class="brief-wrapper d-flex flex-column ml-1">
					<div class="user-title d-flex light">
						<span class="font-md mx-1"> {{ userInfo.name }} </span>
						<div class="operator-wrapper d-flex align-items-center w-100">
							<iconfont name="xedit" class="font-md cursor-pointer mx-1"></iconfont>
							<iconfont name="xpower" class="font-md cursor-pointer mx-1"></iconfont>
						</div>
					</div>
					<div class="social-links d-flex align-items-center w-100">
							<iconfont name="xgithub" class="font-md cursor-pointer mx-1"></iconfont>
					</div>
				</div>
			</div>

			<div class="site-social my-4">
				<div class="achieve mx-1 d-flex">
					<div 
						v-for="(item, key) in social.sections"
						:key="key"
						class="num-section 
									d-flex flex-column justify-content-center align-items-center flex-fill
									p-4 light-green"
						>
							<div class="num-section-label font-bs">{{ item.label }}</div>
							<div class="num-section-value font-lg font-weight-bold font-italic">{{ item.value }}</div>
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
import userService from '@/services/rest/userService';
import mxUserStoreMap from '@/mixins/storeMap/user';

export default {
	name: "UserProfile",
	mixins: [mxUserStoreMap],
	inject: ['reload'],
	data(){
		return {
			social: {
				sections: {
					repulation: {
						label: '声望',
						value: 10
					},
					follower: {
						label: '关注者',
						value: 10
					},
					following: {
						label: '关注中',
						value: 10
					},
					thumbUp: {
						label: '点赞',
						icon: '',
						value: 10,
					},
					collect: {
						label: '收藏',
						icon: '',
						value: 10
					},
				},
			}
		}
	},
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
.site-social {
	border-top: 1px solid rgba($lighter, 0.3);
	border-bottom: 1px solid rgba($lighter, 0.3);
}

.num-section {
	border-right: 1px solid rgba($lighter, 0.3);
	&:last-child {
		border: none;
	}
}

</style>
