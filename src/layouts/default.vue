<template>
	<div class="container-sm">
		<div class="row">
			<x-header></x-header>
			<x-sider></x-sider>
			<router-view></router-view>
			<x-footer></x-footer>

			<div class="nav-link">
				<a href="/">click</a>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: "DefaultLayout",
	data(){
		return {
			brightness: 60
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

.container-sm{
	height: 100vh;
	background: #eee;
}

</style>
