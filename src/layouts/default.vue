<template>
	<div class="container-xxl position-relative">
		<div class="row h-100 min-vh-100 ">
			<x-sider></x-sider>
			<div class="content-wrapper">
				<x-header></x-header>
				<x-banner></x-banner>
				<div id="APP-MAIN-CONTENT">
					<router-view v-if="isRouterAlive"></router-view>
				</div>
				<x-footer></x-footer>
			</div>
			<x-viewer>
				<async-component :path="viewerComponent"></async-component>
			</x-viewer>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex';

export default {
	name: "DefaultLayout",
	provide () {
    return {
      reload: this.reload
    }
  },
	data(){
		return {
			isRouterAlive: true
		}
	},
	components: {
		xHeader: () => import('@/components/core/Header'),
		xBanner: () => import('@/components/core/Banner'),
		xFooter: () => import('@/components/core/Footer'),
		xSider: () => import('@/components/core/Sider'),
		xViewer: () => import('@/components/core/Viewer'),
	},
	computed: {
		...mapState('layout', {
			viewerComponent: (state) => {
				return state.viewerComponent;
			}
		})
	},
	methods: {
		reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
	}
}
</script>
