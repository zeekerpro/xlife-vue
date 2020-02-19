<template>
<div class="card-slider">
</div>
</template>

<script>
export default {
	name: "cardSlider",
	props: {
		items: {
			type: Array,
			required: true
		},
		showCount: {
			type: Number,
			default: 3
		},
		interval: {
			type: Number,
			default: 1000 // 1s
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
