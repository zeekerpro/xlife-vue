<template>
	<ValidationObserver slim 
	v-slot="observer" 
	ref="validationObserver">
	<form class="x-form" 
		ref="form" 
		@submit.prevent="observer.handleSubmit(submitAction)" 
		@keyup.enter.prevent="() => { if(isEnterSubmit){submit()} }">
		<slot></slot>
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
		isEnterSubmit: {
			type: Boolean,
			default: false 
		},
		submitAction: {
			type: Function,
			required: true
		}
	},
	components: {
		ValidationObserver
	},
	created(){
		// 监听submit事件
		this.$on('submit', this.submit);
	},
	methods: {
		submit(){
			let event = new Event('submit', {'bubbles': true, 'cancelable': true});
			this.$refs.form.dispatchEvent(event);
		},
		reset(){
		},
		validate(){
		},
	}
}
</script>
