<template>
	<div class="container-md">
		<div class="row">
			<div class="range-slider">
				<range-slider></range-slider>
			</div>
			<x-header></x-header>
			<x-sider></x-sider>
			<router-view></router-view>
			<x-footer></x-footer>
		</div>
	</div>
</template>

<script>
export default {
	name: "DefaultLayout",
	data(){
		return {
		}
	},
	components: {
		xHeader: () => import('@/components/core/Header'),
		xFooter: () => import('@/components/core/Footer'),
		xSider: () => import('@/components/core/Sider')
	}
}
</script>

<style lang="scss">


.range-slider {
	width: 400px;
	height: 20px;
}

</style>
