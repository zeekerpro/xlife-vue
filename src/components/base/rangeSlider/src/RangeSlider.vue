<template>
	<div class="slide-box">
		<fa-icon :icon="['fas', 'sun']" class="icon"></fa-icon>		
		<input type="range" :min="min" :max="max" :value="value">
		<fa-icon :icon="['fas', 'moon']" class="icon"></fa-icon>		
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
		value: {
			type: Number,
			default: 20
		}
	}
}

</script>


<style lang="scss" scoped>

.slide-box {
	width: 100%;
	height: 100%;
	background: #f9f9f9;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;

	.icon {
		font-size: 20px;
	}

	input {
		width: 100%;
		margin: 0 20px;
		appearance: none;
		background: #0a85ff;
		height: 3px;
		outline: none;
		&::-webkit-slider-thumb{
			appearance: none;
			height: 20px;
			width: 20px;
			background: #333;
			border-radius: 50%;
			cursor: pointer;
		}
	}
}



</style>
