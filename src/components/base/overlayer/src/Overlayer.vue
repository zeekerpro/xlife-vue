<template>
<div class="overlayer" v-show="isShow"></div>
</template>

<script>
export default {
	name: "Overlayer",
	props: {
		isShow: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped>
.overlayer {
	@include merge_class(fixed-top, fixed-bottom,overflow-auto);
}
</style>
