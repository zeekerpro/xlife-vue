<template>
	<div id="SIGNIN" class="d-flex flex-column align-items-center justify-content-center w-100 h-100">
		<h3> 注册 </h3>
		<x-form 
			 ref="signupForm"
			 class="w-50"
			>
			<x-text-field
				v-model="model.username"
				label="Username" 
				:rules="rules.username"
				class="font-lg"
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
				:rules="rules.email"
				class="font-lg"
				label="Email" 
				>
				<template v-slot:prepend>
					<div class="prepend-icon">
						<svg-icon name="xemail" class="icon-lg"></svg-icon>
					</div>
				</template>
			</x-text-field>
			<x-text-field
				v-model="model.password"
				:rules="rules.password"
				:required="true"
				class="font-lg"
				label="Password"
				>
				<template v-slot:prepend>
					<div class="prepend-icon">
						<svg-icon name="xkey" class="icon-lg"></svg-icon>
					</div>
				</template>
			</x-text-field>
			<x-text-field
				v-model="model.repassword"
				:rules="rules.repassword"
				type="password"
			  v-on:keyup.enter="submit"
				class="font-lg"
				label="Password Confirmation"
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
				repassword: ""
			},
			rules: {
				username: [
					v => !!v || 'Username is required!',
					v => (v && v.length <= 10) || "Username must be less than 10 characters"
				],
				email: [
					v => !!v || 'Email is required!'
				],
				password: [
					v => !!v || 'Password is required!',
					v => (v && v.length >= 6) || "Password must be more than 6 characters"
				],
				repassword: [
					v => (v && v == this.model.password) || "The password does not match"
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
					name: this.model.username,
					email: this.model.email,
					password: this.model.password,
					password_confirmation: this.model.repassword
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
					let data = ret.data;
					/*
					this.errors.username = data.name;
					this.errors.email = data.email;
					this.errors.password = data.password;
					this.errors.repassword = data.password;
					*/
					break;
			}
		},
		toSignin(){
			this.showViewer('views/user/Signin');
		},
	}
}

</script>
