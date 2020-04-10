<template>
	<div v-if="show" :class="['toast', fade ? 'fadein' : 'fadeout', mode]">
		{{text}}
	</div>
</template>

<script>
export default {
	name: "XToast",
	data(){
		return {
			text: "",
			show: true,
			fade: true,
			mode: "primary"
		}
	}
}
</script>

<style lang="scss" scoped>
.toast {
	position: fixed;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 1.2rem 2rem;
	border-radius: 5px;
	text-align: center;
}
.primary {
	background: rgba(113, 128, 147, .9);
	color: #fff;
}
.warning {
	background: rgba(236, 204, 104, .9);
	color: #fff;
}
.fadein {
	animation: animate_in 1s;
}
.fadeout {
	animation: animate_out 1s;
	opacity: 0;
}
@keyframes animate_in {
	0%{
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes animate_out {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
</style>
