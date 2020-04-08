<template>
	<div id="SIGNIN" class="d-flex align-items-center justify-content-center w-100 h-100">
		<v-form 
			 ref="signinForm"
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
				:error-messages="errors"
				>
				<template v-slot:prepend>
					<div class="prepend-icon mr-4">
						<svg-icon name="xlogin" class="icon-lg"></svg-icon>
					</div>
				</template>
			</v-text-field>
			<v-text-field
				v-model="model.password"
				:rules="rules.password"
				:required="true"
				type="password"
				hint="password"
			  v-on:keyup.enter="submit"
				class="font-lg"
				:error-messages="errors"
				>
				<template v-slot:prepend>
					<div class="prepend-icon mr-4">
						<svg-icon name="xkey" class="icon-lg"></svg-icon>
					</div>
				</template>
			</v-text-field>
		</v-form>
	</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
	name: "signin",
	data(){
		return {
			lazy: false,
			valid: false,
			errors:[],
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
					v => (v && v.length >= 6) || "Password must be less than 6 characters"
				]
			}
		}
	},
	methods: {
		...mapActions('user', [
			'signin'
		]),
		...mapMutations('layout',[
			'hideViewer'
		]),
		async submit(){
			if(!this.valid) return;
			let data = {
				user: {
					account: this.model.username,
					password: this.model.password
				}
			};
			let ret = await this.signin(data);
			if(ret && ret.status == 401){
				this.errors.push("认证失败，用户名或密码错误");
			}
			if(ret && ret.status == 200){
				// 登录成功
				this.hideViewer();
				this.$toast({
					text: "登录成功",
					duration: 2000,
					mode: 'primary'
				})
			}
		},
		validate(){
			this.$refs.signinForm.validate();
		},
		reset(){
			this.$refs.signinForm.reset();
		},
		resetValidation(){
			this.$refs.signinForm.resetValidation();
		}
	}
}

</script>
