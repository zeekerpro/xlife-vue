<template>
	<nav id="APP-BANNER" class="px-5 position-relative">
		<div class="banner-content py-2 d-flex align-items-center">
			<div class="banner-logo mr-2">
				<svg-icon :name="bannerLogo" class="icon-xxl"></svg-icon>
			</div>
			<div class="banner-info flex-fill">
				<h4 class="light">{{bannerTitle}}</h4>
				<span class="light-green">{{bannerDesc}}</span>
			</div>
			<div class="banner-sections d-flex align-items-center justify-content-around light-green text-center">
				<div class="banner-section d-flex" 
					v-for="(section, index) in bannerSections" 
					:key="'banner-section-' + section.id" >

					<div class="section-content d-flex flex-column justifu-content-center px-2">
						<h6 class="section-key font-sm my-0">{{section.key}}</h6>
						<span class="text-center font-lg">{{section.value}}</span>
					</div>
					
					<div class="vertical-hr mx-3" v-if=" index < bannerSections.length - 1"></div>

				</div>
			</div>
		</div>
		<div class="banner-tabs d-flex align-items-start position-absolute b-0 pb-2">
			<a href="#" 
				class="tab text-center font-bs" 
				v-for="(tab, index) in tabs" 
				:key="'banner-tab-' + tab.id"
				@click="activateTab(index)"
				>
				<iconfont :name="tab.icon" class="tab-icon mr-1"></iconfont>
				<span class="tab-name">{{ tab.name }}</span>
			</a>
			<div class="tab-ink-bar position-absolute b-0"
					 :style="tabInkBarStyle"
				></div>
		</div>
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
			],
			activeTabIndex: 0
		}
	},
	methods: {
		activateTab: function(tabIndex){
			this.activeTabIndex = tabIndex;
		},
	},
	computed: {
		tabInkBarStyle: function() {
			return {
				transform: "translateX(" + 112 * this.activeTabIndex + "px)"
			}
		}
	}
}
</script>
