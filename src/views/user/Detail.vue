<template>
	<div>
		this is user detail page  {{ $route.params.id }}
		emial: {{ userInfo.email }}
	</div>
</template>

<script>
import userService from '@/services/userService';
import mxUserStoreMap from '@/mixins/storeMap/user';

export default {
	name: "UserDetail",
	mixins: [mxUserStoreMap],
	data(){
		return {
		}
	},
	created(){
		console.log(this.$route.params)
	},
	methods: {
	}
}
</script>

<style>
</style>
