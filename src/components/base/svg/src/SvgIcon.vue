<template>
	<svg :class="$attrs.class" aria-hidden="true" v-on="$listeners">
		<use :xlink:href="svgName"/>
	</svg>
</template>

<script>
export default {
	name: "SvgIcon",
	props: {
		name: {
			type: String,
			required: true
		}
	},
	computed: {
		svgName(){
			if(this.name.startsWith("#svg-")){
				return this.name;
			}else{
				return `#svg-${this.name}`;
			}
		}
	}
}
</script>
