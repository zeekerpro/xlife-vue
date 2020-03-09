<template>
	<div class="slide-box">
		<fa-icon :icon="['fas', 'sun']"></fa-icon>		
		<input type="range" :min="min" :max="max" :value="initial">
		<fa-icon :icon="['fas', 'moon']"></fa-icon>		
	</div>
</template>

<script>
export default {
	name: "RangeSlider",
	props: {
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 100
		},
		initial: {
			type: Number,
			default: 20
		}
	}
}

</script>


<style lang="scss" scoped>

</style>
