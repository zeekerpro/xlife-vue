<template>
	<div class="profile-wrapper d-flex flex-column w-100 h-100 rounded-sm p-4 min-vh-100 h-auto">
		<div class="profile-content d-flex flex-column flex-grow-1">
			<div class="account-info d-flex my-4">
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
						<span class="font-lg mx-1 btn"> {{ userInfo.name }} </span>
						<div class="operator-wrapper d-flex align-items-center w-100">
							<button 
								 class="btn btn-link"
								>
								<iconfont name="xedit" class="font-md cursor-pointer mx-1"></iconfont>
							</button>
							<button
								@click="signout"
								class="btn btn-link"
								>
								<iconfont name="xpower" 
									class="font-md cursor-pointer mx-1" 
									v-tooltip.right="'signout'"
									>
								</iconfont>
							</button>
						</div>
					</div>
					<div class="social-links d-flex align-items-center w-100">
						<button
							class="btn btn-link"
							>
							<iconfont name="xgithub" class="font-md cursor-pointer mx-1"></iconfont>
						</button>
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

			<div class="adore my-4">
				<div class="adore-header d-flex mb-3">
					<div class="adore-title flex-grow-1 light-green font-bs"><span> {{adore.label}} </span></div>
					<div class="adore-count cursor-pointer light font-sm font-italic"><span> 共 {{ adore.list.length }} 个</span></div>
				</div>
				<div class="adore-list d-flex flex-wrap">
					<div class="adore-list-item" 
							 v-for="(item, index) in adore.list"
							 :key="'adore-item' + index"
						>
						<img class="adore-item-img" :src="item.src" alt="" v-tooltip="item.tip">
					</div>
				</div>
			</div>

			<div class="contribute my-4">
				<div class="contribute-header d-flex mb-3">
					<div class="contribute-title flex-grow-1 light-green font-bs"><span> {{ contribute.label }} </span></div>
				</div>
				<div class="contribute-map">
					<calendar-heatmap
						:values="contribute.data"
						:end-date="contribute.config.endDate"
						:range-color="contribute.config.rangeColor"
						:max="contribute.config.rangeColor.length"
						:no-data-text="contribute.config.noDataText"
						>
					</calendar-heatmap>
				</div>
			</div>
		</div>

		<div class="horizontal-hr"></div>

		<div class="theme-selector mb-3"></div>

		<!-- button v-throttle="{event: 'click', timeout: 1000, handler: signout}" ref="btn">退出登录</button -->

	</div>
</template>

<script>
import userService from '@/services/rest/userService';
import mxUserStoreMap from '@/mixins/storeMap/user';
import { CalendarHeatmap } from 'vue-calendar-heatmap';
import ColorUtil from '@/utils/ColorUtil.js';

export default {
	name: "UserProfile",
	components: {CalendarHeatmap},
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
			},
			adore: {
				label: '我的关注',
				list: [
					{
						src: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/javascript.png',
						tip: 'javascript',
						link: ''
					},
					{
						src: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/go.png',
						tip: 'go',
						link: ''
					},
					{
						src: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/devops/shell.png'
					},
					{
						src: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/ui/bootstrap.png'
					},
					{
						src: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/framework/weex.png'
					},
					{
						src: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/database/mongodb.png'
					},
					{
						src: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/framework/rails.png'
					},
					{
						src: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/framework/nodejs.png'
					},
					{
						src: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/framework/react.png'
					},
					{
						src: 'src="https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/framework/vue.png"'
					},
					{
						src: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/icons/pl/perl.png'
					},
				]
			},
			contribute: {
				label: '活跃度',
				data: [{date: '', count: 1}],
				config: {
					endDate: new Date(),
					rangeColor: [
						ColorUtil.rgb2hex(2, 67, 82), 
						ColorUtil.rgb2hex(3, 91, 99),
						ColorUtil.rgb2hex(0, 116, 112),
						ColorUtil.rgb2hex(4, 138, 132),
						ColorUtil.rgb2hex(5, 167, 142),
						ColorUtil.rgb2hex(1, 195, 165),
					],
					noDataText: ""
				}
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

.adore-item-img {
		fill: rgb(123, 143, 144);
    width: 26px;
    height: 26px;
    margin-right: 8px;
    margin-bottom: 3px;
    opacity: 0.6;
    transition: opacity 0.2s ease 0s;

		@include  hover(){
			cursor: pointer;
			opacity: 1;
		}

}

</style>
