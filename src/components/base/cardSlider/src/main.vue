<template>
<div class="card-slider">

	<!-- slide control button -->
	<div class="control prev">
		<button class="btn-icon">
			<span class="iconfont"></span>
		</button>
	</div>
	<div class="control next">
		<button class="btn-icon">
			<span class="iconfont"></span>
		</button>
	</div>

	<!-- slider content-->
	<div class="slider-content">
		<ul>
			<li v-for="item in items"></li>
		</ul>
	</div>

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
		},
		startItemIndex: {
			type: Number,
			default: 0 // 默认显示第一个item
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
