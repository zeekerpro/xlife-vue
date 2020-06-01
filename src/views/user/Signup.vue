<template>
	<div id="SIGNIN" class="d-flex flex-column align-items-center justify-content-center w-100 h-100">
		<h3> 注册 </h3>
		<x-form 
			 ref="signupForm"
			 class="w-50"
			 :submitAction="submit"
			 :isEnterSubmit="true"
			 :errors="errors"
			>
			<x-text-field
				v-model="model.username"
				label="Username" 
				name="name"
				:rules="rules.username"
				class="font-md"
				:autofocus="true"
				>
				<template v-slot:prepend>
					<div class="prepend-icon">
						<svg-icon name="xlogin" class="icon-lg"></svg-icon>
					</div>
				</template>
			</x-text-field>
			<x-text-field
				v-model="model.email"
				label="Email" 
				name="email"
				:rules="rules.email"
				class="font-md"
				>
				<template v-slot:prepend>
					<div class="prepend-icon">
						<svg-icon name="xemail" class="icon-lg"></svg-icon>
					</div>
				</template>
			</x-text-field>
			<x-text-field
				v-model="model.password"
				label="Password"
				name="password"
				:rules="rules.password"
				class="font-md"
				type="password"
				>
				<template v-slot:prepend>
					<div class="prepend-icon">
						<svg-icon name="xkey" class="icon-lg"></svg-icon>
					</div>
				</template>
			</x-text-field>
			<x-text-field
				label="PasswordConfirmation"
				name="passwordConfirmation"
				v-model="model.passwordConfirmation"
				:rules="rules.passwordConfirmation"
				type="password"
				class="font-md"
				>
				<template v-slot:prepend>
					<div class="prepend-icon">
						<svg-icon name="xkey" class="icon-lg"></svg-icon>
					</div>
				</template>
			</x-text-field>
		</x-form>
		<div class="w-50 text-right light">
			<button class="btn-link bg-transparent border-0" @click="toSignin">已有账号-> </button>
		</div>
	</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import userService from '@/services/userService';
import * as HttpStatusCodes from '@/utils/HttpStatusCodes';

export default {
	name: "signup",
	inject: ['reload'],
	data(){
		return {
			model: {
				username: "",
				email: "",
				password: "",
				passwordConfirmation: ""
			},
			rules: {
				username: [
					"required",
					v => (v && v.length >= 3) || "username 至少3个字符"
				],
				email: [
					"required",
					"email"
				],
				password: [
					"required",
					"password"
				],
				passwordConfirmation: [
					"required",
					v => (v && v == this.model.password) || "两次输入的密码不一致"
				]
			},
			errors: {}
		}
	},
	methods: {
		...mapMutations('layout',[
			'hideViewer',
			'showViewer'
		]),
		async submit(){
			let data = {
				user: {
					name: this.model.username,
					email: this.model.email,
					password: this.model.password,
					password_confirmation: this.model.passwordConfirmation
				}
			};
			let ret = await userService.signup(data);
			switch (ret.status){
				case HttpStatusCodes.OK:
					this.hideViewer();
					this.reload();
					this.$toast({
						text: "注册成功",
						duration: 2000,
						mode: 'primary'
					});
					break;
				case HttpStatusCodes.CONFLICT: // 该用户名/邮箱已经被注册
					this.errors = ret.data;
					break;
			}
		},
		toSignin(){
			this.showViewer('views/user/Signin');
		},
	}
}

</script>
