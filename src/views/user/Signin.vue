<template>
	<div id="SIGNIN" class="d-flex flex-column align-items-center justify-content-center w-100 h-100">
		<h3> 登录</h3>
		<x-form class="w-50">
			<x-text-field
				label="Account" 
				:autofocus="true"
				v-model="model.username"
				class="font-lg"
				>
				<template v-slot:prepend>
					<div class="prepend-icon">
						<svg-icon name="xlogin" class="icon-lg"></svg-icon>
					</div>
				</template>
			</x-text-field>
			<x-text-field
				label="Password" 
				v-model="model.password"
				class="font-lg"
			  v-on:keyup.enter.native="submit"
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
import { mapActions, mapMutations } from 'vuex'
import userService from '@/services/userService';
import * as HttpStatusCodes from '@/utils/HttpStatusCodes';

export default {
	name: "signin",
	inject: ['reload'],
	data(){
		return {
			model: {
				username: "",
				password: ""
			},
			rules: {
				username: [
					v => !!v || 'Username is required!',
					v => (v && v.length <= 10) || "Username must be less than 10 characters"
				],
				password: [
					v => !!v || 'Password is required!',
					v => (v && v.length >= 6) || "Password must be more than 6 characters"
				]
			}
		}
	},
	methods: {
		...mapMutations('layout',[
			'hideViewer',
			'showViewer'
		]),
		async submit(event){
			event.target.blur();
			let data = {
				user: {
					account: this.model.username,
					password: this.model.password
				}
			};
			let ret = await userService.signin(data);
			switch (ret.status) {
				case HttpStatusCodes.OK: 
					// 登录成功
					this.hideViewer();
					// 刷新页面 
					this.reload();
					this.$toast({
						text: "登录成功",
						duration: 2000,
						mode: 'primary'
					});
					break;
				case HttpStatusCodes.UNAUTHORIZED:
					break;
			}
		},
		toSignup(){
			this.showViewer('views/user/Signup');
		},
	}
}

</script>
