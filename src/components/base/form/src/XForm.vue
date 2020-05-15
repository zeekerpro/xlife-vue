<template>
	<ValidationObserver slim v-slot="observer" ref="validationObserver">
	<form class="x-form" @submit.prevent="observer.handleSubmit(onSubmit)" ref="form" @keyup.enter="doSubmit">
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
	data(){
		return {
			// 提交时执行的函数
			onSubmit: null
		}
	},
	created(){
		this.onSubmit = this.submitAction;
	},
	methods: {
		doSubmit(){
			if(this.isEnterSubmit){
				// 触发form的submit事件 
				let event = new Event('submit', {'bubbles': true, 'cancelable': true});
				this.$refs.form.dispatchEvent(event);
			}
		},
		reset(){
		},
		validate(){
		},
	}
}
</script>
