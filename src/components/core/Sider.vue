<template>
	<aside 
		id="APP-SIDEBAR" 
		:class="[isSigned ? 'open' : 'lock']"
		>
		<div class="menu-bar d-flex flex-column justify-content-start">
			<div class="menu-search"></div>
			<div class="menu-list d-flex flex-column justify-content-center align-item-center">
				<div 
					class="menu-item" 
					v-for="(item, index) in menus"
					>
				</div>
			</div>
		</div>
	</aside>
</template>

<script>
import mxUserStoreMap from '@/mixins/storeMap/user';

export default {
	name: "Sider",
	mixins: [mxUserStoreMap],
	data(){
		return {
			menus: [
				{
					label: 'x-life home',
					icon: '',
					iconType: '', // img, svg, iconfont 
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>

.open {
	width: $sidebar-width;
	border-right: $sidebar-border-right;
	background-color: $sidebar-background-color;
	@include hover(){
		@extend .shadow-lg;
		width: $sidebar-hover-width;
	}
}

.lock{
	width: 33% !important;
	background-image: url("/images/launchScreen.jpg");
	background-size: cover;	
}
</style>
