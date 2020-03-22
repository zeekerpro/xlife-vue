<template>
	<i :class="['iconfont', name, $attrs.class]"></i>
</template>

<script>
export default {
	name: "Iconfont",
	props: {
		name: {
			type: String,
			required: true
		}
	}
}
</script>
