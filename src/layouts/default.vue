<template>
	<div class="container">
		<div class="row">
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

</style>
