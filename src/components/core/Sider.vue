<template>
	<aside 
		id="APP-SIDEBAR" 
		:class="[isSigned ? 'open' : 'lock']"
		>
		<div class="menu-bar"></div>
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
	background-image: url("/images/launchScreen.jpg");
	background-size: cover;	
	&:after {
		content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(5px);/*为了模糊更明显，调高模糊度*/
    z-index: 2;
	}
}
</style>
