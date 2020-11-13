<template>
	<img 
		:data-src="src" 
		:alt="alt" 
		class="lazyload"
	>
</template>

<script>
/**
添加图片懒加载依赖
	doc: https://github.com/aFarkas/lazysizes
*/
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

export default {
	name: "LazyImg",
	props: {
		src: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			default: ''
		}
	}
}

</script>
