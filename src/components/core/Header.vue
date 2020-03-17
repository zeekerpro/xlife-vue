<template>
	<header id="APP-HEADER">
		<div class="header-routes flex-grow-1 flex align-items-center">
			<img :src="logo.url" alt="" class="h-75">
			<a href="" class="logo-text ">{{ logo.text }}</a>
			<div class="nav-link main-entries">
				<div class="main-entry"
					v-for="(entry, index) in mainEntries" 
					>
					<router-link class="main-entry-link" 
						:to="entry.to" 
						:key="'entry-link-' + entry.id">
						{{entry.name}}
					</router-link>
					<div class="main-entry-dot" 
						:key="'entry-dot-' + entry.id" 
						v-if="index < mainEntries.length - 1">
					</div>
				</div>
			</div>
		</div>
		<div class="header-addons flex-grow-0">
		</div>
		<div class="header-operations flex-grow-0 flex align-items-center">
			<div class="header-search mr-3">
				<iconfont name="xsearch" class="header-icon"></iconfont>
			</div>
			<div class="account-wrapper">
				<iconfont name="xuser" class="header-icon"></iconfont>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	data(){
		return {
			logo: {
				url: require("@/assets/images/logo.png"),
				text: "x-life"
			},
			mainEntries: [
				{
					id: 1,
					name: "首页",
					to: ""
				},
				{
					id: 2,
					name: "社区",
					to: ""
				},
				{
					id: 3,
					name: "专栏",
					to: ""
				},
				{
					id: 4,
					name: "团队",
					to: ""
				}
			]
		}
	}
}
</script>
