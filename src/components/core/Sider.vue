<template>
	<aside 
		id="APP-SIDEBAR" 
		:class="[isSigned ? 'open' : 'lock']"
	>
		<div class="menu-bar">
		</div>
	</aside>
</template>

<script>
import mxUserStoreMap from '@/mixins/storeMap/user';

export default {
	name: "Sider",
	mixins: [mxUserStoreMap],
}
</script>

<style lang="scss" scoped>

#APP-SIDEBAR {
	@include merge_class(flex-column, position-fixed, t-0, h-100);
	z-index: $sidebar-z-index;
	@include transition($sidebar-transition);
	background-color: $sidebar-background-color;
}

.open {
	width: $sidebar-width;
	border-right: $sidebar-border-right;
	@include hover(){
		@include merge_class(w-10, shadow-lg);
		width: $sidebar-hover-width;
	}
}

.lock{
	width: 40% !important;
}
</style>
