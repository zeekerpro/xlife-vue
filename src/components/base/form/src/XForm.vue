<template>
	<ValidationObserver slim v-slot="observer" ref="validationObserver">
	<form class="x-form" @submit.prevent="observer.handleSubmit(onSubmit)">
		<slot></slot>
		<button type="submit" class="d-none" ref="submitBtn"></button>
	</form>
	</ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
export default {
	name: "XForm",
	props: {
		lazyValidation: {
			type: Boolean,
			default: false
		},
		valid: {
			type: Boolean,
			default: true 
		}
	},
	components: {
		ValidationObserver
	},
	data(){
		return {
			// 提交时执行的函数
			onSubmit: null
		}
	},
	created(){
		this.$on('submit', function(handler) {
			this.onSubmit = handler;
			this.$refs.submitBtn.click();
		})
	},
	methods: {
		reset(){
		},
		validate(){
		},
		setErrors(errors){
		}
	}
}
</script>
