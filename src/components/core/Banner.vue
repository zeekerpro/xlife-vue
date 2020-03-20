<template>
	<nav id="APP-BANNER">
		<div class="banner-content px-5 py-2 flex align-items-center">
			<div class="banner-logo mr-2">
				<svg-icon :name="bannerLogo" class="icon-xxl"></svg-icon>
			</div>
			<div class="banner-info flex-fill">
				<h4 class="light">{{bannerTitle}}</h4>
				<span class="light-green">{{bannerDesc}}</span>
			</div>
			<div class="banner-sections flex align-items-center justify-content-around light-green text-center">
				<div class="banner-section flex" 
					v-for="(section, index) in bannerSections" 
					:key="'banner-section-' + section.id" >

					<div class="section-content flex flex-column justifu-content-center px-2">
						<h6 class="section-key font-sm my-0">{{section.key}}</h6>
						<span class="text-center font-lg">{{section.value}}</span>
					</div>
					
					<div class="vertical-hr mx-3" v-if=" index < bannerSections.length - 1"></div>

				</div>
			</div>
		</div>
		<div class="banner-tabs"></div>
	</nav>
</template>

<script>
export default {
	name: "Banner",
	data(){
		return{
			bannerLogo: "xmoney-making",
			bannerTitle: "banner tile",
			bannerDesc: "banner description",
			bannerSections: [
				{
					id: 1,
					key: "关注",
					value: "56"
				},
				{
					id: 2,
					key: "内容",
					value: "56"
				},
				{
					id: 3,
					key: "编辑",
					value: "0"
				}
			],
			tabs: [
				{
					id: 1,
					icon: "xdocument",
					name: "帖子",
					route: {
						pathname: "",
						params: {},
						hash: ""
					}
				},
				{
					id: 2,
					icon: "xdocument",
					name: "帖子",
					route: {
						pathname: "",
						params: {},
						hash: ""
					}
				},
				{
					id: 3,
					icon: "xdocument",
					name: "帖子",
					route: {
						pathname: "",
						params: {},
						hash: ""
					}
				},
				{
					id: 4,
					icon: "xdocument",
					name: "帖子",
					route: {
						pathname: "",
						params: {},
						hash: ""
					}
				},
				{
					id: 5,
					icon: "xdocument",
					name: "帖子",
					route: {
						pathname: "",
						params: {},
						hash: ""
					}
				},
				{
					id: 6,
					icon: "xdocument",
					name: "帖子",
					route: {
						pathname: "",
						params: {},
						hash: ""
					}
				},
				{
					id: 7,
					icon: "xdocument",
					name: "帖子",
					route: {
						pathname: "",
						params: {},
						hash: ""
					}
				},
			]
		}
	}
}
</script>
