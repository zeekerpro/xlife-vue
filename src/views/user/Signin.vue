<template>
	<div id="SIGNIN" class="d-flex flex-column align-items-center justify-content-center w-100 h-100">
		<h3> 登录</h3>
		<x-form 
			class="signin-form w-50" 
			:submitAction="submit"
			:isEnterSubmit="true"
			:errors="errors"
			ref="form"
			>
			<x-text-field
				label="Account" 
				name="account"
				:autofocus="true"
				v-model="model.account"
				class="font-md"
				:rules="rules.account"
				>
				<template v-slot:prepend>
					<div class="prepend-icon">
						<svg-icon name="xlogin" class="icon-lg"></svg-icon>
					</div>
				</template>
			</x-text-field>
			<x-text-field
				label="Password" 
				name="password"
				v-model="model.password"
				class="font-md"
				type="password"
				:rules="rules.password"
				>
				<template v-slot:prepend>
					<div class="prepend-icon">
						<svg-icon name="xkey" class="icon-lg"></svg-icon>
					</div>
				</template>
			</x-text-field>
		</x-form>
		<div class="w-50 text-right light">
			<button class="btn-link bg-transparent border-0" @click="toSignup">没有账号 -></button>
		</div>
	</div>
</template>

<script>
import userService from '@/services/rest/userService';
import * as HttpStatusCodes from '@/utils/HttpStatusCodes';
import mxLayoutStoreMap from '@/mixins/storeMap/layout';

export default {
	name: "signin",
	inject: ['reload'],
	mixins: [mxLayoutStoreMap],
	data(){
		return {
			model: {
				account: "",
				password: ""
			},
			rules: {
				account: [
					'required',
				],
				password: [
					'required',
				]
			},
			errors: {}
		}
	},
	methods: {
		async submit(){
			let data = {
				user: { account: this.model.account, password: this.model.password }
			};
			try {
				await userService.signin(data);
				// 登录成功
				this.hideViewer();
				//this.$toast({ text: "登录成功", duration: 2000, mode: 'primary' });
				// 获取用户路由权限数据
				userService.getRoutes();
			}catch(e){
				this.errors = { account: [e.message], password: [e.message] };
			}
		},
		toSignup(){
			this.showViewer('views/user/Signup');
		}
	}
}

</script>
