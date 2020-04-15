<template>
	<from class="v-form">
		<slot></slot>
	</from>
</template>

<script>
export default {
	name: "XForm",
	props: {
		lazyValidation: {
			type: Boolean,
			default: false
		},
		// 表示表单有效性
		value: {
			type: Boolean,
			default: true 
		}
	},
	methods: {
		reset(){},
		resetValidation(){},
		validate(){}
	}
}
</script>
