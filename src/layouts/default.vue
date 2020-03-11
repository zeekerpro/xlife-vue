<template>
	<div class="container-md"
			 :style="{ filter: 'brightness(' + brightness + '%)'}"
		>
		<div class="row">
			<div class="range-slider">
				<range-slider v-model.number="brightness"></range-slider>
			</div>
			{{ brightness }}
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

.container-md {
	height: 100vh;
}

</style>
