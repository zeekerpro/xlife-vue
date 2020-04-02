<template>
	<div class="container-xxl position-relative">
		<div class="row h-100 min-vh-100 ">
			<x-sider></x-sider>
			<div class="content-wrapper">
				<x-header></x-header>
				<x-banner></x-banner>
				<div id="APP-MAIN-CONTENT">
					<router-view></router-view>
				</div>
				<x-footer></x-footer>
			</div>
			<x-viewer>
				<router-view name="viewer"></router-view>
			</x-viewer>
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
		xBanner: () => import('@/components/core/Banner'),
		xFooter: () => import('@/components/core/Footer'),
		xSider: () => import('@/components/core/Sider'),
		xViewer: () => import('@/components/core/Viewer'),
	}
}
</script>
