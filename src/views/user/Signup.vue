<template>
	<div id="SIGNIN" class="d-flex flex-column align-items-center justify-content-center w-100 h-100">
		<h3> 注册 </h3>
		<v-form 
			 ref="signupForm"
			 :lazy-validation="lazy"
			 v-model="valid"
			 class="w-50"
			>
			<v-text-field
				v-model="model.username"
				:rules="rules.username"
				:required="true"
				hint="username"
				:autofocus="true"
				class="font-lg"
				:error-messages="errors.username"
				>
				<template v-slot:prepend>
					<div class="prepend-icon mr-4">
						<svg-icon name="xlogin" class="icon-lg"></svg-icon>
					</div>
				</template>
			</v-text-field>
			<v-text-field
				v-model="model.email"
				:rules="rules.email"
				:required="true"
				hint="email"
				class="font-lg"
				:error-messages="errors.email"
				>
				<template v-slot:prepend>
					<div class="prepend-icon mr-4">
						<svg-icon name="xemail" class="icon-lg"></svg-icon>
					</div>
				</template>
			</v-text-field>
			<v-text-field
				v-model="model.password"
				:rules="rules.password"
				:required="true"
				type="password"
				hint="password"
				class="font-lg"
				:error-messages="errors.password"
				>
				<template v-slot:prepend>
					<div class="prepend-icon mr-4">
						<svg-icon name="xkey" class="icon-lg"></svg-icon>
					</div>
				</template>
			</v-text-field>
			<v-text-field
				v-model="model.repassword"
				:rules="rules.repassword"
				:required="true"
				type="password"
				hint="repeat password"
			  v-on:keyup.enter="submit"
				class="font-lg"
				:error-messages="errors.repassword"
				>
				<template v-slot:prepend>
					<div class="prepend-icon mr-4">
						<svg-icon name="xkey" class="icon-lg"></svg-icon>
					</div>
				</template>
			</v-text-field>
		</v-form>
		<div class="w-50 text-right light">
			<button @click="toSignin">已有账号-> </button>
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
			lazy: false,
			valid: false,
			errors: {
				username: [],
				email: [],
				password: [],
				repassword: []
			},
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
			if(!this.valid) return;
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
					this.errors.username = data.name;
					this.errors.email = data.email;
					this.errors.password = data.password;
					this.errors.repassword = data.password;
					break;
			}
		},
		toSignin(){
			this.showViewer('views/user/Signin');
		},
		validate(){
			this.$refs.signupForm.validate();
		},
		reset(){
			this.$refs.signupForm.reset();
		},
		resetValidation(){
			this.$refs.signupForm.resetValidation();
		}
	}
}

</script>
