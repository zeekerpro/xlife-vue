<template>
	<div v-show="isShow" class="viewer-wrapper">
		<div id="APP-VIEWER" class="position-absolute h-100 w-75 r-0 t-0 d-flex" >
			<div class="add-on w-10 d-flex flex-column align-items-end">
				<div class="close-btn-wrapper position-relative"
						 @click="hideViewer"
					>
					<div class="close-btn d-flex align-items-center justify-content-center">
					</div>
					<iconfont name="xclose" class="font-md font-weight-bolder light position-absolute t-0 r-0"></iconfont>
				</div>
			</div>
			<div class="viewer-content h-100 flex-fill">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
	name: "XViewer",
	computed: {
		...mapState('layout', {
			isShow: (state) => {
				return state.isShowViewer;
			}
		})
	},
	methods: {
		...mapMutations('layout',[
			'hideViewer'
		])
	}
}
</script>

<style lang="scss" scoped>
$close-btn-side-length: 40px;
.close-btn-wrapper {
	width: $close-btn-side-length;
	height: $close-btn-side-length;
	perspective: $close-btn-side-length;
	cursor: pointer;	
}
.close-btn {
	width: 40px;
	height: 45px;
	background-color: rgb(0, 42, 53);
	transform-origin: right center 0px;
	transform: rotate3d(0, 1, 0, -30deg);
	box-shadow: rgba(41, 18, 18, 0.19) -5px 0px 14px 0px;
	border-right: 1px solid rgb(0, 42, 53);
}
.viewer-content{
	background-color: rgb(0, 42, 53);
}
.iconfont {
	line-height: 45px;
	transition: transform 1s ease;
	&:hover {
		transform: rotateZ(360deg);
	}
}
</style>
