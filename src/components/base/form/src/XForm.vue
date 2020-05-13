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
		},
		submit: {
			type: Function,
			required: false,
			default: null
		}
	},
	components: {
		ValidationObserver
	},
	created(){
		this.$on('submit', function() {
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
